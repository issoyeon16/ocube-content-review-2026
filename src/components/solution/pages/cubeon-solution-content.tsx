import Image from "next/image";
export function CubeonSolutionContent() {
  return (
    <>
      <section className="sol-intro">
        <span className="eb rv">SOLUTION / CUBEON</span>
        <h2 className="rv d1">
          <span>데이터에서 실행까지</span>
          <span>연결하는 산업 AI 플랫폼</span>
        </h2>
        <div className="sol-lead rv d2">
          <p>현장 데이터와 AI 서비스를 한곳에서 연결합니다.</p>
          <p>
            모델과 에이전트를 배포·감시하고, 판단 결과를 승인과 조치로 이어주는 산업 AI 운영
            플랫폼입니다.
          </p>
        </div>
        <figure className="sol-stage rv d3">
          <Image
            src="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-infra.jpg"
            alt="Cubeon 화면 — 프로토타입 예시"
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
          <a href="#arch">8모듈</a>
          <a href="#connect">
            연결·
            <wbr />
            표준
          </a>
          <a href="#pipeline">파이프라인</a>
          <a href="#stack">생태계</a>
          <a href="#modelops">ModelOps</a>
          <a href="#autonomy">자율화</a>
          <a href="#packs">
            도메인·
            <wbr />
            배포
          </a>
        </div>
      </nav>

      <section id="overview" className="sec-anchor platform dark" style={{ paddingTop: "64px" }}>
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Overview</span>
            <h2 style={{ color: "#fff" }}>
              이상 징후를 발견해도, 조치로 이어지지 않으면 업무는 바뀌지 않습니다
            </h2>
            <p className="sec-sub">
              Cubeon은 AI의 판단을{" "}
              <b>
                담당자 확인·
                <wbr />
                승인·
                <wbr />
                현장 조치
              </b>
              로 연결하고 결과를 다시 확인합니다. QData·
              <wbr />
              QFactory·
              <wbr />
              QAgent는 이 운영 흐름 안에서 함께 사용됩니다.
            </p>
          </div>
          <div className="cubeon-hero reveal" data-d="1">
            <div>
              <h3>
                <span>발견 → 판단·승인 → 현장 조치</span>
              </h3>
              <p>
                먼저 알림으로 시작하고(L1), 담당자 승인 후 실행하는 단계(L2)를 거쳐, 위험이 낮고
                충분히 검증된 업무만 제한적으로 자동 실행(L3)합니다.
              </p>
              <div className="ladder">
                <div className="rung l1">
                  <b>L1 · Sense</b>
                  <span>
                    탐지·
                    <wbr />
                    알람, 근거 제시
                  </span>
                </div>
                <div className="rung l2">
                  <b>L2 · 판단</b>
                  <span>
                    원인 분석·
                    <wbr />
                    권고, 사람 승인
                  </span>
                </div>
                <div className="rung l3">
                  <b>L3 · 제한 자동 실행</b>
                  <span>
                    워크플로·
                    <wbr />
                    설비 자율 제어
                  </span>
                </div>
              </div>
            </div>
            <figure>
              <Image
                className="shot"
                src="/ocube-content-review-2026/assets/images/solutions/cubeon-console.png"
                alt="Cubeon 운영 콘솔 — 8모듈·자율화 단계"
                loading="lazy"
                width="1100"
                height="655"
              />
              <figcaption className="shot-cap">Cubeon 운영 콘솔 (예시 화면)</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="features" className="sec-anchor">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Features</span>
            <h2>플랫폼을 이루는 핵심 기능</h2>
            <p className="lead">
              데이터 연결, 모델 운영, 담당자 승인, 현장 조치를 하나의 운영 흐름으로 관리합니다.
            </p>
          </div>
          <div className="duo">
            <div className="duo-txt rv">
              <span className="pill">Closed-Loop</span>
              <h3>승인과 현장 조치를 잇는 워크플로</h3>
              <p>
                이상 징후가 발견되면 조치안을 제시하고, 담당자 승인 후 실행한 뒤 결과를 확인합니다.
                누가 무엇을 판단하고 실행했는지도 기록으로 남깁니다.
              </p>
              <a className="duo-cta" href="#arch">
                8모듈 아키텍처 자세히 <i aria-hidden="true">→</i>
              </a>
            </div>
            <div className="duo-media stage rv d1">
              <Image
                src="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-builder.jpg"
                alt="에이전트 워크플로 빌더 화면"
                loading="lazy"
                width="1600"
                height="1005"
              />
              <p className="fitcap">노코드 워크플로 빌더 — 프로토타입 예시 화면</p>
            </div>
          </div>
          <div className="duo rev">
            <div className="duo-txt rv">
              <span className="pill">ModelOps</span>
              <h3>모델 레지스트리 · 지속 운영</h3>
              <p>
                모델의 버전과 배포 상태를 한곳에서 관리하고, 성능 변화를 감시해 재학습 시점을
                판단합니다. 운영 중 품질 저하를 조기에 확인하고 대응할 수 있는 구조입니다.
              </p>
              <a className="duo-cta" href="#modelops">
                ModelOps 자세히 <i aria-hidden="true">→</i>
              </a>
            </div>
            <div className="duo-media stage rv d1">
              <Image
                src="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-modelreg.jpg"
                alt="모델 레지스트리 화면"
                loading="lazy"
                width="1600"
                height="1005"
              />
              <p className="fitcap">모델 레지스트리 — 프로토타입 예시 화면</p>
            </div>
          </div>
          <div className="duo">
            <div className="duo-txt rv">
              <span className="pill">Knowledge</span>
              <h3>산업 지식그래프</h3>
              <p>
                설비·센서·작업지시·이벤트를 하나의 그래프로 연결해 AI 판단에 현장의 맥락을
                부여합니다. 같은 알람이라도 어떤 설비·어떤 공정인지에 따라 다른 조치가 나옵니다.
              </p>
              <a className="duo-cta" href="#connect">
                데이터 연결 자세히 <i aria-hidden="true">→</i>
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
        </div>
      </section>
      <section id="arch" className="pinsec">
        <div className="wrap">
          <div className="pin-left">
            <span className="pin-num">Architecture</span>
            <h2>공통 커널 8모듈</h2>
            <p>
              데이터 연결·
              <wbr />
              모델 운영·
              <wbr />
              에이전트 협업 기능을 재사용 가능한 8개 모듈로 제공합니다. 각 모듈은 필요한 만큼
              독립적으로 확장할 수 있고, 상용 LLM API와 사내 설치형 sLLM 중 보안·
              <wbr />
              성능 요건에 맞는 모델을 선택합니다.
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
              <div className="pi-no">Connect</div>
              <h3>이기종 데이터 연결</h3>
              <p>
                PLC·
                <wbr />
                센서·
                <wbr />
                MES·
                <wbr />
                ERP 등 이기종 설비·
                <wbr />
                시스템 데이터를 산업 표준 프로토콜로 수집·
                <wbr />
                연결합니다.
              </p>
              <div className="pi-tags">
                <span className="pill light">OPC-UA</span>
                <span className="pill light">MQTT</span>
                <span className="pill light">Modbus</span>
              </div>
              <button
                type="button"
                className="pi-shot"
                data-shot="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-connect.jpg"
                data-shot-alt="Cubeon Connect — 이기종 데이터 연결 콘솔 개념 화면(소스·프로토콜 어댑터·태그 표준 매핑)"
                data-shot-cap="이기종 데이터 연결 콘솔 — 개념 예시 화면 (실제 UI 아님)"
              >
                화면 보기
              </button>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">Fabric</div>
              <h3>데이터 파이프라인</h3>
              <p>
                실시간 스트림·
                <wbr />
                배치 데이터를 저장·
                <wbr />
                처리하는 파이프라인 계층입니다.
              </p>
              <div className="pi-tags">
                <span className="pill light">Stream</span>
                <span className="pill light">Batch</span>
              </div>
              <button
                type="button"
                className="pi-shot"
                data-shot="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-fabric.jpg"
                data-shot-alt="Cubeon Fabric — 데이터 처리 흐름 개념 화면(수집→임시 저장→정제→저장→활용)"
                data-shot-cap="데이터 처리 흐름 — 개념 예시 화면 (실제 UI 아님)"
              >
                화면 보기
              </button>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">Semantic</div>
              <h3>의미 표준화</h3>
              <p>
                공통 스키마·
                <wbr />
                온톨로지로 설비·
                <wbr />
                공정 데이터의 의미를 표준화합니다.
              </p>
              <div className="pi-tags">
                <span className="pill light">온톨로지</span>
              </div>
              <button
                type="button"
                className="pi-shot"
                data-shot="/ocube-content-review-2026/assets/images/solutions/screens/dataq-knowledge.jpg"
                data-shot-alt="의미 표준화·지식 관리 프로토타입 화면"
                data-shot-cap="의미 표준화·지식 관리 — 프로토타입 예시 화면"
              >
                화면 보기
              </button>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">ModelOps</div>
              <h3>모델 거버넌스</h3>
              <p>
                모델의 학습·
                <wbr />
                배포 이력을 관리하고, 운영 중 성능을 감시해 필요할 때 재학습합니다.
              </p>
              <div className="pi-tags">
                <span className="pill light">자동 통합·배포·지속적 재학습</span>
              </div>
              <button
                type="button"
                className="pi-shot"
                data-shot="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-modelreg.jpg"
                data-shot-alt="모델 레지스트리·거버넌스 프로토타입 화면"
                data-shot-cap="모델 레지스트리·거버넌스 — 프로토타입 예시 화면"
              >
                화면 보기
              </button>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">Agents</div>
              <h3>AI 에이전트</h3>
              <p>
                현장·
                <wbr />
                업무 AI 에이전트를 실행합니다.
              </p>
              <div className="pi-tags">
                <span className="pill light">근거 검색(RAG)</span>
                <span className="pill light">사내 소형 언어모델(sLLM)</span>
              </div>
              <button
                type="button"
                className="pi-shot"
                data-shot="/ocube-content-review-2026/assets/images/solutions/screens/agentq-hub.jpg"
                data-shot-alt="AI 에이전트 허브 프로토타입 화면"
                data-shot-cap="AI 에이전트 허브 — 프로토타입 예시 화면"
              >
                화면 보기
              </button>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">Orchestrator</div>
              <h3>서비스 조정</h3>
              <p>여러 AI 에이전트가 정해진 순서와 역할에 따라 협업하도록 조정합니다.</p>
              <div className="pi-tags">
                <span className="pill light">MCP</span>
              </div>
              <button
                type="button"
                className="pi-shot"
                data-shot="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-builder.jpg"
                data-shot-alt="노코드 에이전트 빌더·서비스 조정 프로토타입 화면"
                data-shot-cap="노코드 에이전트 빌더·서비스 조정 — 프로토타입 예시 화면"
              >
                화면 보기
              </button>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">Console</div>
              <h3>통합 관제</h3>
              <p>
                탐지·
                <wbr />
                판단·
                <wbr />
                현장 조치를 하나의 화면에서 관리합니다.
              </p>
              <button
                type="button"
                className="pi-shot"
                data-shot="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-infra.jpg"
                data-shot-alt="통합 관제·인프라 콘솔 프로토타입 화면"
                data-shot-cap="통합 관제·인프라 콘솔 — 프로토타입 예시 화면"
              >
                화면 보기
              </button>
            </article>
            <article className="pin-item reveal">
              <div className="pi-no">Copilot</div>
              <h3>현장 코파일럿</h3>
              <p>
                자연어 질의·
                <wbr />
                현장 보조 — 상용 LLM API부터 온프레미스 sLLM까지 선택합니다.
              </p>
              <button
                type="button"
                className="pi-shot"
                data-shot="/ocube-content-review-2026/assets/images/solutions/screens/agentq-chat.jpg"
                data-shot-alt="현장 코파일럿·자연어 질의 프로토타입 화면"
                data-shot-cap="현장 코파일럿·자연어 질의 — 프로토타입 예시 화면"
              >
                화면 보기
              </button>
            </article>
          </div>
        </div>
      </section>
      <section id="connect" className="sec-anchor dark">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Connectivity</span>
            <h2 style={{ color: "#fff" }}>현장 데이터를 표준으로 연결합니다</h2>
            <p className="sec-sub">
              Connect 모듈은 서로 다른 설비·
              <wbr />
              업무 시스템을 산업 표준 프로토콜로 연결해, 데이터를 하나의 파이프라인으로 수집합니다.
            </p>
          </div>
          <div className="mod-grid reveal" data-d="1" role="list" aria-label="지원 산업 프로토콜">
            <div className="mod" role="listitem">
              OPC-UA
            </div>
            <div className="mod" role="listitem">
              MQTT · Sparkplug B
            </div>
            <div className="mod" role="listitem">
              Modbus RTU/TCP
            </div>
            <div className="mod" role="listitem">
              EtherNet/IP
            </div>
            <div className="mod" role="listitem">
              PROFINET
            </div>
            <div className="mod" role="listitem">
              CAN · CAN-FD
            </div>
            <div className="mod" role="listitem">
              BACnet
            </div>
            <div className="mod" role="listitem">
              REST · 실시간 API
            </div>
          </div>
          <p className="sec-note reveal" data-d="2">
            <b>시스템 연동</b> 설비제어(PLC) · 설비감시(SCADA) · 생산관리(MES) · 전사자원관리(ERP) ·
            설비 이력 저장소 · 시계열 데이터베이스를 어댑터 계층으로 통합 &nbsp;·
            <wbr />
            &nbsp;
            <b>표준 참조</b> OPC-UA · ISA-95 산업 자동화 계층 모델 · 마이크로서비스 구조(MSA) 기반의
            독립적인 연결 기능 확장.
          </p>
          <div className="feat-list reveal" data-d="3" style={{ marginTop: "20px" }}>
            <div className="feat">
              <b>엣지 수집 · 전송 복구</b>
              <span>
                네트워크가 끊기면 현장 데이터를 임시 저장하고, 연결 복구 후 다시 전송해 데이터 유실
                위험을 줄입니다.
              </span>
            </div>
            <div className="feat">
              <b>보안 연결</b>
              <span>
                TLS 암호화 · 디바이스 인증 · 역할 기반 접근제어(RBAC)로 OT/IT 경계를 보호합니다.
              </span>
            </div>
            <div className="feat">
              <b>커넥터 플러그인 확장</b>
              <span>
                신규 설비·
                <wbr />
                프로토콜을 어댑터 플러그인으로 추가 — 커널 변경 없이 연결 범위를 넓힙니다.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="pipeline" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Data Pipeline</span>
            <h2>데이터 수집에서 현장 조치까지, 하나의 흐름</h2>
            <p className="sec-sub">
              설비 신호를 정리하고 AI가 판단한 뒤, 담당자 승인과 현장 조치로 이어지는 6단계
              흐름입니다.
            </p>
          </div>
          <div className="tl reveal" data-d="1">
            <div className="tl-card">
              <span className="yr">01</span>
              <h3>데이터 수집</h3>
              <p>
                OPC-UA·
                <wbr />
                MQTT·
                <wbr />
                Modbus로 서로 다른 설비·
                <wbr />
                시스템의 데이터 수집
              </p>
            </div>
            <div className="tl-card">
              <span className="yr">02</span>
              <h3>표준화</h3>
              <p>
                공통 스키마 정합·
                <wbr />
                품질 검증·
                <wbr />
                결측 보정 (QData)
              </p>
            </div>
            <div className="tl-card">
              <span className="yr">03</span>
              <h3>
                의미·
                <wbr />
                관계 정의
              </h3>
              <p>
                설비·
                <wbr />
                공정을 객체·
                <wbr />
                속성·
                <wbr />
                관계로 정리
              </p>
            </div>
            <div className="tl-card">
              <span className="yr">04</span>
              <h3>모델 운영</h3>
              <p>
                모델 학습·
                <wbr />
                배포·
                <wbr />
                성능 변화 감시·
                <wbr />
                재학습·운영(ModelOps)
              </p>
            </div>
            <div className="tl-card">
              <span className="yr">05</span>
              <h3>
                판단·
                <wbr />
                권고 통합
              </h3>
              <p>여러 AI 에이전트의 판단과 권고를 하나의 흐름으로 조정</p>
            </div>
            <div className="tl-card cur">
              <span className="yr">06</span>
              <h3>현장 조치</h3>
              <p>담당자 승인 또는 검증된 자동 실행으로 현장 시스템에 조치 반영</p>
            </div>
          </div>
          <div className="feat-list reveal" data-d="2" style={{ marginTop: "22px" }}>
            <div className="feat">
              <b>운영 상태 추적</b>
              <span>
                수집부터 제어까지 각 단계의 지연·
                <wbr />
                오류율을 측정해 병목을 추적하도록 설계합니다(Observability).
              </span>
            </div>
            <div className="feat">
              <b>단계적 확장</b>
              <span>
                라인 1개 검증에서 전사 확산까지, 검증된 데이터 처리 구조를 최대한 재사용하며 범위를
                넓힙니다.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="stack" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Ecosystem</span>
            <h2>하나의 산업 AI 스택</h2>
            <p className="sec-sub">
              각 제품이 따로 동작하지 않고, Cubeon 위에서
              <b>
                데이터 정리 → 판단·
                <wbr />
                승인 → 현장 조치
              </b>
              로 이어집니다.
            </p>
          </div>
          <div className="hero-stats reveal" data-d="2" style={{ marginTop: "28px" }}>
            <div className="stat">
              <b>
                <span data-count="8">0</span>
                <i className="u">모듈</i>
              </b>
              <span>공통 커널 · 재사용 코어</span>
            </div>
            <div className="stat">
              <b>
                <span data-count="4">0</span>
                <i className="u">제품</i>
              </b>
              <span>QData · QFactory · QAgent · QVision</span>
            </div>
            <div className="stat">
              <b>
                <span data-count="3">0</span>
                <i className="u">도메인팩</i>
              </b>
              <span>Manufacturing · Safety · Infra</span>
            </div>
            <div className="stat">
              <b>
                <span data-count="3">0</span>
                <i className="u">배포</i>
              </b>
              <span>클라우드 · 온프레미스 · 폐쇄망</span>
            </div>
          </div>
          <div className="stack-diagram reveal" data-d="1">
            <div className="stack-layer l-op">
              <span className="stack-tag">운영 · 행동</span>
              <b>Cubeon</b>
              <small>
                통합 운영 플랫폼 · Manufacturing/Safety 도메인팩 · 배포 3옵션(클라우드·
                <wbr />
                온프레미스·
                <wbr />
                폐쇄망)
              </small>
            </div>
            <div className="stack-arrow" aria-hidden="true">
              ▲
            </div>
            <div className="stack-layer l-judge">
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
            <div className="stack-layer l-data">
              <span className="stack-tag">표준화</span>
              <b>QData</b>
              <small>
                이기종 설비·
                <wbr />
                시스템 데이터를 하나의 언어로
              </small>
            </div>
          </div>
        </div>
      </section>
      <section id="modelops" className="sec-anchor dark">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">ModelOps · Governance</span>
            <h2 style={{ color: "#fff" }}>모델을 한 번 배포하고 끝내지 않습니다</h2>
            <p className="sec-sub">
              학습·
              <wbr />
              배포·
              <wbr />
              성능 감시·
              <wbr />
              재학습을 반복 운영하고, 모델 버전과 변경 이력을 남겨 문제 발생 시 원인을 확인할 수
              있게 합니다.
            </p>
          </div>
          <div className="feat-list reveal" data-d="1">
            <div className="feat">
              <b>자동 통합·배포·지속적 재학습</b>
              <span>학습 → 배포 → 모니터링 → 지속적 재학습을 자동화된 운영 과정으로 관리</span>
            </div>
            <div className="feat">
              <b>데이터 변화 탐지</b>
              <span>
                PSI·
                <wbr />
                KL divergence 등 예측 분포 변화를 감지해 재학습 시점을 판단
              </span>
            </div>
            <div className="feat">
              <b>모델 레지스트리 · 버전관리</b>
              <span>
                모델 버전·
                <wbr />
                승인 워크플로·
                <wbr />
                이전 상태 복구을 이력으로 관리
              </span>
            </div>
            <div className="feat">
              <b>감사추적(Audit Trail)</b>
              <span>
                추론·
                <wbr />
                액션 전 구간 로그로 규제·
                <wbr />
                품질 대응
              </span>
            </div>
          </div>
          <p className="sec-note reveal" data-d="2">
            <b>ModelOps</b>(배포된 AI 모델의 버전·성능·승인 이력을 관리하는 운영 체계) 모듈을
            기반으로 하며, <b>MLOps</b>(모델 개발·학습·배포·재학습 전 과정을 관리하는 운영 체계)로
            확장할 수 있게 구성합니다.
          </p>
          <figure className="shot-fig reveal" data-d="3">
            <Image
              className="shot fit"
              style={{ maxHeight: "18vh" }}
              src="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-modelreg.jpg"
              alt="모델 레지스트리 예시 화면 — 배포 모델의 파라미터·컨텍스트·양자화·노드·상태 관리"
              loading="lazy"
              width="1600"
              height="1005"
            />
            <figcaption className="shot-cap">모델 레지스트리 — 프로토타입 예시 화면</figcaption>
          </figure>
        </div>
      </section>
      <section id="autonomy" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Autonomy · 사람 승인</span>
            <h2>자율화 수준을 위험도에 맞춰 설계합니다</h2>
            <p className="sec-sub">
              업무의 위험도와 되돌릴 수 있는지를 기준으로, 알림만 할지 담당자 승인을 받을지 자동
              실행할지를 정합니다.
            </p>
          </div>
          <table className="cmp reveal" data-d="1">
            <caption className="sr-only">자율화 수준을 위험도에 맞춰 설계합니다 비교표</caption>
            <thead>
              <tr>
                <th scope="col">자율화 단계</th>
                <th scope="col" className="ok">
                  사람 개입 시점
                </th>
                <th scope="col">적용 시나리오</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  실행 전 승인
                  <br />
                  <small>(Human-in-the-Loop)</small>
                </th>
                <td className="ok">모든 실행 전 사람 승인</td>
                <td>
                  고위험·
                  <wbr />
                  되돌리기 어려운 제어(설비 정지·
                  <wbr />
                  공정 변경)
                </td>
              </tr>
              <tr>
                <th scope="row">
                  감시 중 개입
                  <br />
                  <small>(Human-on-the-Loop)</small>
                </th>
                <td className="ok">사람이 감시, 이상 시 개입</td>
                <td>
                  중위험·
                  <wbr />
                  모니터링 기반 권고
                </td>
              </tr>
              <tr>
                <th scope="row">
                  정책 내 자동 실행
                  <br />
                  <small>(Human-out-of-the-Loop)</small>
                </th>
                <td className="ok">정해진 정책 안에서 자동 실행</td>
                <td>
                  저위험·
                  <wbr />
                  되돌릴 수 있는 반복 업무
                </td>
              </tr>
            </tbody>
          </table>
          <p className="sec-note reveal" data-d="2">
            승인 기준을 정책으로 명확히 정하고, 사용자 권한과 위험도에 따라 승인자를 자동 배정해
            자동 실행의 범위를 통제합니다.
          </p>
          <div className="feat-list reveal" data-d="3" style={{ marginTop: "20px" }}>
            <div className="feat">
              <b>단계적 롤아웃</b>
              <span>
                섀도 모드(관찰) → 권고 → 자동 실행으로, 현장 신뢰가 쌓인 만큼만 자율화 수준을
                올립니다.
              </span>
            </div>
            <div className="feat">
              <b>정책 코드화 · 승인 라우팅</b>
              <span>
                위험도·
                <wbr />
                가역성 기준을 정책으로 코드화해, 실행 전 승인 경로를 자동으로 분기합니다.
              </span>
            </div>
            <div className="feat">
              <b>감사추적 · 복구</b>
              <span>
                승인 정책이 적용된 주요 판단과 실행 이력을 남기고, 문제 발생 시 검증된 상태로 되돌릴
                수 있게 설계합니다.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="packs" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Domain Packs & Deploy</span>
            <h2>도메인팩으로 산업을 확장, 3가지로 배포</h2>
            <p className="sec-sub">
              공통 운영 기능은 재사용하고, 제조·
              <wbr />
              안전 등 산업별 기능은 도메인팩으로 추가합니다. 데이터 보안과 규제 요건에 맞춰 배포
              방식을 선택합니다.
            </p>
          </div>
          <div className="dep-grid">
            <div className="dep-card reveal" data-d="1">
              <h3>Manufacturing Pack</h3>
              <p>
                예지보전·
                <wbr />
                품질 보정·
                <wbr />
                에너지 최적화 — SL·
                <wbr />
                하이박·
                <wbr />
                한솔제지 등 제조 현장 실증 기반
              </p>
            </div>
            <div className="dep-card reveal" data-d="2">
              <h3>Safety Pack</h3>
              <p>
                멀티모달 위험추론·
                <wbr />
                중앙 통합관제·
                <wbr />
                GIS — 오큐브가 주관하는 세이프뱃지 국책 과제의 4개 현장 검증 진행 경험을 반영
              </p>
            </div>
            <div className="dep-card reveal" data-d="3">
              <h3>Infra · 디지털 트윈</h3>
              <p>3D/GIS 기반 통합 관제 — 포항 E-UM 디지털 트윈 통합플랫폼 등 구축 경험</p>
            </div>
          </div>
          <div className="dep-grid" style={{ marginTop: "16px" }}>
            <div className="dep-card reveal" data-d="1">
              <div className="ic" aria-hidden="true">
                ☁️
              </div>
              <h3>클라우드</h3>
              <p>
                상용 LLM API·
                <wbr />
                빠른 구축
              </p>
            </div>
            <div className="dep-card reveal" data-d="2">
              <div className="ic" aria-hidden="true">
                🏢
              </div>
              <h3>온프레미스</h3>
              <p>사내 서버 sLLM — 데이터 내부화</p>
            </div>
            <div className="dep-card reveal" data-d="3">
              <div className="ic" aria-hidden="true">
                🔒
              </div>
              <h3>폐쇄망</h3>
              <p>망분리 환경 대응</p>
            </div>
          </div>
          <figure className="shot-fig reveal" data-d="2">
            <Image
              className="shot fit"
              style={{ maxHeight: "28vh" }}
              src="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-infra.jpg"
              alt="클러스터·추론 서비스 인프라 관제 예시 화면 — CPU·메모리·GPU 전력·노드·파드 현황"
              loading="lazy"
              width="1600"
              height="1005"
            />
            <figcaption className="shot-cap">
              클러스터·
              <wbr />
              추론 서비스 인프라 관제 — 프로토타입 예시 화면
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="console" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Operations &amp; Governance</span>
            <h2>만드는 것보다 오래 가는 것은 운영입니다</h2>
            <p className="sec-sub">
              모델과 에이전트가 늘어날수록 필요한 것은 기능이 아니라 통제 수단입니다. Cubeon은 배포
              이후의 상태를 한 화면에서 확인하고, 문제가 생겼을 때 되돌릴 수 있는 운영 체계를
              제공합니다.
            </p>
          </div>
          <div className="dep-grid g2 reveal" data-d="1" style={{ marginTop: "24px" }}>
            <div className="dep-card">
              <h3>통합 운영 대시보드</h3>
              <ul className="pi-bul">
                <li>
                  노드·
                  <wbr />
                  GPU·
                  <wbr />
                  파드 등 인프라 자원 사용 현황과 서비스 상태를 단일 화면에서 확인
                </li>
                <li>
                  응답 지연·
                  <wbr />
                  처리량·
                  <wbr />
                  오류율을 시계열로 추적해 이상 징후를 사전 인지
                </li>
                <li>임계값 기반 알림으로 담당자에게 즉시 전달</li>
              </ul>
            </div>
            <div className="dep-card">
              <h3>
                모델·
                <wbr />
                에이전트 레지스트리
              </h3>
              <ul className="pi-bul">
                <li>
                  운영 중인 모델과 에이전트의 버전·
                  <wbr />
                  학습 데이터·
                  <wbr />
                  배포 이력을 목록으로 관리
                </li>
                <li>동일 업무에 대한 버전 간 비교와 단계적 전환(카나리) 지원</li>
                <li>어떤 버전이 어떤 답을 냈는지 추적 가능한 감사 기록 유지</li>
              </ul>
            </div>
            <div className="dep-card">
              <h3>접근 통제와 데이터 경계</h3>
              <ul className="pi-bul">
                <li>역할 기반 접근 제어(RBAC)로 사용자별 참조 가능한 지식과 기능 범위를 분리</li>
                <li>외부 반출이 제한된 데이터가 경계를 넘지 않도록 처리 위치를 정책으로 고정</li>
                <li>
                  조회·
                  <wbr />
                  질의·
                  <wbr />
                  다운로드 이력을 남겨 사후 확인이 가능하도록 구성
                </li>
              </ul>
            </div>
            <div className="dep-card">
              <h3>변경 관리와 이전 상태 복구</h3>
              <ul className="pi-bul">
                <li>
                  프롬프트·
                  <wbr />
                  모델·
                  <wbr />
                  지식 변경을 배포 단위로 묶어 이력화
                </li>
                <li>표준 질의 세트 자동 재검증을 통과한 변경만 운영에 반영</li>
                <li>품질 저하 확인 시 검증된 직전 버전으로 신속히 복구</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
