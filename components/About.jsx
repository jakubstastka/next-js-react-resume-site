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
            and programming since forever and started to develop my own webpages
            around the year 2001 with the help of a computer magazine{" "}
            <span className="font-bold">Počítač pro každého</span>. Even at my
            journalist job, I was always researching how things could be
            automated, so writers could focus on writing and not dealing with
            boring tasks.
          </p>
          <p className="py-2 text-gray-600">
            When the Covid-19 pandemic began, I took it upon myself to create a
            piece of software that would write articles on its own. The data
            source was already available, so it was only a matter of integrating
            API and making a script to generate the text. The project grew and
            grew, eventually getting the name E-Gon (after the famous journalist
            Egon Erwin Kitch) and becoming a Django web app.
          </p>
          <p className="py-2 text-gray-600">
            Realizing that being a developer is much more fun than being a
            journalist, I switched carrers to software engineering, specializing
            in web application development. I work with Python web framework
            Django, HTML, CSS (Bootstrap, Tailwind), and TypeScript/JavaScript.
            My favourite frontend framework is React.
          </p>

          <p className="py-2 text-gray-600">
            My experience includes server management, I can also work with
            technologies such as PostgreSQL, Nginx, Git, Docker and many more. I
            use the Linux operating system.
          </p>

          <p className="py-2 text-gray-600">
            In my spare time, I like to learn new things about software
            development, which includes some personal projects. I list some of
            those projects with their git repos in the Projects section.
          </p>
        </div>
        <div>
          <p>Here should be photo</p>
        </div>
      </div>
    </div>
  );
}
