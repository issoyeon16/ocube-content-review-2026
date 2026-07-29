"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSlides } from "@/data/site";
import "swiper/css";
import "swiper/css/effect-fade";

interface TypewriterTitleProps {
  text: string;
  isActive: boolean;
}

function TypewriterTitle({ text, isActive }: TypewriterTitleProps) {
  const characters = Array.from(text);
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    if (!isActive) {
      const resetId = window.setTimeout(() => setVisibleLength(0), 0);
      return () => window.clearTimeout(resetId);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const completeId = window.setTimeout(() => setVisibleLength(characters.length), 0);
      return () => window.clearTimeout(completeId);
    }

    if (visibleLength >= characters.length) return;

    const nextCharacterId = window.setTimeout(
      () => {
        setVisibleLength((current) => Math.min(current + 1, characters.length));
      },
      visibleLength === 0 ? 600 : 68,
    );

    return () => window.clearTimeout(nextCharacterId);
  }, [characters.length, isActive, text, visibleLength]);

  const complete = visibleLength >= characters.length;

  return (
    <h1 className={`typewriter-title ${complete ? "complete" : ""}`} aria-label={text}>
      <span className="typewriter-output" aria-hidden="true">
        {characters.map((character, index) => {
          const visible = index < visibleLength;
          const current = visible && index === visibleLength - 1;

          return (
            <span
              className={`typewriter-character ${visible ? "is-visible" : ""} ${current ? "is-current" : ""}`}
              key={`${character}-${index}`}
            >
              {character}
              {current && !complete ? <i className="typewriter-caret" /> : null}
            </span>
          );
        })}
      </span>
    </h1>
  );
}

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const heroVisibleRef = useRef(true);
  const [active, setActive] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  const toggleAutoplay = useCallback(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (autoplayPaused) {
      swiper.autoplay.resume();
    } else {
      swiper.autoplay.pause();
    }
    setAutoplayPaused((paused) => !paused);
  }, [autoplayPaused]);

  const syncVideoPlayback = useCallback((swiper: SwiperType | null) => {
    if (!swiper || !rootRef.current || !swiper.slides?.length || swiper.activeIndex == null) {
      return;
    }

    const activeSlide = swiper.slides[swiper.activeIndex];

    rootRef.current.querySelectorAll("video").forEach((video) => {
      const shouldPlay =
        heroVisibleRef.current &&
        document.visibilityState === "visible" &&
        video.closest(".swiper-slide") === activeSlide;

      if (shouldPlay) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisibleRef.current = entry.isIntersecting;
        syncVideoPlayback(swiperRef.current);
      },
      { threshold: 0.05 },
    );
    const onVisibilityChange = () => syncVideoPlayback(swiperRef.current);

    observer.observe(root);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      root.querySelectorAll("video").forEach((video) => video.pause());
    };
  }, [syncVideoPlayback]);

  return (
    <section className="hero" id="top" ref={rootRef}>
      <div className="hero-shell">
        <Swiper
          modules={[Autoplay, EffectFade, A11y]}
          effect="fade"
          speed={850}
          loop
          autoplay={{ delay: 6500, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            requestAnimationFrame(() => syncVideoPlayback(swiper));
          }}
          onSlideChange={(swiper) => {
            setActive(swiper.realIndex);
            syncVideoPlayback(swiper);
          }}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.key}>
              <div className="hero-media">
                {slide.video ? (
                  <video
                    muted
                    loop
                    playsInline
                    poster={slide.poster}
                    preload={index === 0 ? "auto" : "none"}
                  >
                    <source src={slide.video} />
                  </video>
                ) : (
                  <Image src={slide.poster} alt="" fill priority={index === 0} sizes="100vw" />
                )}
                <div className="hero-veil" />
                <div className={`hero-copy ${active === index ? "is-active" : ""}`}>
                  <p>{slide.eyebrow}</p>
                  <TypewriterTitle text={slide.title} isActive={active === index} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hero-pagination">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.key}
              className={active === index ? "active" : ""}
              onClick={() => swiperRef.current?.slideToLoop(index)}
            >
              <i />
              <small>0{index + 1}</small>
              <b>{slide.key}</b>
            </button>
          ))}
        </div>

        <div className="hero-controls" aria-label="히어로 슬라이드 제어">
          <button
            type="button"
            aria-label="이전 슬라이드"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            className="hero-autoplay-control"
            aria-label={autoplayPaused ? "자동 재생" : "일시 정지"}
            aria-pressed={autoplayPaused}
            onClick={toggleAutoplay}
          >
            <span aria-hidden="true">{autoplayPaused ? "▶" : "Ⅱ"}</span>
          </button>
          <button
            type="button"
            aria-label="다음 슬라이드"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
