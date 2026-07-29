"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useSiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [gnbOpen, setGnbOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      setScrolled(window.scrollY > 30);
      frame = 0;
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const holdGnb = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const openGnb = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setGnbOpen(true);
  }, []);

  const closeGnb = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setGnbOpen(false);
  }, []);

  const scheduleCloseGnb = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setGnbOpen(false), 140);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGnb();
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [closeGnb]);

  return {
    menuOpen,
    setMenuOpen,
    scrolled,
    gnbOpen,
    openGnb,
    holdGnb,
    scheduleCloseGnb,
  };
}
