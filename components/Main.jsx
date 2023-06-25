import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Main() {
  return (
    <div className="pt-5 text-center text-gray-900 ">
      <div className="max-w-[1240px] pt-0 w-full md:h-full mx-auto p-2 flex justify-center md:items-center">
        <div className="bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl p-1 md:p-10 sm:pt-2">
          <div className="lg:text-9xl md:text-4xl text-3xl font-bold">
            <div>STASTKA</div>
            <div>ENGINEERING</div>
          </div>
          <div className="text-justify py-1 md:py-4 max-w-[70%] m-auto space-y-5 pt-5">
            <div>
              &lsquo;Full-stack Developer&rsquo; isn&apos;t just a fancy title we like to throw
              around. At our company, it means plunging headfirst into both web
              and desktop applications, and coming out with something
              spectacular. We&apos;ve mastered the art of spinning complex web apps
              into existence, juggling Python and Django for back-end, while
              pulling some React or Vue strings for front-end. You&apos;ve heard of
              Next.js or Gatsby.js? Cute. We call them Tuesday.
            </div>
            <div>
              We&apos;re no strangers to the grittier side of things. Deploying apps?
              We do it before breakfast, often involving containerization.
              Building CD/CI pipelines? A walk in the park. Managing Linux
              servers? It&apos;s like brushing our teeth. But don&apos;t worry, we won&apos;t
              bore you with the details.
            </div>
            <div>
              Tired of the ordinary? Let us intrigue you. When it comes to
              creativity, we&apos;re like a constantly brewing pot of coffee -
              there&apos;s always something fresh and exciting coming up. Think about
              it: your next app could be our new thrill, our next challenge.
              Just imagine the thrill of seeing your idea turned into reality,
              wrapped up with all the coding finesse we can muster.
            </div>
            <div>
              So why wait? Jump aboard and let&apos;s concoct something extraordinary
              together.
            </div>
          </div>

          <div className="flex items-center justify-around pb-5 m-auto py-4 rounded-2xl space-x-5">
            <div className="bg-gray-900 p-5 rounded-lg">
              <Link href={"https://www.linkedin.com/in/jakubstastka/"}>
                <div>
                  <FaLinkedinIn className="text-emerald-400 text-3xl" />
                </div>
              </Link>
            </div>
            <div className="bg-gray-900 p-5 rounded-lg">
              <Link href={"https://github.com/jakubstastka"}>
                <div>
                  <FaGithub className="text-emerald-400 text-3xl" />
                </div>
              </Link>
            </div>
            <div className="bg-gray-900 p-5 rounded-lg">
              <Link href={"mailto:jakub@stastka.org"}>
                <div>
                  <AiOutlineMail className="text-emerald-400 text-3xl" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
