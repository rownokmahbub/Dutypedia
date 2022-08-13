import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";
import { emitNotification } from "@lib/socket";
import axios from "axios";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const NotificationItem = ({ item }) => {
  const { token, user } = useContext(AuthContext);
  const { uiDispatch } = useContext(GlobalContext);
  const [memberRequestAcceptIsLoading, setMemberRequestAcceptIsLoading] =
    useState(false);
  const [memberRequestRejectIsLoading, setMemberRequestRejectIsLoading] =
    useState(false);
  const handelMemberRequest = async (status) => {
    try {
      if (status === "APPROVED") {
        setMemberRequestAcceptIsLoading(true);
      } else {
        setMemberRequestRejectIsLoading(true);
      }
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/members/online/update-status/${item.entityId}`,
        {
          notificationId: item.id,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(`Request ${status}!`);
      emitNotification(data.userId, user);
      uiDispatch({
        type: "DO_REFRESH",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg);
    } finally {
      if (status === "APPROVED") {
        setMemberRequestAcceptIsLoading(false);
      } else {
        setMemberRequestRejectIsLoading(false);
      }
    }
  };

  if (item.notificationType === "MEMBER_REQUEST") {
    return (
      <a className="flex items-start gap-4 p-3 relative">
        <div
          className={`w-10 relative aspect-square rounded-full flex justify-center items-center text-white ${item.bg}`}
        >
          <Image
            src={
              item.service?.profilePhoto || "/Assets/images/service/user.svg"
            }
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute  -bottom-2 -right-3">
            <img
              className="w-4"
              src="/Assets/icon/member.svg"
              alt=""
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-700 line-clamp-2">
            {item.message}
          </h4>
          <p className="text-gray-400 text-xs my-2">
            {format(new Date(item.createdAt), "MM-dd-yyyy h:mm a")}
          </p>
          {!item.archived && (
            <div className="flex items-center gap-2 mt-1">
              <button
                disabled={
                  memberRequestAcceptIsLoading || memberRequestRejectIsLoading
                }
                onClick={() => handelMemberRequest("APPROVED")}
                className={`btn rounded-xl border-none btn-sm bg-[#29c86e] shadow-3xl capitalize font-medium ${
                  memberRequestAcceptIsLoading && "loading"
                }`}
              >
                Accept
              </button>
              <button
                disabled={
                  memberRequestRejectIsLoading || memberRequestAcceptIsLoading
                }
                onClick={() => handelMemberRequest("REJECTED")}
                className={`btn rounded-xl btn-sm shadow-sm bg-primary-400 border-primary hover:border-primary hover:bg-white hover:text-primary capitalize font-medium ${
                  memberRequestRejectIsLoading && "loading"
                }`}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </a>
    );
  }

  if (item.notificationType === "MEMBER_STATUS_CHANGE") {
    return (
      <a className="flex items-start gap-4 p-3">
        <span
          className={`w-10 relative aspect-square rounded-full flex justify-center items-center text-white ${item.bg}`}
        >
          <Image
            src={
              item.userFrom?.profilePhoto || "/Assets/images/service/user.svg"
            }
            layout="fill"
            objectFit="cover"
          />
        </span>
        <div>
          <p className="text-gray-400 text-xs">
            {format(new Date(item.createdAt), "MM-dd-yyyy h:mm a")}
          </p>
          <h4 className="font-medium text-sm text-gray-700 line-clamp-2">
            {item.message}
          </h4>
        </div>
      </a>
    );
  }

  if (item.notificationType === "NEW_ORDER") {
    return (
      <Link
        href={
          item.availableFor == "VENDOR"
            ? `/dashboard/multiple/orders?orderId=${item.entityId}`
            : `/profile/${user.username}`
        }
      >
        <a className="flex items-start gap-4 p-3">
          <span
            className={`w-10 relative aspect-square rounded-full flex justify-center items-center text-white ${item.bg}`}
          >
            <Image
              src={
                item.userFrom?.profilePhoto || "/Assets/images/service/user.svg"
              }
              layout="fill"
              objectFit="cover"
            />
          </span>
          <div>
            <p className="text-gray-400 text-xs">
              {format(new Date(item.createdAt), "MM-dd-yyyy h:mm a")}
            </p>
            <h4 className="font-medium text-sm text-gray-700 line-clamp-2">
              {item.message}
            </h4>
          </div>
        </a>
      </Link>
    );
  }

  if (item.notificationType === "NEW_APPOINTMENT") {
    return (
      <a className="flex items-start gap-4 p-3">
        <span
          className={`w-10 relative aspect-square rounded-full flex justify-center items-center text-white ${item.bg}`}
        >
          <Image
            src={
              item.userFrom?.profilePhoto || "/Assets/images/service/user.svg"
            }
            layout="fill"
            objectFit="cover"
          />
        </span>
        <div>
          <p className="text-gray-400 text-xs">
            {format(new Date(item.createdAt), "MM-dd-yyyy h:mm a")}
          </p>
          <h4 className="font-medium text-sm text-gray-700 line-clamp-2">
            {item.message}
          </h4>
        </div>
      </a>
    );
  }

  return <></>;
};

export default NotificationItem;
