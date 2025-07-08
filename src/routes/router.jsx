import Contact from "@/components/dashboard/Contact";
import ActivityPage from "@/components/dashboard/Contact/Activity/ActivityPage";
import AddContactPage from "@/components/dashboard/Contact/AddContact/AddContactPage";
import CustomerDetailsPage from "@/components/dashboard/Contact/CustomerDetails/CustomerDetailsPage";
import DocsPage from "@/components/dashboard/Contact/Docs/DocsPage";
import CreateMeetingPage from "@/components/dashboard/Contact/Meeting/CreateMeetingPage";
import {
  MeetingLayout,
  MeetingPage,
} from "@/components/dashboard/Contact/Meeting/MeetingPage";
import MeetingsDetails from "@/components/dashboard/Contact/Meeting/MeetingsDetails";
import CreateNotesPage from "@/components/dashboard/Contact/NotesDetails/CreateNotesPage";
import NotesDetails from "@/components/dashboard/Contact/NotesDetails/NotesDetails";
import {
  NotesDetailsLayout,
  NotesDetailsPage,
} from "@/components/dashboard/Contact/NotesDetails/NotesDetailsPage";
import SalesPage from "@/components/dashboard/Contact/Sales/SalesPage";
import CreateTask from "@/components/dashboard/Contact/Task/CreateTask";
import TaskDetails from "@/components/dashboard/Contact/Task/TaskDetails";
import {
  TaskPage,
  TaskPageLayout,
} from "@/components/dashboard/Contact/Task/TaskPage";
import CreateTesting from "@/components/dashboard/Contact/TastingDetails/CreateTasting";
import TastingDetails from "@/components/dashboard/Contact/TastingDetails/TastingDetails";
import {
  TastingDetailsPage,
  TastingDetailsPageLayout,
} from "@/components/dashboard/Contact/TastingDetails/TastingDetailsPage";
import AddTextNote from "@/components/dashboard/Notes/AddTextNote";
import AddVoiceNote from "@/components/dashboard/Notes/AddVoiceNote";
import {
  NotesPage,
  NotesPageLayout,
} from "@/components/dashboard/Notes/NotesPage";
import { TastingPage } from "@/components/dashboard/Tasting/TastingPage";
import ForgotPassword from "@/components/shared/forgotPassword";
import SignIn from "@/components/shared/signIn";
import SignUp from "@/components/shared/signUp";
import VerifyOTP from "@/components/shared/verifyOTP";
import { ContactLayout, ContactSubLayout } from "@/layout/contact-layout";
import DashboardLayout from "@/layout/layout";
import Home from "@/pages/Home";
import { createBrowserRouter, Outlet } from "react-router";
import PrivateRoute from "./private-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout />
      </PrivateRoute>
    ),
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
        path: "contact/add-contact",
        element: <AddContactPage />,
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
                element: <CustomerDetailsPage />,
              },
              {
                path: "meeting",
                element: <MeetingLayout />,
                children: [
                  {
                    index: true,
                    element: <MeetingPage />,
                  },
                  {
                    path: "meetings-details/:meetingId",
                    element: <MeetingsDetails />,
                  },
                  {
                    path: "create-meeting",
                    element: <CreateMeetingPage />,
                  },
                ],
              },
              {
                path: "task",
                element: <TaskPageLayout />,
                children: [
                  {
                    index: true,
                    element: <TaskPage />,
                  },
                  {
                    path: "task-details/:taskId",
                    element: <TaskDetails />,
                  },
                  {
                    path: "create-task",
                    element: <CreateTask />,
                  },
                ],
              },
              {
                path: "notes",
                element: <NotesDetailsLayout />,
                children: [
                  {
                    index: true,
                    element: <NotesDetailsPage />,
                  },
                  {
                    path: "notes-details/:notesId",
                    element: <NotesDetails />,
                  },
                  {
                    path: "create-notes",
                    element: <CreateNotesPage />,
                  },
                ],
              },
              {
                path: "tasting",
                element: <TastingDetailsPageLayout />,
                children: [
                  {
                    index: true,
                    element: <TastingDetailsPage />,
                  },
                  {
                    path: "tasting-details/:tastingId",
                    element: <TastingDetails />,
                  },
                  {
                    path: "create-tasting",
                    element: <CreateTesting />,
                  },
                ],
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
      {
        path: "notes",
        element: <NotesPageLayout />,
        children: [
          {
            index: true,
            element: <NotesPage />,
          },
          {
            path: "add-text-note",
            element: <AddTextNote />,
          },
          {
            path: "add-voice-note",
            element: <AddVoiceNote />,
          },
        ],
      },
      {
        path: "tasting",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <TastingPage />,
          },
        ],
      },
    ],
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "otp-verify",
    element: <VerifyOTP />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
]);
