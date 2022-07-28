import { Tab } from "@headlessui/react";
import { data } from "autoprefixer";
import { cn } from "./AboutView";
import ServiceListViewType1 from "./ServiceListViewType1";
import ServiceListViewType2 from "./ServiceListViewType2";
import ServiceListViewType3 from "./ServiceListViewType3";

export const Colors = [
  "bg-[#CFE1CD]",
  "bg-[#EEEAEA]",
  "bg-[#BED9F1]",
  "bg-[#EEBFC4]",
  "bg-[#D7D3D3]",
  "bg-[#D8EAD6]",
  "bg-[#F4F0F0]",
  "bg-[#c7e2f9]",
  "bg-[#f7c8cd]",
];

const ServiceListView = ({ data, facilites = [] }) => {
  const Tabs = [
    {
      name: "Service List",
      content: (
        <div>
          {data.type == 1 && <ServiceListViewType1 data={data} />}
          {data.type == 2 && <ServiceListViewType2 data={data} />}
          {data.type == 3 && <ServiceListViewType3 data={data} />}
        </div>
      ),
    },
    {
      name: "Extra Facilities",
      content: (
        <div>
          {facilites?.selectedOptions?.length > 0 ||
          facilites?.customOptions?.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {facilites.selectedOptions.map((item, index) => (
                <span
                  className={`sm:px-8 text-primary  px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px] ${
                    Colors[index % Colors.length]
                  }`}
                >
                  # {item.title}
                </span>
              ))}

              {facilites.customOptions.map((item, index) => (
                <span
                  className={`sm:px-8 text-primary px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px] ${
                    Colors[index % Colors.length]
                  }`}
                >
                  # {item.title}
                </span>
              ))}
            </div>
          ) : (
            <p>No extra facilites</p>
          )}
        </div>
      ),
    },
  ];
  return (
    <Tab.Group>
      <Tab.List className="flex w-max">
        {Tabs.map((item, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              cn(
                "w-full relative border-b px-4 py-2.5 focus:outline-none whitespace-nowrap dark:text-white",
                selected ? "text-primary dark:text-primary border-primary" : "hover:text-primary"
              )
            }
          >
            {index < Tabs.length - 1 && (
              <span className=" absolute right-0 w-[1px] h-6 top-1/2 -translate-y-1/2 bg-gray-100" />
            )}
            <span className="text-xl ">{item.name}</span>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="pt-8 dark:text-white">
        {Tabs.map((item, index) => (
          <Tab.Panel>{item.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ServiceListView;
