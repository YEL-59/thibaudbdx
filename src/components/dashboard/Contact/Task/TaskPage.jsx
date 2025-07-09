import TaskIcon2 from "@/assets/svg/TaskIcon2";
import { Card } from "@/components/ui/card";
import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router";
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
export function TaskPageLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export function TaskPage() {
  return (
    <section>
      <div className="container">
        <TaskItem />
        <CreateMeetingButton />
      </div>
    </section>
  );
}

function TaskItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="space-y-5 mt-10">
      {taskData.map((item, index) => (
        <div key={item?.id} data-aos="fade-up" data-aos-delay={index * 100}>
          <Card
            className="px-3 py-2.5 rounded-xl flex-row justify-between items-center border-transparent cursor-pointer transition-all duration-300 hover:scale-[101%]"
            onClick={() =>
              navigate(
                `/contact/${id}/customer-details/task/task-details/${item?.id}`
              )
            }
          >
            <div className="flex items-center gap-5">
              <div className="bg-primary w-fit p-1.5 rounded-sm">
                <TaskIcon2 />
              </div>
              <div className="flex flex-col">
                <h3 className="text-md font-medium text-shadow-card-foreground">
                  {item?.task}
                </h3>
                <p className="text-[10px] font-normal text-text-paragraph">
                  {item?.date}
                </p>
              </div>
            </div>
            <p className="text-[10px] font-normal text-text-paragraph">
              {item?.time}
            </p>
          </Card>
        </div>
      ))}
    </div>
  );
}

function CreateMeetingButton() {
  return (
    <div
      className="bg-secondary absolute bottom-20 right-20 rounded-full border-2 flex items-center justify-center transition-all duration-500 p-4"
      // data-aos="zoom-in"
      // data-aos-delay="700"
    >
      <Link
        to="create-task"
        className="bg-primary p-5 rounded-full inline-block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M7.60568 18.0002H28.3936"
            stroke="white"
            strokeWidth="2.54545"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 28.3941V7.6062"
            stroke="white"
            strokeWidth="2.54545"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
