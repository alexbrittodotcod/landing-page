"use client";
import Image from "next/image";
import {
  FooterHirewalksTxt,
  FooterWhiteHirewalks,
  WhiteEmailIcon,
  WhiteF,
  WhiteInstagramIcon,
  WhitePhoneIcon,
  WhiteTwitter,
  WhiteYT,
} from "../icons/footer-icons";
import { motion } from "framer-motion";

// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-[#131316] text-white pt-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap md:flex-col justify-between gap-[25px]">
        {/* Left Section */}
        <div className="max-w-[22.875rem]">
          <div className="flex flex-row gap-[5.14px] items-center mb-4">
            <div>
              <FooterWhiteHirewalks />
            </div>

            <div className="flex flex-col gap-[7px] mt-[7px]">
              <FooterHirewalksTxt />
              {/* <div>Hire In Minutes, Not In Months! 😎</div> */}

              <div className="text-base font-normal leading-[1.54rem]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E8395C] to-[#A01CAC]">
                  Hire In Minutes, Not In Months!
                </span>
                😎
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-[1.75rem] gap-[12px]">
            <div className="flex flex-row gap-[3.5px] items-center hover:text-theme-color cursor-pointer">
              <div>
                <WhitePhoneIcon />
              </div>
              <a
                href="tel:+917907933430"
                className="text-[1rem] leading-[1.545rem]"
              >
                +91 79079-33430
              </a>
            </div>

            <div className="flex flex-row gap-[10px] items-center hover:text-theme-color cursor-pointer">
              <div>
                <WhiteEmailIcon />
              </div>
              <a
                href="mailto:support@hirewalks.com"
                className="text-[1rem] leading-[1.545rem] mb-[4px]"
              >
                support@hirewalks.com
              </a>
            </div>
          </div>

          <div className="mt-[1.5rem] text-[1rem] font-normal leading-[1.545rem]">
            Join with us to get Faster, Easier, Promising jobs and Talents.
            Explore the millions of opportunities. Search Jobs, Post Jobs For
            Free.
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-row md:flex-wrap gap-[3.75rem]">
          <div className="w-[11.25rem] md:min-w-[40%]">
            <div className="text-[1.25rem] font-black leading-[1.969rem]">
              Information
            </div>

            <ul className="space-y-[10px] mt-[1rem]">
              <li className="text-[1rem] font-normal">About Us</li>
              <li className="text-[1rem] font-normal">Privacy Policy</li>
              <li className="text-[1rem] font-normal">Terms & Conditions</li>
              <li className="text-[1rem] font-normal">Refund Policy</li>
              <li
                className="text-[1rem] font-normal cursor-pointer hover:text-theme-color"
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_ANGULAR_APP}/info/contact-us`,
                    "_blank"
                  )
                }
              >
                Contact Us
              </li>
              <li className="text-[1rem] font-normal">Product Pricing</li>
            </ul>
          </div>

          <div className="w-[11.25rem] md:min-w-[40%]">
            <div className="text-[1.25rem] font-black leading-[1.969rem]">
              Jobs by Location
            </div>
            <ul className="space-y-[10px] mt-[1rem]">
              <li
                className="text-[1rem] font-normal cursor-pointer hover:text-theme-color"
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_ANGULAR_APP}/search-job?loc=Bangalore`,
                    "_blank"
                  )
                }
              >
                Jobs in Bangalore
              </li>
              <li
                className="text-[1rem] font-normal cursor-pointer hover:text-theme-color"
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_ANGULAR_APP}/search-job?loc=Chennai`,
                    "_blank"
                  )
                }
              >
                Jobs in Chennai
              </li>
              <li
                className="text-[1rem] font-normal cursor-pointer hover:text-theme-color"
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_ANGULAR_APP}/search-job?loc=Coimbatore`,
                    "_blank"
                  )
                }
              >
                Jobs in Coimbatore
              </li>
              <li
                className="text-[1rem] font-normal cursor-pointer hover:text-theme-color"
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_ANGULAR_APP}/search-job?loc=Kochi`,
                    "_blank"
                  )
                }
              >
                Jobs in Kochi
              </li>
              <li
                className="text-[1rem] font-normal cursor-pointer hover:text-theme-color"
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_ANGULAR_APP}/search-job?loc=Pune`,
                    "_blank"
                  )
                }
              >
                Jobs in Pune
              </li>
              <li
                className="text-[1rem] font-normal cursor-pointer hover:text-theme-color"
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_ANGULAR_APP}/search-job?loc=Mumbai`,
                    "_blank"
                  )
                }
              >
                Jobs in Mumbai
              </li>
            </ul>
          </div>

          <div className="w-[11.25rem] md:min-w-[40%]">
            <div className="text-[1.25rem] font-black leading-[1.969rem]">
              Jobs by Industry
            </div>
            <ul className="space-y-[10px] mt-[1rem]">
              <li className="text-[1rem] font-normal">
                Electrical / Electronics / Communication
              </li>
              <li className="text-[1rem] font-normal">Education / Training</li>
              <li className="text-[1rem] font-normal">
                Mechanical & Automobile
              </li>
              <li className="text-[1rem] font-normal">
                Construction & Real Estate
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-[2.789rem] border-t border-gray-700 pt-6 flex flex-col md:flex-row">
        <div className="mt-[2.594rem] mb-[1.344rem] max-w-7xl mx-auto flex flex-wrap flex-row justify-between items-center w-[100%] gap-[15px]">
          <div className="text-base font-extrabold leading-[1.562rem]">
            © 2024 - Hirewalks. All rights reserved
          </div>

          <div className="flex flex-row gap-[20px] mt-[1.438rem] pb-[2.125rem] xl:justify-center">
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.hirewalks.candidates&hl=en_IN"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/google_play.svg`}
                alt="Google play"
                width={135}
                height={41}
                className="w-full h-[2.563rem]"
                priority
              />
            </motion.a>

            <motion.a
              href="https://apps.apple.com/in/app/hirewalks-job-search-app/id1613292784"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/app_store.svg`}
                alt="App Store"
                width={135}
                height={41}
                className="w-full h-[2.563rem]"
                priority
              />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
