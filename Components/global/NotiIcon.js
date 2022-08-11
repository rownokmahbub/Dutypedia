import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState, useEffect } from "react";
import AuthContext from "@lib/authContext";
import { socket } from "@lib/socket";
import axios from "axios";
import { useRefEffect } from "react-use-ref-effect";
import { CgSpinner } from "react-icons/cg";
import NotificationItem from "@components/multiple_dashboard/Notification/NotificationItem";
import { GlobalContext } from "@lib/globalContext";

const NotiIcon = () => {
  const [notifications, setNotifications] = useState([]);
  const { user, token } = useContext(AuthContext);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { useUi } = useContext(GlobalContext);

  const notiMenu = useRefEffect((element) => {
    setIsOpen(true);
    return () => {
      setIsOpen(false);
    };
  }, []);

  const refreshNotificationsBadge = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/notification/get-unread-count`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUnreadCount(data.count);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNotifications = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/notification/get-notifications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNotifications(data.notifications);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchNotifications();
      setUnreadCount(0);
    }
  }, [isOpen, useUi.refresh]);

  useEffect(() => {
    refreshNotificationsBadge();
    socket.on("notification received", (newNotification) => {
      refreshNotificationsBadge();
      if (isOpen) {
        fetchNotifications();
        setUnreadCount(0);
      }
    });
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left mt-1">
      <Menu.Button className="relative">
        <a>
          <img src="/Assets/icon/bell.svg" />
        </a>
        {unreadCount > 0 && (
          <span className="flex top-0 right-0 absolute w-5 aspect-square rounded-full bg-primary justify-center items-center text-xs font-semibold text-white translate-x-1/2 -translate-y-1/2">
            {unreadCount}
          </span>
        )}
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
        <Menu.Items className="fixed right-0 top-[42px] w-full max-w-sm mt-2 origin-top-right dark:bg-[#202020] bg-white divide-y divide-gray-100 h-[calc(100vh-50px)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-x-hidden overflow-y-auto">
          <Menu.Item>
            <div className="px-4">
              <p
                ref={notiMenu}
                className="font-semibold pt-2 text-xl text-gray-600 dark:text-gray-300"
              >
                Notifications
              </p>
              <div className="flex justify-between items-center">
                <p className="font-medium">New</p>
                <a className="btn btn-link">See all</a>
              </div>
            </div>
          </Menu.Item>
          {isLoading ? (
            <div className="w-full h-[150px] flex justify-center items-center bg-white dark:bg-bg">
              <span className="text-primary text-4xl animate-spin">
                <CgSpinner />
              </span>
            </div>
          ) : (
            notifications.map((item, idx) => (
              <Menu.Item key={idx}>
                <NotificationItem item={item} />
              </Menu.Item>
            ))
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotiIcon;
