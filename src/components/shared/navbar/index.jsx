import Logo from "@/assets/svg/logo";

function Navbar({ sidebarOpen, setSidebarOpen }) {
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
          <p className="text-base leading-[164%]">Welcome Back</p>
          <h3 className="text-lg font-semibold leading-[132%] tracking-[-0.32px]">
            Ivay
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img src={<Logo />} alt="user" />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold leading-[132%] tracking-[-0.32px]">
            Ivay Jack
          </h3>
          <p className="text-base leading-[164%]">Ivayjack@outlook.com</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
