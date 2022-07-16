import React from "react";
import Image from "next/image";
import { CheckBox } from "Utilities/Utilites";
import {AiOutlinePlusCircle} from 'react-icons/ai'
const Selectclasstest = () => {
  return (
    <div className="container  max-w-screen-2xl h-auto mx-auto relative rounded-lg">
      <div className="overflow-x-auto w-full border rounded-lg mt-8 hidden xl:block">
        <table className="w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead className="bg-primary">
            <tr className="text-white text-left border">
              <th className="font-semibold text-xl  text-center px-6 py-4 ">
                Select
              </th>
              <th className="font-semibold text-xl  text-center px-6 py-4">
                1st Test
              </th>
              <th className="font-semibold text-xl text-center  px-6 py-4">
                2nd Test
              </th>
              <th className="font-semibold text-xl text-center  px-6 py-4">
                3rd Test
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="divide-x">
              <td className="px-6 py-4 relative">
                <CheckBox value={true} title='Date'></CheckBox>
              </td>
              <td className="px-6 py-4 relative">
                <div className="flex justify-center">
                  <input
                    className=" flex rounded-l-lg h-12 w-[200px] pl-3 justify-center items-center border-2 border-[#DA1E37]"
                    placeholder="15th Aug. 2021"
                  />
                  <div className="flex justify-center items-center w-10 h-12 bg-[#DA1E37]  rounded-r-lg p-1">
                    <Image
                      src="/Assets/icon/calendar.svg"
                      className="bg-[#DA1E37] "
                      width={30}
                      height={18}
                      alt="calender"
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 relative">
                <div className="flex justify-center">
                  <input
                    className=" flex rounded-l-lg h-12 w-[200px] pl-3 justify-center items-center border-2 border-[#DA1E37]"
                    placeholder="15th Aug. 2021"
                  />
                  <div className="flex justify-center items-center w-10 h-12 bg-[#DA1E37]  rounded-r-lg p-1">
                    <Image
                      src="/Assets/icon/calendar.svg"
                      className="bg-[#DA1E37] "
                      width={30}
                      height={18}
                      alt="calender"
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 relative">
                <div className="flex justify-center">
                  <input
                    className=" flex rounded-l-lg h-12 w-[200px] pl-3 justify-center items-center border-2 border-[#DA1E37]"
                    placeholder="15th Aug. 2021"
                  />
                  <div className="flex justify-center items-center w-10 h-12 bg-[#DA1E37]  rounded-r-lg p-1">
                    <Image
                      src="/Assets/icon/calendar.svg"
                      className="bg-[#DA1E37] "
                      width={30}
                      height={18}
                      alt="calender"
                    />
                  </div>
                </div>
              </td>
            </tr>

            <tr className="divide-x">
              <td className="px-6 py-4 relative">
              <CheckBox value={true} title='Time'></CheckBox>
              </td>
              <td className="px-6 py-4 flex justify-center">
              <div className="flex flex-row md:space-x-6 space-x-3 justify-center">
                    <div className="flex flex-row ">
                      <input
                        className=" flex  rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[100px] w-[50px]"
                        placeholder="5:00 AM"
                      />
                      <div className="flex justify-center w-10 md:h-[38px] rounded-r-lg cursor-pointer bg-[#DA1E37]  md:p-1">
                        <Image
                          src="/Assets/icon/clock.svg"
                          className="bg-[#DA1E37] "
                          width={20}
                          height={18}
                          alt="calender"
                        />
                      </div>
                    </div>
                    <span className=" flex items-center">to</span>
                    <div className="flex flex-row ">
                      <input
                        className=" flex  rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[100px] w-[50px]"
                        placeholder="5:00 PM"
                      />
                      <div className="flex justify-center w-10 h-[38px] rounded-r-lg cursor-pointer bg-[#DA1E37]  p-1">
                        <Image
                          src="/Assets/icon/clock.svg"
                          className="bg-[#DA1E37] "
                          width={20}
                          height={18}
                          alt="calender"
                        />
                      </div>
                    </div>
                  </div>
              </td>
              <td className="px-6 py-4 relative text-center">
              <div className="flex flex-row md:space-x-6 space-x-3 justify-center">
                    <div className="flex flex-row ">
                      <input
                        className=" flex  rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[100px] w-[50px]"
                        placeholder="5:00 AM"
                      />
                      <div className="flex justify-center w-10 md:h-[38px] rounded-r-lg cursor-pointer bg-[#DA1E37]  md:p-1">
                        <Image
                          src="/Assets/icon/clock.svg"
                          className="bg-[#DA1E37] "
                          width={20}
                          height={18}
                          alt="calender"
                        />
                      </div>
                    </div>
                    <span className=" flex items-center">to</span>
                    <div className="flex flex-row ">
                      <input
                        className=" flex  rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[100px] w-[50px]"
                        placeholder="5:00 PM"
                      />
                      <div className="flex justify-center w-10 h-[38px] rounded-r-lg cursor-pointer bg-[#DA1E37]  p-1">
                        <Image
                          src="/Assets/icon/clock.svg"
                          className="bg-[#DA1E37] "
                          width={20}
                          height={18}
                          alt="calender"
                        />
                      </div>
                    </div>
                  </div>
              </td>
              <td className="px-6 py-4 relative">
              <div className="flex flex-row md:space-x-6 space-x-3 justify-center">
                    <div className="flex flex-row ">
                      <input
                        className=" flex  rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[100px] w-[50px]"
                        placeholder="5:00 AM"
                      />
                      <div className="flex justify-center w-10 md:h-[38px] rounded-r-lg cursor-pointer bg-[#DA1E37]  md:p-1">
                        <Image
                          src="/Assets/icon/clock.svg"
                          className="bg-[#DA1E37] "
                          width={20}
                          height={18}
                          alt="calender"
                        />
                      </div>
                    </div>
                    <span className=" flex items-center">to</span>
                    <div className="flex flex-row ">
                      <input
                        className=" flex  rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[100px] w-[50px]"
                        placeholder="5:00 PM"
                      />
                      <div className="flex justify-center w-10 h-[38px] rounded-r-lg cursor-pointer bg-[#DA1E37]  p-1">
                        <Image
                          src="/Assets/icon/clock.svg"
                          className="bg-[#DA1E37] "
                          width={20}
                          height={18}
                          alt="calender"
                        />
                      </div>
                    </div>
                  </div>
              </td>
            </tr>

            <tr className="divide-x">
              <td className="px-6 py-4 relative">
                <CheckBox value={true} title='Subject Title'></CheckBox>
              </td>
              <td className="px-6 py-4 relative">
               <input type="text" className="border-none w-full h-full focus:border-none outline-none text-xl text-center" placeholder="Bangla...|"/>
              </td>
              <td className="px-6 py-4 relative">
               
              </td>
              <td className="px-6 py-4 relative">
             
              </td>
            </tr>

            <tr className="divide-x">
              <td className="px-6 py-4 relative">
                <CheckBox value={true} title='Teacher Name'></CheckBox>
              </td>
              <td className="px-6 py-4 relative">
               <input type="text" className="border-none w-full h-full focus:border-none outline-none text-xl text-center" placeholder="Bangla...|"/>
              </td>
              <td className="px-6 py-4 relative">
               
              </td>
              <td className="px-6 py-4 relative">
             
              </td>
            </tr>


            <tr className="divide-x">
              <td className="px-6 py-4 ">
                <div className="w-full">
                <button className="flex items-center gap-2 btn btn-link text-black font-normal capitalize">
         <AiOutlinePlusCircle className="text-3xl"></AiOutlinePlusCircle>
         <span className="text-xl">Add More</span>
            </button>
                </div>
            
              </td>
              <td className="px-6 py-4 relative">
            
              </td>
              <td className="px-6 py-4 relative">
               
              </td>
              <td className="px-6 py-4 relative">
             
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Selectclasstest;
