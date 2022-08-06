import { Dialog, Transition } from "@headlessui/react";
import { format } from "date-fns";
import moment from "moment";
import { Fragment } from "react";

const AppoDetailsModal = ({ isOpen, closeModal, appoinment }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white dark:bg-bg-200 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between">
                    <div>
                    <p>
                      Date : {format(new Date(appoinment.date), "dd MMM yyyy")}
                    </p>
                    <p>
                      Time :{" "}
                      {moment(appoinment.startTime, ["HH:mm"]).format("h:mm A")}
                    </p>
                    <h4 className="mt-4 text-xl font-medium">
                      {appoinment.title}
                    </h4>
                    <p>{appoinment.description}</p>
                    </div>
                  
                    <div className="sm:hidden block">
                    <span className="w-10 aspect-square rounded-full flex items-center justify-center shadow-3xl">
              <img className="w-10" src="/Assets/icon/shild-dark.svg" />
            </span>

            {appoinment.online && (
              <span className="w-10 aspect-square rounded-full flex items-center justify-center shadow-3xl">
                <img className="w-8" src="/Assets/icon/send.svg" />
              </span>
            )}
                    </div>
               
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AppoDetailsModal;
