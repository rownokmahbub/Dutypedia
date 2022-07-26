import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import ListView from "./ListView";

export const Views = [
  {
    title: "I will make custom graphics for your blog...",
    price: "500",
    order: "10",
    author: "Omar Ekram",
    status: "/Assets/images/feed/verified.svg",
    status2: "/Assets/images/feed/verifydark.svg",
    images: [
      "/Assets/images/feed/ent.jpg",
      "/Assets/images/feed/2.jpg",
      "/Assets/images/feed/3.jpg",
    ],
  },
  {
    title: "I will make custom graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "/Assets/images/feed/verified.svg",
    status2: "/Assets/images/feed/verifydark.svg",
    images: [
      "/Assets/images/feed/it.jpg",
      "/Assets/images/feed/2.jpg",
      "/Assets/images/feed/3.jpg",
    ],
  },
  {
    title: "I will make custom graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "/Assets/images/feed/verified.svg",
    status2: "/Assets/images/feed/verifydark.svg",
    images: [
      "/Assets/images/feed/bu.jpg",
      "/Assets/images/feed/5.jpg",
      "/Assets/images/feed/6.jpg",
    ],
  },
  {
    title: "I will make custom graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "/Assets/images/feed/verified.svg",
    status2: "/Assets/images/feed/verifydark.svg",
    images: [
      "/Assets/images/feed/bs.jpg",
      "/Assets/images/feed/7.jpg",
      "/Assets/images/feed/5.jpg",
    ],
  },
  {
    title: "I will make custom graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "/Assets/images/feed/verified.svg",
    status2: "/Assets/images/feed/verifydark.svg",
    images: [
      "/Assets/images/feed/law.jpg",
      "/Assets/images/feed/2.jpg",
      "/Assets/images/feed/3.jpg",
    ],
  },
  {
    title: "I will make amr soner bangla graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "/Assets/images/feed/verified.svg",
    status2: "/Assets/images/feed/verifydark.svg",
    images: [
      "/Assets/images/feed/salon.jpg",
      "/Assets/images/feed/2.jpg",
      "/Assets/images/feed/3.jpg",
    ],
  },
  {
    title: "I will make amr soner bangla graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "/Assets/images/feed/verified.svg",
    status2: "/Assets/images/feed/verifydark.svg",
    images: [
      "/Assets/images/feed/salon2.jpg",
      "/Assets/images/feed/6.jpg",
      "/Assets/images/feed/7.jpg",
    ],
  },
  {
    title: "I will make amr soner bangla graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "/Assets/images/feed/verified.svg",
    status2: "/Assets/images/feed/verifydark.svg",
    images: [
      "/Assets/images/feed/lb-1.jpg",
      "/Assets/images/feed/5.jpg",
      "/Assets/images/feed/7.jpg",
    ],
  },
  {
    title: "I will make amr soner bangla graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "/Assets/images/feed/verified.svg",
    status2: "/Assets/images/feed/verifydark.svg",
    images: [
      "/Assets/images/feed/music.jpg",
      "/Assets/images/feed/6.jpg",
      "/Assets/images/feed/5.jpg",
    ],
  },
  {
    title: "I will make amr soner bangla graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "/Assets/images/feed/verified.svg",
    status2: "/Assets/images/feed/verifydark.svg",
    images: [
      "/Assets/images/feed/5.jpg",
      "/Assets/images/feed/6.jpg",
      "/Assets/images/feed/7.jpg",
    ],
  },
];
const RecentView = ({ title }) => {
  return (
    <div className="pb-8 pt-16 ">
      <div className="flex flex-col sm:flex-row  sm:justify-between items-center pb-8">
        <h1 className="text-xl font-semibold dark:text-white">{title}</h1>
        <Link href="/services">
        
          <a className="flex gap-2 cursor-pointer items-center dark:text-white">
            <span>View all</span> <BsChevronRight className="text-primary" />
          </a>
        </Link>
      </div>
      <ListView views={Views} />
    </div>
  );
};

export default RecentView;
