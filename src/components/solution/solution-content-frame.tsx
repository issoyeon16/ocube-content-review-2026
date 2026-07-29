"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function SolutionContentFrame({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.classList.add("js", "motion-ready");
    const motionItems = Array.from(root.querySelectorAll<HTMLElement>(".rv, .reveal"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = (element: HTMLElement) => element.classList.add("in");

    let revealObserver: IntersectionObserver | undefined;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      motionItems.forEach(reveal);
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            reveal(entry.target as HTMLElement);
            revealObserver?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8%", threshold: 0.12 },
      );
      motionItems.forEach((element) => revealObserver?.observe(element));
    }

    const countFrames = new Set<number>();
    const runCount = (element: HTMLElement) => {
      if (element.dataset.countDone === "true") return;
      element.dataset.countDone = "true";
      const target = Number(element.dataset.count ?? 0);
      const startedAt = performance.now();
      const duration = 900;

      const step = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        element.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))).toLocaleString();
        if (progress < 1) {
          const frame = requestAnimationFrame(step);
          countFrames.add(frame);
        }
      };
      const frame = requestAnimationFrame(step);
      countFrames.add(frame);
    };

    const countItems = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
    let countObserver: IntersectionObserver | undefined;
    if (countItems.length && "IntersectionObserver" in window) {
      countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            runCount(entry.target as HTMLElement);
            countObserver?.unobserve(entry.target);
          });
        },
        { threshold: 0.35 },
      );
      countItems.forEach((element) => countObserver?.observe(element));
    } else {
      countItems.forEach(runCount);
    }

    const handleAnchor = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const target = document.getElementById(anchor.hash.slice(1));
      if (!target || !root.contains(target)) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    };
    root.addEventListener("click", handleAnchor);

    return () => {
      revealObserver?.disconnect();
      countObserver?.disconnect();
      countFrames.forEach(cancelAnimationFrame);
      root.removeEventListener("click", handleAnchor);
    };
  }, []);

  return (
    <div ref={rootRef} className="solution-content-root">
      {children}
    </div>
  );
}
