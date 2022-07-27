import RatingRender from "@components/global/Rating/RatingRender";
import React from "react";
import Image from "next/image";
const BuyerFeedback = () => {
  return (
      <div className="bg-white dark:bg-[#272727]">
   <div className="container mx-auto max-w-screen-xl py-5 px-6 md:px-24 ">
      <div className="text-center mx-auto max-w-sm space-y-4">
          <h4 className="text-3xl font-semibold dark:text-white">Buyer Feedback</h4>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
        <div className="flex flex-col h-[400px]  bg-[#ffffff] dark:bg-[#2e2e2e] dark:shadow-glass-card shadow-sm rounded-3xl">
        <div className="w-full aspect-[391/287] rounded-t-3xl overflow-hidden relative ">
            <Image
            className=""
            src="/Assets/images/features/br-1.jpg"
            alt="" layout="fill" objectFit="cover"
          />
            </div>
          <div className="flex  mt-4 divide-x-2 divide-gray-300 gap-7 px-3">
            <div className="flex items-center gap-3">
              <img
                className="w-8 h-8 rounded-full"
                src="/Assets/images/features/app.png"
                alt=""
              />
              <p className="capitalize text-primary dark:text-white">salma khan</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="pl-2 dark:text-gray-300">5.0</p>
              <RatingRender rating={5} />
            </div>
          </div>
          <p className="px-4 mt-3 text-2xl text-[#666666] font-semibold dark:text-white">
            Lorem ipsum dolor sit, amet consectetur .
          </p>
        </div>
        <div className="flex flex-col h-[400px] dark:bg-[#2e2e2e] bg-[#ffffff] shadow-sm rounded-3xl">
        <div className="w-full aspect-[391/287] rounded-t-3xl overflow-hidden relative ">
            <Image
            className=""
            src="/Assets/images/features/br-2.jpg"
            alt="" layout="fill" objectFit="cover"
          />
            </div>
          <div className="flex  mt-4 divide-x-2 divide-gray-300 gap-7 px-3">
            <div className="flex items-center gap-3">
              <img
                className="w-8 h-8 rounded-full"
                src="/Assets/images/features/app.png"
                alt=""
              />
              <p className="capitalize text-primary dark:text-white">salma khan</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="pl-2 dark:text-gray-300">5.0</p>
              <RatingRender rating={5} />
            </div>
          </div>
          <p className="px-4 mt-3 text-2xl dark:text-white text-[#666666] font-semibold">
            Lorem ipsum dolor sit, amet consectetur .
          </p>
        </div>
        <div className="flex flex-col h-[400px] dark:bg-[#2e2e2e] bg-[#ffffff] shadow-sm rounded-3xl">
            <div className="w-full aspect-[391/287] rounded-t-3xl overflow-hidden relative ">
            <Image
            className=""
            src="/Assets/images/features/br-3.jpg"
            alt="" layout="fill" objectFit="cover"
          />
            </div>
         
          <div className="flex  mt-4 divide-x-2 divide-gray-300 gap-7 px-3">
            <div className="flex items-center gap-3">
              <img
                className="w-8 h-8 rounded-full"
                src="/Assets/images/features/app.png"
                alt=""
              />
              <p className="capitalize text-primary dark:text-white">salma khan</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="pl-2 dark:text-gray-300">5.0</p>
              <RatingRender rating={5} />
            </div>
          </div>
          <p className="px-4 mt-3 text-2xl text-[#666666] dark:text-white font-semibold">
            Lorem ipsum dolor sit, amet consectetur .
          </p>
        </div>
      </div>
    </div>
      </div>
 
  );
};

export default BuyerFeedback;
