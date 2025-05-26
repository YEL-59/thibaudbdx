import EditIcon from "@/assets/svg/editIcon";
import MeetingIcon from "@/assets/svg/meeting";
import NotesIcon from "@/assets/svg/notes";
import TaskIcon from "@/assets/svg/taskIcon";
import TastingIcon from "@/assets/svg/tastingIcon";
import { useIsProspectDetails } from "@/hooks/hasNestedRoute";
import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router";

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

function ContactLayout() {
  return (
    <div>
      <div>
        <HeaderLayout />
      </div>
      <Outlet />
    </div>
  );
}

export default ContactLayout;

function HeaderLayout() {
  const { id } = useParams();
  const location = useLocation();
  const isProspectDetails = useIsProspectDetails("prospect-details");
  return (
    <div>
      <div className="flex items-center gap-5 mb-9">
        <ButtonButton text="Contact" />
        {!isProspectDetails && (
          <>
            <ButtonButton2 text="Activity" />
            <ButtonButton2 text="Docs" />
            <ButtonButton2 text="Sales" />
          </>
        )}
      </div>
      <div>
        <div className="flex items-center gap-14 mt-5 px-6">
          {subRoutes.map((route, index) => (
            <Link
              key={index}
              to={`/contact/${route.path}/${id}`}
              className="flex items-center flex-col gap-2 cursor-pointer p-2 rounded-lg"
              state={{ from: location.pathname, isNew: true }}
            >
              {route.icon}
              <span className="text-xs font-poppins text-text-paragraph capitalize">
                {route.path}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ButtonButton({ text = "Button" }) {
  return (
    <button className="text-2xl font-semibold bg-primary text-white h-[75px] w-[260px] rounded-xl flex items-center justify-center font-poppins border-2 border-transparent">
      {text}
    </button>
  );
}
function ButtonButton2({ text = "Button" }) {
  return (
    <button className="text-2xl font-semibold h-[75px] w-[260px] rounded-xl flex items-center justify-center font-poppins border-2 border-primary text-primary">
      {text}
    </button>
  );
}
