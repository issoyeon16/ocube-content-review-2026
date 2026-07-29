"use client";

import { useRef } from "react";
import { BusinessSection } from "@/components/home/business-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { HeroSection } from "@/components/home/hero-section";
import { PartnersSection } from "@/components/home/partners-section";
import { TypoSection } from "@/components/home/typo-section";
import { SiteLayout } from "@/components/layout/site-layout";
import { useHomeMotion } from "@/hooks/use-home-motion";

export default function Page() {
  const root = useRef<HTMLDivElement>(null);
  useHomeMotion(root);

  return (
    <SiteLayout ref={root} className="home-page">
      <HeroSection />
      <TypoSection />
      <CapabilitiesSection />
      <PartnersSection />
      <BusinessSection />
    </SiteLayout>
  );
}
