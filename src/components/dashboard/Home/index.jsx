import Rightarrow from "@/assets/svg/rightarrow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import "aos/dist/aos.css";
import {
  useGetUpcomingMeetings,
  useGetUpcomingTask,
} from "@/hooks/api/home.hook";
import { upcoming_meeting, upcoming_tasks } from "@/data/upcomming_data";
import formatOptionalDateTime from "@/lib/timeformat";
import { Skeleton } from "@/components/ui/skeleton";
import SwirlingEffectSpinner from "@/assets/svg/SwirlingEffectSpinner";

const dashboardItems = [
  {
    id: 1,
    type: "Meeting",
    title: "Meeting with John",
    date: "7 Jun 2025",
    time: "10:00 AM",
  },
  {
    id: 2,
    type: "Meeting",
    title: "Meeting with Sarah",
    date: "7 Jun 2025",
    time: "11:00 AM",
  },
  {
    id: 3,
    type: "Meeting",
    title: "Planning Meeting",
    date: "7 Jun 2025",
    time: "1:00 PM",
  },
  {
    id: 4,
    type: "Task",
    title: "Submit project report",
    date: "8 Jun 2025",
    time: "2:00 PM",
  },
  {
    id: 5,
    type: "Tasting",
    title: "Wine tasting session",
    date: "9 Jun 2025",
    time: "5:00 PM",
  },
];
const dashboardItems2 = [
  {
    id: 1,
    type: "Meeting",
    title: "Meeting with John",
    date: "7 Jun 2025",
    time: "10:00 AM",
  },
  {
    id: 2,
    type: "Meeting",
    title: "Meeting with Sarah",
    date: "7 Jun 2025",
    time: "11:00 AM",
  },
];
const dashboardItems3 = [
  {
    id: 1,
    type: "Meeting",
    title: "Meeting with John",
    date: "7 Jun 2025",
    time: "10:00 AM",
  },
];

