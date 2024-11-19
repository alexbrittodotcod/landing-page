import {
  RightArrow,
  RedRightArrow,
} from "@/components/icons/candidate-landing";
import Image from "next/image";

export default function LatestJobPost() {
  const JobPosts = [
    { job_name: "Angular Developer", company: "Hirewalks Pvt Ltd." },
    {
      job_name: "Flutter Developer",
      company: "Infosight Consulting Services Pvt Ltd.",
    },
    { job_name: "Angular Developer", company: "Hirewalks Pvt Ltd." },
    {
      job_name: "Flutter Developer",
      company: "Infosight Consulting Services Pvt Ltd.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto grid justify-items-center">
        <div className="text-[2.5rem] text-[#493438] font-extrabold leading-[3.5rem] text-center xl:whitespace-normal whitespace-nowrap lg:text-[2rem]">
          Our Latest <span className="text-theme-color">Jobs Post</span>
        </div>

        <div className="text-[#493438] text-base font-normal leading-[1.545rem]">
          Discover the newest job opportunities posted across various
          industries.
        </div>
      </div>

      <div className="mt-[2.5rem]">
        <div className="flex flex-col gap-[3.4375rem] items-center justify-center overflow-hidden">
          {/* 1. View Jobs(Forward) */}
          <div className="scroll-wrapper">
            <div className="scroll gap-[3.4375rem] md:gap-[2rem]">
              {JobPosts.concat(JobPosts).map((item, index) => {
                return (
                  <div
                    className="flex p-[0.875rem] job-posts-scroll-card rounded-md"
                    key={index}
                  >
                    <div className="border border-[#E0E1E3] w-[2.75rem] h-[2.75rem] rounded-md mr-[0.625rem]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}test.png`}
                        alt="Logo"
                        width={44} // Specify image dimensions
                        height={44}
                        priority
                      />
                    </div>

                    <div className="flex flex-col items-start mr-[0.75rem]">
                      <div className="text-[#493438] text-[1rem] leading-[1.545rem] whitespace-nowrap">
                        {item.job_name}
                      </div>
                      <div className="text-[#4B5162] text-[0.75rem] leading-[1.159rem] whitespace-nowrap">
                        {item.company}
                      </div>
                    </div>

                    <div className="mt-[2px]">
                      <RightArrow />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. View Jobs(Backward) */}
          <div className="scroll-wrapper">
            <div className="scroll-left-to-right gap-[3.4375rem] md:gap-[2rem]">
              {JobPosts.concat(JobPosts).map((item, index) => {
                return (
                  <div
                    className="flex p-[0.875rem] job-posts-scroll-card rounded-md"
                    key={index}
                  >
                    <div className="border border-[#E0E1E3] w-[2.75rem] h-[2.75rem] rounded-md mr-[0.625rem]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}test.png`}
                        alt="Logo"
                        width={44} // Specify image dimensions
                        height={44}
                        priority
                      />
                    </div>

                    <div className="flex flex-col items-start mr-[0.75rem]">
                      <div className="text-[#493438] text-[1rem] leading-[1.545rem] whitespace-nowrap">
                        {item.job_name}
                      </div>
                      <div className="text-[#4B5162] text-[0.75rem] leading-[1.159rem] whitespace-nowrap">
                        {item.company}
                      </div>
                    </div>

                    <div className="mt-[2px]">
                      <RightArrow />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-[3.125rem]">
        <button className="text-sm font-bold text-theme-color border border-theme-color rounded-lg px-[1.25rem] h-[2.625rem]">
          <div className="flex flex-row gap-[0.5rem] items-center">
            <div>View all Jobs</div>
            <div>
              <RedRightArrow />
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
