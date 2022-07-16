import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";

const DropdownMenu = ({ title, menuItems, isGroupHovered }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (menuItems.some((item) => item.href == router.pathname)) {
      setIsOpen(true);
    }
  }, [router.pathname]);

  useEffect(() => {
    if (!isGroupHovered) {
      setIsOpen(false);
    }
  }, [isGroupHovered]);
  return (
    <>
      <div className="px-2">
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          className="w-full group hover:bg-primary hover:!text-white h-full rounded-md cursor-pointer flex items-center my-1 justify-between"
        >
          <span className="">{title}</span>
          <div className="flex items-center h-full mr-2">
            <motion.span
              className={`text-xl ${!isGroupHovered ? "hidden" : ""}`}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
            >
              <FiChevronRight />
            </motion.span>
          </div>
        </motion.div>
      </div>
      <motion.div
        key="content"
        initial={false}
        className="overflow-hidden flex flex-col"
        animate={{ height: isOpen ? "auto" : "0" }}
        transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {menuItems.map((item) => (
          <Link key={item.title} href={item.link}>
            <a className="hidden lg:flex w-full pl-[70px] justify-center lg:justify-start items-center text-lg rounded-lg hover:text-primary p-2">
              <span className=" text-sm hidden lg:block lg:line-clamp-1">
                {item.title}
              </span>
            </a>
          </Link>
        ))}
      </motion.div>
    </>
  );
};

export default DropdownMenu;
