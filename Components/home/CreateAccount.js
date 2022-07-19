import Link from "next/link";
import React from "react";

const CreateAccount = () => {
  return (
    <div className="bg-[#fafafa] py-16">
      <div className="container  px-8 max-w-screen-lg py-5 mx-auto bg-[#ffcfd5] rounded-2xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="">
            <p className="text-[18px] md:text-[28px] text-[#1e1e1e] font-semibold pb-4">
              Grow your business in one month <br className="hidden md:block" /> 100% grantee
            </p>
            <p className="hidden md:block">
              {`"`}Our map help you to find any service or shop near of your
              area.
              {`"`}
            </p>
            <Link href="/become-seller">
              <a className="btn btn-primary text-sm capitalize font-normal rounded-[50px] mt-6">
                Create an account
              </a>
            </Link>
          </div>
          <div className="flex justify-end">
            <img
              className="mt-5 w-72 justify-end"
              src="/Assets/images/features/talent.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
