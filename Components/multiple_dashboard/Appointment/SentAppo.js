import LoadingScreen from "@components/global/LoadingScreen";
import AuthContext from "@lib/authContext";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { format } from "date-fns";
import moment from "moment";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { HiDotsVertical } from "react-icons/hi";
import { GlobalContext } from "@lib/globalContext";
import CancelRequestButton from "./CancelRequestButton";

const SentAppoDashboard = ({ searchTerm }) => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useContext(AuthContext);
  const { useUi } = useContext(GlobalContext);

  const filteredAppointments = appointments.filter((appointment) => {
    return (
      appointment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.offlineMember?.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      appointment.user?.firstName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      appointment.user?.lastName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  });
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/appointment/get/sent/dashboard`,
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
  }, [useUi.refresh]);

  if (isLoading) {
    return <LoadingScreen fullScreen={false} />;
  }

  if (!filteredAppointments.length > 0) {
    return (
      <div className="text-center text-gray-500 py-16">
        No appointments found
      </div>
    );
  }

  return (
    <>
{/* mobile view */}
<div className="grid gap-4 sm:hidden ">
      {filteredAppointments.map((item) => (
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
                <p className="line-clamp-1">
                  {item.online
                    ? `${item.user.firstName} ${item.user.lastName}`
                    : item.offlineMember.name}
                </p>
                <div>
              <p className="text-xs">
                {format(new Date(item.date), "dd MMM yyyy")},{" "}
                {moment(item.startTime, ["HH:mm"]).format("h:mm A")}
              </p>
              <p className=" line-clamp-1">{item.title}</p>
            </div>
              </div>
            </div>
          
            <div className="flex items-center capitalize gap-4">
              <CancelRequestButton
                token={token}
                appoId={item.id}
                status={item.status}
              />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* desktop view */}
       <div className="grid gap-4 hidden sm:block">
      {filteredAppointments.map((item) => (
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
            <div>
              <p className="text-xs">
                {format(new Date(item.date), "dd MMM yyyy")},{" "}
                {moment(item.startTime, ["HH:mm"]).format("h:mm A")}
              </p>
              <p className=" line-clamp-1">{item.title}</p>
            </div>
            <div className="flex items-center gap-4">
              <CancelRequestButton
                token={token}
                appoId={item.id}
                status={item.status}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
 
  );
};

export default SentAppoDashboard;
