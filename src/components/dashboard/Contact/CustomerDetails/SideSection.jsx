import TwoUserIcon from "@/assets/svg/TwoUserIcon";
import React from "react";

const activities = [
  {
    id: 1,
    title: "Meet With Jhon",
    date: "2nd April",
    time: "8:30pm",
  },
  {
    id: 2,
    title: "Meet With Jhon",
    date: "2nd April",
    time: "8:30pm",
  },
  {
    id: 3,
    title: "Meet With Jhon",
    date: "2nd April",
    time: "8:30pm",
  },
  {
    id: 4,
    title: "Meet With Jhon",
    date: "2nd April",
    time: "8:30pm",
  },
];

const SideSection = () => {
  return (
    <div className="space-y-8">
      <Activity />
      <Docs />
    </div>
  );
};

export default SideSection;

function Activity() {
  return (
    <div
      className="bg-[#BFC6FF] rounded-2xl pb-12 px-6 pt-6 flex flex-col items-center"
      style={{ fontFamily: "var(--poppins-font)" }}
    >
      <h2 className="text-[2.5rem] font-bold text-[#08018B] mb-6 mt-2 text-center leading-none">
        Activity
      </h2>
      <div className="bg-white rounded-xl shadow-md px-4 py-5 w-full">
        <div className="flex justify-between items-center mb-4 px-1">
          <span className="text-[#848585] text-base font-semibold">List</span>
          <button className="text-[#848585] text-base font-semibold hover:underline focus:outline-none">
            See All
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center bg-[#F4F5FF] rounded-lg px-3 py-3"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function Docs() {
  return (
    <div
      className="bg-[#BFC6FF] rounded-2xl pb-12 px-6 pt-6 flex flex-col items-center"
      style={{ fontFamily: "var(--poppins-font)" }}
    >
      <h2 className="text-[2.5rem] font-bold text-[#08018B] mb-6 mt-2 text-center leading-none">
        Activity
      </h2>
      <div className="bg-white rounded-xl shadow-md px-4 py-5 w-full">
        <div className="flex justify-between items-center mb-4 px-1">
          <span className="text-[#848585] text-base font-semibold">List</span>
          <button className="text-[#848585] text-base font-semibold hover:underline focus:outline-none">
            See All
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center bg-[#F4F5FF] rounded-lg px-3 py-3"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
