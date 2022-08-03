import { format } from "date-fns";
import { BsFillBellFill } from "react-icons/bs";
import moment from "moment";
import { Menu } from "@headlessui/react";
import { HiDotsVertical } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { GlobalContext } from "@lib/globalContext";
import AuthContext from "@lib/authContext";

const AppoItem = ({ item, type }) => {
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
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <span className="w-8 aspect-square rounded-full shadow-md flex justify-center items-center dark:bg-gray-600 text-primary">
          <BsFillBellFill />
        </span>
        <div>
          <p className="text-xs">
            {format(new Date(item.date), "dd MMM yyyy")},{" "}
            {moment(item.startTime, ["HH:mm"]).format("h:mm A")}
          </p>
          <p className=" line-clamp-1">{item.title}</p>
          <p
            className={`line-clamp-1 text-xs italic ${
              item.status == "PENDING"
                ? "text-yellow-500"
                : item.status === "COMPLETED"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            ({item.status})
          </p>
        </div>
      </div>

      <Menu as="div" className=" relative">
        <Menu.Button>
          <HiDotsVertical className="text-xl" />
        </Menu.Button>
        <Menu.Items className="flex flex-col items-center absolute -ml-20 bg-white dark:bg-bg shadow-3xl  rounded-md px-3 py-1">
          {type !== "receive" && (
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => handelAppoStatusChange("COMPLETED")}
                  className={`${
                    active
                      ? "bg-gray-200 dark:bg-gray-600 text-black dark:text-white "
                      : "text-gray-900 dark:text-white"
                  } group flex w-full items-center rounded-[4px]  px-2 text-sm text-center cursor-pointer`}
                >
                  <p className="text-sm">Completed</p>
                </a>
              )}
            </Menu.Item>
          )}
          {type !== "receive" && (
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
          )}
          {type === "receive" && (
            <>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handelAppoStatusChange("APPROVED")}
                    className={`${
                      active
                        ? "bg-gray-200 dark:bg-gray-600 text-black dark:text-white "
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-[4px]  px-2 text-sm text-center cursor-pointer`}
                  >
                    <p className="text-sm">Accept</p>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => handelAppoStatusChange("REJECTED")}
                    className={`${
                      active
                        ? "bg-primary-300 text-white"
                        : "text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-[4px] px-2 text-sm cursor-pointer`}
                  >
                    <p className="text-sm">Rejected</p>
                  </a>
                )}
              </Menu.Item>
            </>
          )}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default AppoItem;
