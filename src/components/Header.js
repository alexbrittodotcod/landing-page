import "../styles/globals.scss";
import "../styles/landing-page.scss";
import Image from "next/image";
import bannerGif from "../../public/banner-img.gif";

const Header = () => {
  return (
    <>
      <header className="py-[1rem] sticky top-0 bg-[url('/header-bg.svg')] header-linear-bg z-[999]">
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

      <div className="avenir-regular bg-[url('/header-bg.svg')] header-linear-bg">
        {/* Banner */}
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 w-[100%] gap-[1.688rem]">
          <div className="flex flex-col py-20">
            <div className="flex flex-row gap-[4px]">
              <img src="/red-stars.svg" className="w-[1.25rem] h-[1.25rem]" />
              <div className="text-[14px] text-theme-color font-extrabold leading-[21px] text-center">
                Elevate Your Hiring Experience
              </div>
            </div>

            <div className="text-[2.5rem] text-[#493438] font-extrabold leading-[3.5rem] text-left xl:whitespace-normal whitespace-nowrap pt-[8px]">
              Supercharge Your Hiring with
              <br />
              <span className="text-theme-color">AI-Driven</span> Solutions
            </div>

            <div className="pt-5 text-[1.25rem] leading-[1.9375rem] text-left text-[#4B5162]">
              Unlock hiring efficiency with Hirewalks. Find top candidates
              faster and build stronger teams effortlessly.
            </div>

            <div className="flex gap-5 pt-[1.875rem]">
              <button className="w-48 h-12 py-2 px-4 rounded-lg bg-theme-color text-white text-sm font-bold flex items-center justify-center gap-2">
                Request a Demo
                <img src="/white-stars.svg" alt="Stars" />
              </button>

              <button className="text-sm font-bold text-theme-color border border-theme-color rounded-lg px-[2.063rem]">
                Signup Now
              </button>
            </div>
          </div>

          {/* Banner image */}
          <div className="md:hidden">
            <Image src={bannerGif} alt="banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
