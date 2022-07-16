import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import Link from "next/link";

const NotiIcon = () => {
  const MenuItems = [
    {
      title: "A new monthly report is ready",
      date: "December 12, 2019",
      icon: <FaUserEdit />,
      url: "/",
      bg: "bg-green-400",
    },
    {
      title: "You have a new notification",
      date: "December 12, 2019",
      icon: <BsHeartFill />,
      url: "/",
      bg: "bg-yellow-400",
    },
    {
      title: "Payment was successful",
      date: "December 12, 2019",
      icon: <IoMdExit />,
      url: "/",
      bg: "bg-pink-400",
    },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left mt-1">
      <Menu.Button className="">
        <a>
          <img src="/Assets/icon/bell.svg" />
        </a>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-20 sm:right-0 w-72 mt-2 origin-top-right bg-white divide-y divide-gray-100  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
          <Menu.Item>
            <div className="bg-primary px-4 py-2 text-white">
              Notification Center
            </div>
          </Menu.Item>
          {MenuItems.map((item, idx) => (
            <Menu.Item key={idx}>
              <Link href={item.url}>
                <a className="flex items-center gap-4 p-3">
                  <span
                    className={`w-10 aspect-square rounded-full flex justify-center items-center text-white ${item.bg}`}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-gray-400 text-xs">{item.date}</p>
                    <h4 className="font-medium text-sm text-gray-700">
                      {item.title}
                    </h4>
                  </div>
                </a>
              </Link>
            </Menu.Item>
          ))}
          <Menu.Item>
            <div className="text-center text-gray-400 text-xs py-2 px-4">
              Show all notifications
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotiIcon;
