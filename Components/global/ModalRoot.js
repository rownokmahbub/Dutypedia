import LoginForm from "@components/auth/LoginForm";
import SignupForm from "@components/auth/SignupForm";
import { Dialog, Transition } from "@headlessui/react";
import { GlobalContext } from "@lib/globalContext";
import { Fragment, useContext } from "react";

const ModalRoot = () => {
  const { useUi, uiDispatch } = useContext(GlobalContext);
  const closeModal = () => {
    uiDispatch({ type: "CLOSE_MODAL" });
  };

  const ModalUI = () => {
    switch (useUi.modalView) {
      case "LOGIN": {
        return <LoginForm />;
      }
      case "SIGNUP": {
        return <SignupForm />;
      }
      default:
        return null;
    }
  };

  return (
    <Transition appear show as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto z-[99]"
        onClose={() => {}}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              // onClick={() => alert("Clicked overlay")}
              className="fixed inset-0 w-full h-full bg-black/30 dark:bg-indigo-800/30 backdrop-blur-[2px]"
            />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full">
              <ModalUI />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalRoot;
