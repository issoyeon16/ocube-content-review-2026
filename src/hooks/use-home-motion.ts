"use client";

import { type RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useHomeMotion(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-shell", { opacity: 0, duration: 0.8, ease: "power2.out" });
      gsap.set(".global-tech-copy", { autoAlpha: 0, y: 36 });
      gsap.set(".global-tech-logos a", { autoAlpha: 0, y: 28 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".typo-section",
            start: "top 82%",
            end: "top 8%",
            scrub: 0.75,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(
          ".typo-open",
          { xPercent: -65, scale: 0.45, autoAlpha: 0, transformOrigin: "left center" },
          { xPercent: 0, scale: 1.5, autoAlpha: 1, ease: "power3.out" },
          0,
        )
        .fromTo(
          ".typo-cube",
          { xPercent: 65, scale: 0.45, autoAlpha: 0, transformOrigin: "right center" },
          { xPercent: 0, scale: 1.5, autoAlpha: 1, ease: "power3.out" },
          0,
        )
        .fromTo(
          ".typo-copy",
          { autoAlpha: 0, y: 44 },
          { autoAlpha: 1, y: 0, ease: "power2.out" },
          0.28,
        );

      const capabilityCards = gsap.utils.toArray<HTMLElement>(".capability-card");
      const activateCapability = (activeCard: HTMLElement) => {
        capabilityCards.forEach((card) => {
          const active = card === activeCard;
          card.classList.toggle("is-active", active);
          if (active) {
            card.setAttribute("aria-current", "true");
          } else {
            card.removeAttribute("aria-current");
          }
        });
      };

      const syncActiveCapability = () => {
        const focusLine = window.innerHeight * 0.56;
        const middleHoldOffset = 120;
        const middleCard = capabilityCards[1];
        const lastCard = capabilityCards[2];
        let activeCard = capabilityCards[0];

        if (lastCard?.getBoundingClientRect().top <= focusLine - middleHoldOffset) {
          activeCard = lastCard;
        } else if (middleCard?.getBoundingClientRect().top <= focusLine + middleHoldOffset) {
          activeCard = middleCard;
        }

        activateCapability(activeCard);
      };

      ScrollTrigger.create({
        trigger: ".capabilities-section",
        start: "top bottom",
        end: "bottom top",
        onEnter: syncActiveCapability,
        onEnterBack: syncActiveCapability,
        onUpdate: syncActiveCapability,
        onRefresh: syncActiveCapability,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".global-tech-section",
            start: "top 78%",
            end: "top 34%",
            scrub: 0.7,
          },
        })
        .to(".global-tech-copy", { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" })
        .to(
          ".global-tech-logos a",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          0.22,
        );

      if (window.innerWidth > 1024) {
        gsap.set([".cards-bg-image", ".cards-title-inner", ".case-marquee", ".case-more-link"], {
          autoAlpha: 0,
        });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".section-cards",
              pin: true,
              start: "top top",
              end: "+=550px",
              scrub: 1.8,
              pinSpacing: true,
            },
          })
          .set(".case-marquee-track", { animationName: "home-case-marquee" }, 0)
          .to(".cards-bg-box", { width: "100%", top: 0, duration: 0.8, ease: "none" })
          .to(".cards-bg-image", {
            autoAlpha: 1,
            duration: 0.55,
            ease: "power2.out",
          })
          .to(".cards-title-inner", { autoAlpha: 1, duration: 0.7, ease: "power2.out" })
          .to(".case-marquee", { autoAlpha: 1, duration: 0.7, ease: "power2.out" }, "<0.12")
          .to(".case-more-link", { autoAlpha: 1, duration: 0.45, ease: "power2.out" }, "<0.18")
          .to({}, { duration: 0.8 });
      }
    }, root);
    return () => ctx.revert();
  }, [root]);
}
