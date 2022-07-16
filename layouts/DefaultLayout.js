import Footer from "@components/global/Footer";
import NavBar from "@components/global/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalContext } from "@lib/globalContext";
import { useContext, useEffect } from "react";
import ModalRoot from "@components/global/ModalRoot";
import AuthContext from "@lib/authContext";
import LoadingScreen from "@components/global/LoadingScreen";
import { useRouter } from "next/router";
import MainNavSidebar from "@components/global/MainNavSidebar";

const DefaultLayout = ({ children }) => {
  const { useUi } = useContext(GlobalContext);
  const { user, authenticating } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const redirect = () => {
      if (authenticating) return;
      if (user) {
        router.replace("/feed");
      }
    };
    redirect();
  }, [user, authenticating]);

  if (authenticating || user) return <LoadingScreen />;
  return (
    <div className="bg-[#F8FAFB]">
      <NavBar />
      {useUi.displayModal && <ModalRoot />}
      <MainNavSidebar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
