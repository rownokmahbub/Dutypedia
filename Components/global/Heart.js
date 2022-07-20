import { useState } from "react";
import { IoMdHeartEmpty,IoMdHeart } from "react-icons/io";

const Heart = ({ liked }) => {
  const [isHover, setIsHover] = useState(false);
  const Icon = isHover || liked ? IoMdHeart : IoMdHeartEmpty;
  return (
    <div
      className=" w-12 h-10 border border-[#707070] flex justify-center items-center cursor-pointer rounded-[2px] "
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Icon
        className={`${isHover || liked ? "text-[#eb8592]" : "text-gray-700"} text-[24px]`}
      />
    </div>
  );
};

export default Heart;
