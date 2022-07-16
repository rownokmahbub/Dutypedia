import React from 'react'

const AcptCancelTest = () => {
  return (
    <div className="container w-[90%] md:w-[40%] mx-auto relative ">
    <div className="  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md p-10">
    
     <p className='text-center text-[#DA1E37] text-2xl'>Are You Sure To Delete This Routine ? </p>

     <div className="mt-8 flex justify-center items-center gap-4">
     <button className="btn btn-primary px-8 md:px-16 ">
              Yes
            </button>
            <button className="btn  btn-primary btn-outline px-8 md:px-16">
              No
            </button>
        </div>
    </div>
  </div>
  )
}

export default AcptCancelTest