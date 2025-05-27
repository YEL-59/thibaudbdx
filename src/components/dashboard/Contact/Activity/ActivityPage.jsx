import TaskIcon2 from "@/assets/svg/TaskIcon2";
import TwoUserIcon from "@/assets/svg/TwoUserIcon";
import { Card } from "@/components/ui/card";
import images from "@/constants/images";
import React from "react";
import { useNavigate, useParams } from "react-router";

const activityData = [
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

const ActivityPage = () => {
  const hasActivityData = activityData.length > 0;

  let content;

  switch (hasActivityData) {
    case true:
      content = <ActivityItem />;
      break;
    case false:
      content = <NoDataPage />;
      break;
  }

  return (
    <section>
      <div className="container">{content}</div>
    </section>
  );
};

export default ActivityPage;

function NoDataPage() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center">
      <img src={images.empty_folder} alt="Empty Folder" />
      <div className="text-center mt-4">
        <p className="text-sm font-poppins text-text-paragraph-400">
          No Activity Yet
        </p>
        <p className="text-sm font-poppins text-text-paragraph-400 mt-3">
          Activities will start appearing here once you initiate any actions{" "}
          <br />
          with your contact
        </p>
      </div>
    </div>
  );
}

function ActivityItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  const iconMap = {
    meet: <TwoUserIcon />,
    task: <TaskIcon2 />,
  };
  return (
    <div className="space-y-5 mt-40">
      {activityData.map((item, index) => (
        <div key={item?.id} data-aos="fade-up" data-aos-delay={index * 100}>
          <Card
            className="px-3 py-2.5 rounded-xl flex-row justify-between items-center border-transparent cursor-pointer transition-all duration-300 hover:scale-[101%]"
            onClick={() => navigate(`/contact/${id}/customer-details/meeting`)}
          >
            <div className="flex items-center gap-5">
              <div className="bg-primary w-fit p-1.5 rounded-sm">
                {iconMap[item?.category]}
              </div>
              <div className="flex flex-col">
                <h3 className="text-md font-medium text-shadow-card-foreground">
                  {item?.title}
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
