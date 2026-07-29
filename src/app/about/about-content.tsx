"use client";

import { useRef } from "react";
import { AboutSections } from "@/components/about/about-sections";
import { SiteLayout } from "@/components/layout/site-layout";
import { SubpageHero } from "@/components/layout/subpage-hero";
import { aboutHero } from "@/data/about";
import { useAboutMotion } from "@/hooks/use-about-motion";

export function AboutContent() {
  const root = useRef<HTMLDivElement>(null);
  useAboutMotion(root);

  return (
    <SiteLayout ref={root} className="about-page" mainId="about-main">
      <SubpageHero {...aboutHero} imageAlt="디지털 기술로 연결되는 사람과 산업" />
      <AboutSections />
    </SiteLayout>
  );
}
