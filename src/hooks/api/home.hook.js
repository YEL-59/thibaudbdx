import { axiosPrivate } from "@/lib/axios.config";
import { useQuery } from "@tanstack/react-query";

export const useGetUpcomingMeetings = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["upcoming-meetings"],
    queryFn: async () => {
      try {
        const res = await axiosPrivate.get("/upcommig-meeting"); // spelling fixed
        console.log("res", res);
        return res?.data?.data || [];
      } catch (error) {
        console.log(error?.response?.data?.message || "Something went wrong");
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
