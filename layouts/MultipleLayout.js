import DashboardSidebar from "Components/global/DashboardSidebar";
import { multipleDashboardData } from "Components/navbar/NavigationData";
import TopNavBar from "Components/navbar/topbar";
import AuthContext from "@lib/authContext";
import LoadingScreen from "@components/global/LoadingScreen";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@lib/globalContext";
import { socket } from "@lib/socket";

const MultipleDashboardLayout = ({ children }) => {
  const { user, authenticating } = useContext(AuthContext);
  const { uiDispatch, useUi } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    const redirect = () => {
      if (authenticating) return;
      if (!user) {
        router.replace("/");
        return;
      }
      if (user.loginAs !== "VENDOR") {
        router.replace("/");
      }
    };
    redirect();
  }, [user, authenticating]);

  useEffect(() => {
    console.log(useUi.connected);
    if (user) {
      if (!useUi.connected) {
        socket.emit("setup", user);
        uiDispatch({ type: "SOCKET_CONNECTED" });
      }
    }
  }, [user]);

  if (authenticating || !user || user.loginAs !== "VENDOR")
    return <LoadingScreen />;

  return (
    <>
      <div className="mx-auto h-screen relative w-full bg-[#FFF1F2]">
        <TopNavBar />
        <div className="flex h-[calc(100vh-49.5px)] overflow-hidden">
          <DashboardSidebar data={multipleDashboardData} />
          <div className="sm:px-5 py-5 h-full overflow-y-auto flex-1">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleDashboardLayout;
