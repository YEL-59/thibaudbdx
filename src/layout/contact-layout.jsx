import EditIcon from "@/assets/svg/editIcon";
import MeetingIcon from "@/assets/svg/meeting";
import NotesIcon from "@/assets/svg/notes";
import TaskIcon from "@/assets/svg/taskIcon";
import TastingIcon from "@/assets/svg/tastingIcon";
import SideSection from "@/components/dashboard/Contact/CustomerDetails/SideSection";
import { useIsProspectDetails } from "@/hooks/hasNestedRoute";
import { cn } from "@/lib/utils";
import React from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router";

const contactMainRoutes = [
  {
    path: "customer-details",
    text: "Contact",
  },
  {
    path: "activity",
    text: "Activity",
  },
  {
    path: "docs",
    text: "Docs",
  },
  {
    path: "sales",
    text: "Sales",
  },
];

const subRoutes = [
  {
    path: "meeting",
    icon: <MeetingIcon  className={"w-[20px] lg:w-[34px] h-[20px] lg:h-[34px]"} />,
  },
  {
    path: "task",
    icon: <TaskIcon className={"w-[20px] lg:w-[34px] h-[20px] lg:h-[34px]"}/>,
  },
  {
    path: "notes",
    icon: <NotesIcon className={"w-[20px] lg:w-[34px] h-[20px] lg:h-[34px]"}/>,
  },
  {
    path: "tasting",
    icon: <TastingIcon className={"w-[20px] lg:w-[34px] h-[20px] lg:h-[34px]"}/>,
  },
  {
    path: "edit",
    icon: <EditIcon className={"w-[20px] lg:w-[34px] h-[20px] lg:h-[34px]"}/>,
  },
];

export function ContactLayout() {
  const location = useLocation();
  const isCustomerDetails = location.pathname.endsWith("/customer-details");

  return isCustomerDetails ? <CustomerDetailsLayout /> : <DefaultLayout />;
}

function DefaultLayout() {
  return (
    <div>
      <div>
        <HeaderLayout />
      </div>
      <Outlet />
    </div>
  );
}
function CustomerDetailsLayout() {
  return (
    <div className="flex gap-10 lg:gap-6">
      <div className="w-full lg:w-2/3">
        <HeaderLayout />
        <Outlet />
      </div>
      <div className="hidden lg:flex lg:flex-1">
        <SideSection />
      </div>
    </div>
  );
}

export function ContactSubLayout() {
  const { id: contactId } = useParams();
  const location = useLocation();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3 justify-between lg:justify-start lg:gap-14 mt-5 px-6">
        {subRoutes.map(({ path, icon }, index) => (
          <NavLink
            key={index}
            to={`/contact/${contactId}/customer-details/${path}`}
            className={({ isActive }) =>
              cn(
                "flex items-center flex-col gap-2 cursor-pointer p-2 rounded-lg",
                isActive
                  ? "text-primary stroke-primary"
                  : "text-text-paragraph stroke-text-paragraph"
              )
            }
            state={{ from: location.pathname, isNew: true }}
          >
            {icon}
            <span className="text-xs font-poppins capitalize">{path}</span>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

function HeaderLayout() {
  const { id } = useParams();
  const isProspectDetails = useIsProspectDetails();
  const location = useLocation();

  const routesToDisplay = isProspectDetails
    ? [contactMainRoutes[0]]
    : contactMainRoutes;

  return (
    <div>
      <div className="flex items-center gap-5 mt-4 mb-9 px-5">
        {routesToDisplay.map(({ path, text }, index) => (
          <NavLink
            key={index}
            to={`/contact/${id}/${path}`}
            className={({ isActive }) =>
              `text-sm lg:text-2xl font-semibold lg:h-[75px] lg:w-[260px] rounded lg:rounded-xl flex items-center justify-center font-poppins border-2 border-primary text-primary px-2 ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
            state={{ from: location.pathname, isNew: true }}
          >
            {text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
