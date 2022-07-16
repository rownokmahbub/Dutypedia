import Stepper from "@components/global/Stepper";
import React from "react";

const ServiceSerial = ({ activeStep = 1 }) => {
  const Steps = [
    {
      label: (
        <span>
          {" "}
          Choose <br /> Service{" "}
        </span>
      ),
    },
    {
      label: (
        <span>
          {" "}
          Pricing <br />
          &Info{" "}
        </span>
      ),
    },
    {
      label: (
        <span>
          {" "}
          Service <br /> Title &Photo{" "}
        </span>
      ),
    },
    {
      label: "Address",
    },
    {
      label: "Review",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto my-8 overflow-hidden">
      <Stepper activeStep={activeStep} stepsArray={Steps} />
    </div>
  );
};

export default ServiceSerial;
