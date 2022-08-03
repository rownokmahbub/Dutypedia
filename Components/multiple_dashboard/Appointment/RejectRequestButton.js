import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const RejectRequestButton = ({ token, appoId, status }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCancelRequest = async () => {
    try {
      setIsLoading(true);
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/appointment/change-status`,
        {
          appointmentId: appoId,
          status: "REJECTED",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Request reject successfully!");
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  if (isSuccess) {
    return <p className="font-medium text-green-500">Rejected</p>;
  }
  return status === "PENDING" ? (
    <button
      onClick={handleCancelRequest}
      className={`btn btn-primary btn-outline capitalize font-medium ${
        isLoading && "loading"
      }`}
    >
      Cancel
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

export default RejectRequestButton;