import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Collapse from "./Collapse";

const FooterLinks = {
  Categories: [
    {
      title: "Mechanicians",
      links: "/",
    },
    {
      title: "Doctors",
      links: "/",
    },
    {
      title: "Coach and Trainer",
      links: "/",
    },
    {
      title: "House Workers",
      links: "/",
    },
    {
      title: "Teachers",
      links: "/",
    },
    {
      title: "Builder",
      links: "/",
    },
    {
      title: "Labor and Helper",
      links: "/",
    },
    {
      title: "Cocker",
      links: "/",
    },
  ],
  About: [
    {
      title: "Careers",
      links: "/",
    },
    {
      title: "Press & News",
      links: "/",
    },
    {
      title: "Patnerrship",
      links: "/",
    },
    {
      title: "Privacy Policy",
      links: "/",
    },
    {
      title: "Terms & Conditions",
      links: "/",
    },
  ],
  Support: [
    {
      title: "Help & Support",
      links: "/",
    },
    {
      title: "Trust & Safety",
      links: "/",
    },
    {
      title: "Selling on Dutypedia ",
      links: "/",
    },
  ],
  Social: [
    {
      title: "Facebook",
      links: "https://www.facebook.com/dutypedia",
      icon: <FaFacebookF />,
      color: "text-[#3b5998]",
    },
    {
      title: "Instagram",
      links: "https://www.instagram.com/dutypedia",
      icon: <FaInstagram />,
      color: "text-[#e1306c]",
    },
    {
      title: "Twitter",
      links: "https://twitter.com/dutypedia",
      icon: <FaTwitter />,
      color: "text-[#1da1f2]",
    },
    {
      title: "Linkedin",
      links: "https://www.linkedin.com/company/dutypedia",
      icon: <FaLinkedinIn />,
      color: "text-[#0077b5]",
    },
  ],
};

const Footer = () => {
  return (
    <div className="bg-white dark:bg-[#272727] dark:text-white">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="md:border-t py-16">
          {/* Mobile version */}
          <div className="grid gap-2 md:hidden">
            <Collapse title="Categories">
              <div className="mt-2 space-y-2">
                {FooterLinks.Categories.map((item, idx) => (
                  <Link key={idx} href={item.links}>
                    <a className="text-gray-600 block dark:!text-white transition-colors duration-300 hover:text-primary">
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
            </Collapse>
            <Collapse title="About">
              <div className="mt-2 space-y-2 dark:text-white">
                {FooterLinks.About.map((item, idx) => (
                  <Link key={idx} href={item.links}>
                    <a className="text-gray-600 dark:text-white block transition-colors duration-300 hover:text-primary">
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
            </Collapse>
            <Collapse title="Support">
              <div className="mt-2 space-y-2">
                {FooterLinks.Support.map((item, idx) => (
                  <Link key={idx} href={item.links}>
                    <a className="text-gray-600 dark:text-white block transition-colors duration-300 hover:text-primary">
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
            </Collapse>
            <Collapse title="Contact Us">
              <>
                <div className="mt-2 space-y-2">
                  <p className="text-gray-600 transition-colors duration-300 hover:text-primary">
                    Phone no: +88017888888
                  </p>
                  <p className="text-gray-600 transition-colors duration-300 hover:text-primary">
                    Email: email@gmail.com
                  </p>
                  <p className="text-gray-600 transition-colors duration-300 hover:text-primary">
                    Location: Narayanganj, Dhaka
                  </p>
                </div>
                <div className="flex items-center pt-4 space-x-4 sm:mt-0">
                  {FooterLinks.Social.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.links}
                      className={`${item.color} w-8 aspect-square bg-white rounded-full shadow-md flex justify-center items-center`}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </>
            </Collapse>
          </div>

          {/* Desktop version */}

          <div className="grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 hidden md:grid">
            <div>
              <p className="font-semibold uppercase tracking-wide text-gray-800 dark:text-white">
                Categories
              </p>
              <div className="mt-2 space-y-2">
                {FooterLinks.Categories.map((item, idx) => (
                  <Link key={idx} href={item.links}>
                    <a className="text-gray-600 block transition-colors duration-300 hover:text-primary text-sm dark:text-white">
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wide text-gray-800 dark:text-white">
                About
              </p>
              <div className="mt-2 space-y-2">
                {FooterLinks.About.map((item, idx) => (
                  <Link key={idx} href={item.links}>
                    <a className="text-gray-600 block transition-colors duration-300 hover:text-primary text-sm dark:text-white">
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wide text-gray-800 dark:text-white">
                Support
              </p>
              <div className="mt-2 space-y-2">
                {FooterLinks.Support.map((item, idx) => (
                  <Link key={idx} href={item.links}>
                    <a className="text-gray-600 block transition-colors duration-300 hover:text-primary text-sm dark:text-white">
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-wide text-gray-800 dark:text-white">
                Contact Us
              </p>
              <div className="mt-2 space-y-2 text-sm dark:text-white">
                <p className="text-gray-600 transition-colors duration-300 hover:text-primary dark:text-white">
                  Phone no: +88017888888
                </p>
                <p className="text-gray-600 transition-colors duration-300 hover:text-primary dark:text-white">
                  Email: email@gmail.com
                </p>
                <p className="text-gray-600 transition-colors duration-300 hover:text-primary dark:text-white">
                  Location: Narayanganj, Dhaka
                </p>
              </div>

              <div className="flex items-center pt-4 space-x-4 sm:mt-0">
                {FooterLinks.Social.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.links}
                    className={`${item.color} w-8 aspect-square bg-white rounded-full shadow-md flex justify-center items-center`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between py-5 border-t sm:flex-row">
          <img className="w-32 dark:hidden" src="/Assets/icon/logo_accent.svg" />
          <img className="w-32 hidden dark:block" src="/Assets/images/logo-dark.svg" />
          <div className="text-sm text-gray-600 dark:text-gray-400">
            All right reserved © {new Date().getFullYear()}{" "}
            <Link href="/">
              <a className="link">Dutypedia</a>
            </Link>
            
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Footer;
