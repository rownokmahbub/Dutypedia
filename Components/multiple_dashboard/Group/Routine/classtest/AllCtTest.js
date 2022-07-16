
import Image from "next/image";
import Accordion from "@components/global/Accordion";
const AllCtTest = () => {
  return (
    <div className="container  max-w-screen-xl h-auto mx-auto relative rounded-lg bg-white mt-5 py-5">
    {/* mobile Design is here */}
    <div className="overflow-x-auto w-full  mt-8 block md:hidden">
    <div className="flex gap-7">
      <button className="btn flex-1 btn-block bg-white font-normal capitalize hover:bg-primary-400 border-primary hover:text-white text-primary md:w-[138px] h-14 text-sm ">
        All Test
        </button>
        <button className="btn flex-1 btn-block btn-primary font-normal capitalize md:w-[138px] h-14 text-sm">
        Upcoming Test
        </button>
       
      </div>
      <div className="flex gap-7 mt-5">
      <button className="btn flex-1 btn-block bg-white font-normal capitalize hover:bg-primary-400 border-primary hover:text-white text-primary md:w-[138px] h-14 text-sm">
        Completed Test
          
        </button>
      <button className="btn flex-1 btn-block bg-white font-normal capitalize hover:bg-primary-400 border-primary hover:text-white text-primary md:w-[138px] h-14 text-sm">
       Create Test
          
        </button>
      
      </div>
          <div className="flex justify-end mt-4 mb-4 gap-3">
          <Image
                        src="/Assets/icon/edit-new.svg"
                        className="cursor-pointer"
                        width={30}
                        height={25}
                        alt="calender"
                      />
                         <Image
                        src="/Assets/icon/delete.svg"
                        className="cursor-pointer"
                        width={30}
                        height={25}
                        alt="calender"
                      />
          </div>
          <div className="items-center mt-4 rounded-lg">
            <Accordion noBorder title="SL NO 1" textSize="text-sm" color="bg-primary text-white">
              <div className="py-4">
              <Accordion title="1st student">
        <p>Time</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-clock.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>11:00 Am to 11:45 Am</span>
                      </div>
    
                      <p>Date</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-calender.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>Saturday, 12th 2021</span>
                      </div>
                      <p className="py-3 text-lg">Subject Name</p>
                      <p>Sadhin Bangladehser Ovvudai Etihash..</p>
    
                      <p className="py-3 text-lg">Teacher Name</p>
                      <p>MD Abu Hasan </p>
    
            </Accordion>
              </div>
              <div className="py-1">
              <Accordion title="1st student">
        <p>Time</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-clock.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>11:00 Am to 11:45 Am</span>
                      </div>
    
                      <p>Date</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-calender.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>Saturday, 12th 2021</span>
                      </div>
                      <p className="py-3 text-lg">Subject Name</p>
                      <p>Sadhin Bangladehser Ovvudai Etihash..</p>
    
                      <p className="py-3 text-lg">Teacher Name</p>
                      <p>MD Abu Hasan </p>
    
            </Accordion>
              </div>
              <div className="py-4">
              <Accordion title="1st student">
        <p>Time</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-clock.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>11:00 Am to 11:45 Am</span>
                      </div>
    
                      <p>Date</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-calender.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>Saturday, 12th 2021</span>
                      </div>
                      <p className="py-3 text-lg">Subject Name</p>
                      <p>Sadhin Bangladehser Ovvudai Etihash..</p>
    
                      <p className="py-3 text-lg">Teacher Name</p>
                      <p>MD Abu Hasan </p>
    
            </Accordion>
              </div>
        
            </Accordion>
          
          </div>
    
    
          <div className="flex justify-end mt-4 mb-4 gap-3">
          <Image
                        src="/Assets/icon/edit-new.svg"
                        className="cursor-pointer"
                        width={30}
                        height={25}
                        alt="calender"
                      />
                         <Image
                        src="/Assets/icon/delete.svg"
                        className="cursor-pointer"
                        width={30}
                        height={25}
                        alt="calender"
                      />
          </div>
          <div className="items-center mt-4 rounded-lg">
            <Accordion noBorder title={ 
          <> <span>SL NO 02</span> <span>This test is completed</span></>
        } textSize="text-sm" color="bg-primary text-white">
              <div className="py-4">
              <Accordion title="1st student">
        <p>Time</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-clock.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>11:00 Am to 11:45 Am</span>
                      </div>
    
                      <p>Date</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-calender.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>Saturday, 12th 2021</span>
                      </div>
                      <p className="py-3 text-lg">Subject Name</p>
                      <p>Sadhin Bangladehser Ovvudai Etihash..</p>
    
                      <p className="py-3 text-lg">Teacher Name</p>
                      <p>MD Abu Hasan </p>
    
            </Accordion>
              </div>
              <div className="py-1">
              <Accordion title="1st student">
        <p>Time</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-clock.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>11:00 Am to 11:45 Am</span>
                      </div>
    
                      <p>Date</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-calender.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>Saturday, 12th 2021</span>
                      </div>
                      <p className="py-3 text-lg">Subject Name</p>
                      <p>Sadhin Bangladehser Ovvudai Etihash..</p>
    
                      <p className="py-3 text-lg">Teacher Name</p>
                      <p>MD Abu Hasan </p>
    
            </Accordion>
              </div>
              <div className="py-4">
              <Accordion title="1st student">
        <p>Time</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-clock.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>11:00 Am to 11:45 Am</span>
                      </div>
    
                      <p>Date</p>
        <div className="flex items-center py-3">  <Image
                        src="/Assets/icon/color-calender.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <span>Saturday, 12th 2021</span>
                      </div>
                      <p className="py-3 text-lg">Subject Name</p>
                      <p>Sadhin Bangladehser Ovvudai Etihash..</p>
    
                      <p className="py-3 text-lg">Teacher Name</p>
                      <p>MD Abu Hasan </p>
    
            </Accordion>
              </div>
        
            </Accordion>
          
          </div>
    
      </div>
    
    {/* desktop design is here */}
    
        <div className="overflow-x-auto w-full  mt-8 hidden md:block">
          <p className="font-medium text-3xl mt-4">Class 10 Test</p>
          <div className="flex gap-10 mt-6">
          <button className="btn btn-primary font-normal capitalize xl:w-[278px] h-16 text-xl">
            All Test
            </button>
            <button className="btn bg-white font-normal capitalize hover:bg-primary-400 border-primary hover:text-white text-primary xl:w-[278px] h-16 text-xl">
           Upcoming Test
              
            </button>
          
            <button className="btn bg-white font-normal capitalize hover:bg-primary-400 border-primary hover:text-white text-primary xl:w-[278px] h-16 text-xl">
              Completed Test
            </button>
            <button className="btn bg-white font-normal capitalize hover:bg-primary-400 border-primary hover:text-white text-primary xl:w-[278px] h-16 text-xl">
              Create New Test
            </button>
          </div>
          <div className="flex justify-end mt-4 mb-4 gap-3">
          <Image
                        src="/Assets/icon/edit-new.svg"
                        className="cursor-pointer"
                        width={30}
                        height={25}
                        alt="calender"
                      />
                         <Image
                        src="/Assets/icon/delete.svg"
                        className="cursor-pointer"
                        width={30}
                        height={25}
                        alt="calender"
                      />
          </div>
      
    
    
          <div className="rounded-t-xl overflow-x-auto">
          <table className="w-full whitespace-nowrap rounded-t-lg bg-white divide-y divide-gray-300 h-[450px] border">
            <thead className="bg-primary sticky rounded-t-lg overflow-hidden">
              <tr className="text-white text-left border rounded-t-lg">
                <th className="font-normal text-xl  text-center px-6 py-4 ">
                  Select
                </th>
                <th className="font-normal text-xl  text-center px-6 py-4">
                  1st Test
                </th>
                <th className="font-normal text-xl text-center  px-6 py-4">
                  2nd Test
                </th>
                <th className="font-normal text-xl text-center  px-6 py-4">
                  3rd Test
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
         
             
    
              <tr className="divide-x">
                <td className="px-6 py-4 relative">
                <p className="flex items-center text-2xl text-[#666666]">Date</p>
                </td>
                <td className="px-6 py-4 relative">
                  <div className="flex justify-center items-center gap-2">
                  <Image
                        src="/Assets/icon/color-calender.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <p className="flex items-center text-xl text-[#666666]">Saturday, 12th 2021</p>
                  </div>
                </td>
                <td className="px-6 py-4 relative">
                <div className="flex justify-center items-center gap-2">
                  <Image
                        src="/Assets/icon/color-calender.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <p className="flex items-center text-xl text-[#666666]">Saturday, 12th 2021</p>
                  </div>
                </td>
                <td className="px-6 py-4 relative">
                <div className="flex justify-center items-center gap-2">
                  <Image
                        src="/Assets/icon/color-calender.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <p className="flex items-center text-xl text-[#666666]">Saturday, 12th 2021</p>
                  </div>
                </td>
              </tr>
              <tr className="divide-x">
                <td className="px-6 py-4 relative">
                <p className="flex items-center text-2xl text-[#666666]">Date</p>
                </td>
                <td className="px-6 py-4 relative text-center">
                <div className="flex justify-center items-center gap-2">
                  <Image
                        src="/Assets/icon/color-clock.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <p className="flex items-center text-xl text-[#666666]">11:00 Am to 11:45 Am</p>
                  </div>
                </td>
                <td className="px-6 py-4 relative text-center">
                <div className="flex justify-center items-center gap-2">
                  <Image
                        src="/Assets/icon/color-clock.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <p className="flex items-center text-xl text-[#666666]">11:00 Am to 11:45 Am</p>
                  </div>
                </td>
                <td className="px-6 py-4 relative">
                <div className="flex justify-center items-center gap-2">
                  <Image
                        src="/Assets/icon/color-clock.svg"
                        className=""
                        width={30}
                        height={25}
                        alt="calender"
                      />
                      <p className="flex items-center text-xl text-[#666666]">11:00 Am to 11:45 Am</p>
                  </div>
                </td>
              </tr>
    
              <tr className="divide-x">
                <td className="px-6 py-4 relative">
                <p className="flex items-center text-2xl text-[#666666]">Date</p>
                </td>
                <td className="px-6 py-4 relative">
                <p className="flex items-center justify-center text-xl text-[#666666]">Bangla</p>
                </td>
                <td className="px-6 py-4 relative"> <p className="flex items-center justify-center text-xl text-[#666666]">Bang iuhfgrhfr hrihu rgr riug ru rg la</p></td>
                <td className="px-6 py-4 relative"> <p className="flex items-center justify-center text-xl text-[#666666]">Bangla</p></td>
              </tr>
    
              <tr className="divide-x">
                <td className="px-6 py-4 relative">
                <p className="flex items-center text-2xl text-[#666666]">Date</p>
                </td>
                <td className="px-6 py-4 relative">
                <p className="flex items-center justify-center text-xl text-[#666666]">Bangla</p>
                </td>
                <td className="px-6 py-4 relative"> <p className="flex items-center justify-center text-xl text-[#666666]">Bangla</p></td>
                <td className="px-6 py-4 relative"> <p className="flex items-center justify-center text-xl text-[#666666]">Bangla</p></td>
              </tr>
    
        
            </tbody>
          </table>
          <p className="text-center py-4 bg-primary text-white rounded-b-lg">This Test is completed</p>
          </div>
      
        </div>
      </div>
  );
};

export default AllCtTest;
