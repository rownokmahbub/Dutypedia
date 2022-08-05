import { format } from "date-fns";
import { BsFillBellFill } from "react-icons/bs";
import moment from "moment";

const AppoItem = ({ item }) => {
  return (
    <div>
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
        </div>
      </div>
    </div>
  );
};

export default AppoItem;
