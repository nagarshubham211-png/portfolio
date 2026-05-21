import {
  ChevronDown,
  ArrowUpRight,
  Download,
} from "lucide-react";

import profile from '../../assets/profile.jpeg'

import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiPhp,
  SiWordpress,
  SiGit,
  SiGithub,
} from "react-icons/si";

import {
  PERSONAL_INFO,
  STATS,
} from "../../utils/constants";

import { scrollToSection } from "../../hooks/useScrollSpy";

import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const techStack = [
  {
    icon: SiReact,
    name: "React",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
  },
  {
    icon: SiHtml5,
    name: "HTML5",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
  },
  {
    icon: SiPhp,
    name: "PHP",
  },
  {
    icon: SiWordpress,
    name: "WordPress",
  },
  {
    icon: SiGit,
    name: "Git",
  },
  {
    icon: SiGithub,
    name: "GitHub",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070B14]"
    >
      {/* ================= BACKGROUND ================= */}

      <RadialGradientBackground variant="hero" />

      {/* GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-400/10 blur-[140px] pointer-events-none"></div>

      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* ================= CONTAINER ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 lg:pt-40 pb-24">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 xl:gap-20 items-center">

          {/* =======================================================
                            LEFT CONTENT
          ======================================================= */}

          <div>

            {/* BADGE */}

            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/10 bg-white/[0.03] backdrop-blur-xl mb-8">

                <div className="relative flex items-center justify-center">

                  <div className="absolute w-3 h-3 rounded-full bg-emerald-400/30 animate-ping"></div>

                  <div className="relative w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                </div>

                <span className="text-sm text-white/70 tracking-wide">
                  Frontend Engineer • React & Tailwind Specialist
                </span>
              </div>
            </FadeIn>

            {/* HEADING */}

            <FadeIn delay={100}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-black leading-[0.92] tracking-[-0.06em] text-white">

                Crafting

                <span className="block pb-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                  Modern Digital
                </span>

                Experiences
              </h1>
            </FadeIn>

            {/* DESCRIPTION */}

            <FadeIn delay={200}>
              <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-8 text-white/55">
                Frontend Developer focused on building
                fast, scalable, and visually polished web
                applications using React, JavaScript,
                TailwindCSS, PHP, WordPress, and modern
                frontend technologies.
              </p>
            </FadeIn>

            {/* BUTTONS */}

            <FadeIn delay={300}>
              <div className="flex flex-wrap items-center gap-4 mt-12">

                {/* PRIMARY BUTTON */}

                <button
                  onClick={() =>
                    scrollToSection("projects")
                  }
                  className="group relative overflow-hidden px-7 py-4 rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 border border-cyan-200/20 text-[#03111F] font-bold transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(34,211,238,0.28)]"
                >

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)] opacity-70"></div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">

                    <div className="absolute top-0 -left-[120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
                  </div>

                  <span className="relative z-10 flex items-center gap-2">

                    View Projects

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </button>

                {/* CONTACT */}

                <button
                  onClick={() =>
                    scrollToSection("contact")
                  }
                  className="px-7 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl text-white/80 font-semibold transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                >
                  Contact Me
                </button>

                {/* RESUME */}

                <a
                  href={PERSONAL_INFO.resume}
                  download
                  className="px-6 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl text-white/80 font-semibold transition-all duration-300 hover:bg-white/[0.06] hover:text-white flex items-center gap-2"
                >
                  Resume

                  <Download size={16} />
                </a>
              </div>
            </FadeIn>

            {/* TRUST TEXT */}

            <FadeIn delay={350}>
              <p className="mt-6 text-sm text-white/35 tracking-wide">
                Clean UI • Smooth Animations • Responsive Design
              </p>
            </FadeIn>

            {/* TECH STACK */}

            <FadeIn delay={400}>
              <div className="flex flex-wrap items-center gap-4 mt-14">

                {techStack.map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl hover:border-cyan-300/20 hover:bg-cyan-400/[0.04] transition-all duration-300"
                    >
                      <Icon className="text-cyan-300 text-xl transition-transform duration-300 group-hover:scale-110" />

                      <span className="text-sm text-white/70">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          {/* =======================================================
                            RIGHT SIDE
          ======================================================= */}

          <FadeIn delay={500}>
            <div className="relative flex justify-center lg:justify-end">

              {/* MAIN GLOW */}

              <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-400/10 blur-[120px]"></div>

              {/* MAIN CARD */}

              <div className="relative w-full max-w-[420px] rounded-[32px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                {/* TOP */}

                <div className="flex items-center justify-between mb-8">

                  <div>
                    <p className="text-white/40 text-sm">
                      Frontend Developer
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      Shubham Sharma
                    </h3>
                  </div>

                  <div className="relative flex items-center justify-center">

                    <div className="absolute w-6 h-6 rounded-full bg-cyan-400/20 animate-pulse"></div>

                    <div className="relative w-3 h-3 rounded-full bg-cyan-300"></div>
                  </div>
                </div>

                {/* PROFILE IMAGE */}

                <div className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#0A0F1C]">

                  <img
                  // imag--------------------------------------------------------
                    src={profile}
                    alt="Shubham Sharma"
                    className="w-full h-[420px] object-cover object-top"
                  />

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent"></div>

                  {/* FLOATING LABEL */}

                  <div className="absolute bottom-5 left-5 right-5 px-5 py-4 rounded-2xl border border-white/[0.08] bg-black/30 backdrop-blur-xl">

                    <p className="text-sm text-white/50">
                      Building modern and premium user experiences.
                    </p>
                  </div>
                </div>

                {/* STATS */}

                <div className="grid grid-cols-2 gap-4 mt-6">

                  {STATS.map((stat, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/[0.06] bg-[#0A0F1C] p-5 hover:border-cyan-300/10 transition-all duration-300"
                    >
                      <h4 className="text-3xl font-black text-cyan-300">
                        {stat.value}
                      </h4>

                      <p className="mt-2 text-sm text-white/50">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FLOATING EXPERIENCE */}

              <div className="hidden xl:block absolute -left-10 top-16 z-20 px-5 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                <p className="text-sm text-white/45">
                  Experience
                </p>

                <h4 className="mt-1 text-xl font-bold text-cyan-300">
                  1+ Years
                </h4>
              </div>

              {/* FLOATING PROJECT */}

              
            </div>
          </FadeIn>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}

        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3">

          <span className="text-xs tracking-[0.3em] uppercase text-white/30">
            Scroll
          </span>

          <ChevronDown
            size={20}
            className="text-cyan-300 animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;