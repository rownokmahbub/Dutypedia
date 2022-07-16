import React from 'react'
const Login=[
    {
        icon:'/Assets/images/feed/dashboard.svg',
        title:'Login to dashboard',
    },
    {
        icon:'/Assets/images/feed/order.svg',
        title:'Orders',
    },
    {
        icon:'/Assets/images/feed/setting.svg',
        title:'Settings',
    },
    {
        icon:'/Assets/images/feed/acbalance.svg',
        title:'Account Balance',
    },
    {
        icon:'/Assets/images/feed/createbs.svg',
        title:'Create Business Account',
    }
]
const LoginDashboard = () => {
  return (
    <div className='pt-20 flex justify-end mr-4'>
 <div className='bg-white shadow-3xl w-72 rounded-lg py-3  '>
        {Login.map((item,ix)=>(
           
   <div key={ix} className=''>
   <div className='flex gap-3 py-2 px-2 hover:bg-[#E6E6E6] pl-5 cursor-pointer items-center '>
   <img className='' src={item.icon} alt="" />
<p className=''>{item.title}</p>
   </div>
  
</div>
         

        ))}
     
       
    </div>
    </div>
   
  )
}

export default LoginDashboard