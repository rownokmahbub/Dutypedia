import React from "react";
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { BsArrowLeftSquare } from "react-icons/bs";
import CheckBox from "@components/global/CheckBox";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import { Input } from "@components/global/Input";
import OptionsViewer from "@components/become-seller/OptionsViewer";
import Autocomplete from "react-autocomplete";
import FocusError from "@components/global/FocusError";
import toast from "react-hot-toast";

export const Days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export const defaultFacilites = [
  {
    id: 1,
    title: "Online Support Available",
  },
  {
    id: 2,
    title: "Home Delivery Available",
  },
  {
    id: 3,
    title: "Home Service Available",
  },
];

export const menuStyle = {
  borderRadius: "3px",
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
  background: "rgba(255, 255, 255, 0.9)",
  fontSize: "90%",
  position: "absolute",
  top: "42px",
  zIndex: "100",
  left: 0,
  height: "150px",
  overflow: "auto",
};

const validate = Yup.object({
  serviceName: Yup.string().min(8).max(50).required("Service name is required"),
  providerTitle: Yup.string()
    .min(2)
    .max(10)
    .required("Provider title is required"),
  providerName: Yup.string()
    .min(3)
    .max(20)
    .required("Provider name is required"),
  gender: Yup.string().required("Gender is required"),
  position: Yup.string().min(3).max(50).required("Position is required"),
  worker: Yup.number().min(1).max(100000).required("This field is required"),
  startingPrice: Yup.number()
    .min(1)
    .max(100000)
    .required("This field is required"),
  startDate: Yup.date().required("This field is required"),
});

const titleAutocomplete = [
  {
    label: "Dr. (Doctor)",
    value: "Dr.",
  },
  {
    label: "Esq. (Esquire)",
    value: "Esq.",
  },
  {
    label: "Hon. (Honorable)",
    value: "Hon.",
  },
  {
    label: "Jr. (Junior)",
    value: "Jr.",
  },
  {
    label: "Mr",
    value: "Mr",
  },
  {
    label: "Mrs",
    value: "Mrs",
  },
  {
    label: "Miss",
    value: "Miss",
  },
];

export const positionAutocomplete = [
  {
    label: "Administrative Assistant",
    value: "Administrative Assistant",
  },
  {
    label: "Executive Assistant",
    value: "Executive Assistant",
  },
  {
    label: "Marketing Manager",
    value: "Marketing Manager",
  },
  {
    label: "Software Engineer",
    value: "Software Engineer",
  },
  {
    label: "Sales Manager",
    value: "Sales Manager",
  },
  {
    label: "Office Assistant",
    value: "Office Assistant",
  },
  {
    label: "General Manager",
    value: "General Manager",
  },
  {
    label: "Head of Department",
    value: "Head of Department",
  },
];

