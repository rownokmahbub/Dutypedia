import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

const AccordionFilter = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="overflow-hidden">
      <div
        className={`flex justify-between items-center cursor-pointer text-gray-600`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <HiOutlineChevronDown
          className={`duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      <motion.div
        key="content"
        className="overflow-hidden"
        animate={{ height: isOpen ? "auto" : "0" }}
        transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AccordionFilter;
