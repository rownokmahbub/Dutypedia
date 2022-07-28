import { Tab } from "@headlessui/react";
import { Truncate } from "@lib/utils";
import { useState } from "react";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
const AboutView = ({ about, address }) => {
  const [aboutReadAll, setAboutReadAll] = useState(false);
  const [addressReadAll, setAddressReadAll] = useState(false);

  const Tabs = [
    {
      name: "About",
      content: about,
    },
    {
      name: "Address",
      content: (
        <div>
          <p>State : {address.region}</p>
          <p>City : {address.city}</p>
          <p>Area : {address.area}</p>
          <p>{address.address}</p>
        </div>
      ),
    },
  ];
  return (
    <div className="shadow-3xl h-max  bg-white dark:bg-bg-300 rounded-xl overflow-hidden p-4">
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
            <Tab.Panel>
              {item.name === "About" && (
                <>
                  <Truncate
                    str={item.content}
                    length={aboutReadAll ? item.content.length : 150}
                    ending={
                      <button
                        onClick={() => setAboutReadAll(true)}
                        className="text-primary"
                      >
                        ...Read more....
                      </button>
                    }
                  />

                  {aboutReadAll && (
                    <a
                      onClick={() => {
                        setAboutReadAll(false);
                      }}
                      className="text-primary cursor-pointer"
                    >
                      ...Read less...
                    </a>
                  )}
                </>
              )}

              {item.name === "Address" && (
                <>
                  <Truncate
                    str={item.content}
                    length={addressReadAll ? item.content.length : 150}
                    ending={
                      <button
                        onClick={() => setAddressReadAll(true)}
                        className="text-primary"
                      >
                        ...Read more....
                      </button>
                    }
                  />

                  {addressReadAll && (
                    <a
                      onClick={() => {
                        setAddressReadAll(false);
                      }}
                      className="text-primary cursor-pointer"
                    >
                      ...Read less...
                    </a>
                  )}
                </>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default AboutView;
