import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

const Accordion = ({
  title,
  color,
  children,
  noBorder,
  textSize = "text-xl",
  titlePadding = "py-3 px-4",
  contentBg = "bg-transparent",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`border dark:border-[#515150] rounded-lg overflow-hidden ${
        noBorder && isOpen && "!border-0"
      }`}
    >
      <div
        className={`flex justify-between items-center cursor-pointer  ${titlePadding} ${color} ${textSize}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <HiOutlineChevronDown
          className={`duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      <motion.div
        initial={false}
        key="content"
        className={`overflow-hidden px-4 ${contentBg}`}
        animate={{ height: isOpen ? "auto" : "0" }}
        transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Accordion;
