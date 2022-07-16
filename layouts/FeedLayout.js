import FeedHeader from "@components/global/FeedHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthContext from "@lib/authContext";
import LoadingScreen from "@components/global/LoadingScreen";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const FeedLayout = ({ children }) => {
  const { user, authenticating } = useContext(AuthContext);
  console.log(user);
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

  if (authenticating || !user || user?.loginAs === "VENDOR")
    return <LoadingScreen />;

  return (
    <div className="bg-[#EDEDED]">
      <FeedHeader />
      {children}
    </div>
  );
};

export default FeedLayout;
