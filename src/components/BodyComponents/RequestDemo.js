"use client";

import { useEffect, useState } from "react";
import "../../styles/globals.scss";
import { FormTopBar } from "@/components/icons/form-icons";

// components/Footer.js
const HiringProcess = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const reviewPoints = [
    {
      review:
        "“ Using Hirewalks has transformed our recruitment services. The detailed candidate profiles and skill analysis allow us to shortlist candidates effectively and efficiently. “",
      name: "Roshan SK",
      designation: "Recuirement Manager",
    },
    {
      review:
        "“ HireWalks has been incredibly beneficial to us in finding the right candidate for our company. Their smart plans paved down solutions to hire better. “",
      name: "Neha M",
      designation: "CEO",
    },
    {
      review: `“ As a small business owner, I often struggle to find the 
time and resources for hiring. Everything changed when I partnered with HireWalks. It’s affordable, easy to navigate. “`,
      name: "Lathika R",
      designation: "Product Manager",
    },
  ];

  return (
    <div className="grid place-items-center">
      <div className="text-white font-extrabold text-[2rem] pb-[4px] leading-[3.125rem] pt-[5rem]">
        Request a <span className="text-theme-color">Demo</span>
      </div>

      <div className="grid grid-cols-2 gap-[6.875rem] lg:grid-cols-1 items-center max-w-7xl mt-[3.75rem]">
        <div className="flex flex-col gap-[4.5rem] xl:px-[1.563rem]">
          {reviewPoints.map((item, index) => {
            return (
              <div key={index} className="text-white text-left">
                <div className="text-[1.125rem] leading-[1.8rem]">
                  {item.review}
                </div>

                <div className="flex flex-row mt-[14px] space-x-[14px] items-center">
                  <div>
                    <img
                      src="/roshan.png"
                      className="w-[2.8125rem] h-[2.8125rem] rounded-full"
                    />
                  </div>

                  <div>
                    <div className="font-extrabold text-[1.125rem] leading-[1.75rem]">
                      {item.name}
                    </div>
                    <div className="text-[0.875rem] text-[#9394A1] leading-[1.3225rem]">
                      {item.designation}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-white p-[2.5rem] bg-[#212126] rounded-lg">
          <div className="text-[1.25rem] font-extrabold mb-[1.5rem] flex flex-row gap-[8px] justify-center items-center">
            <div>Schedule Now</div>
            <div>
              <img src="/white-stars.svg" alt="Stars" />
            </div>
          </div>

          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="flex text-[#9394A1] text-[0.875rem] leading-[1.35rem] mb-[8px]"
              >
                Name
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-[#131316]"
                placeholder="What should we call you?"
              />{" "}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="flex text-[#9394A1] text-[0.875rem] leading-[1.35rem] mb-[8px]"
              >
                Work Email
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-[#131316]"
                placeholder="Your work email, please."
              />{" "}
            </div>

            <div className="mb-4">
              <label
                htmlFor="username"
                className="flex text-[#9394A1] text-[0.875rem] leading-[1.35rem] mb-[8px]"
              >
                Company Name
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-[#131316]"
                placeholder="Where do you work?"
              />{" "}
            </div>

            <div className="mb-4">
              <label
                htmlFor="username"
                className="flex text-[#9394A1] text-[0.875rem] leading-[1.35rem] mb-[8px]"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-[#131316]"
                placeholder="Number to reach you."
              />{" "}
            </div>

            <div className="mb-4">
              <label
                htmlFor="role"
                className="flex text-[#9394A1] text-[0.875rem] leading-[1.35rem] mb-[8px]"
              >
                Role
              </label>
              <select
                id="role"
                defaultValue={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="w-full px-4 py-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-[#131316] text-white"
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="manager">Manager</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="pt-[12px]">
              <button className="w-full h-12 py-2 px-4 rounded-lg bg-theme-color text-white text-sm font-bold flex items-center justify-center gap-2 ">
                Get a Demo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HiringProcess;
