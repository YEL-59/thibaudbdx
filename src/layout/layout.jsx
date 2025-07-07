import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex items-start bg-[dashboard-background]">
      <div className="xl:w-[312px]">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className="flex flex-col w-full overflow-x-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <div
          className={`h-full ${
            location.pathname.includes("/dashboard/setting") ||
            location.pathname.includes("/dashboard/messages")
              ? "p-0"
              : "lg:p-8"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
