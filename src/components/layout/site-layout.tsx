"use client";

import { forwardRef, type ReactNode } from "react";
import { RouteScrollReset } from "@/components/layout/route-scroll-reset";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SitePopupLayer } from "@/components/layout/site-popup-layer";

interface SiteLayoutProps {
  children: ReactNode;
  className?: string;
  mainId?: string;
}

export const SiteLayout = forwardRef<HTMLDivElement, SiteLayoutProps>(function SiteLayout(
  { children, className, mainId = "main" },
  ref,
) {
  return (
    <div ref={ref} className={className}>
      <RouteScrollReset />
      <a className="skip-link" href={`#${mainId}`}>
        본문 바로가기
      </a>
      <SiteHeader />
      <main id={mainId}>{children}</main>
      <SiteFooter />
      <SitePopupLayer />
    </div>
  );
});
