import React from "react";
import Image from "next/image";
import Link from "next/link";
const Cta = () => {
  return (
    <div className="bg-white container mx-auto max-w-screen-xl -mb-7">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col">
          <p className="md:text-3xl font-bold">
            Hello Good Morning Find Service <br /> What You Need
          </p>
          <p className="font-normal text-sm text-[#666666] mt-5 hidden md:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            necessitatibus saepe reprehenderit. Neque quaerat molestias.
          </p>
          <a
            href=""
            className="btn btn-primary text-[12px] md:xl-lg capitalize font-normal rounded-[50px] mt-6 w-40"
          >Create an Account</a>
        </div>
        <div className="w-full aspect-video lg:aspect-square relative overflow-hidden">
          <Image
            src="/Assets/images/feed/group.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
