import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useParams } from "react-router";

const taskData = [
  {
    id: 1,
    task: "Task Name",
    date: "2nd April",
    time: "8:30pm",
    description: "A placeholder task name.",
  },
  {
    id: 2,
    task: "Task Name",
    date: "2nd April",
    time: "8:30pm",
    description: "A placeholder task name.",
  },
  {
    id: 3,
    task: "Task Name",
    date: "2nd April",
    time: "8:30pm",
    description: "A placeholder task name.",
  },
  {
    id: 4,
    task: "Task Name",
    date: "2nd April",
    time: "8:30pm",
    description: "A placeholder task name.",
  },
  {
    id: 5,
    task: "Task Name",
    date: "2nd April",
    time: "8:30pm",
    description: "A placeholder task name.",
  },
];

export default function TaskDetails() {
  const { taskId } = useParams();
  const taskSingleInfo = taskData.find((item) => item.id === parseInt(taskId));

  if (!taskSingleInfo) {
    return (
      <section>
        <div className="container py-10">
          <Card>
            <CardHeader>
              <CardTitle>Task not found</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                No task data available for this ID.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const { task, date, time, description } = taskSingleInfo;
  return (
    <section>
      <div className="container">
        <Card
          className="mb-3 border-none gap-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <CardHeader>
            <div className="text-sm font-semibold text-[#262525]">{task}</div>
          </CardHeader>
          <CardContent>
            <a href="#" className="text-xs text-[#615EF0]" tabIndex={-1}>
              {date}
            </a>
          </CardContent>
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
