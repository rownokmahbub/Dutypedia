import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import Link from "next/link";
import AuthContext from "@lib/authContext";
import { socket } from "@lib/socket";
import toast from "react-hot-toast";

const NotiIcon = () => {
  const [notifications, setNotifications] = useState([]);
  const { user } = useContext(AuthContext);
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
    {
      title: "A new monthly report is ready",
      date: "December 12, 2019",
      icon: <FaUserEdit />,
      url: "/",
      bg: "bg-green-400",
    },
  ];

  useEffect(() => {
    socket.on("notification received", (newNotification) => {
      console.log(newNotification);
      toast.success("New notification received");
    });
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left mt-1">
      <Menu.Button className="">
        <a>
          <img src="/Assets/icon/bell.svg" />
        </a>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-75"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="fixed right-0 top-[42px] w-full max-w-sm mt-2 origin-top-right bg-white divide-y divide-gray-100 h-[calc(100vh-50px)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-x-hidden overflow-y-auto">
          <Menu.Item>
            <div className="px-4">
              <p className="font-semibold pt-2 text-xl text-gray-600">
                Notifications
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium">New</p>
                <a className="btn btn-link">See all</a>
              </div>
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
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotiIcon;
