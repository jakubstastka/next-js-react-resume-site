import Image from "next/image";

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
            I am not what you might call a typical developer. I spent over 11
            years working as a journalist. I have been interested in computers
            and programming forever and started to develop webpages around the
            year 2001 with the help of a computer magazine{" "}
            <span className="font-bold">Počítač pro každého</span>. Even at my
            journalist job, I was researching what could be automated, so
            writers could focus on what was important.
          </p>
          <p className="py-2 text-gray-600">
            When the Covid-19 pandemic began, I took it upon myself to create a
            piece of software that could write news articles. The data source
            was already available, so it was only a matter of integrating API
            and making a script to generate the text. The project grew,
            eventually getting the name E-Gon (after the famous journalist Egon
            Erwin Kitch) and becoming a Django web app.
          </p>
          <p className="py-2 text-gray-600">
            Realizing that being a developer is much more fun than being a
            journalist, I switched careers to software engineering, specializing
            in web application development. I work with Python web framework
            Django, HTML, CSS (Bootstrap, Tailwind), and TypeScript/JavaScript.
            My favorite front-end framework is React.
          </p>

          <p className="py-2 text-gray-600">
            My experience includes server management, knowledge of technologies
            such as PostgreSQL, Nginx, Git, Docker, and many more. I use the
            Linux operating system.
          </p>

          <p className="py-2 text-gray-600">
            In my spare time, I like to learn new things about software
            development, which includes some personal projects. I list some of
            those projects with their git repositories in the Projects section.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src={`/assets/various/jakubstastka.jpg`}
            alt="Yup. That's me."
            width={300}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
