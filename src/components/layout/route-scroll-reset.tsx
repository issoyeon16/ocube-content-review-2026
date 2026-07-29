"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    let secondFrame = 0;

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    root.style.scrollBehavior = "auto";
    resetScroll();

    const firstFrame = window.requestAnimationFrame(() => {
      resetScroll();
      secondFrame = window.requestAnimationFrame(resetScroll);
    });
    const fallbackTimer = window.setTimeout(resetScroll, 80);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(fallbackTimer);
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, [pathname]);

  return null;
}
