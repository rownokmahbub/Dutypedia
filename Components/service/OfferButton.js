import { useState } from "react";
import ServiceSelectModal from "./order/ServiceSelectModal";

const OfferButton = ({ serviceType, services, price }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsOpen(true)} className="flex justify-center mt-8">
        <button className="btn btn-primary">Offer Your Price</button>
      </div>

      <ServiceSelectModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        serviceType={serviceType}
        services={services}
        price={price}
      />
    </>
  );
};

export default OfferButton;
