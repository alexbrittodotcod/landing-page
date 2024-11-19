import { SearchJobLens, SearchJobLocation } from "@/components/icons/form-icons";
import Image from "next/image";

export default function SearchJob() {
  return (
    <div className="avenir-regular bg-[url('/header-bg.svg')] header-linear-bg">
      <div className="flex justify-center max-w-7xl mx-auto w-[100%]">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-[2rem] sm:text-[1.5rem] font-extrabold text-[#493438] text-left mt-12 mb-4 xl:whitespace-normal whitespace-nowrap">
            Find and Apply for a Job that{" "}
            <span className="text-theme-color">Matches you!</span>
          </div>

          {/* <!-- Search Bar Container --> */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-2 space-x-2 mx-[0.5rem] md:flex-col md:space-y-2 md:w-[98%]">
            <div className="flex md:flex-col md:space-y-2 md:w-full">
              {/* <!-- Search Input --> */}
              <div className="flex items-center flex-grow mr-[1.5rem]">
                <SearchJobLens />
                <input
                  type="text"
                  placeholder="Search for Software Developer"
                  className="flex-grow border-none outline-none bg-transparent text-gray-500 pl-2 placeholder-gray-400 w-[15rem]"
                />
              </div>

              <div className="relative md:hidden">
                <div className="absolute top-[3px] right-0 bottom-[3px] w-[1px] bg-[#A5A8B0] mr-[0.625rem]" />
              </div>

              {/* <!-- Location Input --> */}
              <div className="flex items-center">
                <SearchJobLocation />
                <input
                  type="text"
                  placeholder="Location"
                  className="border-none outline-none bg-transparent text-gray-500 pl-2 placeholder-gray-400"
                />
              </div>
            </div>

            {/* <!-- Search Button --> */}
            <button className="bg-theme-color text-white px-4 py-2 rounded-md  text-[0.875rem] hover:bg-red-600">
              Search Jobs
            </button>
          </div>

          {/* <!-- Most Searched Jobs --> */}
          <div className="flex flex-row sm:flex-col items-center space-x-4 sm:space-y-2 text-gray-500 text-sm mx-[0.5rem] sm:items-start sm:space-x-0">
            <span>Most Searched Jobs:</span>
            <div className="flex flex-wrap space-x-2 sm:space-x-0">
              <div className="bg-white text-gray-700 px-3 py-1 rounded-full shadow my-1 sm:mr-[0.5rem]">
                Angular Developer
              </div>
              <div className="bg-white text-gray-700 px-3 py-1 rounded-full shadow my-1">
                UX Design
              </div>
              <div className="bg-white text-gray-700 px-3 py-1 rounded-full shadow my-1">
                Digital Marketing
              </div>
            </div>
          </div>

          {/* Trusted companies horizontal scroll */}
          <div className="flex max-w-7xl mx-auto w-[100%] !mt-[5.313rem] !mb-[3.125rem] md:!mt-[2rem] md:!mb-[1rem] md:flex-col px-[1rem] md:px-0">
            <div className="relative text-[1.125rem] font-extrabold leading-[1.758rem] text-[#4B5162] items-left pr-[0.844rem] md:mb-[1rem] md:text-left">
              <div className="absolute top-[7px] right-0 bottom-[8px] w-0.5 bg-[#9ca3af] md:hidden" />
              Trusted by 200+ <br className="md:hidden" /> companies worldwide
            </div>

            <div className="flex flex-1 flex-row gap-[3.4375rem] items-center justify-center overflow-hidden sm:mt-2">
              <div className="scroll flex flex-row gap-[3.4375rem] md:gap-[2rem]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/google.svg`}
                  alt="Logo"
                  width={100}
                  height={5}
                  priority
                  style={{ width: "auto", height: "auto" }}
                  className="md:!h-[1.5rem] sm:!h-[1rem]"
                />
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/amazon.svg`}
                  alt="Logo"
                  width={100}
                  height={45}
                  priority
                  style={{ width: "auto", height: "auto" }}
                  className="md:!h-[1.5rem] sm:!h-[1rem]"
                />
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/capgemini.svg`}
                  alt="Logo"
                  width={100}
                  height={45}
                  priority
                  style={{ width: "auto", height: "auto" }}
                  className="md:!h-[1.5rem] sm:!h-[1rem]"
                />
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/paytm.svg`}
                  alt="Logo"
                  width={100}
                  height={45}
                  priority
                  style={{ width: "auto", height: "auto" }}
                  className="md:!h-[1.5rem] sm:!h-[1rem]"
                />
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/flipkart.svg`}
                  alt="Logo"
                  width={100}
                  height={45}
                  priority
                  style={{ width: "auto", height: "auto" }}
                  className="md:!h-[1.5rem] sm:!h-[1rem]"
                />
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/phonepe.svg`}
                  alt="Logo"
                  width={100}
                  height={45}
                  priority
                  style={{ width: "auto", height: "auto" }}
                  className="md:!h-[1.5rem] sm:!h-[1rem]"
                />
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/paytm.svg`}
                  alt="Logo"
                  width={100}
                  height={45}
                  priority
                  style={{ width: "auto", height: "auto" }}
                  className="md:!h-[1.5rem] sm:!h-[1rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
