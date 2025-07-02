import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    password_confirmation: z.string().min(6, "Confirm password is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    agree: z.literal(true, {
      errorMap: () => ({ message: "You must agree to the terms" }),
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Password do not match",
    path: ["password_confirmation"],
  });
