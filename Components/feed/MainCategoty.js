import React from 'react'
import RecentView, { Views } from "@components/feed/RecentView";
import ListView from './ListView';
const MainCategoty = () => {
  return (
    <div className='container mx-auto max-w-[1920px] py-16 bg-white'>
      <p className=' text-2xl mb-5 mt-10'>Recent Services</p>
        <ListView views={Views}/>
    </div>
  )
}

export default MainCategoty