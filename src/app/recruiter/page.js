//import "./globals.css";
import "../../styles/landing-page.scss";
import FrequentQuiz from "./landing-page/FrequentQuiz";
import HiringProcess from "./landing-page/HiringProcess";
import AdOns from "./landing-page/AdOns";
import Banner from "./landing-page/Banner";
import KeyFeatures from "./landing-page/KeyFeatures";
import RequestDemo from "./landing-page/RequestDemo";
import { FormTopBar } from "@/components/icons/form-icons";

export default function Recruiter() {
  return (
    <main className="font-avenir flex flex-col items-center justify-center">
      <section id="about" className="w-full text-center banner-gradient">
        <Banner />
      </section>

      <section
        id="about"
        className="bg-[url('/bg-stripes.svg')] relative w-full text-center landing-page-box-shadow"
      >
        {/* 2. Key Features */}
        <KeyFeatures />

        {/* 3. Hiring Adons */}
        <AdOns />

        <div className="absolute z-[1] w-full bottom-[-1px]">
          <FormTopBar className="w-full" />
        </div>
      </section>

      <section id="hiring-process" className="w-full text-center">
        <div className="bg-[#131316] pt-[4.5625rem] pb-[5.625rem]">
          <HiringProcess />
          <RequestDemo />
        </div>
      </section>

      <section
        id="freq-quiz"
        className="w-full text-center bg-[url('/bg-stripes.svg')]"
      >
        <div className="mt-[-2px] mirror-image">
          <FormTopBar className="w-full" />
        </div>

        <FrequentQuiz />
      </section>

      {/* <section id="contact" className="bg-white p-8 w-full text-center">
        <RequestDemo />
      </section> */}
    </main>
  );
}
