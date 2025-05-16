import Rightarrow from "@/assets/svg/rightarrow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function HomeDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-4">
      {/* Left Column */}
      <div className="space-y-6">
        {/* Tabs + Meetings List */}
        <section className="space-y-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="bg-[#615EF0] text-white">
              Upcoming Meeting(5)
            </Button>
            <Button variant="outline" className="text-[#615EF0]">
              Upcoming Task(4)
            </Button>
            <Button variant="outline" className="text-[#615EF0]">
              Upcoming Tasting(4)
            </Button>
          </div>

          {/* Meeting Cards */}
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Card key={idx} className="border border-gray-200">
                <CardContent className="p-0 px-5 flex justify-between items-center">
                  <div className="border-l-4 border-indigo-500">
                    <p className="font-semibold text-sm ml-2">Meeting</p>
                    <p className="text-xs text-gray-500 ml-2">
                      7 Jun 2025 — 10:00 AM
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

        {/* Last Sales Update */}
        <section>
          <Card className="bg-[#A0A3F3]">
            <CardHeader className="text-white text-sm font-semibold">
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
        {/* Last Contacts Created */}
        <Card className="bg-[#C8C7FF] p-4">
          <CardHeader>
            <h1>Last Contacts Created</h1>
          </CardHeader>
          <div className="bg-white rounded-lg p-1">
            <div className="text-sm font-semibold text-black flex justify-between items-center  px-5 py-2">
              <span>9 contacts created</span>
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
                    <p className="text-sm font-medium text-[#615EF0]">
                      Knight Tiger
                    </p>
                    <p className="text-xs text-gray-500">
                      institute.of.technology.co
                    </p>
                  </div>
                  <span className="text-[#615EF0]">
                    <Rightarrow />{" "}
                  </span>
                </div>
              ))}
            </CardContent>
          </div>
        </Card>

        {/* Last Products Added */}
        <Card className="bg-[#C8A9F3]">
          <CardHeader className="text-sm font-semibold text-white flex justify-between items-center">
            <span>7 products created</span>
            <Button variant="link" className="text-white p-0 h-auto">
              View all
            </Button>
          </CardHeader>
          <CardContent className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-2">
                <p className="text-sm text-gray-700">{i + 1}. Product Name</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Floating Add Button */}
        <div className="absolute bottom-0 right-0">
          <Button className="rounded-full w-14 h-14 text-3xl bg-[#615EF0] text-white shadow-lg">
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
