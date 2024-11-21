"use client";
import {
  SearchJobLens,
  SearchJobLocation,
} from "@/components/icons/form-icons";
import Image from "next/image";
import { jobs } from "../../utils/apiEndpoints"; // Import the endpoints
import { useEffect, useState } from "react";
import { getRequest } from "@/app/utils/api";

export default function SearchJob() {
  const [keyword, setKeyword] = useState(""); // State to hold the input value
  const [suggestions, setSuggestions] = useState([]); // State to hold the dropdown suggestions
  const [isLoading, setIsLoading] = useState(false); // Loading state to manage API call status
  const [isSelecting, setIsSelecting] = useState(false); // New flag to handle selectionsuggestion

  /* const fetchData = async () => {
     if (keyword.trim()) {
       try {
         const result = await getRequest(
           `${jobs.searchJobs}?keywords=${keyword}`
         );
         setData(result);
         console.log(result);
       } catch (error) {
         console.error("Error fetching data", error);
       }
     }
   }; */
  const fetchSuggestions = async () => {
    if (isSelecting || keyword.trim().length === 0) {
      setIsSelecting(false); // Reset the flag
      return;
    }

    setIsLoading(true); // Show loading indicator when fetching suggestions

    try {
      // Fetch the suggestions from the API based on the current keyword
      const result = await getRequest(
        `${jobs.searchSuggestions}?keywords=${keyword}`
      );

      setSuggestions(result.data || []); // Set the suggestions in state
    } catch (error) {
      console.error("Error fetching suggestions", error);
      setSuggestions([]); // Reset suggestions on error
    } finally {
      setIsLoading(false); // Hide loading indicator after fetching
    }
  };
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchSuggestions(); // Fetch suggestions after a delay
    }, 300); // Debounce time (300ms)

    return () => clearTimeout(timeoutId); // Cleanup on input change
  }, [keyword]); // Re-run the effect whenever the keyword changes

  const handleSuggestionClick = (suggestion) => {
    setKeyword(suggestion.keywords); // Set the selected suggestion in the input
    setSuggestions([]); // Clear suggestions
    setIsSelecting(true); // Set the flag to true
  };

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
                <div className="relative w-full">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search for Software Developer"
                    className="flex-grow border-none outline-none bg-transparent text-gray-500 pl-2 placeholder-gray-400 w-[15rem]"
                  />
                  {isLoading && (
                    <div className="absolute top-full left-0 w-full p-2 bg-white text-center text-gray-500">
                      Loading...
                    </div>
                  )}
                  {suggestions.length > 0 && (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10 text-left">
                      <ul className="max-h-60 overflow-y-auto">
                        {suggestions.map((suggestion, index) => (
                          <li
                            key={suggestion._id}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion.keywords}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
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
              <div className="bg-white text-gray-700 px-3 py-1 rounded-full shadow my-1 sm:mr-[0.5rem] cursor-pointer hover:bg-[#FFEDF0]">
                Angular Developer
              </div>
              <div className="bg-white text-gray-700 px-3 py-1 rounded-full shadow my-1 cursor-pointer hover:bg-[#FFEDF0]">
                UX Design
              </div>
              <div className="bg-white text-gray-700 px-3 py-1 rounded-full shadow my-1 cursor-pointer hover:bg-[#FFEDF0]">
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
