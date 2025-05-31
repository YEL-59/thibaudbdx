import { CreateMeetingSchema } from "@/schema/create-meeting.schema";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import delay from "@/lib/delay";
import toast from "react-hot-toast";

export const useCreateMeeting = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      description: "",
      date: "",
      time: "",
      remind: ""
    },
    resolver: zodResolver(CreateMeetingSchema),
  });

  const result = useMutation({
    mutationFn: async (data) => {
      await delay(2000);
      return {
        success: true,
        message: "Message sent successfully",
        data,
      };
    },
    onSuccess: (data) => {
      if (data?.success) {
        form.reset();
        toast.success(data?.message || "Success!");
      }
    },
  });

  return { ...result, form };
};
