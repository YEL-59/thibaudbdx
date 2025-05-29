import ReusableInputField from "@/components/shared/InputField/ReusableInputField";
import ReusableSelect from "@/components/shared/InputField/ReusableSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useCreateMeeting } from "@/hooks/api/create-meeting.hook";
import { useForm } from "react-hook-form";

export default function CreateMeetingPage() {
  const { form, mutate, isPending } = useCreateMeeting();
  const options = [
    { label: "Remind me before 5 Minutes", value: "5" },
    { label: "Remind me before 10 Minutes", value: "10" },
    { label: "Remind me before 15 Minutes", value: "15" },
  ];
  return (
    <section>
      <div className="container mb-20">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(mutate)} className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="300">
              <ReusableInputField
                name="email"
                label="Meeting Name"
                placeholder="Meeting name"
                control={form.control}
                type="text"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <ReusableInputField
                name="description"
                label="Meeting Description"
                placeholder="Meeting Description"
                control={form.control}
                type="text"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <ReusableInputField
                name="date"
                label="Date"
                placeholder="Select Date"
                control={form.control}
                type="date"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <ReusableInputField
                name="time"
                label="Time"
                placeholder="Time"
                control={form.control}
                type="time"
              />
            </div>
            <div className="relative" data-aos="fade-up" data-aos-delay="700">
              <ReusableSelect
                name="remind"
                control={form.control}
                placeholder="Remind me before 5 Minutes"
                options={options}
                label="Set Reminder"
              />
              <div className="absolute right-2 top-2">
                <Switch id="airplane-mode" />
              </div>
            </div>

            <div className="flex justify-center mt-12 gap-6">
              <Button
                className="h-11 rounded-md text-base font-medium px-10"
                type="button"
                variant="light"
              >
                Cancel
              </Button>
              <Button
                disabled={isPending}
                type="submit"
                className="bg-[#615EF0] text-white h-11 rounded-md text-base font-medium px-10"
              >
                {!isPending ? "Save" : "Saving"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
