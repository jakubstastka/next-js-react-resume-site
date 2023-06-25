import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="w-full p-4 lg:h-screen flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-gray-600">
            About
          </p>
          <div className="text-4xl text-extrabold py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 uppercase pb-5">
            The "Stastka" in Stastka Engineering
          </div>
          <div className="text-gray-300 space-y-5">
            <div>
              &lsquo;Typical&rsquo; isn&apos;t really my style. You see, I spent over a decade in
              journalism before swapping my pen for a keyboard. Always the tech
              enthusiast, I&apos;ve been dabbling in web development since 2001.
              Thank the good folks at Počítač pro každého magazine for that
              initial spark. Even while I was penning articles, my mind was busy
              exploring automation potential, thinking about how I could get
              machines to do the legwork so writers could focus on crafting
              compelling narratives.
            </div>
            <div>
              Then came the plot twist nobody saw coming: Covid-19. As the
              pandemic upturned the world, I saw an opportunity: why not
              automate news articles? The data was already there for the taking,
              I just needed to piece basically a scraper and a script to bring it
              all to life. And thus, my project E-Gon - an homage to the
              legendary journalist Egon Erwin Kitch - was born, eventually
              blooming into a fully-fledged Django web app.
            </div>
            <div>
              There&apos;s something intoxicating about the life of a developer, a
              thrill that journalism could never quite match. So I traded in my
              press badge for a software engineering career, specializing in web
              application development. These days, you&apos;ll find me juggling
              Django, HTML, CSS (Bootstrap, Tailwind), and
              TypeScript/JavaScript, with a soft spot for React.
            </div>
            <div>
              Alongside my newfound love for development, I also dabbled with
              the art of Linux server management, and familiarized myself with a
              smorgasbord of technologies including PostgreSQL, Nginx, Git,
              Docker, and more. But that&apos;s enough about me. Let&apos;s talk about
              what I can do for you.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src={`/assets/various/jakubstastka.jpg`}
            alt="Yup. That&apos;s me."
            width={300}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
