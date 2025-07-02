import { axiosPrivate } from "@/lib/axios.config";
import {
  otpSchema,
  resendOtpSchema,
  signInSchema,
  signUpSchema,
} from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import useQueryParam from "../useQueryParam";

// Sign Up
export const useSignUp = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password_confirmation: "",
      password: "",
      agree: true,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosPrivate.post("/auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    },
    onSuccess: (data) => {
      const token = data?.data?.token;
      localStorage.setItem("token", token);
      const user = data?.data;
      localStorage.setItem("usersignup", JSON.stringify(user));
      form.reset();
      toast.success(data?.message || "Success!");
      navigate(`/otp-verify?email=${data?.data?.email}`);
    },
    onError: (error) => {
      console.log("error", error);

      const message = error?.response?.data?.message || "Failed to create user";
      if (message.includes("email")) {
        form.setError("email", { message });
      } else {
        toast.error(message);
      }
    },
  });
  return { form, mutate, isPending };
};
// Sign In
export const useSignIn = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosPrivate.post("/auth/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    },
    onSuccess: (data) => {
      console.log("data", data);

      const token = data?.token;
      localStorage.setItem("token", token);
      const user = data?.data;
      localStorage.setItem("user", JSON.stringify(user));
      form.reset();
      toast.success(data?.message || "Success!");
      //   navigate("/sign-in");
    },
    onError: (error) => {
      console.log("error", error);

      const message = error?.response?.data?.message || "Failed to create user";
      if (message.includes("email")) {
        form.setError("email", { message });
      } else {
        toast.error(message);
      }
    },
  });
  return { form, mutate, isPending };
};

// OTP Submit
export const useOTPSubmit = () => {
  const user_email = useQueryParam("email");

  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      email: user_email,
      otp: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosPrivate.post("/auth/verify-email", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    },
    onSuccess: (data) => {
      console.log("data", data);
      form.reset();
      toast.success(data?.message || "Success!");
      navigate("/");
    },
    onError: (error) => {
      console.log("error", error);

      const message = error?.response?.data?.message || "Failed to create user";
      if (message.includes("email")) {
        form.setError("email", { message });
      } else {
        toast.error(message);
      }
    },
  });
  return { form, mutate, isPending };
};

export const useResendOTP = () => {
  const user_email = useQueryParam("email");

  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(resendOtpSchema),
    defaultValues: {
      email: user_email,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const formData = {
        email: user_email,
      };

      const { data } = await axiosPrivate.post("/auth/resend-otp", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    },
    onSuccess: (data) => {
      console.log("data", data);
      toast.success(data?.message || "Success!");
      navigate(`/sign-in`);
    },
    onError: (error) => {
      console.log("error", error);

      const message = error?.response?.data?.message || "Failed to create user";
      if (message.includes("email")) {
        form.setError("email", { message });
      } else {
        toast.error(message);
      }
    },
  });
  return { form, mutate, isPending };
};
