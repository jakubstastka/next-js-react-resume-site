import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Main() {
  return (
    <div className="w-full h-full lg:h-screen text-center">
      <div className="max-w-[1240px] pt-32 md:pt-15 lg:pt-0 w-full md:h-full mx-auto p-2 flex justify-center md:items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-400">
            &quot;The Only Limits Are The Ones We Impose Upon Ourselves.&quot;
          </p>
          <h1 className="pt-4 text-gray-700">
            Hello, I&apos;m{" "}
            <span className="text-emerald-700">Jakub Šťástka</span>
          </h1>
          <h1 className="pb-4 text-gray-700">Fullstack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a Fullstack Developer specializing in building both web and desktop
            applications. I have experience building complex web apps using
            stack Python + Django on the back-end, with React/Vue front-ends, 
            also using meta frameworks such as Next.js or Gatsby.JS.
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            My experience includes deploying apps using solutions requiring containerization, building CD/CI pipelines, managing Linux servers.
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            One of my first personal projects was{" "}
            <Link href={"https://elektronickynovinar.cz"}>E-Gon</Link>, a
            robotic journalist. That is an ongoing project which aims to
            automatically write articles when provided external data sources,
            such as 3rd party APIs. The other hobby project I am proud of is my
            blog <Link href={"https://pijukafe.cz"}>piju kafe</Link>, about my
            passion for coffee. Recently I have developed <Link href={"https://blbyotazky.cz"}>blbý otázky</Link>, 
            that answers &apos;stupid&apos; questions using ChatGPT.
          </p>
          <div className="flex items-center justify-between pb-5 max-w-[330px] m-auto py-4">
            <Link href={"https://www.linkedin.com/in/jakubstastka/"}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href={"https://github.com/jakubstastka"}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href={"mailto:jakub@stastka.org"}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
