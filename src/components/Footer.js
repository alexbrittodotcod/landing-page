import {
  FooterHirewalksTxt,
  FooterWhiteHirewalks,
  WhiteEmailIcon,
  WhiteF,
  WhiteInstagramIcon,
  WhitePhoneIcon,
  WhiteYT,
} from "./icons/footer-icons";

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
            <div className="flex flex-row gap-[3.5px] items-center">
              <div>
                <WhitePhoneIcon />
              </div>
              <div className="text-[1rem] leading-[1.545rem]">
                +91 79079-33430
              </div>
            </div>

            <div className="flex flex-row gap-[3.5px] items-center">
              <div>
                <WhiteEmailIcon />
              </div>
              <div className="text-[1rem] leading-[1.545rem] mb-[4px]">
                 support@hirewalks.com
              </div>
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
              <li className="text-[1rem] font-normal">Contact Us</li>
              <li className="text-[1rem] font-normal">Product Pricing</li>
            </ul>
          </div>

          <div className="w-[11.25rem] md:min-w-[40%]">
            <div className="text-[1.25rem] font-black leading-[1.969rem]">
              Jobs by Location
            </div>
            <ul className="space-y-[10px] mt-[1rem]">
              <li className="text-[1rem] font-normal">Jobs in Bangalore</li>
              <li className="text-[1rem] font-normal">Jobs in Chennai</li>
              <li className="text-[1rem] font-normal">Jobs in Coimbatore</li>
              <li className="text-[1rem] font-normal">Jobs in Kochi</li>
              <li className="text-[1rem] font-normal">Jobs in Pune</li>
              <li className="text-[1rem] font-normal">Jobs in Mumbai</li>
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

          <div className="flex flex-row gap-[30px]">
            <div className="flex flex-row gap-[20px]">
              <img src="/Google play.svg" />

              <img src="/App Store 1.svg" />
            </div>

            <div className="flex flex-row items-center gap-[20px]">
              <WhiteF />
              <WhiteYT />
              <WhiteInstagramIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
