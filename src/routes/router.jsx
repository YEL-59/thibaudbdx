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
        path: "contact/:section/:id",
        element: <ContactLayout />,
        children: [
          {
            path: "prospect-details",
            element: <h1>prospect details</h1>,
          },
          {
            index: "meeting",
            element: <h1>meeting details</h1>,
          },
          {
            path: "task",
            element: <h1>task details</h1>,
          },
          {
            path: "notes",
            element: <h1>notes details</h1>,
          },
          {
            path: "tasting",
            element: <h1>tasting details</h1>,
          },
        ],
      },
    ],
  },
]);
