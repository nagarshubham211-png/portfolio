import {
  User2,
  Briefcase,
  Layers3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

import { scrollToSection } from "../../hooks/useScrollSpy";

const aboutCards = [
  {
    icon: Briefcase,
    title: "Experience",
    value: "1+ Years",
    description:
      "Building scalable and high-performance frontend applications.",
  },
  {
    icon: Layers3,
    title: "Projects",
    value: "5+ Completed",
    description:
      "Landing pages, dashboards, portfolio websites & UI systems.",
  },
  {
    icon: Sparkles,
    title: "Tech Stack",
    value: "Modern Frontend",
    description:
      "React, TailwindCSS, JavaScript, PHP & WordPress ecosystem.",
  },
  {
    icon: User2,
    title: "Focus",
    value: "Premium UI",
    description:
      "Clean design systems, smooth animations & responsive layouts.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Started Web Development",
    description:
      "Learned HTML, CSS, JavaScript and frontend fundamentals.",
  },
  {
    year: "2024",
    title: "Built Real World Projects",
    description:
      "Worked on responsive websites, dashboards and UI projects.",
  },
  {
    year: "2025",
    title: "Focused On React Engineering",
    description:
      "Specialized in React, TailwindCSS and premium UI experiences.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070B14] py-28 lg:py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <RadialGradientBackground variant="about" />

      {/* GRID EFFECT */}

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* GLOW */}

      <div className="absolute left-[-100px] top-40 w-[320px] h-[320px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="absolute right-[-120px] bottom-20 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* ================= CONTAINER ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-20 items-center">

          {/* =========================================================
                              LEFT SIDE
          ========================================================= */}

          <div>

            {/* BADGE */}

            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/10 bg-white/[0.03] backdrop-blur-xl">

                <div className="w-2 h-2 rounded-full bg-cyan-300"></div>

                <span className="text-sm tracking-[0.2em] text-white/70 uppercase">
                  About Me
                </span>
              </div>
            </FadeIn>

            {/* HEADING */}

            <FadeIn delay={100}>
              <h2 className="mt-8 text-5xl sm:text-6xl xl:text-7xl font-black leading-[0.95] tracking-[-0.05em] text-white">

                Turning Ideas

                <span className="block pb-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Into Premium
                </span>

                Web Experiences
              </h2>
            </FadeIn>

            {/* DESCRIPTION */}

            <FadeIn delay={200}>
              <p className="mt-8 text-lg leading-8 text-white/55 max-w-2xl">
                I’m a frontend developer passionate about creating
                modern, responsive, and visually polished web
                applications with clean architecture and smooth
                user experiences.
              </p>
            </FadeIn>

            {/* EXTRA DESCRIPTION */}

            <FadeIn delay={300}>
              <p className="mt-6 text-white/45 leading-8 max-w-2xl">
                My focus is building interfaces that combine
                performance, scalability, and premium design
                aesthetics using React, TailwindCSS, JavaScript,
                PHP, and modern frontend technologies.
              </p>
            </FadeIn>

            {/* CTA */}

            <FadeIn delay={400}>
              <button
                onClick={() =>
                  scrollToSection("contact")
                }
                className="group relative overflow-hidden mt-10 px-7 py-4 rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 border border-cyan-200/20 text-[#03111F] font-bold transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(34,211,238,0.28)]"
              >

                {/* GLOSS */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)] opacity-70"></div>

                {/* SHINE */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">

                  <div className="absolute top-0 -left-[120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
                </div>

                <span className="relative z-10 flex items-center gap-2">

                  Let’s Build Together

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </span>
              </button>
            </FadeIn>

            {/* SMALL INFO */}

            <FadeIn delay={500}>
              <div className="flex flex-wrap items-center gap-6 mt-10">

                <div>
                  <h4 className="text-3xl font-black text-cyan-300">
                    5+
                  </h4>

                  <p className="mt-1 text-sm text-white/45">
                    Completed Projects
                  </p>
                </div>

                <div className="w-px h-12 bg-white/[0.08]" />

                <div>
                  <h4 className="text-3xl font-black text-cyan-300">
                    1+
                  </h4>

                  <p className="mt-1 text-sm text-white/45">
                    Years Experience
                  </p>
                </div>

                <div className="w-px h-12 bg-white/[0.08]" />

                <div>
                  <h4 className="text-3xl font-black text-cyan-300">
                    100%
                  </h4>

                  <p className="mt-1 text-sm text-white/45">
                    Responsive Design
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* =========================================================
                              RIGHT SIDE
          ========================================================= */}

          <div className="relative">

            {/* MAIN CARD */}

            <FadeIn delay={200}>
              <div className="relative rounded-[34px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-6 lg:p-8 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                {/* GLOW */}

                <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-cyan-400/10 blur-[100px]" />

                {/* CARDS */}

                <div className="grid sm:grid-cols-2 gap-5">

                  {aboutCards.map((card, index) => {
                    const Icon = card.icon;

                    return (
                      <FadeIn
                        key={index}
                        delay={index * 100}
                      >
                        <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0A0F1C] p-6 hover:border-cyan-300/20 transition-all duration-500 hover:-translate-y-1">

                          {/* HOVER GLOW */}

                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_70%)]" />

                          {/* ICON */}

                          <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-400/[0.08] border border-cyan-300/[0.12]">

                            <Icon
                              className="text-cyan-300"
                              size={24}
                            />
                          </div>

                          {/* CONTENT */}

                          <div className="relative mt-6">

                            <p className="text-sm text-white/45">
                              {card.title}
                            </p>

                            <h3 className="mt-2 text-2xl font-black text-white leading-tight">
                              {card.value}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-white/50">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    );
                  })}
                </div>

                {/* TIMELINE */}

                <FadeIn delay={500}>
                  <div className="relative mt-8 rounded-[28px] border border-white/[0.08] bg-[#0A0F1C] p-7 overflow-hidden">

                    {/* GLOW */}

                    <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-cyan-400/10 blur-[100px]" />

                    <h3 className="relative text-2xl font-black text-white mb-8">
                      My Journey
                    </h3>

                    <div className="relative space-y-8">

                      {timeline.map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-5"
                        >

                          {/* LINE */}

                          <div className="flex flex-col items-center">

                            <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>

                            {index !==
                              timeline.length - 1 && (
                              <div className="w-px flex-1 bg-gradient-to-b from-cyan-300/50 to-transparent mt-2"></div>
                            )}
                          </div>

                          {/* CONTENT */}

                          <div className="-mt-1">

                            <span className="text-cyan-300 text-sm font-semibold tracking-wide">
                              {item.year}
                            </span>

                            <h4 className="mt-1 text-white font-semibold text-lg">
                              {item.title}
                            </h4>

                            <p className="mt-2 text-sm leading-7 text-white/45 max-w-md">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;