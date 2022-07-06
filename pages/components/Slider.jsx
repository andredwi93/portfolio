import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id="project" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center">Gallery</h1>
      <div className="p-4 flex justify-center items-center relative">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                size={50}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
              />
              {index === current && (
                <Image
                  src={slide.image}
                  width="1440"
                  height="600"
                  alt="/"
                  objectFit="cover"
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                size={50}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
