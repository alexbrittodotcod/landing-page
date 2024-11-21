"use client";
import {
  SearchJobLens,
  SearchJobLocation,
} from "@/components/icons/form-icons";
import Image from "next/image";
import { jobs, master } from "../../utils/apiEndpoints"; // Import the endpoints
import { useEffect, useState } from "react";
import { getRequest } from "@/app/utils/api";

export default function SearchJob() {
  /* 1. Search job */
  const [keyword, setKeyword] = useState(""); // State to hold the input value
  const [suggestions, setSuggestions] = useState([]); // State to hold the dropdown suggestions
  const [isLoading, setIsLoading] = useState(false); // Loading state to manage API call status
  const [isSelecting, setIsSelecting] = useState(false); // New flag to handle selectionsuggestion
  const [isSuggestions, setIsSuggestions] = useState(false);

  /* 2. Location search */
  const [locKeyword, setLocKeyword] = useState("");
  const [locations, setLocations] = useState([]);
  const [isLocLoading, setLocIsLoading] = useState(false);
  const [isLocSelecting, setLocIsSelecting] = useState(false);
  const [isLocations, setIsLocations] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const [mostSearchedJobs, setMostSearchedJobs] = useState([
    { name: "Angular Developer" },
    { name: "UX Design" },
    { name: "Digital Marketing" },
  ]);

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

  const fetchLocations = async () => {
    if (isLocSelecting || locKeyword.trim().length === 0) {
      setLocIsSelecting(false); // Reset the flag
      return;
    }

    setLocIsLoading(true); // Show loading indicator when fetching suggestions

    try {
      // Fetch the suggestions from the API based on the current keyword
      const result = await getRequest(
        `${master.getLocations}?keywords=${locKeyword}`
      );

      setLocations(result.data || []); // Set the suggestions in state
    } catch (error) {
      console.error("Error fetching suggestions", error);
      setLocations([]); // Reset suggestions on error
    } finally {
      setLocIsLoading(false); // Hide loading indicator after fetching
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchSuggestions(); // Fetch suggestions after a delay
    }, 300); // Debounce time (300ms)

    return () => clearTimeout(timeoutId); // Cleanup on input change
  }, [keyword]); // Re-run the effect whenever the keyword changes

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchLocations();
    }, 300); // Debounce time (300ms)

    return () => clearTimeout(timeoutId);
  }, [locKeyword]);

  const handleSuggestionClick = (suggestion) => {
    setKeyword(suggestion.keywords); // Set the selected suggestion in the input
    setSuggestions([]); // Clear suggestions
    setIsSelecting(true); // Set the flag to true
  };

  const handleLocationClick = (location) => {
    if (!selectedLocations.some((loc) => loc._id === location._id)) {
      setSelectedLocations([...selectedLocations, location]);
      console.log(selectedLocations);
    }
    setIsLocations(false); // Close the dropdown
    setLocKeyword(""); // Clear input
  };

  const removeLocation = (locationId) => {
    setSelectedLocations(
      selectedLocations.filter((loc) => loc._id !== locationId)
    );
  };

  const searchJobsNavigation = () => {
    if (selectedLocations.length != 0 || keyword) {
      // Construct the query parameters
      const queryParams = new URLSearchParams({
        key: keyword,
        loc: selectedLocations.map((location) => location.name).join("+"),
      });

      // Redirect or fetch with the constructed URL
      const url = `${
        process.env.NEXT_PUBLIC_ANGULAR_APP
      }/search-job?${queryParams.toString()}`;

      // Open the URL in a new tab
      window.open(url, "_blank");
    }
  };

  const mostSearchJob = (jobName) => {
    // Redirect or fetch with the constructed URL
    const url = `${process.env.NEXT_PUBLIC_ANGULAR_APP}/search-job?key=${jobName}`;

    // Open the URL in a new tab
    window.open(url, "_blank");
  }

  return (
    <div
      className="avenir-regular bg-[url('/header-bg.svg')] header-linear-bg"
      onClick={() => {
        setIsSuggestions(false);
        setIsLocations(false);
      }}
    >
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
                {/* {isSuggestions ? "true" : "false"} */}
                <div className="relative w-full flex">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => {
                      setKeyword(e.target.value);
                      setIsSuggestions(true);
                    }}
                    placeholder="Search for Software Developer"
                    className="flex-grow border-none outline-none bg-transparent text-gray-500 pl-2 placeholder-gray-400 w-[15rem]"
                  />
                  {isLoading && (
                    <div className="absolute top-full left-0 w-full p-2 bg-white text-center text-gray-500">
                      Loading...
                    </div>
                  )}
                  {suggestions.length > 0 && isSuggestions && (
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
                <div className="relative w-full">
                  <div className="flex flex-row w-[16rem] overflow-x-auto overflow-y-hidden custom-scrollbar">
                    {/* Selected Locations (Chips) */}
                    {selectedLocations.length > 0 && (
                      <div className="flex gap-2">
                        {selectedLocations.map((location) => (
                          <div
                            key={location._id}
                            className="flex items-center bg-green-100 text-teal-500 px-3 py-1 rounded-full space-x-2"
                          >
                            <span>{location.name}</span>
                            <button
                              className="text-red-500 hover:text-red-700"
                              onClick={() => removeLocation(location._id)}
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    <input
                      type="text"
                      value={locKeyword}
                      onChange={(e) => {
                        setLocKeyword(e.target.value);
                        setIsLocations(true);
                      }}
                      placeholder="Location"
                      className="flex-grow border-none outline-none bg-transparent text-gray-500 pl-2 placeholder-gray-400 w-[5rem]"
                    />
                  </div>
                  {isLocLoading && (
                    <div className="absolute top-full left-0 w-full p-2 bg-white text-center text-gray-500">
                      Loading...
                    </div>
                  )}
                  {locations.length > 0 && isLocations && (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10 text-left">
                      <ul className="max-h-60 overflow-y-auto">
                        {locations.map((location) => (
                          <li
                            key={location._id}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleLocationClick(location)}
                          >
                            {location.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* <!-- Search Button --> */}
            <button
              className="bg-theme-color text-white px-4 py-2 rounded-md  text-[0.875rem] hover:bg-red-600"
              onClick={() => searchJobsNavigation()}
            >
              Search Jobs
            </button>
          </div>

          {/* <!-- Most Searched Jobs --> */}
          <div className="flex flex-row sm:flex-col items-center space-x-4 sm:space-y-2 text-gray-500 text-sm mx-[0.5rem] sm:items-start sm:space-x-0">
            <span>Most Searched Jobs:</span>
            <div className="flex flex-wrap space-x-2 sm:space-x-0">
              {mostSearchedJobs.map((job) => (
                <div className="bg-white text-gray-700 px-3 py-1 rounded-full shadow my-1 cursor-pointer hover:bg-[#FFEDF0]" onClick={() => mostSearchJob(job.name)}>
                  {job.name}
                </div>
              ))}
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
