import React from "react";
import Image from "next/image";

function Report() {
  return (
    <div className="container md:w-[50%] h-auto mx-auto relative ">
      <div>
        <div className=" flex mt-20  h-auto py-4 rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
          <div className=" w-[80%] mx-auto">
         <h4 className="text-[#DA1E37] font-medium text-2xl">Report User</h4>
         <div className="flex mt-4">
         <input type="radio" className="rounded-full h-4 w-4 border border-gray-300 checked:bg-[#DA1E37] checked:border-red-600 focus:outline-none transition duration-200 mt-1  mr-2 cursor-pointer"/>
         <label className="text-gray-800" >
         Sexual Comment
      </label>
         </div>
         <div className="flex mt-4">
         <input type="radio" className="rounded-full h-4 w-4 border border-gray-300 checked:bg-[#DA1E37] checked:border-red-600 focus:outline-none transition duration-200 mt-1  mr-2 cursor-pointer"/>
         <label className="text-gray-800" >
         Violent Or Abusive Content
      </label>
         </div>

         <div className="flex mt-4">
         <input type="radio" className="rounded-full h-4 w-4 border border-gray-300 checked:bg-[#DA1E37] checked:border-red-600 focus:outline-none transition duration-200 mt-1  mr-2 cursor-pointer"/>
         <label className="text-gray-800" >
         Hateful Or Abusive Content
      </label>
         </div>
         <div className="flex mt-4">
         <input type="radio" className="rounded-full h-4 w-4 border border-gray-300 checked:bg-[#DA1E37] checked:border-red-600 focus:outline-none transition duration-200 mt-1  mr-2 cursor-pointer"/>
         <label className="text-gray-800" >
         Harassment Or Bullying
      </label>
         </div>
         <div className="flex mt-4">
         <input type="radio" className="rounded-full h-4 w-4 border border-gray-300 checked:bg-[#DA1E37] checked:border-red-600 focus:outline-none transition duration-200 mt-1  mr-2 cursor-pointer"/>
         <label className="text-gray-800" >
         Harmful Or Dangerous Acts
      </label>
         </div>
         <div className="flex mt-4">
         <input type="radio" className="rounded-full h-4 w-4 border border-gray-300 checked:bg-[#DA1E37] checked:border-red-600 focus:outline-none transition duration-200 mt-1  mr-2 cursor-pointer"/>
         <label className="text-gray-800" >
         Child Abuse
      </label>
         </div>

         <div className="flex mt-4">
         <input type="radio" className="rounded-full h-4 w-4 border border-gray-300 checked:bg-[#DA1E37] checked:border-red-600 focus:outline-none transition duration-200 mt-1  mr-2 cursor-pointer"/>
         <label className="text-gray-800" >
         Spam Or Misleading
      </label>
         </div>

         <div className="flex mt-4">
         <input type="radio" className="rounded-full h-4 w-4 border border-gray-300 checked:bg-[#DA1E37] checked:border-red-600 focus:outline-none transition duration-200 mt-1  mr-2 cursor-pointer"/>
         <label className="text-gray-800" >
         Infringes My Rights
      </label>
         </div>

         <div className="flex mt-4">
         <input type="radio" className="rounded-full h-4 w-4 border border-gray-300 checked:bg-[#DA1E37] checked:border-red-600 focus:outline-none transition duration-200 mt-1  mr-2 cursor-pointer"/>
         <label className="text-gray-800" >
         Caption Issue
      </label>
         </div>

         <div className="flex mt-4">
         <input type="radio" className="rounded-full h-4 w-4 border border-gray-300 checked:bg-[#DA1E37] checked:border-red-600 focus:outline-none transition duration-200 mt-1  mr-2 cursor-pointer"/>
         <label className="text-gray-800" >
         Other
      </label>
         </div>
          <div className="flex mt-4 mb-10">
            <input type="text" className="w-full outline-none border-b-2 border-gray-300" placeholder="type your opinion here"/>
          </div>
          <p className="text-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <span className="text-[#da1e37]">contact us with in 24 hours</span> </p>
          <div className="border-b-2 border-gray-300 mt-10"></div>

          <div className="flex  flex-row justify-end  flex-shrink mt-10 mb-10">
        <button className='w-[100px] lg:w-[130px] h-[45px] bg-[#da1e37] text-white cursor-pointer outline-none border-none rounded-lg mr-5 '>
           Submit
        </button>
        <button className='w-[100px] lg:w-[130px] h-[45px] border-[#da1e37] text-[#E22424] bg-transparent cursor-pointer outline-none border-2 rounded-lg'>
           Cancel
        </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
