import AuthIcon from "@components/global/AuthIcon";
import NotiIconVendor from "@components/global/NotiIconVendor";
import ThemeToggle from "@components/global/ThemeToggle";
import AuthContext from "@lib/authContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const TopNavBar = () => {
  const { logOut } = useContext(AuthContext);
  const router = useRouter();
  return (
    <nav className="z-40 sticky left-0 top-0 w-full py-2 bg-white/70 dark:bg-bg-300/70 backdrop-blur-lg backdrop-saturate-150 shadow-sm">
      <div className="w-full px-6 h-full flex justify-between  items-center">
        <div className="flex items-center ">
          <Link  href='/mobilenav'>
          <AiOutlineMenu
              
              className="text-xl cursor-pointer md:hidden"
            />
          </Link>
    
          <Link href="/">
            <a className="ml-3">
              <img
                className="w-24  dark:hidden"
                src="/Assets/images/logo.svg"
              />
              <img
                className="w-24 hidden dark:block"
                src="/Assets/images/logo-dark.svg"
              />
            </a>
          </Link>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          {!router.pathname.includes("/become-seller") && (
            <>
              <NotiIconVendor />

              <a>
                <img className="w-8" src="/Assets/icon/send.svg" />
              </a>
              <ThemeToggle />
            </>
          )}
          <AuthIcon />
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
