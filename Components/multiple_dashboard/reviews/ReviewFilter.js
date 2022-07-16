import RatingRender from "./Rating/RatingRender";
import Image from "next/image";

const ReviewFilter = () => {
  return (
    <div className="container md:w-[90%] h-auto mx-auto relative ">
      <div>
        <div className=" flex mt-20 justify-center items-center h-auto py-4 rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
          <div className=" w-[95%] mx-auto mt-5">
            <div className="flex bg-primary py-3 px-20 mx-auto xl:hidden rounded-md text-white mb-4">
              <p className="px-4">Student Review</p>
            </div>
            <div className="flex md:flex-row flex-col gap-4 md:gap-8">
              <p className="md:ml-0 flex-shrink-0 w-max">Filter By</p>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center">
                  <RatingRender rating={5} />
                  <span>(5.0)</span>
                </span>

                <span className="flex items-center">
                  <RatingRender rating={4} />
                  <span>(4.0)</span>
                </span>
                <span className="flex items-center">
                  <RatingRender rating={3} />
                  <span>(3.0)</span>
                </span>
                <span className="flex items-center">
                  <RatingRender rating={2} />
                  <span>(2.0)</span>
                </span>
                <span className="flex items-center">
                  <RatingRender rating={1} />
                  <span>(1.0)</span>
                </span>
              </div>
            </div>
            {/* mobile version  */}
            <div className=" mt-10 xl:hidden">
              <div className="flex gap-3 ">
                <div className="flex w-12 h-12 relative">
                  <Image
                    src="/person1.svg"
                    className=" object-cover rounded-md "
                    width={60}
                    height={60}
                    alt="calender"
                  />
                  <div className=" absolute -bottom-3 -right-3 object-cover rounded-md w-7 h-7">
                    <Image src="/online.svg" layout="fill" alt="calender" />
                  </div>
                </div>
                <div className="flex">
                  <div className="w-60 whitespace-normal">
                    <p className="line-clamp-2"> Tanisha shima </p>
                    <span className="flex items-center ">
                      <RatingRender rating={4.5} size="text-sm" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-5">
                <p>Gender : Male</p>
                <p>Status : Completed</p>
              </div>
              <p className="text-primary text-lg mt-4">12th June 2022</p>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nostrum, iure nisi, dolorem harum quaerat a mollitia
                aperiam temporibus, ut quasi ipsumexercitationem.
              </p>
              <div className="flex items-center">
                <Image
                  src="/red-like.svg"
                  className=" object-cover rounded-md "
                  width={20}
                  height={20}
                  alt="calender"
                />

                <p className="text-primary text-lg ml-4 mr-8">56+</p>
               
                <Image
                  src="/dislike.svg"
                  className=" object-cover rounded-md ml-6"
                  width={20}
                  height={20}
                  alt="calender"
                />
                <p className=" text-lg ml-4 mr-5">5</p>
                <p className=" text-lg ml-4 mr-8">Report</p>
                <p className="text-primary text-lg ml-4 mr-8">Reply</p>
               
              </div>
              <div className="flex bg-gray-300 w-full h-[1px] mt-4 mb-4"></div>

              <div className="flex gap-3 ">
                <div className="flex w-12 h-12 relative">
                  <Image
                    src="/person1.svg"
                    className=" object-cover rounded-md "
                    width={60}
                    height={60}
                    alt="calender"
                  />
                  <div className=" absolute -bottom-3 -right-3 object-cover rounded-md w-7 h-7">
                    <Image src="/online.svg" layout="fill" alt="calender" />
                  </div>
                </div>
                <div className="flex">
                  <div className="w-60 whitespace-normal">
                    <p className="line-clamp-2"> Tanisha shima </p>
                    <span className="flex items-center ">
                      <RatingRender rating={4.5} size="text-sm" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-5">
                <p>Gender : Male</p>
                <p>Status : Completed</p>
              </div>
              <p className="text-primary text-lg mt-4">12th June 2022</p>
              <p className="py-5">
              Thank You For Your Feedback About The Service.
              </p>
              <div className="flex items-center">
                <Image
                  src="/like.svg"
                  className=" object-cover rounded-md "
                  width={20}
                  height={20}
                  alt="calender"
                />

                <p className=" text-lg ml-4 mr-8">56+</p>
               
                <Image
                  src="/red-dislike.svg"
                  className=" object-cover rounded-md ml-6"
                  width={20}
                  height={20}
                  alt="calender"
                />
                <p className=" text-lg ml-4 mr-5">5</p>
              
               
              </div>
              <div className="flex bg-gray-300 w-full h-[1px] mt-4"></div>

            </div>

            <div className="overflow-x-auto w-full border rounded-lg mt-8 hidden xl:block">
              <table className="w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                <thead className="bg-primary">
                  <tr className="text-white text-left">
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Students Name
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Gender
                    </th>
                    <th className="font-semibold text-sm text-center uppercase px-6 py-4">
                      Educational Status
                    </th>
                    <th className="font-semibold text-sm text-center uppercase px-6 py-4">
                      Review
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Descrition
                    </th>
                    <th className="font-semibold text-sm text-center uppercase px-6 py-4">
                      Reply
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 relative">
                      <span className="w-0.5 h-12 bg-gray-200 absolute right-0 top-1/2 -translate-y-1/2" />
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex w-12 h-12 relative">
                          <Image
                            src="/person1.svg"
                            className=" object-cover rounded-md "
                            width={60}
                            height={60}
                            alt="calender"
                          />
                          <div className=" absolute -bottom-3 -right-3 object-cover rounded-md w-7 h-7">
                            <Image
                              src="/online.svg"
                              layout="fill"
                              alt="calender"
                            />
                          </div>
                        </div>
                        <div className="w-60 whitespace-normal">
                          <p className="line-clamp-2"> Tanisha shima </p>
                          <p className="text-gray-500 text-sm font-semibold tracking-wide">
                            ID: 343463
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 relative">
                      <span className="w-0.5 h-12 bg-gray-200 absolute right-0 top-1/2 -translate-y-1/2" />
                      <p className=""> Female </p>
                    </td>
                    <td className="px-6 py-4 relative text-center">
                      <span className="w-0.5 h-12 bg-gray-200 absolute right-0 top-1/2 -translate-y-1/2" />{" "}
                      Completed
                    </td>
                    <td className="px-6 py-4 relative">
                      <span className="w-0.5 h-12 bg-gray-200 absolute right-0 top-1/2 -translate-y-1/2" />
                      <RatingRender rating={4.4} />
                    </td>
                    <td className="px-6 py-4 relative">
                      <span className="w-0.5 h-12 bg-gray-200 absolute right-0 top-1/2 -translate-y-1/2" />
                      <p className="text-[#da1e37] italic">12th June 2022</p>
                      <p className="w-64 whitespace-normal">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor.
                        <span className="text-[#da1e37] underline">
                          {" "}
                          read more......
                        </span>
                        <div className="flex items-center">
                <Image
                  src="/red-like.svg"
                  className=" object-cover rounded-md "
                  width={20}
                  height={20}
                  alt="calender"
                />

                <p className="text-primary text-lg ml-4 mr-8">56+</p>
               
                <Image
                  src="/dislike.svg"
                  className=" object-cover rounded-md ml-6"
                  width={20}
                  height={20}
                  alt="calender"
                />
                <p className=" text-lg ml-4 mr-4">5</p>
                <p className=" text-lg ml-4 ">Report</p>
              
               
              </div>
                      </p>
                    </td>

                    <td className="px-6 py-4 relative ">
                      <button className="btn btn-primary px-8">Reply</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilter;
