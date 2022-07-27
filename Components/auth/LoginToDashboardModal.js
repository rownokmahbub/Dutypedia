import LoadingScreen from "@components/global/LoadingScreen";
import { Dialog, Transition } from "@headlessui/react";
import AuthContext from "@lib/authContext";
import axios from "axios";
import Link from "next/link";
import { Fragment, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const LoginToDashboardModal = ({ isOpen, closeModal }) => {
  const { token, setToken } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [dashboards, setDashboards] = useState([]);

  const loginToDashboard = async (dashboard) => {
    const Request = async () => {
      try {
        const { data } = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login-to-dashboard`,
          { dashboard },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { token: newToken } = data;
        setToken(newToken);
      } catch (error) {
        throw new Error(error.response?.data?.msg);
      }
    };
    toast.promise(Request(), {
      loading: <b>Please wait...</b>,
      success: (data) => <b>Welcome!</b>,
      error: (err) => <b>{err.toString()}</b>,
    });
  };

  useEffect(() => {
    const getDashboards = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/dashboards`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDashboards(data.dashboards);
      } catch (error) {
        // toast.error(error.response?.data?.msg);
      } finally {
        setIsLoading(false);
      }
    };
    getDashboards();
  }, []);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 dark:bg-[#272727]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl dark:bg-[#272727] bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Choose Your Dashboard
                  </Dialog.Title>
                  {isLoading ? (
                    <LoadingScreen fullScreen={false} />
                  ) : (
                    <div className="grid gap-4 mt-4">
                      {dashboards.map((dashboard, idx) => (
                        <div
                          className="w-full dark:text-white cursor-pointer rounded-lg border-2 border-dashed flex justify-center items-center px-4 py-2"
                          key={idx}
                          onClick={() => loginToDashboard(dashboard.name)}
                        >
                          <span className="">{dashboard.name}</span>
                        </div>
                      ))}
                      <Link href="/become-seller">
                        <a className="w-full dark:text-white cursor-pointer rounded-lg py-3 border-2 border-dashed flex justify-center items-center text-gray-400">
                          <FaPlus />
                        </a>
                      </Link>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginToDashboardModal;
