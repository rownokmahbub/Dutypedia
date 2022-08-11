import LoadingScreen from "@components/global/LoadingScreen";
import ServiceTypeCard from "@components/multiple_dashboard/Profile/ServiceTypeCard";
import OrderCard from "@components/user_profile/orders/OrderCard";
import OrderDetailsModal from "@components/user_profile/orders/OrderDetailsModal";
import UserAppoinment from "@components/user_profile/UserAppoinment";
import UserProfileRender from "@components/user_profile/UserProfileRender";
import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";
import axios from "axios";
import FeedLayout from "layouts/FeedLayout";
import { useRouter } from "next/router";
import {
  pricingSliderSettings,
  servicesType,
  sliderSettings,
} from "pages/dashboard/multiple/profile";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsXDiamondFill } from "react-icons/bs";
import Slider from "react-slick";

const UsersProfile = () => {
  const router = useRouter();
  const { username, type, orderId } = router.query;
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { useUi } = useContext(GlobalContext);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!router.isReady) {
        return;
      }
      const orderType = type || "STARTING";
      try {
        setIsLoading(true);
        console.log(orderType);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders/get-for-user/${orderType}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(data.orders);
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.msg);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrder();
  }, [type, useUi.refresh]);

  useEffect(() => {
    if (orderId && orders.length > 0) {
      const order = orders.find((order) => order.id === orderId);
      setSelectedOrder(order);
    }
  }, [router, orders]);

  return (
    <>
      <div className="min-h-screen">
        <div className="mx-auto max-w-[1920px] md:p-8 sm:p-4 px-4">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <div className="grid h-max gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 flex-shrink-0 w-full lg:w-96">
              <UserProfileRender />
              <UserAppoinment />
            </div>
            <div className="flex-1 space-y-6 overflow-hidden">
              <div className="w-full p-4 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-lg text-white text-center capitalize flex items-center gap-2 justify-center">
                <BsXDiamondFill /> All services history
              </div>
              <div className="overflow-hidden type-slider">
                <Slider {...sliderSettings}>
                  {servicesType.map((item) => (
                    <div
                      onClick={() => {
                        setSelectedOrder(item);
                        router.push({
                          query: {
                            username,
                            type: item.id,
                          },
                          shallow: true,
                        });
                      }}
                      className={`w-full flex-shrink-0 dark:text-white cursor-pointer aspect-[16/12] shadow-3xl rounded-lg overflow-hidden relative p-4 saturate-100 opacity-100"
                  } ${item.bgColor}`}
                    >
                      <div className="flex !h-max relative z-10 justify-between items-center">
                        <p className="text-sm dark:text-white">{item.title}</p>
                      </div>
                      <img
                        className="z-0 absolute right-1 bottom-1 w-32"
                        src={item.image}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div>
                {isLoading ? (
                  <LoadingScreen fullScreen={false} />
                ) : (
                  <div className="grid gap-4">
                    {orders.map((order) => (
                      <OrderCard
                        key={order.id}
                        order={order}
                        onClick={() => {
                          router.push({
                            query: {
                              username,
                              type: type,
                              orderId: order.id,
                            },
                            shallow: true,
                            scroll: false,
                          });
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          isOpen={selectedOrder ? true : false}
          closeModal={() => setSelectedOrder(null)}
        />
      )}
    </>
  );
};

UsersProfile.layout = FeedLayout;
export default UsersProfile;
