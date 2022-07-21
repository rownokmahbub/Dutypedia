import React from 'react'
import Image from "next/image";
import search from '/public/Assets/icon/search.svg'
import person1 from '/public/Assets/icon/person1.svg'
const SearchEmp=[
    {
      Id: 1,
      name: "Maliya Mouly",
      userid: "ID:7464735454",
      image1: "/Assets/icon/person1.svg",
      image2: "/Assets/icon/online.svg",
      tag: "",
    
    },
    {
        Id: 2,
        name: "Maliya Mouly",
        userid: "ID:7464735454",
        image1: "/Assets/icon/person1.svg",
        image2: "/Assets/icon/online.svg",
        tag: "",
      
      },
      {
        Id: 3,
        name: "Maliya Mouly",
        userid: "ID:7464735454",
        image1: "/Assets/icon/person1.svg",
        image2: "/Assets/icon/online.svg",
        tag: "",
      
      },
      {
        Id: 4,
        name: "Maliya Mouly",
        userid: "ID:7464735454",
        image1: "/Assets/icon/person1.svg",
        image2: "/Assets/icon/online.svg",
        tag: "",
      
      },
      {
        Id: 1,
        name: "Maliya Mouly",
        userid: "ID:7464735454",
        image1: "/Assets/icon/person1.svg",
        image2: "/Assets/icon/online.svg",
        tag: "",
      
      },
  
  ]
import { Wrapper } from "../../../styles/Scrollbar";
const SearchEmployee = () => {
  return (
    <div className="container md:max-w-screen-md w-full mx-auto relative bg-white shadow-3xl rounded-lg mt-20">
    <div className="h-max">
 
      <div className=" flex justify-between w-full pt-10 md:flex-nowrap flex-wrap ">
          <div className="-mt-2 relative text-gray-600 md:w-[97%] w-[92%]">
            <input
              className=" md:h-14 h-10 px-5  w-[95%] pr-8 rounded-lg text-sm focus:outline-none mx-auto ml-5 md:ml-8 outline-none border-2 border-solid border-[#ECECEC]"
              type="search"
              name="search"
             
            />
            <div className='absolute left-5 md:left-14 md:top-[13px] top-1 text-lg  border-none -mt-1 px-4 py-1 cursor-pointer'>
                Maliya Mouly 
            </div>
            <div className="absolute md:right-6 right-0 md:top-1 top-2 md:mt-[11px] w-10  h-8 cursor-pointer">
            <Image src={search} width={18} height={28} alt='fdefd'/>
            </div>
          </div>
         
        </div>

      <div className=" md:mt-7 ">
        <Wrapper className="md:px-4"> 
       
                 <div  className="bg-white border-none outline-none px-4 mt-4 rounded-md relative z-10 routine-table-body-section pb-5 cursor-pointer">
                 {SearchEmp.map((card, i) => (
                <div key={i}   className="flex items-center  text-sm font-normal mt-4 w-full mx-auto ">

                
        <div className=" flex border-none  rounded-md items-center w-full  md:h-20 h-[9rem] shadow-3xl">
          <div  className="relative flex items-center ml-5">
                 
                 <div className="w-[50px] h-[50px] ">
                 <Image src={card.image1} width={50} height={50} alt='fdefd'/>
                     </div>
                 
                     <div className="absolute -bottom-[12px] -right-[15px] w-7 h-7">
                     <Image src={card.image2} width={22} height={28} alt='fdefd'/>
                     </div>
                 </div>
                 <div className="-space-y-0  ml-4 -mt-2 flex-wrap">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                      {card.name}
                      </p>
                      <p className="md:pl-4 pl-1 text-[#707070] text-[12px] ">
                      {card.userid}
                      </p>
                    </div>
                    </div>
                 
                    </div>
                    ))}
                    </div>
     
   

                
           
       

      
        </Wrapper>
      </div>
    </div>
  </div>
  )
}

export default SearchEmployee