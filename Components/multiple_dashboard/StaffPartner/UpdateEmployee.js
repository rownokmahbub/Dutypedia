import React from "react";
import search from "/public/Assets/icon/search.svg";
import add from "/public/Assets/icon/roundedplus.svg";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import { Wrapper } from "../../../styles/Scrollbar";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import CheckBox from "@components/global/CheckBox";

const UpdateEmployee = ({ goNext }) => {
  const Expence = [
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
  ];
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
    <div className="container max-w-screen-md mx-auto relative my-5">
      <div className="mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white py-5 md:py-10 px-2 md:px-12">
        <div className="relative text-gray-600  w-full pb-5 md:pb-0 mb-4">
          <input
            className=" h-10 px-5 pl-4 pr-8 w-full mx-auto rounded-lg text-sm focus:outline-none  outline-none border-2 border-solid border-[#ECECEC] bg-white"
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className="absolute right-2 top-3 cursor-pointer">
            <Image src={search} width={18} height={18} alt="search" />
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3">
          <div>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1 z-20">
                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border border-primary">
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
                            active ? "bg-primary text-white" : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
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

export default UpdateEmployee;
