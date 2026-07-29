import { ArrowIcon } from "@/components/ui/arrow-icon";

export function TypoSection() {
  return (
    <section className="typo-section" id="about">
      <div className="typo-layout">
        <div className="typo-stage" aria-label="Open plus Cube, OCUBE">
          <div className="typo-row typo-open">OPEN</div>
          <div className="typo-row typo-cube">
            <em>+</em> CUBE
          </div>
        </div>

        <div className="typo-copy">
          <p>
            오큐브는 <b>OPEN</b>(열린 협업)과 <b>CUBE</b>(견고한 기술)가 만나 탄생했습니다.
            <br />
            고객의 과제를 이해하고 AX · 임베디드 · SI 역량으로 운영 가능한
            <br />
            제품과 시스템을 구축합니다.
          </p>
          <a href="#business">
            자세히 보기 <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
