import DocsIcon from "@/assets/svg/DocsIcon";
import { Card } from "@/components/ui/card";
import { Link, Outlet, useNavigate, useParams } from "react-router";

const testingData = [
  {
    id: 1,
    type: "tasting",
    name: "Tasting name",
    date: "2nd April",
    time: "8:30pm",
    productList: ["Product Name 1", "Product Name 2"],
    noteDetails: "Some important notes about this tasting.",
  },
  {
    id: 2,
    type: "tasting",
    name: "Tasting name",
    date: "2nd April",
    time: "8:30pm",
    productList: ["Product Name 3"],
    noteDetails: "Additional observations from the tasting session.",
  },
  {
    id: 3,
    type: "tasting",
    name: "Tasting name",
    date: "2nd April",
    time: "8:30pm",
    productList: ["Product Name 4", "Product Name 5", "Product Name 6"],
    noteDetails: "Specific feedback on the listed products.",
  },
  {
    id: 4,
    type: "tasting",
    name: "Tasting name",
    date: "2nd April",
    time: "8:30pm",
    productList: ["Product Name 7"],
    noteDetails: "A brief summary of the tasting experience.",
  },
  {
    id: 5,
    type: "tasting",
    name: "Tasting name",
    date: "2nd April",
    time: "8:30pm",
    productList: ["Product Name 8", "Product Name 9"],
    noteDetails: "Further details or comments on the products tasted.",
  },
];

export function TastingDetailsPageLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export function TastingDetailsPage() {
  return (
    <section>
      <div className="container">
        <TastingItem />
        <CreateTastingButton />
      </div>
    </section>
  );
}

function TastingItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="space-y-5 mt-10">
      {testingData.map((item, index) => (
        <div key={item?.id} data-aos="fade-up" data-aos-delay={index * 100}>
          <Card
            className="px-3 py-2.5 rounded-xl flex-row justify-between items-center border-transparent cursor-pointer transition-all duration-300 hover:scale-[101%]"
            onClick={() =>
              navigate(
                `/contact/${id}/customer-details/tasting/tasting-details/${item?.id}`
              )
            }
          >
            <div className="flex items-center gap-5">
              <div className="bg-primary w-fit p-1.5 rounded-sm">
                <DocsIcon />
              </div>
              <div className="flex flex-col">
                <h3 className="text-md font-medium text-shadow-card-foreground">
                  {item?.name}
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

function CreateTastingButton() {
  return (
    <div className="bg-secondary absolute bottom-20 right-20 rounded-full border-2 flex items-center justify-center transition-all duration-500 p-4">
      <Link
        to="create-tasting"
        className="bg-primary p-5 rounded-full inline-block"
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
      </Link>
    </div>
  );
}
