import { Tab } from "@headlessui/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import NewAppoModal from "./NewAppoModal";
import PreviousAppo from "./PreviousAppo";
import UpcomingAppo from "./UpcomingAppo";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
const AppointmentView = ({ serviceId }) => {
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const Tabs = [
    {
      name: "Upcoming",
      content: <UpcomingAppo serviceId={serviceId} />,
    },
    {
      name: "Previous",
      content: <PreviousAppo serviceId={serviceId} />,
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
              <Tab.Panel className=''>
                {item.content}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowNewAppointment(true)}
            className="btn btn-circle btn-outline btn-primary"
          >
            <BiPlus className="text-4xl" />
          </button>
        </div>
      </div>
      <NewAppoModal
        isOpen={showNewAppointment}
        closeModal={() => setShowNewAppointment(false)}
        serviceId={serviceId}
      />
    </>
  );
};

export default AppointmentView;
