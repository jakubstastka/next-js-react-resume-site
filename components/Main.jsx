import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-400">
            &quot;The Only Limits Are The Ones We Impose Upon Ourselves.&quot;
          </p>
          <h1 className="py-4 text-gray-700">
            Hey, I&apos;m <span className="text-emerald-700">James</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Fullstack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a Fullstack Developer specializing in building web
            applications. I have experience building complex web apps using
            stack Python + Django on backend, with JavaScript/TypeScript on the
            frontend. Currently I&apos;m working on my TypeScript and React
            knowledge to be a better at the front-end part of fullstack
            development.
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            One of my first personal project was{" "}
            <Link href={"https://elektronickynovinar.cz"}>E-Gon</Link>, a
            robotic journalist. That is my ongoing projects which aims to
            automatically write articles when provided external data sources,
            such as 3rd parti APIs.
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Since I&apos;m interested in automation both in work and my free
            time, my favourite past time is playing highly technical Minecraft
            modpacks. So when I am not reading docs for work/personal projects,
            I am watching youtube tutorials for Minecraft mods. It&apos;s
            awesomesauce.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
              <Link href={"https://www.linkedin.com/in/jakubstastka/"}>
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
              <Link href={"https://github.com/jakubstastka"}>
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
              <Link href={"mailto:jakub@stastka.org"}>
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
