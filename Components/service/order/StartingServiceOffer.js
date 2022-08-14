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
      <p className="flex justify-center">Starting price : {price}৳</p>
      <div className="flex gap-5">
      <div className="">
      
      <p className="py-3">Your offer</p>
      <input
        value={offerPrice}
        onChange={(e) => setOfferPrice(e.target.value)}
        type="number"
        min={1}
        max={price}
        className="input input-bordered w-40 h-10 dark:bg-bg-300 dark:border-[#515150] dark:text-white"
      />
    </div>
    <div>
      <p className="py-3">Delivery time</p>
      <div className="flex items-center gap-4">
        <input
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          type="date"
          className="input input-bordered h-10 dark:bg-bg-300 border-[#515150] dark:text-white"
        />
        <span>To</span>
        <input
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          type="date"
          className="input input-bordered h-10 dark:bg-bg-300 border-[#515150] dark:text-white"
        />
      </div>
    </div>
      </div>
    
      <div className="flex justify-center">
        <button type="submit" className="btn btn-sm btn-primary mt-5">
          Submit
        </button>
      </div>
    </>
  );
};

export default StartingServiceOffer;
