import { useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { X } from "lucide-react";
import Logo from "@/assets/svg/logo";
import Home from "@/assets/svg/home";
import Contact from "@/assets/svg/contact";
import Note from "@/assets/svg/note";
import Tasting from "@/assets/svg/tasting";
import Docs from "@/assets/svg/docs";
import Map from "@/assets/svg/map";
import Tags from "@/assets/svg/tags";
import Importex from "@/assets/svg/importex";
import Subscription from "@/assets/svg/subscription";
import Faq from "@/assets/svg/faq";
import Support from "@/assets/svg/support";
import Setting from "@/assets/svg/setting";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpen]);
  //test

  //test
  const sidebars = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Contact", icon: Contact, path: "/exchange-request" },
    { label: "Notes", icon: Note, path: "/favourite" },
    { label: "Tasting", icon: Tasting, path: "/messages" },
    { label: "Docs", icon: Docs, path: "/notification" },
    { label: "Map", icon: Map, path: "/setting" },
    { label: "Tags", icon: Tags, path: "/tags" },
    { label: "Import/Export", icon: Importex, path: "/importexport" },
    { label: "Subscription", icon: Subscription, path: "/subscription" },
    { label: "FAQ", icon: Faq, path: "/faq" },
    { label: "Support", icon: Support, path: "/support" },
    { label: "Settings", icon: Setting, path: "/setting" },
  ];

  return (
    <div
      ref={sidebarRef}
      className={`border-r border-[#E8E8E8] px-5 md:px-6 lg:px-8 py-3 flex-shrink-0 h-full fixed top-0 xl:static xl:shadow-none bg-white z-10 duration-500 ${
        !sidebarOpen ? "-left-full" : "left-0 shadow-lg"
      }`}
    >
      <div className="flex flex-col h-full justify-between">
        {/* Logo and close */}
        <div className="flex flex-col gap-10 sm:gap-14 md:gap-16 lg:gap-10 items-center">
          <div className="flex items-center justify-between gap-4 w-full">
            <Logo className="w-28 md:w-32 lg:w-[153px]" />
            <button
              onClick={() => setSidebarOpen(false)}
              className="xl:hidden text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col gap-2 md:gap-1 w-full">
            {sidebars.map((sidebar, index) => {
              const Icon = sidebar.icon;

              return (
                <NavLink
                  key={index}
                  to={sidebar.path}
                  className={({ isActive }) =>
                    `relative group flex items-center gap-2 rounded-r-[8px] pl-10 pr-4 py-2 overflow-hidden
    ${
      isActive
        ? "bg-primary text-white font-semibold"
        : "text-[#B1B1B1] hover:text-white"
    }`
                  }
                  end
                >
                  {/* Background hover/active bar */}
                  <span
                    className={`
      absolute inset-y-0 left-0 w-screen z-[-1]
      transition-all duration-200
      ${
        sidebar.path === window.location.pathname
          ? "bg-primary"
          : "group-hover:bg-primary"
      }
    `}
                  />
                  <Icon className="w-5 h-5 stroke-current" />
                  <span
                    className={`
      font-poppins text-[14px] leading-[164%] capitalize z-10
      ${
        sidebar.path === window.location.pathname
          ? "text-white font-semibold"
          : "text-[#B1B1B1] group-hover:text-white"
      }
    `}
                  >
                    {sidebar.label}
                  </span>
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Bottom Profile Card */}
        <div className="bg-[#F4F4F4] p-3 rounded-xl flex flex-col items-center gap-3 w-full mt-auto ">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-800">
              Dila Adiha Sani
            </p>
            <p className="text-xs text-gray-500">Sales Person</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
