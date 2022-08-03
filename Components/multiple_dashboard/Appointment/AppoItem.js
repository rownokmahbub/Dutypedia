import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { HiDotsVertical } from "react-icons/hi";
import AppoDetailsModal from "./AppoDetailsModal";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";

const AppoItem = ({ item }) => {
  const [showAppoDetails, setShowAppoDetails] = useState(false);
  const [selectedAppo, setSelectedAppo] = useState(null);
  const { token } = useContext(AuthContext);
  const { uiDispatch } = useContext(GlobalContext);

  const handelAppoStatusChange = async (status) => {
    const Request = async () => {
      try {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/appointment/change-status`,
          {
            appointmentId: item.id,
            status: status,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        uiDispatch({ type: "DO_REFRESH" });
        return "Successfully done!";
      } catch (error) {
        throw new Error(error.response?.data?.msg);
      }
    };
    toast.promise(Request(), {
      loading: <b>Please wait...</b>,
      success: (data) => <b>{data}</b>,
      error: (err) => <b>{err.toString()}</b>,
    });
  };

  return (
    <>
      <div className="shadow-3xl rounded-md px-4 py-3">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="w-12 aspect-square rounded-md relative">
              <Image
                src={
                  item.online
                    ? item.user.profilePhoto ||
                      "/Assets/images/service/user.svg"
                    : item.offlineMember.profilePhoto ||
                      "/Assets/images/service/user.svg"
                }
                layout="fill"
              />
              {item.online && (
                <img
                  src="/Assets/icon/online.svg"
                  className="absolute w-6 right-0 bottom-0 translate-x-1/2 translate-y-1/3"
                />
              )}
            </div>
            <div>
              <p>
                {item.online
                  ? `${item.user.firstName} ${item.user.lastName}`
                  : item.offlineMember.name}
              </p>
              {item.online && (
                <p className="text-xs md:text-sm text-gray-400">
                  @{item.user.username}
                </p>
              )}
            </div>
          </div>
          <div
            onClick={() => {
              setSelectedAppo(item);
              setShowAppoDetails(true);
            }}
            className=" cursor-pointer"
          >
            <p className="text-xs">
              {format(new Date(item.date), "dd MMM yyyy")},{" "}
              {moment(item.startTime, ["HH:mm"]).format("h:mm A")}
            </p>
            <p className=" line-clamp-1">{item.title}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-10 aspect-square rounded-full flex items-center justify-center shadow-3xl">
              <img className="w-8" src="/Assets/icon/shild.svg" />
            </span>

            {item.online && (
              <span className="w-10 aspect-square rounded-full flex items-center justify-center shadow-3xl">
                <img className="w-8" src="/Assets/icon/send.svg" />
              </span>
            )}
            <Menu as="div" className=" relative">
              <Menu.Button>
                <HiDotsVertical className="text-xl" />
              </Menu.Button>
              <Menu.Items className="flex flex-col items-center absolute -ml-20 bg-white dark:bg-bg shadow-3xl  rounded-md px-3 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={() => handelAppoStatusChange("COMPLETED")}
                      className={`${
                        active
                          ? "bg-gray-200 text-black dark:text-white "
                          : "text-gray-900 dark:text-white"
                      } group flex w-full items-center rounded-[4px]  px-2 text-sm text-center cursor-pointer`}
                    >
                      <p className="text-sm">Completed</p>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={() => handelAppoStatusChange("CANCELLED")}
                      className={`${
                        active
                          ? "bg-primary-300 text-white"
                          : "text-gray-900 dark:text-white"
                      } group flex w-full items-center rounded-[4px] px-2 text-sm cursor-pointer`}
                    >
                      <p className="text-sm">Cancel</p>
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
      {selectedAppo && (
        <AppoDetailsModal
          isOpen={showAppoDetails}
          closeModal={() => setShowAppoDetails(false)}
          appoinment={selectedAppo}
        />
      )}
    </>
  );
};

export default AppoItem;