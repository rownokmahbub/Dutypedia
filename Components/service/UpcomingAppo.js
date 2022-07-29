import LoadingScreen from "@components/global/LoadingScreen";
import AuthContext from "@lib/authContext";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { format } from "date-fns";
import { BsFillBellFill } from "react-icons/bs";
import moment from "moment";

const UpcomingAppo = ({ serviceId }) => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/appointment/get/upcoming?serviceId=${serviceId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data.appointments);
        setAppointments(data.appointments);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  if (isLoading) {
    return <LoadingScreen fullScreen={false} />;
  }

  return (
    <div>
      {appointments.map((item) => (
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
      ))}
    </div>
  );
};

export default UpcomingAppo;
