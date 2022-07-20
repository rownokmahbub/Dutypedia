import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const Heart = ({ liked }) => {
  const [isHover, setIsHover] = useState(false);
  const Icon = isHover || liked ? BsHeartFill : BsHeart;
  return (
    <div
      className="w-max cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Icon
        className={`${isHover || liked ? "text-red-500" : "text-gray-700"}`}
      />
    </div>
  );
};

export default Heart;
