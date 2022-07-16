import React from "react";
import Image from "next/image";
import { CheckBox } from "Utilities/Utilites";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Accordion from "@components/global/Accordion";
const Selectclasstest = () => {
  return (
    <div className="container  max-w-screen-xl h-auto mx-auto relative bg-[#fdeff0]  p-4 rounded-lg">
      <div className="bg-white">
  {/* mobile Design is here */}
  <div className="overflow-x-auto w-full  block xl:hidden">
        <div className="items-center rounded-lg">
          <Accordion noBorder title="SL NO 1" textSize="text-sm" color="bg-primary text-white">
            <div className="py-4">
              <Accordion title="1st student">
                <p>Time</p>
                <div className="flex items-center py-3">
                  <div className="flex flex-row md:space-x-6 space-x-3 justify-center">
                    <div className="flex flex-row ">
                      <input
                        className=" flex text-sm pl-1 rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[100px] w-[70px]"
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
                        className=" flex text-sm pl-1 rounded-l-lg justify-center md:pl-3 items-center border-2 border-[#DA1E37] md:w-[100px] w-[70px]"
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
                </div>

                <p>Date</p>
                <div className="flex items-center py-3">
                  <div className="flex justify-center">
                    <input
                      className=" flex rounded-l-lg h-10 w-[200px] pl-3 justify-center items-center border-2 border-[#DA1E37]"
                      placeholder="15th Aug. 2021"
                    />
                    <div className="flex justify-center items-center w-10 h-10 bg-[#DA1E37]  rounded-r-lg p-1">
                      <Image
                        src="/Assets/icon/calendar.svg"
                        className="bg-[#DA1E37] "
                        width={30}
                        height={18}
                        alt="calender"
                      />
                    </div>
                  </div>
                </div>

               <div className="shadow-3xl px-3 py-2 rounded-md space-y-2">
               <input
                  className="bg-gray-100 py-2 px-2 w-full rounded-lg text-[14px]"
                  value="Subject"
                  type="text"
                />
                <input
                  className="bg-gray-100 py-2 px-2 w-full rounded-lg text-[14px]"
                  placeholder="Enter Subject Name"
                  type="text"
                />
                <div className="flex text-sm justify-end mr-2">
                <Image
                        src="/Assets/icon/cross.svg"
                        className=""
                        width={30}
                        height={18}
                        alt="calender"
                      />
                      <p className="text-[#666666] ">Remove</p>
                </div>
               </div>
               <div className="shadow-3xl px-3 py-2 rounded-md space-y-2 mt-5">
               <input
                  className="bg-gray-100 py-2 px-2 w-full rounded-lg text-[14px]"
                  value="Mentor Name"
                  type="text"
                />
                <input
                  className="bg-gray-100 py-2 px-2 w-full rounded-lg text-[14px]"
                  placeholder="Enter Mentor Name"
                  type="text"
                />
                <div className="flex text-sm justify-end mr-2">
                <Image
                        src="/Assets/icon/cross.svg"
                        className=""
                        width={30}
                        height={18}
                        alt="calender"
                      />
                      <p className="text-[#666666] ">Remove</p>
                </div>
               </div>

               <div className="shadow-3xl px-3 py-2 rounded-md space-y-2 mt-5">
               <input
                  className="bg-gray-100 py-2 px-2 w-full rounded-lg text-[14px]"
                  placeholder="Enter title (ex : hall,building,seat no)"
                  type="text"
                />
                <input
                  className="bg-gray-100 py-2 px-2 w-full rounded-lg text-[14px]"
                  placeholder=""
                  type="text"
                />
                <div className="flex text-sm justify-end mr-2">
                <Image
                        src="/Assets/icon/cross.svg"
                        className=""
                        width={30}
                        height={18}
                        alt="calender"
                      />
                      <p className="text-[#666666] ">Remove</p>
                </div>
               </div>

               <div className="space-y-3 max-w-sm">
    <p className='font-normal text-xl md:text-3xl mt-4'> Instruction:</p>
    <Accordion title='Time ?'>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptate?  </p>
    </Accordion>
    <Accordion title='Date?'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, necessitatibus!</p>
    </Accordion>
    </div>
                <div className="w-full -ml-4 mt-4">
                    <button className="flex items-center gap-2 btn btn-link text-black font-normal capitalize">
                      <AiOutlinePlusCircle className="text-2xl text-[#666666]"></AiOutlinePlusCircle>
                      <span className="text-md text-[#666666]">Add More</span>
                    </button>
                  </div>
              </Accordion>
              <div className="w-full ">
                    <button className="flex items-center gap-2 btn btn-link text-black font-normal capitalize">
                      <AiOutlinePlusCircle className="text-2xl text-[#666666]"></AiOutlinePlusCircle>
                      <span className="text-lg text-[#666666]">Add New Test</span>
                    </button>
                  </div>
            </div>
          </Accordion>
        </div>
      </div>

      {/* desktop design is here */}
      <div className="overflow-auto h-[550px]">
        <div className=" w-full rounded-lg hidden md:block  pr-5 routine-table-body-section border">
          <table className="w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 ">
            <thead className="bg-primary sticky top-0 z-50">
              <tr className="text-white text-left border">
                <th className="font-semibold text-xl  text-center px-6 py-4 sticky left-0 bg-primary border-r">
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
                <th className="font-semibold text-xl text-center  px-6 py-4">
                  3rd Test
                </th>
                <th className="font-semibold text-xl text-center  px-6 py-4">
                  3rd Test
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="divide-x relative">
                <td className="px-6 py-4  sticky left-0 bg-white z-10 border-r">
                <span className=" absolute h-full w-[1px] z-30 bg-gray-200 right-0 top-0" />
                  <CheckBox value={true} title="Date"></CheckBox>
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
              <tr className="divide-x relative">
                <td className="px-6 py-4  sticky left-0 bg-white z-10">
                <span className=" absolute h-full w-[1px] z-30 bg-gray-200 right-0 top-0" />
                  <CheckBox value={true} title="Date"></CheckBox>
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

              <tr className="divide-x relative">
                <td className="px-6 py-4 sticky left-0 bg-white z-10">
                <span className=" absolute h-full w-[1px] z-30 bg-gray-200 right-0 top-0" />
                  <CheckBox value={true} title="Date"></CheckBox>
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
              <tr className="divide-x relative">
                <td className="px-6 py-4 sticky left-0 bg-white z-10">
                <span className=" absolute h-full w-[1px] z-30 bg-gray-200 right-0 top-0" />
                  <CheckBox value={true} title="Time"></CheckBox>
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

              <tr className="divide-x relative">
                <td className="px-6 py-4 sticky left-0 bg-white z-10">
                <span className=" absolute h-full w-[1px] z-30 bg-gray-200 right-0 top-0" />
                  <CheckBox value={true} title="Subject Title"></CheckBox>
                </td>
                <td className="px-6 py-4 relative">
                  <input
                    type="text"
                    className="border-none w-full h-full focus:border-none outline-none text-xl text-center"
                    placeholder="Bangla...|"
                  />
                </td>
                <td className="px-6 py-4 relative"></td>
                <td className="px-6 py-4 relative"></td>
              </tr>

              <tr className="divide-x relative">
                <td className="px-6 py-4 sticky left-0 bg-white z-10">
                <span className=" absolute h-full w-[1px] z-30 bg-gray-200 right-0 top-0" />
                  <CheckBox value={true} title="Teacher Name"></CheckBox>
                </td>
                <td className="px-6 py-4 ">
              
                  <input
                    type="text"
                    className="border-none w-full h-full focus:border-none outline-none text-xl text-center"
                    placeholder="Bangla...|"
                  />
                </td>
                <td className="px-6 py-4 relative"></td>
                <td className="px-6 py-4 relative"></td>
              </tr>

              <tr className="divide-x relative">
                <td className="px-6 py-4 sticky left-0 bg-white">
                  <div className="w-full -ml-4">
                  <span className=" absolute h-full w-[1px] z-30 bg-gray-200 right-0 top-0" />
                    <button className="flex items-center gap-2 btn btn-link text-black font-normal capitalize">
                      <AiOutlinePlusCircle className="text-3xl"></AiOutlinePlusCircle>
                      <span className="text-xl">Add More</span>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 relative"></td>
                <td className="px-6 py-4 relative"></td>
                <td className="px-6 py-4 relative"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Selectclasstest;
