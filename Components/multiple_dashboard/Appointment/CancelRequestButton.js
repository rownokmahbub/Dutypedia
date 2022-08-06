import { GlobalContext } from "@lib/globalContext";
import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const CancelRequestButton = ({ token, appoId, status }) => {
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
          status: "CANCELLED",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Request cancelled successfully!");
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
    return (
      <p className="sm:font-medium text-[10px] capitalize text-primary">
        Canceled
      </p>
    );
  }
  return status === "PENDING" ? (
    <button
      onClick={handleCancelRequest}
      className={`btn btn-sm  btn-primary  capitalize text-[10px] font-medium ${
        isLoading && "loading"
      }`}
    >
      Cancel Request
    </button>
  ) : (
    <p className="font-medium  text-[10px] capitalize text-primary">
      {status == "COMPLETED" ? (
        <span className="text-green-500">completed</span>
      ) : status == "CANCELLED" ? (
        <span className="text-primary-500">canceled</span>
      ) : status == "REJECTED" ? (
        "Rejected"
      ) : status == "APPROVED" ? (
        <span className="text-blue-500">Approved</span>
      ) : (
        "pending"
      )}
    </p>
  );
};

export default CancelRequestButton;
