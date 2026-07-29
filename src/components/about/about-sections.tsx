import Image from "next/image";
import { AboutSectionHeader } from "@/components/about/about-section-header";
import { CoreValueIcon } from "@/components/about/core-value-icon";
import { ceoMessage, coreValues, missions, visions } from "@/data/about";

export function AboutSections() {
  return (
    <>
      <section className="about-greeting" id="greeting">
        <AboutSectionHeader eyebrow="CEO GREETING" title="CEO 인사말" />
        <div className="greeting-grid">
          <h3>오큐브 홈페이지를 찾아주신 여러분, 환영합니다.</h3>
          <div>
            {ceoMessage.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="greeting-sign">
              <span>오큐브(주) 대표이사</span>
              <b>원창연</b>
            </div>
          </div>
        </div>
      </section>

      <section className="about-vision" id="vision">
        <AboutSectionHeader
          eyebrow="VISION & SLOGAN"
          title="비전과 슬로건"
          className="vision-intro"
        />
        <div className="vision-grid">
          {visions.map((item, index) => (
            <article className="vision-card" key={item.eyebrow}>
              <Image src={item.image} alt="" fill sizes="100vw" />
              <div>
                <p>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <span>{item.description}</span>
              </div>
              <b>0{index + 1}</b>
            </article>
          ))}
        </div>
        <div className="vision-pagination" aria-hidden="true">
          {visions.map((item, index) => (
            <span className="vision-step" key={item.eyebrow}>
              0{index + 1}
              <i />
            </span>
          ))}
        </div>
      </section>

      <section className="about-values" id="value">
        <AboutSectionHeader eyebrow="CORE VALUE" title="핵심 가치" />
        <div className="value-grid">
          {coreValues.map((item) => (
            <article key={item.title}>
              <div className="value-hexagon">
                <span>
                  <CoreValueIcon type={item.icon} />
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-mission" id="mission">
        <AboutSectionHeader eyebrow="MISSION" title="기업 미션" />
        <h3 className="mission-statement">
          AI로 산업의 기준을 바꾸고
          <br />
          경쟁력으로 증명하는 혁신을 만듭니다.
        </h3>
        <div className="mission-grid">
          {missions.map((item) => (
            <article key={item.number}>
              <span>MISSION {item.number}</span>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-ci" id="ci">
        <AboutSectionHeader eyebrow="CORPORATE IDENTITY" title="Open + Cube" />
        <div className="ci-showcase">
          <figure>
            <Image
              src="/ocube-content-review-2026/assets/images/brand/ocube-logo-horizontal.avif"
              alt="OCUBE 가로형 로고"
              width={462}
              height={140}
            />
            <figcaption>좌우조합 · 가로형</figcaption>
          </figure>
          <figure>
            <Image
              src="/ocube-content-review-2026/assets/images/brand/ocube-symbol.png"
              alt="OCUBE 세로형 심벌"
              width={231}
              height={231}
            />
            <figcaption>상하조합 · 세로형</figcaption>
          </figure>
        </div>
        <div className="ci-description">
          <b>OCUBE는 새로운 미지의 세상(Cube)을 연다(Open)는 뜻입니다.</b>
          <p>
            O와 C를 큐브에 대입해 형상화했으며, 심벌마크와 로고타입의 비례·간격·크기를 유지해
            사용합니다.
          </p>
          <strong>Always in your life.</strong>
        </div>
      </section>
    </>
  );
}
