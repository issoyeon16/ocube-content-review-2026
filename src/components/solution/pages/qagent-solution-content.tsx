import Link from "next/link";
import Image from "next/image";
export function QagentSolutionContent() {
  return (
    <>
      <section className="sol-intro">
        <span className="eb rv">SOLUTION / AGENTQ</span>
        <h2 className="rv d1">
          <span>자연어 하나로</span>
          <span>조회·분석·실행까지</span>
        </h2>
        <div className="sol-lead rv d2">
          <p>여러 시스템에 흩어진 데이터를 대화형 단일 창구로 통합합니다.</p>
          <p>답변에는 근거를 함께 제시하고, 실행은 승인을 거쳐 처리합니다.</p>
        </div>
        <figure className="sol-stage rv d3">
          <Image
            src="/ocube-content-review-2026/assets/images/solutions/screens/agentq-hub.jpg"
            alt="QAgent 화면 — 프로토타입 예시"
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
          <a href="#arch">아키텍처</a>
          <a href="#pipeline">파이프라인</a>
          <a href="#capability">기술 스택</a>
          <a href="#connect">연동</a>
          <a href="#compare">비교</a>
          <a href="#autonomy">자율성</a>
          <a href="#stack">배포</a>
          <a href="#proof">사례</a>
        </div>
      </nav>

      <section id="overview" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Overview</span>
            <h2>여러 시스템을 오가며 데이터를 찾는 시간을 줄입니다</h2>
            <p className="sec-sub">
              QAgent는 업무 시스템과 사내 문서를 자연어로 조회·
              <wbr />
              분석하는 AI 에이전트입니다. 답변을 리포트로 정리하고, 필요한 작업은 담당자 승인 후
              실행합니다.
            </p>
          </div>
          <div className="media-duo reveal" data-d="1">
            <figure>
              <Image
                className="shot"
                src="/ocube-content-review-2026/assets/images/solutions/screens/agentq-analysis.jpg"
                alt="QAgent 데이터 분석 에이전트 화면 — 업무 데이터를 자연어로 분석"
                loading="lazy"
                width="1100"
                height="691"
              />
              <figcaption className="shot-cap">
                QAgent — 자연어 기반 업무 데이터 분석 (예시 화면)
              </figcaption>
            </figure>
            <div className="feat-list">
              <div className="feat">
                <b>NL2SQL</b>
                <span>자연어 질문을 SQL로 변환 — 분산 시스템 데이터를 대화로 조회</span>
              </div>
              <div className="feat">
                <b>
                  근거 검색(RAG·
                  <wbr />
                  GraphRAG)
                </b>
                <span>
                  사내 문서·
                  <wbr />
                  지식 검색에 근거 경로 제시로 환각 억제
                </span>
              </div>
              <div className="feat">
                <b>실행 연동</b>
                <span>
                  메신저·
                  <wbr />
                  이슈트래커 등 사내 시스템 연계 자동화
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sec-anchor">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Features</span>
            <h2>에이전트를 완성하는 핵심 기능</h2>
            <p className="lead">
              데이터를 찾아 답하고, 확인 가능한 근거를 제시하며, 실행 전에는 담당자의 통제를
              거칩니다.
            </p>
          </div>
          <div className="duo">
            <div className="duo-txt rv">
              <span className="pill">NL2SQL</span>
              <h3>자연어 데이터 조회</h3>
              <p>
                자연어 질문을 SQL로 변환해 여러 시스템에 흩어진 데이터를 한 번에 조회합니다. SQL을
                몰라도 필요한 데이터를 직접 찾을 수 있습니다.
              </p>
              <a className="duo-cta" href="#capability">
                구성 기술 자세히 <i aria-hidden="true">→</i>
              </a>
            </div>
            <div className="duo-media stage rv d1">
              <Image
                src="/ocube-content-review-2026/assets/images/solutions/screens/agentq-nl2sql.jpg"
                alt="자연어 데이터 조회(NL2SQL) 화면"
                loading="lazy"
                width="1100"
                height="691"
              />
              <p className="fitcap">NL2SQL 조회 — 프로토타입 예시 화면</p>
            </div>
          </div>
          <div className="duo rev">
            <div className="duo-txt rv">
              <span className="pill">근거 검색(RAG·GraphRAG)</span>
              <h3>근거를 제시하는 답변</h3>
              <p>
                사내 문서와 지식을 검색 증강(RAG·GraphRAG)으로 활용하고, 답변마다 출처를 함께
                인용합니다. 어디서 온 답인지 확인할 수 있어야 업무에 쓸 수 있습니다.
              </p>
              <a className="duo-cta" href="#pipeline">
                판단 파이프라인 자세히 <i aria-hidden="true">→</i>
              </a>
            </div>
            <div className="duo-media stage rv d1">
              <Image
                src="/ocube-content-review-2026/assets/images/solutions/screens/agentq-graphrag.jpg"
                alt="지식그래프 기반 검색 화면"
                loading="lazy"
                width="1100"
                height="691"
              />
              <p className="fitcap">GraphRAG 지식 검색 — 프로토타입 예시 화면</p>
            </div>
          </div>
          <div className="duo">
            <div className="duo-txt rv">
              <span className="pill">Guardrails</span>
              <h3>승인 기반 실행 통제</h3>
              <p>
                민감한 작업은 안전정책 정책과 사람의 승인을 거쳐 실행합니다. 에이전트에게 일을
                맡기되, 통제권은 사람에게 남깁니다.
              </p>
              <a className="duo-cta" href="#autonomy">
                자율화 수준 자세히 <i aria-hidden="true">→</i>
              </a>
            </div>
            <div className="duo-media stage rv d1">
              <Image
                src="/ocube-content-review-2026/assets/images/solutions/screens/agentq-guard.jpg"
                alt="안전정책 정책 관리 화면"
                loading="lazy"
                width="1100"
                height="691"
              />
              <p className="fitcap">안전정책 관리 — 프로토타입 예시 화면</p>
            </div>
          </div>
        </div>
      </section>
      <section id="arch" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Architecture</span>
            <h2>질의에서 실행까지, 3계층</h2>
            <p className="sec-sub">
              QAgent는 <b>이해 → 추론 → 실행</b> 3계층으로 동작합니다. 답변에는 확인 가능한 근거를
              함께 제시하고, 실제 업무를 실행하기 전에는 담당자 승인 절차를 둡니다.
            </p>
          </div>
          <div
            className="stack-diagram reveal"
            data-d="1"
            aria-label="QAgent 처리 흐름: 이해, 추론, 실행"
          >
            <div className="stack-layer">
              <span className="stack-tag">01 · 이해 · 검색</span>
              <b>Understanding</b>
              <small>
                자연어 데이터 조회(NL2SQL)로 자연어를 구조화 쿼리로 변환하고, 근거 검색(RAG·
                <wbr />
                GraphRAG)로 사내 지식과 근거 경로를 찾습니다.
              </small>
            </div>
            <div className="stack-arrow" aria-hidden="true">
              ↓
            </div>
            <div className="stack-layer">
              <span className="stack-tag">02 · 추론 · 생성</span>
              <b>Reasoning</b>
              <small>
                상용 대규모 언어모델(LLM) API 또는 사내 소형 언어모델(sLLM)으로 분석·
                <wbr />
                리포트를 생성하고 안전정책을 적용합니다.
              </small>
            </div>
            <div className="stack-arrow" aria-hidden="true">
              ↓
            </div>
            <div className="stack-layer l-op">
              <span className="stack-tag">03 · 실행 · 행동</span>
              <b>Execution</b>
              <small>
                생산관리(MES)·
                <wbr />
                전사자원관리(ERP)·
                <wbr />
                메신저·
                <wbr />
                이슈트래커와 연동하며, 실제 실행 전에는 사람 승인을 거칩니다.
              </small>
            </div>
          </div>
          <p className="sec-note stack-note reveal">
            QData가 표준화한 데이터를 사용하고, Cubeon의 에이전트·
            <wbr />
            협업 조정 모듈을 기반으로 여러 에이전트가 역할을 나눠 일하도록 확장합니다.
          </p>
        </div>
      </section>
      <section id="pipeline" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Runtime Pipeline</span>
            <h2>근거 있는 답을 만드는 흐름</h2>
            <p className="sec-sub">
              질문과 관련된 사내 자료를 먼저 찾고, 답변에 근거를 붙여 검증합니다. 근거가 부족한 답은
              실행으로 바로 이어지지 않도록 구성합니다.
            </p>
          </div>
          <div className="tl reveal" data-d="1">
            <div className="tl-card">
              <div className="yr">STEP 1</div>
              <h3>질의 이해</h3>
              <p>자연어 질문을 데이터 조회문으로 변환(NL2SQL)</p>
            </div>
            <div className="tl-card">
              <div className="yr">STEP 2</div>
              <h3>문서 검색</h3>
              <p>문서를 의미 기반으로 검색하고 관련도가 높은 순서로 재정렬</p>
            </div>
            <div className="tl-card">
              <div className="yr">STEP 3</div>
              <h3>근거 결합</h3>
              <p>
                근거 검색(RAG·
                <wbr />
                GraphRAG)로 근거 경로를 답변에 결합 · 지식그래프 관계 추론
              </p>
            </div>
            <div className="tl-card">
              <div className="yr">STEP 4</div>
              <h3>추론 · 생성</h3>
              <p>
                상용 대규모 언어모델(LLM) API 또는 사내 소형 언어모델(sLLM)으로 분석·
                <wbr />
                리포트 생성
              </p>
            </div>
            <div className="tl-card">
              <div className="yr">STEP 5</div>
              <h3>근거 검증 · 안전장치</h3>
              <p>검색한 자료와 답변이 일치하는지 확인하고 개인정보를 가려 안전성을 점검</p>
            </div>
            <div className="tl-card cur">
              <div className="yr">STEP 6</div>
              <h3>실행 · HITL</h3>
              <p>
                HITL(사람이 검토·승인하는 절차)을 거친 후 생산관리(MES)·
                <wbr />
                전사자원관리(ERP)·
                <wbr />
                메신저·
                <wbr />
                이슈트래커로 액션 실행
              </p>
            </div>
          </div>
          <div className="feat-list reveal" data-d="2" style={{ marginTop: "22px" }}>
            <div className="feat">
              <b>근거가 부족하면 답변 보류</b>
              <span>
                검색 자료와 답변의 일치도가 기준에 못 미치면 답변을 보류하고 다시 검색합니다.
              </span>
            </div>
            <div className="feat">
              <b>권한 인지 검색</b>
              <span>
                사용자 권한 범위 안의 문서만 검색·
                <wbr />
                인용해 정보 접근 통제를 유지합니다.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="capability" className="sec-anchor platform">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker" style={{ color: "#79b3f2" }}>
              Core Stack
            </span>
            <h2 style={{ color: "#ffffff" }}>에이전트를 이루는 기술</h2>
            <p className="sec-sub" style={{ color: "#c7d1df" }}>
              검색·
              <wbr />
              추론·
              <wbr />
              실행 전 구간을 산업 현장 요건에 맞춰 구성하도록 설계합니다.
            </p>
          </div>
          <div className="kmod-grid reveal" data-d="1" role="list" aria-label="QAgent 핵심 기술">
            <div
              className="kmod"
              role="listitem"
              data-preview="/ocube-content-review-2026/assets/images/solutions/screens/agentq-nl2sql.jpg"
              data-preview-cap="정형데이터(DB) 검색 — 자연어를 SQL로 변환"
              data-preview-alt="NL2SQL 관련 예시 화면"
            >
              <b>NL2SQL</b>
              <span>자연어 질문을 SQL로 변환 — 분산 데이터 대화형 조회</span>
            </div>
            <div
              className="kmod"
              role="listitem"
              data-preview="/ocube-content-review-2026/assets/images/solutions/screens/agentq-rag.jpg"
              data-preview-cap="RAG 지식 연동 — 근거 문서 검색·인용"
              data-preview-alt="RAG 관련 예시 화면"
            >
              <b>RAG</b>
              <span>
                사내 문서·
                <wbr />
                지식 검색증강 생성
              </span>
            </div>
            <div
              className="kmod"
              role="listitem"
              data-preview="/ocube-content-review-2026/assets/images/solutions/screens/agentq-graphrag.jpg"
              data-preview-cap="지식 검색 — 관계 기반 탐색·근거 제시"
              data-preview-alt="GraphRAG 관련 예시 화면"
            >
              <b>GraphRAG</b>
              <span>
                지식그래프 기반 관계 검색·
                <wbr />
                추론
              </span>
            </div>
            <div
              className="kmod"
              role="listitem"
              data-preview="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-modelreg.jpg"
              data-preview-cap="모델 관리 — 사내 설치형 sLLM 운영"
              data-preview-alt="sLLM 관련 예시 화면"
            >
              <b>sLLM</b>
              <span>
                온프레미스·
                <wbr />
                폐쇄망용 경량 특화 언어모델
              </span>
            </div>
            <div
              className="kmod"
              role="listitem"
              data-preview="/ocube-content-review-2026/assets/images/solutions/screens/dataq-knowledge.jpg"
              data-preview-cap="지식·의미 데이터 관리(권한·마스킹)"
              data-preview-alt="온톨로지·의미 기반 검색 관련 예시 화면"
            >
              <b>
                온톨로지·
                <wbr />
                의미 검색
              </b>
              <span>
                사내 용어·
                <wbr />
                관계로 근거 경로 제시
              </span>
            </div>
            <div
              className="kmod"
              role="listitem"
              data-preview="/ocube-content-review-2026/assets/images/solutions/screens/agentq-rag.jpg"
              data-preview-cap="문서·벡터 검색으로 근거 후보 확보"
              data-preview-alt="벡터 검색 · Reranking 관련 예시 화면"
            >
              <b>벡터 검색 · Reranking</b>
              <span>
                임베딩 후보 검색·
                <wbr />
                재순위화
              </span>
            </div>
            <div
              className="kmod"
              role="listitem"
              data-preview="/ocube-content-review-2026/assets/images/solutions/screens/cubeon-builder.jpg"
              data-preview-cap="에이전트 빌더 — MCP 도구·오케스트레이션"
              data-preview-alt="MCP · Function Calling 관련 예시 화면"
            >
              <b>MCP · Function Calling</b>
              <span>도구 호출 기반 에이전트 오케스트레이션</span>
            </div>
            <div
              className="kmod"
              role="listitem"
              data-preview="/ocube-content-review-2026/assets/images/solutions/screens/agentq-guard.jpg"
              data-preview-cap="안전정책 — 안전·품질 정책 관리"
              data-preview-alt="안전정책 · MLOps 관련 예시 화면"
            >
              <b>안전정책 · MLOps</b>
              <span>MLOps(모델 학습·배포·성능 관리) · 개인정보 비식별화 · 지속 개선</span>
            </div>
          </div>
          <figure className="shot-fig reveal" data-d="2">
            <Image
              className="shot fit"
              src="/ocube-content-review-2026/assets/images/solutions/screens/agentq-hub.jpg"
              alt="멀티 에이전트 허브 예시 화면 — 업무 에이전트와 복합 업무 오케스트레이션(OCR·DB검색·보고서 자동 릴레이)"
              loading="lazy"
              width="1600"
              height="1005"
            />
            <figcaption className="shot-cap">멀티 에이전트 허브 — 프로토타입 예시 화면</figcaption>
          </figure>
        </div>
      </section>
      <section id="connect" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Integrations</span>
            <h2>흩어진 시스템을 하나의 대화로</h2>
            <p className="sec-sub">
              사내 데이터 소스와 협업·
              <wbr />
              실행 도구를 표준 커넥터로 연결하도록 설계합니다.
            </p>
          </div>
          <div className="reveal" data-d="1" style={{ marginTop: "24px" }}>
            <p
              style={{
                fontFamily: "var(--font)",
                fontWeight: "800",
                color: "var(--accent-text)",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              데이터 소스
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span className="pill light">SQL DB</span>
              <span className="pill light">시계열 DB</span>
              <span className="pill light">MES</span>
              <span className="pill light">ERP</span>
              <span className="pill light">
                사내 문서·
                <wbr />
                지식베이스
              </span>
              <span className="pill light">벡터 DB</span>
            </div>
            <p
              style={{
                fontFamily: "var(--font)",
                fontWeight: "800",
                color: "var(--accent-text)",
                fontSize: "15px",
                margin: "20px 0 10px",
              }}
            >
              협업 · 실행
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span className="pill light">메신저</span>
              <span className="pill light">이슈트래커</span>
              <span className="pill light">메일</span>
              <span className="pill light">그룹웨어</span>
            </div>
            <p
              style={{
                fontFamily: "var(--font)",
                fontWeight: "800",
                color: "var(--accent-text)",
                fontSize: "15px",
                margin: "20px 0 10px",
              }}
            >
              인터페이스 · 프로토콜
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span className="pill light">REST / OpenAPI</span>
              <span className="pill light">SQL</span>
              <span className="pill light">MCP · Function Calling</span>
              <span className="pill light">sLLM 로컬 추론 엔드포인트</span>
            </div>
          </div>
          <p className="sec-note reveal">
            단순 조회를 넘어, 담당자 승인과 감사 기록이 남는 안전한 업무 실행으로 연결합니다.
          </p>
          <figure className="shot-fig reveal" data-d="2">
            <Image
              className="shot fit"
              style={{ maxHeight: "32vh" }}
              src="/ocube-content-review-2026/assets/images/solutions/screens/agentq-rag.jpg"
              alt="RAG 지식 연동 예시 화면 — VectorDB 연결·문서 보안등급·지식참조 근거"
              loading="lazy"
              width="1600"
              height="1005"
            />
            <figcaption className="shot-cap">사내 지식 RAG 연동 — 프로토타입 예시 화면</figcaption>
          </figure>
        </div>
      </section>
      {/* 범용 AI vs 오큐브 산업 AI */}
      <section id="compare" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Why not generic AI</span>
            <h2>범용 AI로는 부족한 이유</h2>
            <p className="sec-sub">
              범용 LLM을 단독으로 도입하는 것과 현장 시스템에 연결하는 산업 AI는 준비 범위가
              다릅니다.
            </p>
          </div>
          <table className="cmp reveal" data-d="1">
            <caption className="sr-only">범용 AI로는 부족한 이유 비교표</caption>
            <thead>
              <tr>
                <th scope="col">항목</th>
                <th scope="col">범용 LLM 단독 도입</th>
                <th scope="col" className="ok">
                  오큐브 산업 AI
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">도메인 데이터 이해</th>
                <td>
                  일반 지식 기반 — 현장 용어·
                  <wbr />
                  설비 맥락 약함
                </td>
                <td className="ok">
                  이기종 설비·
                  <wbr />
                  공정 데이터를 표준화(QData)해 반영
                </td>
              </tr>
              <tr>
                <th scope="row">
                  사내 용어·
                  <wbr />
                  관계 이해
                </th>
                <td>일반 지식에 의존해 사내 맥락 반영이 어려움</td>
                <td className="ok">
                  사내 용어와 데이터 관계를 정의해 질문을 업무 맥락에 맞게 해석
                </td>
              </tr>
              <tr>
                <th scope="row">
                  근거·
                  <wbr />
                  출처 제시
                </th>
                <td>답의 출처가 불투명 — 환각 위험</td>
                <td className="ok">
                  근거 검색(RAG·
                  <wbr />
                  GraphRAG)로 근거 경로 함께 제시
                </td>
              </tr>
              <tr>
                <th scope="row">
                  온프레미스·
                  <wbr />
                  폐쇄망
                </th>
                <td>배포 환경과 보안 체계를 별도로 구성해야 함</td>
                <td className="ok">
                  클라우드·
                  <wbr />
                  온프레미스·
                  <wbr />
                  폐쇄망 선택형
                </td>
              </tr>
              <tr>
                <th scope="row">현장 시스템 연동</th>
                <td>
                  업무 시스템·
                  <wbr />
                  설비 연동을 별도로 개발해야 함
                </td>
                <td className="ok">
                  생산관리(MES)·
                  <wbr />
                  전사자원관리(ERP)·
                  <wbr />
                  메신저·
                  <wbr />
                  설비 연동, 승인 후 실행
                </td>
              </tr>
              <tr>
                <th scope="row">지속 운영</th>
                <td>성능 감시와 개선 체계를 별도로 마련해야 함</td>
                <td className="ok">
                  모델 성능 감시·
                  <wbr />
                  재학습·
                  <wbr />
                  버전 관리
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section id="autonomy" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Human-in-the-Loop</span>
            <h2>위험도에 따라 사람이 개입합니다</h2>
            <p className="sec-sub">
              실행 자동화의 신뢰는 단계적으로 확보합니다. 작업의 가역성·
              <wbr />
              위험도에 따라 사람 개입 수준을 달리하도록 구성합니다.
            </p>
          </div>
          <table className="cmp reveal" data-d="1">
            <caption className="sr-only">위험도에 따라 사람이 개입합니다 비교표</caption>
            <thead>
              <tr>
                <th scope="col">자율성 단계</th>
                <th scope="col">사람 개입 시점</th>
                <th scope="col" className="ok">
                  적용 시나리오
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Human-in-the-loop</th>
                <td>
                  모든 액션을 실행 직전 사람이 검토·
                  <wbr />
                  승인
                </td>
                <td className="ok">
                  비가역·
                  <wbr />
                  고위험 (발주·
                  <wbr />
                  정산·
                  <wbr />
                  설비 제어)
                </td>
              </tr>
              <tr>
                <th scope="row">Human-on-the-loop</th>
                <td>
                  사람이 감시하며 필요 시 개입·
                  <wbr />
                  중단
                </td>
                <td className="ok">
                  반복·
                  <wbr />
                  중위험 (리포트 발송·
                  <wbr />
                  티켓 생성)
                </td>
              </tr>
              <tr>
                <th scope="row">Human-out-of-the-loop</th>
                <td>사전 정의 정책 내 자동 실행 · 사후 감사</td>
                <td className="ok">
                  저위험·
                  <wbr />
                  가역 (데이터 조회·
                  <wbr />
                  요약)
                </td>
              </tr>
            </tbody>
          </table>
          <p className="sec-note reveal">
            업무 위험도와 결과를 되돌릴 수 있는지에 따라 자동 실행 범위와 승인자를 정합니다.
          </p>
          <div className="feat-list reveal" data-d="2">
            <div className="feat">
              <b>
                권한·
                <wbr />
                역할 기반 승인
              </b>
              <span>
                업무·
                <wbr />
                위험도별로 승인권자를 라우팅해 무단 실행을 차단
              </span>
            </div>
            <div className="feat">
              <b>감사 추적</b>
              <span>
                설정 범위의 조회·
                <wbr />
                실행 이력을 남겨 감사와 원인 추적을 지원
              </span>
            </div>
            <div className="feat">
              <b>
                롤백·
                <wbr />
                보상 처리
              </b>
              <span>
                오실행 시 되돌리기·
                <wbr />
                보상 트랜잭션으로 안전하게 복구
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="stack" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Deployment</span>
            <h2>데이터가 있는 곳에 배포합니다</h2>
            <p className="sec-sub">
              데이터 주권·
              <wbr />
              보안 요건에 따라 같은 에이전트를 세 형태로 배포하도록 설계합니다.
            </p>
          </div>
          <p className="sec-note reveal">
            데이터가 밖으로 나가도 되는지, 얼마나 빨라야 하는지, 최신 모델이 필요한지 — 세 축으로
            배포 형태를 결정합니다.
          </p>
          <div className="feat-list reveal" data-d="1">
            <div className="feat">
              <b>
                데이터 주권·
                <wbr />
                보안
              </b>
              <span>
                반출 가능 여부·
                <wbr />
                망분리 요건에 따라 클라우드 ↔ 온프레미스 ↔ 폐쇄망 선택
              </span>
            </div>
            <div className="feat">
              <b>
                지연·
                <wbr />
                비용
              </b>
              <span>실시간성이 중요한 현장은 로컬 추론, 범용 질의는 API로 역할 분담</span>
            </div>
            <div className="feat">
              <b>모델 최신성</b>
              <span>최신 상용 LLM API와 내부 특화 sLLM을 요건에 맞춰 조합</span>
            </div>
          </div>
          <div className="dep-grid">
            <div className="dep-card reveal" data-d="1">
              <div className="ic" aria-hidden="true">
                ☁️
              </div>
              <h3>클라우드</h3>
              <p>상용 LLM API 기반 · 빠른 구축과 최신 모델 활용</p>
            </div>
            <div className="dep-card reveal" data-d="2">
              <div className="ic" aria-hidden="true">
                🏢
              </div>
              <h3>온프레미스</h3>
              <p>사내 서버 sLLM · 데이터 내부화 · 최신 GPU 인프라 추론</p>
            </div>
            <div className="dep-card reveal" data-d="3">
              <div className="ic" aria-hidden="true">
                🔒
              </div>
              <h3>폐쇄망</h3>
              <p>망분리(에어갭) 대응 · 데이터 반출 없이 온프레미스 sLLM 운영</p>
            </div>
          </div>
        </div>
      </section>
      <section id="proof" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Case</span>
            <h2>
              반복 조회·
              <wbr />
              정리 시간을 줄인 적용 사례
            </h2>
          </div>
          <div className="case-grid two">
            <article className="case-card reveal" data-d="1">
              <span className="dom">대기업 제조 · 자재 관리</span>
              <h3>자재 의사결정 AI Agent</h3>
              <p className="csi">
                <b>과제</b> 재고·
                <wbr />
                수급 데이터가 시스템마다 분산, 취합에 시간 소모
              </p>
              <p className="csi">
                <b>해결</b> 자연어→SQL 변환 + 지식검색(RAG), 차트·
                <wbr />
                표·
                <wbr />
                메일 초안까지 대화형 응답
              </p>
              <p className="csi">
                <b>성과</b> 분산 데이터 조회·
                <wbr />
                정리 과정을 대화형 조회로 단순화
              </p>
            </article>
            <article className="case-card reveal" data-d="2">
              <span className="dom">확장</span>
              <h3>
                CS·
                <wbr />
                문서 자동화로 확장
              </h3>
              <p className="csi">
                <b>영역</b> CS 자동응답, 사내 문서 Q&A, 리포트 초안 자동화
              </p>
              <p className="csi">
                <b>효과</b> 반복 조회·
                <wbr />
                정리 업무를 대화로 대체 — 사람은 판단에 집중
              </p>
            </article>
          </div>
          <figure className="shot-fig reveal" data-d="3">
            <Image
              className="shot fit"
              src="/ocube-content-review-2026/assets/images/solutions/screens/agentq-chat.jpg"
              alt="업무 질의응답 에이전트 예시 화면 — 근거 출처를 함께 제시하는 RAG 기반 답변"
              loading="lazy"
              width="1600"
              height="1005"
            />
            <figcaption className="shot-cap">
              근거 출처를 제시하는 업무 에이전트 — 프로토타입 예시 화면
            </figcaption>
          </figure>
          <div className="rv" style={{ marginTop: "36px", textAlign: "center" }}>
            <Link href="/#business" className="btn btn-ghost">
              전체 구축 사례 보기 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="scenarios" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Optimization Scenarios</span>
            <h2>이런 상황에서 효과가 큽니다</h2>
            <p className="sec-sub">
              복잡한 현장 조건에서 에이전트가 실제로 일하게 만드는 방식을 시나리오로 정리했습니다.
            </p>
          </div>
          <div className="dep-grid g2 reveal" data-d="1" style={{ marginTop: "24px" }}>
            <div className="dep-card">
              <h3>
                여러 시스템에 흩어진 데이터를 매번 조회·
                <wbr />
                취합하는 업무
              </h3>
              <p>
                재고·
                <wbr />
                수급·
                <wbr />
                품질 데이터가 시스템마다 따로 있어, 하나의 질문에 답하려면 여러 화면을 오가며
                조회하고 다시 표로 옮겨야 합니다. QAgent는 자연어 질의를 질의문(NL2SQL)으로 변환해
                필요한 시스템에서 직접 데이터를 가져오고, 표·
                <wbr />
                차트와 함께 근거가 된 조회 조건을 같이 제시합니다.
              </p>
            </div>
            <div className="dep-card">
              <h3>사내 규정과 기술 문서가 여러 곳에 분산된 환경</h3>
              <p>
                작업표준서·
                <wbr />
                점검 절차·
                <wbr />
                설비 매뉴얼이 부서별로 나뉘어 있어, 정보가 존재해도 상황에 맞는 답을 일관되게 얻기
                어렵습니다. QAgent는 문서를 의미 단위로 구조화하고 출처와 함께 답변해, 단순 문서
                검색이 아니라 업무 판단의 근거로 쓸 수 있는 지식베이스로 동작합니다.
              </p>
            </div>
            <div className="dep-card">
              <h3>답변의 근거와 책임 소재가 중요한 업무</h3>
              <p>
                안전·
                <wbr />
                품질·
                <wbr />
                인허가처럼 해석의 정확성이 요구되는 영역에서는 출처가 불분명한 답변 자체가 리스크가
                됩니다. QAgent는 검색된 근거와 생성된 답변을 대조하고, 근거가 부족하면 단정하지 않고
                확인이 필요하다고 표시하도록 설계합니다.
              </p>
            </div>
            <div className="dep-card">
              <h3>부서마다 열람 범위가 다른 조직</h3>
              <p>
                같은 질문이라도 부서와 직무에 따라 접근 가능한 자료가 다릅니다. QAgent는 역할 기반
                접근 제어(RBAC)를 지식 범위에 그대로 적용해, 하나의 창구를 쓰면서도 사용자마다 볼 수
                있는 근거만 참조하도록 통제합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
