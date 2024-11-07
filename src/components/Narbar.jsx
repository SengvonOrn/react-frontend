import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";
const icon = "../src/assets/image/Icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 ">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={icon}
              alt="logo"
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238]">NEXTCENT</span>
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                key={path}
                spy={true}
                smooth={true}
                sffset={-100}
                className="block text-base  text-gray-900 hover:text-blue-600 cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            <a href="/" className="hidden lg:flex  items-center text-green-600">
              Loin
            </a>
            <button className="bg-green text-white py-2 px-4 transition-all duration-300n rounded hover:bg-neutral-300">
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:text-neutral-500"
            >
              {isOpen ? (
                <FaXmark className="h-6 w-6 text-neutral-600" />
              ) : (
                <FaBars className="h-6 w-6 text-neutral-600" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-green  ${
            isOpen ? "block fixed top-0 left-0 right-0 " : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              spy={true}
              smooth={true}
              sffset={-100}
              className="block text-bas text-white hover:text-blue-600 first:font-medium cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
