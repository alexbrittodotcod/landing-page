//import "./globals.css";
import "../styles/globals.scss";
import "../styles/landing-page.scss";
import FrequentQuiz from "./BodyComponents/FrequentQuiz";
import HiringProcess from "./BodyComponents/HiringProcess";
import LandingPgAdOns from "./BodyComponents/LandingPgAdOns";
import LandingPgBanner from "./BodyComponents/LandingPgBanner";
import LandingPgKeyFeatures from "./BodyComponents/LandingPgKeyFeatures";
import RequestDemo from "./BodyComponents/RequestDemo";
import { FormTopBar } from "@/components/icons/form-icons";

// components/Body.js
const Body = () => {
  return (
    <main className="font-avenir flex flex-col items-center justify-center">
      {/* <section id="about" className="w-full text-center banner-gradient">
        <LandingPgBanner />
      </section> */}

      <section
        id="about"
        className="bg-[url('/bg-stripes.svg')] w-full text-center landing-page-box-shadow"
      >
        {/* 2. Key Features */}
        <LandingPgKeyFeatures />

        {/* 3. Hiring Adons */}
        <LandingPgAdOns />
      </section>

      <section id="hiring-process" className="w-full text-center">
        <div>
          <div className="mb-[-2px]">
            <FormTopBar className="w-full" />
          </div>

          <div className="bg-[#131316] pt-[4.5625rem] pb-[5.625rem]">
            <HiringProcess />
            <RequestDemo />
          </div>

          <div className="mt-[-2px] mirror-image">
            <FormTopBar className="w-full" />
          </div>
        </div>
      </section>

       <section id="freq-quiz" className="w-full text-center">
        <FrequentQuiz />
       </section>

      {/* <section id="contact" className="bg-white p-8 w-full text-center">
        <RequestDemo />
      </section> */}
    </main>
  );
};

export default Body;
