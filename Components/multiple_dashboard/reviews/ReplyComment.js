import React from 'react'
import Image from 'next/image'
const ReplyComment = () => {
  return (
    <div className="container md:w-[55%] h-auto mx-auto relative ">
    <div>
      <div className=" flex mt-20  h-auto py-4 rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
          <div className="flex flex-col w-[95%] mx-auto">
         <div className="flex justify-between">
             <p className='text-2xl text-gray-400 font-normal'>Reply Comment</p>
             <Image src='/cross.svg' className='cursor-pointer' width={40} height={40} alt='calender'/>
         </div>
         <textarea className='w-30 h-48 bg-gray-100 mt-5 rounded-md focus:outline-none p-4 ' name="" id="" cols="30" rows="10" placeholder='Write Your Text.....'></textarea>
         <div className="flex justify-between">
             <p className='text-[#da1e37] text-sm mt-5'>Max 600 Words.</p>
             <button className='w-[150px] lg:w-[160px] h-[40px] bg-[#da1e37] text-white cursor-pointer outline-none border-none rounded-lg mr-5 mt-5 mb-10'>
             Submit Your Reply
        </button>
         </div>
        
          </div>
     
      </div>
    </div>
  </div>
  )
}

export default ReplyComment