import Image from "next/image";
import Slider from "react-slick/lib/slider";
import { useEffect, useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
const Categories = [
  {
    id: 1,
    name: "Builder Service",
    image: "/Assets/images/feed/bu.jpg",
  },
  {
    id: 2,
    name: "Business Service",
    image: "/Assets/images/feed/bs.jpg",
  },
  {
    id: 3,
    name: "Cooker Service",
    image: "/Assets/images/feed/ck.jpg",
  },
  {
    id: 4,
    name: "Electrician & Mechanician",
    image: "/Assets/images/feed/en-1.jpg",
  },
  {
    id: 5,
    name: "Entertainment",
    image: "/Assets/images/feed/ent-1.png",
  },
  {
    id: 6,
    name: "House Keeper",
    image: "/Assets/images/feed/hc-1.jpg",
  },
  {
    id: 7,
    name: "It & Technology",
    image: "/Assets/images/feed/it.jpg",
  },
  {
    id: 8,
    name: "Lawyer Service",
    image: "/Assets/images/feed/law.jpg",
  },
  {
    id: 9,
    name: "Labor",
    image: "/Assets/images/feed/lb-1.jpg",
  },
  {
    id: 10,
    name: "Music and Audio Service",
    image: "/Assets/images/feed/music.jpg",
  },

  {
    id: 11,
    name: "Painter",
    image: "/Assets/images/feed/ppt.jpg",
  },
  {
    id: 12,
    name: "Parlor & Saloon",
    image: "/Assets/images/feed/salon2.jpg",
  },


];
const Category = () => {
  const totalSlides = Categories?.length || 1;
  const [mainSlider, setMainSlider] = useState();
  const [currentSlide, setCurrentSlide] = useState(1);

  const goNext = () => {
    if (currentSlide + 6 > totalSlides) {
      mainSlider?.slickGoTo(0);
    } else {
      mainSlider?.slickNext();
    }
  };
  const goPrev = () => {
    mainSlider?.slickPrev();
  };

  const sliderSettings = {
    arrows: false,
    infinite: false,
    gutter: 30,
    dots: false,
    speed: 500,
    slidesToShow: totalSlides > 8 ? 8 : totalSlides,
    slidesToScroll: totalSlides > 8 ? 8 : totalSlides,
    initialSlide: 0,
    swipeToSlide: true,
    focusOnSelect: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    beforeChange: (current, next) => setCurrentSlide(next + 1),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: totalSlides > 6 ? 6 : totalSlides,
          slidesToScroll: totalSlides > 6 ? 6 : totalSlides,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: totalSlides > 5 ? 5 : totalSlides,
          slidesToScroll: totalSlides > 5 ? 5 : totalSlides,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: totalSlides > 4 ? 4 : totalSlides,
          slidesToScroll: totalSlides > 4 ? 4 : totalSlides,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: totalSlides > 3 ? 3 : totalSlides,
          slidesToScroll: totalSlides > 3 ? 3 : totalSlides,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: totalSlides > 3 ? 3 : totalSlides,
          slidesToScroll: totalSlides > 3 ? 3 : totalSlides,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: totalSlides > 3 ? 3 : totalSlides,
          slidesToScroll: totalSlides > 3 ? 3 : totalSlides,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: totalSlides > 3 ? 3 : totalSlides,
          slidesToScroll: totalSlides > 3 ? 3 : totalSlides,
        },
      },
    ],
  };

  useEffect(() => {
    console.log(mainSlider);
  }, [mainSlider]);
  return (
    <div className="container mx-auto max-w-[1920px] pt-10 pb-4">
      {/* <div className="max-w-sm space-y-4 px-4">
        <h4 className="text-xl font-semibold">Category</h4>
      </div> */}
      <div className="cat-slider mt-8 relative">
        <span
          onClick={goNext}
          className="w-8 aspect-square border border-gray-100 shadow-sm rounded-full bg-white/70 right-4 top-1/2 flex justify-center items-center absolute z-10 cursor-pointer -translate-y-1/2 backdrop-blur-md backdrop-saturate-200"
        >
          <HiOutlineChevronRight />
        </span>
        <span
          onClick={goPrev}
          className="w-8 aspect-square border border-gray-100 shadow-sm rounded-full bg-white/70 left-4 top-1/2 flex justify-center items-center absolute z-10 cursor-pointer -translate-y-1/2 backdrop-blur-md backdrop-saturate-200"
        >
          <HiOutlineChevronLeft />
        </span>
        <Slider ref={(slider1) => setMainSlider(slider1)} {...sliderSettings}>
          {Categories.map((category, i) => (
            <div
              key={i}
              className=" w-full cursor-pointer group aspect-[5/8] rounded-lg relative overflow-hidden"
            >
              <div className="inset-0 absolute w-full h-full group-hover:scale-110 ease-in-out duration-300">
                <Image src={category.image} layout="fill" objectFit="cover" />
              </div>
              <span className="absolute inset-0 w-full h-full bg-gray-800/50" />
              <h4 className="absolute bottom-0 p-4 font-light text-white text-[12px] md:text-[16px]">
                {category.name} 
              </h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
