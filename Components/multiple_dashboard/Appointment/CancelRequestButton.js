import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const CancelRequestButton = ({ token, appoId, status }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  if (isSuccess) {
    return <p className="font-medium text-primary">Cancled</p>;
  }
  return status === "PENDING" ? (
    <button
      onClick={handleCancelRequest}
      className={`btn btn-primary capitalize font-medium ${
        isLoading && "loading"
      }`}
    >
      Cancel Request
    </button>
  ) : (
    <p className="font-medium text-primary">{status}</p>
  );
};

export default CancelRequestButton;
