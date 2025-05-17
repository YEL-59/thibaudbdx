import Logo from "@/assets/svg/logo";
import Search from "@/assets/svg/search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocation } from "react-router";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1] || "home";
  return (
    <div className="border-b border-[#E8E8E8] px-8 py-5 flex justify-between">
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

        <div className="xl:flex flex-col gap-2 hidden">
          <p className="text-base leading-[164%]">{currentPath}</p>
        </div>
      </div>

      <div className="flex gap-10 justify-between">
        <div class="relative w-lg max-w-2xl">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search />
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://i.pravatar.cc/40" alt="Ivay Jack" />
            <AvatarFallback>IJ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ">
            <h3 className="text-lg font-semibold leading-[132%] tracking-[-0.32px]">
              Ivay Jack
            </h3>
            <p className="text-base leading-[164%]">Ivayjack@outlook.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