export default function HomeDashboard() {
  const { upcomingMeetings, isLoading } = useGetUpcomingMeetings();
  const { upcomingTasks, isLoading: taskIsLoading } = useGetUpcomingTask();

  const [steps, setSteps] = useState(1);

  console.log("upcomingMeetings", upcomingMeetings);

  const content = (steps) => {
    switch (steps) {
      case 1:
        return !isLoading ? (
          <>
            {upcomingMeetings?.map((item, idx) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={`${idx * 100}`}
              >
                <ListCard item={item} idx={idx} />
              </div>
            ))}
          </>
        ) : (
          <div className="flex justify-center items-center h-[50vh]">
            <SwirlingEffectSpinner />
          </div>
        );
      case 2:
        return !taskIsLoading ? (
          <>
            {upcomingTasks?.map((item, idx) => (
              <div data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
                <ListCard key={item.id} item={item} idx={idx} />
              </div>
            ))}
          </>
        ) : (
          <div className="flex justify-center items-center h-[50vh]">
            <SwirlingEffectSpinner />
          </div>
        );
      case 3:
        return (
          <>
            {dashboardItems3.map((item, idx) => (
              <ListCard key={item.id} item={item} idx={idx} />
            ))}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-4">
      {/* Left Column */}
      <div className="space-y-6">
        {/* Tabs + List */}
        <section className="space-y-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 font-['poppins']">
            <Button
              variant="outline"
              className={`${
                steps === 1 ? "!bg-[#615EF0] !text-white" : "text-[#615EF0]"
              }`}
              onClick={() => setSteps(1)}
            >
              Upcoming Meetings ({upcomingMeetings?.length || 0})
            </Button>
            <Button
              variant="outline"
              className={`${
                steps === 2 ? "!bg-[#615EF0] !text-white" : "text-[#615EF0]"
              }`}
              onClick={() => setSteps(2)}
            >
              Upcoming Task ({upcomingTasks?.length || 0})
            </Button>
            <Button
              variant="outline"
              className={`${
                steps === 3 ? "!bg-[#615EF0] !text-white" : "text-[#615EF0]"
              }`}
              onClick={() => setSteps(3)}
            >
              Upcoming Tasting ({dashboardItems3?.length})
            </Button>
          </div>

          {/* Cards */}
          <div className="space-y-3">{content(steps)}</div>
        </section>

        {/* Sales Update */}
        {!isLoading && !taskIsLoading && <SalesUpdate />}
      </div>

      {/* Right Column */}
      <RightColumn />
    </div>
  );
}

/* Cards */
function ListCard({ item }) {
  return (
    <Card key={item.id} className="border border-gray-200">
      <CardContent className="p-0 px-5 flex justify-between items-center">
        <div className="border-l-4 border-indigo-500">
          <p className="font-semibold text-sm ml-2">{item.name}</p>
          <p className="text-xs text-gray-500 ml-2">
            {item.created_at &&
              `${formatOptionalDateTime({ isoDate: item.created_at })?.date} —`}
            {item.date &&
              `${formatOptionalDateTime({ isoDate: item.date })?.date} ${
                item.created_at ? `` : `—`
              }`}
            {item.time &&
              `${formatOptionalDateTime({ timeStr: item.time })?.time}`}
          </p>
        </div>
        <Button variant="ghost" size="icon">
          <span className="text-gray-400">⋮</span>
        </Button>
      </CardContent>
    </Card>
  );
}

/* Right Column */
function RightColumn() {
  return (
    <div className="space-y-6">
      {/* Last Contacts */}
      <Card
        className="bg-[#C8C7FF] p-4"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <CardHeader className="px-0">
          <h1 className="text-[#08018B] text-left text-base font-['poppins'] font-medium leading-[132%]">
            Last Contacts Created
          </h1>
        </CardHeader>
        <div className="bg-white rounded-lg">
          <div className="text-sm font-['poppins'] font-semibold text-black flex justify-between items-center px-5 py-2">
            <div className="flex items-end gap-1">
              <span className="text-[#5F57FF] text-sm font-semibold leading-none">
                9
              </span>
              <span className="text-[#1C1D1D] text-[10px] font-semibold leading-none">
                contacts created
              </span>
            </div>
            <Button variant="link" className="text-black p-0 h-auto">
              View all
            </Button>
          </div>
          <CardContent className="space-y-2 py-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#E8E9FF] rounded-lg p-2 flex justify-between items-center"
              >
                <div>
                  <p className="text-[#5F57FF] text-[12px] font-normal leading-[110%]">
                    Knight Tiger
                  </p>
                  <p className="text-[#848585] text-[10px] font-normal leading-[164%] pt-2">
                    institute.of.technology.co
                  </p>
                </div>
                <span className="text-[#615EF0]">
                  <Rightarrow />
                </span>
              </div>
            ))}
          </CardContent>
        </div>
      </Card>

      {/* Last Products */}
      <Card
        className="bg-[#C8C7FF] p-4"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <CardHeader className="px-0">
          <h1 className="text-[#08018B] text-left text-base font-['poppins'] font-medium leading-[132%]">
            Last Products added
          </h1>
        </CardHeader>
        <div className="bg-white rounded-lg">
          <div className="text-sm font-['poppins'] font-semibold text-black flex justify-between items-center px-5 py-2">
            <div className="flex items-end gap-1">
              <span className="text-[#5F57FF] text-sm font-semibold leading-none">
                7
              </span>
              <span className="text-[#1C1D1D] text-[10px] font-semibold leading-none">
                products created
              </span>
            </div>
            <Button variant="link" className="text-black p-0 h-auto">
              View all
            </Button>
          </div>
          <CardContent className="space-y-2 py-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#E8E9FF] rounded-lg p-2 flex justify-between items-center"
              >
                <div>
                  <p className="text-[#5F57FF] text-[12px] font-normal leading-[110%] py-2">
                    1. Product Name
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </div>
      </Card>

      {/* Floating Add Button */}
      {/* <div
          className="fixed md:absolute bottom-5 md:bottom-0 right-5 md:right-0"
          data-aos="zoom-in"
          data-aos-delay="700"
        ></div> */}
      <LinkButton />
    </div>
  );
}

/* Sales Update */
function SalesUpdate() {
  return (
    <section data-aos="fade-up" data-aos-delay="300">
      <Card className="bg-[#A0A3F3]">
        <CardHeader className="text-white text-sm font-semibold font-['poppins']">
          Last Sales Update
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Write your sales update here..."
            className="bg-white rounded-lg text-sm border-gray-300 focus-visible:ring-[#615EF0] resize-none"
            rows={4}
          />
        </CardContent>
      </Card>
    </section>
  );
}

