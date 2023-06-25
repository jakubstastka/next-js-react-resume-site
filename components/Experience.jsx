import JobEntry from "../components/JobEntry";

export default function Experience() {
  return (
    <div id="experience" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-gray-600">
          Experience
        </p>
        <div className="text-4xl text-extrabold py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 uppercase pb-5">
          On the Record: The Companies We&apos;ve Served
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-gray-600 gap-4">
          <JobEntry
            title="Python Developer"
            company="SKOUMAL"
            date="1/2023 - present"
            description="Studio SKOUMAL specializes in developing web and mobile applications. Also provides services like UX analysis and analytics."
          />
          <JobEntry
            title="Front-End Developer"
            company="Mini Site Maestros"
            date="11/2022 - present"
            description="Mini Site Maestros is a web agency that focuses on delivering small static websites as a marketing solution for freelancers, tradesmen or tradeswomen to provide visibility on the web."
          />
          <JobEntry
            title="Software Engineer"
            company="Retino"
            date="02/2022 – 11/2022"
            description="Retino is a SaaS that helps e-shops provide their customers better returns experience. I got to do more work on frontend, which was a really great, since I haven&apos;t worked that much with any front-end framework before."
          />
          <JobEntry
            title="Junior Fullstack Engineer"
            company="Leadspicker"
            date="11/2020 - 8/2022"
            description="Leadspicker provides a SaaS solution offering users business-related automation. As a fullstack developer, I implemented new features, was responsible for maintaining parts of the codebase and helped launch a new product."
          />
          <JobEntry
            title="Junior Python Developer"
            company="AMP X"
            date="7/2020 - 10/2020"
            description="AMP X was my first real programming experience in the sense that I was working on a larger project. I got to collaborate with colleagues using git, proposing solutions, and debugging as an intern."
          />
        </div>
      </div>
    </div>
  );
}
