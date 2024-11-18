import SearchJob from "./landing-page/SearchJob";
import ResumeScore from "./landing-page/ResumeScore";
import LatestJobPost from "./landing-page/LatestJobPost";
import HiringProcess from "./landing-page/HiringProcess";
import "../../styles/landing-page.scss";
import { FormTopBar } from "@/components/icons/form-icons";
import SuccessStories from "./landing-page/SuccessStories";

export default function LandingPage() {
  return (
    <main className="font-avenir flex flex-col items-center justify-center">
      <section className="w-full text-center banner-gradient">
        <SearchJob />
      </section>

      <section className="w-full text-center bg-[url('/bg-stripes.svg')] mt-[3.75rem] mb-[3.75rem] px-[1rem]">
        <ResumeScore />
      </section>

      <section className="w-full text-center py-[4.375rem] bg-[url('/header-bg.svg')] header-linear-bg">
        <LatestJobPost />
      </section>

      {/* <section className="mb-[3.75rem] w-full relative">
        <div className="w-full text-center pt-[4.375rem] pb-[5.625rem] relative z-10">
          <HiringProcess />
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/landing-pg-black-bg.svg"
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="mt-[-2px] mirror-image">
          <FormTopBar className="w-full" />
        </div>
      </section> */}

      <section className="w-full text-center">
        <FormTopBar className="w-full" />
        <div className="bg-[#131316] pt-[4.5625rem] pb-[5.625rem] mt-[-2px]">
          <HiringProcess />
        </div>
        <div className="mt-[-2px] mirror-image">
          <FormTopBar className="w-full" />
        </div>
      </section>

      <section className="w-full text-center">
        <SuccessStories />
      </section>
    </main>
  );
}
