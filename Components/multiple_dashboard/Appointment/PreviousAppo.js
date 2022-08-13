import LoadingScreen from "@components/global/LoadingScreen";
import AuthContext from "@lib/authContext";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "@lib/globalContext";
import AppoItem from "./AppoItem";

const PreviousAppoDashboard = ({ searchTerm }) => {
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
        .includes(searchTerm.toLowerCase()) ||
      appointment.date.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/appointment/get/previous/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
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
    <div className="grid gap-4">
      {filteredAppointments.map((item) => (
        <AppoItem item={item} />
      ))}
    </div>
  );
};

export default PreviousAppoDashboard;
