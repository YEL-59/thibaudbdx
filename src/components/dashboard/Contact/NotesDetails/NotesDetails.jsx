import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useParams } from "react-router";

const notesData = [
  {
    id: 1,
    type: "voice_note",
    name: "Voice note name",
    date: "2nd April",
    time: "8:30pm",
    description:
      "Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon.",
  },
  {
    id: 2,
    type: "voice_note",
    name: "Voice note name",
    date: "2nd April",
    time: "8:30pm",
    description:
      "Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon.",
  },
  {
    id: 3,
    type: "voice_note",
    name: "Voice note name",
    date: "2nd April",
    time: "8:30pm",
    description:
      "Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon.",
  },
  {
    id: 4,
    type: "voice_note",
    name: "Voice note name",
    date: "2nd April",
    time: "8:30pm",
    description:
      "Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon.",
  },
  {
    id: 5,
    type: "voice_note",
    name: "Voice note name",
    date: "2nd April",
    time: "8:30pm",
    description:
      "Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon.",
  },
];
export default function NotesDetails() {
  const { notesId } = useParams();
  const taskSingleInfo = notesData.find(
    (item) => item.id === parseInt(notesId)
  );

  if (!taskSingleInfo) {
    return (
      <section>
        <div className="container !mx-0 lg:mx-auto py-10 px-5">
          <Card>
            <CardHeader>
              <CardTitle>Notes not found</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                No notes data available for this ID.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
  const { name, time, description } = taskSingleInfo;
  return (
    <section>
      <div className="container !mx-0 lg:mx-auto py-10 px-5">
        {/* Description */}
        <Card
          className="mb-3 border-none gap-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold text-[#262525]">{name}</div>
            </div>
          </CardHeader>
          <CardContent className="min-h-[100px] text-xs text-gray-400 pb-20">
            {description}
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
