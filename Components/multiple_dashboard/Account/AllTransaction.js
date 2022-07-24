import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import { Wrapper } from "../../../styles/Scrollbar";
import { IoReloadCircle } from "react-icons/io5";
import { Dialog} from "@headlessui/react";
import { Fragment, useState } from "react";

import { Listbox, Transition } from '@headlessui/react'
const AllTransaction = ({goNext}) => {
    const SearchEmp=[
        {
          Id: 1,
          name: "Maliya Mouly ",
          userid: "ID:7464735454",
          position:"Subscription",
          date:"20-01-2022",
          amount:"5030 ৳",
          image1: "/Assets/icon/person1.svg",
          image2: "/Assets/icon/online.svg",
          tag: "",
        
        },
        {
          Id: 1,
          name: "Maliya Mouly",
          userid: "ID:7464735454",
          position:"Subscription",
          date:"20-01-2022",
          amount:"5030 ৳",
          image1: "/Assets/icon/person1.svg",
          image2: "/Assets/icon/online.svg",
          tag: "",
        
        },
        {
          Id: 1,
          name: "Maliya Mouly",
          userid: "ID:7464735454",
          position:"Subscription",
          date:"20-01-2022",
          amount:"5030 ৳",
          image1: "/Assets/icon/person1.svg",
          image2: "/Assets/icon/online.svg",
          tag: "",
        
        },
        {
          Id: 1,
          name: "Maliya Mouly",
          userid: "ID:7464735454",
          position:"Subscription",
          date:"20-01-2022",
          amount:"5030 ৳",
          image1: "/Assets/icon/person1.svg",
          image2: "/Assets/icon/online.svg",
          tag: "",
        
        },
        {
          Id: 1,
          name: "Maliya Mouly",
          userid: "ID:7464735454",
          position:"Subscription",
          date:"20-01-2022",
          amount:"5030 ৳",
          image1: "/Assets/icon/person1.svg",
          image2: "/Assets/icon/online.svg",
          tag: "",
        
        },
        {
          Id: 1,
          name: "Maliya Mouly",
          userid: "ID:7464735454",
          position:"Subscription",
          date:"20-01-2022",
          amount:"5030 ৳",
          image1: "/Assets/icon/person1.svg",
          image2: "/Assets/icon/online.svg",
          tag: "",
        
        },
        {
          Id: 1,
          name: "Maliya Mouly",
          userid: "ID:7464735454",
          position:"Subscription",
          date:"20-01-2022",
          amount:"5030 ৳",
          image1: "/Assets/icon/person1.svg",
          image2: "/Assets/icon/online.svg",
          tag: "",
        
        },
        {
          Id: 1,
          name: "Maliya Mouly",
          userid: "ID:7464735454",
          position:"Subscription",
          date:"20-01-2022",
          amount:"5030 ৳",
          image1: "/Assets/icon/person1.svg",
          image2: "/Assets/icon/online.svg",
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
        { name: 'Subscription' },
        { name: 'Bargaining' },
        { name: 'Instalment' },
        { name: 'Fixed Price' },
        { name: 'Package' },
     
      ]
      const [selected, setSelected] = useState(people[0])
  return (
    <div className="mt-20">
     <div className="container max-w-screen-xl mx-auto relative pt-1 bg-white h-auto rounded-xl shadow-4xl md:shadow-3xl ">
        <div className="bg-[#313131] w-full flex justify-between px-10 rounded-lg mt-7">
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
            <p className="text-white py-6 text-lg">Account Balance Information</p>
            
            <p className="text-white ">Total Amount: 500 BDT</p>
            
            </div>
        </div>
      <div className="py-5 md:py-10 px-2 ">

    <p className="text-lg text-primary font-medium pb-5">All Transaction history</p>
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
          <div className="w-40 relative mt-2 ">
            <input
              className="border border-primary focus:outline-primary rounded-md px-2 py-1.5"
              type="date"
              name="startDate"
              placeholder="Start Date"
            />
            <span className="bg-primary text-white absolute -right-0 top-0 h-[40px] w-10 flex justify-center items-center text-xl rounded-r-md pointer-events-none">
              <img className=" scale-90" src="/Assets/icon/calendar.svg" />
              
            </span>
          </div>
          <div className="mr-4">
          <Listbox  value={selected} onChange={setSelected}>
        <div className="relative mt-1 z-20">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border border-primary">
            <span className="block truncate w-24">{selected.name}</span>
            <div className="absolute top-0 -bottom-[1px] -right-[1px] flex  items-center px-2 pointer-events-none bg-primary rounded-r-lg">
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
       
          <div className="grid grid-cols-4 mx-[13px] -mr-[1px] mt-6 md:mx-3 md:mr-[22px] text-center bg-primary py-4  text-white text-xl rounded-t-md sticky top-0 z-10">
            <p className="text-[16px] md:text-xl"> Member Name</p>
            <p className="text-[16px] md:text-xl"> Order Type</p>
            <p className="text-[16px] md:text-xl">Date</p>
            <p className="text-[16px] md:text-xl "> Amount</p>
           
          </div>
          <Wrapper className="pl-3">
          <div className="routine-table-body-section md:pr-3">
          {SearchEmp.map((card, i) => (
         
         <div className="grid grid-cols-4 divide-x border border-b-2  px-2">
             <div className="flex py-2">
             <div  className="relative flex items-center ">
                 
                 <div className="w-[50px] h-[50px]">
                 <Image src={card.image1} width={50} height={50} alt='fdefd'/>
                     </div>
                 
                     <div className="absolute -bottom-[12px] -right-[15px] w-7 h-7">
                     <Image src={card.image2} width={22} height={28} alt='fdefd'/>
                     </div>
                 </div>
                 <div className="-space-y-0  flex-wrap">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                      {card.name}
                      </p>
                      <p className="md:pl-4 pl-1 text-[#707070] text-[12px] ">
                      {card.userid}
                      </p>
                    </div>
             </div>
         <p className="items-center flex justify-center text-[16px] md:text-md px-2 text-[#666666]">
          {card.position}
         </p>
       
         <p className="items-center flex justify-center text-[16px] md:text-md px-2 text-[#666666]">
          {card.date}
         </p>
         <p className="items-center flex justify-center text-[16px] md:text-md px-2 text-[#666666]">
         {card.amount}
         </p>
       </div>
        ))}
              
              </div>

        </Wrapper>

        <div className=" mt-24 sticky absolute bottom-0 md:relative mr-3">
          <div className="flex absolute right-2 text-xl bottom-0  gap-48 bg-primary px-6 py-3 md:py-4 rounded-md text-white">
            <p>Total:</p>
            <p className="">3000 ৳</p>
          </div>
        </div>
      </div>
    </div>
  
    </div>
   
  );
};

export default AllTransaction;
