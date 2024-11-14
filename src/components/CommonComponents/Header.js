"use client";

import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
        ${
          scrolled
            ? "bg-white shadow-lg"
            : 'header-linear-bg'
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 w-[100%]">
          {/* Logo */}
          <div className="text-xl font-bold">
            <img
              src="/HW Red logo - Main Logo.svg"
              alt="HW Logo"
              className="h-10"
            />
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
      </header>
    </>
  );
};

export default Header;
