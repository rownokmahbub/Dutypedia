import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick/lib/slider";

const Slides = [
  {
    id: 1,
    image: "/Assets/images/hero/1.jpg",
  },
  {
    id: 2,
    image: "/Assets/images/hero/2.jpg",
  },
  {
    id: 3,
    image: "/Assets/images/hero/3.jpg",
  },
  {
    id: 4,
    image: "/Assets/images/hero/4.jpg",
  },
  {
    id: 5,
    image: "/Assets/images/hero/2.jpg",
  },
  {
    id: 1,
    image: "/Assets/images/hero/1.jpg",
  },
  {
    id: 2,
    image: "/Assets/images/hero/2.jpg",
  },
  {
    id: 3,
    image: "/Assets/images/hero/3.jpg",
  },
  {
    id: 4,
    image: "/Assets/images/hero/4.jpg",
  },
  {
    id: 5,
    image: "/Assets/images/hero/2.jpg",
  },
];
const Hero = () => {
  const [mainSlider, setMainSlider] = useState();
  const [navSlider, setNavSlider] = useState();
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = Slides?.length || 1;
  const mainSliderSettings = {
    arrows: false,
    fade: true,
    speed: 3000,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
    cssEase: "linear",
  };
  const navSliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    centerMode: true,
    infinite: true,
    pauseOnHover: false,
    centerPadding: "40px",
    dots: false,
    speed: 500,
    slidesToShow: totalSlides > 7 ? 7 : totalSlides,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    focusOnSelect: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    beforeChange: (current, next) => setCurrentSlide(next + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: totalSlides > 5 ? 5 : totalSlides,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: totalSlides > 3 ? 3 : totalSlides,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: totalSlides > 2 ? 2 : totalSlides,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="relative">
        <div className="relative">
          <div className="z-20 absolute inset-0 h-full flex flex-col gap-4 justify-center w-max mx-auto">
            <h1 className="text-white text-4xl font-bold px-3 md:px-0">Make your duty</h1>
            <div className="flex flex-col  gap-4 md:gap-0 md:flex-row items-center md:rounded-md overflow-hidden px-3 md:px-0">
              <div className="flex  items-center h-full rounded overflow-hidden md:rounded-none">
                <input
                  className="text-xs dark:bg-[#272727]  sm:text-base md:w-80 border-r py-6 sm:py-4 md:py-2 px-4 border-0 focus:outline-none"
                  type="text"
                  placeholder="Search your service"
                />
                <div className="h-full pr-4 bg-white dark:bg-[#272727] flex items-center">
                  <img
                    className=" scale-75 px-2"
                    src="/Assets/icon/listalt.svg"
                  />
                  <select
                    className="py-2 text-xs sm:text-base dark:bg-[#272727]  text-gray-400 border-none outline-none h-full active:outline-none focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled selected>
                      All...
                    </option>
                  </select>
                </div>
              </div>
              <a className="px-16 py-0 md:py-1 rounded md:rounded-none h-full bg-primary hover:bg-primary-600 duration-200 cursor-pointer  flex justify-center items-center text-white w-full md:w-auto">
                Search
              </a>
            </div>
          </div>
          <div className="relative">
            <span className="z-10 absolute top-0 left-0 w-full h-[calc(100%-6.5px)] bg-black/30" />
            <Slider
              asNavFor={navSlider}
              ref={(slider1) => setMainSlider(slider1)}
              {...mainSliderSettings}
            >
              {Slides.map((slide, i) => (
                <div
                  key={i}
                  className="w-full h-screen sm:h-auto relative aspect-auto sm:aspect-video lg:aspect-[1920/820] overflow-hidden"
                >
                  <Image src={slide.image} layout="fill" objectFit="cover" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="relative -translate-y-[80%] z-20 hero-slider-nav">
          <span className="inset-0 absolute w-full h-full bg-black/50 blur-xl" />
          <Slider
            asNavFor={mainSlider}
            ref={(slider2) => setNavSlider(slider2)}
            {...navSliderSettings}
          >
            {Slides.map((slide, i) => (
              <div
                key={i}
                className={`shadow-md cursor-pointer w-full relative aspect-video overflow-hidden rounded-md ${
                  currentSlide == i + 1 && "border-2 border-primary"
                }`}
              >
                <Image src={slide.image} layout="fill" objectFit="cover" />
                {currentSlide == i + 1 && (
                  <div className="h-full absolute w-full flex flex-col justify-end">
                    <div className="loader-line" />
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
