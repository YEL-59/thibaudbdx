import { axiosPrivate } from "@/lib/axios.config";
import { signUpSchema } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

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
