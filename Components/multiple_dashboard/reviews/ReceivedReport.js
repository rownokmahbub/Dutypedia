import React from 'react'

const ReceivedReport = () => {
  return (
    <div className="container md:w-[45%] h-auto mx-auto relative ">
    <div>
      <div className=" flex mt-20 justify-center items-center h-auto py-4 rounded-2xl shadow-4xl md:shadow-3xl bg-[#FDEFF0] drop-shadow-md">
          <div className="flex flex-col justify-center items-center w-[80%] mx-auto">
          <p className='text-center mt-10 '>Thanks. Weve Recived Your Report. If We Find This Content ToBe In Violation Of Our Community Guideline, We Will Remove It.</p>
          <button className='w-[100px] lg:w-[130px] h-[40px] bg-[#da1e37] text-white cursor-pointer outline-none border-none rounded-lg mr-5 mt-7 mb-10'>
           Ok
        </button>
          </div>
     
      </div>
    </div>
  </div>
  )
}

export default ReceivedReport