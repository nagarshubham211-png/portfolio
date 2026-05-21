import {
  ArrowUpRight,
  Sparkles,
  Layers3,
  MonitorSmartphone,
} from "lucide-react";

import { SiGithub } from "react-icons/si";

import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const projects = [
  {
    title: "Modern Portfolio",

    description:
      "Premium personal portfolio with futuristic UI, smooth animations, responsive layouts, and modern frontend architecture.",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    tech: ["React", "Tailwind", "Framer Motion"],

    live: "#",
    github: "#",

    category: "Frontend Development",
  },

  {
    title: "E-Commerce Website",

    description:
      "Modern ecommerce experience with product filtering, responsive layouts, premium UI sections, and smooth interactions.",

    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",

    tech: ["React", "JavaScript", "CSS"],

    live: "#",
    github: "#",

    category: "Web Application",
  },

  {
    title: "Admin Dashboard",

    description:
      "Responsive analytics dashboard featuring charts, cards, modern layouts, reusable components, and dark UI experience.",

    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",

    tech: ["React", "Tailwind", "Charts"],

    live: "#",
    github: "#",

    category: "Dashboard UI",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070B14] py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <RadialGradientBackground variant="about" />

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* GLOW */}

      <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="absolute bottom-0 right-[-120px] w-[320px] h-[320px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ================= TOP ================= */}

        <FadeIn delay={0}>
          <div className="text-center max-w-3xl mx-auto">

            {/* BADGE */}

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/10 bg-white/[0.03] backdrop-blur-xl">

              <div className="relative flex items-center justify-center">

                <div className="absolute w-3 h-3 rounded-full bg-cyan-400/30 animate-ping"></div>

                <div className="relative w-1.5 h-1.5 rounded-full bg-cyan-300"></div>
              </div>

              <span className="text-sm tracking-[0.2em] text-white/70 uppercase">
                Featured Projects
              </span>
            </div>

            {/* HEADING */}

            <h2 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-[-0.05em] text-white">

              Selected Works

              <span className="block pb-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Crafted With Modern Tech
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p className="mt-8 text-lg leading-8 text-white/55">
              A collection of premium frontend projects focused on
              performance, responsiveness, scalable architecture,
              and visually polished user experiences.
            </p>
          </div>
        </FadeIn>

        {/* ================= FEATURE CARDS ================= */}

        <FadeIn delay={100}>
          <div className="grid md:grid-cols-3 gap-5 mt-16">

            {/* CARD 1 */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-6">

              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-cyan-400/10 blur-[90px]" />

              <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-300/[0.12] bg-cyan-400/[0.08]">
                <MonitorSmartphone
                  size={28}
                  className="text-cyan-300"
                />
              </div>

              <h3 className="relative mt-6 text-2xl font-black text-white">
                Responsive UI
              </h3>

              <p className="relative mt-3 text-white/50 leading-7">
                Pixel-perfect layouts optimized for desktop,
                tablet and mobile experiences.
              </p>
            </div>

            {/* CARD 2 */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-6">

              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-blue-500/10 blur-[90px]" />

              <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-300/[0.12] bg-cyan-400/[0.08]">
                <Layers3
                  size={28}
                  className="text-cyan-300"
                />
              </div>

              <h3 className="relative mt-6 text-2xl font-black text-white">
                Clean Architecture
              </h3>

              <p className="relative mt-3 text-white/50 leading-7">
                Structured components and scalable frontend
                systems built with modern practices.
              </p>
            </div>

            {/* CARD 3 */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-6">

              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-cyan-400/10 blur-[90px]" />

              <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-300/[0.12] bg-cyan-400/[0.08]">
                <Sparkles
                  size={28}
                  className="text-cyan-300"
                />
              </div>

              <h3 className="relative mt-6 text-2xl font-black text-white">
                Premium UX
              </h3>

              <p className="relative mt-3 text-white/50 leading-7">
                Smooth animations, modern aesthetics and
                engaging digital experiences.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ================= PROJECT GRID ================= */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {projects.map((project, index) => (
            <FadeIn
              key={index}
              delay={index * 120}
            >
              <div className="group relative overflow-hidden rounded-[34px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/20">

                {/* HOVER GLOW */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_70%)]" />

                {/* IMAGE */}

                <div className="relative overflow-hidden h-[260px]">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/20 to-transparent" />

                  {/* CATEGORY */}

                  <div className="absolute top-5 left-5 px-4 py-2 rounded-full border border-cyan-300/[0.12] bg-[#070B14]/60 backdrop-blur-xl">

                    <span className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="relative p-7">

                  {/* TITLE */}

                  <h3 className="text-3xl font-black text-white leading-tight">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-5 leading-8 text-white/55">
                    {project.description}
                  </p>

                  {/* TECH STACK */}

                  <div className="flex flex-wrap gap-3 mt-7">

                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full border border-cyan-300/[0.12] bg-cyan-400/[0.05] text-sm text-cyan-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM */}

                  <div className="flex items-center justify-between mt-10">

                    {/* LIVE BUTTON */}

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn relative overflow-hidden px-6 py-4 rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 border border-cyan-200/20 text-[#03111F] font-bold transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(34,211,238,0.28)]"
                    >

                      {/* SHINE */}

                      <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-all duration-700">

                        <div className="absolute top-0 -left-[120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 group-hover/btn:left-[120%] transition-all duration-1000"></div>
                      </div>

                      <span className="relative z-10 flex items-center gap-2">

                        Live Demo

                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
                        />
                      </span>
                    </a>

                    {/* GITHUB */}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-14 h-14 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white/70 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                    >
                      <SiGithub size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;