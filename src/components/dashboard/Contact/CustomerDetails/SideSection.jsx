import DemoImage from "@/assets/svg/DemoImage";
import TwoUserIcon from "@/assets/svg/TwoUserIcon";
import React from "react";
import { Link, useLocation, useParams } from "react-router";

const activities = [
  {
    id: 1,
    category: "meet",
    title: "Meet With Jhon",
    date: "2nd April",
    time: "8:30pm",
  },
  {
    id: 2,
    category: "task",
    title: "Task Name",
    date: "2nd April",
    time: "8:30pm",
  },
  {
    id: 3,
    category: "meet",
    title: "Meet With Jhon",
    date: "2nd April",
    time: "8:30pm",
  },
  {
    id: 4,
    category: "task",
    title: "Task Name",
    date: "2nd April",
    time: "8:30pm",
  },
  {
    id: 5,
    category: "meet",
    title: "Meet With Jhon",
    date: "2nd April",
    time: "8:30pm",
  },
];
const docs = [
  {
    id: 1,
    fileName: "Contract agreement.png",
    fileType: "image/png",
    uploadDate: "April 8, 2025",
    fileSize: "1 KB",
  },
  {
    id: 2,
    fileName: "Contract agreement.png",
    fileType: "image/png",
    uploadDate: "April 8, 2025",
    fileSize: "12 KB",
  },
];

const SideSection = () => {
  return (
    <div className="space-y-8 px-6">
      <Activity />
      <Docs />
    </div>
  );
};

export default SideSection;

function Activity() {
  const { id } = useParams();
  const location = useLocation();
  return (
    <div
      className="bg-[#BFC6FF] rounded-2xl pb-12 px-6 pt-6 flex flex-col items-center"
      style={{ fontFamily: "var(--poppins-font)" }}
      data-aos="fade-left"
      data-aos-delay="400"
    >
      <h2 className="text-[2.5rem] font-bold text-[#08018B] mb-6 mt-2 text-center leading-none">
        Activity
      </h2>
      <div className="bg-white rounded-xl shadow-md px-4 py-5 w-full">
        <div className="flex justify-between items-center mb-4 px-1">
          <span className="text-[#848585] text-base font-semibold">List</span>
          <Link
            to={`${id}/customer-details/meeting`}
            className="text-[#848585] text-base font-semibold hover:underline focus:outline-none"
          >
            See All
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {activities.map((activity) => (
            <Link
              to={`${id}/customer-details/meeting/meetings-details/${activity.id}`}
              key={activity.id}
              className="flex items-center bg-[#F4F5FF] rounded-lg px-3 py-3 transition-transform duration-300 hover:scale-105"
              state={{ from: location.pathname, isNew: true }}
            >
              <div className="bg-[#5F57FF] rounded-md p-2 flex items-center justify-center mr-3">
                <TwoUserIcon className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-[#232360] text-base font-semibold leading-tight">
                  {activity.title}
                </div>
                <div className="text-[#848585] text-xs mt-1">
                  {activity.date}
                </div>
              </div>
              <div className="text-[#B1B1B1] text-sm font-medium ml-2">
                {activity.time}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
function Docs() {
  const { id } = useParams();
  return (
    <div
      className="bg-[#CCB3FE] rounded-2xl pb-12 px-6 pt-6 flex flex-col items-center"
      style={{ fontFamily: "var(--poppins-font)" }}
      data-aos="fade-left"
      data-aos-delay="600"
    >
      <h2 className="text-[2.5rem] font-bold text-[#08018B] mb-6 mt-2 text-center leading-none">
        Docs
      </h2>
      <div className="bg-white rounded-xl shadow-md px-4 py-5 w-full">
        <div className="flex justify-between items-center mb-4 px-1">
          <span className="text-[#848585] text-base font-semibold">List</span>
          <Link
            to={`${id}/docs`}
            className="text-[#848585] text-base font-semibold hover:underline focus:outline-none"
          >
            See All
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {docs.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center bg-[#E8E9FF] rounded-lg px-3 py-3"
            >
              <div className="rounded-md flex items-center justify-center mr-3">
                <DemoImage className="text-white w-9 h-9" />
              </div>
              <div className="flex-1">
                <div className="text-[#232360] text-base font-semibold leading-tight">
                  {activity.fileName}
                </div>
                <div className="text-[#848585] text-xs mt-1">
                  {activity.fileSize}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
