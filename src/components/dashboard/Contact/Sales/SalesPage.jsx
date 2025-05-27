import images from "@/constants/images";
import React from "react";

const salesData = [
  {
    id: 1,
    column1: 101,
    date: "Apr 20, 2024",
    amount: 1200,
    status: true,
  },
  {
    id: 2,
    column1: 101,
    date: "Apr 20, 2024",
    amount: 1200,
    status: true,
  },
  {
    id: 3,
    column1: 101,
    date: "Apr 20, 2024",
    amount: 1200,
    status: true,
  },
  {
    id: 4,
    column1: 101,
    date: "Apr 20, 2024",
    amount: 1200,
    status: true,
  },
];

const SalesPage = () => {
  const hasSalesData = salesData.length > 0;

  let content;

  switch (hasSalesData) {
    case true:
      content = <SalesItem />;
      break;
    case false:
      content = <NoDataPage />;
      break;
  }

  return (
    <section>
      <div className="container relative">{content}</div>
    </section>
  );
};

export default SalesPage;

function SalesItem() {
  return (
    <div className="flex flex-col gap-4 mt-40">
      {salesData.map((item, index) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-[#f5f3f3] rounded-lg px-6 py-4"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="flex items-center gap-8">
            <span className="text-lg font-semibold text-[#232323] w-12">
              {item.column1}
            </span>
            <span className="text-base text-[#232323]">{item.date}</span>
            <span className="text-base font-semibold text-[#232323]">
              $
              {item.amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
          <span className="bg-green-50 text-green-600 text-sm px-4 py-1 rounded-md font-medium">
            {item.status ? "Completed" : "Pending"}
          </span>
        </div>
      ))}
    </div>
  );
}

function NoDataPage() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center">
      <img src={images.empty_folder_2} alt="Empty Folder" />
      <div className="text-center mt-12">
        <p className="text-sm font-poppins text-text-paragraph-400">
          No sales report yet. Add sales report to <br /> tap the button below.
        </p>
      </div>
    </div>
  );
}
