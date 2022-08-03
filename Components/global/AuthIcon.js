import Link from "next/link";
import Image from "next/image";
import { MdLockOpen } from "react-icons/md";
import { FaUserEdit, FaPoll, FaUserCircle } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState, useEffect } from "react";
import { IoMdExit } from "react-icons/io";
import AuthContext from "@lib/authContext";
import { RiAdminFill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import LoginToDashboardModal from "@components/auth/LoginToDashboardModal";
import { BiLogInCircle } from "react-icons/bi";

const AuthIcon = () => {
  const { user, logOut, token, setToken } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(user);

  const logoutFromDashboard = async () => {
    const Request = async () => {
      try {
        const { data } = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/logout-from-dashboard`,
          {},
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
      success: (data) => <b>{data}</b>,
      error: (err) => <b>{err.toString()}</b>,
    });
  };

  return user ? (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          className={`border-2 outline-none focus:outline-none border-primary relative rounded-full overflow-hidden w-8 aspect-square`}
        >
          <a>
            <Image
              src={user.profilePhoto || "/img/avatar.svg"}
              objectFit="cover"
              layout="fill"
            />
          </a>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute p-2 right-0 w-56 mt-2 origin-top-right bg-white dark:bg-[#2e2e2e] divide-y divide-gray-100 dark:divide-gray-700 rounded-md shadow-lg ring-1 ring-black dark:ring-0 ring-opacity-5 focus:outline-none">
            {user.loginAs === "VENDOR" && (
              <Menu.Item>
                <a
                  className={`group cursor-pointer dark:text-white flex rounded-md items-center w-full px-2 py-2 text-sm hover:text-primary text-gray-700  transition-colors duration-300 hover:bg-gray-100`}
                  onClick={() => logoutFromDashboard()}
                >
                  <span className="mr-2" aria-hidden="true">
                    <IoMdExit />
                  </span>
                  Logout From Dashboard
                </a>
              </Menu.Item>
            )}
            {user.loginAs === "USER" && (
              <>
                <Menu.Item>
                  <Link href={`/profile/${user.username}`}>
                    <a
                      className={`group cursor-pointer flex dark:text-white rounded-md items-center w-full px-2 py-2 text-sm hover:text-primary text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-300`}
                    >
                      <span className="mr-2" aria-hidden="true">
                        <FaUserCircle />
                      </span>
                      My Profile
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <a
                    className={`group cursor-pointer flex dark:text-white rounded-md items-center w-full px-2 py-2 text-sm hover:text-primary text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-300`}
                    onClick={() => setIsOpen(true)}
                  >
                    <span className="mr-2" aria-hidden="true">
                      <BiLogInCircle />
                    </span>
                    Login To Dashboard
                  </a>
                </Menu.Item>
              </>
            )}
            <Menu.Item>
              <a
                className={`group cursor-pointer flex dark:text-white rounded-md items-center w-full px-2 py-2 text-sm hover:text-primary text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-300`}
                onClick={() => logOut()}
              >
                <span className="mr-2" aria-hidden="true">
                  <IoMdExit />
                </span>
                Logout
              </a>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>

      <LoginToDashboardModal isOpen={isOpen} closeModal={closeModal} />
    </>
  ) : (
    <Fragment>
      <span className="block lg:hidden">
        <Link href="/accounts/login">
          <button>
            <AiOutlineUser />
          </button>
        </Link>
      </span>
    </Fragment>
  );
};

export default AuthIcon;
