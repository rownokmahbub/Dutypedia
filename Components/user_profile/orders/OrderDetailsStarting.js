import AuthContext from "@lib/authContext";
import { GlobalContext } from "@lib/globalContext";
import { emitNotification } from "@lib/socket";
import axios from "axios";
import { useContext, useState } from "react";
import Barcode from "react-barcode";
import toast from "react-hot-toast";
import DeliveredButton from "./DeliveredButton";
import ReceivedButton from "./ReceivedButton";

const OrderDetailsStarting = ({ order, isVendor }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cancelIsLoading, setCancelIsLoading] = useState(false);
  const { token, user } = useContext(AuthContext);
  const { uiDispatch } = useContext(GlobalContext);
  const [showNewDate, setShowNewDate] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newDateReqIsSending, setNewDateReqIsSending] = useState(false);

  const acceptOrRejectNewDeliveryDate = async (action) => {
    if (action === "ACCEPT") {
      setNewDateReqIsSending(true);
    } else {
      setIsLoading(true);
    }
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/accept-or-reject-delivery-date`,
        {
          orderId: order.id,
          newDate: order.requestedDeliveryDate,
          action,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(`New delivery date ${action}!`);
      emitNotification(data.userToId, user);
      uiDispatch({ type: "DO_REFRESH" });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg);
    } finally {
      setNewDateReqIsSending(false);
      setIsLoading(false);
    }
  };

  const requestNewDeliveryDate = async (e) => {
    e.preventDefault();
    try {
      setNewDateReqIsSending(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/request-new-delivery-date`,
        {
          orderId: order.id,
          newDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Request sent");
      setShowNewDate(false);
      emitNotification(data.userToId, user);
      uiDispatch({
        type: "DO_REFRESH",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg);
    } finally {
      setNewDateReqIsSending(false);
    }
  };

  const makePayment = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/make-payment`,
        {
          orderId: order.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Payment made successfully!");
      emitNotification(data.userToId, user);
      uiDispatch({
        type: "DO_REFRESH",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg);
    } finally {
      setIsLoading(false);
    }
  };
  const handelStatusChange = async (status, requestBy = "vendor") => {
    try {
      if (status === "CANCELLED") {
        const action = confirm("Are you sure you want to cancel this order?");
        if (!action) {
          return;
        }
        setCancelIsLoading(true);
      } else {
        setIsLoading(true);
      }
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/change-status-${requestBy}`,
        {
          orderId: order.id,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(`Order ${status}!`);
      emitNotification(data.userToId, user);
      uiDispatch({ type: "DO_REFRESH" });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
      setCancelIsLoading(false);
    }
  };
  return (
    <div>
      <div className="text-2xl pb-2 font-medium text-center border-b">
        Bargaining Service
      </div>
      <div className="mt-4">
        <Barcode
          width={1}
          height={70}
          text={order.id.toUpperCase()}
          value={order.id}
        />
        <p>Starting price : {order.amount}</p>
        <p>Offer price : {order.offerPrice}</p>
        <p>Status : {order.status}</p>
        <p>
          Delivery date : {order.deliveryDateFrom} to {order.deliveryDateTo}
        </p>
        <p>Payment status : {order.paid ? "paid" : "Due"}</p>
        <p>Description</p>
        <p>{order.description}</p>
        {order.requestedDeliveryDate && !isVendor && (
          <div className="mt-4 p-4 shadow-sm border w-max">
            <p>Vendor requested new delivery date</p>
            <p>Requested delivery date : {order.requestedDeliveryDate}</p>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => acceptOrRejectNewDeliveryDate("ACCEPT")}
                className={`btn btn-primary ${
                  newDateReqIsSending && "loading"
                }`}
              >
                Accept
              </button>
              <button
                onClick={() => acceptOrRejectNewDeliveryDate("REJECT")}
                className={`btn ${isLoading && "loading"}`}
              >
                Reject
              </button>
            </div>
          </div>
        )}

        {!order.requestedDeliveryDate &&
          !order.delivered &&
          isVendor &&
          order.status === "PROCESSING" && (
            <div className="mt-4 p-4 shadow-sm border w-max">
              <DeliveredButton orderId={order.id} />
            </div>
          )}

        {order.delivered && !isVendor && order.status === "PROCESSING" && (
          <div className="mt-4 p-4 shadow-sm border w-max">
            <ReceivedButton orderId={order.id} />
          </div>
        )}
      </div>
      {isVendor && (
        <>
          {showNewDate && (
            <form
              onSubmit={requestNewDeliveryDate}
              className="my-4 border w-max p-4 shadow-sm"
            >
              <p>New delivery date</p>
              <div className="flex gap-4">
                <input
                  required
                  className="input input-bordered w-48"
                  type="date"
                  min={order.deliveryDateTo}
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                />
                <button
                  type="submit"
                  className={`btn btn-outline ${
                    newDateReqIsSending && "loading"
                  }`}
                >
                  Send request
                </button>
              </div>
            </form>
          )}
          <div className="mt-4 flex gap-4">
            {order.status === "WAITING_FOR_ACCEPT" && (
              <button
                onClick={() => handelStatusChange("ACCEPTED")}
                className={`btn btn-primary capitalize font-medium ${
                  isLoading && "loading"
                }`}
              >
                Accept Order
              </button>
            )}
            {order.status === "ACCEPTED" && (
              <button
                onClick={() => handelStatusChange("WAITING_FOR_PAYMENT")}
                className={`btn btn-primary capitalize font-medium ${
                  isLoading && "loading"
                }`}
              >
                Request for payment
              </button>
            )}
            {order.status === "WAITING_FOR_PAYMENT" && (
              <button
                className={`link capitalize font-medium ${
                  isLoading && "loading"
                }`}
              >
                Payment request sent
              </button>
            )}
            {order.status === "PROCESSING" && (
              <>
                {order.requestedDeliveryDate ? (
                  <p>You request for extra time</p>
                ) : (
                  <button
                    onClick={() => setShowNewDate(!showNewDate)}
                    className={`btn btn-primary capitalize font-medium ${
                      isLoading && "loading"
                    }`}
                  >
                    Request for extra time
                  </button>
                )}
              </>
            )}
            {order.status !== "CANCELLED" && order.status !== "COMPLETED" && (
              <button
                onClick={() => handelStatusChange("CANCELLED")}
                className={`btn btn-primary btn-outline capitalize font-medium ${
                  cancelIsLoading && "loading"
                }`}
              >
                Cancel Order
              </button>
            )}
            {order.status === "CANCELLED" && (
              <p className="text-primary font-medium">Order Cancelled</p>
            )}
            {order.status === "COMPLETED" && (
              <p className="text-green-500 font-medium">Order Completed</p>
            )}
          </div>
        </>
      )}

      {!isVendor && (
        <div className="mt-4 flex gap-4">
          <>
            {order.status === "WAITING_FOR_PAYMENT" && (
              <button
                onClick={() => makePayment()}
                className={`btn btn-primary capitalize font-medium ${
                  isLoading && "loading"
                }`}
              >
                Make payment
              </button>
            )}
            {order.status !== "CANCELLED" && order.status !== "COMPLETED" && (
              <button
                onClick={() => handelStatusChange("CANCELLED", "user")}
                className={`btn btn-primary btn-outline capitalize font-medium ${
                  cancelIsLoading && "loading"
                }`}
              >
                Cancel Order
              </button>
            )}
            {order.status === "CANCELLED" && (
              <p className="text-primary font-medium">Order Cancelled</p>
            )}
            {order.status === "COMPLETED" && (
              <p className="text-green-500 font-medium">Order Completed</p>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsStarting;
