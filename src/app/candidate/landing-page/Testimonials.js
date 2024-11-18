"use client";
// components/Testimonials.js
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Kannan",
    company: "Infosight Consulting Services Pvt Ltd",
    text: "Hirewalks made my job search smoother and easier than ever. Within days, I found roles that matched my skills perfectly. The platform's job recommendations were spot on, and I landed interviews quickly.",
  },
  {
    name: "Anita Sharma",
    company: "Visionary Solutions Ltd",
    text: "Applying for jobs through Hirewalks was a game-changer. The resume scoring feature helped me fine-tune my CV, and the platform connected me with companies actively hiring in my field. Highly recommended!",
  },
  {
    name: "Vikram Singh",
    company: "NextGen Enterprises",
    text: "I was surprised at how fast I got responses using Hirewalks. The application process was simple, and I appreciated the transparency in the status of my applications. Thanks to Hirewalks, I'm now working in my dream role.",
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
  },
  {
    name: "Priya Das",
    company: "Global Innovations Ltd",
    text: "I highly recommend Hirewalks to job seekers. The user-friendly interface and targeted job recommendations made my search stress-free and effective.",
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
  },
  {
    name: "Priya Das",
    company: "Global Innovations Ltd",
    text: "I highly recommend Hirewalks to job seekers. The user-friendly interface and targeted job recommendations made my search stress-free and effective.",
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
  },
  {
    name: "Priya Das",
    company: "Global Innovations Ltd",
    text: "I highly recommend Hirewalks to job seekers. The user-friendly interface and targeted job recommendations made my search stress-free and effective.",
  },
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(1);
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

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
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
            <p className="text-base mb-4">{testimonial.text}</p>
            <h3 className="text-lg font-bold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.company}</p>
          </div>
        ))}
      </motion.div>

      <div className="flex items-center mt-6 space-x-2">
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
