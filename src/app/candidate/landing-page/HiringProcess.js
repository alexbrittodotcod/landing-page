"use client";

import {
  AvatarUsingPhone,
  HrResponse,
  JobAlert,
  QuickApply,
  Step1,
  Step3,
} from "@/components/icons/candidate-landing";
import { useEffect, useState } from "react";
import "../../../styles/landing-page.scss";
import { HirewalksIcon } from "@/components/icons/common-icons";
import { motion } from "framer-motion";
import Image from "next/image";

// components/Footer.js
const HiringProcess = () => {
  return (
    <div className="grid place-items-center gap-[3.75rem]">
      {/* Header */}
      <div className="flex flex-col">
        <div className="text-white font-extrabold text-[2rem] pb-[4px] leading-[3.125rem]">
          How to get started with{" "}
          <span className="text-theme-color">Hirewalks</span>
        </div>
        <div className="text-white text-[1rem] leading-[1.545rem]">
          Get onboard with Hirewalks in just 15 minutes and kickstart
          <br /> your job search journey.
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-[2.5rem] max-w-7xl">
        {/* STEP 1 */}
        <div
          className="bg-[#212126] rounded-[1rem] p-[1.25rem] pb-0 w-[23.563rem] cursor-pointer step-1 flex flex-col justify-between xs:w-[17rem]"
          style={{
            boxShadow:
              "0px 0px 0px 1px #FFFFFF06 inset, 0px 1px 0px 0px #FFFFFF06 inset",
          }}
        >
          <div className="flex flex-row items-start justify-between mb-[1.313rem]">
            <div className="bg-[#131316] rounded-[1rem] px-[10px] py-[2px] text-xs font-normal leading-[1.159rem] text-white ml-[-0.625rem]">
              Step - 1
            </div>
          </div>

          <div className="flex flex-col gap-[8px] items-start">
            <div className="text-base font-extrabold leading-[1.562rem] text-white">
              Sign up for a free account
            </div>
            <div className=" text-sm font-normal leading-[1.352rem] text-[#9394A1] text-left">
              Hirewalks is trusted by big and small organizations all over the
              world.
            </div>
          </div>

          <div className="mt-[1.326rem] h-[100%] flex flex-col items-center content-center justify-center relative">
            <Step1 className="h-[15.625rem] xs:w-[14rem]" />

            {/* w-48 h-[2.188rem] */}
            <div className="absolute bottom-[1.181rem]">
              <button className="w-fit py-[0.5rem] px-[1rem] rounded-lg bg-theme-color text-white text-[0.75rem] font-bold flex items-center justify-center">
                Sign up for Free
              </button>
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div
          className="bg-[#212126] rounded-[1rem] p-[1.25rem] pb-0 w-[23.563rem] cursor-pointer step-2 flex flex-col justify-between xs:w-[17rem]"
          style={{
            boxShadow:
              "0px 0px 0px 1px #FFFFFF06 inset, 0px 1px 0px 0px #FFFFFF06 inset",
          }}
        >
          <div className="flex flex-row items-start justify-between mb-[1.313rem]">
            <div className="bg-[#131316] rounded-[1rem] px-[10px] py-[2px] text-xs font-normal leading-[1.159rem] text-white ml-[-0.625rem]">
              Step - 2
            </div>
          </div>

          <div className="flex flex-col gap-[8px] items-start">
            <div className="text-base font-extrabold leading-[1.562rem] text-white">
              Tell us about your skillset
            </div>
            <div className=" text-sm font-normal leading-[1.352rem] text-[#9394A1] text-left">
              Hirewalks is trusted by big and small organizations all over the
              world.
            </div>
          </div>

          <div className="mt-[1.326rem] h-[15.625rem] flex justify-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/candidate-step-2.svg`}
              alt="scanner"
              width={400} // Specify image dimensions
              height={253}
              className="w-[full] h-[15.625rem] xs:!w-[8rem]"
            />
          </div>
        </div>

        {/* STEP 3 */}
        <div
          className="bg-[#212126] rounded-[1rem] p-[1.25rem] pb-0 w-[23.563rem] cursor-pointer step-3 flex flex-col justify-between xs:w-[17rem]"
          style={{
            boxShadow:
              "0px 0px 0px 1px #FFFFFF06 inset, 0px 1px 0px 0px #FFFFFF06 inset",
          }}
        >
          <div className="flex flex-row items-start justify-between mb-[1.313rem]">
            <div className="bg-[#131316] rounded-[1rem] px-[10px] py-[2px] text-xs font-normal leading-[1.159rem] text-white ml-[-0.625rem]">
              Step - 3
            </div>
          </div>

          <div className="flex flex-col gap-[8px] items-start">
            <div className="text-base font-extrabold leading-[1.562rem] text-white">
              Apply for jobs & get hired quickly
            </div>
            <div className="text-sm font-normal leading-[1.352rem] text-[#9394A1] text-left">
              Once your profile is updated, you&apos;ll be visible to employers
              in our network & you can apply for jobs.
            </div>
          </div>

          <div className="mt-[1.326rem] h-[100%] flex flex-col items-center content-center justify-center relative">
            <Step3 className="h-[15.625rem] xs:w-[8rem]" />

            {/* w-48 h-[2.188rem] */}
            <div className="absolute bottom-[1.5rem] left-[1.313rem]">
              <button className="w-fit py-[0.5rem] px-[1rem] rounded-lg bg-theme-color text-white text-[0.75rem] font-bold flex items-center justify-center">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Download Hirewalks row */}
      <div className="max-w-7xl px-[2rem]" id="download-app">
        <div className="download-card grid grid-cols-3 xl:grid-cols-1 rounded-[1rem] w-full pt-[1.75rem] pl-[2.876rem] sm:pt-[15px] sm:pl-[15px] sm:p-[15px]">
          <div>
            <HirewalksIcon />

            <div className="mt-[1.438rem] text-left">
              <div className="text-[2rem] leading-[3.124rem] text-[#3E2429] font-extrabold sm:text-[1.5rem]">
                Download Hirewalks App!
              </div>

              <div className="text-[1rem] leading-[1.545rem] text-[#493438] sm:text-[0.75rem]">
                Join our 50 Lakh+ contributors and help jobseekers Available for
                both Android and iOS apps
              </div>

              <div className="text-[1.125rem] leading-[1.738rem] gap-[6px] sm:text-[0.8rem]">
                <div>Rated - 4.8</div>
              </div>
            </div>

            <div className="flex flex-row gap-[20px] mt-[1.438rem] pb-[2.125rem] xl:justify-center">
              <div>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.hirewalks.candidates&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/google_play.svg`}
                    alt="Google Play"
                    width={135} // Specify image dimensions
                    height={41}
                    className="w-full h-[2.563rem]"
                    priority
                  />
                </motion.a>
              </div>

              <div>
                <motion.a
                  href="https://apps.apple.com/in/app/hirewalks-job-search-app/id1613292784"
                  target="_blank"
                  rel="noopener"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/app_store.svg`}
                    alt="App Store"
                    width={135} // Specify image dimensions
                    height={41}
                    className="w-full h-[2.563rem]"
                  />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="relative flex items-end justify-center xl:h-[19rem] xl:mt-[1.3rem] sm:hidden">
            <div className="flex flex-row top-[0px] absolute">
              <div className="mt-[0.625rem]">
                <JobAlert />
              </div>
              <div className="mt-[-1.688rem] xl:mt-[0rem]">
                <QuickApply />
              </div>
              <div className="mt-[0.625rem]">
                <HrResponse />
              </div>
            </div>

            <AvatarUsingPhone />
          </div>

          <div className="flex items-end justify-center xl:mt-[1.3rem] xl:hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/top-companies.svg`}
              alt="Top Comapnies"
              width={350} // Specify image dimensions
              height={318}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringProcess;