function LinkButton() {
  return (
    <div
      className="bg-secondary/25 p-2.5 xl:p-5 fixed bottom-5 right-5 lg:right-20 rounded-full border-2 flex items-center justify-center"
      // data-aos="zoom-in"
      // data-aos-delay="700"
    >
      <a href="#" className="bg-primary p-2.5 xl:p-5 rounded-full inline-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="32"
          // height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="w-[15px] xl:w-[32px] h-[15px] xl:h-[30px]"
        >
          <path
            d="M18.1204 14.879C17.989 14.8793 17.8589 14.8535 17.7376 14.8032C17.6163 14.753 17.5061 14.6791 17.4134 14.586C15.8539 13.0265 13.3164 13.026 11.7564 14.586C11.6641 14.6816 11.5538 14.7577 11.4318 14.8102C11.3098 14.8626 11.1786 14.8901 11.0458 14.8913C10.913 14.8925 10.7813 14.8672 10.6584 14.8169C10.5355 14.7666 10.4239 14.6923 10.33 14.5984C10.2361 14.5046 10.1619 14.3929 10.1116 14.27C10.0613 14.1471 10.036 14.0154 10.0371 13.8826C10.0383 13.7499 10.0659 13.6186 10.1183 13.4966C10.1707 13.3746 10.2469 13.2643 10.3424 13.172C12.6819 10.832 16.4884 10.8325 18.8274 13.172C18.9672 13.3119 19.0624 13.4901 19.101 13.684C19.1395 13.878 19.1197 14.079 19.0441 14.2617C18.9684 14.4444 18.8403 14.6006 18.6759 14.7105C18.5114 14.8203 18.3181 14.879 18.1204 14.879ZM17.4134 20.5835C15.8769 20.5835 14.3404 19.9985 13.1709 18.829C13.0754 18.7368 12.9992 18.6265 12.9468 18.5045C12.8944 18.3824 12.8668 18.2512 12.8656 18.1184C12.8645 17.9857 12.8898 17.854 12.9401 17.7311C12.9904 17.6082 13.0646 17.4965 13.1585 17.4027C13.2524 17.3088 13.364 17.2345 13.4869 17.1842C13.6098 17.1339 13.7415 17.1086 13.8743 17.1098C14.0071 17.111 14.1383 17.1385 14.2603 17.1909C14.3823 17.2434 14.4927 17.3195 14.5849 17.415C16.1444 18.9745 18.6819 18.975 20.2419 17.415C20.3341 17.3195 20.4445 17.2434 20.5665 17.1909C20.6885 17.1385 20.8197 17.111 20.9525 17.1098C21.0853 17.1086 21.217 17.1339 21.3399 17.1842C21.4627 17.2345 21.5744 17.3088 21.6683 17.4027C21.7622 17.4965 21.8364 17.6082 21.8867 17.7311C21.937 17.854 21.9623 17.9857 21.9611 18.1184C21.96 18.2512 21.9324 18.3824 21.88 18.5045C21.8276 18.6265 21.7514 18.7368 21.6559 18.829C21.0991 19.3864 20.4377 19.8283 19.7096 20.1294C18.9816 20.4305 18.2012 20.5848 17.4134 20.5835Z"
            fill="white"
          />
          <path
            d="M20.9477 19.1216C20.7499 19.1215 20.5566 19.0628 20.3922 18.953C20.2278 18.8431 20.0997 18.6869 20.024 18.5042C19.9483 18.3215 19.9285 18.1205 19.9671 17.9265C20.0057 17.7326 20.1009 17.5544 20.2407 17.4146L25.8267 11.8286C25.9189 11.733 26.0293 11.6569 26.1513 11.6045C26.2733 11.552 26.4045 11.5245 26.5373 11.5233C26.6701 11.5221 26.8017 11.5474 26.9246 11.5977C27.0475 11.648 27.1592 11.7223 27.2531 11.8162C27.347 11.91 27.4212 12.0217 27.4715 12.1446C27.5218 12.2675 27.5471 12.3992 27.5459 12.532C27.5448 12.6647 27.5172 12.796 27.4648 12.918C27.4124 13.04 27.3362 13.1503 27.2407 13.2426L21.6547 18.8286C21.562 18.9216 21.4518 18.9955 21.3305 19.0457C21.2091 19.096 21.079 19.1218 20.9477 19.1216ZM12.5337 27.5356C12.3359 27.5355 12.1426 27.4768 11.9782 27.367C11.8138 27.2571 11.6857 27.1009 11.61 26.9182C11.5343 26.7355 11.5145 26.5345 11.5531 26.3405C11.5917 26.1466 11.6869 25.9684 11.8267 25.8286L14.9492 22.7061C15.0414 22.6105 15.1518 22.5344 15.2738 22.482C15.3958 22.4295 15.527 22.402 15.6598 22.4008C15.7926 22.3996 15.9242 22.4249 16.0471 22.4752C16.17 22.5255 16.2817 22.5998 16.3756 22.6937C16.4695 22.7875 16.5437 22.8992 16.594 23.0221C16.6443 23.145 16.6696 23.2767 16.6684 23.4095C16.6673 23.5422 16.6397 23.6735 16.5873 23.7955C16.5349 23.9175 16.4587 24.0278 16.3632 24.1201L13.2407 27.2426C13.148 27.3356 13.0378 27.4095 12.9165 27.4597C12.7951 27.51 12.665 27.5358 12.5337 27.5356ZM5.46268 20.4646C5.26493 20.4645 5.07163 20.4058 4.90722 20.296C4.74281 20.1861 4.61467 20.0299 4.539 19.8472C4.46333 19.6645 4.44353 19.4635 4.48209 19.2695C4.52066 19.0756 4.61587 18.8974 4.75568 18.7576L10.3417 13.1721C10.4339 13.0765 10.5443 13.0004 10.6663 12.948C10.7883 12.8955 10.9195 12.868 11.0523 12.8668C11.1851 12.8656 11.3167 12.891 11.4396 12.9412C11.5625 12.9915 11.6742 13.0658 11.7681 13.1597C11.862 13.2535 11.9362 13.3652 11.9865 13.4881C12.0368 13.611 12.0621 13.7427 12.0609 13.8755C12.0598 14.0082 12.0322 14.1395 11.9798 14.2615C11.9274 14.3835 11.8512 14.4938 11.7557 14.5861L6.16968 20.1716C5.97418 20.3666 5.71818 20.4646 5.46268 20.4646ZM16.3402 9.58755C16.1424 9.58751 15.9491 9.52884 15.7847 9.41895C15.6203 9.30907 15.4922 9.15291 15.4165 8.97021C15.3408 8.78751 15.321 8.58647 15.3596 8.39252C15.3982 8.19857 15.4934 8.0204 15.6332 7.88055L18.7557 4.75755C18.9433 4.56998 19.1977 4.4646 19.4629 4.4646C19.7282 4.4646 19.9826 4.56998 20.1702 4.75755C20.3578 4.94513 20.4631 5.19953 20.4631 5.4648C20.4631 5.73007 20.3578 5.98448 20.1702 6.17205L17.0477 9.29505C16.8599 9.4824 16.6054 9.5876 16.3402 9.58755Z"
            fill="white"
          />
          <path
            d="M8.99875 28.9675C7.45225 28.9675 5.90575 28.3925 4.75625 27.2425C2.45625 24.9425 2.45625 21.057 4.75625 18.757C4.8485 18.6615 4.95884 18.5853 5.08085 18.5329C5.20285 18.4805 5.33407 18.4529 5.46685 18.4517C5.59963 18.4506 5.73131 18.4759 5.8542 18.5262C5.9771 18.5764 6.08875 18.6507 6.18264 18.7446C6.27654 18.8385 6.35079 18.9501 6.40107 19.073C6.45135 19.1959 6.47665 19.3276 6.4755 19.4604C6.47435 19.5932 6.44676 19.7244 6.39435 19.8464C6.34194 19.9684 6.26576 20.0787 6.17025 20.171C4.63725 21.704 4.63725 24.295 6.17025 25.828C7.70325 27.361 10.2942 27.361 11.8272 25.828C11.9195 25.7325 12.0298 25.6563 12.1518 25.6039C12.2738 25.5515 12.4051 25.5239 12.5378 25.5227C12.6706 25.5216 12.8023 25.5469 12.9252 25.5972C13.0481 25.6474 13.1598 25.7217 13.2536 25.8156C13.3475 25.9095 13.4218 26.0211 13.4721 26.144C13.5224 26.2669 13.5477 26.3986 13.5465 26.5314C13.5453 26.6642 13.5178 26.7954 13.4654 26.9174C13.4129 27.0394 13.3368 27.1497 13.2413 27.242C12.0918 28.3925 10.5452 28.9675 8.99875 28.9675ZM26.5343 13.5355C26.3365 13.5354 26.1432 13.4768 25.9788 13.3669C25.8144 13.257 25.6862 13.1008 25.6106 12.9181C25.5349 12.7354 25.5151 12.5344 25.5537 12.3404C25.5922 12.1465 25.6874 11.9683 25.8273 11.8285C27.3603 10.2955 27.3603 7.70447 25.8273 6.17147C24.2943 4.63847 21.7033 4.63847 20.1702 6.17147C20.078 6.26698 19.9677 6.34316 19.8457 6.39557C19.7237 6.44798 19.5924 6.47557 19.4597 6.47672C19.3269 6.47787 19.1952 6.45257 19.0723 6.40229C18.9494 6.35201 18.8377 6.27776 18.7439 6.18387C18.65 6.08997 18.5757 5.97832 18.5254 5.85542C18.4751 5.73253 18.4498 5.60085 18.451 5.46807C18.4522 5.33529 18.4797 5.20407 18.5321 5.08207C18.5846 4.96006 18.6607 4.84972 18.7562 4.75747C21.0562 2.45747 24.9418 2.45747 27.2418 4.75747C29.5417 7.05747 29.5417 10.943 27.2418 13.243C27.0463 13.438 26.7903 13.5355 26.5343 13.5355Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
}
