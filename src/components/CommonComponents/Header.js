"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(0);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`py-[1rem] sticky top-0 z-[999] transition-all duration-300 
        ${scrolled ? "bg-white shadow-lg" : "header-linear-bg"}`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 w-[100%]">
          <div className="flex gap-[10px]">
            {/* Menu button */}
            <button
              className="flex-col justify-center items-center hidden lg:block"
              onClick={handleClick}
            >
              <span
                className={`bg-theme-color transition-all duration-300 block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-theme-color transition-all duration-300 block h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-theme-color transition-all duration-300 block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </button>

            {/* Logo */}
            <div className="text-xl font-bold xs:hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/HW Red logo - Main Logo.svg`}
                alt="HW Logo"
                layout="responsive"
                width={133} // Set the width as a reference
                height={40} // Set the height as a reference
                priority
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="lg:hidden">
            <ul className="flex space-x-6 text-gray-700">
              <li>
                <a href="#home" className="hover:text-gray-900 transition">
                  Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-900 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-900 transition">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-[24px]">
            <div className="text-theme-color Avenir-800 hover:text-gray-900 cursor-pointer">
              Log in
            </div>

            <button className="bg-theme-color text-white px-[24px] py-[8px] rounded-lg hover:bg-theme-color transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* For small screen */}
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(27,27,27,.9)] rounded-lg backdrop-blur py-32"
          >
            <nav>
              <ul className="flex-col text-white text-[1.5rem]">
                <li>
                  <a href="#home" className="hover:text-gray-900 transition">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-900 transition">
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gray-900 transition"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </header>
    </>
  );
};

export default Header;
