import { Tab } from "@headlessui/react";
import { useState } from "react";
import PreviousAppo from "./PreviousAppo";
import RequestAppoTab from "./RequestAppoTab";
import UpcomingAppo from "./UpcomingAppo";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
const UserAppoinment = ({ serviceId }) => {
  const Tabs = [
    {
      name: "Upcoming",
      content: <UpcomingAppo />,
    },
    {
      name: "Previous",
      content: <PreviousAppo />,
    },
    {
      name: "Request",
      content: <RequestAppoTab />,
    },
  ];
  return (
    <>
      <div className="shadow-3xl h-max  bg-white dark:bg-bg-300 rounded-xl overflow-hidden p-4">
        <h4 className="text-center dark:text-white mb-2">Appointment</h4>
        <Tab.Group>
          <Tab.List className="flex max-w-md mx-auto">
            {Tabs.map((item, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  cn(
                    "w-full relative border-b px-4 py-2.5 text-sm focus:outline-none whitespace-nowrap dark:text-white",
                    selected
                      ? "text-primary dark:text-primary border-primary"
                      : "hover:text-primary"
                  )
                }
              >
                {index < Tabs.length - 1 && (
                  <span className=" absolute right-0 w-[1px] h-6 top-1/2 -translate-y-1/2 bg-gray-100 dark:text-white" />
                )}
                {item.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="pt-4 dark:text-white">
            {Tabs.map((item, index) => (
              <Tab.Panel>{item.content}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default UserAppoinment;
