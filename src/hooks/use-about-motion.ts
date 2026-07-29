"use client";

import { type RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useAboutMotion(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (window.innerWidth > 900) {
        const slides = gsap.utils.toArray<HTMLElement>(".vision-card");
        const steps = gsap.utils.toArray<HTMLElement>(".vision-step");
        gsap.set(slides, { autoAlpha: 0, scale: 1.05 });
        gsap.set(slides[0], { autoAlpha: 1, scale: 1 });
        gsap.set(steps, { opacity: 0.3 });
        gsap.set(steps[0], { opacity: 1 });

        const visionTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".about-vision",
            start: "top top",
            end: "+=220%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        slides.slice(1).forEach((slide, index) => {
          const previous = slides[index];
          visionTimeline
            .to(previous, { autoAlpha: 0, scale: 0.96, duration: 0.45, ease: "none" })
            .to(slide, { autoAlpha: 1, scale: 1, duration: 0.55, ease: "none" }, "<.12")
            .to(steps[index], { opacity: 0.3, duration: 0.2 }, "<")
            .to(steps[index + 1], { opacity: 1, duration: 0.2 }, "<");
        });
      }
    }, root);

    return () => ctx.revert();
  }, [root]);
}
