import DashboardLayout from "@/layout/layout";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
