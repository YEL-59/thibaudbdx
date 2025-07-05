import { axiosPrivate, axiosPublic } from "@/lib/axios.config";
import {
  createNewPasswordSchema,
  forgotPasswordSchema,
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

// const signUp = "/auth/register";
// const signIn = "/auth/login";
// const verifyOTP = "/auth/verify-otp";
// const resendOTP = "/auth/resend-otp";
// const forgotPassword = "/auth/forgot-password";
// const createNewPassword = "/auth/forget-password";

const signUp = "/posts";
const signIn = "/posts";
const verifyOTP = "/posts";
const resendOTP = "/posts";
const forgotPassword = "/posts";
const createNewPassword = "/posts";

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
      const { data } = await axiosPublic.post(signUp, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    },
    // Demo
    onMutate: (variables) => {
      navigate(`/otp-verify?email=${variables?.email}`);
    },
    // end
    onSuccess: (data) => {
      const token = data?.data?.token;
      localStorage.setItem("token", token);
      const user = data?.data;
      localStorage.setItem("usersignup", JSON.stringify(user));
      form.reset();
      toast.success(data?.message || "Success!");
      // Real
      // navigate(`/otp-verify?email=${data?.data?.email}`);
      // end
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
      const { data } = await axiosPrivate.post(signIn, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    },
    onSuccess: (data) => {
      const token = data?.token;
      localStorage.setItem("token", token);
      const user = data?.data;
      localStorage.setItem("user", JSON.stringify(user));
      form.reset();
      toast.success(data?.message || "Success!");
      navigate("/");
    },
    onError: (error) => {
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
    mutationFn: async (dataInfo) => {
      const formData = dataInfo?.values;

      const { data } = await axiosPrivate.post(verifyOTP, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return { data, navigatesIsHere: dataInfo?.navigatesIsHere };
    },
    onSuccess: (data) => {
      form.reset();
      toast.success(data?.data?.message || "Success!");
      console.log("data", data);

      if (data?.navigatesIsHere) {
        navigate("/");
      }
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

// Resend OTP
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

      const { data } = await axiosPrivate.post(resendOTP, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    },
    onSuccess: (data) => {
      console.log("data", data);
      toast.success(data?.message || "Success!");
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

// Forgot Password Email send
export const useForgotPassword = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosPrivate.post(forgotPassword, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    },
    onMutate: async (variables) => {
      navigate(`/forgot-password?email=${variables?.email}`);
    },
    onSuccess: (data) => {
      console.log("data", data);
      toast.success(data?.message || "Success!");
      form.reset();
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
// New Password
export const useCreateNewPassword = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(createNewPasswordSchema),
    defaultValues: {
      password_confirmation: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosPrivate.post(createNewPassword, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    },
    onSuccess: (data) => {
      console.log("data", data);
      toast.success(data?.message || "Success!");
      form.reset();
      navigate("/sign-in");
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
