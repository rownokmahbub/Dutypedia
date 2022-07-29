import Image from "next/image";
import search from "/public/Assets/icon/search.svg";
import { Wrapper } from "../../../styles/Scrollbar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
const CreateEmployee = ({goNext}) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const SearchEmp = [
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
  ];

  return (
    <>
      <div className="flex justify-center items-center mx-auto md:mt-10">
        <button
          onClick={openModal}
          className="container max-w-screen-xl mx-auto relative flex flex-col justify-center items-center  h-[256px] rounded-2xl shadow-4xl md:shadow-3xl bg-white md:mt-20 dark:bg-bg-200"
        >
          <div className="w-10 md:w-28 ">
            <img
              src="/Assets/icon/plus.svg"
              className="cursor-pointer "
              width={100}
              height={100}
              alt="calender"
            />
          </div>

          <p className="text-center  md:text-2xl mt-5 dark:text-white">Add Employee</p>
        </button>
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
                <Dialog.Panel className="w-full max-w-screen-md transform overflow-hidden rounded-2xl bg-white dark:bg-bg-200 dark:text-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="">
                    <div className="h-max">
                      <div
                        className="flex justify-end cursor-pointer"
                        onClick={closeModal}
                      >
                        <img
                          className="w-12"
                          src="/Assets/icon/cross.svg"
                          alt=""
                        />
                      </div>
                      <div className=" flex justify-between w-full pt-10 md:flex-nowrap flex-wrap ">
                        <div className="-mt-2 relative text-gray-600 md:w-[97%] w-[92%] ">
                          <input
                            className=" md:h-14 h-10 px-5  w-[95%] pr-8 rounded-lg text-sm focus:outline-none mx-auto ml-5 md:ml-8 outline-none border-2 border-solid border-[#ECECEC] dark:bg-bg-200 dark:border-[#515150]" placeholder="rownok mahbub"
                            type="search"
                            name="search"
                          />
                         
                          <div className="absolute md:right-6 right-0 md:top-1 top-2 md:mt-[11px] w-10  h-8 cursor-pointer">
                            <Image
                              src={search}
                              width={18}
                              height={28}
                              alt="fdefd"
                            />
                          </div>
                        </div>
                      </div>

                      <div className=" md:mt-7 ">
                        <Wrapper className="md:px-4">
                          <div onClick={goNext} className="bg-white dark:bg-bg-300 border-none outline-none px-4 mt-4 rounded-md relative z-10 routine-table-body-section pb-5 cursor-pointer">
                            {SearchEmp.map((card, i) => (
                              <div
                                key={i}
                                className="flex items-center  text-sm font-normal mt-4 w-full mx-auto dark:bg-bg-200"
                              >
                                <div className=" flex border-none  rounded-md items-center w-full  md:h-20 h-[9rem] shadow-3xl">
                                  <div className="relative flex items-center ml-5">
                                    <div className="w-[50px] h-[50px] ">
                                      <Image
                                        src={card.image1}
                                        width={50}
                                        height={50}
                                        alt="fdefd"
                                      />
                                    </div>

                                    <div className="absolute -bottom-[12px] -right-[15px] w-7 h-7">
                                      <Image
                                        src={card.image2}
                                        width={22}
                                        height={28}
                                        alt="fdefd"
                                      />
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      
    </>
  );
};

export default CreateEmployee;
