import FeedHeader from "@components/global/FeedHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthContext from "@lib/authContext";
import LoadingScreen from "@components/global/LoadingScreen";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { socket } from "@lib/socket";
import { GlobalContext } from "@lib/globalContext";

const FeedLayout = ({ children }) => {
  const { user, authenticating } = useContext(AuthContext);
  const { useUi, uiDispatch } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    const redirect = () => {
      if (authenticating) return;
      if (!user) {
        return router.replace("/");
      }
      if (user.loginAs === "VENDOR") {
        router.replace("/dashboard/multiple/profile");
      }
    };
    redirect();
  }, [user, authenticating]);

  useEffect(() => {
    if (user) {
      if (!useUi.connected) {
        socket.emit("setup", user);
        uiDispatch({ type: "SOCKET_CONNECTED" });
      }
    }
  }, [user]);

  if (authenticating || !user || user?.loginAs === "VENDOR")
    return <LoadingScreen />;

  return (
    <div className="bg-[#EDEDED] dark:bg-[#202020]">
      <FeedHeader />
      {children}
    </div>
  );
};

export default FeedLayout;
