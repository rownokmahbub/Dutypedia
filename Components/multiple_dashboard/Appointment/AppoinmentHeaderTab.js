import { Tab } from "@headlessui/react";
import { Truncate } from "@lib/utils";
import { useState } from "react";
import OfflineSearch from "./OfflineSearch";
import OnlineSearch from "./OnlineSearch";
import Image from "next/image";
import cross from '/public/Assets/icon/cross.png'
const Tabs = [
  {
    name: "DutyPediaUser",
    content:<OnlineSearch/>

  },
  {
    name: "Offline",
    content:<OfflineSearch/>
   
  
  },
];
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
const AppoinmentHeaderTab = ({onClose}) => {
  const [aboutReadAll, setAboutReadAll] = useState(false);
  const [addressReadAll, setAddressReadAll] = useState(false);
  return (
    <div className="shadow-3xl h-max  bg-white rounded-xl overflow-hidden p-4">
          <div onClick={onClose} className="flex mr-3 justify-end cursor-pointer ">
        <Image src={cross} width={50} height={50} alt='ncjdnc'/>
        </div>
      <Tab.Group>
        <Tab.List className="flex max-w-md mx-auto">
          {Tabs.map((item, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                cn(
                  "w-full relative border-b px-4 py-2.5 text-sm focus:outline-none whitespace-nowrap",
                  selected
                    ? "text-primary border-primary"
                    : "hover:text-primary"
                )
              }
            >
              {index < Tabs.length - 1 && (
                <span className=" absolute right-0 w-[1px] h-6 top-1/2 -translate-y-1/2 bg-gray-100" />
              )}
              {item.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="pt-4">
          {Tabs.map((item, index) => (
            <Tab.Panel>
            {item.content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default AppoinmentHeaderTab;
