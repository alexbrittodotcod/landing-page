"use client";

import { useEffect, useState } from "react";
import "../../styles/globals.scss";
import "../../styles/landing-page.scss";

// components/Footer.js
const FrequentQuiz = () => {
  return (
    <div>
      <div>
        <div className="mt-[3.125rem] text-[1.25rem] font-[#4B5162] font-extrabold">
          Trusted by 500+ Customer globally
        </div>

        <div className="flex flex-row gap-[3.4375rem] items-center justify-center mt-[2.25rem] overflow-hidden">
          <div className="scroll flex flex-row gap-[3.4375rem]">
            <img src="/google.svg" alt="Google" />
            <img src="/amazon.svg" alt="Amazon" />
            <img src="/capgemini.svg" alt="Capgemini" />
            <img src="/paytm.svg" alt="Paytm" />
            <img src="/flipkart.svg" alt="Flipkart" />
            <img src="/phonepe.svg" alt="PhonePe" />
            <img src="/capgemini.svg" alt="Capgemini" />
            <img src="/paytm.svg" alt="Paytm" />
            <img src="/flipkart.svg" alt="Flipkart" />
            <img src="/phonepe.svg" alt="PhonePe" />
          </div>
        </div>
      </div>

      <div className="4.375rem"></div>
    </div>
  );
};

export default FrequentQuiz;
