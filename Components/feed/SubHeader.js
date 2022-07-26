import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick/lib/slider";

const Slides = [
  {
    id: 1,
    title: "Mobile design",
  },
  {
    id: 2,
    title: "Graphics",
  },
  {
    id: 3,
    title: "cooking",
  },
  {
    id: 4,
    title: "rent",
  },
  {
    id: 5,
    title: "Machanic",
  },
  {
    id: 6,
    title: "Electrician",
  },
  {
    id: 7,
    title: "Web",
  },
];
const SubHeader = () => {
  const [mainSlider, setMainSlider] = useState();
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = Slides?.length || 1;

  const goNext = () => {
    mainSlider?.slickNext();
  };
  const goPrev = () => {
    mainSlider?.slickPrev();
  };
  const mainSliderSettings = {
    arrows: false,
    speed: 300,
    infinity: true,
    autoplaySpeed: 3000,
    dots: false,
    slidesToShow: totalSlides > 6 ? 6 : totalSlides,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
    cssEase: "linear",
    beforeChange: (current, next) => setCurrentSlide(next + 1),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: totalSlides > 4 ? 4 : totalSlides,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: totalSlides > 3 ? 3 : totalSlides,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: totalSlides > 2 ? 2 : totalSlides,
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
    <div className="bg-[#fafafa] dark:bg-[#272727] max-w-screen-md mx-auto relative hidden sm:block">
      <span
        onClick={goNext}
        className="text-2xl text-gray-400 absolute -right-4 cursor-pointer top-1/2 -translate-y-1/2"
      >
        <BiChevronRight />
      </span>
      <span
        onClick={goPrev}
        className="text-2xl text-gray-400 absolute -left-4 cursor-pointer top-1/2 -translate-y-1/2"
      >
        <BiChevronLeft />
      </span>
      <Slider ref={(slider1) => setMainSlider(slider1)} {...mainSliderSettings}>
        <div className="">
          <p className="bg-[#eb8592] text-white w-max text-center px-2 py-1 rounded-lg hover:text-white cursor-pointer mx-auto">
            All
          </p>
        </div>
        {Slides.map((slide, i) => (
          <div key={i} className="w-full flex justify-center items-center">
            <p className="hover:bg-[#eb8592] dark:text-white text-center px-2 py-1 rounded-lg hover:text-white cursor-pointer w-full">
              {slide.title}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SubHeader;
