import AuthContext from "@lib/authContext";
import { emitNotification } from "@lib/socket";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import ServiceSelectType1 from "./ServiceSelectType1";
import ServiceSelectType2 from "./ServiceSelectType2";
import ServiceSelectType3 from "./ServiceSelectType3";

const StartingServiceOffer = ({ services, price }) => {
  const [offerPrice, setOfferPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { token, user } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (selectedOptions.length === 0) {
        toast.error("Please select at least one service!");
        return;
      }
      const optionsArray = selectedOptions.map((option) => {
        return option.title;
      });

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/create`,
        {
          serviceId: id,
          type: "STARTING",
          amount: Number(price),
          offerPrice: Number(offerPrice),
          description: description,
          deliveryDateFrom: startDate,
          deliveryDateTo: endDate,
          orderedBy: "USER",
          selectedServices: optionsArray,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Order created successfully!");
      emitNotification(data.userToId, user);
      router.push({
        pathname: `/profile/${user.username}`,
        query: {
          type: "STARTING",
          orderId: data.order.id,
        },
        shallow: true,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <h4>Choose services</h4>
        {services.type == 1 && (
          <ServiceSelectType1
            onChange={(data) => setSelectedOptions(data)}
            data={services}
          />
        )}
        {services.type == 2 && (
          <ServiceSelectType2
            onChange={(data) => setSelectedOptions(data)}
            data={services}
          />
        )}
        {services.type == 3 && (
          <ServiceSelectType3
            onChange={(data) => setSelectedOptions(data)}
            data={services}
          />
        )}
      </div>
      <form onSubmit={handelSubmit}>
        <div>
          <p>Starting price : {price}৳</p>
          <p>Your offer</p>
          <input
            required
            value={offerPrice}
            onChange={(e) => setOfferPrice(e.target.value)}
            type="number"
            min={price}
            className="input input-bordered w-48"
          />
        </div>

        <div>
          <p>Delivery time</p>
          <div className="flex items-center gap-4">
            <input
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              type="date"
              className="input input-bordered"
              min={new Date().toISOString().split("T")[0]}
            />
            <span>To</span>
            <input
              required
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              type="date"
              className="input input-bordered"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>
        <div>
          <p>Description</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input input-bordered w-full"
            rows={4}
          />
        </div>
        <div>
          <button
            type="submit"
            className={`btn btn-primary ${isLoading && "loading"}`}
          >
            Create Order
          </button>
        </div>
      </form>
    </>
  );
};

export default StartingServiceOffer;
