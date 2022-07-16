import { Fragment, useEffect, useState } from "react";

const Stepper = ({ activeStep, stepsArray }) => {
  const [stepperSteps, setStep] = useState([]);

  function updateStep(stepNumber, steps) {
    const newSteps = [...steps];
    let stepCounter = 0;
    while (stepCounter < newSteps.length) {
      //current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      }
      // Past step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      }
      // Future steps
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }
    return newSteps;
  }

  useEffect(() => {
    const currentSteps = updateStep(activeStep - 1, stepsArray);
    setStep(currentSteps);
  }, [activeStep]);

  return (
    <div className="py-5 sm:px-5">
      <div className="mx-0 sm:mx-4 p-4">
        <div className="flex items-center">
          {stepperSteps.map((step, index) => (
            <Fragment key={index}>
              <div className="flex items-center relative">
                <div
                  className={`rounded-full transition duration-500 ease-in-out h-10 w-10 py-3 border-2 flex justify-center items-center text-lg ${
                    step.completed
                      ? "text-white"
                      : step.highlighted
                      ? "text-primary-500"
                      : "text-gray-500"
                  } ${
                    step.highlighted || step.completed
                      ? "border-primary-500"
                      : "border-gray-300"
                  } ${step.completed && "bg-primary-500"}`}
                >
                  {index+1}
                </div>
                <div
                  className={`absolute top-0 -ml-9 text-center mt-16 w-28 text-xs font-medium uppercase ${
                    step.highlighted || step.completed
                      ? "text-primary-500"
                      : "text-gray-500"
                  }`}
                >
                  {step.label}
                </div>
              </div>
              {index < stepperSteps.length - 1 && (
                <div
                  className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                    stepperSteps[index + 1]?.completed ||
                    stepperSteps[index + 1]?.highlighted
                      ? "border-primary-500"
                      : "border-gray-300"
                  }`}
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
