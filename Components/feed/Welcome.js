import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="pt-4 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative">
        <span className="absolute hidden md:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-1/3 bg-gray-200 dark:bg-[#272727]" />
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-64 relative lg:absolute lg:ml-10 flex-shrink-0 rounded-md aspect-video lg:aspect-[420/540] overflow-hidden ">
            <Image
              src="/Assets/images/feed/person.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-white dark:bg-[#2e2e2e] lg:ml-40 rounded-md relative lg:mt-44 lg:pl-10 py-4">
            <p className="text-sm text-gray-500 dark:text-white md:max-w-[350px] ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.
            </p>
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <div className="w-24 aspect-[161/113] relative overflow-hidden rounded-md">
                <Image
                  src="/Assets/images/feed/it.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-24 aspect-[161/113] relative overflow-hidden rounded-md">
                <Image
                  src="/Assets/images/feed/ent.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-24 aspect-[161/113] relative overflow-hidden rounded-md">
                <Image
                  src="/Assets/images/feed/bs.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-start justify-center md:pr-4 gap-4 ">
          <h1 className="w-full capitalize text-3xl font-semibold leading-snug dark:text-white">
            Hello{" "}
            <span className="text-white bg-black dark:bg-slate-900 px-2 py-1">Easin Arafat</span>
            <br />
            find service <br />
            what you need
          </h1>
          <p className="text-gray-500 dark:text-white mt-2">
            Today's most search : 
            <a className="link pl-2 ">It & Technology,</a>
            <a className="link pl-2 ">Online Tuition,</a>
            <a className="link pl-2 ">Lawyer Service,</a>
            <a className="link pl-2 ">Business Service</a>
          </p>
          <div className="input-group w-full border items-center px-6 rounded-md shadow-md">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search…"
              className="input focus:ring-0 dark:bg-[#272727] focus:border-0 active:border-0 active:ring-0 focus:outline-none w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
