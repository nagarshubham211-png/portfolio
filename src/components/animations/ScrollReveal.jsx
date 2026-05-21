import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const ScrollReveal = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 800,
  threshold = 0.12,
  className = "",
}) => {
  const { ref, isVisible } = useScrollReveal({
    threshold,
  });

  // HIDDEN STATES
  const animationClasses = {
    fadeUp:
      "opacity-0 translate-y-16 blur-sm",

    fadeIn:
      "opacity-0 blur-sm",

    slideLeft:
      "opacity-0 -translate-x-16 blur-sm",

    slideRight:
      "opacity-0 translate-x-16 blur-sm",

    scaleIn:
      "opacity-0 scale-[0.92] blur-sm",
  };

  // VISIBLE STATE
  const visibleClasses =
    "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0";

  return (
    <div
      ref={ref}
      className={`
        transform-gpu
        transition-transform transition-opacity
        ease-[cubic-bezier(0.22,1,0.36,1)]
        will-change-transform
        will-change-opacity
        ${
          isVisible
            ? visibleClasses
            : animationClasses[animation]
        }

        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;