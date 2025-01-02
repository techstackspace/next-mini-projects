"use client";

import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[]; // Array of image URLs
  num: number;
}

const CarouselFlex: React.FC<CarouselProps> = ({ images, num }) => {
  // Function to get the visible count based on screen size
  const getVisibleCount = (): number => {
    if (window.innerWidth <= 640) return num - 2; // Small screens
    if (window.innerWidth <= 1024) return num - 1; // Medium screens
    return num; // Large screens
  };

  const [startIndex, setStartIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = (): void => {
    setStartIndex((prev) =>
      prev + visibleCount >= images.length ? 0 : prev + 1
    );
  };

  const handlePrev = (): void => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? images.length - visibleCount : prev - 1
    );
  };

  return (
    <div className="relative overflow-hidden w-full max-w-6xl mx-auto">
      <button
        onClick={handlePrev}
        className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
        aria-label="Previous Slide"
      >
        ←
      </button>

      <div className="overflow-hidden">
        <div
          // className="flex gap-x-4 transition-transform duration-500 ease-in-out"
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(startIndex * 100) / visibleCount}%)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              // className="flex-shrink-0 min-w-0"
              className="flex-shrink-0 w-full"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
        aria-label="Next Slide"
      >
        →
      </button>
    </div>
  );
};

export default CarouselFlex;
