import { SiPython, SiDjango, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiDigitalocean, SiAmazonaws, SiNpm, SiGit, SiDocker, SiLinux, SiPostgresql } from "react-icons/si";

const skills = [
  {"icon": <SiPython size={50} />, "skill": "Python"},
  {"icon": <SiDjango size={50} />, "skill": "Django"},
  {"icon": <SiPostgresql size={50} />, "skill": "PostgreSQL"},
  {"icon": <SiHtml5 size={50} />, "skill": "HTML"},
  {"icon": <SiCss3 size={50} />, "skill": "CSS"},
  {"icon": <SiJavascript size={50} />, "skill": "JavaScript"},
  {"icon": <SiTypescript size={50} />, "skill": "TypeScript"},
  {"icon": <SiReact size={50} />, "skill": "React"},
  {"icon": <SiNextdotjs size={50} />, "skill": "Next.js"},
  {"icon": <SiTailwindcss size={50} />, "skill": "Python"},
  {"icon": <SiTailwindcss size={50} />, "skill": "Tailwind"},
  {"icon": <SiDigitalocean size={50} />, "skill": "DigitalOcean"},
  {"icon": <SiAmazonaws size={50} />, "skill": "AWS"},
  {"icon": <SiNpm size={50} />, "skill": "NPM"},
  {"icon": <SiGit size={50} />, "skill": "git"},
  {"icon": <SiDocker size={50} />, "skill": "Docker"},
  {"icon": <SiLinux size={50} />, "skill": "Linux"},
]

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-emerald-700">
          Skills
        </p>
        <h2 className="py-4 text-gray-600">
          Featured Technologies I Use
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="p-6 shadow-xl rounded-xl"
              >
                <div className="grid grid-cols-2 gap-4 justify-center">
                  <div className="m-auto w-30 h-30 text-gray-600">
                    {skill.icon}
                  </div>
                  <div className="flex flex-col items-center justify-center text-gray-600">
                    <div className="font-light">{skill.skill}</div>
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
