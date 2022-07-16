import React from "react";
import Image from "next/image";
import calendar from '/public/Assets/icon/calendar.svg'
import clock from '/public/Assets/icon/clock.svg'
import DateInput from "@components/global/DateInput";
import TimeInput from "@components/global/TimeInput";

function OnlineTime() {
  const  [startDate, setStartDate] = React.useState(new Date());
  const  [startTime, setStartTime] = React.useState(new Date());
  return (
    <div className="container md:max-w-screen-lg w-full mx-auto relative ">
      <div className=" md:h-[600px] h-auto">
  
        <div className=" min-h-screen md:mt-7 pb-5">
          <div className="bg-white px-4  md:rounded-2xl relative z-10 routine-table-body-section ">
            <div className="flex md:ml-5 flex-col">
              <p className="text-[22px] mb-3 flex flex-col">Date</p>
              <div className="flex justify-between flex-wrap ">
              <DateInput selected={startDate}  onChange={(date)=>{setStartDate(date)}}/>
                <div className="flex flex-col md:-mt-12 flex-wrap">
                  <p className="text-[22px] mb-3 ">Set Time</p>
                  <div className="flex flex-row md:space-x-3 space-x-3 pr-5">
                  <TimeInput  selected={startTime}  onChange={(date)=>{setStartTime(date)}}/>
                    <span className=" flex items-center">to</span>
                    <TimeInput  selected={startTime}  onChange={(date)=>{setStartTime(date)}}/>
                  </div>
                </div>
              </div>

              <div className="flex ml-0 flex-col w-[97%] mx-auto mt-5">
                <p className="text-[18px] mb-3">Description</p>
                <textarea
                  name=""
                  id=""
                  className=" h-[200px] border bg-[#ffffff] border-solid border-[#bcbcbc] rounded-lg pl-8 pt-8 "
                  placeholder="type here"
                ></textarea>
              </div>
              <div className="flex justify-start items-center mt-5">
                <button className="btn btn-primary md:w-44 text-white cursor-pointer outline-none rounded-lg mr-5    border-none text-[12px] md:text-[15px] font-normal capitalize">
                  Send Request
                </button>
                <button className="btn btn-primary bg-white text-[#DA1E37] outline-none rounded-lg mr-5  text-[15px]  font-normal border hover:text-white  md:w-44 capitalize">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineTime;
