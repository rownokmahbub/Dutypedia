import React from "react";
import Image from "next/image";
import Classes from "../../../styles/Header.module.css";
import search from '/public/Assets/icon/search.svg'
import calendar from '/public/Assets/icon/calendar.svg'
import DateInput from "@components/global/DateInput";
function AppoinmentHeader() {
  const  [startDate, setStartDate] = React.useState(new Date());
  return (
    <>
      <p className="text-center pt-1 md:pb-2 pb-0 text-[#313131] text-[30px]">
        Appointment
      </p>
      <div className="flex justify-between items-center pt-10  flex-wrap md:px-8 px-2">
        <div className=" relative text-gray-600 w-full md:w-[400px]">
          <input
            className=" h-10 px-5 w-full md:w-[90%]  rounded-lg text-sm focus:outline-none mx-auto  outline-none border-2 border-solid border-[#ECECEC]"
            type="search"
            name="search"
            placeholder="Search"
          />
          <div className="absolute md:right-12 right-5 -top-2 mt-[18px] cursor-pointer">
            <Image src={search} width={16} height={16} alt='search'/>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-5 md:mt-0">
          <p>Filter By</p>
          
          <DateInput selected={startDate}  onChange={(date)=>{setStartDate(date)}}/>
        </div>
      
       
    
      </div>

      <div className="flex w-[95%] mx-auto items-center justify-between text-center text-[#666666] mt-20 ">
        <div
          className={`${Classes.border} ${Classes.borderRed} mb-6 p-3 w-full cursor-pointer`}
        >
          Upcoming
        </div>
        <div className={`${Classes.border}  mb-6 p-3 w-full cursor-pointer`}>
          Previous
        </div>
        <div className={`${Classes.border}  mb-6 p-3 w-full cursor-pointer`}>
          Request
        </div>
      </div>

     
    </>
  );
}

export default AppoinmentHeader;
