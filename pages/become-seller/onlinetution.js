import MainOnlineTution from "@components/become-seller/online_tution/MainOnlineTution";
import FeedLayout from "layouts/FeedLayout";
import FinalReview from "@components/service/FinalReview";
import SelectService from "@components/service/SelectService";
import ServiceLocation from "@components/service/ServiceLocation";
import ServiceSerial from "@components/service/ServiceSerial";
import UploadService from "@components/service/UploadService";
import { useState } from "react";

const OnlineTutionPage = () => {
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
            <MainOnlineTution
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
                  category: "online tution",
                  type: 2,
                  options: optionsData,
                },
                dashboard: "ONLINETUTION",
              }}
              goBack={() => setStep(4)}
            />
          )}
        </>
      </div>
    </div>
  );
};

OnlineTutionPage.layout = FeedLayout;
export default OnlineTutionPage;
