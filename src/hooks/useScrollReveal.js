import { useEffect, useRef, useState } from "react";

export const useScrollReveal = (options = {}) => {
    const {
        threshold = 0.12,
        rootMargin = "0px 0px -80px 0px",
        once = true,
    } = options;

    const [isVisible, setIsVisible] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // SHOW ONLY ONCE
                    if (once) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, once]);

    return {
        ref,
        isVisible,
    };
};