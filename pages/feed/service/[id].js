import LoadingScreen from "@components/global/LoadingScreen";
import AuthContext from "@lib/authContext";
import axios from "axios";
import FeedLayout from "layouts/FeedLayout";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";

const ServiceView = () => {
  const [service, setService] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    const fetchService = async () => {
      if (!id) return;
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/services/get-service-by-id/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setService(data.service);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) return <LoadingScreen />;

  return <></>;
};

ServiceView.layout = FeedLayout;
export default ServiceView;
