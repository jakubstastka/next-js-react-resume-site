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
            applications. Currently I&apos;m working on my TypeScript and React
            knowledge to be a better at the front-end part of fullstack
            development.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
