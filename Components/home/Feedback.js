import Image from "next/image";

const FeedbackData = [
  {
    id: 1,
    image: "/Assets/images/feedback/1.jpg",
    author: "Lisa",
    category: "Beautician",
    heading: "Lorem ipsum dolor sit amet, consetetur",
  },
  {
    id: 2,
    image: "/Assets/images/feedback/2.jpg",
    author: "Lisa",
    category: "Beautician",
    heading: "Lorem ipsum dolor sit amet, consetetur",
  },
  {
    id: 3,
    image: "/Assets/images/feedback/3.jpg",
    author: "Lisa",
    category: "Beautician",
    heading: "Lorem ipsum dolor sit amet, consetetur",
  },
  {
    id: 4,
    image: "/Assets/images/feedback/4.jpg",
    author: "Lisa",
    category: "Beautician",
    heading: "Lorem ipsum dolor sit amet, consetetur",
  },
];
const Feedback = () => {
  return (
    <div className="bg-white dark:bg-[#272727]">
      <div className="container mx-auto max-w-screen-2xl py-16">
        <div className="text-center mx-auto max-w-sm space-y-4">
          <h4 className="text-3xl font-semibold dark:text-white">Seller Feedback</h4>
          <p className="text-gray-500 text-sm dark:text-gray-200">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
        </div>
        <div  className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 mx-auto max-w-3xl lg:max-w-4xl">
          {FeedbackData.map((feedback,i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="relative">
                <span className="w-6 aspect-square flex justify-center items-center border border-primary rounded-full bg-white shadow-md absolute bottom-0 right-0 z-10 translate-x-1/3 translate-y-1/3">
                  <img src="/Assets/icon/logo_short.svg" />
                </span>
                <div className="w-24 flex-shrink-0 aspect-[167/176] relative rounded-md overflow-hidden">
                  <Image src={feedback.image} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-sm text-gray-500 dark:text-white font-light line-clamp-1">{`${feedback.author} | Category : ${feedback.category}`}</p>
                <h1 className="text-xl dark:text-gray-200 font-semibold line-clamp-2">
                  {feedback.heading}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
