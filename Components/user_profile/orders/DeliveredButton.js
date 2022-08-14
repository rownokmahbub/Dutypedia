import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";
import { emitNotification } from "@lib/socket";
import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const DeliveredButton = ({ orderId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { token, user } = useContext(AuthContext);
  const { uiDispatch } = useContext(GlobalContext);
  const yesIDelivered = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/delivered`,
        {
          orderId: orderId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Order marked as delivered!");
      emitNotification(data.userToId, user);
      uiDispatch({
        type: "DO_REFRESH",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <button
      onClick={yesIDelivered}
      className={`btn btn-primary ${isLoading && "loading"}`}
    >
      Yes I Delivered
    </button>
  );
};

export default DeliveredButton;
