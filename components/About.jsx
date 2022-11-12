import React from "react";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-emerald-700">
            About
          </p>
          <h2 className="py-2 text-gray-600">Who am I?</h2>
          <p className="py-2 text-gray-600">
            I spent over 11 years working as a journalist. Since I have been
            always interested in technology and coding, it was only a matter of
            time before I started developing my own tools in Python to help me
            with my day job.
          </p>
          <p className="py-2 text-gray-600">
            I switched carrers to software engineering, specializing in web
            application development. I work with Python web framework Django,
            HTML, CSS (Bootstrap, Tailwind), and TypeScript/JavaScript (React,
            jQuery).
          </p>

          <p className="py-2 text-gray-600">
            My experience includes server management and related technologies
            (Linux, PostgreSQL, Nginx, Git, Docker).
          </p>

          <p className="py-2 text-gray-600">
            In my spare time, I like to learn new things about software
            development, which includes some personal projects. One of which is
            E-Gon, an electronic journalist. Its main task is to automate
            production of news articles. The current project is to provide
            automated news about the Covid-19 situation in the Czech Republic.
          </p>
        </div>
        <div>
          <p>Here should be photo</p>
        </div>
      </div>
    </div>
  );
}
