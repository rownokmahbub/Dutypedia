import DashboardSidebar from "Components/global/DashboardSidebar";
import { multipleDashboardData } from "Components/navbar/NavigationData";
import TopNavBar from "Components/navbar/topbar";
import AuthContext from "@lib/authContext";
import LoadingScreen from "@components/global/LoadingScreen";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const MultipleDashboardLayout = ({ children }) => {
  const { user, authenticating } = useContext(AuthContext);
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
