import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex items-start h-screen overflow-hidden bg-[dashboard-background]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col w-full h-screen overflow-y-auto">
        <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <div
          className={`h-full ${
            location.pathname.includes("/dashboard/setting") ||
            location.pathname.includes("/dashboard/messages")
              ? "p-0"
              : "p-8"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
