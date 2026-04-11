import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — Triggers a CSS class when the element enters the viewport.
 *
 * Usage:
 *   const { ref, isVisible } = useScrollReveal();
 *   <div ref={ref} className={isVisible ? "reveal-visible" : "reveal-hidden"}>...</div>
 *
 * @param {number} threshold - 0 to 1; portion of element visible before triggering (default: 0.15)
 * @param {string} rootMargin - IntersectionObserver rootMargin (default: "0px 0px -60px 0px")
 */
export const useScrollReveal = (threshold = 0.15, rootMargin = "0px 0px -60px 0px") => {
  const ref = useRef(null);

  // Lazy initializer: if user prefers reduced motion, start as visible so
  // the reveal-hidden class is never applied — avoids a synchronous setState in useEffect.
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    // Already visible (reduced motion or previously triggered) — no observer needed
    if (isVisible) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after first trigger to avoid repeated animations and save memory
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible, threshold, rootMargin]);

  return { ref, isVisible };
};
