import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type {
  GlobalPartnerPageData,
  PartnerCard,
  PartnerShowcase,
} from "@/data/global-partner-pages";

function PartnerTags({ tags }: { tags: readonly string[] }) {
  return (
    <div className="partner-detail-tags">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function PartnerShowcaseBlock({ item }: { item: PartnerShowcase }) {
  const classes = [
    "partner-detail-showcase",
    item.reverse && "is-reverse",
    !item.image && "has-no-media",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ScrollReveal className={classes}>
      <div className="partner-detail-copy">
        {item.badge && <span className="partner-detail-badge">{item.badge}</span>}
        {item.title && <h3>{item.title}</h3>}
        {item.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {item.features && (
          <div className="partner-detail-features">
            {item.features.map((feature) => (
              <article key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        )}
        {item.tags && <PartnerTags tags={item.tags} />}
        {item.link && (
          <a className="partner-detail-link" href={item.link.href} target="_blank" rel="noreferrer">
            {item.link.label}
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      {item.image && (
        <div className="partner-detail-media">
          <Image
            src={item.image}
            alt={item.imageAlt ?? ""}
            fill
            sizes="(max-width: 900px) 90vw, 42vw"
          />
        </div>
      )}
    </ScrollReveal>
  );
}

function PartnerCardItem({ card }: { card: PartnerCard }) {
  const content = (
    <>
      {card.icon && <Image src={card.icon} alt="" width={40} height={40} aria-hidden="true" />}
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      {card.href && <span className="partner-detail-card-link">문의하기 →</span>}
    </>
  );

  return card.href ? (
    <a className="partner-detail-card" href={card.href}>
      {content}
    </a>
  ) : (
    <article className="partner-detail-card">{content}</article>
  );
}

export function GlobalPartnerContent({ data }: { data: GlobalPartnerPageData }) {
  return (
    <div className="global-partner-detail">
      {data.sections.map((section) => (
        <section
          className={`partner-detail-section is-${section.theme ?? "light"}`}
          id={section.id}
          key={section.id}
        >
          <div className="partner-detail-wrap">
            <ScrollReveal className="partner-detail-heading">
              <span>{section.eyebrow}</span>
              <h2>{section.title}</h2>
              {section.description && <p>{section.description}</p>}
            </ScrollReveal>

            {section.cards && (
              <ScrollReveal className="partner-detail-card-grid" delay={60}>
                {section.cards.map((card) => (
                  <PartnerCardItem card={card} key={card.title} />
                ))}
              </ScrollReveal>
            )}

            {section.showcases?.map((item, index) => (
              <PartnerShowcaseBlock item={item} key={`${section.id}-${index}`} />
            ))}

            {section.tags && <PartnerTags tags={section.tags} />}
            {section.note && <p className="partner-detail-note">{section.note}</p>}
          </div>
        </section>
      ))}
    </div>
  );
}
