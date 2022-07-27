import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Message } from "@lib/data/notification";
const RandomMessage = () => {
  const delay = [1000, 4000];


  useEffect(() => {
    const intervalId = setInterval(() => {
      const txt = Message[Math.floor(Math.random() * Message.length)];
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-xs w-full relative bg-white dark:bg-[2e2e2e] dark:shadow-glass-card shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
        <div className="flex px-2 py-1 pb-4">
          <div className="rounded-full w-[45px] h-[45px] flex items-center mt-4">
            <img className="rounded-full w-[45px] h-[45px]" src={txt.image} alt="" />
          </div>
          <div className="flex ">
            <div className="pl-4 pt-2">
            <p className="text-[16px] font-semibold">{txt.name}</p>
          <p className="text-[14px] text-[#888888]">{txt.location}</p>
          <p className="font-medium">{txt.message}</p>
            </div>
           
          </div>
          <img className="w-[25px] h-[25px] absolute -top-2 -right-2" src="/Assets/icon/cross.svg" alt="" />
 <div className="absolute right-3 space-y-5 py-2">
            <p className="text-[14px] text-[#888888]">Just Now</p>
          
            <img className="w-[20px] h-[20px] absolute right-3" src={txt.icon} alt="" />
            </div>
        </div>
         
        </div>
      ),{
        position: "bottom-left",
        
      })
    }, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <></>;
};

export default RandomMessage;
