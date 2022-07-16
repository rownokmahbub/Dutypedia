import React from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { Input } from "@components/global/Input";
import * as Yup from "yup";
import FocusError from "@components/global/FocusError";
import { useFormik, Form, FormikProvider, Formik } from "formik";
const NewExpence = ({goNext}) => {
  const validate = Yup.object({
    expencelist: Yup.string().required("Required"),
    worker: Yup.number().min(1).max(99999999).required("Required"),
    startDate: Yup.string().min(0).max(200).required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      expencelist:"",
      worker: "",
      startDate: "",
    
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      goNext();
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
    <div className="container max-w-screen-md mx-auto relative ">
             <FormikProvider value={formik}>
      <Form autoComplete="off" onSubmit={handleSubmit}>
      <div className="flex flex-col  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white  py-10 px-12">
        <h1 className="text-2xl mb-10">Create New Expenses </h1>
        <h1 className="text-lg mb-2">Name Of Expenses</h1>
        <Input name="expencelist"
          type="text"
          className="border-none bg-[#F5F5F5] rounded-md  h-[38px] w-[290px] outline-none pl-3"
          placeholder="Rent House"
        />
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="flex flex-col">
            <p className="text-lg mb-2">Ammount</p>
            <div className="relative w-40">
              <Input
                name="worker"
                className="w-40 py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
                type="number"
                min="1"
                max="100000"
                placeholder="00৳...|"
              />
              <div className="h-[42px] w-8 absolute right-0 top-0 bg-primary pointer-events-none flex flex-col justify-between items-center cursor-pointer py-1 rounded-r">
                <FiChevronUp className="text-white cursor-pointer" />
                <span className="w-4 h-[1px] bg-white" />
                <FiChevronDown className="text-white" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-lg mb-2">Select Date</p>
            <div className="w-40 relative">
              <Input
                className="border border-primary focus:outline-primary rounded-md px-2 py-1.5"
                type="date"
                name="startDate"
              />
              <span className="bg-primary text-white absolute right-0 top-0 h-[40px] w-10 flex justify-center items-center text-xl rounded-r-md pointer-events-none">
                <img className=" scale-90" src="/Assets/icon/calendar.svg" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-end mt-20">
            <button type="submit" className="btn btn-primary font-normal capitalize hover:text-white hover:bg-primary-300 w-32"> Save</button>
            <button className="btn bg-white font-normal  text-primary border-primary capitalize hover:text-white hover:bg-primary-300 w-32"> cancel</button>
        </div>
      </div>
      </Form>
      <FocusError/>
      </FormikProvider>
     
    </div>
  );
};

export default NewExpence;
