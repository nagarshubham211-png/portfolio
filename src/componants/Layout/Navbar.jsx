import React, {
  useState,
  useEffect,
} from "react";

import {
  Menu,
  X,
  ArrowUpRight,
  Code2,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  NAV_LINKS,
  PERSONAL_INFO,
} from "../../utils/constants";

import {
  scrollToSection,
  useScrollSpy,
} from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const activeSection = useScrollSpy(
    NAV_LINKS.map((link) => link.id)
  );

  /* =========================
     SCROLL EFFECTS
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        window.scrollY;

      setIsScrolled(currentScrollY > 20);

      /* progress */
      const totalHeight =
        document.documentElement
          .scrollHeight -
        document.documentElement
          .clientHeight;

      const progress =
        (currentScrollY / totalHeight) *
        100;

      setScrollProgress(progress);
    };

    let ticking = false;

    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener(
      "scroll",
      optimizedScroll,
      {
        passive: true,
      }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        optimizedScroll
      );
  }, []);

  /* =========================
     LOCK BODY SCROLL
  ========================= */

  useEffect(() => {
    document.body.style.overflow =
      isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [isMenuOpen]);

  const handleNavClick = (
    sectionId
  ) => {
    scrollToSection(sectionId);

    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        isScrolled
          ? "bg-[#070B14]/70 backdrop-blur-2xl border-b border-cyan-400/[0.08] shadow-[0_10px_60px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
    >
      {/* PROGRESS BAR */}

      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
        animate={{
          width: `${scrollProgress}%`,
        }}
      />

      {/* TOP LIGHT */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent"></div>

      {/* NOISE */}

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between h-[76px]">

          {/* ================= LOGO ================= */}

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group relative flex items-center gap-4"
          >
            <div className="relative flex items-center justify-center">

              <div className="absolute w-10 h-10 rounded-full bg-cyan-400/20 blur-2xl"></div>

              <Code2
                size={24}
                className="relative text-cyan-300 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col">

              <h1 className="text-[22px] font-black tracking-[-0.04em] bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </h1>

              <div className="flex items-center gap-2 mt-1">

                <div className="relative flex items-center justify-center">

                  <div className="absolute w-3 h-3 rounded-full bg-emerald-400/30 animate-ping"></div>

                  <div className="relative w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                </div>

                <span className="text-[10px] uppercase tracking-[0.28em] text-cyan-100/45">
                  Frontend Engineer
                </span>
              </div>
            </div>
          </button>

          {/* ================= DESKTOP NAV ================= */}

          <div className="hidden md:flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] px-2 py-2 rounded-full backdrop-blur-xl overflow-hidden">

            {NAV_LINKS.map((link) => {
              const active =
                activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() =>
                    handleNavClick(link.id)
                  }
                  className="relative px-5 py-2.5 rounded-full text-[14px] font-medium"
                >

                  {active && (
                    <div className="absolute inset-0 rounded-full bg-cyan-400/[0.12] border border-cyan-300/[0.14] shadow-[0_0_20px_rgba(34,211,238,0.15)]" />
                  )}

                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      active
                        ? "text-white"
                        : "text-white/55 hover:text-cyan-100"
                    }`}
                  >
                    {link.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="hidden md:flex items-center gap-3">

            {/* GITHUB */}

            <a
              href="https://github.com/nagarshubham211-png"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white/70 hover:text-cyan-200 hover:bg-cyan-400/[0.08] transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/shubham-kumar-sharma-94018b254/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white/70 hover:text-cyan-200 hover:bg-cyan-400/[0.08] transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>

            {/* RESUME */}

            <a
              href={PERSONAL_INFO.resume}
              download
              className="group relative overflow-hidden px-5 py-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white text-[14px] font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.06]"
            >
              <span className="flex items-center gap-2">
                Resume
                <Download size={16} />
              </span>
            </a>

            {/* CTA */}

            <button
              onClick={() =>
                handleNavClick("contact")
              }
              className="group relative overflow-hidden px-6 py-3 rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 text-[#03111F] text-[14px] font-bold transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_10px_40px_rgba(34,211,238,0.28)]"
            >

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)]"></div>

              <div className="absolute top-0 -left-[120%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>

              <span className="relative z-10 flex items-center gap-2">
                Hire Me

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
            </button>
          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() =>
              setIsMenuOpen(!isMenuOpen)
            }
            className="md:hidden relative z-50 flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl text-white"
          >
            {isMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>

        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
            className="md:hidden px-4 pb-5"
          >
            <div className="rounded-3xl border border-cyan-400/[0.08] bg-[#0A0F1C]/95 backdrop-blur-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

              <div className="space-y-2">

                {NAV_LINKS.map(
                  (link, index) => (
                    <motion.button
                      key={link.id}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.06,
                      }}
                      onClick={() =>
                        handleNavClick(
                          link.id
                        )
                      }
                      className={`w-full text-left px-5 py-4 rounded-2xl text-[15px] font-medium transition-all duration-300 ${
                        activeSection ===
                        link.id
                          ? "bg-cyan-400/[0.10] border border-cyan-300/[0.14] text-white"
                          : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  )
                )}
              </div>

              {/* MOBILE CTA */}

              <button
                onClick={() =>
                  handleNavClick(
                    "contact"
                  )
                }
                className="w-full mt-4 px-5 py-4 rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 text-[#03111F] text-[15px] font-bold"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;