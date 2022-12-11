import JobEntry from "../components/JobEntry";

export default function Experience() {
  return (
    <div id="experience" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-emerald-700">
          Experience
        </p>
        <h2 className="py-4 text-gray-600">Who Have I Worked with?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 text-gray-600 gap-3">
          <JobEntry
            title="Software Engineer"
            company="Retino"
            date="02/2022 – 11/2022"
            description="Retino is a SaaS that helps e-shops provide their customers better returns experience. I got to do more work on frontend, which was a really cool experience."
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
          <JobEntry
            title="Journalist/Data Analyst"
            company="VLTAVA-LABE-MEDIA, a. s."
            date="8/2009 - 10/2020"
            description="I began developing my custom tools in Python when still working as a journalist. I worked as a writer, editor-in-chief, online news editor, and data analyst for data-driven journalism."
          />
        </div>
      </div>
    </div>
  );
}
