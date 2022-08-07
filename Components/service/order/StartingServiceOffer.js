import { useState } from "react";
import ServiceSelectType1 from "./ServiceSelectType1";
import ServiceSelectType2 from "./ServiceSelectType2";
import ServiceSelectType3 from "./ServiceSelectType3";

const StartingServiceOffer = ({ services, price }) => {
  const [offerPrice, setOfferPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <>
      <div>
        <h4>Choose services</h4>
        {services.type == 1 && <ServiceSelectType1 data={services} />}
        {services.type == 2 && <ServiceSelectType2 data={services} />}
        {services.type == 3 && <ServiceSelectType3 data={services} />}
      </div>
      <div>
        <p>Starting price : {price}৳</p>
        <p>Your offer</p>
        <input
          value={offerPrice}
          onChange={(e) => setOfferPrice(e.target.value)}
          type="number"
          min={1}
          max={price}
          className="input input-bordered w-48"
        />
      </div>
      <div>
        <p>Delivery time</p>
        <div className="flex items-center gap-4">
          <input
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
            className="input input-bordered"
          />
          <span>To</span>
          <input
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            className="input input-bordered"
          />
        </div>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </>
  );
};

export default StartingServiceOffer;
