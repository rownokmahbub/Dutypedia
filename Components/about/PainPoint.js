import React from 'react'

const PainPoint = () => {
  return (
    <div className='container mx-auto'>
      
    <div className="flex justify-center md:justify-between flex-wrap items-center">
    <img className='block dark:hidden' src="/Assets/images/about/painpoint.png" alt="" />
    <img className='dark:block hidden' src="/Assets/images/about/painpoint-dark.png" alt="" />
    <div className="">
    <div className="flex items-center gap-2">
        <hr className='w-10 border-primary' />
        <p className='text-primary text-lg font-semibold'>Developers</p>
    </div>
    <p className=' text-4xl font-semibold mb-3'>Facing Finding Developers <br /> Designers & More</p>
    <div className="flex items-start gap-4 my-2">
            <div className="bg-[#DA1E9A] w-3 rounded-sm h-16"></div>
          <p className="max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eligendi quae cupiditate facere distinctio enim molestias quis minus, aspernatur porro dicta, ex totam  </p>
          </div>
          <div className="flex items-start gap-4 my-2">
            <div className="bg-[#1BCDB8]/10 dark:bg-[#1BCDB8]/40 w-3 rounded-sm h-16"></div>
          <p className="max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eligendi quae cupiditate facere distinctio enim molestias quis minus, aspernatur porro dicta, ex totam  </p>
          </div>
          <div className="flex items-start gap-4 my-2">
            <div className="bg-[#1659DB]/10 dark:bg-[#1659DB]/40 w-3 rounded-sm h-16"></div>
          <p className="max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eligendi quae cupiditate facere distinctio enim molestias quis minus, aspernatur porro dicta, ex totam  </p>
          </div>
    </div>
    
    </div>
  
  
    </div>
  )
}

export default PainPoint