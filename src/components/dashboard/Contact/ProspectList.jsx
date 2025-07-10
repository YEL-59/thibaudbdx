import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Noimg from "@/assets/svg/noimg";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import images from "@/constants/images";

const mockData = [
  {
    id: "defghjkwertyhujkl",
    ownerName: "John Doe",
    company: "Acme Inc.",
    address: "123 Main St, Dhaka",
    phone: "+8801712345678",
    email: "john@acme.com",
    contactType: "Prospect",
  },
  {
    id: "dnvvjweerpocdndaspjdk",
    ownerName: "Jane Smith",
    company: "Beta Corp",
    address: "456 Market Rd, Chattogram",
    phone: "+8801912345678",
    email: "jane@beta.com",
    contactType: "Client",
  },
  {
    id: "dnvvjweerpocdndwgtaspjdk",
    ownerName: "Jon Weeks",
    company: "Beta Corp",
    address: "456 Market Rd, Chattogram",
    phone: "+8801912345678",
    email: "weeks@beta.com",
    contactType: "Client",
  },
];

const ProspectList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hasProspectDetails = mockData.length > 0;

  // const [selectedType, setSelectedType] = useState("Prospect");

  // const renderTabComponent = () => {
  //   switch (selectedType) {
  //     case "Prospect":
  //       return <ProspectList />;
  //     case "Client":
  //       return <ClientList />;
  //     case "Inactive":
  //       return <InactiveList />;
  //     default:
  //       return null;
  //   }
  // };

  if (!hasProspectDetails) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center">
        <img src={images.empty_folder_3} alt="Empty Folder" />
        <div className="text-center mt-4">
          <p className="text-sm font-poppins text-text-paragraph-400 mt-3">
            You don’t have any prospect. <br />
            Add prospect!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div data-aos="fade-up">
      {mockData.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50%]">
          <Noimg />
          <p className="text-gray-500 mt-4 max-w-[14rem] mx-auto text-center">
            You don’t have any prospect. Add prospect!
          </p>
        </div>
      ) : (
        <div className="flex-1 overflow-auto">
          <div className="min-w-[900px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className={"h-auto py-5 text-gray-400"}>Owner Name</TableHead>
                  <TableHead className={"h-auto py-5 text-gray-400"}>Company</TableHead>
                  <TableHead className={"h-auto py-5 text-gray-400"}>Address</TableHead>
                  <TableHead className={"h-auto py-5 text-gray-400"}>Phone</TableHead>
                  <TableHead className={"h-auto py-5 text-gray-400"}>Email</TableHead>
                  <TableHead className={"h-auto py-5 text-gray-400"}>Contact Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((item, index) => (
                  <TableRow
                    key={index}
                    onClick={() =>
                      navigate(`/contact/${item.id}/customer-details`, {
                        state: { from: location.pathname, isNew: true },
                      })
                    }
                    className="cursor-pointer hover:bg-gray-100 select-none last:!border-b"
                  >
                    <TableCell className={"h-auto py-6"}>
                      {item.ownerName}
                    </TableCell>
                    <TableCell className={"h-auto py-6"}>
                      {item.company}
                    </TableCell>
                    <TableCell className={"h-auto py-6"}>
                      {item.address}
                    </TableCell>
                    <TableCell className={"h-auto py-6"}>
                      {item.phone}
                    </TableCell>
                    <TableCell className={"h-auto py-6"}>
                      {item.email}
                    </TableCell>
                    <TableCell className={"h-auto py-6"}>
                      {item.contactType}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProspectList;
