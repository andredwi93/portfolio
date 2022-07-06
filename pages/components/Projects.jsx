import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { ProjectsData } from "./ProjectsData";

function Projects() {
  return (
    <div id="project" className="pt-32 pb-44">
      <div className="max-w-[990px] mx-auto w-full">
        <h2 className="text-2xl text-center font-semibold">Projects</h2>
        <p className="text-lg text-center">
          some of the projects I&apos;ve worked on.
        </p>
        <div className="relative mt-20">
          <Swiper
            slidesPerView={1}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {ProjectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[500px] object-contain"
                  />
                  <h5 className="text-xl text-center font-semibold mt-4">
                    {project.name}
                  </h5>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Projects;
