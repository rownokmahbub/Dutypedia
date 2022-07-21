import React from 'react'
import Image from "next/image";
import search from '/public/Assets/icon/search.svg'
const CreateEmployee = () => {
  return (
    <div onClick={()=>{goNext()}} className="container max-w-screen-xl mx-auto relative flex flex-col justify-center items-center  mt-16 h-[256px] rounded-2xl shadow-4xl md:shadow-3xl bg-white ">
    <div className="w-10 md:w-28 ">
    <Image
                    src="/Assets/icon/plus.svg"
                    className="cursor-pointer "
                    width={100}
                    height={100}
                    alt="calender"
                  />
    </div>

   <p className='text-center  md:text-2xl mt-5 '>Create A Expenses List</p>

   
  </div>

  )
}

export default CreateEmployee