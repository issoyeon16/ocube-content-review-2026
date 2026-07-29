import Image from "next/image";
export function QdriveSolutionContent() {
  return (
    <>
      <section className="sol-intro">
        <span className="eb rv">SOLUTION / QDRIVE</span>
        <h2 className="rv d1">
          <span>차량 데이터가</span>
          <span>서비스가 되는 지점</span>
        </h2>
        <div className="sol-lead rv d2">
          <p>운행기록과 차량 진단 신호를 표준 형식으로 수집합니다.</p>
          <p>위험운전 판정부터 탄소 배출 산정까지 하나의 흐름으로 연결합니다.</p>
        </div>
        <figure className="sol-stage rv d3">
          <Image
            src="/ocube-content-review-2026/assets/images/solutions/screens/qdrive-driver.jpg"
            alt="Qdrive 기사 앱(운전자 화면) — 프로토타입 예시"
            loading="lazy"
            width="1500"
            height="848"
          />
        </figure>
      </section>

      <nav className="subnav" hidden aria-hidden="true">
        <div className="wrap">
          <a href="#overview">개요</a>
          <a href="#comp">구성</a>
          <a href="#arch">아키텍처</a>
          <a href="#flow">데이터 흐름</a>
          <a href="#standards">표준</a>
          <a href="#spec">스펙</a>
          <a href="#eco">생태계</a>
          <a href="#ip">
            기술·
            <wbr />
            특허
          </a>
        </div>
      </nav>

      <section id="overview" className="sec-anchor dark">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Overview</span>
            <h2 style={{ color: "#fff" }}>
              차량 데이터를 운행·
              <wbr />
              에너지·
              <wbr />
              탄소 관리에 활용합니다
            </h2>
            <p className="sec-sub">
              Qdrive는 차량에서 운행기록과 진단 신호를 수집해 위험운전, 에너지 사용, 탄소 배출을
              함께 관리하는 모빌리티 플랫폼입니다.
            </p>
          </div>
          <div className="media-duo reveal" data-d="1">
            <figure>
              <Image
                className="shot"
                src="/ocube-content-review-2026/assets/images/solutions/qdrive-vehicle.png"
                alt="Qdrive — 전기차 에너지·주행 데이터"
                loading="lazy"
                width="760"
                height="307"
              />
              <figcaption className="shot-cap">
                Qdrive — 차량 데이터 기반 모빌리티 서비스
              </figcaption>
            </figure>
            <figure>
              <Image
                className="shot"
                src="/ocube-content-review-2026/assets/images/solutions/qdrive-cluster.png"
                alt="Qdrive — 디지털 클러스터 UI"
                loading="lazy"
                width="1288"
                height="520"
              />
              <figcaption className="shot-cap">디지털 클러스터 UI (자체 개발)</figcaption>
            </figure>
          </div>
          <div
            className="reveal"
            data-d="2"
            style={{ marginTop: "18px", display: "flex", flexWrap: "wrap", gap: "8px" }}
          >
            <span className="pill">충전 통신 표준(OCPP) 연계</span>
            <span className="pill">ISO 15118</span>
            <span className="pill">온실가스 산정 기준(GHG Protocol·ISO 14064)</span>
            <span className="pill">LTE Cat M1 자체 모듈</span>
          </div>
        </div>
      </section>

      <section id="comp" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Composition</span>
            <h2>
              차량 데이터 수집을 기반으로 에너지·
              <wbr />
              충전·
              <wbr />
              탄소 서비스를 연결합니다
            </h2>
          </div>
          <div className="dep-grid">
            <div className="dep-card reveal" data-d="1">
              <div className="ic" aria-hidden="true">
                🚗
              </div>
              <h3>차량 데이터</h3>
              <p>
                디지털 클러스터·
                <wbr />
                AVN·
                <wbr />
                커넥티드 데이터 수집·
                <wbr />
                표준화
              </p>
            </div>
            <div className="dep-card reveal" data-d="2">
              <div className="ic" aria-hidden="true">
                ⚡
              </div>
              <h3>
                에너지·
                <wbr />
                충전
              </h3>
              <p>
                EV 충·
                <wbr />
                방전 예약·
                <wbr />
                최적화 — EVCP와 연계
              </p>
            </div>
            <div className="dep-card reveal" data-d="3">
              <div className="ic" aria-hidden="true">
                🌱
              </div>
              <h3>탄소중립</h3>
              <p>
                주행·
                <wbr />
                에너지 데이터 기반 탄소 저감 서비스
              </p>
            </div>
          </div>
          <figure className="shot-fig reveal" data-d="2">
            <Image
              className="shot fit"
              src="/ocube-content-review-2026/assets/images/solutions/screens/qdrive-city.jpg"
              alt="모빌리티 통합 관제 대시보드 예시 화면 — 실시간 차량 위치·연료 절감·안전점수·위험운전 히트맵"
              loading="lazy"
              width="1600"
              height="1005"
            />
            <figcaption className="shot-cap">
              모빌리티 통합 관제 대시보드 — 실증 데모 예시 화면
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="arch" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Architecture</span>
            <h2>차량에서 수집한 데이터를 서비스 화면까지 연결합니다</h2>
            <p className="sec-sub">
              차량·
              <wbr />
              에너지 데이터를 공통 형식으로 정리한 뒤, 분석 서비스와 운전자 앱·
              <wbr />
              운수사 관제 화면에 제공합니다.
            </p>
          </div>
          <div className="stack-diagram reveal" data-d="1">
            <div className="stack-layer l-op">
              <span className="stack-tag">APPLICATION</span>
              <b>애플리케이션층</b>
              <small>디지털 클러스터 UI · 커넥티드 서비스 앱 · 관제 대시보드</small>
            </div>
            <div className="stack-arrow">▲</div>
            <div className="stack-layer">
              <span className="stack-tag">SERVICE</span>
              <b>서비스층</b>
              <div className="stack-prods">
                <span>
                  주행 최적화
                  <small>
                    주행·
                    <wbr />
                    경로 분석
                  </small>
                </span>
                <span>
                  충·
                  <wbr />
                  방전 스케줄링<small>EVCP 연계</small>
                </span>
                <span>
                  탄소 산정<small>온실가스 감축 산정 로직</small>
                </span>
              </div>
            </div>
            <div className="stack-arrow">▲</div>
            <div className="stack-layer">
              <span className="stack-tag">STANDARDIZATION</span>
              <b>데이터 표준화층 · QData 연계</b>
              <small>
                디지털 클러스터·
                <wbr />
                AVN·
                <wbr />
                커넥티드 차량 데이터 수집 → 공통 스키마·
                <wbr />
                의미 기준으로 정규화
              </small>
            </div>
          </div>
          <p className="sec-note">
            서로 다른 차량·
            <wbr />
            에너지 데이터를 QData의 공통 의미 기준으로 표준화하고, EVCP(충전 통신 표준 OCPP)·
            <wbr />
            Cubeon과 연결해 서비스에 활용하도록 설계합니다.
          </p>
        </div>
      </section>
      <section id="flow" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Data Pipeline</span>
            <h2>차량 데이터가 서비스가 되기까지</h2>
          </div>
          <div className="tl reveal" data-d="1">
            <div className="tl-card">
              <div className="yr">01</div>
              <h3>수집</h3>
              <p>
                커넥티드 차량·
                <wbr />
                충전 인프라에서 주행·
                <wbr />
                에너지 데이터 수집 (충전 통신 표준(OCPP) · 메시지 통신(MQTT) · 저전력 이동통신(LTE
                Cat M1))
              </p>
            </div>
            <div className="tl-card">
              <div className="yr">02</div>
              <h3>표준화</h3>
              <p>
                이기종 데이터를 공통 스키마·
                <wbr />
                온톨로지로 정규화 (QData 표준화층)
              </p>
            </div>
            <div className="tl-card">
              <div className="yr">03</div>
              <h3>분석</h3>
              <p>
                주행·
                <wbr />
                에너지 패턴 분석 · 충·
                <wbr />
                방전 최적화 · 탄소 저감량 산정
              </p>
            </div>
            <div className="tl-card cur">
              <div className="yr">04</div>
              <h3>서비스</h3>
              <p>
                클러스터 UI·
                <wbr />
                앱·
                <wbr />
                관제로 전달 (REST / gRPC API)
              </p>
            </div>
          </div>
          <figure className="shot-fig reveal" data-d="2">
            <Image
              className="shot fit"
              src="/ocube-content-review-2026/assets/images/solutions/screens/qdrive-carbon.jpg"
              alt="탄소중립 분석 예시 화면 — DTG 주행거리·연비 개선·CO2 절감량·안전운전↔연비 상관 분석"
              loading="lazy"
              width="1600"
              height="1005"
            />
            <figcaption className="shot-cap">
              탄소·
              <wbr />
              연료 절감 분석 — 실증 데모 예시 화면
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="standards" className="sec-anchor dark">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker" style={{ color: "#79b3f2" }}>
              Standards &amp; Protocols
            </span>
            <h2 style={{ color: "#fff" }}>
              표준·
              <wbr />
              프로토콜 기반
            </h2>
            <p className="sec-sub" style={{ color: "#c7d1df" }}>
              모빌리티·
              <wbr />
              충전·
              <wbr />
              탄소 도메인의 통용 표준과 프로토콜을 지원하도록 설계합니다.
            </p>
          </div>
          <div className="mod-grid reveal" data-d="1">
            <div className="mod">
              충전 통신 표준(OCPP)<small>충전 인프라 연계</small>
            </div>
            <div className="mod">
              ISO 15118<small>자동 인증 충전 · 양방향 충전(V2G)</small>
            </div>
            <div className="mod">
              메시지 통신(MQTT)<small>차량 데이터 전송</small>
            </div>
            <div className="mod">
              LTE Cat M1
              <small>
                차량·
                <wbr />
                충전 통신
              </small>
            </div>
            <div className="mod">
              서비스 연동 API<small>REST · gRPC</small>
            </div>
            <div className="mod">
              마이크로서비스 구조(MSA)<small>기능별 독립 확장</small>
            </div>
            <div className="mod">
              온실가스 산정 기준<small>GHG Protocol · ISO 14064</small>
            </div>
            <div className="mod">
              TLS 1.2 / 1.3<small>데이터 전송 보안</small>
            </div>
          </div>
          <p className="sec-note">
            OCPP는 EVCP에 적용했고, LTE Cat M1은 자체 통신 모듈 개발 경험을 보유합니다. ISO 15118과
            GHG Protocol은 사업 요건에 따라 적용 범위를 정합니다.
          </p>
          <figure className="shot-fig reveal" data-d="2">
            <Image
              className="shot fit"
              src="/ocube-content-review-2026/assets/images/solutions/screens/qdrive-verify.jpg"
              alt="성과 검증 예시 화면 — 코칭 효과 AI 미적용 가정과 비교·운전 그룹별 A/B 효과·기준선 대비·OBD·DTG 교차검증"
              loading="lazy"
              width="1600"
              height="1005"
            />
            <figcaption className="shot-cap">
              성과 검증 — AI 미적용 가정과 비교·
              <wbr />
              차량진단(OBD)·
              <wbr />
              운행기록(DTG) 교차검증 · 실증 데모 예시 화면
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="spec" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Service Spec</span>
            <h2>
              세 축의 입력·
              <wbr />
              표준·
              <wbr />
              산출물
            </h2>
          </div>
          <table className="cmp reveal" data-d="1">
            <caption className="sr-only">세 축의 입력·표준·산출물 비교표</caption>
            <thead>
              <tr>
                <th scope="col">서비스 축</th>
                <th scope="col" className="ok">
                  입력 데이터
                </th>
                <th scope="col">
                  표준·
                  <wbr />
                  프로토콜
                </th>
                <th scope="col">산출물</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">차량 데이터</th>
                <td className="ok">
                  디지털 클러스터·
                  <wbr />
                  AVN·
                  <wbr />
                  커넥티드 텔레메트리
                </td>
                <td>MQTT · LTE Cat M1</td>
                <td>
                  표준화 주행·
                  <wbr />
                  상태 데이터셋
                </td>
              </tr>
              <tr>
                <th scope="row">
                  에너지·
                  <wbr />
                  충전
                </th>
                <td className="ok">
                  충전 세션·
                  <wbr />
                  전력·
                  <wbr />
                  SoC
                </td>
                <td>충전 통신 표준(OCPP) 연계 · ISO 15118 참조(사업별 적용)</td>
                <td>
                  충·
                  <wbr />
                  방전 예약·
                  <wbr />
                  운영 스케줄
                </td>
              </tr>
              <tr>
                <th scope="row">탄소중립</th>
                <td className="ok">
                  주행·
                  <wbr />
                  에너지 소비 데이터
                </td>
                <td>온실가스 산정 기준(GHG Protocol·ISO 14064) 참조(사업별 적용)</td>
                <td>산정 기준에 따른 탄소 저감량 리포트</td>
              </tr>
            </tbody>
          </table>
          <figure className="shot-fig reveal" data-d="2">
            <Image
              className="shot fit"
              src="/ocube-content-review-2026/assets/images/solutions/screens/qdrive-ops.jpg"
              alt="운수사 관제 예시 화면 — 차량·기사별 운전점수·연료·재차율·배차간격, 정비비 예측(OBD/CAN)·eTAS 자동제출"
              loading="lazy"
              width="1600"
              height="1005"
            />
            <figcaption className="shot-cap">
              운수사 관제 — 차량·
              <wbr />
              기사별 운행 현황 · 실증 데모 예시 화면
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="eco" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Ecosystem</span>
            <h2>플랫폼 생태계 위에서 동작</h2>
            <p className="sec-sub">
              Qdrive는 기존 오큐브 플랫폼·
              <wbr />
              솔루션 구성을 활용해 필요한 서비스부터 단계적으로 확장할 수 있습니다.
            </p>
          </div>
          <div className="feat-list reveal" data-d="1" style={{ maxWidth: "820px" }}>
            <div className="feat">
              <b>QData</b>
              <span>
                차량·
                <wbr />
                에너지 데이터를 공통 스키마로 표준화하는 입구 계층
              </span>
            </div>
            <div className="feat">
              <b>EVCP</b>
              <span>
                OCPP 기반 충전 인프라 연계 — 충·
                <wbr />
                방전 예약·
                <wbr />
                관제
              </span>
            </div>
            <div className="feat">
              <b>Cubeon</b>
              <span>산업 AI 운영 플랫폼 Connect 모듈로 모빌리티 텔레메트리 통합</span>
            </div>
            <div className="feat">
              <b>QVision</b>
              <span>
                영상 인식 기반 위험운전·
                <wbr />
                안전 이벤트 분석과 연계
              </span>
            </div>
            <div className="feat">
              <b>QAgent</b>
              <span>
                운행·
                <wbr />
                정비 이상을 자연어로 조회·
                <wbr />
                조치하는 AI 에이전트 연계
              </span>
            </div>
            <div className="feat">
              <b>유연 배포</b>
              <span>
                클라우드·
                <wbr />
                온프레미스·
                <wbr />
                폐쇄망 환경에 맞춰 구성
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="ip" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Core Technology</span>
            <h2>자체 기술로 뒷받침되는 서비스</h2>
            <p className="sec-sub">
              차량 데이터 수집부터 판정·
              <wbr />
              산정 로직까지, 핵심 기술을 직접 개발해 적용합니다.
            </p>
          </div>
          <div className="case-grid two">
            <article className="case-card reveal" data-d="1">
              <span className="dom">등록특허</span>
              <h3>모빌리티 IP</h3>
              <p className="csi">
                블록체인 모빌리티 인포테인먼트 관제(2026) · 디지털 번호판 차량 통신 · 전기차 충방전
                예약
              </p>
            </article>
            <article className="case-card reveal" data-d="2">
              <span className="dom">기반 역량</span>
              <h3>차량 전장 개발</h3>
              <p className="csi">
                글로벌 완성차 양산 IVI·
                <wbr />
                클러스터 개발 경험 — 차량 데이터를 다뤄본 팀
              </p>
            </article>
            <article className="case-card reveal" data-d="3">
              <span className="dom">자체 기술</span>
              <h3>차량 데이터 분석 엔진</h3>
              <p className="csi">
                위험운전 판정·
                <wbr />
                탄소배출 산정 로직을 자체 개발해 차종·
                <wbr />
                운행 조건에 맞게 조정
              </p>
            </article>
            <article className="case-card reveal" data-d="4">
              <span className="dom">표준 연계</span>
              <h3>DTG · OBD 표준 수집</h3>
              <p className="csi">
                기존 DTG·
                <wbr />
                OBD 장치의 표준 데이터를 수집해 운행·
                <wbr />
                차량 상태 분석에 활용
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
