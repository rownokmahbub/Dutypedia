import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import { Wrapper } from "../../../styles/Scrollbar";
import { IoReloadCircle } from "react-icons/io5";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
const EmployeeTable = ({goNext}) => {
    const SearchEmp=[
        {
          Id: 1,
          name: "Maliya Mouly",
          userid: "ID:7464735454",
          position:"Software Engineer",
          gender:"Male",
          date:"20-01-2022",
          image1: "/Assets/icon/person1.svg",
          image2: "/Assets/icon/online.svg",
          tag: "",
        
        },
        {
            Id: 1,
            name: "Maliya Mouly",
            userid: "ID:7464735454",
            position:"Software Engineer",
            gender:"Male",
            date:"20-01-2022",
            image1: "/Assets/icon/person1.svg",
            image2: "/Assets/icon/online.svg",
            tag: "",
          
          },  {
            Id: 1,
            name: "Maliya Mouly",
            userid: "ID:7464735454",
            position:"Software Engineer",
            gender:"Male",
            date:"20-01-2022",
            image1: "/Assets/icon/person1.svg",
            image2: "/Assets/icon/online.svg",
            tag: "",
          
          },  {
            Id: 1,
            name: "Maliya Mouly",
            userid: "ID:7464735454",
            position:"Software Engineer",
            gender:"Male",
            date:"20-01-2022",
            image1: "/Assets/icon/person1.svg",
            image2: "/Assets/icon/online.svg",
            tag: "",
          
          },  {
            Id: 1,
            name: "Maliya Mouly",
            userid: "ID:7464735454",
            position:"Software Engineer",
            gender:"Male",
            date:"20-01-2022",
            image1: "/Assets/icon/person1.svg",
            image2: "/Assets/icon/online.svg",
            tag: "",
          
          },  {
            Id: 1,
            name: "Maliya Mouly",
            userid: "ID:7464735454",
            position:"Software Engineer",
            gender:"Male",
            date:"20-01-2022",
            image1: "/Assets/icon/person1.svg",
            image2: "/Assets/icon/online.svg",
            tag: "",
          
          },
      
      ];
      let [isOpen, setIsOpen] = useState(false);

      function closeModal() {
        setIsOpen(false);
      }
    
      function openModal() {
        setIsOpen(true);
      }

  return (
    <div className="mt-10">
     <div className="container max-w-screen-2xl mx-auto relative my-5">
      <div className="mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl py-5 md:py-10 px-2 md:px-12">
      <div className="flex justify-end items-center mr-4 cursor-pointer">
        <div onClick={goNext} className="flex items-center">
        <p className="text-lg">Add Employee</p>
      <img className="w-10" src="/Assets/icon/roundedplus.svg" alt="" />
        </div>

     <IoReloadCircle className="text-4xl text-primary"/>
      </div>
       
          <div className="grid grid-cols-5 mx-[13px] -mr-[1px] mt-6 md:mx-3 md:mr-[22px] text-center bg-primary py-4  text-white text-xl rounded-t-md sticky top-0 z-10">
            <p className="text-[16px] md:text-xl"> Name</p>
            <p className="text-[16px] md:text-xl"> Position</p>
            <p className="text-[16px] md:text-xl">Gender</p>
            <p className="text-[16px] md:text-xl">Joining Date</p>
            <p className="text-[16px] md:text-xl">Status</p>
          </div>
          <Wrapper className="pl-3">
          <div className="routine-table-body-section md:pr-3">
          {SearchEmp.map((card, i) => (
         
         <div className="grid grid-cols-5 divide-x dark:divide-[#515150] border dark:border-[#515150] border-b-2  px-2">
             <div className="flex py-2">
             <div  className="relative flex items-center ">
                 
                 <div className="w-[50px] h-[50px] ">
                 <Image src={card.image1} width={50} height={50} alt='fdefd'/>
                     </div>
                 
                     <div className="absolute -bottom-[12px] -right-[15px] w-7 h-7">
                     <Image src={card.image2} width={22} height={28} alt='fdefd'/>
                     </div>
                 </div>
                 <div className="-space-y-0  flex-wrap">
                      <p className="md:pl-4 pl-1 text-[#707070] text-[15px]">
                      {card.name}
                      </p>
                      <p className="md:pl-4 pl-1 text-[#707070] text-[12px] ">
                      {card.userid}
                      </p>
                    </div>
             </div>
         <p className="items-center flex justify-center text-[16px] md:text-lg px-2 text-[#666666]">
          {card.position}
         </p>
         <p className="items-center flex justify-center text-[16px] md:text-lg px-2 text-[#666666]">
          {card.gender}
         </p>
         <p className="items-center flex justify-center text-[16px] md:text-lg px-2 text-[#666666]">
          {card.date}
         </p>
         <p className="items-center flex justify-end text-[16px] md:text-lg">
           <div className="flex items-center justify-end">
            <div className="flex flex-col items-center">
            <p className="items-center text-[15px] text-[#666666] cursor-pointer">
               Invitation Sent
             </p>
             <p className="items-center text-[14px] text-primary cursor-pointer">
               Cancel Request
             </p>
            </div>
           
             <Menu as="div" className=" relative ml-2">
               <Menu.Button>
                 <Image
                   src="/Assets/icon/dothor.svg"
                   className=""
                   width={30}
                   height={25}
                   alt="calender"
                 />
               </Menu.Button>
               <Menu.Items className=" flex flex-col items-center absolute -ml-20 -mt-10 bg-white shadow-3xl  rounded-md px-3 py-1">
                 <Menu.Item>
                   {({ active }) => (
                   
                          <a 
                       className={`${
                         active ? "bg-gray-200 text-black " : "text-gray-900"
                       } group flex w-full items-center rounded-[4px]  px-2 text-sm text-center cursor-pointer`}
                       
                     >
                       <p  className="text-sm">Edit</p>
                     </a>
                   
                
                   )}
                 </Menu.Item>
                 <Menu.Item>
                   {({ active }) => (
                     <a onClick={openModal}
                       className={`${
                         active
                           ? "bg-primary-300 text-white"
                           : "text-gray-900"
                       } group flex w-full items-center rounded-[4px] px-2 text-sm cursor-pointer`}
                      
                     >
                       <p className="text-sm">Delete</p>
                     </a>
                   )}
                 </Menu.Item>
               </Menu.Items>
             </Menu>
           </div>
         </p>
       </div>
        ))}
              
              </div>

        </Wrapper>

    
      </div>
    </div>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col">
      <p className="text-lg flex justify-center">Are you sure want to delete this person ?</p>
      <div className="flex justify-center mt-5 gap-3">
            <button onClick={closeModal} className="btn btn-primary md:w-28 capitalize ">
              Yes
            </button>
            <button onClick={closeModal}  className="btn text-primary bg-white border-primary hover:bg-primary-400 hover:text-white md:w-28 capitalize ">
              Cancel
            </button>
          </div>
    </div>
                 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  
    </div>
   
  );
};

export default EmployeeTable;
