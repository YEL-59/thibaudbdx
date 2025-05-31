import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router";

const testingData = [
  {
    id: 1,
    type: "tasting",
    name: "Tasting name",
    date: "2nd April",
    time: "8:30pm",
    productList: ["Product Name 1", "Product Name 2"],
    noteDetails:
      "Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. ",
  },
  {
    id: 2,
    type: "tasting",
    name: "Tasting name",
    date: "2nd April",
    time: "8:30pm",
    productList: ["Product Name 3"],
    noteDetails:
      "Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. ",
  },
  {
    id: 3,
    type: "tasting",
    name: "Tasting name",
    date: "2nd April",
    time: "8:30pm",
    productList: ["Product Name 4", "Product Name 5", "Product Name 6"],
    noteDetails:
      "Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. ",
  },
  {
    id: 4,
    type: "tasting",
    name: "Tasting name",
    date: "2nd April",
    time: "8:30pm",
    productList: ["Product Name 7"],
    noteDetails:
      "Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. ",
  },
  {
    id: 5,
    type: "tasting",
    name: "Tasting name",
    date: "2nd April",
    time: "8:30pm",
    productList: ["Product Name 8", "Product Name 9"],
    noteDetails:
      "Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. Discuss the upcoming project plans and deliverables with Jhon. ",
  },
];

export default function TastingDetails() {
  const { tastingId } = useParams();
  const tastingSingleInfo = testingData.find(
    (item) => item.id === parseInt(tastingId)
  );

  if (!tastingSingleInfo) {
    return (
      <section>
        <div className="container py-10">
          <Card>
            <CardHeader>
              <CardTitle>Notes not found</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                No notes data available for this ID.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
  const { name, time, noteDetails } = tastingSingleInfo;
  return (
    <section>
      <div className="container">
        <Card
          className="mb-3 border-none gap-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold text-[#262525]">{name}</div>
            </div>
          </CardHeader>
        </Card>
        <Card
          className="mb-3 border-none gap-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold text-[#262525]">
                Note Details
              </div>
            </div>
          </CardHeader>
          <CardContent className="min-h-[100px] text-xs text-gray-400 pb-20">
            {noteDetails}
          </CardContent>
        </Card>
        {/* Delete Button */}
        <div className="flex justify-center mt-16">
          <Button className="bg-[#615EF0] text-white w-60 h-11 rounded-md text-base font-medium">
            Delete
          </Button>
        </div>
      </div>
    </section>
  );
}
