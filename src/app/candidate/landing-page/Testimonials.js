"use client";
// components/Testimonials.js
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "@/components/icons/candidate-landing";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Kannan",
    company: "Infosight Consulting Services Pvt Ltd",
    text: "Hirewalks made my job search smoother and easier than ever. Within days, I found roles that matched my skills perfectly. The platform's job recommendations were spot on, and I landed interviews quickly.",
    rating: 4,
  },
  {
    name: "Anita Sharma",
    company: "Visionary Solutions Ltd",
    text: "Applying for jobs through Hirewalks was a game-changer. The resume scoring feature helped me fine-tune my CV, and the platform connected me with companies actively hiring in my field. Highly recommended!",
    rating: 1,
  },
  {
    name: "Vikram Singh",
    company: "NextGen Enterprises",
    text: "I was surprised at how fast I got responses using Hirewalks. The application process was simple, and I appreciated the transparency in the status of my applications. Thanks to Hirewalks, I'm now working in my dream role.",
    rating: 5,
  },
  {
    name: "Meena George",
    company: "Tech Solutions Pvt Ltd",
    text: "The platform is intuitive and easy to navigate. Hirewalks connected me with recruiters who valued my experience, leading to a role that perfectly matches my aspirations.",
  },
  {
    name: "Rahul Nair",
    company: "Creative Minds Co.",
    text: "Hirewalks simplified the entire job application process for me. The regular updates on applications kept me informed, and the resume suggestions were top-notch.",
    rating: 4,
  },
  {
    name: "Priya Das",
    company: "Global Innovations Ltd",
    text: "I highly recommend Hirewalks to job seekers. The user-friendly interface and targeted job recommendations made my search stress-free and effective.",
    rating: 4,
  },
  {
    name: "Meena George",
    company: "Tech Solutions Pvt Ltd",
    text: "The platform is intuitive and easy to navigate. Hirewalks connected me with recruiters who valued my experience, leading to a role that perfectly matches my aspirations.",
    rating: 5,
  },
  {
    name: "Rahul Nair",
    company: "Creative Minds Co.",
    text: "Hirewalks simplified the entire job application process for me. The regular updates on applications kept me informed, and the resume suggestions were top-notch.",
    rating: 5,
  },
  {
    name: "Priya Das",
    company: "Global Innovations Ltd",
    text: "I highly recommend Hirewalks to job seekers. The user-friendly interface and targeted job recommendations made my search stress-free and effective.",
    rating: 5,
  },
  {
    name: "Meena George",
    company: "Tech Solutions Pvt Ltd",
    text: "The platform is intuitive and easy to navigate. Hirewalks connected me with recruiters who valued my experience, leading to a role that perfectly matches my aspirations.",
    rating: 5,
  },
  {
    name: "Rahul Nair",
    company: "Creative Minds Co.",
    text: "Hirewalks simplified the entire job application process for me. The regular updates on applications kept me informed, and the resume suggestions were top-notch.",
    rating: 5,
  },
  {
    name: "Priya Das",
    company: "Global Innovations Ltd",
    text: "I highly recommend Hirewalks to job seekers. The user-friendly interface and targeted job recommendations made my search stress-free and effective.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(1);
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const maxStars = 5;

  const changePage = (newPage) => {
    if (newPage < 0) newPage = totalPages - 1;
    if (newPage >= totalPages) newPage = 0;
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1023) {
      setTestimonialsPerPage(3);
    } else if (screenWidth < 1024 && screenWidth > 639) {
      setTestimonialsPerPage(2);
    } else if (screenWidth < 640) {
      setTestimonialsPerPage(1);
    }
  }, []);

  const startIndex = currentPage * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  return (
    <div className="flex flex-col items-center p-4 overflow-hidden">
      <motion.div
        key={currentPage}
        initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`grid grid-cols-${testimonialsPerPage} gap-6`}
      >
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={`${currentPage}-${index}`}
            className="testimonial-card rounded-lg text-center flex flex-col justify-between h-auto"
          >
            <div className="w-full p-[1.5rem]">
              <div className="flex w-full justify-between">
                <div className="flex">
                  {Array.from({ length: maxStars }, (_, index) => (
                    <Star
                      key={index}
                      fill={index < testimonial.rating ? "#E8395C" : "#C4C4C4"} // #C4C4C4 for gray
                    />
                  ))}
                </div>

                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/testimonials-quotes.svg`}
                  alt="quote"
                  width={35} // Specify image dimensions
                  height={31}
                  className="w-[2.188rem] h-[1.938rem]"
                />
              </div>

              <div className="mt-[0.625rem] text-[#493438] text-[0.875rem] leading-[1.352rem] text-left overflow-hidden line-clamp-6 lg:line-clamp-4">
                {testimonial.text}
              </div>
            </div>

            <div className="bg-[#E9E9EA] rounded-b-lg py-[0.875rem] px-[1.5rem] text-left">
              <div className="font-extrabold text-[1.125rem] leading-[1.758rem] text-[#493438]">
                {testimonial.name}
              </div>
              <div className="text-[0.875rem] leading-[1.352rem] text-[#493438] mt-[4px]">
                Hired at&nbsp;
                <span className="font-extrabold"> {testimonial.company}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="flex items-center mt-[1.75rem] space-x-[4px]">
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => changePage(pageIndex)}
            className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${
              pageIndex === currentPage
                ? "bg-gray-800 !w-[24px]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
