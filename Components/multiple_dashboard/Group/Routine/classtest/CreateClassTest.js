import React from 'react'
import Link from 'next/link'
import Accordion from "@components/global/Accordion";
const CreateClassTest = () => {
  return (
    <div className="container  max-w-screen-xl h-auto mx-auto relative rounded-lg bg-white mt-5">
   <div className="flex flex-col md:flex-row justify-around">
    <div className="flex flex-col">
    <p className='font-normal text-2xl mt-4 mb-5'> Give A Test Routine Name</p>
    <input className='px-4 py-3 text-md font-normal w-72 bg-gray-100 rounded-lg outline-none' placeholder='ABCD Academy...' type="text" />
    <p className='font-normal text-2xl mt-5'> Total Test</p>
    <div className="relative inline-block w-[140px] md:w-[200px] text-gray-700 outline-none ">
                <div className="flex">
                  <input
                    type="text"
                    id="website-admin"
                    className="md:px-4 md:py-3 px-2 py-2 rounded-none rounded-l-md placeholder-blueGray-300 text-blueGray-600 relative bg-white text-sm border border-primary-500 outline-none focus:outline-none focus:ring w-full"
                    placeholder="04"
                  />

                  <span className="inline-flex flex-col justify-center items-center px-3 text-white rounded-r-md border border-l-0 bg-primary">
                    <svg
                      className="cursor-pointer"
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.500244 7.53998L6.55298 1.48724L12.6057 7.53998"
                        stroke="white"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="my-1.5"
                      width="24"
                      height="2"
                      viewBox="0 0 24 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.013H23"
                        stroke="white"
                        strokeLinecap="round"
                      />
                    </svg>

                    <svg
                      className="cursor-pointer"
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.500244 1.46024L6.55298 7.51297L12.6057 1.46024"
                        stroke="white"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              
          <div className="justify-end py-7 gap-5 hidden md:flex">
            <Link href='/multiple_dashboard/group/classtest'>
            <a className="btn btn-primary font-normal px-16">
              Next
            </a>
            </Link>
          
            <button className="btn btn-primary font-normal btn-outline px-16">
              Cancel
            </button>
          </div>
    </div>

    <div className="space-y-3 max-w-sm">
    <p className='font-normal text-xl md:text-3xl mt-4'> Instruction:</p>
    <Accordion title='Give A Routine Name ?'>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptate? </p>
    </Accordion>
    <Accordion title='Total Test?'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, necessitatibus!</p>
    </Accordion>
    </div>

    {/* mobile button */}

    <div className="flex justify-end py-7 gap-5 md:hidden">
            <button className="btn btn-primary font-normal px-12">
              Next
            </button>
            <button className="btn btn-primary font-normal btn-outline px-10">
              Cancel
            </button>
          </div>
   </div>
    </div>
  )
}

export default CreateClassTest