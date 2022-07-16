import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import ListView from "./ListView";

export const Views = [
  {
    title: "I will make custom graphics for your blog...",
    price: "500",
    order: "10",
    author: "Omar Ekram",
    status: "Verified",
    images: [
      "/Assets/images/feed/5.jpg",
      "/Assets/images/feed/2.jpg",
      "/Assets/images/feed/3.jpg",
    ],
  },
  {
    title: "I will make custom graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "Verified",
    images: [
      "/Assets/images/feed/6.jpg",
      "/Assets/images/feed/2.jpg",
      "/Assets/images/feed/3.jpg",
    ],
  },
  {
    title: "I will make custom graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "Verified",
    images: [
      "/Assets/images/feed/7.jpg",
      "/Assets/images/feed/5.jpg",
      "/Assets/images/feed/6.jpg",
    ],
  },
  {
    title: "I will make custom graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "Verified",
    images: [
      "/Assets/images/feed/6.jpg",
      "/Assets/images/feed/7.jpg",
      "/Assets/images/feed/5.jpg",
    ],
  },
  {
    title: "I will make custom graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "Verified",
    images: [
      "/Assets/images/feed/7.jpg",
      "/Assets/images/feed/2.jpg",
      "/Assets/images/feed/3.jpg",
    ],
  },
  {
    title: "I will make amr soner bangla graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "Verified",
    images: [
      "/Assets/images/feed/6.jpg",
      "/Assets/images/feed/2.jpg",
      "/Assets/images/feed/3.jpg",
    ],
  },
  {
    title: "I will make amr soner bangla graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "Verified",
    images: [
      "/Assets/images/feed/5.jpg",
      "/Assets/images/feed/6.jpg",
      "/Assets/images/feed/7.jpg",
    ],
  },
  {
    title: "I will make amr soner bangla graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "Verified",
    images: [
      "/Assets/images/feed/6.jpg",
      "/Assets/images/feed/5.jpg",
      "/Assets/images/feed/7.jpg",
    ],
  },
  {
    title: "I will make amr soner bangla graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "Verified",
    images: [
      "/Assets/images/feed/7.jpg",
      "/Assets/images/feed/6.jpg",
      "/Assets/images/feed/5.jpg",
    ],
  },
  {
    title: "I will make amr soner bangla graphics for your blog...",
    price: "500",
    order: "10",
    author: "John Doe",
    status: "Verified",
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
        <h1 className="text-xl font-semibold">{title}</h1>
        <Link href="/services">
        
          <a className="flex gap-2 cursor-pointer items-center ">
            <span>View all</span> <BsChevronRight className="text-primary" />
          </a>
        </Link>
      </div>
      <ListView views={Views} />
    </div>
  );
};

export default RecentView;
