import FinalReview from "@components/service/FinalReview";
import SelectService from "@components/service/SelectService";
import ServiceLocation from "@components/service/ServiceLocation";
import ServiceSerial from "@components/service/ServiceSerial";
import UploadService from "@components/service/UploadService";
import { useState } from "react";
const Service = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="bg-[#fff1f2] w-full">
      <ServiceSerial />
      <>{step === 1 && <SelectService goNext={() => setStep(2)} />}</>
      <>{step === 2 && <UploadService goNext={() => setStep(3)} />}</>
      <>{step === 3 && <ServiceLocation goNext={() => setStep(4)} />}</>
      <>{step === 4 && <FinalReview />}</>
    </div>
  );
};

export default Service;
