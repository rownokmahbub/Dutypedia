import { GlobalContext } from "@lib/globalContext";
import { Fragment, useContext, useEffect } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import useMediaQuery from "@lib/hooks/useMediaQuery";
import ActiveLink from "./ActiveLink";
import ThemeToggle from "./ThemeToggle";

const MainNavSidebar = () => {
  const isLg = useMediaQuery("(min-width: 1024px)");
  const { uiDispatch, useUi } = useContext(GlobalContext);

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
    const unsubs = async () => {
      if (isLg) {
        uiDispatch({ type: "CLOSE_SIDEBAR" });
      }
    };
    unsubs();
  }, [isLg]);
  return (
    <Transition.Root as={Fragment} show={useUi.displaySidebar ? true : false}>
      <Dialog
        onClose={() => uiDispatch({ type: "CLOSE_SIDEBAR" })}
        as="div"
        className="fixed inset-0 w-full h-full z-50"
      >
        <Transition.Child
          enter="transition-opacity ease-in-out-expo duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in-out-expo duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          as={Fragment}
        >
          <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <Transition.Child
          enter="transition ease-in-out-expo duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out-expo duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          as={Fragment}
        >
          <div className="right-0 shadow-xl absolute top-0 h-full w-72 bg-white dark:bg-bg-200">
            <div className="px-5 pt-4 bg-white dark:bg-bg-200 absolute top-0 left-0">
              <IoMdClose
                onClick={() => uiDispatch({ type: "CLOSE_SIDEBAR" })}
                className="text-2xl cursor-pointer"
              />

            </div>
            <div className="px-5 pt-4 bg-white dark:bg-bg-200 absolute top-0 right-0">
            <ThemeToggle />
            </div>
           
            <div className="w-full h-full flex flex-col pt-16 space-y-6 pl-16">
              {NavLinks.map((item) => (
                <Fragment key={item.name}>
                  {item.action ? (
                    <a
                      onClick={item.action}
                      className={`flex mx-4 cursor-pointer items-center gap-2`}
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
                          className={`flex items-center gap-2 focus-visible:outline-none`}
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
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default MainNavSidebar;
