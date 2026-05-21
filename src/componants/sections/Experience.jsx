import {
  Briefcase,
  Calendar,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Ujjwal Technolabs",
    duration: "May 2024 — Present",
    description:
      "Building scalable frontend systems, premium UI experiences, responsive applications, and high-performance interfaces using React, TailwindCSS, JavaScript, and modern frontend workflows.",
    tech: [
      "React",
      "TailwindCSS",
      "JavaScript",
      "WordPress",
      "Git",
    ],
  },

  {
    role: "Frontend Development Intern",
    company: "FunctionUp",
    duration: "Jan 2024 — Apr 2024",
    description:
      "Worked on reusable components, responsive layouts, API integrations, and modern frontend practices while collaborating on real-world development projects.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "GitHub",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#070B14] py-32"
    >
      {/* BACKGROUND */}
      <RadialGradientBackground variant="default" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* TOP GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-400/10 blur-[140px] pointer-events-none"></div>

      {/* SIDE GLOW */}
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* =======================================================
                            HEADING
        ======================================================= */}

        <FadeIn delay={0}>
          <div className="text-center max-w-3xl mx-auto">

            {/* BADGE */}

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400/10 bg-white/[0.03] backdrop-blur-xl">

              <Sparkles
                size={15}
                className="text-cyan-300"
              />

              <span className="text-sm tracking-[0.2em] uppercase text-white/70">
                Professional Journey
              </span>
            </div>

            {/* TITLE */}

            <h2 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-[-0.06em] text-white">

              Work

              <span className="block pb-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            {/* DESC */}

            <p className="mt-8 text-lg leading-8 text-white/55">
              My journey building scalable frontend applications,
              premium interfaces, and modern digital experiences
              focused on performance and clean user interaction.
            </p>
          </div>
        </FadeIn>

        {/* =======================================================
                            TIMELINE
        ======================================================= */}

        <div className="relative mt-24 max-w-5xl mx-auto">

          {/* CENTER LINE */}

          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-300/50 via-cyan-300/10 to-transparent"></div>

          <div className="space-y-12">

            {experiences.map((item, index) => (
              <FadeIn
                key={index}
                delay={index * 150}
              >
                <div className="relative pl-16">

                  {/* TIMELINE DOT */}

                  <div className="absolute left-0 top-10 flex items-center justify-center">

                    <div className="absolute w-10 h-10 rounded-full bg-cyan-400/20 blur-xl animate-pulse"></div>

                    <div className="relative w-4 h-4 rounded-full bg-cyan-300 border border-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.6)]"></div>
                  </div>

                  {/* CARD */}

                  <div className="group relative overflow-hidden rounded-[34px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10 transition-all duration-500 hover:border-cyan-300/20 hover:bg-cyan-400/[0.03] hover:-translate-y-1">

                    {/* TOP LIGHT */}

                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"></div>

                    {/* HOVER GLOW */}

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_70%)]"></div>

                    {/* HEADER */}

                    <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

                      <div>

                        {/* ROLE */}

                        <h3 className="text-3xl lg:text-4xl font-black tracking-[-0.04em] text-white">
                          {item.role}
                        </h3>

                        {/* COMPANY + DATE */}

                        <div className="flex flex-wrap items-center gap-4 mt-5">

                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-cyan-400/10 bg-[#0A0F1C]">

                            <Briefcase
                              size={15}
                              className="text-cyan-300"
                            />

                            <span className="text-sm text-white/70">
                              {item.company}
                            </span>
                          </div>

                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/[0.06] bg-[#0A0F1C]">

                            <Calendar
                              size={15}
                              className="text-cyan-300"
                            />

                            <span className="text-sm text-white/60">
                              {item.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* ICON */}

                      <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.05] backdrop-blur-xl">

                        <ArrowUpRight
                          size={24}
                          className="text-cyan-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>
                    </div>

                    {/* DESCRIPTION */}

                    <p className="relative mt-8 text-[16px] leading-8 text-white/55 max-w-3xl">
                      {item.description}
                    </p>

                    {/* TECH STACK */}

                    <div className="relative flex flex-wrap gap-3 mt-8">

                      {item.tech.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="px-4 py-2 rounded-2xl border border-white/[0.06] bg-[#0A0F1C] text-sm text-cyan-100/75 transition-all duration-300 hover:border-cyan-300/20 hover:text-cyan-200 hover:bg-cyan-400/[0.04]"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    {/* BOTTOM SHINE */}

                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;