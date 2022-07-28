import AuthContext from "@lib/authContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import NotiIcon from "./NotiIcon";
import AuthIcon from "@components/global/AuthIcon";

const FeedHeader = () => {
  const router = useRouter();
  return (
    <nav className="z-40 sticky left-0 top-0 w-full py-2 bg-white/70 dark:bg-[#202020]/70 backdrop-blur-lg backdrop-saturate-150 shadow-sm dark:shadow-glass-card">
      <div className="w-full px-16 h-full flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link href="/">
            <a>
              <img className="w-24" src="/Assets/images/logo.svg" />
            </a>
          </Link>
        </div>

        <div className="flex items-center gap-6 dark:text-white">
          {!router.pathname.includes("/become-seller") && (
            <>
              <NotiIcon />

              <a>
                <img className="w-8" src="/Assets/icon/send.svg" />
              </a>
              {/* <a>
            <img src="/Assets/icon/sun.svg" />
          </a> */}
            </>
          )}
          <AuthIcon />
        </div>
      </div>
    </nav>
  );
};

export default FeedHeader;
