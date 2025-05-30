import DocsIcon from "@/assets/svg/DocsIcon";
import VoiceNotes from "@/assets/svg/VoiceNotes";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

export function NotesPageLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export function NotesPage() {
  return (
    <section>
      <div className="container">
        <CreateContactButton />
      </div>
    </section>
  );
}

function CreateContactButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="absolute bottom-20 right-20">
      <div className="absolute bottom-32 right-24">
        {isDropdownOpen && <DropdownButton />}
      </div>
      <div
        className="bg-secondary absolute bottom-0 right-0 rounded-full border-2 flex items-center justify-center transition-all duration-500 p-4 w-fit"
        data-aos="zoom-in"
        data-aos-delay="700"
      >
        <button
          className={`bg-primary p-5 rounded-full inline-block transition-transform duration-300 ${
            isDropdownOpen ? "rotate-45 scale-95" : ""
          }`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
            navigate(`add-contact`, { state: location.pathname, replace: true })
          }
          className="border group-hover:border-transparent group-hover:bg-primary rounded-full p-2 transition-colors duration-500 cursor-pointer"
        >
          <DocsIcon className="w-7 h-7 stroke-gray-700 group-hover:stroke-white transition-colors duration-500" />
        </div>
        <Button
          onClick={() =>
            navigate(`add-contact`, { state: location.pathname, replace: true })
          }
          className="rounded-full !py-3 h-auto w-[254px] m-0 bg-white border text-text-paragraph group-hover:text-white group-hover:bg-primary transition-colors duration-500 cursor-pointer"
        >
          Add a Contact
        </Button>
      </div>
      <div
        className="flex items-center gap-2 group"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="border group-hover:border-transparent group-hover:bg-primary rounded-full p-2 transition-colors duration-500 cursor-pointer">
          <VoiceNotes className="w-7 h-7 stroke-gray-700 group-hover:stroke-white transition-colors duration-500" />
        </div>
        <Button className="rounded-full !py-3 h-auto w-[254px] m-0 bg-white border text-text-paragraph group-hover:text-white group-hover:bg-primary transition-colors duration-500 cursor-pointer">
          Import from CSV
        </Button>
      </div>
    </div>
  );
}