const SelectService = ({ goNext, goBack, savedData }) => {
  const [t47, setT47] = useState(savedData.t47 || false);
  const [facilites, setFacilites] = useState(savedData?.facilites || []);
  const [workingTime, setWorkingTime] = useState(savedData?.workingTime || []);

  const addWorkingTime = ({ day, startTime, closeTime }) => {
    setWorkingTime([...workingTime, { day, startTime, closeTime }]);
  };
  const removeWorkingTime = (day) => {
    setWorkingTime(workingTime.filter((item) => item.day !== day));
  };
  const toggleWorkingTime = (day) => {
    const index = workingTime.findIndex((item) => item.day === day);
    if (index === -1) {
      addWorkingTime({ day });
    } else {
      removeWorkingTime(day);
    }
  };
  const formik = useFormik({
    initialValues: {
      serviceName: savedData?.serviceName || "",
      providerTitle: savedData?.providerTitle || "",
      providerName: savedData?.providerName || "",
      gender: savedData?.gender || "",
      position: savedData?.position || "",
      worker: savedData?.worker || 1,
      startDate: savedData?.startDate || "",
      startingPrice: savedData?.startingPrice || 100,
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      if (workingTime.some((item) => !item.open || !item.close)) {
        toast.error("Please set opening and closing time for selected days!");
        return;
      }
      if (!t47 && !workingTime.length) {
        toast.error("Please set working time!");
        return;
      }
      const data = {
        ...values,
        workingTime,
        facilites,
        t47,
      };
      goNext(data);
    },
  });

  const {
    errors,
    setFieldValue,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
  } = formik;
  return (
    <div className="max-w-screen-lg mx-auto shadow-3xl my-8 rounded-lg py-4 bg-white px-3">
      <BsArrowLeftSquare
        onClick={() => goBack()}
        className="text-3xl cursor-pointer text-gray-400 md:mx-20  md:mt-10"
      />
      <FormikProvider value={formik}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <div className="max-w-xl mx-auto">
            <div className="mb-3 w-full">
              <p className="mb-1 text-lg">Service center name</p>
              <Input
                name="serviceName"
                className="w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                type="text"
                placeholder="Type your service center name"
              />
            </div>

            <div className="mb-3 w-full">
              <p className="mb-1 text-lg">Service provider information</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-wrap">
                <div className="relative">
                  <Autocomplete
                    getItemValue={(item) => item.value}
                    menuStyle={menuStyle}
                    items={titleAutocomplete}
                    inputProps={{
                      placeholder: "Title",
                      className:
                        "w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300",
                      ...getFieldProps("providerTitle"),
                    }}
                    value={values.providerTitle}
                    onChange={(e) => {
                      setFieldValue("providerTitle", e.target.value);
                    }}
                    onSelect={(value) => {
                      setFieldValue("providerTitle", value);
                    }}
                    renderItem={(item, isHighlighted) => (
                      <div
                        className={`cursor-pointer border-b p-1 ${
                          isHighlighted ? "bg-gray-200" : "bg-white"
                        }`}
                      >
                        {item.label}
                      </div>
                    )}
                  />
                  {errors.providerTitle && touched.providerTitle && (
                    <p className="text-red-500 text-sm">
                      {errors.providerTitle}
                    </p>
                  )}
                </div>
                <Input
                  name="providerName"
                  className="w-full col-span-2 py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                  type="text"
                  placeholder="Name"
                />
                <Input
                  name="gender"
                  className="w-full py-2 h-[42px]  px-1 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                  as="select"
                >
                  <option value="">Gender...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Input>
                <div className="relative">
                  <Autocomplete
                    getItemValue={(item) => item.value}
                    menuStyle={menuStyle}
                    items={positionAutocomplete}
                    inputProps={{
                      placeholder: "Position",
                      className:
                        "w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300",
                      ...getFieldProps("position"),
                    }}
                    value={values.position}
                    onChange={(e) => {
                      setFieldValue("position", e.target.value);
                    }}
                    onSelect={(value) => {
                      setFieldValue("position", value);
                    }}
                    renderItem={(item, isHighlighted) => (
                      <div
                        className={`cursor-pointer border-b p-1 ${
                          isHighlighted ? "bg-gray-200" : "bg-white"
                        }`}
                      >
                        {item.label}
                      </div>
                    )}
                  />
                  {errors.position && touched.position && (
                    <p className="text-red-500 text-sm">{errors.position}</p>
                  )}
                </div>
              </div>
              <div className="relative z-20"></div>
            </div>

            <div className="mb-3 w-full">
              <p className="mb-1 text-lg">How Many Team/Worker You Have?</p>

              <div className="relative w-[128px]">
                <Input
                  name="worker"
                  className="w-32 py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                  type="number"
                  min="1"
                  max="100000" inputmode="numeric" pattern="[0-9]*"
                />
                {/* <div className="h-[42px] w-8 absolute right-0 top-0 bg-primary pointer-events-none flex flex-col justify-between items-center cursor-pointer py-1 rounded-r">
                  <FiChevronUp className="text-white cursor-pointer" />
                  <span className="w-4 h-[1px] bg-white" />
                  <FiChevronDown className="text-white" />
                </div> */}
              </div>
            </div>

            <div className="mb-3 w-full">
              <p className="mb-1 text-lg">Eastablished Or Start Date</p>

              <div className="w-40 relative">
                <Input
                  className="border border-primary focus:outline-primary rounded-md px-2 py-1.5"
                  type="date"
                  name="startDate"
                />
                {/* <span className="bg-primary text-white absolute right-0 top-0 h-[40px] w-10 flex justify-center items-center text-xl rounded-r-md pointer-events-none">
                  <img className=" scale-90" src="/Assets/icon/calendar.svg" />
                </span> */}
              </div>
            </div>

            <div className="flex mt-5 mb-3 justify-between items-center">
              <p className="mb-1 text-lg">Working Time</p>
              <div className="flex gap-2 items-center justify-center">
                <p className=" text-md ">24/7 open</p>
                <CheckBox value={t47} onChange={() => setT47(!t47)} />
              </div>
            </div>

            {!t47 && (
              <>
                <div className="px-3 bg-white py-4 rounded-lg shadow-3xl mb-5">
                  <div className="grid grid-cols-3 bg-primary py-2 items-center px-3 rounded-lg text-white">
                    <p className=" text-md ">Day</p>
                    <p className=" text-md text-center">Open Time</p>
                    <p className=" text-md text-right">Closing Time</p>
                  </div>

                  {Days.map((day, index) => (
                    <div className="flex mt-4 justify-between items-center">
                      <div className="flex flex-1 items-center">
                        <CheckBox
                          value={workingTime.some((item) => item.day === day)}
                          onChange={() => {
                            toggleWorkingTime(day);
                          }}
                        />
                        <p className=" text-md ">{day}</p>
                      </div>
                      <div className="flex flex-1">
                        <div className="relative">
                          <Input
                            className="border border-primary focus:outline-primary rounded-md px-2 py-1.5 w-32"
                            type="time"
                            name={`${day}Open`}
                            value={
                              workingTime.find((item) => item.day === day)
                                ?.open || ""
                            }
                            onChange={(e) => {
                              setWorkingTime(
                                workingTime.map((item) => {
                                  if (item.day === day) {
                                    return {
                                      ...item,
                                      open: e.target.value,
                                    };
                                  }
                                  return item;
                                })
                              );
                            }}
                          />
                          <span className="bg-primary text-white absolute right-0 top-0 h-[40px] w-10 flex justify-center items-center text-xl rounded-r-md pointer-events-none">
                            <img
                              className=" scale-90"
                              src="/Assets/icon/clock.svg"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="relative">
                          <Input
                            className="border border-primary focus:outline-primary rounded-md px-2 py-1.5 w-32"
                            type="time"
                            name={`${day}Close`}
                            value={
                              workingTime.find((item) => item.day === day)
                                ?.close || ""
                            }
                            onChange={(e) => {
                              setWorkingTime(
                                workingTime.map((item) => {
                                  if (item.day === day) {
                                    return {
                                      ...item,
                                      close: e.target.value,
                                    };
                                  }
                                  return item;
                                })
                              );
                            }}
                          />
                          <span className="bg-primary text-white absolute right-0 top-0 h-[40px] w-10 flex justify-center items-center text-xl rounded-r-md pointer-events-none">
                            <img
                              className=" scale-90"
                              src="/Assets/icon/clock.svg"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="mb-3 w-full">
              <p className="mb-1 text-lg">Servic fee starting price</p>
              <div className="relative w-[128px]">
                <Input
                  name="startingPrice"
                  className="w-32 py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                  type="number"
                  min="1"
                  max="100000"
                />
                <div className="h-[42px] w-8 absolute right-0 top-0 bg-primary pointer-events-none flex flex-col justify-between items-center cursor-pointer py-1 rounded-r">
                  <FiChevronUp className="text-white cursor-pointer" />
                  <span className="w-4 h-[1px] bg-white" />
                  <FiChevronDown className="text-white" />
                </div>
              </div>
            </div>

            <div>
              <OptionsViewer
                noHeader
                defaultOptions={defaultFacilites}
                data={facilites}
                title="Choose Your Facilites"
                onSubmit={(data) => {
                  setFacilites(data);
                }}
              />
            </div>

            <div className="flex justify-end ">
              <button
                type="submit"
                className="btn btn-primary w-[130px] min-h-0 h-9 font-normal text-sm capitalize"
              >
                Next
              </button>
            </div>
          </div>
        </Form>
        <FocusError />
      </FormikProvider>
    </div>
  );
};

export default SelectService;
