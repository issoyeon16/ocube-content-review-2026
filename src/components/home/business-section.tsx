import Image from "next/image";
import Link from "next/link";
import { homeBuildCases } from "@/data/home-build-cases";
import { ArrowIcon } from "@/components/ui/arrow-icon";

function setCaseMarqueePaused(anchor: HTMLAnchorElement, paused: boolean) {
  const track = anchor.closest(".case-marquee")?.querySelector<HTMLElement>(".case-marquee-track");

  if (track) {
    track.style.animationPlayState = paused ? "paused" : "running";
  }
}

function BuildCaseCard({
  item,
  duplicated = false,
}: {
  item: (typeof homeBuildCases)[number];
  duplicated?: boolean;
}) {
  return (
    <Link
      className="home-case-link"
      href={item.href}
      tabIndex={duplicated ? -1 : undefined}
      aria-label={`${item.title} 자세히 보기`}
      onPointerEnter={(event) => setCaseMarqueePaused(event.currentTarget, true)}
      onPointerLeave={(event) => setCaseMarqueePaused(event.currentTarget, false)}
      onFocus={(event) => setCaseMarqueePaused(event.currentTarget, true)}
      onBlur={(event) => setCaseMarqueePaused(event.currentTarget, false)}
    >
      <article className="home-case-card">
        <Image
          className="home-case-image"
          src={item.image}
          alt=""
          width={480}
          height={260}
          sizes="360px"
        />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <ul>
          {item.points.map((point) => (
            <li key={point}>
              <Image src={item.checkIcon} alt="" width={24} height={24} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </article>
    </Link>
  );
}

const rollingCases = [...homeBuildCases, ...homeBuildCases];

export function BusinessSection() {
  const title = "산업의 요구를 이해하고, 현장에서 증명한 구축 사례";
  return (
    <section className="section-cards" id="business">
      <div className="cards-title-box cards-title-outer">
        <h2>{title}</h2>
      </div>
      <div className="cards-bg-box">
        <div className="cards-bg-image" aria-hidden="true" />
        <div className="cards-title-box cards-title-inner">
          <h2>구축 사례</h2>
          <p className="cards-description">
            산업의 요구를 정확히 이해하고, 실제 현장에서 안정적으로 작동하는 소프트웨어와 시스템으로
            완성한 오큐브의 프로젝트입니다.
          </p>
        </div>
        <div className="case-marquee" aria-label="주요 구축 사례">
          <div className="case-marquee-track">
            {rollingCases.map((item, index) => (
              <div
                aria-hidden={index >= homeBuildCases.length || undefined}
                key={`${item.id}-${index}`}
              >
                <BuildCaseCard item={item} duplicated={index >= homeBuildCases.length} />
              </div>
            ))}
          </div>
        </div>
        <Link className="case-more-link" href="/references.html">
          전체 구축 사례 보기 <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
