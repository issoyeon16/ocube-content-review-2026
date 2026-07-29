import Link from "next/link";
import Image from "next/image";
export function QdataSolutionContent() {
  return (
    <>
      <section className="sol-intro">
        <span className="eb rv">SOLUTION / DATAQ</span>
        <h2 className="rv d1">
          <span>흩어진 산업 데이터를</span>
          <span>하나의 언어로</span>
        </h2>
        <div className="sol-lead rv d2">
          <p>설비 프로토콜부터 문서·이미지까지 하나의 파이프라인으로 모읍니다.</p>
          <p>표준 스키마와 온톨로지로 AI가 바로 쓸 수 있는 데이터를 만듭니다.</p>
        </div>
        <figure className="sol-stage rv d3">
          <Image
            src="/ocube-content-review-2026/assets/images/solutions/screens/dataq-knowledge.jpg"
            alt="QData 화면 — 프로토타입 예시"
            loading="lazy"
            width="1600"
            height="1005"
          />
        </figure>
      </section>

      <nav className="subnav" hidden aria-hidden="true">
        <div className="wrap">
          <a href="#overview">개요</a>
          <a href="#features">핵심 기능</a>
          <a href="#flow">동작 원리</a>
          <a href="#connectors">연결 방식</a>
          <a href="#arch">구조</a>
          <a href="#semantic">의미 체계</a>
          <a href="#spec">기능 범위</a>
          <a href="#standards">
            표준·
            <wbr />
            관리
          </a>
          <a href="#deploy">배포</a>
          <a href="#proof">적용 사례</a>
        </div>
      </nav>

      <section id="overview" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Overview</span>
            <h2>설비와 문서 데이터를 분석 시스템과 AI가 함께 쓸 수 있게 정리합니다</h2>
            <p className="sec-sub">
              QData는 부서·
              <wbr />
              설비마다 다른 데이터를 수집해 형식과 의미를 통일하는 산업 데이터 플랫폼입니다. 정리된
              데이터는 관제·
              <wbr />
              분석·
              <wbr />
              지식 검색에 활용됩니다.
            </p>
          </div>
          <div className="media-duo reveal" data-d="1">
            <div className="feat-list">
              <div className="feat">
                <b>Connect</b>
                <span>
                  PLC·
                  <wbr />
                  센서·
                  <wbr />
                  MES·
                  <wbr />
                  ERP를 연결하고, 서로 다른 프로토콜과 데이터 형식을 공통 입력으로 변환
                </span>
              </div>
              <div className="feat">
                <b>Standardize</b>
                <span>
                  공통 스키마·
                  <wbr />
                  온톨로지로 표준화 — 설비마다 다른 데이터를 하나의 언어로
                </span>
              </div>
              <div className="feat">
                <b>Serve</b>
                <span>
                  지도·
                  <wbr />
                  대시보드 관제 + 실시간 질의 — QFactory·
                  <wbr />
                  QAgent가 바로 소비
                </span>
              </div>
            </div>
            <figure>
              <Image
                className="shot"
                src="/ocube-content-review-2026/assets/images/solutions/qdata-integration.png"
                alt="QData — 이기종 데이터 통합·표준화 화면"
                loading="lazy"
                width="1100"
                height="655"
              />
              <figcaption className="shot-cap">
                QData — 데이터 통합·
                <wbr />
                표준화 (예시 화면)
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="features" className="sec-anchor">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Features</span>
            <h2>데이터를 자산으로 만드는 핵심 기능</h2>
            <p className="lead">
              현장 소스를 연결하고 품질을 확인한 뒤, 공통 의미로 정리해 분석과 에이전트가 사용할 수
              있게 제공합니다.
            </p>
          </div>
          <div className="duo">
            <div className="duo-txt rv">
              <span className="pill">Connect</span>
              <h3>
                산업·
                <wbr />
                업무 시스템 커넥터
              </h3>
              <p>
                OPC-UA·
                <wbr />
                Modbus·
                <wbr />
                MQTT 같은 산업 프로토콜부터 MES·
                <wbr />
                ERP 업무 시스템까지 준비된 커넥터로 연결합니다. 새 설비는 커넥터를 추가해
                확장합니다.
              </p>
              <a className="duo-cta" href="#connectors">
                커넥터 자세히 <i aria-hidden="true">→</i>
              </a>
            </div>
            <div className="duo-media stage rv d1">
              <Image
                src="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-connect.jpg"
                alt="데이터 소스·프로토콜 어댑터 개념 화면"
                loading="lazy"
                width="2720"
                height="1270"
              />
              <p className="fitcap">소스·어댑터 관리 — 개념 예시 화면(실제 UI 아님)</p>
            </div>
          </div>
          <div className="duo rev">
            <div className="duo-txt rv">
              <span className="pill">Semantic</span>
              <h3>의미 기반 지식화</h3>
              <p>
                설비마다 다른 태그와 코드를 온톨로지로 정규화합니다. 문서·
                <wbr />
                이미지는 의미 단위로 구조화하고, 추출한 개체와 관계를 지식그래프로 연결해 AI가
                데이터의 맥락을 찾게 합니다.
              </p>
              <a className="duo-cta" href="#semantic">
                의미 모델 자세히 <i aria-hidden="true">→</i>
              </a>
            </div>
            <div className="duo-media stage rv d1">
              <Image
                src="/ocube-content-review-2026/assets/images/solutions/screens/dataq-knowledge.jpg"
                alt="지식 관리 화면"
                loading="lazy"
                width="1600"
                height="1005"
              />
              <p className="fitcap">지식 관리 콘솔 — 프로토타입 예시 화면</p>
            </div>
          </div>
          <div className="duo">
            <div className="duo-txt rv">
              <span className="pill">Serving</span>
              <h3>지식 검색과 데이터 제공</h3>
              <p>
                문서·
                <wbr />
                이미지를 의미 기반으로 검색하고, 정리된 데이터는 API로 제공해 QFactory와 QAgent가
                바로 활용하게 합니다.
              </p>
              <a className="duo-cta" href="#spec">
                수집·제공 범위 자세히 <i aria-hidden="true">→</i>
              </a>
            </div>
            <div className="duo-media stage rv d1">
              <Image
                src="/ocube-content-review-2026/assets/images/solutions/screens/agentq-rag.jpg"
                alt="지식 검색(RAG) 화면"
                loading="lazy"
                width="1600"
                height="1005"
              />
              <p className="fitcap">지식 검색 — 프로토타입 예시 화면</p>
            </div>
          </div>
        </div>
      </section>
      <section id="flow" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">How it works</span>
            <h2>
              수집 → 표준화 → 관제·
              <wbr />
              질의
            </h2>
            <p className="sec-sub">
              데이터가 흐르는 네 단계 — 각 단계의 품질이 다음 AI 결과의 신뢰도를 좌우합니다.
            </p>
          </div>
          <div className="tl">
            <div className="tl-card reveal" data-d="1">
              <span className="yr">01 · Ingest</span>
              <h3>수집 (Raw)</h3>
              <p>
                OPC-UA·
                <wbr />
                MQTT·
                <wbr />
                Modbus·
                <wbr />
                REST 어댑터로 OT/IT 이기종 소스를 실시간 스트림·
                <wbr />
                배치로 원본 그대로 적재.
              </p>
            </div>
            <div className="tl-card reveal" data-d="2">
              <span className="yr">02 · Refine</span>
              <h3>
                정합·
                <wbr />
                정제 (Clean)
              </h3>
              <p>
                중복 제거·
                <wbr />
                타입 정합·
                <wbr />
                결측 보정·
                <wbr />
                이상값 필터 — 품질 규칙으로 신뢰 가능한 정제 데이터로.
              </p>
            </div>
            <div className="tl-card reveal" data-d="3">
              <span className="yr">03 · Standardize</span>
              <h3>표준화 (Semantic)</h3>
              <p>
                공통 스키마·
                <wbr />
                온톨로지에 매핑 — 설비마다 다른 데이터를 하나의 의미 모델로 통합.
              </p>
            </div>
            <div className="tl-card cur reveal" data-d="4">
              <span className="yr">04 · Serve</span>
              <h3>활용</h3>
              <p>
                지도·
                <wbr />
                대시보드와 실시간 질의 API로 QFactory·
                <wbr />
                QAgent가 정리된 데이터를 바로 활용합니다.
              </p>
            </div>
          </div>
          <p className="sec-note">
            원본 데이터를 정제하고 공통 형식으로 표준화한 뒤 활용 시스템에 제공합니다. 앞 단계의
            데이터 품질이 이후 분석과 AI 결과의 신뢰도를 좌우합니다.
          </p>
        </div>
      </section>
      <section id="connectors" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Connectors</span>
            <h2>산업 설비와 업무 시스템을 준비된 커넥터로 연결합니다</h2>
            <p className="sec-sub">
              서로 다른 프로토콜과 데이터 형식은 연결 모듈에서 맞추고, 새 설비는 커넥터를 추가해
              확장합니다.
            </p>
          </div>
          <div className="reveal" data-d="1" style={{ marginTop: "10px" }}>
            <span className="pill light">산업 프로토콜</span>
            <div
              className="mod-grid"
              role="list"
              aria-label="산업 프로토콜 커넥터"
              style={{ marginTop: "10px" }}
            >
              <div className="mod" role="listitem">
                OPC-UA
              </div>
              <div className="mod" role="listitem">
                MQTT · Sparkplug B
              </div>
              <div className="mod" role="listitem">
                Modbus RTU·
                <wbr />
                TCP
              </div>
              <div className="mod" role="listitem">
                Siemens S7
              </div>
              <div className="mod" role="listitem">
                EtherNet/IP
              </div>
              <div className="mod" role="listitem">
                PROFINET
              </div>
              <div className="mod" role="listitem">
                BACnet
              </div>
              <div className="mod" role="listitem">
                CAN · CAN-FD
              </div>
            </div>
          </div>
          <div className="reveal" data-d="2" style={{ marginTop: "22px" }}>
            <span className="pill light">기간계 · 시스템</span>
            <div
              className="mod-grid"
              role="list"
              aria-label="기간계 시스템 커넥터"
              style={{ marginTop: "10px" }}
            >
              <div className="mod" role="listitem">
                PLC
              </div>
              <div className="mod" role="listitem">
                SCADA
              </div>
              <div className="mod" role="listitem">
                MES
              </div>
              <div className="mod" role="listitem">
                ERP
              </div>
              <div className="mod" role="listitem">
                Historian
              </div>
              <div className="mod" role="listitem">
                시계열 데이터베이스
              </div>
              <div className="mod" role="listitem">
                문서 · 파일
              </div>
              <div className="mod" role="listitem">
                REST · OpenAPI
              </div>
            </div>
          </div>
          <p className="sec-note">
            실시간 스트림과 배치 데이터를 동일한 어댑터 계층에서 수집하도록 구성합니다. (지원
            프로토콜은 순차 확장)
          </p>
        </div>
      </section>
      <section id="arch" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Architecture</span>
            <h2>QData가 데이터를 정리하면, 분석과 에이전트가 같은 기준을 씁니다</h2>
            <p className="sec-sub">
              QFactory와 QAgent는 QData가 통일한 형식과 의미를 기준으로 데이터를 조회하고
              판단합니다.
            </p>
          </div>
          <div className="stack-diagram reveal" data-d="1">
            <div className="stack-layer">
              <span className="stack-tag">운영 · 행동</span>
              <b>Cubeon</b>
              <small>
                통합 관제·
                <wbr />
                오케스트레이션 · Manufacturing/Safety 도메인팩
              </small>
            </div>
            <div className="stack-arrow" aria-hidden="true">
              ▲
            </div>
            <div className="stack-layer">
              <span className="stack-tag">판단 · 분석</span>
              <div className="stack-prods">
                <span>
                  QFactory<small>AI 스마트 팩토리</small>
                </span>
                <span>
                  QAgent<small>업무 에이전트</small>
                </span>
                <span>
                  QVision<small>영상 인식</small>
                </span>
              </div>
            </div>
            <div className="stack-arrow" aria-hidden="true">
              ▲
            </div>
            <div className="stack-layer l-op">
              <span className="stack-tag">표준화 · QData</span>
              <b>QData</b>
              <small>
                이기종 OT/IT 데이터를 공통 스키마·
                <wbr />
                온톨로지로 — 하나의 언어로
              </small>
            </div>
          </div>
          <p className="sec-note">
            상용 데이터 플랫폼의 온톨로지 상위계층·
            <wbr />
            통합 카탈로그처럼, 표준화층의 품질이 상위 AI 전체의 신뢰도를 좌우합니다.
          </p>
        </div>
      </section>
      <section id="semantic" className="pinsec">
        <div className="wrap">
          <div className="pin-left">
            <span className="pin-num">Semantic Layer</span>
            <h2>설비마다 다른 데이터를 하나의 의미 모델로</h2>
            <p>
              설비·
              <wbr />
              공정·
              <wbr />
              자산을 객체·
              <wbr />
              속성·
              <wbr />
              관계로 정의해, 서로 다른 시스템의 데이터가 같은 의미로 해석되게 합니다. 온톨로지와
              지식그래프 구축 경험을 바탕으로 데이터의 의미와 관계를 일관되게 관리하도록 설계합니다.
            </p>
            <div className="pin-progress" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className="pin-right">
            <article className="pin-item reveal">
              <div className="pi-no">01</div>
              <h3>Object</h3>
              <p>
                설비·
                <wbr />
                라인·
                <wbr />
                배치 등 현실 자산을 데이터 객체로 정의
              </p>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">02</div>
              <h3>Property</h3>
              <p>
                온도·
                <wbr />
                진동·
                <wbr />
                수율 등 속성을 표준 단위·
                <wbr />
                타입으로 통일
              </p>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">03</div>
              <h3>Link</h3>
              <p>설비-공정-제품의 관계를 지식그래프로 연결</p>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">04</div>
              <h3>Schema</h3>
              <p>
                부서·
                <wbr />
                설비별 상이 포맷을 공통 스키마로 매핑
              </p>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">05</div>
              <h3>Catalog</h3>
              <p>
                데이터 자산을 검색·
                <wbr />
                발견 가능하게 목록화
              </p>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">06</div>
              <h3>Lineage</h3>
              <p>원본→표준까지 데이터 계보를 추적</p>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">07</div>
              <h3>Quality</h3>
              <p>
                결측·
                <wbr />
                이상·
                <wbr />
                중복 검증 규칙으로 신뢰도 확보
              </p>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">08</div>
              <h3>Serve API</h3>
              <p>표준 데이터셋을 실시간 질의 API로 제공</p>
            </article>
            <figure className="shot-fig reveal">
              <Image
                className="shot fit"
                style={{ maxHeight: "30vh" }}
                src="/ocube-content-review-2026/assets/images/solutions/screens/dataq-knowledge.jpg"
                alt="지식·문서 데이터 관리 예시 화면 — 폴더 권한·청크 분할·개인정보 마스킹·에이전트 연동"
                loading="lazy"
                width="1600"
                height="1005"
              />
              <figcaption className="shot-cap">
                지식·
                <wbr />
                문서 데이터 관리(권한·
                <wbr />
                청크·
                <wbr />
                개인정보 마스킹) — 프로토타입 예시 화면
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section id="keytech" className="keytech">
        <div className="wrap kt-head reveal">
          <span className="kicker">Key Technologies</span>
          <h2>AI가 바로 쓸 수 있는 데이터를 만드는 기술</h2>
          <p className="kt-lead">
            데이터 플랫폼은 끝이 아니라 시작입니다. 표준화된 데이터는 곧바로 예측 모델과 에이전트가
            학습·
            <wbr />
            추론할 수 있는 기반으로 이어집니다.
          </p>
        </div>
        <div className="kt-scroll">
          <div className="kt-cards">
            <article className="kt-card">
              <div className="kt-ic">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="18" r="5.5" stroke="#0075de" strokeWidth="2.4" />
                  <circle cx="12" cy="46" r="5.5" stroke="#0075de" strokeWidth="2.4" />
                  <rect
                    x="26"
                    y="24"
                    width="16"
                    height="16"
                    rx="3.5"
                    stroke="#0075de"
                    strokeWidth="2.4"
                    fill="rgba(0,117,222,.10)"
                  />
                  <ellipse
                    cx="55"
                    cy="32"
                    rx="6"
                    ry="8.5"
                    stroke="#0075de"
                    strokeWidth="2.4"
                    fill="rgba(0,117,222,.10)"
                  />
                  <path
                    d="M17.5 19.5C22 22 22 28 26 30M17.5 44.5C22 42 22 36 26 34M42 32h7"
                    stroke="#0075de"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>수집부터 활용까지 이어지는 데이터 흐름</h3>
              <p>
                수집·
                <wbr />
                정제·
                <wbr />
                표준화·
                <wbr />
                저장·
                <wbr />
                제공을 하나의 흐름으로 설계해, 단계마다 형식을 다시 맞추는 낭비를 줄입니다.
              </p>
              <ul className="kt-chk">
                <li>
                  설비 제어기·
                  <wbr />
                  계측기부터 운영 시스템까지 표준 커넥터로 연결
                </li>
                <li>통신 단절 구간은 엣지 버퍼링으로 데이터 유실을 줄입니다</li>
              </ul>
            </article>
            <article className="kt-card">
              <div className="kt-ic">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="7"
                    y="12"
                    width="24"
                    height="30"
                    rx="3.5"
                    stroke="#0075de"
                    strokeWidth="2.4"
                    fill="rgba(0,117,222,.10)"
                  />
                  <path
                    d="M13 21h12M13 28h12M13 35h7"
                    stroke="#0075de"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="37"
                    y="12"
                    width="20"
                    height="15"
                    rx="3"
                    stroke="#0075de"
                    strokeWidth="2.4"
                  />
                  <path
                    d="M40 24l5-5 4 4 3-3 4 4"
                    stroke="#0075de"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40 40v6M45 36v14M50 39v8M55 42v3"
                    stroke="#0075de"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>
                문서·
                <wbr />
                이미지·
                <wbr />
                음성까지 읽어내는 비정형 처리
              </h3>
              <p>
                표와 도면이 섞인 현장 문서를 구조 단위로 해석하고, 이미지와 음성을 텍스트로 전환해
                정형 데이터와 같은 층에서 다룹니다.
              </p>
              <ul className="kt-chk">
                <li>
                  문서 구조 분석으로 텍스트·
                  <wbr />
                  표·
                  <wbr />
                  이미지를 구분해 의미 단위로 정제
                </li>
                <li>
                  OCR·
                  <wbr />
                  STT로 비정형 자산을 검색·
                  <wbr />
                  학습 가능한 데이터로 전환
                </li>
              </ul>
            </article>
            <article className="kt-card">
              <div className="kt-ic">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle
                    cx="32"
                    cy="14"
                    r="6"
                    stroke="#0075de"
                    strokeWidth="2.4"
                    fill="rgba(0,117,222,.10)"
                  />
                  <circle cx="13" cy="46" r="6" stroke="#0075de" strokeWidth="2.4" />
                  <circle
                    cx="32"
                    cy="38"
                    r="6"
                    stroke="#0075de"
                    strokeWidth="2.4"
                    fill="rgba(0,117,222,.10)"
                  />
                  <circle cx="51" cy="46" r="6" stroke="#0075de" strokeWidth="2.4" />
                  <path
                    d="M32 20v12M27.5 42.5 18 43.5M36.5 42.5 46 43.5"
                    stroke="#0075de"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>관계와 맥락을 담는 의미 기반 지식화</h3>
              <p>
                용어와 단위를 표준화하는 데서 그치지 않고, 설비·
                <wbr />
                공정·
                <wbr />
                불량·
                <wbr />
                조치 사이의 관계를 정의해 검색을 넘어 추론이 가능한 형태로 만듭니다.
              </p>
              <ul className="kt-chk">
                <li>
                  공통 스키마·
                  <wbr />
                  온톨로지로 이기종 태그 체계를 하나의 의미로 정합
                </li>
                <li>지식그래프와 벡터 색인을 함께 구성해 근거 검색(RAG)에 활용</li>
              </ul>
            </article>
            <article className="kt-card">
              <div className="kt-ic">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M32 9a23 23 0 1 1-16.3 6.8"
                    stroke="#0075de"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 10v8h8"
                    stroke="#0075de"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="24"
                    y="26"
                    width="16"
                    height="13"
                    rx="3"
                    stroke="#0075de"
                    strokeWidth="2.4"
                    fill="rgba(0,117,222,.10)"
                  />
                  <path
                    d="M28 33.5l3 3 5-6"
                    stroke="#0075de"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>데이터와 모델이 함께 도는 운영 체계</h3>
              <p>
                데이터 품질과 모델 성능을 함께 살피고, 변화가 감지되면 모델을 다시 학습·
                <wbr />
                검증해 배포하는 운영 흐름으로 연결합니다.
              </p>
              <ul className="kt-chk">
                <li>
                  품질 규칙·
                  <wbr />
                  계보(lineage) 추적으로 데이터 신뢰도를 지속 관리
                </li>
                <li>
                  MLOps(모델 학습·배포·성능을 관리하는 운영 체계) 연계로 데이터 변화를 감지하고
                  재학습·
                  <wbr />
                  이전 모델 복구까지 관리
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="spec" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Spec</span>
            <h2>무엇을 수집하고 어떻게 제공하는가</h2>
          </div>
          <table className="cmp reveal" data-d="2">
            <caption className="sr-only">무엇을 수집하고 어떻게 제공하는가 비교표</caption>
            <thead>
              <tr>
                <th scope="col">항목</th>
                <th scope="col" className="ok">
                  QData 산업 데이터 플랫폼
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">입력 소스</th>
                <td className="ok">
                  PLC · 센서 · SCADA · MES · ERP · Historian · 시계열 데이터베이스 · 문서
                </td>
              </tr>
              <tr>
                <th scope="row">수집 프로토콜</th>
                <td>OPC-UA · MQTT · Modbus · REST/API (실시간 스트림 + 배치)</td>
              </tr>
              <tr>
                <th scope="row">표준화 방식</th>
                <td>공통 스키마 매핑 · 온톨로지 기반 의미 표준화 · 품질검증 · 결측 보정</td>
              </tr>
              <tr>
                <th scope="row">데이터 관리</th>
                <td>데이터 카탈로그 · 계보 추적 · 품질 규칙 · 접근제어 (프로젝트별 구성)</td>
              </tr>
              <tr>
                <th scope="row">제공 방식</th>
                <td className="ok">
                  지도(GIS)·
                  <wbr />
                  대시보드 관제 + 실시간 질의 API
                </td>
              </tr>
              <tr>
                <th scope="row">배포</th>
                <td>클라우드 · 온프레미스 · 폐쇄망(에어갭)</td>
              </tr>
            </tbody>
          </table>
          <figure className="shot-fig reveal" data-d="3" style={{ marginTop: "22px" }}>
            <Image
              className="shot fit"
              style={{ maxHeight: "26vh" }}
              src="/ocube-content-review-2026/assets/images/solutions/screens/dataq-vectordb.jpg"
              alt="벡터 데이터베이스·컬렉션 관리 예시 화면 — 총 벡터 수·활성 컬렉션·임베딩 차원·평균 쿼리 지연"
              loading="lazy"
              width="1500"
              height="942"
            />
            <figcaption className="shot-cap">
              벡터 데이터베이스·
              <wbr />
              컬렉션 관리(임베딩 차원·
              <wbr />
              쿼리 지연) — 프로토타입 예시 화면
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="standards" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Standards & Governance</span>
            <h2>업계 표준 위에서 데이터를 다룹니다</h2>
            <p className="sec-sub">
              산업 데이터 상호운용 표준과 데이터 관리 관행을 참조해 설계합니다.
            </p>
          </div>
          <div
            className="reveal"
            data-d="1"
            style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "9px" }}
          >
            <span className="pill light">OPC-UA</span>
            <span className="pill light">ISA-95</span>
            <span className="pill light">MQTT · Sparkplug B</span>
            <span className="pill light">Modbus</span>
            <span className="pill light">데이터 카탈로그</span>
            <span className="pill light">데이터 리니지</span>
          </div>
          <div className="feat-list reveal" data-d="2" style={{ marginTop: "22px" }}>
            <div className="feat">
              <b>상호운용 표준</b>
              <span>
                OPC-UA·
                <wbr />
                ISA-95를 참조해 이기종 설비 데이터를 표준 계층으로 통합하도록 구성합니다.
              </span>
            </div>
            <div className="feat">
              <b>데이터 거버넌스</b>
              <span>
                카탈로그·
                <wbr />
                리니지·
                <wbr />
                품질 규칙으로 &apos;어디서 온 데이터를, 얼마나 믿을 수 있는지&apos;를 추적합니다.
              </span>
            </div>
            <div className="feat">
              <b>세분화 접근제어</b>
              <span>
                데이터·
                <wbr />
                질의 단위 권한과 감사 로그를 두어 규제 산업의 데이터 주권을 지원합니다.
              </span>
            </div>
            <div className="feat">
              <b>산업 상호운용</b>
              <span>
                OPC-UA·
                <wbr />
                ISA-95 등 국제 표준 모델에 맞춰 설비 데이터의 의미를 정합합니다.
              </span>
            </div>
            <div className="feat">
              <b>
                품질·
                <wbr />
                검증 규칙
              </b>
              <span>
                결측·
                <wbr />
                이상·
                <wbr />
                중복 검증을 공통 규칙으로 자동화해 이후 분석과 AI 결과의 신뢰도를 높입니다.
              </span>
            </div>
            <div className="feat">
              <b>개방형 카탈로그</b>
              <span>
                데이터 자산을 검색·
                <wbr />
                발견 가능하게 목록화해 조직 전반의 재사용을 돕습니다.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="deploy" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Deployment</span>
            <h2>같은 플랫폼, 세 가지 배포</h2>
            <p className="sec-sub">
              데이터 반출 정책과 보안 등급에 따라 배포 형태를 선택할 수 있도록 설계합니다.
            </p>
          </div>
          <div className="dep-grid reveal" data-d="1">
            <div className="dep-card">
              <div className="ic" aria-hidden="true">
                ☁️
              </div>
              <h3>클라우드</h3>
              <p>
                빠른 구축과 확장. 표준화 파이프라인을 관리형으로 운영하며 상용 데이터 서비스와 연계.
              </p>
            </div>
            <div className="dep-card">
              <div className="ic" aria-hidden="true">
                🏢
              </div>
              <h3>온프레미스</h3>
              <p>
                사내 서버에서 민감 공정 데이터를 외부로 내보내지 않고 표준화해 내부 시스템에
                제공합니다.
              </p>
            </div>
            <div className="dep-card">
              <div className="ic" aria-hidden="true">
                🔒
              </div>
              <h3>폐쇄망 (에어갭)</h3>
              <p>
                망분리 환경에서 데이터를 외부로 반출하지 않고 현장 내부에서 수집·
                <wbr />
                표준화합니다.
              </p>
            </div>
          </div>
          <p className="sec-note">
            데이터 반출 정책과 보안 등급에 맞는 클라우드·
            <wbr />
            온프레미스·
            <wbr />
            폐쇄망 배포 구성을 지원합니다.
          </p>
          <div className="feat-list reveal" data-d="2" style={{ marginTop: "20px" }}>
            <div className="feat">
              <b>데이터 반출 정책</b>
              <span>공정 데이터의 외부 반출 가능 여부에 따라 클라우드↔온프레미스를 선택</span>
            </div>
            <div className="feat">
              <b>보안 등급 · 망분리</b>
              <span>
                규제·
                <wbr />
                국방·
                <wbr />
                에너지 등 폐쇄망 요건은 에어갭 엣지 수집으로 대응
              </span>
            </div>
            <div className="feat">
              <b>운영 리소스</b>
              <span>관리형 클라우드로 시작해 필요 시 온프레미스로 단계적 이전</span>
            </div>
          </div>
        </div>
      </section>
      <section id="proof" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">References</span>
            <h2>현장 데이터를 자산으로 바꾼 사례</h2>
          </div>
          <p className="sec-sub reveal">
            축적된 산업 현장 경험을 바탕으로, 데이터 통합·
            <wbr />
            표준화 역량을 다양한 도메인에 적용해 왔습니다.
          </p>
          <div className="hero-stats reveal" data-d="1">
            <div className="stat">
              <b>OPC-UA</b>
              <span>MQTT · Modbus 산업 표준 수집</span>
            </div>
            <div className="stat">
              <b>정형+비정형</b>
              <span>시계열 · 문서 · 이미지 통합</span>
            </div>
            <div className="stat">
              <b>온톨로지</b>
              <span>지식그래프 기반 의미 연결</span>
            </div>
            <div className="stat">
              <b>
                <span data-count="3">0</span>
                <i className="u">형태</i>
              </b>
              <span>
                클라우드·
                <wbr />
                온프레·
                <wbr />
                폐쇄망 배포
              </span>
            </div>
          </div>
          <div className="case-grid">
            <article className="case-card reveal" data-d="1">
              <span className="dom">제지 · 한솔제지</span>
              <h3>공정 AI-OT 데이터 허브</h3>
              <p className="csi">
                분산된 공정 데이터를 통합해 예지보전·
                <wbr />
                에너지 최적화의 기반 구축
              </p>
            </article>
            <article className="case-card reveal" data-d="2">
              <span className="dom">에너지 · SK에너지</span>
              <h3>충전 인프라 데이터 관제</h3>
              <p className="csi">
                충전 인프라의 상태·
                <wbr />
                이용 데이터를 표준화·
                <wbr />
                관제
              </p>
            </article>
            <article className="case-card reveal" data-d="3">
              <span className="dom">공공안전 · 세이프뱃지</span>
              <h3>중앙 통합관제</h3>
              <p className="csi">
                영상·
                <wbr />
                뱃지·
                <wbr />
                환경 센서 융합 데이터를 중앙에서 통합 관제
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

      <section id="fit" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Ideal Use Cases</span>
            <h2>이런 조직에 적합합니다</h2>
            <p className="sec-sub">
              데이터 형식과 보관 위치가 제각각이어서 분석이나 AI 도입을 시작하기 어려운 조직에
              적합합니다.
            </p>
          </div>
          <div className="dep-grid reveal" data-d="1" style={{ marginTop: "24px" }}>
            <div className="dep-card">
              <h3>데이터 정비에서 막혀 있는 제조 현장</h3>
              <p>
                설비·
                <wbr />
                공정 데이터는 쌓이고 있으나 태그 체계와 단위가 라인마다 달라, 분석 이전의 정제·
                <wbr />
                통합 단계에서 프로젝트가 멈춰 있는 조직
              </p>
            </div>
            <div className="dep-card">
              <h3>OT와 IT가 분리되어 있는 운영 조직</h3>
              <p>
                제어망의 설비 데이터와 업무망의 MES·
                <wbr />
                ERP 데이터가 서로 연결되지 않아, 품질 이슈의 원인을 설비까지 되짚기 어려운 환경
              </p>
            </div>
            <div className="dep-card">
              <h3>비정형 기술 자산이 잠들어 있는 기업</h3>
              <p>
                작업표준서·
                <wbr />
                점검일지·
                <wbr />
                설비 매뉴얼·
                <wbr />
                불량 보고서가 문서로만 존재해, 근거 검색(RAG) 지식베이스로 전환하지 못하고 있는 조직
              </p>
            </div>
            <div className="dep-card">
              <h3>AI 도입을 반복 검증해야 하는 팀</h3>
              <p>
                PoC(도입 전 효과를 확인하는 사전 검증) 때마다 데이터 수집·
                <wbr />
                정제를 처음부터 다시 하느라, 정작 모델 고도화에 시간을 쓰지 못하는 조직
              </p>
            </div>
            <div className="dep-card">
              <h3>
                폐쇄망·
                <wbr />
                망분리 요건이 있는 기관
              </h3>
              <p>
                외부 반출이 불가능한 데이터를 내부에 둔 채로 표준화와 AI 활용 기반을 갖춰야 하는
                공공·
                <wbr />
                에너지 성격의 환경
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
