import ReusableInputField from "@/components/shared/InputField/ReusableInputField";
import ReusableSelect from "@/components/shared/InputField/ReusableSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useCreateMeeting } from "@/hooks/api/create-meeting.hook";
import { Switch } from "@radix-ui/react-switch";

export default function AddContactPage() {
  const { form, mutate, isPending } = useCreateMeeting();
  const options = [
    { label: "Remind me before 5 Minutes", value: "5" },
    { label: "Remind me before 10 Minutes", value: "10" },
    { label: "Remind me before 15 Minutes", value: "15" },
  ];
  return (
    <section>
      <div className="container">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(mutate)} className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="250">
              <ReusableSelect
                name="contactType"
                control={form.control}
                placeholder="Select contact type"
                options={options}
                label="Contact Type"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <ReusableInputField
                name="companyName"
                label="Company Name"
                placeholder="Company name"
                control={form.control}
                type="text"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="350">
              <ReusableInputField
                name="companyName"
                label="Owner Name"
                placeholder="Owner name"
                control={form.control}
                type="text"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <ReusableInputField
                name="address"
                label="Address"
                placeholder="Address"
                control={form.control}
                type="text"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="450">
              <ReusableInputField
                name="city"
                label="City"
                placeholder="City"
                control={form.control}
                type="text"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <ReusableInputField
                name="zipCode"
                label="Zip Code"
                placeholder="Zip Code"
                control={form.control}
                type="number"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="550">
              <ReusableInputField
                name="phoneNumber"
                label="Phone Number"
                placeholder="Phone Number"
                control={form.control}
                type="number"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <ReusableInputField
                name="email"
                label="Email"
                placeholder="Email"
                control={form.control}
                type="email"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="650">
              <ReusableInputField
                name="website"
                label="Website"
                placeholder="Website"
                control={form.control}
                type="text"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="650">
              <ReusableInputField
                name="tag"
                label="Add Tag"
                placeholder="Add Tag"
                control={form.control}
                type="text"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="700">
              <ReusableInputField
                name="additionalInformation"
                label="Additional Information"
                placeholder="Additional Information"
                control={form.control}
                type="text"
              />
            </div>

            <div
              className="flex justify-center mt-12 gap-6"
            >
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
