import LoadingScreen from "@components/global/LoadingScreen";
import AuthContext from "@lib/authContext";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "@lib/globalContext";
import AppoItem from "@components/user_profile/AppoItem";
import { Wrapper } from "styles/Scrollbar";

const UpcomingAppo = ({ serviceId }) => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useContext(AuthContext);
  const { useUi } = useContext(GlobalContext);
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
  }, [useUi.refresh]);

  if (isLoading) {
    return <LoadingScreen fullScreen={false} />;
  }

  return (
    <div className="grid gap-4 h-[200px] overflow-y-auto">
      <Wrapper>
      {appointments.map((item, idx) => (
        <AppoItem key={idx} item={item} />
      ))}
      </Wrapper>
    
    </div>
  );
};

export default UpcomingAppo;
