import Rightarrow from "@/assets/svg/rightarrow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeDashboard() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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

  const [selectedType, setSelectedType] = useState("Meeting");

  const filteredItems = dashboardItems.filter(
    (item) => item.type === selectedType
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-4">
      {/* Left Column */}
      <div className="space-y-6">
        {/* Tabs + List */}
        <section className="space-y-4" data-aos="fade-up">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 font-['poppins']">
            {["Meeting", "Task", "Tasting"].map((type) => (
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
                Upcoming {type}s (
                {dashboardItems.filter((item) => item.type === type).length})
              </Button>
            ))}
          </div>

          {/* Cards */}
          <div className="space-y-3">
            {filteredItems.map((item, idx) => (
              <Card
                key={item.id}
                className="border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={`${idx * 100}`}
              >
                <CardContent className="p-0 px-5 flex justify-between items-center">
                  <div className="border-l-4 border-indigo-500">
                    <p className="font-semibold text-sm ml-2">{item.title}</p>
                    <p className="text-xs text-gray-500 ml-2">
                      {item.date} — {item.time}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <span className="text-gray-400">⋮</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sales Update */}
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
      </div>

      {/* Right Column */}
      <div className="space-y-6 relative">
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
    </div>
  );
}
