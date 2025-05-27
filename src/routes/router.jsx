import Contact from "@/components/dashboard/Contact";
import { ContactLayout, ContactSubLayout } from "@/layout/contact-layout";
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
        path: "contact",
        element: <ContactLayout />,
        children: [
          {
            path: ":id/customer-details",
            element: <ContactSubLayout />,
            children: [
              {
                index: true,
                element: <h1>customer details</h1>,
              },
              {
                path: "meeting",
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
              {
                path: "edit",
                element: <h1>edit details</h1>,
              },
            ],
          },
          {
            path: ":id/activity",
            element: <h1>activity details</h1>,
          },
          {
            path: ":id/docs",
            element: <h1>docs details</h1>,
          },
          {
            path: ":id/sales",
            element: <h1>sales details</h1>,
          },
        ],
      },
    ],
  },
]);
