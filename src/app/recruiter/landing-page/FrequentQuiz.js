"use client";

import { useEffect, useState } from "react";
import Accordion from "../../../components/CommonComponents/AccordianTab";
import Image from "next/image";

// components/Footer.js
const FrequentQuiz = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    {
      title: "What is Next.js?",
      content:
        "Next.js is a React framework for production-level applications with optimized server-side rendering.",
    },
    {
      title: "What is Framer Motion?",
      content: "Framer Motion is a production-ready motion library for React.",
    },
  ];

  return (
    <>
      <div>
        <div className="mt-[3.125rem] text-[1.25rem] text-[#4B5162] font-extrabold">
          Trusted by 500+ Customer globally
        </div>

        <div className="flex flex-row gap-[3.4375rem] items-center justify-center mt-[2.25rem] overflow-hidden">
          <div className="scroll flex flex-row gap-[3.4375rem]">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}google.svg`}
              alt="Logo"
              width={100}
              height={5}
              priority
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}amazon.svg`}
              alt="Logo"
              width={100}
              height={45}
              priority
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}capgemini.svg`}
              alt="Logo"
              width={100}
              height={45}
              priority
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}paytm.svg`}
              alt="Logo"
              width={100}
              height={45}
              priority
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}flipkart.svg`}
              alt="Logo"
              width={100}
              height={45}
              priority
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}phonepe.svg`}
              alt="Logo"
              width={100}
              height={45}
              priority
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}paytm.svg`}
              alt="Logo"
              width={100}
              height={45}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 w-[100%] mb-[5.625rem]">
        <div className="mt-[4.375rem]">
          <div className="text-[2rem] font-extrabold text-center leading-[3.125rem]">
            Frequently Asked <span className="text-theme-color">Questions</span>
          </div>

          <div className="text-center text-[#493438] text-[1rem] font-normal leading-[1.545rem]">
            Explore our frequently asked questions to learn more
            <br /> about Hirewalks.
          </div>
        </div>

        <div className="mt-[3.75rem]">
          <Accordion items={items} />
        </div>
      </div>
    </>
  );
};

export default FrequentQuiz;
