import Link from "next/link";
import Image from "next/image";
export function EvcpSolutionContent() {
  return (
    <>
      <section className="sol-intro">
        <span className="eb rv">SOLUTION / EVCP</span>
        <h2 className="rv d1">
          <span>국제 표준 위에 세운</span>
          <span>전기차 충전 플랫폼</span>
        </h2>
        <div className="sol-lead rv d2">
          <p>국제 충전 통신 표준(OCPP)을 지원하는 충전기를 연결해 한 화면에서 관제합니다.</p>
          <p>
            회원·
            <wbr />
            결제를 마이크로서비스로 구성하고, 로밍은 사업 요건에 맞춰 확장합니다.
          </p>
        </div>
        <figure className="sol-stage rv d3">
          <Image
            src="/ocube-content-review-2026/assets/images/solutions/evcp-dashboard.png"
            alt="EVCP 화면 — 프로토타입 예시"
            loading="lazy"
            width="1746"
            height="748"
          />
        </figure>
      </section>

      <nav className="subnav" hidden aria-hidden="true">
        <div className="wrap">
          <a href="#overview">개요</a>
          <a href="#arch">아키텍처</a>
          <a href="#struct">마이크로서비스 구조(MSA)</a>
          <a href="#standards">표준</a>
          <a href="#ocpp">OCPP</a>
          <a href="#energy">스마트 에너지</a>
          <a href="#deploy">배포</a>
          <a href="#proof">레퍼런스</a>
        </div>
      </nav>

      <section id="overview" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Overview</span>
            <h2>충전 사업에 필요한 운영 기능을 한 플랫폼으로 제공합니다</h2>
            <p className="sec-sub">
              EVCP는 OCPP 호환 충전기를 연결하고 회원·
              <wbr />
              결제·
              <wbr />
              관제를 함께 운영하는 전기차 충전 플랫폼입니다. 충전 사업 구축·
              <wbr />
              운영 경험을 바탕으로 구성했습니다.
            </p>
          </div>
          <div className="media-duo reveal" data-d="1">
            <div className="feat-list">
              <div className="feat">
                <b>국제 충전 통신 표준(OCPP)</b>
                <span>OCPP 호환 충전기 연동 — 서로 다른 충전 인프라를 한 화면에서 관제</span>
              </div>
              <div className="feat">
                <b>지도 기반 관제</b>
                <span>
                  다거점 충전소의 상태·
                  <wbr />
                  이용률·
                  <wbr />
                  장애 모니터링
                </span>
              </div>
              <div className="feat">
                <b>마이크로서비스 구조(MSA)</b>
                <span>
                  회원·
                  <wbr />
                  결제·
                  <wbr />
                  연동·
                  <wbr />
                  관제 독립 확장 — 사업 규모에 따라 유연 확장
                </span>
              </div>
            </div>
            <figure>
              <Image
                className="shot"
                src="/ocube-content-review-2026/assets/images/solutions/evcp-dashboard.png"
                alt="EVCP — 지도 기반 다거점 충전소 관제 화면"
                loading="lazy"
                style={{ maxHeight: "320px", objectFit: "cover", objectPosition: "top" }}
                width="1746"
                height="748"
              />
              <figcaption className="shot-cap">
                EVCP — 지도 기반 충전소 실시간 관제 (자체 제품)
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section id="arch" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Architecture</span>
            <h2>
              충전기 통신부터 회원·
              <wbr />
              결제·
              <wbr />
              관제까지 연결합니다
            </h2>
            <p className="sec-sub">
              충전기와 통신 모듈에서 받은 정보를 충전 관리 시스템(CSMS)이 처리하고, 회원·
              <wbr />
              결제·
              <wbr />
              로밍·
              <wbr />
              에너지 관리 서비스가 함께 사용하도록 구성합니다.
            </p>
          </div>
          <div className="stack-diagram reveal" data-d="1">
            <div className="stack-layer l-op">
              <span className="stack-tag">서비스 · 확장</span>
              <b>로밍 · 스마트 에너지</b>
              <small>
                충전 로밍 표준(OCPI) 연동 · 동적 부하분산(DLM) · 차량–전력망 양방향 충전(V2G) —
                지원하도록 설계
              </small>
            </div>
            <div className="stack-arrow" aria-hidden="true">
              ▲
            </div>
            <div className="stack-layer l-judge">
              <span className="stack-tag">충전 관제 핵심 서비스</span>
              <div className="stack-prods">
                <span>
                  회원
                  <small>
                    인증·
                    <wbr />
                    요금
                  </small>
                </span>
                <span>
                  결제·
                  <wbr />
                  정산<small>세션 과금</small>
                </span>
                <span>
                  연동<small>OCPP 게이트웨이</small>
                </span>
                <span>
                  관제<small>GIS 대시보드</small>
                </span>
              </div>
            </div>
            <div className="stack-arrow" aria-hidden="true">
              ▲
            </div>
            <div className="stack-layer l-data">
              <span className="stack-tag">충전 인프라</span>
              <b>충전기 · 통신 모듈</b>
              <small>OCPP 호환 충전기 · 자체 Mini PCI LTE Cat M1 통신 모듈</small>
            </div>
          </div>
        </div>
      </section>
      <section id="struct" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">MSA Modules</span>
            <h2>필요한 기능부터 조합하고, 서비스별로 확장합니다</h2>
            <p className="sec-sub">
              회원·
              <wbr />
              결제·
              <wbr />
              충전기 연동·
              <wbr />
              관제를 각각 배포하고 확장할 수 있어, 사업 범위와 운영 규모에 맞춰 구성합니다.
            </p>
          </div>
          <div className="dep-grid">
            <div className="dep-card reveal" data-d="1">
              <div className="ic" aria-hidden="true">
                👤
              </div>
              <h3>회원</h3>
              <p>
                가입·
                <wbr />
                인증·
                <wbr />
                요금제·
                <wbr />
                이용 이력
              </p>
            </div>
            <div className="dep-card reveal" data-d="2">
              <div className="ic" aria-hidden="true">
                💳
              </div>
              <h3>
                결제·
                <wbr />
                정산
              </h3>
              <p>
                충전 세션 단위 과금·
                <wbr />
                정산·
                <wbr />
                PG 연동
              </p>
            </div>
            <div className="dep-card reveal" data-d="3">
              <div className="ic" aria-hidden="true">
                🔌
              </div>
              <h3>연동(OCPP)</h3>
              <p>충전기별 OCPP 버전과 호환성을 확인해 게이트웨이 연동</p>
            </div>
            <div className="dep-card reveal" data-d="1">
              <div className="ic" aria-hidden="true">
                🗺️
              </div>
              <h3>관제(GIS)</h3>
              <p>
                지도 기반 실시간 상태·
                <wbr />
                이용률·
                <wbr />
                장애 관제
              </p>
            </div>
            <div className="dep-card reveal" data-d="2">
              <div className="ic" aria-hidden="true">
                🔗
              </div>
              <h3>사업자 간 충전 로밍(OCPI)</h3>
              <p>
                사업자 간 로밍·
                <wbr />
                데이터 교환 — 지원 설계
              </p>
            </div>
            <div className="dep-card reveal" data-d="3">
              <div className="ic" aria-hidden="true">
                ⚡
              </div>
              <h3>스마트 에너지</h3>
              <p>
                동적 부하분산(DLM)·
                <wbr />
                V2G — 지원 설계
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="standards" className="sec-anchor dark">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Standards &amp; Protocols</span>
            <h2>구축 경험과 확장 표준을 구분합니다</h2>
            <p className="sec-sub">
              OCPP 1.6J 구축 경험을 기반으로 2.0.1과 로밍·
              <wbr />
              스마트 충전 표준을 사업 범위에 맞춰 확장해, 특정 제조사·
              <wbr />
              사업자 의존을 줄입니다.
            </p>
          </div>
          <div className="mod-grid reveal" data-d="1">
            <div className="mod">OCPP 1.6J</div>
            <div className="mod">OCPP 2.0.1 (확장)</div>
            <div className="mod">OCPI 로밍 (사업별)</div>
            <div className="mod">
              ISO 15118 Plug&amp;
              <wbr />
              Charge (사업별)
            </div>
            <div className="mod">ISO 15118-20 V2G (참조)</div>
            <div className="mod">OpenADR 2.0 (참조)</div>
            <div className="mod">IEC 61851</div>
            <div className="mod">LTE Cat M1 / LTE-M</div>
          </div>
          <p className="sec-note">
            OCPP 1.6J 구축 경험을 기반으로 합니다. OCPP 2.0.1 기능과 OCPI·
            <wbr />
            ISO 15118·
            <wbr />
            OpenADR 연계는 사업 요건과 충전기 호환성에 따라 적용 범위를 정합니다.
          </p>
          <div className="feat-list reveal" data-d="2" style={{ marginTop: "20px" }}>
            <div className="feat">
              <b>OCPP 1.6J 구축 기반</b>
              <span>
                자체 EV 충전 플랫폼의 충전기 제어·
                <wbr />
                과금·
                <wbr />
                상태 관리 경험을 2.0.1 확장 설계에 반영합니다.
              </span>
            </div>
            <div className="feat">
              <b>스마트 충전 확장</b>
              <span>
                전력 피크 분산·
                <wbr />
                충전 스케줄링 등 스마트 충전 프로파일을 지원하는 방향으로 설계합니다.
              </span>
            </div>
            <div className="feat">
              <b>로밍 · PnC 로드맵</b>
              <span>
                OCPI 로밍, ISO 15118 Plug&amp;
                <wbr />
                Charge는 표준 성숙도에 맞춰 단계 도입하는 접근입니다.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="ocpp" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">OCPP 1.6 vs 2.0.1</span>
            <h2>프로토콜 버전별 지원 범위</h2>
            <p className="sec-sub">
              사업 요건에 맞춰 OCPP 1.6J에서 2.0.1로 단계적 마이그레이션을 지원하도록 설계합니다.
            </p>
          </div>
          <table className="cmp reveal" data-d="1">
            <caption className="sr-only">프로토콜 버전별 지원 범위 비교표</caption>
            <thead>
              <tr>
                <th scope="col">기능</th>
                <th scope="col">OCPP 1.6J</th>
                <th scope="col" className="ok">
                  OCPP 2.0.1
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">보안</th>
                <td>TLS 옵션</td>
                <td className="ok">보안 프로파일(인증서 기반)</td>
              </tr>
              <tr>
                <th scope="row">디바이스 관리</th>
                <td>기본</td>
                <td className="ok">
                  원격 진단·
                  <wbr />
                  설정·
                  <wbr />
                  펌웨어 관리 강화
                </td>
              </tr>
              <tr>
                <th scope="row">
                  ISO 15118 Plug&amp;
                  <wbr />
                  Charge
                </th>
                <td>제한적</td>
                <td className="ok">
                  사업 요건·
                  <wbr />
                  충전기 호환성에 따라 적용
                </td>
              </tr>
              <tr>
                <th scope="row">스마트 차징</th>
                <td>기본 프로파일</td>
                <td className="ok">
                  동적 부하분산·
                  <wbr />
                  시장신호 시프팅
                </td>
              </tr>
              <tr>
                <th scope="row">트랜잭션</th>
                <td>StartTransaction 계열</td>
                <td className="ok">
                  TransactionEvent·
                  <wbr />
                  MeterValues 세분화
                </td>
              </tr>
            </tbody>
          </table>
          <p className="sec-note">
            OCPP 2.0.1 고급 기능은 사업 요건과 충전기 호환성에 따라 단계적으로 적용합니다.
          </p>
        </div>
      </section>
      <section id="energy" className="sec-anchor dark">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Smart Energy</span>
            <h2>충전소의 가용 전력에 맞춰 충전량을 배분하도록 설계합니다</h2>
            <p className="sec-sub">
              충전기별 우선순위와 가용 전력을 기준으로 충전 부하를 나누고, 전력 신호에 따라 충전
              시간을 조정하도록 구성합니다.
            </p>
          </div>
          <div className="feat-list reveal" data-d="1">
            <div className="feat">
              <b>동적 부하분산 (DLM)</b>
              <span>
                충전소 내 가용 전력을 충전기별 우선순위로 실시간 분배 — 계약 전력 초과 방지
              </span>
            </div>
            <div className="feat">
              <b>스마트 차징</b>
              <span>
                전력 요금·
                <wbr />
                시장 신호(OpenADR) 기반 충전 시프팅으로 피크 회피·
                <wbr />
                비용 최적화
              </span>
            </div>
            <div className="feat">
              <b>V2G 양방향 충전</b>
              <span>ISO 15118-20 기반 차량→그리드 역송전 — 지원하도록 설계</span>
            </div>
            <div className="feat">
              <b>재생에너지 · ESS 연계</b>
              <span>
                태양광·
                <wbr />
                ESS와 연계해 잉여 전력으로 충전 배분 — 연계하도록 설계
              </span>
            </div>
            <div className="feat">
              <b>예약 · 스케줄 충전</b>
              <span>저요금 시간대 자동 충전 예약으로 운영 비용 절감 — 지원 방향</span>
            </div>
            <div className="feat">
              <b>계약전력 관리</b>
              <span>충전소 계약전력 한도 내에서 충전 총량 제어 — 초과 수요요금 방지</span>
            </div>
          </div>
        </div>
      </section>
      <section id="deploy" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Deployment</span>
            <h2>세 가지 배포 형태</h2>
            <p className="sec-sub">
              사업 규모·
              <wbr />
              보안 요건에 맞춰 동일 플랫폼을 세 형태로 배포하도록 구성합니다.
            </p>
          </div>
          <div className="dep-grid">
            <div className="dep-card reveal" data-d="1">
              <div className="ic" aria-hidden="true">
                ☁️
              </div>
              <h3>클라우드 CSMS</h3>
              <p>
                빠른 구축·
                <wbr />
                탄력 확장 — 다거점 충전소 통합 관제
              </p>
            </div>
            <div className="dep-card reveal" data-d="2">
              <div className="ic" aria-hidden="true">
                🏢
              </div>
              <h3>온프레미스 관제</h3>
              <p>
                사내 서버 배치 — 데이터 내부화·
                <wbr />
                보안 요건 대응
              </p>
            </div>
            <div className="dep-card reveal" data-d="3">
              <div className="ic" aria-hidden="true">
                🔒
              </div>
              <h3>폐쇄망 · 엣지</h3>
              <p>
                망분리 환경 대응 — 현장 엣지에서 통신·
                <wbr />
                과금 처리
              </p>
            </div>
            <div className="dep-card reveal" data-d="1">
              <div className="ic" aria-hidden="true">
                🔀
              </div>
              <h3>하이브리드</h3>
              <p>클라우드 통합 관제 + 현장 엣지 과금 병행 구성</p>
            </div>
            <div className="dep-card reveal" data-d="2">
              <div className="ic" aria-hidden="true">
                🔁
              </div>
              <h3>이중화 · HA</h3>
              <p>관제 서버 이중화로 장애 시 서비스 영향을 줄이는 구성</p>
            </div>
            <div className="dep-card reveal" data-d="3">
              <div className="ic" aria-hidden="true">
                🧩
              </div>
              <h3>개방 API</h3>
              <p>OCPP 연동 API를 제공하고, OCPI 연계는 사업 요건에 맞춰 확장</p>
            </div>
          </div>
        </div>
      </section>
      <section id="proof" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Reference</span>
            <h2>구축 경험을 제품 자산으로 전환했습니다</h2>
          </div>
          <div className="hero-stats reveal">
            <div className="stat">
              <b>OCPP 1.6J</b>
              <span>
                충전기 연동·
                <wbr />
                관제 운영 경험
              </span>
            </div>
            <div className="stat">
              <b>OCPP 2.0.1</b>
              <span>사업 요건별 기능 적용</span>
            </div>
            <div className="stat">
              <b>확장 표준</b>
              <span>충전 로밍 표준(OCPI) · 차량 충전통신(ISO 15118) 연계 설계</span>
            </div>
            <div className="stat">
              <b>LTE Cat M1</b>
              <span>자체 통신 모듈(2025)</span>
            </div>
          </div>
          <div className="case-grid two">
            <article className="case-card reveal" data-d="1">
              <span className="dom">에너지 · SK에너지</span>
              <h3>
                전기차 충전 서비스 구축·
                <wbr />
                운영
              </h3>
              <p className="csi">
                <b>과제</b> 충전 사업 진출에 필요한 회원·
                <wbr />
                연동·
                <wbr />
                결제·
                <wbr />
                관제 플랫폼 부재
              </p>
              <p className="csi">
                <b>해결</b> 국제 충전 통신 표준(OCPP) 기반 마이크로서비스 구축·
                <wbr />
                운영 → 자체 제품 EVCP로 자산화
              </p>
              <p className="csi">
                <b>성과</b> 충전 사업 전 기능을 재사용 가능한 자체 플랫폼으로 확보
              </p>
            </article>
            <article className="case-card reveal" data-d="2">
              <span className="dom">자체 모듈</span>
              <h3>OCPP LTE 모듈</h3>
              <p className="csi">
                Mini PCI LTE Cat M1 통신 모듈(2025) 자체 개발 — 하드웨어까지 아우르는 스택
              </p>
            </article>
          </div>
          <div className="rv" style={{ marginTop: "36px", textAlign: "center" }}>
            <Link href="/#business" className="btn btn-ghost">
              전체 구축 사례 보기 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
