import { RevealOnScroll } from "./RevealOnScroll";

const projects = [
  {
    title: "Movie Recommendation",
    description:
      "A web application that suggests movies based on user preferences using a recommendation system. It enhances user experience by providing personalized and efficient movie discovery.",
    tech: ["React", "Node"],
    link: "https://movie-recommendation-app-ndo5.onrender.com",
  },
  {
    title: "Password Generator",
    description:
      "A simple web application that creates strong, random passwords to enhance security. It allows users to generate customizable passwords instantly, reducing the risk of weak or reused credentials.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://enochoba801.github.io/Password-generator/",
  },

  {
    title: "Ratio Simplifier",
    description:
      "A lightweight web application that simplifies ratios into their lowest terms. It provides quick and accurate results, making mathematical calculations easier and more efficient.",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://enochoba801.github.io/RatioSimplifier-/",
  },
  {
    title: "Report Automation",
    description:
      "An application that automates the generation of reports, reducing manual effort and improving efficiency. It streamlines data processing, ensures accuracy, and saves time by delivering consistent, ready-to-use reports.",
    tech: ["SQL", "Python"],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <RevealOnScroll key={index}>
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_*px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-300 transition-colors my-4"
                    >
                      <br />
                      View Project ⮕
                    </a>
                  ) : (
                    <a
                      href="https://github.com/enochoba801/report-automation-"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-300 transition-colors my-4 "
                    >
                      View Code ⮕
                    </a>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
