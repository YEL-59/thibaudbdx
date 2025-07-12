import { axiosPrivate } from "@/lib/axios.config";
import { useQuery } from "@tanstack/react-query";

// Get Upcoming Meetings
export const useGetUpcomingMeetings = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["upcoming-meetings"],
    queryFn: async () => {
      try {
        const res = await axiosPrivate.get("/upcommig-meeting");

        // console.log("res", res?.data?.data);

        return res?.data?.data || [];
      } catch (error) {
        // console.log(error?.response?.data?.message || "Something went wrong");
        throw new Error(
          error?.response?.data?.message || "Failed to fetch meetings"
        );
      }
    },
  });

  return {
    upcomingMeetings: data,
    isLoading,
    isError: !!error,
    errorMessage: error?.message,
  };
};

// Get Upcomming Task
export const useGetUpcomingTask = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["upcoming-tasks"],
    queryFn: async () => {
      try {
        const res = await axiosPrivate.get("/upcomming-task");

        // console.log("res", res?.data?.data);

        return res?.data?.data || [];
      } catch (error) {
        // console.log(error?.response?.data?.message || "Something went wrong");
        throw new Error(
          error?.response?.data?.message || "Failed to fetch meetings"
        );
      }
    },
  });

  return {
    upcomingTasks: data,
    isLoading,
    isError: !!error,
    errorMessage: error?.message,
  };
};
