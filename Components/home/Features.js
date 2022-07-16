import React from 'react'
import Image from "next/image";
const Features = () => {
  return (
    <div className='container mx-auto max-w-screen-xl py-8 px-6 md:px-24'>
        <p className='text-[39px] text-[#575757] font-semibold pb-8'>Best feature for any work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 ">
            <div className="flex flex-col w-full  h-full justify-center items-center bg-[#ffffff] px-6 shadow-sm  rounded-[42px] pt-5">
            <div className="w-full aspect-[391/287]  overflow-hidden relative ">
            <Image
            className=""
            src="/Assets/images/features/f-1.svg"
            alt="" layout="fill" objectFit="contain"
          />
            </div>
                <p className='text-2xl font-semibold py-4'>Buyer And Seller One Place</p>
                <p className='text-sm text-justify font-normal text-[#666666] pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas repellat architecto at, ullam nostrum fggfg </p>
            </div>
            <div className="flex flex-col w-full  h-full justify-center items-center bg-[#ffffff] px-6 shadow-sm  rounded-[42px] pt-5">
            <div className="w-full aspect-[391/287]  overflow-hidden relative">
            <Image
            className=""
            src="/Assets/images/features/f-2.svg"
            alt="" layout="fill" objectFit="contain"
          />
            </div>
                <p className='text-2xl font-semibold py-4'>Free Messanging, Video Conference &Team Work</p>
                <p className='text-sm text-justify font-normal text-[#666666] pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas repellat architecto at, ullam nostrum fggfg </p>
            </div>
            <div className="flex flex-col w-full  h-full justify-center items-center bg-[#ffffff] px-6 shadow-sm  rounded-[42px] pt-5">
            <div className="w-full aspect-[391/287]  overflow-hidden relative ">
            <Image
            className=""
            src="/Assets/images/features/f-3.svg"
            alt="" layout="fill" objectFit="contain"
          />
            </div>
                <p className='text-2xl font-semibold py-4'>Wallet & Payout With Any Currency</p>
                <p className='text-sm text-justify font-normal text-[#666666] pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas repellat architecto at, ullam nostrum fggfg </p>
            </div>
            <div className="flex flex-col w-full  h-full justify-center items-center bg-[#ffffff] px-6 shadow-sm  rounded-[42px] pt-5">
            <div className="w-full aspect-[391/287]  overflow-hidden relative ">
            <Image
            className="pt-5"
            src="/Assets/images/features/f-6.svg"
            alt="" layout="fill" objectFit="contain"
          />
            </div>
                <p className='text-2xl font-semibold py-4 mt-4'>Powerful Dashboard ThatYou Can Manage Any Business</p>
                <p className='text-sm text-justify font-normal text-[#666666] pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas repellat architecto at, ullam nostrum fggfg </p>
            </div>
            <div className="flex flex-col w-full  h-full justify-center items-center bg-[#ffffff] px-6 shadow-sm  rounded-[42px] pt-5">
            <div className="w-full aspect-[391/287]  overflow-hidden relative pt-4">
            <Image
            className=""
            src="/Assets/images/features/f-5.svg"
            alt="" layout="fill" objectFit="contain"
          />
            </div>
                <p className='text-2xl font-semibold py-4'>Dynamic Barcode & Qr Code System</p>
                <p className='text-sm text-justify font-normal text-[#666666] pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas repellat architecto at, ullam nostrum fggfg </p>
            </div>
            <div className="flex flex-col w-full  h-full justify-center items-center bg-[#ffffff] px-6 shadow-sm  rounded-[42px] pt-5">
            <div className="w-full aspect-[391/287]  overflow-hidden relative pt-4">
            <Image
            className=""
            src="/Assets/images/features/f-4.svg"
            alt="" layout="fill" objectFit="contain"
          />
            </div>
                <p className='text-2xl font-semibold py-4'>Artificial Intelligent System And High Privacy</p>
                <p className='text-sm text-justify font-normal text-[#666666] pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas repellat architecto at, ullam nostrum fggfg </p>
            </div>
          
        </div>
        
    </div>
  )
}

export default Features