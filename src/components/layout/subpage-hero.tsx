"use client";

import Image from "next/image";
import { useRef } from "react";
import { useSubpageHeroMotion } from "@/hooks/use-subpage-hero-motion";
import type { SubpageHeroProps } from "@/types/subpage-hero";

export function SubpageHero({ eyebrow, tagline, description, imageAlt }: SubpageHeroProps) {
  const root = useRef<HTMLElement>(null);
  useSubpageHeroMotion(root);

  return (
    <section className="subpage-hero subpage-hero--standard" id="top" ref={root}>
      <div className="subpage-hero-stage">
        <div className="subpage-hero-intro">
          <p>{eyebrow}</p>
          <h1>
            {tagline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <span>AI CONVERGENCE FRONTIER</span>
        </div>
        <div className="subpage-hero-visual">
          <Image
            src="/ocube-content-review-2026/assets/images/shared/subpage-hero.png"
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
          />
          <div className="subpage-hero-overlay" />
          <div className="subpage-hero-content">
            <p>{eyebrow}</p>
            <h2>
              {tagline.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <small>{description}</small>
          </div>
        </div>
        <span className="subpage-hero-scroll">SCROLL TO EXPAND</span>
      </div>
    </section>
  );
}
