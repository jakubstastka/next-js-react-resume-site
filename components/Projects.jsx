import ProjectEntry from "../components/ProjectEntry";

export default function Projects() {
  return (
    <div id="projects" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-emerald-700">
          Projects
        </p>
        <h2 className="py-4 text-gray-600">Things I Have Made</h2>
        <div className="pb-4 italic font-light text-gray-500">
          Listed in no particular order.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-gray-600 gap-4">
        <ProjectEntry
            name={"blbý otázky"}
            description={
              "A place for 'stupid' questions answered by ChatGPT. A web fullstack app using decoupled Next.js with Tailwind and Django with Django REST Framework."
            }
            link={"https://blbyotazky.cz"}
          />
          <ProjectEntry
            name={"piju kafe"}
            description={
              "A coffee blog written in Next.js/React/Tailwind, with markdown files as a simple CMS. Currently undergoing a more robust CMS integration."
            }
            link={"https://pijukafe.cz"}
          />
          <ProjectEntry
            name={"Electronic Journalist"}
            description={
              "Project Electronic Journalist aims to provide automated news article generation, currently about the Covid-19 situation in the Czech Republic. Using Python, Django, Bootstrap."
            }
            link={"https://elektronickynovinar.cz"}
          />
          <ProjectEntry
            name={"Wedding Invite"}
            description={
              "I used React and framework Gatsby.js to generate a simple static website inviting friends & family to my own wedding. Written using Gatsby.js/React/Tailwind."
            }
            link={"https://svatba.stastka.xyz"}
          />
          <ProjectEntry
            name={"Personal Start Page"}
            description={
              "I wanted to create a single place that I could reach from any device connected to the Internet to provide a starting point with my favorite links. Used Python, Django, Tailwind."
            }
            github={
              "https://github.com/jakubstastka/django-personal-dashboard-startpage"
            }
          />
        </div>
      </div>
    </div>
  );
}
