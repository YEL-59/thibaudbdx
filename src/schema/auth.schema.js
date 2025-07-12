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

export const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const otpSchema = z.object({
  email: z.string().email("Invalid email"),
  otp: z.string().min(4).max(4),
});
export const resendOtpSchema = z.object({
  email: z.string().email("Invalid email"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
});

export const createNewPasswordSchema = z
  .object({
    email: z.string().email("Invalid email"),
    password_confirmation: z.string().min(6, "Confirm password is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Password do not match",
    path: ["password_confirmation"],
  });

export const socialiteLoginSchema = z.object({
  provider: z.string(),
  token: z.string(),
});
