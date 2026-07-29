"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { BusinessStep } from "@/types/business";

interface AxProcessProps {
  steps: readonly BusinessStep[];
  title?: string;
  description?: ReactNode;
}

export function BusinessProcess({
  steps,
  title = "AX · AI Transformation",
  description,
}: AxProcessProps) {
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const elements = stepRefs.current.filter((element): element is HTMLElement => Boolean(element));
    let lastRun = 0;

    const sync = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      let current = -1;

      elements.forEach((element, index) => {
        const top = element.getBoundingClientRect().top;
        if (top < viewportHeight * 0.75) current = index;
      });

      setActiveStep(current);
    };

    const handleViewportChange = () => {
      const now = Date.now();
      if (now - lastRun < 110) return;
      lastRun = now;
      sync();
    };

    const initialFrame = window.requestAnimationFrame(sync);
    const fallbackTimers = [600, 1800].map((delay) => window.setTimeout(sync, delay));
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange, { passive: true });

    return () => {
      window.cancelAnimationFrame(initialFrame);
      fallbackTimers.forEach(window.clearTimeout);
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, [steps]);

  return (
    <section className="business-process" id="whatwedo">
      <div className="business-wrap business-process-layout">
        <aside className="business-process-copy">
          <span>What We Do</span>
          <h2>{title}</h2>
          <p>
            {description ?? (
              <>
                업무와 설비 데이터를 분석해 AI 적용 대상을 정합니다. 보고를 자동화하고, AI의 판단
                결과를 담당자 승인 후 현장 조치로 연결합니다. 데이터 진단부터 운영까지 전 과정을{" "}
                <b>6단계</b>로 수행합니다.
              </>
            )}
          </p>
          <div>
            {steps.map((step, index) => (
              <i key={step.title} className={index <= activeStep ? "on" : ""} />
            ))}
          </div>
        </aside>
        <div className="business-process-list">
          {steps.map((step, index) => (
            <ScrollReveal
              as="article"
              className="business-process-item"
              key={step.title}
              data-step={index}
              data-number={String(index + 1).padStart(2, "0")}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
            >
              <div className="business-process-image">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 900px) 90vw, 55vw"
                />
              </div>
              <div className="business-process-number">{String(index + 1).padStart(2, "0")}</div>
              <h3>{step.title}</h3>
              <p>{step.summary}</p>
              <ul>
                {step.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
