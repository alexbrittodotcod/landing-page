"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname instead of useRouter
import { useRouter } from "next/navigation";
import { DropDownIcon, LookingForJobIcon } from "../icons/form-icons";

const CustomLink = ({ href, title, className = "", target }) => {
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before using useRouter
  useEffect(() => {
    setMounted(true);
  }, []);

  const pathname = usePathname(); // Use usePathname hook to get the current path
  //console.log(pathname, "path"); // Logs the current path

  if (!mounted) {
    return null; // Optionally return null or fallback content until mounted
  }

  return (
    <Link
      href={href}
      className={`${className} relative group hover:text-theme-color ${
        pathname === href ? "text-theme-color" : ""
      }`}
      target={target}
    >
      <div className="flex items-center">
        <div>{title}</div>

        {/* 1. Looking for a Job icon*/}
        {title == "Looking for a Job" ? (
          <div className="ml-[6px] mt-[2px]">
            <LookingForJobIcon />
          </div>
        ) : (
          ""
        )}

        {/* 1. Features*/}
        {title == "Features" ? (
          <div className="ml-[6px] mt-[3px]">
            <DropDownIcon />
          </div>
        ) : (
          ""
        )}
      </div>
      {/* Uncomment this part if you need to highlight active links */}
      {/* <span
        className={`h-[1px] inline-block bg-theme-color absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        } dark:bg-light`}
      ></span> */}
    </Link>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(0);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname(); // Use usePathname hook to get the current path
  // Check if the pathname starts with '/recruiter'
  const isRecruiter = pathname.startsWith("/recruiter");

  //console.log(isRecruiter, "isRecruiter"); // Logs true if the path starts with '/recruiter'

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();

  /* const navigateToHome = () => {
     router.push("/");
     //window.location.pathname = "/";
  }; */

  return (
    <>
      <header
        className={`py-[1rem] sticky top-0 z-[999] transition-all duration-300 
        ${scrolled ? "bg-white shadow-lg" : "header-linear-bg"}`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 w-[100%]">
          <div className="flex gap-[10px]">
            {/* Menu button */}
            <button
              className="flex-col justify-center items-center hidden lg:block"
              onClick={handleClick}
            >
              <span
                className={`bg-theme-color transition-all duration-300 block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-theme-color transition-all duration-300 block h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-theme-color transition-all duration-300 block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </button>

            {/* Logo */}
            <div
              className="text-xl font-bold cursor-pointer xs:hidden"
              onClick={() => router.push("/")}
            >
              {/* <Link href="/"> */}
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/HW Red logo - Main Logo.svg`}
                alt="HW Logo"
                layout="intrinsic"
                width={133} // Set the width as a reference
                height={40} // Set the height as a reference
                priority
              />
              {/* </Link> */}
            </div>
          </div>

          {/* Navigation */}
          <nav className="lg:hidden">
            <div className="flex space-x-6 text-gray-700 text-[1rem]">
              {isRecruiter ? (
                <>
                  <CustomLink href="/" title="Home" />
                  <CustomLink href="/search-job" title="Features" />
                  <CustomLink href="/search-job" title="Pricing" />
                  <CustomLink href="/resume-checker" title="Download App" />
                  <CustomLink href="/download-app" title="Looking for a Job" />
                </>
              ) : (
                <>
                  {/* Other block to show when isRecruiter is false */}
                  <CustomLink href="/" title="Home" />
                  <CustomLink
                    href={`${process.env.NEXT_PUBLIC_ANGULAR_APP}/search-job`}
                    title="Search Job"
                    target="_blank"
                  />
                  {/* <CustomLink href="#resume-checker" title="Resume Checker" /> */}
                  <CustomLink href="#download-app" title="Download App" />
                </>
              )}
            </div>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-[24px]">
            {isRecruiter ? (
              <>
                <div
                  className="text-theme-color Avenir-800 hover:text-gray-900 cursor-pointer xs:text-[0.75rem]"
                  onClick={() =>
                    window.open(
                      `${process.env.NEXT_PUBLIC_ANGULAR_APP}/recruiter-login`,
                      "_blank"
                    )
                  }
                >
                  Log in
                </div>

                <button
                  className="bg-theme-color text-white px-[24px] py-[8px] rounded-lg transition xs:text-[0.75rem] hover:bg-red-600"
                  onClick={() =>
                    window.open(
                      `${process.env.NEXT_PUBLIC_ANGULAR_APP}/recruiter-registration`,
                      "_blank"
                    )
                  }
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <div
                  className="text-theme-color Avenir-800 hover:text-red-600 cursor-pointer xs:text-[0.75rem]"
                  onClick={() =>
                    window.open(
                      `${process.env.NEXT_PUBLIC_ANGULAR_APP}/candidate-login`,
                      "_blank"
                    )
                  }
                >
                  Candidate Login
                </div>

                <button
                  className="bg-theme-color text-white px-[24px] py-[8px] rounded-lg hover:bg-red-600 transition xs:text-[0.75rem]"
                  onClick={() =>
                    window.open(
                      `${process.env.NEXT_PUBLIC_ANGULAR_APP}/recruiter-login`,
                      "_blank"
                    )
                  }
                >
                  Employeer Login
                </button>
              </>
            )}
          </div>
        </div>

        {/* For small screen Navigation */}
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[15rem] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(27,27,27,.9)] rounded-lg backdrop-blur py-16"
          >
            <div className="text-[1rem] text-white flex flex-col items-center">
              {isRecruiter ? (
                <>
                  <CustomLink href="/" title="Home" />
                  <CustomLink href="/search-job" title="Features" />
                  <CustomLink href="/search-job" title="Pricing" />
                  <CustomLink href="/resume-checker" title="Download App" />
                  <CustomLink href="/download-app" title="Looking for a Job" />
                </>
              ) : (
                <>
                  {/* Other block to show when isRecruiter is false */}
                  <CustomLink href="/" title="Home" />
                  <CustomLink
                    href={`${process.env.NEXT_PUBLIC_ANGULAR_APP}/search-job`}
                    title="Search Job"
                    target="_blank"
                  />
                  {/* <CustomLink href="#resume-checker" title="Resume Checker" /> */}
                  <CustomLink href="#download-app" title="Download App" />
                </>
              )}
            </div>
          </motion.div>
        ) : null}
      </header>
    </>
  );
};

export default Header;
