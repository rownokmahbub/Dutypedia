import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";
import axios from "axios";
import Image from "next/image";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const CreateAppoinmentOnline = ({ member, closeModal }) => {
  const { token } = useContext(AuthContext);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { uiDispatch } = useContext(GlobalContext);
  const minDate = new Date();

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/appointment/create/online`,
        {
          date,
          startTime,
          endTime,
          title,
          description,
          memberId: member.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Appointment created successfully!");
      uiDispatch({
        type: "DO_REFRESH",
      });
      closeModal();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="flex items-center gap-4">
          <div className="w-12 aspect-square rounded-md relative">
            <Image
              src={member.profilePicture || "/Assets/images/service/user.svg"}
              layout="fill"
            />
            <img
              src="/Assets/icon/online.svg"
              className="absolute w-6 right-0 bottom-0 translate-x-1/2 translate-y-1/3"
            />
          </div>
          <div>
            <p className="md:text-lg dark:text-white">
              {member.firstName} {member.lastName}
            </p>
            <p className="text-xs md:text-sm text-gray-400">
              @{member.username}
            </p>
          </div>
        </div>

        <form className="grid gap-4 mt-8" onSubmit={handelSubmit}>
          <div>
            <p className="dark:text-white mb-1">Select Date</p>
            <input
              className="border border-primary focus:outline-primary rounded-md px-2 py-1.5 dark:bg-bg-300 dark:border-[#515150] dark:text-white"
              required
              type="date"
              value={date}
              min={minDate.toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <p className="dark:text-white mb-1">Select Time</p>
            <div className="flex gap-2 items-center w-full">
              <input
                required
                className="border flex-1 border-primary focus:outline-primary rounded-md px-2 py-1.5 dark:bg-bg-300 dark:border-[#515150] dark:text-white"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <span className="dark:text-white flex-shrink-0">To</span>
              <input
                required
                className="border flex-1 border-primary focus:outline-primary rounded-md px-2 py-1.5 dark:bg-bg-300 dark:border-[#515150] dark:text-white"
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p className="dark:text-white mb-1">Title</p>
            <input
              required
              className="border w-full border-primary focus:outline-primary rounded-md px-2 py-1.5 dark:bg-bg-300 dark:border-[#515150] dark:text-white"
              type="text"
              maxlength="100"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full">
            <p className="dark:text-white mb-1">Description</p>
            <textarea
              className="border w-full flex-1 border-primary focus:outline-primary rounded-md px-2 py-1.5 dark:bg-bg-300 dark:border-[#515150] dark:text-white"
              rows="4"
              maxlength="1000"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              className={`btn btn-primary btn-wide ${isLoading && "loading"}`}
              type="submit"
            >
              Send Appoinment Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAppoinmentOnline;
