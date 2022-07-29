import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Dialog} from '@headlessui/react'
import CheckBox from "@components/global/CheckBox";
import Autocomplete from "react-autocomplete";
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

const InviteEmployee = ({ goNext }) => {

  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  const people = [
    { name: "Last 1 Day" },
    { name: "Last 7 Day" },
    { name: "Last 15 Day" },
    { name: "Last 1 Month" },
    { name: "Last 3 Month" },
    { name: "Last 6 Month" },
    { name: "Last 1 Year" },
  ];
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="container max-w-screen-md mx-auto relative my-5 pt-20">
     
      <div className=" h-auto rounded-2xl dark:bg-bg-200 shadow-4xl md:shadow-3xl py-5 md:py-10 px-2 md:px-12 mt-16">
      <div className="flex py-2 mb-3 ">
             <div  className="relative flex items-center ">
                 
                 <div className="w-[50px] h-[50px] ">
                 <img src="/Assets/icon/person1.svg" width={50} height={50} alt='fdefd'/>
                     </div>
                 
                     <div className="absolute -bottom-[12px] -right-[15px] w-7 h-7">
                     <img src="/Assets/icon/online.svg" width={22} height={28} alt='fdefd'/>
                     </div>
                 </div>
                 <div className="-space-y-0  flex-wrap">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                      Rownok
                      </p>
                      <p className="md:pl-4 pl-1 text-[#707070] text-[12px] ">
                      Id:45435345345
                      </p>
                    </div>
             </div>

        <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="relative">
                  <Autocomplete
                    getItemValue={(item) => item.value}
                    menuStyle={menuStyle}
                    items={positionAutocomplete}
                    inputProps={{
                      placeholder: "Position",
                      className:
                        "w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300 dark:bg-bg-300"
                
                    }}
                    
                    renderItem={(item, isHighlighted) => (
                      <div
                        className={`cursor-pointer border-b p-1 ${
                          isHighlighted ? "bg-gray-200" : "bg-white dark:bg-bg-300"
                        }`}
                      >
                        {item.label}
                      </div>
                    )}
                  />
                 
                </div>

          <div className="w-40 relative mt-2 ">
            <input
              className="border border-primary focus:outline-primary rounded-md px-2 py-1.5 dark:bg-bg-300"
              type="date"
              name="startDate"
              placeholder="Start Date"
            />
            <span className="bg-primary text-white absolute right-0 top-0 h-[40px] w-10 flex justify-center items-center text-xl rounded-r-md pointer-events-none">
              <img className=" scale-90" src="/Assets/icon/calendar.svg" />
              
            </span>
          </div>
        </div>
        <div className="">
          <p className="pb-3 text-lg font-medium pt-3">Access Functionality</p>
          <div className="grid sm:grid-cols-2 sm:mb-2">
            <div className="flex items-center mb-1">
              <CheckBox value={true} />
              <p>Dashboard</p>
            </div>
            <div className="flex items-center mb-1">
              <CheckBox />
              <p>Staff & PArtner</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 sm:mb-2">
            <div className="flex items-center mb-1">
              <CheckBox value={true} />
              <p>Order</p>
            </div>
            <div className="flex items-center mb-1">
              <CheckBox />
              <p>Expenses</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 sm:mb-2">
            <div className="flex items-center mb-1">
              <CheckBox />
              <p>Member</p>
            </div>
            <div className="flex items-center mb-1">
              <CheckBox />
              <p>Account Balance</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 sm:mb-2">
            <div className="flex items-center mb-1">
              <CheckBox />
              <p>Group</p>
            </div>
            <div className="flex items-center mb-1">
              <CheckBox />
              <p>Customer Review</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 sm:mb-2">
            <div className="flex items-center mb-1">
              <CheckBox />
              <p>Notice</p>
            </div>
            <div className="flex items-center mb-1">
              <CheckBox />
              <p>No Access In Functionality</p>
            </div>
          </div>
          <div className="flex justify-end mt-5 gap-3">
            <button onClick={goNext} className="btn btn-primary md:w-28 capitalize ">
              Invite
            </button>
            <button className="btn text-primary bg-white border-primary hover:bg-primary-400 hover:text-white md:w-28 capitalize ">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteEmployee;
