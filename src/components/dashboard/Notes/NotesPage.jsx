import DocsIcon from "@/assets/svg/DocsIcon";
import TwoUserIcon from "@/assets/svg/TwoUserIcon";
import VoiceNotes from "@/assets/svg/VoiceNotes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import images from "@/constants/images";
import { useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";

const notesData = [
  {
    id: 1,
    title: "Meet With Jhon",
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

// Note Page Layout
export function NotesPageLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

// Note Page
export function NotesPage() {
  const hasNotesData = notesData.length > 0;

  let content;

  switch (hasNotesData) {
    case true:
      content = <NotesItem />;
      break;
    case false:
      content = <NoDataPage />;
      break;
  }

  return (
    <section>
      <div className="container mx-auto mb-20 px-5 md:px-0">
        {content}
        <CreateButton />
      </div>
    </section>
  );
}

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

function NotesItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="space-y-5 mt-10">
      {notesData.map((item, index) => (
        <div key={item?.id} data-aos="fade-up" data-aos-delay={index * 100}>
          <Card
            className="px-3 py-2.5 rounded-xl flex-row justify-between items-center border-transparent cursor-pointer transition-all duration-300 hover:scale-[101%]"
            onClick={() =>
              navigate(
                `/contact/${id}/customer-details/meeting/meetings-details/${item?.id}`
              )
            }
          >
            <div className="flex items-center gap-5">
              <div className="bg-primary w-fit p-1.5 rounded-sm">
                <TwoUserIcon />
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

// Create Button
function CreateButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="fixed lg:absolute bottom-5 lg:bottom-20 right-5 lg:right-20">
      <div className="absolute bottom-20 lg:bottom-32 right-0 lg:right-24">
        {isDropdownOpen && <DropdownButton />}
      </div>
      <div
        className="bg-secondary absolute bottom-0 right-0 rounded-full border-2 flex items-center justify-center transition-all duration-500 p-2.5 lg:p-4 w-fit"
        // data-aos="zoom-in"
        // data-aos-delay="700"
      >
        <button
          className={`bg-primary p-2.5 lg:p-5 rounded-full inline-block transition-transform duration-300 ${
            isDropdownOpen ? "rotate-45 scale-95" : ""
          }`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="36"
            // height="36"
            viewBox="0 0 36 36"
            fill="none"
            className="w-[15px] xl:w-[32px] h-[15px] xl:h-[30px]"
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
        </button>
      </div>
    </div>
  );
}

function DropdownButton() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="space-y-5">
      <div
        className="flex items-center gap-2 group"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          onClick={() =>
            navigate(`add-text-note`, {
              state: location.pathname,
              replace: true,
            })
          }
          className="border group-hover:border-transparent group-hover:bg-primary rounded-full p-2 transition-colors duration-500 cursor-pointer bg-white"
        >
          <DocsIcon className="w-7 h-7 stroke-gray-700 group-hover:stroke-white transition-colors duration-500" />
        </div>
        <Button
          onClick={() =>
            navigate(`add-text-note`, {
              state: location.pathname,
              replace: true,
            })
          }
          className="rounded-full !py-3 h-auto w-[254px] m-0 bg-white border text-text-paragraph group-hover:text-white group-hover:bg-primary transition-colors duration-500 cursor-pointer"
        >
          Add Text Note
        </Button>
      </div>
      <div
        className="flex items-center gap-2 group"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div
          onClick={() =>
            navigate(`add-voice-note`, {
              state: location.pathname,
              replace: true,
            })
          }
          className="border group-hover:border-transparent group-hover:bg-primary rounded-full p-2 transition-colors duration-500 cursor-pointer bg-white"
        >
          <VoiceNotes className="w-7 h-7 stroke-gray-700 group-hover:stroke-white transition-colors duration-500" />
        </div>
        <Button
          onClick={() =>
            navigate(`add-voice-note`, {
              state: location.pathname,
              replace: true,
            })
          }
          className="rounded-full !py-3 h-auto w-[254px] m-0 bg-white border text-text-paragraph group-hover:text-white group-hover:bg-primary transition-colors duration-500 cursor-pointer"
        >
          Add Voice Note
        </Button>
      </div>
    </div>
  );
}
