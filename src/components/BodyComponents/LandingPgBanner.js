//import "./globals.css";
import "../../styles/globals.scss";

// components/Body.js
const LandingPgBanner = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 w-[100%] gap-[1.688rem]">
      <div className="flex flex-col py-20">
        <div className="flex flex-row gap-[4px]">
          <img src="/red-stars.svg" className="w-[1.25rem] h-[1.25rem]" />
          <div className="text-[14px] text-theme-color font-extrabold leading-[21px] text-center">
            Elevate Your Hiring Experience
          </div>
        </div>

        <div className="text-[2.5rem] font-extrabold leading-[3.5rem] text-left text-primary">
          Supercharge Your Hiring with
          <br />
          <span className="text-theme-color">AI-Driven</span> Solutions
        </div>

        <div className="pt-5 text-[1.25rem] font-normal leading-[1.9375rem] text-left text-[rgba(75,81,98,1)]">
          Unlock hiring efficiency with Hirewalks. Find top candidates faster
          and build stronger teams effortlessly.
        </div>

        <div className="flex gap-5 pt-[1.875rem]">
          <button className="w-48 h-12 py-2 px-4 rounded-lg bg-theme-color text-white text-sm font-bold flex items-center justify-center gap-2">
            Request a Demo
            <img src="/white-stars.svg" alt="Stars" />
          </button>

          <button className="text-sm font-bold text-theme-color border border-theme-color rounded-lg px-[2.063rem]">
            Signup Now
          </button>
        </div>
      </div>

      {/* Banner image */}
      <div>
        <img src="/banner-img.svg" />
      </div>
    </div>
  );
};

export default LandingPgBanner;
