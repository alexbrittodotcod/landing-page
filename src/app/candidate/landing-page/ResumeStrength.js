"use client";

import React, { useEffect, useState } from "react";

const ResumeStrength = ({ score }) => {
  const radius = 50; // Radius of the circle
  const circumference = Math.PI * radius; // Half-circle circumference for a semi-circle
  const [offset, setOffset] = useState(circumference); // Initial stroke offset for animation

  useEffect(() => {
    // Calculate the offset for the given score
    const animationTimeout = setTimeout(() => {
      const newOffset = circumference - (score / 100) * circumference;
      setOffset(newOffset);
    }, 100);

    return () => clearTimeout(animationTimeout); // Cleanup timeout
  }, [score, circumference]);

  return (
    <div style={{ width: 150, textAlign: "center" }}>
      <svg width="150" height="80" viewBox="0 0 120 60">
        {/* Background Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#eee"
          strokeWidth="8"
          strokeDasharray={circumference} // Half-circle
          strokeDashoffset="0"
          transform="rotate(180 60 60)" // Rotate to make it a semi-circle
        />
        {/* Animated Progress Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#FF4560"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(180 60 60)" // Start from the left
          style={{
            transition: "stroke-dashoffset 1s ease-in-out", // Smooth animation
          }}
        />
        {/* Score Text */}
        <text x="60" y="45" textAnchor="middle" fontSize="18" fill="#000">
          {score}%
        </text>
      </svg>
    </div>
  );
};

export default ResumeStrength;
