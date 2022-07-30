import React from "react";
import search from "/public/Assets/icon/search.svg";
import add from "/public/Assets/icon/roundedplus.svg";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import { Wrapper } from "../../../styles/Scrollbar";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const ExpenceEdit = ({goNext}) => {
  const Expence=[
    {
      Id: 1,
      date: "06/29/2022",
      expence: "Rent the house frhfiuhrfur uifhriufrhufihr fufgr ",
      amount: "3000 ৳",
 
    
    },
    {
      Id: 2,
      date: "06/29/2022",
      expence: "Rent the house frhfiuhrfur uifhriufrhufihr fufgr ",
      amount: "3000 ৳",
 
    
    },
    {
      Id: 3,
      date: "06/29/2022",
      expence: "Rent the house frhfiuhrfur uifhriufrhufihr fufgr ",
      amount: "3000 ৳",
 
    
    },
    {
      Id: 4,
      date: "06/29/2022",
      expence: "Rent the house frhfiuhrfur uifhriufrhufihr fufgr ",
      amount: "3000 ৳",
 
    
    },
    {
      Id: 5,
      date: "06/29/2022",
      expence: "Rent the house frhfiuhrfur uifhriufrhufihr fufgr ",
      amount: "3000 ৳",
 
    
    },
    {
      Id: 6,
      date: "06/29/2022",
      expence: "Rent the house frhfiuhrfur uifhriufrhufihr fufgr ",
      amount: "3000 ৳",
 
    
    },
    {
      Id: 7,
      date: "06/29/2022",
      expence: "Rent the house frhfiuhrfur uifhriufrhufihr fufgr ",
      amount: "3000 ৳",
 
    
    },
    {
      Id: 8,
      date: "06/29/2022",
      expence: "Rent the house frhfiuhrfur uifhriufrhufihr fufgr ",
      amount: "3000 ৳",
    },
  
  ]
  const people = [
    { name: 'Last 1 Day' },
    { name: 'Last 7 Day' },
    { name: 'Last 15 Day' },
    { name: 'Last 1 Month' },
    { name: 'Last 3 Month' },
    { name: 'Last 6 Month' },
    { name: 'Last 1 Year' },
  ]
  const [selected, setSelected] = useState(people[0])
  return (
    <div className="container max-w-screen-xl mx-auto relative my-5">
      <div className="mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl dark:bg-bg-300 py-5 md:py-10 px-2 md:px-12">
        <div className="flex justify-between items-center flex-wrap ">
          <div className="flex gap-4 items-center pb-5 md:pb-0">
            <p>Filtered By</p>
            <Listbox  value={selected} onChange={setSelected}>
        <div className="relative mt-1 z-20">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg  py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border border-primary">
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
            <Listbox.Options className="absolute mt-2 max-h-72 w-full overflow-auto rounded-md dark:bg-bg-300 dark:border-[#515150] dark:text-white text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-primary">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-3 pr-4 ${
                      active ? 'bg-primary text-white' : 'text-gray-900 dark:text-white'
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

          <div className="relative text-gray-600 md:w-72 w-full pb-5 md:pb-0">
            <input
              className=" h-10 px-5 pl-4 pr-8 w-full mx-auto rounded-lg text-sm focus:outline-none  outline-none border-2 border-solid border-[#ECECEC] bg-white dark:bg-bg-300 dark:border-[#515150]"
              type="search"
              name="search"
              placeholder="Search"
            />
            <div className="absolute right-2 top-3 cursor-pointer">
              <Image src={search} width={18} height={18} alt="search"/>
            </div>
          </div>
          <div onClick={goNext} className="flex gap-1 items-center cursor-pointer">
            <p>Add Expenses</p>
            <Image src={add} width={28} height={28} alt="search" />
          </div>
        </div>

    
            
        
          <div className="grid grid-cols-3 mx-[13px] -mr-[1px] mt-6 md:mx-3 md:mr-[22px] text-center bg-primary py-4  text-white text-xl rounded-t-md sticky top-0 z-10">
            <p className="text-[16px] md:text-xl"> Date</p>
            <p className="text-[16px] md:text-xl"> Name Of Expenses</p>
            <p className="text-[16px] md:text-xl">Amount</p>
          </div>
          <Wrapper className="pl-3">
          <div className="routine-table-body-section md:pr-3">
          {Expence.map((card, i) => (
         
         <div className="grid grid-cols-3 divide-x dark:divide-[#515150] border dark:border-[#515150] border-b-2  px-2">
         <p className="items-center flex justify-center text-[16px] md:text-xl text-[#666666] dark:text-white">
        {card.date}
         </p>
         <p className="items-center flex text-center text-[16px] md:text-xl px-2 text-[#666666] dark:text-white">
          {card.expence}
         </p>

         <p className="items-center flex justify-end text-[16px] md:text-xl">
           <div className="flex items-center justify-end">
             <p className="items-center text-[16px]  md:text-2xl text-[#666666] md:-ml-8 dark:text-white">
               {card.amount}
             </p>

             <Menu as="div" className=" relative md:ml-16">
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
                   
                          <a onClick={goNext}
                       className={`${
                         active ? "bg-gray-200 text-black " : "text-gray-900"
                       } group flex w-full items-center rounded-[4px]  px-2 text-sm text-center cursor-pointer`}
                       
                     >
                       <p className="text-sm">Edit</p>
                     </a>
                   
                
                   )}
                 </Menu.Item>
                 <Menu.Item>
                   {({ active }) => (
                     <a
                       className={`${
                         active
                           ? "bg-primary-300 text-white"
                           : "text-gray-900"
                       } group flex w-full items-center rounded-[4px] px-2 text-sm cursor-pointer`}
                      
                     >
                       <p className="text-sm">Delete</p>
                     </a>
                   )}
                 </Menu.Item>
               </Menu.Items>
             </Menu>
           </div>
         </p>
       </div>
        ))}
              
              </div>

        </Wrapper>

        <div className=" mt-24 sticky absolute bottom-0 md:relative">
          <div className="flex absolute right-2 text-xl bottom-0  gap-48 bg-primary px-6 py-3 md:py-4 rounded-md text-white">
            <p>Total:</p>
            <p className="">3000 ৳</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenceEdit;
