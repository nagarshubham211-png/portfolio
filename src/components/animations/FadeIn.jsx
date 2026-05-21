import React, { useEffect, useRef, useState } from "react";

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  scale = 0.96,
  blur = 8,
  threshold = 0.12,
  className = "",
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate once
          if (once) {
            observer.unobserve(currentElement);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  return (
    <div
      ref={elementRef}
      className={`
        transform-gpu
        will-change-transform
        will-change-opacity
        ${className}
      `}
      style={{
        opacity: isVisible ? 1 : 0,

        transform: isVisible
          ? "translateY(0px) scale(1)"
          : `translateY(${y}px) scale(${scale})`,

        filter: isVisible
          ? "blur(0px)"
          : `blur(${blur}px)`,

        transitionProperty:
          "opacity, transform, filter",

        transitionDuration: `${duration}s`,

        transitionTimingFunction:
          "cubic-bezier(0.22, 1, 0.36, 1)",

        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;