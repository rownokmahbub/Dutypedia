import { format } from "date-fns";
import Image from "next/image";

const NotificationItem = ({ item }) => {
  if (item.notificationType === "MEMBER_REQUEST") {
    return (
      <a className="flex items-start gap-4 p-3">
        <span
          className={`w-10 relative aspect-square rounded-full flex justify-center items-center text-white ${item.bg}`}
        >
          <Image
            src={
              item.userFrom.profilePhoto || "/Assets/images/service/user.svg"
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
          <div className="flex items-center gap-2 mt-1">
            <button className="btn rounded btn-sm btn-success capitalize font-medium">
              Accept
            </button>
            <button className="btn rounded btn-sm btn-error capitalize font-medium">
              Cancel
            </button>
          </div>
        </div>
      </a>
    );
  }

  return <></>;
};

export default NotificationItem;
