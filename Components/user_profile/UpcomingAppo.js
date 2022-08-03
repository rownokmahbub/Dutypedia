import LoadingScreen from "@components/global/LoadingScreen";
import AuthContext from "@lib/authContext";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import AppoItem from "./AppoItem";

const UpcomingAppo = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/appointment/get/upcoming/user`,
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

  if (appointments.length === 0) {
    return <div className="text-center py-8">No appointments!</div>;
  }

  return (
    <div className="grid gap-4">
      {appointments.map((item) => (
        <AppoItem item={item} />
      ))}
    </div>
  );
};

export default UpcomingAppo;
