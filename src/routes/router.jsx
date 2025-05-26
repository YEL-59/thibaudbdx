import Contact from "@/components/dashboard/Contact";
import ContactLayout from "@/layout/contact-layout";
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
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "contact/prospect-details/:id",
        element: <ContactLayout />,
        children: [
          {
            index: true,
            element: <h1>prospect details</h1>,
          },
        ],
      },
    ],
  },
]);
