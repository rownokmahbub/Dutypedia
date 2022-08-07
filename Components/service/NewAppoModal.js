import { Dialog, Transition } from "@headlessui/react";
import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";
import axios from "axios";
import { Fragment, useContext, useRef, useState } from "react";
import toast from "react-hot-toast";

const NewAppoModal = ({ isOpen, closeModal, serviceId }) => {
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
        `${process.env.NEXT_PUBLIC_API_URL}/appointment/create`,
        {
          serviceId,
          date,
          startTime,
          endTime,
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Appointment created successfully!");
      uiDispatch({ type: "DO_REFRESH" });
      closeModal();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-bg-200 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    New Appointment
                  </Dialog.Title>
                  <form className="grid gap-4 mt-4" onSubmit={handelSubmit}>
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
                        <span className="dark:text-white flex-shrink-0">
                          To
                        </span>
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="w-full">
                      <p className="dark:text-white mb-1">Description</p>
                      <textarea
                        className="border w-full flex-1 border-primary focus:outline-primary rounded-md px-2 py-1.5 dark:bg-bg-300 dark:border-[#515150] dark:text-white"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        className={`btn btn-primary btn-wide ${
                          isLoading && "loading"
                        }`}
                        type="submit"
                      >
                        Send Appointment Request
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NewAppoModal;
