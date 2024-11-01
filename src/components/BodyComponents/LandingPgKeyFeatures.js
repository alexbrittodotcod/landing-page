"use client";

import { useEffect, useState } from "react";
import "../../styles/globals.scss";
import { motion } from "framer-motion";

const ProgressBar = ({ onTimerComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start a 5-second timer that increments progress
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          onTimerComplete();
          return 0;
        }
        return prev + 2;
      });
    }, 500);

    return () => clearInterval(intervalId);
  }, [onTimerComplete]);

  return (
    <div className="relative h-full w-[3px] bg-[#E1E1E2] mr-[1rem] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full bg-[#E8395C] transition-all duration-100"
        style={{ height: `${progress}%` }}
      ></div>
    </div>
  );
};

const LandingPgKeyFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "HR Talent",
      description: "3x Faster hiring with hirewalks",
      content:
        "HireWalks AI ✨ driven algorithm matches the best skilled candidate for your job role. You will get access to unlimited resumes based on the skills.",
      featureImg: "hr-talent-feature.webp",
    },
    {
      title: "HR Database",
      description: "3x Faster hiring with hirewalks",
      content:
        "HireWalks AI ✨ driven algorithm matches the best skilled candidate for your job role. You will get access to unlimited resumes based on the skills.",
      featureImg: "database-feature.webp",
    },
    {
      title: "HR Referral Contract",
      description: "3x Faster hiring with hirewalks",
      content:
        "HireWalks AI ✨ driven algorithm matches the best skilled candidate for your job role. You will get access to unlimited resumes based on the skills.",
      featureImg: "contract-feature.webp",
    },
    {
      title: "ATS (Applicant Tracking System)",
      description: "3x Faster hiring with hirewalks",
      content:
        "HireWalks AI ✨ driven algorithm matches the best skilled candidate for your job role. You will get access to unlimited resumes based on the skills.",
      featureImg: "ats-feature.webp",
    },
  ];

  const handleTimerComplete = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="avenir-regular max-w-7xl mx-auto px-4 w-[100%]">
      <div className="pt-[5rem] pb-[3.75rem]">
        <div className="text-[2rem] font-extrabold text-center">
          Explore Our <span className="text-theme-color">Key Features</span>
        </div>
        <div className="text-center text-[1rem] font-normal">
          Learn how our AI-driven solutions make hiring faster and smarter.
        </div>
      </div>

      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 p-4 mx-[3.9375rem] items-center gap-[6.9375rem] bg-center-image bg-center bg-no-repeat bg-[url('/gray-hirewalks.svg')] h-[34rem]">
        {/* Accordion tab */}
        <div>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleHover(index)}
                className={`flex flex-row border pointer rounded-lg p-4 transition-all duration-10000 delay-30000 ${
                  index === activeIndex
                    ? "border-red-300 bg-white shadow-md"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className=" w-[50px] flex items-center justify-center">
                  {index === activeIndex && (
                    <ProgressBar onTimerComplete={handleTimerComplete} />
                  )}
                </div>

                <div className="flex flex-col">
                  <div
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex flex-col items-start">
                      <div className="text-[#493438] text-[1.125rem] font-extrabold">
                        {item.title}
                      </div>
                      <div className="text-[0.875rem] font-normal text-[#4B5162]">
                        {item.description}
                      </div>
                    </div>

                    <span
                      className={`transform transition-transform duration-300 ${
                        index === activeIndex ? "rotate-180" : ""
                      }`}
                    >
                      <img src="dropdown.svg" alt="dropdown icon" />
                    </span>
                  </div>

                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      index === activeIndex
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.content && (
                      <div className="flex flex-col mt-[0.75rem] text-gray-700 transition-opacity duration-300">
                        <div className="text-left text-[0.875rem] font-normal color-[#493438]">
                          {item.content}
                        </div>
                        <a
                          href="#"
                          className="text-theme-color mt-[0.75rem] inline-flex items-center text-[0.875rem] font-extrabold leading-[1.366rem] text-left"
                        >
                          Learn More{" "}
                          <span className="ml-[8px]">
                            <img src="right-theme-arrow.svg" alt="arrow icon" />
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Images container */}
        <div className="px-[13px] py-[12px] shadow-[8px_8px_30px_0px_#E8395C1A] rounded-md bg-white">
          <div className="rounded-md bg-[#F7F6F6] px-[2.8125rem] py-[0.9375rem]">
            <img
              src={items[activeIndex]?.featureImg}
              className="w-[26.75rem] h-[20.125rem] object-contain"
              alt={items[activeIndex]?.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPgKeyFeatures;
