import Image from "next/image";

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
        <h2 className="py-4 text-gray-600">
          Featured Technologies I Can Work With
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100"
              >
                <div className="grid grid-cols-2 gap-4 justify-center">
                  <div className="m-auto">
                    <Image
                      src={`/assets/skills/${skill.toLowerCase()}.png`}
                      alt={skill}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center text-gray-600">
                    <h3>{skill}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
