import Heart from "@components/global/Heart";
import RatingRender from "@components/global/Rating/RatingRender";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Slider from "react-slick/lib/slider";

const ViewCard = ({ view }) => {
  const [mainSlider, setMainSlider] = useState();
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = view.images?.length || 1;
  const mainSliderSettings = {
    arrows: false,
    speed: 300,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    gutters: 10,
  };

  const goNext = () => {
    mainSlider?.slickNext();
  };
  const goPrev = () => {
    mainSlider?.slickPrev();
  };
  return (
    <div className=" group rounded-lg overflow-hidden shadow-card-shadow dark:shadow-glass-card bg-white dark:bg-[#2e2e2e]">
      {view.images && (
        <div className="relative">
          <span
            onClick={goNext}
            className="w-6 cursor-pointer rounded-l-md aspect-square bg-white shadow-3xl justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 z-10 flex opacity-0 duration-300  pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <FiChevronRight />
          </span>
          <span
            onClick={goPrev}
            className="w-6 rounded-r-md cursor-pointer aspect-square bg-white justify-center items-center absolute left-0 top-1/2 -translate-y-1/2 z-10 flex opacity-0 duration-300 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <FiChevronLeft />
          </span>

          <Slider
            ref={(slider1) => setMainSlider(slider1)}
            {...mainSliderSettings}
          >
            {view.images.map((image, i) => (
              <div
                key={i}
                className="relative w-full aspect-[320/167.7]  overflow-hidden rounded-t-md"
              >
                <Image
                  className=""
                  src={image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
      <div className="border border-t-0  dark:border-none pt-[22px] rounded-b-lg -mt-5">
        <div className="px-2 pl-[10px]">
          <Link href={`/feed/service/${view.id}`}>
            <a className="flex items-start justify-between gap-2">
              <span className="text-[15px] capitalize leading-tight  font-semibold text-[#222325] dark:text-white">
                {view.title}
              </span>
            </a>
          </Link>
          <div className="flex justify-between items-center py-[6px]">
            <div className="flex items-center gap-2 ">
              <div className="relative">
                <div className="flex w-6 h-6 overflow-hidden bg-primary  rounded-full border-primary border items-center justify-center ">
                  <img
                    className="object-cover rounded-full"
                    src={view.service.profilePhoto}
                    alt="love"
                  />
                </div>
                <div className="absolute w-2 h-2 bg-gray-300 rounded-full right-0 bottom-0"></div>
              </div>

              <p className="text-xs text-[#a8a1a6] italic font-medium capitalize">
                {view.service.serviceCenterName}
              </p>
            </div>
            <div className="text-sm font-medium mr-[6px]">
              <img
                className="w-[60px] dark:hidden"
                src="/Assets/images/feed/verified.svg"
                alt=""
              />
              <img
                className="w-[60px] hidden dark:block"
                src="/Assets/images/feed/verifydark.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex capitalize items-center">
            <p className="text-[16px] text-[#4d4d4d] font-bold dark:text-white">
              {view.price}৳
            </p>
          </div>
        </div>
        <div className="flex justify-between  px-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-center gap-1 -mb-[6px] -mt-[6px]">
              <RatingRender rating={5} />
              <p className=" mt-1 text-[#a8a1a6]">5.0</p>
            </div>
            <p className="text-[13px] text-[#8c8a8a] pb-[9px]">100k view</p>
          </div>
          <div className="flex gap-[7px] mr-[6px] relative">
            <Heart className="" />

            <Link href={`/feed/service/${view.id}`}>
              <a className="text-[#eb8592] font-bold text-[16px] hover:text-white border border-[#eb8592] hover:bg-[#eb8592]  w-[73px] h-10 rounded-[2px] flex justify-center items-center cursor-pointer">
                View
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
