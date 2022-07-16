import React from "react";
import Classes from "../../../styles/Header.module.css";

const RequestHeader = () => {
    return (
        <div className="grid justify-center">
     <div className="flex pt-4">
          <p className="pr-5 text-[#DA1E37] w-[100px] text-center cursor-pointer">Sent</p>
          <div className="-ml-[20px] bg-slate-300 w-[1px] h-[22px] mr-2">
        </div>
          <p className="w-[100px] text-center pr-10 cursor-pointer">received</p>
        </div>

        <div className="ml-[5px] mt-1 bg-[#DA1E37]  w-[80px] h-[1px]">
        </div>
        <div className="ml-[85px] -mt-[1px] bg-slate-300  w-[90px] h-[1px]">
        </div>
     </div>
    );
};

export default RequestHeader;
