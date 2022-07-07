import React from "react";
import { SkillData } from "../data/SkillData";
import Image from "next/image";

function Skill() {
  return (
    <div id="skill" className="bg-[#F7F7FB] pt-32 pb-44">
      <div className="max-w-[990px] mx-auto w-full">
        <h2 className="text-2xl text-center font-semibold">Skills</h2>
        <p className="text-lg text-center">Some of my skills.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-20 px-4 sm:px-0">
          {SkillData.map((skill) => (
            <div className="bg-white flex items-center p-6 rounded-md shadow-md" key={skill.id}>
              <div className="w-16 h-16 rounded-full overflow-hidden mr-5">
                <Image
                  src={skill.image}
                  width={64}
                  height={64}
                  alt="skill"
                  objectFit="cover"
                />
              </div>
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
