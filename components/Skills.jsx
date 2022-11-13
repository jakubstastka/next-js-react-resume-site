import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const skills = [
  "Python",
  "Django",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "Tailwind",
  "DigitalOcean",
  "AWS",
  "npm",
  "git",
  "Docker",
  "Linux",
];

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-emerald-700">
          Skills
        </p>
        <h2 className="py-4">Technologies I Can Work With</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className="grid grid-cols-2 gap-4 justify-center intems-center">
                  <div className="m-auto">
                    <Image
                      src={`/assets/skills/${skill.toLowerCase()}.png`}
                      alt=""
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{skill}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="m-auto text-emerald-700"
                size={20}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Skills;
