"use client";
import {
  RightArrow,
  RedRightArrow,
} from "@/components/icons/candidate-landing";
import Image from "next/image";
import { jobs } from "../../utils/apiEndpoints"; // Import the endpoints
import { useEffect, useState } from "react";
import { getRequest } from "@/app/utils/api";
import { useRouter } from "next/navigation";

export default function LatestJobPost() {
  const router = useRouter();
  const [forwardJobPosts, setForwardJobPosts] = useState([]);
  const [backwardJobPosts, setBackwardJobPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state to manage API call status

  const jobPostsFetcher = async () => {
    setIsLoading(true); // Show loading indicator when fetching suggestions

    try {
      // Fetch the suggestions from the API
      const result = await getRequest(`${jobs.searchJobs}`);
      const jobPosts = result.data || [];

      if (jobPosts.length > 10) {
        // Split the data into two halves if length > 10
        const midIndex = Math.ceil(jobPosts.length / 2);
        setBackwardJobPosts(jobPosts.slice(0, midIndex)); // First half
        setForwardJobPosts(jobPosts.slice(midIndex)); // Second half
      } else if (jobPosts.length > 0) {
        // If data length <= 10, store all in setForwardJobPosts
        setBackwardJobPosts([]);
        setForwardJobPosts(jobPosts);
      } else {
        // If no data, set both to empty
        setBackwardJobPosts([]);
        setForwardJobPosts([]);
      }
    } catch (error) {
      // Reset suggestions on error
      setBackwardJobPosts([]);
      setForwardJobPosts([]);
    } finally {
      setIsLoading(false); // Hide loading indicator after fetching
    }
  };

  useEffect(() => {
    jobPostsFetcher();
  }, [jobs.searchJobs]);

  return (
    <>
      <div className="max-w-7xl mx-auto grid justify-items-center">
        <div className="text-[2.5rem] text-[#493438] font-extrabold leading-[3.5rem] text-center xl:whitespace-normal whitespace-nowrap lg:text-[2rem]">
          Our Latest <span className="text-theme-color">Jobs Post</span>
        </div>

        <div
          className="text-[#493438] text-base font-normal leading-[1.545rem]"
          onClick={jobPostsFetcher}
        >
          Discover the newest job opportunities posted across various
          industries.
        </div>
      </div>

      <div className="mt-[2.5rem]">
        <div className="flex flex-col gap-[3.4375rem] items-center justify-center overflow-hidden">
          {/* 1. View Jobs(Forward) */}
          {forwardJobPosts.length > 0 && (
            <div className="scroll-wrapper">
              <div className="scroll gap-[3.4375rem] md:gap-[2rem]">
                {forwardJobPosts.concat(forwardJobPosts).map((item, index) => {
                  return (
                    <div
                      className="flex p-[0.875rem] job-posts-scroll-card rounded-md"
                      key={index}
                      onClick={() =>
                        window.open(
                          `${process.env.NEXT_PUBLIC_ANGULAR_APP}/jobs/${item._id}`,
                          "_blank"
                        )
                      }
                    >
                      <div className="border border-[#E0E1E3] w-[2.75rem] h-[2.75rem] rounded-md mr-[0.625rem]">
                        <img
                          src={item.vendor?.logo}
                          alt="Logo"
                          className="rounded-md p-[1px] object-cover w-[2.73rem] h-[2.73rem]"
                        />
                      </div>

                      <div className="flex flex-col items-start mr-[0.75rem]">
                        <div className="text-[#493438] text-[1rem] leading-[1.545rem] whitespace-nowrap">
                          {item.title}
                        </div>
                        <div className="text-[#4B5162] text-[0.75rem] leading-[1.159rem] whitespace-nowrap">
                          {item.vendor?.company_name || "N/A"}
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
          )}
          {/* 2. View Jobs(Backward) */}
          {backwardJobPosts.length > 0 && (
            <div className="scroll-wrapper">
              <div className="scroll-left-to-right gap-[3.4375rem] md:gap-[2rem]">
                {backwardJobPosts
                  .concat(backwardJobPosts)
                  .map((item, index) => {
                    return (
                      <div
                        className="flex p-[0.875rem] job-posts-scroll-card rounded-md"
                        key={index}
                      >
                        <div className="border border-[#E0E1E3] w-[2.75rem] h-[2.75rem] rounded-md mr-[0.625rem]">
                          <img
                            src={item.vendor?.logo}
                            alt="Logo"
                            className="rounded-md object-cover w-[2.73rem] h-[2.73rem]"
                          />
                        </div>

                        <div className="flex flex-col items-start mr-[0.75rem]">
                          <div className="text-[#493438] text-[1rem] leading-[1.545rem] whitespace-nowrap">
                            {item.title}
                          </div>
                          <div className="text-[#4B5162] text-[0.75rem] leading-[1.159rem] whitespace-nowrap">
                            {item.vendor?.company_name || "N/A"}
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
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-[3.125rem] mb-[4.375rem]">
        <button
          className="text-sm font-bold text-theme-color border border-theme-color rounded-lg px-[1.25rem] h-[2.625rem] hover:bg-[#FFECF0]"
          onClick={() =>
            window.open(
              `${process.env.NEXT_PUBLIC_ANGULAR_APP}/search-job`,
              "_blank"
            )
          }
        >
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
