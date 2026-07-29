"use client";

import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

export function useSubpageHeroMotion(root: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    if (!root.current) return;
    const visual = root.current.querySelector<HTMLElement>(".subpage-hero-visual");
    const intro = root.current.querySelector<HTMLElement>(".subpage-hero-intro");
    const content = root.current.querySelector<HTMLElement>(".subpage-hero-content");
    if (!visual || !intro || !content) return;

    const timeline = gsap
      .timeline({ paused: true })
      .to(visual, {
        width: "100vw",
        height: "863px",
        bottom: 0,
        borderRadius: 0,
        duration: 0.75,
        ease: "power2.out",
      })
      .to(intro, { autoAlpha: 0, y: -32, duration: 0.25, ease: "power2.out" }, 0.12)
      .to(content, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }, 0.35);

    timeline.play();

    return () => {
      timeline.kill();
    };
  }, [root]);
}
