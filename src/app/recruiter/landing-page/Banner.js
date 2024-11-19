//import "./globals.css";

import Image from "next/image";
import bannerGif from "../../../../public/banner-img.gif";

// components/Body.js
const Banner = () => {
  return (
    <div className="avenir-regular bg-[url('/header-bg.svg')] header-linear-bg">
      {/* 1. Recruiter Banner */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 w-[100%] gap-[1.688rem]">
        <div className="flex flex-col py-20">
          <div className="flex flex-row gap-[4px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}red-stars.svg`}
              alt="Clip Path"
              width={20}
              height={20}
              priority
              style={{ width: "auto", height: "auto" }}
            />
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
            Unlock hiring efficiency with Hirewalks. Find top candidates faster
            and build stronger teams effortlessly.
          </div>

          <div className="flex gap-5 pt-[1.875rem]">
            <button className="w-48 h-12 py-2 px-4 rounded-lg bg-theme-color text-white text-sm font-bold flex items-center justify-center gap-2">
              Request a Demo
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}white-stars.svg`}
                alt="Clip Path"
                width={20}
                height={20}
                priority
                style={{ width: "auto", height: "auto" }}
              />
            </button>

            <button className="text-sm font-bold text-theme-color border border-theme-color rounded-lg px-[2.063rem]">
              Signup Now
            </button>
          </div>
        </div>

        {/* Banner image */}
        <div className="md:hidden">
          <Image
            src={bannerGif}
            alt="Banner"
            width={660}
            height={350}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
