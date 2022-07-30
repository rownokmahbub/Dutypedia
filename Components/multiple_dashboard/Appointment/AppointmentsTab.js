import { cn } from "@components/service/AboutView";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import search from "/public/Assets/icon/search.svg";

const AppointmentsTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const Tabs = [
    {
      name: "Upcomming",
      content: <></>,
    },
    {
      name: "Previous",
      content: <></>,
    },
    {
      name: "Request",
      content: <></>,
    },
  ];
  return (
    <>
      <div className="text-center py-4">
        <p className="font-medium text-xl">Appointment</p>
      </div>
      <div className="flex justify-between py-8 gap-4 flex-col md:flex-row">
        <div className="relative text-gray-600 w-full md:w-[400px]">
          <input
            className="input input-bordered w-full"
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
        <div className="flex flex-shrink-0 items-center gap-4 mt-5 md:mt-0">
          <p>Filter By</p>

          <input
            className="input input-bordered"
            type="date"
            onChange={(date) => {}}
          />
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
