"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AccordionMinus, AccordionPlus } from "@/components/icons/form-icons";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="accordion-tab-shadow rounded-lg p-[1.25rem] transition duration-300 bg-white"
        >
          <div
            onClick={() => handleToggle(index)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="text-[1.125rem] font-extrabold leading-[1.758rem] text-[#493438]">
              {item.title}
            </div>
            <div className="text-xl">
              {activeIndex === index ? (
                <motion.span
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AccordionMinus />
                </motion.span>
              ) : (
                <motion.span
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <AccordionPlus />
                </motion.span>
              )}
            </div>
          </div>

          {/* Content Section */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === index ? "auto" : 0,
              opacity: activeIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden`}
          >
            <div className="mt-[0.625rem] text-[0.875rem] text-left text-[#493438] leading-[1.35rem]">
              {item.content}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
