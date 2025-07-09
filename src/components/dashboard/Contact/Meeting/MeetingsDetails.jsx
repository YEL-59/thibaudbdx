import { useParams } from "react-router";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meetingData = [
  {
    id: 1,
    title: "Meet With Jhon 1",
    date: "2nd April",
    time: "8:30pm",
    description:
      "Discuss the upcoming project plans and deliverables with Jhon.",
    location: "Office/ Zoom",
    reminder: "10 minutes before",
  },
  {
    id: 2,
    title: "Meet With Jhon",
    date: "2nd April",
    time: "8:30pm",
    description:
      "Discuss the upcoming project plans and deliverables with Jhon.",
    location: "Office/ Zoom",
    reminder: "10 minutes before",
  },
  {
    id: 3,
    title: "Meet With Jhon",
    date: "2nd April",
    time: "8:30pm",
    description:
      "Discuss the upcoming project plans and deliverables with Jhon.",
    location: "Office/ Zoom",
    reminder: "10 minutes before",
  },
  {
    id: 4,
    title: "Meet With Jhon",
    date: "2nd April",
    time: "8:30pm",
    description:
      "Discuss the upcoming project plans and deliverables with Jhon.",
    location: "Office/ Zoom",
    reminder: "10 minutes before",
  },
  {
    id: 5,
    title: "Meet With Jhon",
    date: "2nd April",
    time: "8:30pm",
    description:
      "Discuss the upcoming project plans and deliverables with Jhon.",
    location: "Office/ Zoom",
    reminder: "10 minutes before",
  },
];

export default function MeetingsDetails() {
  const { meetingId } = useParams();
  const meetingSingleInfo = meetingData.find(
    (item) => item.id === parseInt(meetingId)
  );

  if (!meetingSingleInfo) {
    return (
      <section>
        <div className="container py-10">
          <Card>
            <CardHeader>
              <CardTitle>Meeting not found</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                No meeting data available for this ID.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const { title, date, time, description, location, reminder } =
    meetingSingleInfo;

  return (
    <section>
      <div className="container !mx-0 lg:mx-auto py-10 px-5">
        {/* Title, Date & Time */}
        <Card
          className="mb-3 border-none gap-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <CardHeader className="flex flex-row justify-between items-center pb-2">
            <div>
              <div className="text-sm font-semibold text-[#262525] pb-2">
                {title}
              </div>
              <div className="text-xs text-[#615EF0] pt-1">
                <span>{date}</span>
                <span className="mx-1">,</span>
                <span className="text-[#CF57FF]">{time}</span>
              </div>
            </div>
            <div className="text-xs text-gray-400">{time}</div>
          </CardHeader>
        </Card>

        {/* Description */}
        <Card
          className="mb-3 border-none gap-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold text-[#262525]">
                Description
              </div>
              <span className="justify-end text-xs text-gray-400">{time}</span>
            </div>
          </CardHeader>
          <CardContent className="min-h-[100px] text-xs text-gray-400">
            {description}
          </CardContent>
        </Card>

        {/* Location */}
        <Card
          className="mb-3 border-none gap-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <CardHeader>
            <div className="text-sm font-semibold text-[#262525]">Location</div>
          </CardHeader>
          <CardContent>
            <a href="#" className="text-xs text-[#615EF0]" tabIndex={-1}>
              {location}
            </a>
          </CardContent>
        </Card>

        {/* Reminder */}
        <Card
          className="mb-8 border-none gap-0"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <CardHeader>
            <div className="text-sm font-semibold text-[#262525]">Reminder</div>
          </CardHeader>
          <CardContent>
            <span className="text-xs text-[#615EF0]">{reminder}</span>
          </CardContent>
        </Card>

        {/* Delete Button */}
        <div className="flex justify-center mt-16">
          <Button className="bg-[#615EF0] text-white w-60 h-11 rounded-md text-base font-medium">
            Delete
          </Button>
        </div>
      </div>
    </section>
  );
}
