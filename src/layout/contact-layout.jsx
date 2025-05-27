import EditIcon from "@/assets/svg/editIcon";
import MeetingIcon from "@/assets/svg/meeting";
import NotesIcon from "@/assets/svg/notes";
import TaskIcon from "@/assets/svg/taskIcon";
import TastingIcon from "@/assets/svg/tastingIcon";
import { useIsProspectDetails } from "@/hooks/hasNestedRoute";
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
    icon: <MeetingIcon />,
  },
  {
    path: "task",
    icon: <TaskIcon />,
  },
  {
    path: "notes",
    icon: <NotesIcon />,
  },
  {
    path: "tasting",
    icon: <TastingIcon />,
  },
  {
    path: "edit",
    icon: <EditIcon />,
  },
];

export function ContactLayout() {
  return (
    <div>
      <div>
        <HeaderLayout />
      </div>
      <Outlet />
    </div>
  );
}

export function ContactSubLayout() {
  const { id } = useParams();
  const location = useLocation();
  return (
    <div>
      <div className="flex items-center gap-14 mt-5 px-6">
        {subRoutes.map((route, index) => (
          <NavLink
            key={index}
            to={`/contact/${id}/customer-details/${route.path}`}
            className={({ isActive }) =>
              `flex items-center flex-col gap-2 cursor-pointer p-2 rounded-lg ${
                isActive
                  ? "text-primary stroke-primary"
                  : "text-text-paragraph stroke-text-paragraph"
              }`
            }
            state={{ from: location.pathname, isNew: true }}
          >
            {route.icon}
            <span className="text-xs font-poppins capitalize">
              {route.path}
            </span>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

function HeaderLayout() {
  const { id } = useParams();
  const isProspectDetails = useIsProspectDetails("prospect-details");
  const location = useLocation();

  const filteredRoutes = isProspectDetails
    ? [contactMainRoutes[0]]
    : contactMainRoutes;

  return (
    <div>
      <div className="flex items-center gap-5 mb-9">
        {filteredRoutes.map((route, index) => (
          <NavLink
            key={index}
            to={`/contact/${id}/${route.path}`}
            className={({ isActive }) =>
              `text-2xl font-semibold h-[75px] w-[260px] rounded-xl flex items-center justify-center font-poppins border-2 border-primary text-primary ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
            state={{ from: location.pathname, isNew: true }}
          >
            {route.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
