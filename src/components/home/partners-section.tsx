import Image from "next/image";
import Link from "next/link";
import { technologyPartners } from "@/data/home-content";

export function PartnersSection() {
  return (
    <section className="global-tech-section" id="partners" aria-labelledby="partners-title">
      <div className="global-tech-copy">
        <p className="section-label">GLOBAL TECHNOLOGY</p>
        <h2 id="partners-title">
          검증된 글로벌 기술,
          <br /> 국내 엔지니어링으로 완성합니다
        </h2>
        <p>
          제품 선정과 정품 라이선스 공급부터 포팅·통합·커스터마이징·엔지니어링 지원까지 오큐브
          엔지니어가 함께합니다.
        </p>
      </div>
      <div className="global-tech-logos" aria-label="글로벌 기술 파트너">
        {technologyPartners.map((partner) => (
          <Link
            key={partner.name}
            href={partner.href}
            aria-label={`${partner.name} 공식 파트너 제품 문의`}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
