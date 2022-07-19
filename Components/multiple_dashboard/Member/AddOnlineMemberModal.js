import LoadingScreen from "@components/global/LoadingScreen";
import { Dialog, Transition } from "@headlessui/react";
import AuthContext from "@lib/authContext";
import axios from "axios";
import debounce from "lodash.debounce";
import Image from "next/image";
import { Fragment, useContext, useState, useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import { RiUserAddFill } from "react-icons/ri";

const AddOnlineMemberModal = ({ isOpen, closeModal, onSuccess }) => {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchRandomUsers = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/members/online/get-random-users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUsersByName = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/members/online/get-users-by-name/${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 500);
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      fetchRandomUsers();
    } else {
      fetchUsersByName();
    }
  }, [searchTerm]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={() => {}} as="div" className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-saturate-200" />
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-6">
                  <div className="">
                    <div>
                      <div className="relative text-gray-600 w-full">
                        <input
                          className="px-4 w-full py-2 pr-8 rounded-lg text-sm focus:outline-none outline-none border-2 border-solid border-[#ECECEC]"
                          type="search"
                          name="search"
                          placeholder="Search"
                          onChange={debouncedResults}
                        />
                        <IoSearchSharp className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
                      </div>

                      <div>
                        {isLoading ? (
                          <LoadingScreen fullScreen={false} />
                        ) : users.length > 0 ? (
                          <div className="grid gap-2 mt-4">
                            {users.map((user) => (
                              <div className="px-4 py-2 border rounded-md flex justify-between items-center gap-2">
                                <div className="flex gap-4 items-center">
                                  <div className="relative w-12 aspect-square rounded-md overflow-hidden">
                                    <Image
                                      src={
                                        user.profilePhoto ||
                                        "/Assets/images/service/user.svg"
                                      }
                                      layout="fill"
                                      objectFit="cover"
                                    />
                                  </div>
                                  <div>
                                    <p>{`${user.firstName} ${user.lastName}`}</p>
                                    <p className="uppercase text-xs text-gray-400">
                                      Id : {user.id}
                                    </p>
                                  </div>
                                </div>

                                <button className="btn btn-primary btn-sm sm:btn-md gap-2 capitalize font-medium">
                                  <RiUserAddFill />
                                  Add to Member
                                </button>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-16 text-gray-500">
                            No User Found
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 gap-4">
                      <a
                        onClick={closeModal}
                        className="btn btn-outline btn-primary px-8"
                      >
                        Close
                      </a>
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

export default AddOnlineMemberModal;
