import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { BusinessReference } from "@/data/business-references";

interface BusinessReferencesProps {
  items: readonly BusinessReference[];
  variant: "embedded" | "si";
}

const variantClasses = {
  embedded: {
    section: "embedded-references",
    heading: "embedded-reference-head",
    grid: "embedded-reference-grid",
    link: undefined,
  },
  si: {
    section: "si-references",
    heading: "si-section-head",
    grid: "si-reference-grid",
    link: "si-more",
  },
} as const;

export function BusinessReferences({ items, variant }: BusinessReferencesProps) {
  const classes = variantClasses[variant];

  return (
    <section className={classes.section}>
      <div className="business-wrap">
        <ScrollReveal className={classes.heading}>
          <span>References</span>
          <h2>대표 구축 사례</h2>
        </ScrollReveal>
        <div className={classes.grid}>
          {items.map((item, index) => (
            <ScrollReveal as="article" delay={index * 80} key={item.title}>
              <span>{item.domain}</span>
              <h3>{item.title}</h3>
              {item.lines.map(([label, value]) => (
                <p key={label}>
                  <b>{label}</b>
                  {value}
                </p>
              ))}
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <Link className={classes.link} href="/#business">
            전체 구축 사례 보기 →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
