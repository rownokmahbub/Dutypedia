import Image from "next/image";
import Slider from "react-slick/lib/slider";
import { useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
const Categories = [
  {
    id: 1,
    name: "Graphic Designing",
    image: "/Assets/images/categories/1.jpg",
  },
  {
    id: 2,
    name: "Medical",
    image: "/Assets/images/categories/2.jpg",
  },
  {
    id: 3,
    name: "Beautician",
    image: "/Assets/images/categories/3.jpg",
  },
  {
    id: 4,
    name: "Real State",
    image: "/Assets/images/categories/4.jpg",
  },
  {
    id: 5,
    name: "Mechanician",
    image: "/Assets/images/categories/5.jpg",
  },
  
];
const PopularCategory = ({ container = true }) => {
  const totalSlides = Categories?.length || 1;
  const [mainSlider, setMainSlider] = useState();
  const [currentSlide, setCurrentSlide] = useState(1);

  const goNext = () => {
    mainSlider?.slickNext();
  };
  const goPrev = () => {
    mainSlider?.slickPrev();
  };

  const sliderSettings = {
    arrows: false,
    infinite: false,
    centerPadding: "40px",
    dots: false,
    speed: 500,
    slidesToShow: totalSlides > 5 ? 5 : totalSlides,
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
          slidesToShow: totalSlides > 4 ? 4 : totalSlides,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: totalSlides > 3 ? 3 : totalSlides,
        },
      },
    ],
  };
  return (
    <div
      className={`mx-auto max-w-screen-2xl py-8 ${container && "container"}`}
    >
      <div className="text-center mx-auto max-w-sm space-y-4">
        <h4 className="text-3xl font-semibold dark:text-white">Popular Category</h4>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
      </div>
      <div className="p-cat-slider mt-8 relative px-1 lg:px-[83px]">
        <div className="relative w-full h-full">
          <span
            onClick={goNext}
            className="w-8 aspect-square shadow-sm rounded-full bg-white bg-opacity-30 hover:bg-opacity-60 right-8 top-1/2 flex justify-center items-center absolute z-10 cursor-pointer -translate-y-1/2 "
          >
            <HiOutlineChevronRight className="text-white" />
          </span>
          <span
            onClick={goPrev}
            className="w-8 aspect-square shadow-sm rounded-full bg-white bg-opacity-30 hover:bg-opacity-60 left-8 top-1/2 flex justify-center items-center absolute z-10 cursor-pointer -translate-y-1/2"
          >
            <HiOutlineChevronLeft className="text-white" />
          </span>

          <Slider ref={(slider1) => setMainSlider(slider1)} {...sliderSettings}>
            {Categories.map((category, i) => (
              <div
                key={i}
                className=" w-full cursor-pointer group aspect-[228/347]  rounded-xl relative overflow-hidden"
              >
                <div className="inset-0 absolute w-full h-full group-hover:scale-110 ease-in-out duration-300">
                  <Image src={category.image} layout="fill" objectFit="cover" />
                </div>
                <span className="absolute inset-0 w-full h-full bg-primary/30" />
                <h4 className="relative p-4 font-semibold text-white md:text-lg text-[12px]">
                  {category.name}
                </h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
