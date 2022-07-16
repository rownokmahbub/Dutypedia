import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const BackToTop = () => {
  return (
    <div className="">
    <div className='fixed bottom-0 right-0'>
        <div className="absolute bottom-4 right-4 bg-primary-200 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer opacity-100 glass hover:bg-primary">
        <AiOutlineArrowUp className='text-2xl text-white'/>
        </div>
      
    </div>
    </div>

  )
}

export default BackToTop