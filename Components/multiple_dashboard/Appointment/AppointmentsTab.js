import { cn } from "@components/service/AboutView";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import PreviousAppoDashboard from "./PreviousAppo";
import RequestAppoTab from "./RequestAppoTab";
import UpcomingAppoDashboard from "./UpcomingAppo";
import search from "/public/Assets/icon/search.svg";

const AppointmentsTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const Tabs = [
    {
      name: "Upcoming",
      content: <UpcomingAppoDashboard searchTerm={searchTerm} />,
    },
    {
      name: "Previous",
      content: <PreviousAppoDashboard searchTerm={searchTerm} />,
    },
    {
      name: "Request",
      content: <RequestAppoTab searchTerm={searchTerm} />,
    },
  ];
  return (
    <>
      <div className="text-center sm:py-4">
        <p className="font-medium text-xl hidden sm:block">Appointment</p>
      </div>
      <div className="flex justify-between py-8 gap-4 flex-row">
        <div className="relative text-gray-600 w-48 md:w-[400px]">
          <input
            className="input input-bordered w-full dark:bg-bg-300 border-[#515150] h-10 pr-10"
            type="search"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Image src={search} width={16} height={16} alt="search" />
          </div>
        </div>
        <div className="flex flex-shrink-0 relative items-center gap-4 sm:mt-5 md:mt-0">
          <p className="sm:block hidden">Filter By</p>

          <input
            className="input input-bordered dark:bg-bg-300 border-[#515150] h-10 w-[134px] sm:w-38"
            type="date"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          {/* <div className="bg-primary  px-2 py-2 items-center rounded-r-md absolute right-0">
            <img className="w-6" src="/Assets/icon/calendar.svg" alt="" />
          </div> */}
        </div>
      </div>
      <Tab.Group>
        <Tab.List className="flex w-full justify-between">
          {Tabs.map((item, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                cn(
                  "w-full relative border-b dark:text-white px-2 py-2.5 focus:outline-none whitespace-nowrap",
                  selected
                    ? "text-primary dark:text-primary border-primary"
                    : "hover:text-primary"
                )
              }
            >
              {index < Tabs.length - 1 && (
                <span className=" absolute right-0 w-[1px] h-6 top-1/2 -translate-y-1/2 bg-gray-100" />
              )}
              <span className="">{item.name}</span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="pt-8">
          {Tabs.map((item, index) => (
            <Tab.Panel>{item.content}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default AppointmentsTab;
