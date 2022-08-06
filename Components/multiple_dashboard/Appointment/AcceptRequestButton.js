import { GlobalContext } from "@lib/globalContext";
import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const AcceptRequestButton = ({ token, appoId, status }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { uiDispatch } = useContext(GlobalContext);

  const handleCancelRequest = async () => {
    try {
      setIsLoading(true);
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/appointment/change-status`,
        {
          appointmentId: appoId,
          status: "APPROVED",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Request approved successfully!");
      setIsSuccess(true);
      uiDispatch({ type: "DO_REFRESH" });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  if (isSuccess) {
    return <p className="font-medium text-green-500">Accepted</p>;
  }
  return status === "PENDING" ? (
    <button
      onClick={handleCancelRequest}
      className={`btn btn-primary capitalize font-medium ${
        isLoading && "loading"
      }`}
    >
      Accept
    </button>
  ) : (
    <p
      className={`font-medium ${
        status === "APPROVED" ? "text-green-500" : "text-primary"
      }`}
    >
      {status}
    </p>
  );
};

export default AcceptRequestButton;
