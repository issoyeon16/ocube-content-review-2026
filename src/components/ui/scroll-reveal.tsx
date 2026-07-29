"use client";

import { forwardRef, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface ScrollRevealProps {
  as?: "article" | "div";
  children: ReactNode;
  className?: string;
  delay?: number;
  "data-number"?: string;
  "data-step"?: number;
}

export const ScrollReveal = forwardRef<HTMLElement, ScrollRevealProps>(function ScrollReveal(
  { as: Element = "div", children, className = "", delay = 0, ...elementProps },
  forwardedRef,
) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [motionReady, setMotionReady] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastRun = 0;

    const show = () => setRevealed(true);
    const check = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (element.getBoundingClientRect().top < viewportHeight * 0.92) show();
    };
    const handleViewportChange = () => {
      const now = Date.now();
      if (now - lastRun < 120) return;
      lastRun = now;
      check();
    };

    const observer =
      prefersReducedMotion || !("IntersectionObserver" in window)
        ? null
        : new IntersectionObserver(
            (entries) => {
              if (!entries.some((entry) => entry.isIntersecting)) return;
              show();
              observer?.disconnect();
            },
            { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
          );

    observer?.observe(element);
    const initialFrame = window.requestAnimationFrame(() => {
      setMotionReady(true);
      if (prefersReducedMotion) show();
      check();
    });
    const fallbackTimers = [600, 1800].map((wait) => window.setTimeout(check, wait));
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange, { passive: true });

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(initialFrame);
      fallbackTimers.forEach(window.clearTimeout);
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  const classes = [
    "scroll-reveal",
    motionReady && "motion-ready",
    revealed && "is-revealed",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  const setElementRef = (element: HTMLElement | null) => {
    elementRef.current = element;
    if (typeof forwardedRef === "function") forwardedRef(element);
    else if (forwardedRef) forwardedRef.current = element;
  };

  return (
    <Element ref={setElementRef as never} className={classes} style={style} {...elementProps}>
      {children}
    </Element>
  );
});
