import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "Html 5",
    "TailwindCss",
    "Css",
    "Javascript",
  ];
  const backendSkills = ["Node.js", "Express.js", "Python", "MongoDb", "Mysql"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        {/* Title */}
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
        </RevealOnScroll>

        {/* Bio */}
        <RevealOnScroll>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I’m a passionate full-stack developer with expertise in building
              scalable, high-performance web applications from front-end to
              back-end. I love creating innovative digital solutions that blend
              clean design, responsive layouts, and seamless user experiences
              with robust, secure, and efficient server-side logic. With a
              strong focus on scalability, performance optimization, and modern
              technologies, I aim to deliver applications that are not only
              functional but also impactful and future-ready.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="flex flex-wrap gap-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_*px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="flex flex-wrap gap-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_*px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <RevealOnScroll>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all  h-full">
              <h3 className="text-xl font-bold mb-4">🏟 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> - Redeemer's
                  University (2021-2025)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing, Database Management Systems
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all  h-full">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Data Analyst Intern at Vdl Technologies (June 2024 –
                    November 2024)
                  </h4>
                  <p>
                    Provided training support for other team members on various
                    aspects of data analysis techniques or software tools.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Software Engineer Intern at Vdl Technologies (June 2024 –
                    November 2024)
                  </h4>
                  <p>
                    Analyzed user needs and workflows to create easy-to-use
                    interfaces.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
