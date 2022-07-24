import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import { Wrapper } from "../../../styles/Scrollbar";
import { Dialog} from "@headlessui/react";
import { Fragment, useState } from "react";

import { Listbox, Transition } from '@headlessui/react'
import { AiOutlineFieldTime } from "react-icons/ai";
const Withdraw = ({goNext}) => {
    const SearchEmp=[
        {
          Id: 1,
          amount:"5030 ৳",
          date:"13 sep 2022 , 10:00 AM",
          status:"Pending",
          time:"23:12:23",
          reamain:"Remaining For Cancel",
          img:"/Assets/icon/timer.svg",
          tag: "",
        
        },
        {
            Id: 1,
            amount:"5030 ৳",
            date:"13 sep 2022 , 10:00 AM",
            status:"Canceled ",
            tag: "",
          
          },
          {
            Id: 1,
            amount:"5030 ৳",
            date:"13 sep 2022 , 10:00 AM",
            status:"Completed ",
            tag: "",
          
          },
          {
            Id: 1,
            amount:"5030 ৳",
            date:"13 sep 2022 , 10:00 AM",
            status:"Processing ",
            tag: "",
          
          },
          {
            Id: 1,
            amount:"5030 ৳",
            date:"13 sep 2022 , 10:00 AM",
            status:"Failed ",
            tag: "",
          
          },
      
      ];
      let [isOpen, setIsOpen] = useState(false);

      function closeModal() {
        setIsOpen(false);
      }
    
      function openModal() {
        setIsOpen(true);
      }
      const people = [
        { name: '' },
        { name: 'Last 7 Day' },
        { name: 'Last 15 Day' },
        { name: 'Last 1 Month' },
        { name: 'Last 3 Month' },
        { name: 'Last 6 Month' },
        { name: 'Last 1 Year' },
      ]
      const [selected, setSelected] = useState(people[0])
  return (
    <div className="mt-20">
     <div className="container max-w-screen-xl mx-auto relative pt-1 bg-white h-auto rounded-xl shadow-4xl md:shadow-3xl">
        <div className="bg-gray-500 w-full flex justify-between px-10 rounded-lg mt-7">
            <div className="">
            <p className="text-white py-6 text-lg">Offline Account Balance</p>
            <img className="py-4" src="/Assets/icon/dutycard.svg" alt="" />
            <p className="text-white pt-3">Card Holder: Rownok</p>
            <p className="text-white pt-3 pb-5">Id No: D343fr34</p>
            </div>
            <div>
                <img className="w-44" src="/Assets/icon/dutylogo.svg" alt=""/>
            </div>
            <div>
            <p className="text-white pt-6 pb-3 text-lg">Account Balance Information</p>
            
            <p className="text-white pb-3 text-sm">Available Amount: 2500 ৳</p>
            <p className="text-white pb-3 text-sm">Pending Amount: 5030 ৳</p>
            <p className="text-white pb-3 text-sm">Total Amount: 5500 ৳</p>
            <p className="text-white  text-sm pb-2">Available Withdraw: 5700 ৳</p>
         
        <button className="w-24 rounded-lg text-white h-8 mt-2 mb-4 bg-gray-500 border">Withdraw</button>
    
      
            </div>
        </div>
      <div className="py-5 md:py-10 px-2 ">

    <p className="text-lg text-primary font-medium pb-5">All Withdraw history</p>
      <div className="flex justify-between items-center px-3">
      <div className="relative text-gray-600 ">
            <input
              className="h-10 w-96 px-5 rounded-lg outline-none border-2 border-solid border-[#ECECEC]"
              type="search"
              name="search"
             placeholder="search..."
            />
           
            <div className="absolute  right-0 top-0 md:mt-[11px] w-10  h-8 cursor-pointer">
              <img src="/Assets/icon/search.svg" width={18} height={28} alt='fdefd'/>
            </div>
          </div>
          <div className="w-40 relative mt-2 mr-3">
            <input
              className="border border-primary focus:outline-primary rounded-md px-2 py-1.5"
              type="date"
              name="startDate"
              placeholder="Start Date"
            />
            <span className="bg-primary text-white absolute -right-3 top-0 h-[40px] w-10 flex justify-center items-center text-xl rounded-r-md pointer-events-none">
              <img className=" scale-90" src="/Assets/icon/calendar.svg" />
              
            </span>
          </div>
          <div className="mr-4">
          <Listbox  value={selected} onChange={setSelected}>
        <div className="relative mt-1 z-20">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white h-10 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border border-primary">
            <span className="block truncate w-24">{selected.name}</span>
            <div className="absolute top-0 -bottom-[1px] right-0 flex  items-center px-2 pointer-events-none bg-primary rounded-r-lg">
               <img src="/Assets/icon/downarrow.svg" alt="" />
              </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-2 max-h-72 w-full overflow-auto rounded-md bg-white text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-primary">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-3 pr-4 ${
                      active ? 'bg-primary text-white' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                         
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
          </div>
        
      </div>
       
          <div className="grid grid-cols-3 mx-[13px] -mr-[1px] mt-6 md:mx-3 md:mr-[22px] text-center bg-primary py-4  text-white text-xl rounded-t-md sticky top-0 z-10">
            <p className="text-[16px] md:text-xl"> Date</p>
            <p className="text-[16px] md:text-xl">Amount</p>
            <p className="text-[16px] md:text-xl">Status</p>
           
           
          </div>
          <Wrapper className="pl-3">
          <div className="routine-table-body-section md:pr-3">
          {SearchEmp.map((card, i) => (
         
         <div className="grid grid-cols-3 divide-x border border-b-2  px-2 h-20">
            <p className="items-center flex justify-center text-[16px] md:text-md px-2 text-[#666666]">
          {card.date}
         </p>
         <p className="items-center flex  justify-center text-[16px] md:text-md px-2 text-[#666666]">
          {card.amount}
         </p>
       
        
         <p className="items-center flex justify-end text-[16px] md:text-lg">
         <div className="flex items-center justify-end">
           <div className="flex flex-col items-center">
            <p className="items-center text-[15px] text-[#666666] cursor-pointer ">
               {card.status}
             </p>
             {card.time &&   <p  className="items-center flex text-[14px] text-primary gap-1 h-10 -mt-2">
              <img src={card.img} alt="" />
               <p>{card.time}</p>
              
             </p>}
             {card.reamain &&   <p className="text-[12px] text-primary -mt-3">{card.reamain}</p>}
            </div> 
           
           {card.status=="Pending" &&  <Menu as="div" className=" relative ml-2">
               <Menu.Button>
                 <Image
                   src="/Assets/icon/dothor.svg"
                   className=""
                   width={30}
                   height={25}
                   alt="calender"
                 />
               </Menu.Button>
               <Menu.Items className=" flex flex-col items-center absolute -ml-20 -mt-10 bg-white shadow-3xl  rounded-md px-3 py-1">
                
                 <Menu.Item>
                   {({ active }) => (
                     <a onClick={openModal}
                       className={`${
                         active
                           ? "bg-primary-300 text-white"
                           : "text-gray-900"
                       } group flex w-full items-center rounded-[4px] px-2 text-sm cursor-pointer`}
                      
                     >
                       <p className="text-sm">Cancel</p>
                     </a>
                   )}
                 </Menu.Item>
               </Menu.Items>
             </Menu>}
           </div>
         </p>
       </div>
        ))}
              
              </div>

        </Wrapper>

    
      </div>
    </div>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col">
      <p className="text-lg flex justify-center">Are you  want to Cancel this Transaction ?</p>
      <div className="flex justify-center mt-5 gap-3">
            <button onClick={closeModal} className="btn btn-primary md:w-28 capitalize ">
              Yes
            </button>
            <button onClick={closeModal}  className="btn text-primary bg-white border-primary hover:bg-primary-400 hover:text-white md:w-28 capitalize ">
              Cancel
            </button>
          </div>
    </div>
                 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  
    </div>
   
  );
};

export default Withdraw;
