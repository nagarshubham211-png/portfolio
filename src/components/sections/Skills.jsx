import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiPhp,
  SiWordpress,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

import {
  Sparkles,
  Code2,
  Layers3,
} from "lucide-react";

import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const skills = [
  {
    icon: SiReact,
    name: "React",
    level: "90%",
    description:
      "Modern component architecture & scalable frontend apps.",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    level: "85%",
    description:
      "Interactive UI logic, APIs & dynamic experiences.",
  },
  {
    icon: SiTailwindcss,
    name: "TailwindCSS",
    level: "95%",
    description:
      "Premium responsive interfaces with clean utility styling.",
  },
  {
    icon: SiHtml5,
    name: "HTML5",
    level: "95%",
    description:
      "Semantic, accessible and SEO-friendly structures.",
  },
  {
    icon: SiPhp,
    name: "PHP",
    level: "70%",
    description:
      "Backend integration and dynamic web functionality.",
  },
  {
    icon: SiWordpress,
    name: "WordPress",
    level: "80%",
    description:
      "Custom WordPress websites & CMS solutions.",
  },
  {
    icon: SiGit,
    name: "Git",
    level: "85%",
    description:
      "Version control and collaborative workflows.",
  },
  {
    icon: SiGithub,
    name: "GitHub",
    level: "90%",
    description:
      "Project hosting, teamwork & deployment workflows.",
  },
  {
    icon: SiFigma,
    name: "Figma",
    level: "75%",
    description:
      "UI designing, layouts and design systems.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070B14] py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <RadialGradientBackground variant="about" />

      {/* GRID EFFECT */}

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* GLOW */}

      <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="absolute bottom-0 right-[-100px] w-[320px] h-[320px] rounded-full bg-blue-500/10 blur-[120px]" />

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
                Skills & Technologies
              </span>
            </div>

            {/* HEADING */}

            <h2 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-[-0.05em] text-white">

              Building With

              <span className="block pb-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Modern Technologies
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p className="mt-8 text-lg leading-8 text-white/55">
              Technologies and tools I use to craft responsive,
              scalable, and visually polished digital products
              with premium user experiences.
            </p>
          </div>
        </FadeIn>

        {/* ================= TOP CARDS ================= */}

        <FadeIn delay={100}>
          <div className="grid md:grid-cols-3 gap-5 mt-16">

            {/* CARD 1 */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-6">

              <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-cyan-400/10 blur-[80px]" />

              <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-300/[0.12] bg-cyan-400/[0.08]">
                <Code2
                  size={28}
                  className="text-cyan-300"
                />
              </div>

              <h3 className="relative mt-6 text-2xl font-black text-white">
                Frontend
              </h3>

              <p className="relative mt-3 text-white/50 leading-7">
                Modern UI development focused on performance,
                responsiveness and smooth interactions.
              </p>
            </div>

            {/* CARD 2 */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-6">

              <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-blue-500/10 blur-[80px]" />

              <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-300/[0.12] bg-cyan-400/[0.08]">
                <Layers3
                  size={28}
                  className="text-cyan-300"
                />
              </div>

              <h3 className="relative mt-6 text-2xl font-black text-white">
                Scalable UI
              </h3>

              <p className="relative mt-3 text-white/50 leading-7">
                Clean architecture and reusable components
                designed for modern applications.
              </p>
            </div>

            {/* CARD 3 */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-6">

              <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-cyan-400/10 blur-[80px]" />

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
                Visually polished interfaces with smooth
                animations and modern design systems.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ================= SKILLS GRID ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <FadeIn
                key={index}
                delay={index * 70}
              >
                <div className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/20">

                  {/* HOVER GLOW */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_70%)]" />

                  {/* TOP */}

                  <div className="relative flex items-start justify-between">

                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl border border-cyan-300/[0.12] bg-cyan-400/[0.08] group-hover:scale-110 transition-all duration-500">

                      <Icon
                        className="text-cyan-300"
                        size={30}
                      />
                    </div>

                    <div className="px-3 py-1 rounded-full border border-cyan-300/[0.12] bg-cyan-400/[0.08]">

                      <span className="text-xs font-semibold tracking-wide text-cyan-300">
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="relative mt-7">

                    <h3 className="text-2xl font-black text-white">
                      {skill.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {skill.description}
                    </p>

                    {/* PROGRESS */}

                    <div className="mt-6">

                      <div className="flex items-center justify-between mb-3">

                        <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                          Proficiency
                        </span>

                        <span className="text-sm text-white/40">
                          {skill.level}
                        </span>
                      </div>

                      <div className="relative h-2 rounded-full bg-white/[0.05] overflow-hidden">

                        <div
                          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                          style={{
                            width: skill.level,
                          }}
                        />

                        {/* SHINE */}

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">

                          <div className="absolute top-0 -left-[120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[120%] transition-all duration-1000"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;