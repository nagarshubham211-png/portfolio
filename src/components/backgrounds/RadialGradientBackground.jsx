const variants = {
  hero: `
    bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_35%)]
  `,

  about: `
    bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_40%)]
  `,
};

const RadialGradientBackground = ({
  variant = "hero",
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* MAIN GRADIENT */}
      <div
        className={`absolute inset-0 ${variants[variant]}`}
      />

      {/* LEFT GLOW */}
      <div className="absolute top-20 left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* RIGHT GLOW */}
      <div className="absolute bottom-10 right-[-120px] w-[320px] h-[320px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* CENTER LIGHT */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-400/5 blur-[140px]" />
    </div>
  );
};

export default RadialGradientBackground;