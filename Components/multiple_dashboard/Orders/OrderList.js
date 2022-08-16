import LoadingScreen from "@components/global/LoadingScreen";
import OrderCard from "@components/user_profile/orders/OrderCard";
import OrderDetailsModal from "@components/user_profile/orders/OrderDetailsModal";
import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsXDiamondFill } from "react-icons/bs";

const OrderList = () => {
  const router = useRouter();
  const { orderId } = router.query;
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { useUi } = useContext(GlobalContext);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders/get-for-vendor`,
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
  }, [useUi.refresh]);

  useEffect(() => {
    if (orderId && orders.length > 0) {
      const order = orders.find((order) => order.id === orderId);
      setSelectedOrder(order);
    }
  }, [router, orders]);

  if (isLoading) {
    return <LoadingScreen fullScreen={false} />;
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-80">
        <BsXDiamondFill className="text-4xl text-gray-500" />
        <p className="text-gray-500 text-center">No orders found</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onClick={() => {
              router.push({
                query: {
                  orderId: order.id,
                },
                shallow: true,
                scroll: false,
              });
            }}
          />
        ))}
      </div>

      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          isOpen={selectedOrder ? true : false}
          closeModal={() => setSelectedOrder(null)}
          isVendor={true}
        />
      )}
    </>
  );
};

export default OrderList;
