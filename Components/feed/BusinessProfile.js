import React from 'react'
const Business=[
    {
        icon:'/Assets/images/feed/person.jpg',
        title:'It Services',
    },
    {
        icon:'/Assets/images/feed/person.jpg',
        title:'Business Services',
    },
    {
        icon:'/Assets/images/feed/person.jpg',
        title:'Builder Services',
    }
]
const BusinessProfile = () => {
  return (
    <div className='pt-20 flex justify-end mr-4 '>
    <div className='bg-white shadow-3xl w-72 rounded-lg py-3'>
        {Business.map((item,ix)=>(
              <div key={ix} className=''>
              <div className='flex gap-3 py-2 px-2 hover:bg-[#E6E6E6] pl-5 cursor-pointer items-center'>
              <img className='rounded-full w-[35px] h-[35px]' src={item.icon} alt="" />
      <p>{item.title}</p>
              </div>
          
          </div>
        ))}
  
    </div>
   
</div>
  )
}

export default BusinessProfile