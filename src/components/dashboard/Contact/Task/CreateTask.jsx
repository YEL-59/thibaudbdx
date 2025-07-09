import ReusableInputField from "@/components/shared/InputField/ReusableInputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useCreateMeeting } from "@/hooks/api/create-meeting.hook";
import React from "react";

const CreateTask = () => {
  const { form, mutate, isPending } = useCreateMeeting();

  return (
    <section>
      <div className="container !mx-0 lg:mx-auto py-10 px-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(mutate)} className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="300">
              <ReusableInputField
                name="taskName"
                label="Task Name"
                placeholder="Meeting name"
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
            <div data-aos="fade-up" data-aos-delay="400">
              <ReusableInputField
                name="description"
                label="Task Description"
                placeholder="Meeting Description"
                control={form.control}
                type="text"
                inputClassName="pb-[220px]"
              />
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
};

export default CreateTask;
