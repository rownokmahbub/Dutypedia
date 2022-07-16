// import { Provider } from "react-redux";
// import store from "../redux/store";
import { AuthContextProvider } from "@lib/authContext";
import { GlobalContextProvider } from "@lib/globalContext";
import DefaultLayout from "layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "swiper/css";
import "swiper/css/bundle";
import "react-datepicker/dist/react-datepicker.css";
// import store from "../Redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.layout || DefaultLayout;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading || typeof window === "undefined") {
    return <></>;
  }
  return (
    <>
      {/* <Provider store={store}>
      </Provider> */}
        <AuthContextProvider>
          <GlobalContextProvider>
            <Layout key={router.route}>
              <main className="min-h-screen">
                <Component {...pageProps} />
              </main>
              <Toaster />
            </Layout>
          </GlobalContextProvider>
        </AuthContextProvider>
     
    </>
  );
}

export default MyApp;
