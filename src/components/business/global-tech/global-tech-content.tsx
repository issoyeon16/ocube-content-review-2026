import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { deliverySteps, globalPartners, standards, technologyStack } from "@/data/global-tech";

function GlobalSectionHead({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <ScrollReveal className="global-section-head">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </ScrollReveal>
  );
}

export function GlobalTechContent() {
  return (
    <div className="global-tech-content">
      <section className="global-partners" id="license">
        <div className="global-wrap">
          <GlobalSectionHead
            eyebrow="Global Tech"
            title="제품 선정부터 통합·운영 지원까지"
            description="프로젝트 환경에 맞는 글로벌 솔루션을 선정하고, 정품 라이선스와 국내 엔지니어링 지원·교육을 함께 제공합니다."
          />
          <div className="global-partner-list">
            {globalPartners.map((partner, index) => (
              <article className={index % 2 ? "reverse" : ""} id={partner.id} key={partner.id}>
                <ScrollReveal className="global-partner-copy">
                  <span>{partner.badge}</span>
                  <h3>{partner.title}</h3>
                  <p>{partner.description}</p>
                  <div>
                    {partner.tags.map((tag) => (
                      <i key={tag}>{tag}</i>
                    ))}
                  </div>
                  <Link href={`/business/global-tech/${partner.id}`}>
                    {partner.title.split(" — ")[0]} 자세히 보기 →
                  </Link>
                </ScrollReveal>
                <ScrollReveal className="global-partner-media" delay={80}>
                  <Image src={partner.image} alt={partner.imageAlt} width={784} height={555} />
                </ScrollReveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="global-stack" id="stack-map">
        <div className="global-wrap">
          <GlobalSectionHead
            eyebrow="Technology Stack"
            title="프로젝트 전체 임베디드 스택을 한 팀이 연결합니다"
            description="6종 솔루션을 OS·컴퓨팅, 미들웨어·HMI, 미디어·스토리지, 검증 계층에 맞게 구성하고 통합합니다."
          />
          <ScrollReveal className="global-table-wrap" delay={80}>
            <table>
              <caption>파트너별 기술 스택 비교</caption>
              <thead>
                <tr>
                  <th>파트너</th>
                  <th>담당 계층</th>
                  <th>핵심 기술</th>
                  <th>표준 · 프로토콜</th>
                </tr>
              </thead>
              <tbody>
                {technologyStack.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) =>
                      index === 0 ? (
                        <th scope="row" key={cell}>
                          {cell}
                        </th>
                      ) : (
                        <td key={cell}>{cell}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
          <p className="global-note">
            삼성 스마트폰 SW·Nokia Symbian·차량 IVI 미들웨어 개발 계보 위에서, 각 라이선스를 실제
            임베디드 제품 스택에 통합·튜닝하도록 지원합니다.
          </p>
        </div>
      </section>

      <section className="global-standards" id="standards">
        <div className="global-wrap">
          <GlobalSectionHead
            eyebrow="Standards Coverage"
            title="주요 산업·임베디드·미디어 표준에 대응합니다"
            description="프로젝트에 필요한 표준과 프로토콜을 제품 선정·포팅·통합 단계에서 함께 검토합니다."
          />
          <ScrollReveal className="global-stats" delay={80}>
            <div>
              <b>6계층</b>
              <span>OS·컴퓨팅부터 HMI·검증까지</span>
            </div>
            <div>
              <b>6종</b>
              <span>글로벌 SW 벤더 공식 파트너</span>
            </div>
            <div>
              <b>Since 2010</b>
              <span>Qt 국내 엔지니어링 지원 계보</span>
            </div>
            <div>
              <b>16+</b>
              <span>대응 표준·프로토콜</span>
            </div>
          </ScrollReveal>
          <ScrollReveal className="global-standard-grid" delay={160}>
            {standards.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </ScrollReveal>
          <p className="global-note">
            차량 전장 프로젝트에서는 ISO 26262 기능안전과 ASPICE 개발·검증 프로세스에 맞춰 라이선스
            컴포넌트를 통합합니다.
          </p>
        </div>
      </section>

      <section className="global-support" id="support">
        <div className="global-wrap">
          <GlobalSectionHead
            eyebrow="Partner Delivery Model"
            title="조달 이후 통합과 엔지니어링 지원까지 책임집니다"
            description="라이선스 공급에 그치지 않고 온보딩·교육, SDK·BSP·HMI 통합, 국내 지원과 벤더 본사 연계까지 단계별로 수행합니다."
          />
          <ScrollReveal className="global-stats" delay={80}>
            <div>
              <b>4역량</b>
              <span>라이선스·지원·교육·통합</span>
            </div>
            <div>
              <b>L1 · L2</b>
              <span>국내 1차·2차 지원 데스크</span>
            </div>
            <div>
              <b>벤더 직결</b>
              <span>본사 에스컬레이션 채널</span>
            </div>
            <div>
              <b>Since 2010</b>
              <span>글로벌 벤더 협력 계보</span>
            </div>
          </ScrollReveal>
          <ScrollReveal className="global-delivery" delay={160}>
            {deliverySteps.map(([number, title, description], index) => (
              <article className={index === 3 ? "current" : ""} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </ScrollReveal>
          <ScrollReveal className="global-engineering" delay={240}>
            <b>단순 리셀러가 아닌 엔지니어링 조직의 지원</b>
            <p>
              임베디드·SI·차량 전장 개발을 수행하는 엔지니어가 지원을 담당합니다. 언어·시차·통합
              과정의 부담을 줄이고 라이선스·엔지니어링 지원·교육·통합 범위를 일관되게 안내합니다.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
