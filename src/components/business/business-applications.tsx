import type { BusinessCard } from "@/types/business";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const icons = ["🏛️", "🏦", "🏭", "🚦"];

export function BusinessApplications({ areas }: { areas: readonly BusinessCard[] }) {
  return (
    <section className="business-applications" id="applications">
      <div className="business-wrap">
        <ScrollReveal className="business-section-head">
          <span>Applications</span>
          <h2>적용 분야</h2>
          <p>
            프로젝트에 따라 AX·임베디드·SI 역량을 조합해 <b>공공·금융·제조·교통</b> 현장에
            적용합니다.
          </p>
        </ScrollReveal>
        <ScrollReveal className="business-application-grid" delay={80}>
          {areas.map((area, index) => (
            <article key={area.title}>
              <div aria-hidden="true">{icons[index]}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
