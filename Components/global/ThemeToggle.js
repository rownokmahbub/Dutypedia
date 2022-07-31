import { ThemeContext } from "@lib/themeContext";
import { useContext } from "react";
import { BiSun } from "react-icons/bi";
import { RiMoonClearFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={theme}
        className=""
      >
        {theme === "dark" ? (
          <BiSun
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-white text-2xl cursor-pointer"
          />
        ) : (
          <RiMoonClearFill
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-500 text-2xl cursor-pointer"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggle;
