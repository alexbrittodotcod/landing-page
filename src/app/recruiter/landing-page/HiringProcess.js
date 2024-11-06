"use client";

import { useEffect, useState } from "react";

// components/Footer.js
const HiringProcess = () => {
  return (
    <div className="grid place-items-center gap-[3.75rem]">
      {/* Header */}
      <div className="flex flex-col">
        <div className="text-white font-extrabold text-[2rem] pb-[4px] leading-[3.125rem]">
          Let us simplifying the{" "}
          <span className="text-theme-color">Hiring process</span>
        </div>

        <div className="text-white text-[1rem] leading-[1.545rem]">
          We make hiring easy with just a few simple steps. Create an account,
          post
          <br /> your job, and connect with top candidates effortlessly.
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-[2.5rem] max-w-7xl">
        {/* STEP 1 */}
        <div
          className="bg-[#212126] rounded-[1rem] p-[1.25rem] w-[23.563rem] cursor-pointer step-1"
          style={{
            boxShadow:
              "0px 0px 0px 1px #FFFFFF06 inset, 0px 1px 0px 0px #FFFFFF06 inset",
          }}
        >
          <div className="flex flex-row items-start justify-between">
            <div className="bg-[#131316] rounded-[1rem] px-[10px] py-[2px] text-xs font-normal leading-[1.159rem] text-white">
              Step - 1
            </div>

            <img
              src="/onboard.svg"
              alt="onboard"
              className="step-1-img w-[16rem] h-[11rem]"
            />
            <img
              src="/onboard-red.svg"
              alt="onboard"
              className="step-1-red-img w-[16rem] h-[11rem]"
            />
          </div>

          <div className="flex flex-col gap-[8px] items-start mt-[-25px]">
            <div className="text-base font-extrabold leading-[1.562rem] text-white">
              Create a Account
            </div>
            <div className=" text-sm font-normal leading-[1.352rem] text-[#9394A1] text-left">
              With your email id or phone number create an account to hirewalks
              under 15 mins
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div
          className="bg-[#212126] rounded-[1rem] p-[1.25rem] w-[23.563rem] cursor-pointer step-2"
          style={{
            boxShadow:
              "0px 0px 0px 1px #FFFFFF06 inset, 0px 1px 0px 0px #FFFFFF06 inset",
          }}
        >
          <div className="flex flex-row items-start justify-between">
            <div className="bg-[#131316] rounded-[1rem] px-[10px] py-[2px] text-xs font-normal leading-[1.159rem] text-white">
              Step - 2
            </div>

            <img
              src="/post-job.svg"
              alt="postJob"
              className="step-2-img w-[16rem] h-[13rem]"
            />
            <img
              src="/post-job-red.svg"
              alt="postJob"
              className="step-2-red-img w-[16rem] h-[13rem]"
            />
          </div>

          <div className="flex flex-col gap-[8px] items-start mt-[-40px]">
            <div className="text-base font-extrabold leading-[1.562rem] text-white">
              Post your Job
            </div>
            <div className=" text-sm font-normal leading-[1.352rem] text-[#9394A1] text-left">
              The job post must have a title, description, location &
              experience. After that, you can post directly.
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div
          className="bg-[#212126] rounded-[1rem] p-[1.25rem] w-[23.563rem] cursor-pointer step-3"
          style={{
            boxShadow:
              "0px 0px 0px 1px #FFFFFF06 inset, 0px 1px 0px 0px #FFFFFF06 inset",
          }}
        >
          <div className="flex flex-row items-start justify-between">
            <div className="bg-[#131316] rounded-[1rem] px-[10px] py-[2px] text-xs font-normal leading-[1.159rem] text-white absolute">
              Step - 3
            </div>

            <img src="/ats-match.svg" alt="ats-match" className="step-3-img" />
            <img
              src="/ats-match-red.svg"
              alt="ats-match"
              className="step-3-red-img"
            />
          </div>

          <div className="flex flex-col gap-[8px] items-start mt-[-40px]">
            <div className="text-base font-extrabold leading-[1.562rem] text-white">
              Contact and Hire
            </div>
            <div className=" text-sm font-normal leading-[1.352rem] text-[#9394A1] text-left">
              Directly call or chat with the candidates applied. Interview and
              hire.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringProcess;
