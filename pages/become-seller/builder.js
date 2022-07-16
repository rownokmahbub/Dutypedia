import MianBuilder from "@components/become-seller/builder/MainBuilder";
import FeedLayout from "layouts/FeedLayout";
import FinalReview from "@components/service/FinalReview";
import SelectService from "@components/service/SelectService";
import ServiceLocation from "@components/service/ServiceLocation";
import ServiceSerial from "@components/service/ServiceSerial";
import UploadService from "@components/service/UploadService";
import { useState } from "react";

const Builder = () => {
  const [step, setStep] = useState(1);
  const [selectServiceData, setSelectServiceData] = useState({});
  const [uploadServiceData, setUploadServiceData] = useState({});
  const [serviceLocationData, setServiceLocationData] = useState({});
  const [optionsData, setOptionsData] = useState([]);
  return (
    <div className="pt-8">
      <div>
        <ServiceSerial activeStep={step} />
        <>
          {step === 1 && (
            <MianBuilder
              savedData={optionsData}
              goNext={(data) => {
                setOptionsData(data);
                setStep(2);
              }}
            />
          )}
        </>
        <>
          {step === 2 && (
            <SelectService
              savedData={selectServiceData}
              goBack={() => setStep(1)}
              goNext={(data) => {
                setSelectServiceData(data);
                setStep(3);
              }}
            />
          )}
        </>
        <>
          {step === 3 && (
            <UploadService
              savedData={uploadServiceData}
              goBack={() => setStep(2)}
              goNext={(data) => {
                setUploadServiceData(data);
                setStep(4);
              }}
            />
          )}
        </>
        <>
          {step === 4 && (
            <ServiceLocation
              savedData={serviceLocationData}
              goBack={() => setStep(3)}
              goNext={(data) => {
                setServiceLocationData(data);
                setStep(5);
              }}
            />
          )}
        </>
        <>
          {step === 5 && (
            <FinalReview
              data={{
                selectServiceData,
                uploadServiceData,
                serviceLocationData,
                optionsData: {
                  category: "builder",
                  type: 2,
                  options: optionsData,
                },
                dashboard: "BUIDLER",
              }}
              goBack={() => setStep(4)}
            />
          )}
        </>
      </div>
    </div>
  );
};

Builder.layout = FeedLayout;
export default Builder;
