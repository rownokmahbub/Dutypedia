import Image from "next/image";
import React from "react";
import search from "/public/Assets/icon/search.svg";
import redplus from "/public/Assets/icon/red-plus.svg";
import DateInput from '@components/global/DateInput'
import { Input } from "@components/global/Input";
const Noticeedit = ({goNext}) => {
  const  [startDate, setStartDate] = React.useState(new Date());
  return (
    <div className="container max-w-screen-xl mx-auto relative">
      <div className="relative  mt-[156px] w-full h-auto rounded-2xl shadow-4xl md:shadow-3xl mb-10 mx-auto bg-white px-6 py-6">
  {/* mobile version  */}
  <div className="xl:hidden block">
      <div className="flex justify-between">
    <div className="flex justify-start flex-col mb-5">
          <p className="items-center text-md mb-1">Search By Date</p>
          <div className="w-40 relative">
                <input
                  className="border border-primary focus:outline-primary rounded-md px-2 py-1.5"
                  type="date"
                  name="startDate"
                />
                <span className="bg-primary text-white absolute right-0 top-0 h-[40px] w-10 flex justify-center items-center text-xl rounded-r-md pointer-events-none">
                  <img className=" scale-90" src="/Assets/icon/calendar.svg" />
                </span>
              </div>
        </div>
        <div className="flex items-center cursor-pointer">
          <p className="items-center -mr-2">Add New</p>
          <div className="flex justify-center items-center w-14 h-14 ">
            <Image
              src={redplus}
              className=""
              width={30}
              height={30}
              alt="calender"
            />
          </div>
        </div>
    </div>
    <div className="relative text-gray-600 md:w-96 w-full mb-4">
          <input
            className=" h-10 px-5 pl-4 w-full mx-auto rounded-lg text-sm focus:outline-none  outline-none border-2 border-solid border-[#ECECEC] bg-white"
            type="search"
            name="search"
            placeholder="Search title or id/record No"
          />
          <div className="absolute right-2 top-3 cursor-pointer">
            <Image src={search} width={18} height={18} alt="search" />
          </div>
        </div>
      </div>
   

      <div className="xl:grid grid-cols-3 items-center space-x-3 px-10 py-10 hidden">
        <div className="flex items-center">
          <p className="items-center mr-3">Search By Date</p>
          <div className="w-40 relative">
                <input
                  className="border border-primary focus:outline-primary rounded-md px-2 py-1.5"
                  type="date"
                  name="startDate"
                />
                <span className="bg-primary text-white absolute right-0 top-0 h-[40px] w-10 flex justify-center items-center text-xl rounded-r-md pointer-events-none">
                  <img className=" scale-90" src="/Assets/icon/calendar.svg" />
                </span>
              </div>
        </div>

        <div className="relative text-gray-600 md:w-96 w-full">
          <input
            className=" h-10 px-5 pl-4 w-full mx-auto rounded-lg text-sm focus:outline-none  outline-none border-2 border-solid border-[#ECECEC] bg-white"
            type="search"
            name="search"
            placeholder="Search title or id/record No"
          />
          <div className="absolute right-2 top-3 cursor-pointer">
            <Image src={search} width={18} height={18} alt="search" />
          </div>
        </div>
        <div className="flex items-center justify-end cursor-pointer">
          <p className="items-center -mr-2">Add New</p>
          <div className="flex justify-center items-center w-14 h-14 ">
            <Image
              src={redplus}
              className=""
              width={30}
              height={30}
              alt="calender"
            />
          </div>
        </div>
      </div>
      <div className="h-auto relative">
      <div className="flex capitalize justify-between text-center px-10 bg-primary py-3 text-white md:rounded-lg rounded-t-lg sticky top-0 ">
        <p className="flex-1 text-left"> Date</p>
        <p className="flex-1">Id/Recoard </p>
        <p className="flex-1">notice</p>
        <p className="flex-1"></p>
      </div>
      <div className="flex divide-x-2 text-center capitalize justify-between px-10 bg-white shadow-3xl mt-4 py-3 rounded-lg ">
        <p className="flex-1 text-left -ml-11 md:ml-0 px-2"> 12/10/2022</p>
        <p className="flex-1 line-clamp-1 md:line-clamp-none px-2">12335465777 4545</p>
        <p className="flex-1 line-clamp-1 md:line-clamp-none px-2">Admission Notice 2021-2022</p>
        <div className="flex flex-1 justify-end items-center -mr-9 px-2"><button onClick={goNext} className="bg-primary px-2 md:px-3 text-white rounded-md py-1 text-sm mr-1">
          view
          </button>
         </div>
      </div>
      <div className="flex divide-x-2 text-center capitalize justify-between px-10 bg-white shadow-3xl mt-4 py-3 rounded-lg ">
        <p className="flex-1 text-left -ml-11 md:ml-0 px-2"> 12/10/2022</p>
        <p className="flex-1 line-clamp-1 md:line-clamp-none px-2">12335465777 4545</p>
        <p className="flex-1 line-clamp-1 md:line-clamp-none px-2">Admission Notice 2021-2022</p>
        <div className="flex flex-1 justify-end items-center -mr-9 px-2"><button className="bg-primary px-2 md:px-3 text-white rounded-md py-1 text-sm mr-1">
          view
          </button>
        </div>
      </div>
      </div>
     
      </div>
    
    </div>
  );
};

export default Noticeedit;
