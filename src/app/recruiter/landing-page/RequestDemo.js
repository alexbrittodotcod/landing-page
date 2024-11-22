"use client";

import { useEffect, useRef, useState } from "react";
import { FormTopBar } from "@/components/icons/form-icons";
import { postRequest } from "@/app/utils/api";
import { jobs, master } from "@/app/utils/apiEndpoints";
import { Toaster, toast } from "react-hot-toast";

// components/Footer.js
const HiringProcess = () => {
  //const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const reviewPoints = [
    {
      review:
        "“ Using Hirewalks has transformed our recruitment services. The detailed candidate profiles and skill analysis allow us to shortlist candidates effectively and efficiently. “",
      name: "Roshan SK",
      designation: "Recuirement Manager",
    },
    {
      review:
        "“ HireWalks has been incredibly beneficial to us in finding the right candidate for our company. Their smart plans paved down solutions to hire better. “",
      name: "Neha M",
      designation: "CEO",
    },
    {
      review: `“ As a small business owner, I often struggle to find the 
time and resources for hiring. Everything changed when I partnered with HireWalks. It’s affordable, easy to navigate. “`,
      name: "Lathika R",
      designation: "Product Manager",
    },
    {
      review: `“ As a small business owner, I often struggle to find the 
time and resources for hiring. Everything changed when I partnered with HireWalks. It’s affordable, easy to navigate. “`,
      name: "Lathika R",
      designation: "Product Manager",
    },
    {
      review: `“ As a small business owner, I often struggle to find the 
time and resources for hiring. Everything changed when I partnered with HireWalks. It’s affordable, easy to navigate. “`,
      name: "Lathika R",
      designation: "Product Manager",
    },
  ];
  const firstContainerRef = useRef(null);
  const secondContainerRef = useRef(null);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobile_number: "",
    role: 1,
    inquiry: 8,
    company_name: "",
    reason: "",
  });

  useEffect(() => {
    const firstContainer = firstContainerRef.current;
    console.log(firstContainer);
    const secondContainer = secondContainerRef.current;

    // Set the first container height to match the second container height
    firstContainer.style.height = `${secondContainer.offsetHeight}px`;

    // Start auto-scrolling from top to bottom
    const scrollInterval = setInterval(() => {
      if (
        firstContainer.scrollTop <
        firstContainer.scrollHeight - firstContainer.clientHeight
      ) {
        firstContainer.scrollTop += 1; // Adjust for scroll speed
      } else {
        firstContainer.scrollTop = 0;
      }
    }, 50); // Adjust speed as needed

    return () => clearInterval(scrollInterval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(inputs);
      const result = await postRequest(`${master.postContactData}`, inputs);

      if (result) {
        setInputs({
          name: "",
          email: "",
          mobile_number: "",
          role: 1,
          inquiry: 8,
          company_name: "",
          reason: "",
        });
        setLoading(true);
        toast.success(result.msg);
      }
    } catch (error) {
      console.error("Error from API", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid place-items-center">
      <div className="text-white font-extrabold text-[2rem] pb-[4px] leading-[3.125rem] pt-[5rem]">
        Request a <span className="text-theme-color">Demo</span>
      </div>

      <div className="grid grid-cols-2 gap-[6.875rem] lg:grid-cols-1 items-center max-w-7xl mt-[3.75rem] relative z-10">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#131316] to-transparent" style="background: linear-gradient(19.21deg, #131316 17.74%, rgba(19, 19, 22, 0.6) 52.88%, rgba(19, 19, 22, 0) 84.54%); z-index: 10;"></div> */}
        <div
          className="flex flex-col gap-[4.5rem] xl:px-[1.563rem] overflow-y-hidden h-[38rem]"
          ref={firstContainerRef}
        >
          {/* Top gradient */}
          <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#131316] via-[rgba(19, 19, 22, 0.6)] to-transparent pointer-events-none"></div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#131316] via-[rgba(19, 19, 22, 0.6)] to-transparent pointer-events-none"></div>

          {reviewPoints.map((item, index) => {
            return (
              <div key={index} className="text-white text-left">
                <div className="text-[1.125rem] leading-[1.8rem]">
                  {item.review}
                </div>

                <div className="flex flex-row mt-[14px] space-x-[14px] items-center">
                  <div>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/roshan.png`}
                      className="w-[2.8125rem] h-[2.8125rem] rounded-full"
                    />
                  </div>

                  <div>
                    <div className="font-extrabold text-[1.125rem] leading-[1.75rem]">
                      {item.name}
                    </div>
                    <div className="text-[0.875rem] text-[#9394A1] leading-[1.3225rem]">
                      {item.designation}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="text-white p-[2.5rem] bg-[#212126] rounded-lg z-[11]"
          ref={secondContainerRef}
        >
          <div className="text-[1.25rem] font-extrabold mb-[1.5rem] flex flex-row gap-[8px] justify-center items-center">
            <div>Schedule Now</div>
            <div>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/white-stars.svg`}
                alt="Stars"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="flex text-[#9394A1] text-[0.875rem] leading-[1.35rem] mb-[8px]"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-[#131316]"
                placeholder="What should we call you?"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />{" "}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="flex text-[#9394A1] text-[0.875rem] leading-[1.35rem] mb-[8px]"
              >
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-[#131316]"
                placeholder="Your work email, please."
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                required
              />{" "}
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_name"
                className="flex text-[#9394A1] text-[0.875rem] leading-[1.35rem] mb-[8px]"
              >
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company_name"
                className="w-full px-4 py-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-[#131316]"
                placeholder="Where do you work?"
                value={inputs.company_name}
                onChange={(e) =>
                  setInputs({ ...inputs, company_name: e.target.value })
                }
                required
              />{" "}
            </div>

            <div className="mb-4">
              <label
                htmlFor="mobile_number"
                className="flex text-[#9394A1] text-[0.875rem] leading-[1.35rem] mb-[8px]"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="mobile_number"
                className="w-full px-4 py-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-[#131316]"
                placeholder="Number to reach you."
                value={inputs.mobile_number}
                onChange={(e) =>
                  setInputs({ ...inputs, mobile_number: e.target.value })
                }
                required
              />{" "}
            </div>

            <div className="mb-4">
              <label
                htmlFor="reason"
                className="flex text-[#9394A1] text-[0.875rem] leading-[1.35rem] mb-[8px]"
              >
                Reason <span className="text-red-500">*</span>
              </label>
              <textarea
                id="reason"
                required
                className="w-full px-4 py-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-[#131316]"
                placeholder="Please provide your reason"
                value={inputs.reason}
                onChange={(e) =>
                  setInputs({ ...inputs, reason: e.target.value })
                }
              />
            </div>

            {/* <div className="mb-4">
              <label
                htmlFor="role"
                className="flex text-[#9394A1] text-[0.875rem] leading-[1.35rem] mb-[8px]"
              >
                Role
              </label>
              <select
                id="role"
                defaultValue={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="w-full px-4 py-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-[#131316] text-white"
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="manager">Manager</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="other">Other</option>
              </select>
            </div> */}

            <div className="pt-[12px]">
              <button
                className={`w-full h-12 py-2 px-4 rounded-lg bg-theme-color text-white text-sm font-bold flex items-center justify-center gap-2 ${
                  loading ? "cursor-not-allowed" : ""
                }`}
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="dot bg-white animate-blink w-[0.7rem] h-[0.7rem] rounded-full"></span>
                    <span className="dot bg-white animate-blink delay-150 w-[0.7rem] h-[0.7rem] rounded-full"></span>
                    <span className="dot bg-white animate-blink delay-300 w-[0.7rem] h-[0.7rem] rounded-full"></span>
                  </span>
                ) : (
                  "Get a Demo"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HiringProcess;
