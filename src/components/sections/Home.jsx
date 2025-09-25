import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text
        text-transparent leading-tight"
        >
          Hi, I'm Amos-Alegbe Enoch.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400">
          I’m a passionate front-end developer specializing in creating
          beautiful and functional web experiences, with a strong focus on
          responsive design, performance, and seamless user interactions. I love
          turning ideas into clean, scalable code while crafting intuitive
          interfaces that delight users.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded relative overflow-hidden 
            hover:bg-blue-700 transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] "
          >
            View Projects
          </a>
          <a
            href="#contact"
            className=" mt-6 box-border border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact me
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
