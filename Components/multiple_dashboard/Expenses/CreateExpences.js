import React from 'react'
import Link from 'next/link'
import { useFormik, Form, FormikProvider, Formik } from "formik";
import Accordion from "@components/global/Accordion";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { Input } from "@components/global/Input";
import * as Yup from "yup";
import FocusError from "@components/global/FocusError";

const CreateExpences = ({goNext}) => {
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
    <div className="container  max-w-screen-xl h-auto mx-auto rounded-lg  py-8 mt-20">
       <FormikProvider value={formik}>
      <Form autoComplete="off" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-around">
     
     <div className="flex flex-col">
  <p className='font-normal text-2xl mt-4 mb-5'>Create New Expenses List</p>
  <Input name="expencelist" className='px-4 py-3 text-md font-normal w-72 bg-gray-100 rounded-lg outline-none dark:bg-bg-300 dark:border-[#515150]' placeholder='Rent House' type="text" />
  <div className="flex flex-col mt-5">
         <p className="text-lg mb-2">Amount</p>
         <div className="relative flex w-40">
           <Input
             name="worker"
             className="w-40 py-2 px-2  rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300 dark:bg-bg-300 dark:border-[#515150]"
             type="number"
             min="1"
             max="100000"
             placeholder="00৳"
           />
           
           <div className="h-[42px] w-8 absolute right-0 top-0 bg-primary pointer-events-none flex flex-col justify-between items-center cursor-pointer py-1 rounded-r">
             <FiChevronUp className="text-white cursor-pointer" />
             <span className="w-4 h-[1px] bg-white" />
             <FiChevronDown className="text-white cursor-pointer" />
           </div>
         </div>
       </div>
       <div className="flex flex-col mt-5">
         <p className="text-lg mb-2">Select Date</p>
         <div className="w-40 relative">
           <Input
             className="border border-primary focus:outline-primary rounded-md px-2 py-1.5 dark:bg-bg-300 dark:border-[#515150]"
             type="date"
             name="startDate"
           />
           <span className="bg-primary text-white absolute right-0 top-0 h-[40px] w-10 flex justify-center items-center text-xl rounded-r-md pointer-events-none">
             <img className=" scale-90" src="/Assets/icon/calendar.svg" />
           </span>
         </div>
       </div>
            
       <div className="flex gap-5 mt-8">
         <button type='submit'  className="btn btn-primary font-normal capitalize hover:text-white hover:bg-primary-300 w-32"> Save</button>
         <button className="btn bg-white font-normal  text-primary border-primary capitalize hover:text-white hover:bg-primary-300 w-32"> cancel</button>
     </div>
  </div>

  <div className="space-y-3 max-w-sm">
  <p className='font-normal text-xl md:text-3xl mt-4'> Instruction:</p>
  <Accordion title='Expencess Name?'>
    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptate? </p>
  </Accordion>
  <Accordion title='Ammount?'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, necessitatibus!</p>
  </Accordion>
  <Accordion title='Date?'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, necessitatibus!</p>
  </Accordion>
  </div>

  {/* mobile button */}

  <div className="flex justify-end py-7 gap-5 md:hidden">
          <button type='submit'  className="btn btn-primary font-normal px-12">
            Next
          </button>
          <button className="btn btn-primary font-normal btn-outline px-10">
            Cancel
          </button>
        </div>
 </div>
        </Form>
        <FocusError/>
        </FormikProvider>
   
     </div>
  )
}

export default CreateExpences