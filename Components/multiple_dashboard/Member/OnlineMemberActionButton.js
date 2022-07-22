import AuthContext from "@lib/authContext";
import { emitNotification } from "@lib/socket";
import axios from "axios";
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { RiUserAddFill } from "react-icons/ri";

const OnlineMemberActionButton = ({ member }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, token } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

  const sendRequest = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/members/online/create`,
        {
          userId: member.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Request sent successfully!");
      emitNotification(member.id, user);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return <a className="link link-primary">Request sent</a>;
  }

  return (
    <button
      onClick={sendRequest}
      className={`btn btn-primary btn-sm sm:btn-md gap-2 capitalize font-medium ${
        isLoading && "loading"
      }`}
    >
      <RiUserAddFill />
      Add to Member
    </button>
  );
};

export default OnlineMemberActionButton;
