import {
  Mail,
  Phone,
  MapPin,
  Download,
  Send,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import {
  SiGithub,
  SiInstagram,
} from "react-icons/si";

import { FaLinkedin } from "react-icons/fa";

import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const socialLinks = [
  {
    icon: SiGithub,
    link: "https://github.com/yourusername",
  },

  {
    icon: FaLinkedin,
    link: "https://linkedin.com/in/yourusername",
  },

  {
    icon: SiInstagram,
    link: "https://instagram.com/yourusername",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nagarshubham211@gmail.com",
  },

  {
    icon: Phone,
    label: "Phone",
    value: "+91 9522274699",
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Indore, Madhya Pradesh, India",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070B14] py-20 sm:py-24 lg:py-32"
    >
      {/* BACKGROUND */}
      <RadialGradientBackground variant="default" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* TOP GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-400/10 blur-[140px] pointer-events-none"></div>

      {/* SIDE GLOW */}
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* =======================================================
                        HEADER
    ======================================================= */}

        <FadeIn delay={0}>
          <div className="text-center max-w-3xl mx-auto">

            {/* BADGE */}

            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-cyan-400/10 bg-white/[0.03] backdrop-blur-xl">

              <Sparkles
                size={15}
                className="text-cyan-300"
              />

              <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white/70">
                Let's Connect
              </span>
            </div>

            {/* TITLE */}

            <h2 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-0.06em] text-white">

              Get In

              <span className="block pb-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            {/* DESC */}

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/55 px-2">
              Have a project idea, freelance opportunity,
              or frontend role? Let’s create something
              modern, scalable, and visually premium together.
            </p>
          </div>
        </FadeIn>

        {/* =======================================================
                        CONTENT
    ======================================================= */}

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 mt-16 lg:mt-24">

          {/* =======================================================
                          LEFT SIDE
      ======================================================= */}

          <FadeIn delay={100}>
            <div className="relative h-full overflow-hidden rounded-[28px] sm:rounded-[34px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-5 sm:p-7 lg:p-10">

              {/* TOP LIGHT */}

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"></div>

              {/* HOVER GLOW */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_70%)]"></div>

              <div className="relative">

                {/* TITLE */}

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-[-0.04em] text-white">
                  Let’s Work Together
                </h3>

                {/* DESC */}

                <p className="mt-5 text-[15px] sm:text-[16px] leading-7 sm:leading-8 text-white/55">
                  Currently available for frontend development,
                  freelance projects, internships, and modern
                  web application collaborations.
                </p>

                {/* CONTACT INFO */}

                <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">

                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-[#0A0F1C] hover:border-cyan-300/20 transition-all duration-300"
                      >

                        {/* ICON */}

                        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.05] shrink-0">

                          <Icon
                            size={20}
                            className="text-cyan-300"
                          />
                        </div>

                        {/* TEXT */}

                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm text-white/40">
                            {item.label}
                          </p>

                          <h4 className="mt-1 text-sm sm:text-base text-white font-medium break-words">
                            {item.value}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* SOCIALS */}

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-10">

                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-white/[0.08] bg-[#0A0F1C] text-white/60 hover:text-cyan-300 hover:border-cyan-300/20 hover:bg-cyan-400/[0.04] transition-all duration-300"
                      >
                        <Icon
                          size={18}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </a>
                    );
                  })}
                </div>

                {/* RESUME BUTTON */}

                <a
                  href="/resume.pdf"
                  download
                  className="group relative overflow-hidden inline-flex w-full sm:w-auto items-center justify-center gap-2 mt-8 sm:mt-10 px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 border border-cyan-200/20 text-[#03111F] font-bold transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(34,211,238,0.28)]"
                >

                  {/* GLOSS */}

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)] opacity-70"></div>

                  <span className="relative z-10 flex items-center gap-2">

                    Download Resume

                    <Download
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-y-1"
                    />
                  </span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* =======================================================
                          RIGHT SIDE
      ======================================================= */}

          <FadeIn delay={200}>
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[34px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-5 sm:p-7 lg:p-10">

              {/* TOP LIGHT */}

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"></div>

              {/* HOVER GLOW */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_70%)]"></div>

              <div className="relative">

                {/* TITLE */}

                <div className="flex items-center justify-between gap-4">

                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-[-0.04em] text-white">
                      Send Message
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-white/45">
                      Fill out the form and I’ll get back to you.
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.05]">

                    <ArrowUpRight
                      size={22}
                      className="text-cyan-300"
                    />
                  </div>
                </div>

                {/* FORM */}

                <form className="space-y-5 sm:space-y-6 mt-8 sm:mt-10">

                  {/* NAME */}

                  <div>
                    <label className="block text-sm text-white/45 mb-3">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl border border-white/[0.08] bg-[#0A0F1C] text-white placeholder:text-white/25 outline-none transition-all duration-300 focus:border-cyan-300/30 focus:bg-[#0D1322]"
                    />
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label className="block text-sm text-white/45 mb-3">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl border border-white/[0.08] bg-[#0A0F1C] text-white placeholder:text-white/25 outline-none transition-all duration-300 focus:border-cyan-300/30 focus:bg-[#0D1322]"
                    />
                  </div>

                  {/* MESSAGE */}

                  <div>
                    <label className="block text-sm text-white/45 mb-3">
                      Message
                    </label>

                    <textarea
                      rows="6"
                      placeholder="Write your message..."
                      className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl border border-white/[0.08] bg-[#0A0F1C] text-white placeholder:text-white/25 outline-none resize-none transition-all duration-300 focus:border-cyan-300/30 focus:bg-[#0D1322]"
                    ></textarea>
                  </div>

                  {/* BUTTON */}

                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 border border-cyan-200/20 text-[#03111F] font-bold transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_10px_40px_rgba(34,211,238,0.28)]"
                  >

                    {/* GLOSS */}

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)] opacity-70"></div>

                    {/* SHINE */}

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">

                      <div className="absolute top-0 -left-[120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
                    </div>

                    <span className="relative z-10 flex items-center justify-center gap-2">

                      Send Message

                      <Send
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;