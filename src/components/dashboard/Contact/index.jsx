import Rightarrow from "@/assets/svg/rightarrow";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Search from "@/assets/svg/search";
import Mapicon from "@/assets/svg/mapicon";
import Noimg from "@/assets/svg/noimg";
import ProspectList from "./ProspectList";
import MapTable from "./MapTable";

// Dummy components for each tab

function ClientList() {
  return (
    <div data-aos="fade-up">
      <Card>
        <CardContent className="p-5">
          <p className="text-sm font-semibold text-gray-800">
            Client contacts will be shown here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function InactiveList() {
  return (
    <div data-aos="fade-up">
      <Card>
        <CardContent className="p-5">
          <p className="text-sm font-semibold text-gray-800">
            Inactive contacts will be shown here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Contact() {
  const [selectedType, setSelectedType] = useState("Prospect");
  const [showMap, setShowMap] = useState(false);

  const renderTabComponent = () => {
    switch (selectedType) {
      case "Prospect":
        return <ProspectList />;
      case "Client":
        return <ClientList />;
      case "Inactive":
        return <InactiveList />;
      default:
        return null;
    }
  };

  return (
    <div className="relative grid grid-cols-1  gap-6 p-4">
      {/* Left Column */}
      <div className="space-y-6">
        {/* Tabs + Content */}
        <section className="space-y-4" data-aos="fade-up">
          <div className="flex justify-between">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 font-['poppins']">
              {["Prospect", "Client", "Inactive"].map((type) => (
                <Button
                  key={type}
                  variant="outline"
                  className={`${
                    selectedType === type
                      ? "bg-[#615EF0] text-white"
                      : "text-[#615EF0]"
                  }`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <div class="relative w-lg max-w-2xl">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                </div>
                <div>
                  <div
                    onClick={() => setShowMap((prev) => !prev)}
                    className="border rounded-full h-12 w-12 flex items-center justify-center p-3"
                  >
                    <Mapicon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Component based on selected tab */}
          <div>
            {renderTabComponent()} {showMap && <MapTable />}
          </div>
        </section>
      </div>

      {/* Floating Add Button */}
      <div
        className="absolute bottom-0 right-0"
        data-aos="zoom-in"
        data-aos-delay="700"
      >
        <Button className="rounded-full w-14 h-14 text-3xl bg-[#615EF0] text-white shadow-lg">
          +
        </Button>
      </div>
    </div>
  );
}
