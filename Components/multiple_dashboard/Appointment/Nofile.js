import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from "next/image";
import AppoinmentHeader from "./AppoinmentHeader";
import nodata from '/public/Assets/icon/nodata.svg'

import CreateAppoinment from './CreateAppoinment';
function Nofile() {

  return (
    <div className="px-5 md:max-w-[1920px] w-full mx-auto relative pt-6 pb-36">
      <div className="mt-1 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white  py-5">
       
       <AppoinmentHeader></AppoinmentHeader>
        <div className=" mt-12 w-[96%] mx-auto">
          <div className="flex flex-col items-center justify-center rounded-[20px] shadow-4xl md:shadow-3xl bg-white  h-[300px]">
          
            <Image src={nodata} width={48} height={48} alt='fdefd'/>
           
            <h3 className=" capitalize text-[#707070] font-normal py-4">
            There Are No Appointment On This Date
            </h3>
            <div className="absolute md:right-16 right-6 mt-56 pb-4">
              <CreateAppoinment/>
          
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nofile;
