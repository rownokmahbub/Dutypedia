import { useViewportScroll } from "framer-motion";
import Link from "next/link";
import { Fragment, useContext, useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import { GlobalContext } from "@lib/globalContext";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const { scrollY } = useViewportScroll();
  const { uiDispatch } = useContext(GlobalContext);

  const NavLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Categories",
      link: "/categories",
    },
    {
      name: "Company",
      link: "/company",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Sign In",
      action: () => {
        uiDispatch({ type: "OPEN_MODAL" });
        uiDispatch({ type: "SET_MODAL_VIEW", view: "LOGIN" });
      },
    },
  ];

  useEffect(() => {
    const update = () => {
      if (scrollY?.current >= 150) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    };
    scrollY.onChange(() => update());
  }, []);
  return (
    <nav className={`z-40 fixed left-0 top-0 w-full`}>
      <div
        className={`w-full dark:bg-bg py-3 duration-300 hidden px-16 h-full lg:flex justify-between items-center ${
          stickyNav
            ? `bg-white/70 dark:bg-bg/70 backdrop-blur-lg backdrop-saturate-150 shadow-sm`
            : `bg-transparent`
        }`}
      >
        <div className="flex items-center gap-8">
          <Link href="/">
            <a>
            <img className="w-24  dark:hidden" src="/Assets/images/logo.svg" />
              <img className="w-24 hidden dark:block" src="/Assets/images/logo-dark.svg" />
            </a>
          </Link>
        </div>

        <div className="font-medium flex items-center justify-center gap-4">
          <div className="flex font-medium">
            {NavLinks.map((item) => (
              <Fragment key={item.name}>
                {item.action ? (
                  <a
                    onClick={item.action}
                    className={`flex mx-4 cursor-pointer justify-center items-center gap-2 ${
                      stickyNav ? "text-black dark:text-white" : "text-white"
                    }`}
                  >
                    {item.icon && item.icon}
                    <span>{item.name}</span>
                  </a>
                ) : (
                  <span className="mx-4">
                    <ActiveLink
                      activeClassName={`duration-300 !font-semibold !text-primary`}
                      href={item.link}
                    >
                      <a
                        className={`flex justify-center items-center gap-2 ${
                          stickyNav ? "text-black dark:text-white" : "text-white"
                        }`}
                      >
                        {item.icon && item.icon}
                        <span>{item.name}</span>
                      </a>
                    </ActiveLink>
                  </span>
                )}
              </Fragment>
            ))}
          </div>
          <Link href="/contact">
            <a className={`btn capitalize btn-primary`}>Get Started</a>
          </Link>
        </div>
      </div>

      <div className="w-full py-3 flex px-4 sm:px-8 h-full lg:hidden justify-between items-center bg-primary dark:bg-bg">
        <div>
          <img className="w-24" src="/Assets/images/logo-dark.svg"  />
        </div>
        <div>
          <FiMenu
            onClick={() => {
              uiDispatch({ type: "OPEN_SIDEBAR" });
            }}
            className="text-white text-xl cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
