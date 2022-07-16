import DropdownMenu from "Components/global/DropdownMenu";
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";

const DashboardSidebar = ({ data }) => {
  const [isGroupHovered, setIsGroupHovered] = useState(false);
  return (
    <aside
      onMouseEnter={() => setIsGroupHovered(true)}
      onMouseLeave={() => setIsGroupHovered(false)}
      className="hover:w-80 group hidden duration-300 ease-in-out-expo w-[55px] bg-white/70 backdrop-blur-lg backdrop-saturate-150 items-center lg:items-baseline overflow-x-hidden lg:overflow-hidden shadow-md sm:flex flex-col z-40 h-full"
    >
      <div className="w-full py-4 px-8 mx-auto flex-col justify-center items-center text-center gap-2 hidden group-hover:flex">
        <div className=" relative w-20 aspect-square overflow-hidden rounded-xl"></div>
        <div className="">
          <p>Md Masud Reja</p>
          <p className="text-sm">Builder</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto w-full">
        {data.map((item, i) => (
          <div key={i} className="w-full relative">
            {item.dropdownList ? (
              <DropdownMenu
                title={
                  <a className="flex group hover:text-white cursor-pointer justify-center lg:justify-start items-center text-lg rounded-lg font-medium p-2 gap-6">
                    <span className="text-2xl sidebar-icon">{item.icon}</span>
                    <span className="text-base !hidden lg:line-clamp-1 group-hover:!block">
                      {item.title}
                    </span>
                  </a>
                }
                menuItems={item.dropdownList}
                isGroupHovered={isGroupHovered}
              />
            ) : (
              <div className="px-2">
                <Link href={item.link}>
                  <div className="flex group hover:text-white cursor-pointer justify-center hover:bg-primary lg:justify-start items-center text-lg rounded-lg font-medium p-2 gap-6">
                    <span className="text-2xl sidebar-icon">{item.icon}</span>
                    <span className="text-base !hidden lg:line-clamp-1 group-hover:!block">
                      {item.title}
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
