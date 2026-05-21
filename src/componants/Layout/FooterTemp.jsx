import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  Sparkles,
} from "lucide-react";

import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Explore",
    links: [
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
      { name: "Resume", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050816]">
      {/* ================= BACKGROUND ================= */}

      {/* MAIN GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-cyan-400/10 blur-[140px] pointer-events-none"></div>

      {/* SIDE GLOW */}
      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-10">
        {/* ================= TOP ================= */}

        <div className="grid lg:grid-cols-[1.3fr_.8fr_.8fr_1fr] gap-14">
          {/* BRAND */}
          <div>
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/10 bg-white/[0.03] backdrop-blur-xl">
              <Sparkles
                size={14}
                className="text-cyan-300"
              />

              <span className="text-sm tracking-wide text-white/70">
                Frontend Developer
              </span>
            </div>

            {/* LOGO */}
            <h2 className="mt-7 text-4xl font-black tracking-[-0.05em] text-white">
              Shubham
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                .
              </span>
            </h2>

            {/* TEXT */}
            <p className="mt-6 text-white/50 leading-8 max-w-md">
              Crafting modern frontend experiences with
              premium UI design, smooth interactions,
              scalable architecture, and high-performance
              web technologies.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-cyan-300/20 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-cyan-400/[0.08]" />

                <SiGithub
                  size={19}
                  className="relative z-10 text-white/70 group-hover:text-cyan-300 transition-all duration-300"
                />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-cyan-300/20 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-cyan-400/[0.08]" />

                <FaLinkedin
                  size={19}
                  className="relative z-10 text-white/70 group-hover:text-cyan-300 transition-all duration-300"
                />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-cyan-300/20 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-cyan-400/[0.08]" />

                <SiInstagram
                  size={19}
                  className="relative z-10 text-white/70 group-hover:text-cyan-300 transition-all duration-300"
                />
              </a>
            </div>
          </div>

          {/* FOOTER LINKS */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-bold text-lg">
                {section.title}
              </h3>

              <ul className="mt-7 space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-white/50 hover:text-cyan-300 transition-all duration-300"
                    >
                      <span>{link.name}</span>

                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT CARD */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-6">
              {/* TOP LIGHT */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"></div>

              <h3 className="text-white text-xl font-black">
                Contact Info
              </h3>

              <div className="space-y-5 mt-8">
                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06]">
                    <Mail
                      size={18}
                      className="text-cyan-300"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-white/35">
                      Email
                    </p>

                    <h4 className="mt-1 text-sm text-white/75 break-all">
                      nagarshubham211@gmail.com
                    </h4>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06]">
                    <Phone
                      size={18}
                      className="text-cyan-300"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-white/35">
                      Phone
                    </p>

                    <h4 className="mt-1 text-sm text-white/75">
                      +91 9522274699
                    </h4>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06]">
                    <MapPin
                      size={18}
                      className="text-cyan-300"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-white/35">
                      Location
                    </p>

                    <h4 className="mt-1 text-sm text-white/75">
                      Indore, Madhya Pradesh, India
                    </h4>
                  </div>
                </div>
              </div>

              {/* STATUS */}
              <div className="mt-8 p-4 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04]">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-3 h-3 rounded-full bg-emerald-400/30 animate-ping"></div>

                    <div className="relative w-2 h-2 rounded-full bg-emerald-300"></div>
                  </div>

                  <span className="text-sm text-emerald-200/80">
                    Available for freelance work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-5">
          {/* COPYRIGHT */}
          <p className="text-sm text-white/35 text-center md:text-left">
            © 2026 Shubham Sharma. Crafted with React &
            TailwindCSS.
          </p>

          {/* BACK TO TOP */}
          <a
            href="#home"
            className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white/55 hover:text-cyan-300 hover:border-cyan-300/20 transition-all duration-300"
          >
            <span className="text-sm">
              Back To Top
            </span>

            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-cyan-400/[0.08] border border-cyan-400/10">
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;