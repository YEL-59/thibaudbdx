import Contact from "@/components/dashboard/Contact";
import ActivityPage from "@/components/dashboard/Contact/Activity/ActivityPage";
import DocsPage from "@/components/dashboard/Contact/Docs/DocsPage";
import SalesPage from "@/components/dashboard/Contact/Sales/SalesPage";
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
            element: <ActivityPage />,
          },
          {
            path: ":id/docs",
            element: <DocsPage />,
          },
          {
            path: ":id/sales",
            element: <SalesPage />,
          },
        ],
      },
    ],
  },
]);
