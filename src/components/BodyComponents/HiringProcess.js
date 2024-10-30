"use client";

import { useEffect, useState } from "react";
import "../../styles/globals.scss";

// components/Footer.js
const HiringProcess = () => {
  return (
    <>
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
    </>
  );
};

export default HiringProcess;
