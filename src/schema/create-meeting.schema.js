// create-meeting.schema.js
import { z } from "zod";

export const CreateMeetingSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Invalid Email"),
  description: z.string().min(1, "Description is required."),
  date: z.string().min(1, "Date is required."),
  time: z.string().min(1, "Time is required."),
  remind: z.string().min(1, "Remind is required."),
});
