import Logo from "@/assets/svg/logo";
import Search from "@/assets/svg/search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useHasNestedRoute } from "@/hooks/hasNestedRoute";
import formatCustomerDetails from "@/lib/formatCustomerDetails";
import { CalendarIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const location = useLocation();
  const hasNested = useHasNestedRoute();
  const navigate = useNavigate();
  const currentPath = location.pathname.split("/")[3]
    ? location.pathname.split("/")[3]
    : location.pathname.split("/")[1]
    ? location.pathname.split("/")[1]
    : "home";

  return (
    <div className="border-b border-[#E8E8E8] px-5 md:px-8 py-5 flex justify-between">
      <div className="flex items-center gap-4">
        <button
          className="xl:hidden"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          {sidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                stroke="#315215"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 5H20"
                stroke="#315215"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#315215"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19H20"
                stroke="#315215"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <div className="xl:flex gap-2 hidden items-center">
          {hasNested && (
            <div
              onClick={() => navigate(location.state.from)}
              className="p-1 border-2 border-primary rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M14.4372 16L21.0372 22.6L19.1518 24.4853L10.6665 16L19.1518 7.51465L21.0372 9.39998L14.4372 16Z"
                  fill="#5F57FF"
                />
              </svg>
            </div>
          )}
          <p className="text-xl font-semibold text-text-heading capitalize">
            {formatCustomerDetails(currentPath)}
          </p>
        </div>
      </div>
      <div className="flex flex-1 lg:gap-10 lg:justify-between items-center">
        <div class="relative md:w-lg md:max-w-2xl mx-auto">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search />
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full px-4 py-2 lg:p-4 ps-10 lg:ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://i.pravatar.cc/40" alt="Ivay Jack" />
            <AvatarFallback className={"uppercase"}>
              {user?.name?.slice(0, 1) ?? "CN"}
            </AvatarFallback>
          </Avatar>
          <div className=" flex-col">
            <h3 className="text-lg font-semibold leading-[132%] tracking-[-0.32px] capitalize">
              {user?.name ?? "Your Name"}
            </h3>
            <p className="text-base leading-[164%]">
              {user?.email ?? "example@gmail.com"}
            </p>
          </div>
        </div>
        <div className="md:hidden flex">
          <PopOver user={user} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

function PopOver({ user }) {
  return (
    <HoverCard>
      <HoverCardTrigger className="cursor-pointer">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://i.pravatar.cc/40" alt="@shadcn" />
          <AvatarFallback>{user?.name?.slice(0, 1) ?? "CN"}</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-full max-w-xs">
        <div className="flex justify-between space-x-4">
          <div className=" flex-col">
            <h3 className="text-lg font-semibold leading-[132%] tracking-[-0.32px] capitalize">
              {user?.name ?? "Your Name"}
            </h3>
            <p className="text-base leading-[164%]">
              {" "}
              {user?.email ?? "example@gmail.com"}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
