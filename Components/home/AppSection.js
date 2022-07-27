import Image from "next/image";

const AppSection = () => {
  return (
    <div className="bg-[#FFFAFB] dark:bg-[#272727]">
      <div className="container mx-auto max-w-screen-2xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto max-w-4xl px-8">
          <div className="w-full aspect-[584/438] sm:aspect-video md:aspect-[584/438] overflow-hidden relative">
            <Image
              src="/Assets/images/app.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center pr-4 gap-4">
            <h1 className=" capitalize text-3xl font-semibold dark:text-white">
              get our dutypedia letese app
            </h1>
            <p className="text-gray-500 dark:text-gray-200">{`"Our map help you to find any service or shop near of your area."`}</p>
            <div className="flex gap-4 items-center justify-center md:items-start md:justify-start w-full">
              <a className="btn capitalize gap-2">
                <img className=" scale-80" src="/Assets/icon/playstore.svg" />
                Google Play
              </a>
              <a className="btn capitalize gap-2">
                <img className="" src="/Assets/icon/appstore.svg" />
                App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
