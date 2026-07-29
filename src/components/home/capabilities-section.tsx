import Image from "next/image";
import Link from "next/link";
import { businessCapabilities } from "@/data/home-content";

export function CapabilitiesSection() {
  return (
    <section className="capabilities-section" id="capabilities">
      <div className="capabilities-head">
        <p className="section-label">BUSINESS</p>
        <h2>세 가지 실행 역량</h2>
        <p>
          현장의 데이터와 업무를 운영 가능한 제품·시스템으로
          <br /> 구현합니다 — AI 전환(AX)·임베디드·SI.
        </p>
      </div>
      <div className="capabilities-grid">
        {businessCapabilities.map((item) => (
          <article
            className={`capability-card${item.featured ? " is-active" : ""}`}
            aria-current={item.featured ? "true" : undefined}
            key={item.title}
          >
            <div className="capability-title-row">
              <div className="capability-title">
                <Image src={item.icon} alt="" width={32} height={32} />
                <h3>{item.title}</h3>
              </div>
              <Link href={item.href}>
                자세히보기
                <Image src="/ocube-content-review-2026/assets/icons/arrow-right.svg" alt="" width={24} height={24} />
              </Link>
            </div>
            <p>{item.description}</p>
            <div className="capability-chips">
              {item.chips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
