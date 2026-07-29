import Link from "next/link";
import Image from "next/image";
export function QfactorySolutionContent() {
  return (
    <>
      <section className="sol-intro">
        <span className="eb rv">SOLUTION / FACTORYQ</span>
        <h2 className="rv d1">
          <span>공장 전주기를 예측·최적화하는</span>
          <span>AI 스마트 팩토리</span>
        </h2>
        <div className="sol-lead rv d2">
          <p>
            분산제어(DCS)·품질관리(QCS)·설비제어(PLC)·생산관리(MES) 데이터와 센서 정보를 시간·생산
            작업 단위로 연결합니다.
          </p>
          <p>열에너지, 설비, 품질, 안전을 함께 분석해 운영자의 판단과 단계적 제어를 지원합니다.</p>
        </div>
        <figure className="sol-stage rv d3">
          <Image
            src="/ocube-content-review-2026/assets/images/solutions/screens/factoryq-analysis.jpg"
            alt="QFactory 화면 — 프로토타입 예시"
            loading="lazy"
            width="1500"
            height="942"
          />
        </figure>
      </section>

      <nav className="subnav" hidden aria-hidden="true">
        <div className="wrap">
          <a href="#overview">개요</a>
          <a href="#applications">적용 범위</a>
          <a href="#features">핵심 기능</a>
          <a href="#spec">
            대상·
            <wbr />
            기법
          </a>
          <a href="#caps">핵심 기능</a>
          <a href="#stack">아키텍처</a>
          <a href="#pipeline">파이프라인</a>
          <a href="#protocols">
            프로토콜·
            <wbr />
            표준
          </a>
          <a href="#modelops">ModelOps</a>
          <a href="#why">왜 AI</a>
          <a href="#proof">실증 사례</a>
          <a href="#deploy">배포</a>
        </div>
      </nav>

      <section id="overview" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Overview</span>
            <h2>설비 한 대가 아니라 공장 운영 전체를 지능화합니다</h2>
            <p className="sec-sub">
              QFactory는 흩어진 제조 데이터를 연결하고 예측 결과를 현장 운영으로 이어주는 AI 스마트
              팩토리 플랫폼입니다. 기존 설비 환경을 존중하며 필요한 공정부터 단계적으로 적용합니다.
            </p>
          </div>
          <div className="media-duo reveal" data-d="1">
            <figure>
              <Image
                className="shot"
                src="/ocube-content-review-2026/assets/images/solutions/qfactory-dashboard.jpg"
                alt="스마트 팩토리 — 로봇 조립 라인과 공정 데이터"
                loading="lazy"
                width="820"
                height="510"
              />
              <figcaption className="shot-cap">
                제조 DX 플랫폼 <b>pomia</b> — 설비·
                <wbr />
                공정 데이터로 이상 조기감지·
                <wbr />
                공정 최적화
              </figcaption>
            </figure>
            <div className="feat-list">
              <div className="feat">
                <b>이상 조기감지</b>
                <span>
                  시계열 이상탐지와 생성형 AI 질의응답으로 원인·
                  <wbr />
                  조치 후보를 신속히 확인
                </span>
              </div>
              <div className="feat">
                <b>공정 최적화</b>
                <span>
                  설비 상태진단·
                  <wbr />
                  프로파일 권고 — 품질 편차 축소
                </span>
              </div>
              <div className="feat">
                <b>
                  예지보전·
                  <wbr />
                  RUL
                </b>
                <span>
                  에너지 최적화·
                  <wbr />
                  잔존수명(RUL) 예측으로 다운타임 저감
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="sec-anchor factory-apps">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">AI Smart Factory</span>
            <h2>공장 전주기를 여섯 가지 AI로 연결합니다</h2>
            <p className="lead">
              QFactory는 단일 분석 모델이 아닙니다. 데이터 통합부터 에너지·설비·품질·안전·운영까지,
              현장 과제에 맞춰 확장하는 제조 AI 체계입니다.
            </p>
          </div>
          <div className="factory-app-grid">
            <article className="factory-app rv">
              <div className="factory-app-top">
                <span>01</span>
                <b>Data Foundation</b>
              </div>
              <h3>AI–현장 운영기술(AI-OT) 통합·표준화</h3>
              <p>
                분산제어·품질관리·설비제어·생산관리 데이터와 센서 정보를 시간·생산 작업 단위·설비
                기준으로 정렬합니다.
              </p>
              <dl>
                <div>
                  <dt>연결 데이터</dt>
                  <dd>공정·설비·품질·에너지·물류</dd>
                </div>
                <div>
                  <dt>현장 활용</dt>
                  <dd>정합성 검증, 원인 추적, AI 학습용 표준 데이터</dd>
                </div>
              </dl>
            </article>
            <article className="factory-app rv d1">
              <div className="factory-app-top">
                <span>02</span>
                <b>Energy AI</b>
              </div>
              <h3>열에너지 생산·사용 최적화</h3>
              <p>
                열원 생산과 스팀 소비를 함께 분석해 과열·과소 공급을 줄일 운전 조건을 권고합니다.
              </p>
              <dl>
                <div>
                  <dt>연결 데이터</dt>
                  <dd>연소 상태·스팀·연료·공기·온습도</dd>
                </div>
                <div>
                  <dt>현장 활용</dt>
                  <dd>소각로·보일러·Dryer 생산–사용 밸런싱</dd>
                </div>
              </dl>
            </article>
            <article className="factory-app rv d2">
              <div className="factory-app-top">
                <span>03</span>
                <b>Equipment AI</b>
              </div>
              <h3>설비 건전성·잔존수명 예측</h3>
              <p>회전체와 건조 설비의 상태 변화를 분석해 이상·위험도·잔존수명을 예측합니다.</p>
              <dl>
                <div>
                  <dt>연결 데이터</dt>
                  <dd>진동·전류·온도·압력·유량·정비 이력</dd>
                </div>
                <div>
                  <dt>현장 활용</dt>
                  <dd>고장 조기경보, 정비 우선순위, 다운타임 예방</dd>
                </div>
              </dl>
            </article>
            <article className="factory-app rv">
              <div className="factory-app-top">
                <span>04</span>
                <b>Quality AI</b>
              </div>
              <h3>품질 예측·공급망 추적</h3>
              <p>원료·첨가제부터 최종 품질까지 시간·Lot 이력을 연결해 편차 원인을 찾습니다.</p>
              <dl>
                <div>
                  <dt>연결 데이터</dt>
                  <dd>농도·입도·공정조건·검사·출하 Lot</dd>
                </div>
                <div>
                  <dt>현장 활용</dt>
                  <dd>품질 예측, 원인 추적, 공급망 피드백</dd>
                </div>
              </dl>
            </article>
            <article className="factory-app rv d1">
              <div className="factory-app-top">
                <span>05</span>
                <b>Safety AI</b>
              </div>
              <h3>Vision AI 안전 관제</h3>
              <p>영상과 설비 이벤트를 결합해 위험 행동·구역 접근·화재·이상 상황을 감지합니다.</p>
              <dl>
                <div>
                  <dt>연결 데이터</dt>
                  <dd>실시간 영상 스트림(RTSP)·작업 구역·설비 알람</dd>
                </div>
                <div>
                  <dt>현장 활용</dt>
                  <dd>위험도별 알림, 이력 조회, 오탐 피드백</dd>
                </div>
              </dl>
            </article>
            <article className="factory-app rv d2">
              <div className="factory-app-top">
                <span>06</span>
                <b>AI Operations</b>
              </div>
              <h3>MLOps·자율운영 지원</h3>
              <p>
                <b>MLOps</b>(모델 학습·배포·성능을 관리하는 운영 체계)로 모델을 학습·배포·감시하고
                권고–승인–조치–결과 확인을 하나의 운영 흐름으로 만듭니다.
              </p>
              <dl>
                <div>
                  <dt>운영 정보</dt>
                  <dd>모델·데이터 버전·성능·데이터 변화</dd>
                </div>
                <div>
                  <dt>현장 활용</dt>
                  <dd>지속적 재학습·이전 모델 복구, 현장 엣지 연계, 단계적 자율운영</dd>
                </div>
              </dl>
            </article>
          </div>
          <ol className="factory-flow rv d2" aria-label="QFactory 현장 적용 흐름">
            <li>
              <b>01</b>
              <span>수집</span>
            </li>
            <li>
              <b>02</b>
              <span>표준화</span>
            </li>
            <li>
              <b>03</b>
              <span>예측·최적화</span>
            </li>
            <li>
              <b>04</b>
              <span>운영자 승인</span>
            </li>
            <li>
              <b>05</b>
              <span>현장 적용</span>
            </li>
            <li>
              <b>06</b>
              <span>성과 검증</span>
            </li>
          </ol>
          <p className="factory-note rv d3">
            <b>단계적 도입</b> 기존 설비를 전면 교체하지 않고, 기존 설비 보완용 센서와 현장 엣지
            연계를 활용해 필요한 공정부터 확장합니다.
          </p>
        </div>
      </section>

      <section id="features" className="sec-anchor">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="kicker">Features</span>
            <h2>제조 지능화의 핵심 기능</h2>
            <p className="lead">
              설비 상태를 진단하고, 담당자가 검토할 공정·
              <wbr />
              정비 조건을 권고하며, 운영 데이터로 모델 변화를 관리합니다.
            </p>
          </div>
          <div className="duo">
            <div className="duo-txt rv">
              <span className="pill">Detect</span>
              <h3>이상탐지 · 예지보전</h3>
              <p>
                설비 신호의 미세한 변화를 학습해 불량과 고장의 전조를 조기에 포착하고,
                잔존수명(RUL)을 추정합니다. 임계 알람이 놓치는 복합 패턴을 잡습니다.
              </p>
              <a className="duo-cta" href="#caps">
                세 가지 지능화 자세히 <i aria-hidden="true">→</i>
              </a>
            </div>
            <div className="duo-media stage rv d1">
              <Image
                src="/ocube-content-review-2026/assets/images/solutions/screens/agentq-analysis.jpg"
                alt="데이터 분석·이상치 탐지 화면"
                loading="lazy"
                width="1100"
                height="691"
              />
              <p className="fitcap">이상치 탐지 분석 — 프로토타입 예시 화면</p>
            </div>
          </div>
          <div className="duo rev">
            <div className="duo-txt rv">
              <span className="pill">Optimize</span>
              <h3>공정 조건 권고</h3>
              <p>
                열처리·
                <wbr />
                조립 공정의 운전 이력과 품질 결과를 분석해 조건을 권고합니다. 반복되는 판단 기준을
                데이터로 관리할 수 있습니다.
              </p>
              <a className="duo-cta" href="#why">
                왜 임계 알람으로 부족한지 <i aria-hidden="true">→</i>
              </a>
            </div>
            <div className="duo-media stage rv d1">
              <Image
                src="/ocube-content-review-2026/assets/images/cases/smart-optimizer.jpg"
                alt="열처리 공정 최적화 대시보드 예시"
                loading="lazy"
                width="900"
                height="502"
              />
              <p className="fitcap">공정 최적화 대시보드 — 예시 화면</p>
            </div>
          </div>
          <div className="duo">
            <div className="duo-txt rv">
              <span className="pill">Sustain</span>
              <h3>지속 학습 운영</h3>
              <p>
                공정 변화에 따른 모델 성능 저하를 감시하고 재학습 시점을 판단합니다. 새 모델은
                검증과 배포 절차를 거쳐 운영에 반영합니다.
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
        </div>
      </section>
      <section id="spec" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Coverage</span>
            <h2>무엇을, 어떤 데이터로 다루나</h2>
            <p className="sec-sub">
              설비·
              <wbr />
              공정 시계열을 입력받아 이상·
              <wbr />
              품질·
              <wbr />
              정비를 지능화합니다.
              <span className="pill light">OPC-UA</span> <span className="pill light">MQTT</span>
              <span className="pill light">Modbus</span> <span className="pill light">CAN</span>
            </p>
          </div>
          <table className="cmp reveal" data-d="1">
            <caption className="sr-only">무엇을, 어떤 데이터로 다루나 비교표</caption>
            <thead>
              <tr>
                <th scope="col">기능 축</th>
                <th scope="col" className="ok">
                  대상 설비·
                  <wbr />
                  데이터
                </th>
                <th scope="col" className="ok">
                  핵심 기법
                </th>
                <th scope="col" className="ok">
                  산출물
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">이상 조기감지</th>
                <td>
                  회전기·
                  <wbr />
                  모터·
                  <wbr />
                  로봇, 체결·
                  <wbr />
                  흡착 공정의 시계열(진동·
                  <wbr />
                  전류·
                  <wbr />
                  온도)
                </td>
                <td className="ok">시계열 이상탐지(정상 패턴 학습) + LLM 원인 질의응답</td>
                <td>이탈 알람 · 근거 · 조치 가이드</td>
              </tr>
              <tr>
                <th scope="row">공정 조건 권고</th>
                <td>
                  열처리·
                  <wbr />
                  브레이징·
                  <wbr />
                  성형 등 공정 조건·
                  <wbr />
                  프로파일
                </td>
                <td className="ok">상태진단 · 품질 데이터 기반 프로파일 권고</td>
                <td>권고 공정 조건 · 품질 편차 리포트</td>
              </tr>
              <tr>
                <th scope="row">예지보전</th>
                <td>
                  설비 부하·
                  <wbr />
                  마모·
                  <wbr />
                  가동 이력
                </td>
                <td className="ok">잔존수명(RUL) 예측 · 정비 시점 산정</td>
                <td>RUL · 정비 권고 · 비계획 정지 위험에 사전 대응</td>
              </tr>
            </tbody>
          </table>
          <p className="sec-note">
            수집 프로토콜·
            <wbr />
            표준은 현장 설비 환경에 맞춰 연결하도록 설계합니다(아래 참조).
          </p>
          <div className="hero-stats reveal" data-d="2">
            <div className="stat">
              <b>
                <span data-count="3">0</span>
                <i className="u">기능 축</i>
              </b>
              <span>이상 조기감지 · 공정 최적화 · 예지보전</span>
            </div>
            <div className="stat">
              <b>
                <span data-count="8">0</span>
                <i className="u">연결 대상</i>
              </b>
              <span>
                프로토콜·
                <wbr />
                제어기·
                <wbr />
                시스템 커넥터
              </span>
            </div>
            <div className="stat">
              <b>
                <span data-count="6">0</span>
                <i className="u">단계</i>
              </b>
              <span>수집→조치 파이프라인</span>
            </div>
            <div className="stat">
              <b>
                <span data-count="3">0</span>
                <i className="u">현장</i>
              </b>
              <span>
                제조 실증 · 자동차부품·
                <wbr />
                EV열처리·
                <wbr />
                제지
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="caps" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Capabilities</span>
            <h2>세 가지로 제조를 지능화합니다</h2>
          </div>
          <div className="dep-grid">
            <div className="dep-card reveal" data-d="1">
              <div className="ic" aria-hidden="true">
                🚨
              </div>
              <h3>이상탐지</h3>
              <p>정상 패턴 학습 후 미세 이탈 조기 감지 — 근거와 함께</p>
            </div>
            <div className="dep-card reveal" data-d="2">
              <div className="ic" aria-hidden="true">
                🎛️
              </div>
              <h3>공정 최적화</h3>
              <p>
                운전 이력·
                <wbr />
                품질 데이터 기반 공정 조건과 프로파일 권고
              </p>
            </div>
            <div className="dep-card reveal" data-d="3">
              <div className="ic" aria-hidden="true">
                🔧
              </div>
              <h3>예지보전</h3>
              <p>
                설비 잔존수명 예측·
                <wbr />
                정비 시점 권고로 비계획 정지에 사전 대응
              </p>
            </div>
          </div>
          <div className="feat-list reveal" data-d="4" style={{ marginTop: "24px" }}>
            <div className="feat">
              <b>근거 기반 알람</b>
              <span>
                단순 이탈 통보가 아니라 원인·
                <wbr />
                조치를 함께 제시 — 블랙박스가 아닌 설명 가능한 판단
              </span>
            </div>
            <div className="feat">
              <b>
                엣지·
                <wbr />
                서버 선택 추론
              </b>
              <span>
                현장 지연·
                <wbr />
                보안 요건에 맞춰 설비 근접(엣지) 또는 서버에서 추론하도록 배치
              </span>
            </div>
            <div className="feat">
              <b>공정 조건의 데이터화</b>
              <span>
                상태·
                <wbr />
                품질 데이터를 바탕으로 프로파일을 권고해 반복 판단의 기준을 축적
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="stack" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Architecture</span>
            <h2>판단 계층 제품, 한 스택 위에서</h2>
            <p className="sec-sub">
              QFactory는 <b>QData가 표준화한 데이터</b>를 입력받아 판단하고, <b>Cubeon</b> 운영
              계층에서 관제·
              <wbr />
              자율화됩니다.
            </p>
          </div>
          <div className="stack-diagram reveal" data-d="1">
            <div className="stack-layer l-op">
              <span className="stack-tag">운영 · 행동</span>
              <b>Cubeon · Manufacturing 도메인팩</b>
              <small>
                통합 관제 · AI 모델 지속적 재학습 · 자율화 L1→L3(탐지 → 원인분석·
                <wbr />
                담당자 승인 → 제한된 자동 실행)
              </small>
            </div>
            <div className="stack-arrow" aria-hidden="true">
              ▲
            </div>
            <div className="stack-layer l-judge">
              <span className="stack-tag">판단 · 분석 (QFactory)</span>
              <div className="stack-prods">
                <span>
                  이상탐지<small>시계열 이상</small>
                </span>
                <span>
                  공정 최적화<small>프로파일 권고</small>
                </span>
                <span>
                  예지보전<small>잔존수명 예측</small>
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
                OPC-UA·
                <wbr />
                MQTT·
                <wbr />
                Modbus·
                <wbr />
                CAN 설비 데이터를 공통 스키마·
                <wbr />
                온톨로지로
              </small>
            </div>
          </div>
        </div>
      </section>
      <section id="pipeline" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Pipeline</span>
            <h2>신호에서 조치까지, 여섯 단계</h2>
            <p className="sec-sub">
              설비 신호를 표준화·
              <wbr />
              분석해 <b>담당자가 검토할 수 있는 원인 후보와 조치 권고</b>로 제공합니다.
            </p>
          </div>
          <div className="tl reveal" data-d="1">
            <div className="tl-card">
              <span className="yr">01 수집</span>
              <h3>설비 신호 수집</h3>
              <p>
                OPC-UA·
                <wbr />
                MQTT·
                <wbr />
                Modbus·
                <wbr />
                CAN으로 진동·
                <wbr />
                전류·
                <wbr />
                온도·
                <wbr />
                공정값을 실시간 수집
              </p>
            </div>
            <div className="tl-card">
              <span className="yr">02 표준화</span>
              <h3>
                형식·
                <wbr />
                의미 통일
              </h3>
              <p>
                QData 공통 스키마·
                <wbr />
                온톨로지로 결측 보정·
                <wbr />
                품질 검증
              </p>
            </div>
            <div className="tl-card">
              <span className="yr">03 모델링</span>
              <h3>
                특징값·
                <wbr />
                정상 기준
              </h3>
              <p>시계열 특징값을 추출하고 정상 패턴을 학습해 이상탐지 기준선을 만듭니다.</p>
            </div>
            <div className="tl-card cur">
              <span className="yr">04 추론</span>
              <h3>
                이상·
                <wbr />
                잔존수명 예측
              </h3>
              <p>미세한 이탈을 조기에 찾고 설비의 남은 사용 가능 기간을 예측합니다.</p>
            </div>
            <div className="tl-card">
              <span className="yr">05 권고</span>
              <h3>
                원인·
                <wbr />
                조치 권고
              </h3>
              <p>
                생성형 AI 질의응답으로 원인·
                <wbr />
                조치를 현장 언어로 제시
              </p>
            </div>
            <div className="tl-card">
              <span className="yr">06 피드백</span>
              <h3>지속적 재학습</h3>
              <p>현장 피드백과 데이터 변화를 반영해 AI 모델을 주기적으로 다시 학습</p>
            </div>
          </div>
          <div className="feat-list reveal" data-d="2" style={{ marginTop: "22px" }}>
            <div className="feat">
              <b>검토 가능한 조치 권고</b>
              <span>
                단순 알람이 아니라 원인 후보와 권고 내용을 제공해, 담당자가 검토한 뒤 작업지시로
                이어갈 수 있게 합니다.
              </span>
            </div>
            <div className="feat">
              <b>기준선 버전 관리</b>
              <span>
                정상 프로파일을 제품·
                <wbr />
                라인별로 버전 관리해 공정 변경에도 기준선을 유지합니다.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="protocols" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Connectivity &amp; Standards</span>
            <h2>현장 데이터를 연결하도록 설계</h2>
            <p className="sec-sub">
              서로 다른 설비·
              <wbr />
              제어기·
              <wbr />
              업무 시스템을 표준 프로토콜로 연결하도록 커넥터를 구성합니다.
            </p>
          </div>
          <div className="mod-grid reveal" data-d="1">
            <div className="mod">OPC-UA</div>
            <div className="mod">MQTT</div>
            <div className="mod">Modbus (RTU/TCP)</div>
            <div className="mod">CAN / CAN-FD</div>
            <div className="mod">PLC</div>
            <div className="mod">SCADA</div>
            <div className="mod">MES</div>
            <div className="mod">Historian</div>
          </div>
          <p className="sec-note reveal" data-d="2">
            <b>
              예지보전·
              <wbr />
              상태감시 표준을 지향합니다.
            </b>{" "}
            <span className="pill light">ISO 10816</span>
            <span className="pill light">ISO 13373</span> <span className="pill light">ISA-95</span>{" "}
            — 설비 진동·
            <wbr />
            상태감시·
            <wbr />
            제조 정보 계층 참조. 실제 현장 설비 구성에 맞춰 커넥터를 구성합니다.
          </p>
          <div className="feat-list reveal" data-d="2" style={{ marginTop: "20px" }}>
            <div className="feat">
              <b>수집 주기 · 해상도 설계</b>
              <span>
                진동 고주파 샘플링부터 공정값 저주기 수집까지, 신호 특성에 맞춰 수집 정책을
                설계합니다.
              </span>
            </div>
            <div className="feat">
              <b>엣지 전처리</b>
              <span>
                FFT·
                <wbr />
                특징 추출을 설비 근접에서 수행해 전송량을 줄이고 응답성을 높이도록 구성합니다.
              </span>
            </div>
            <div className="feat">
              <b>표준 태그 매핑</b>
              <span>
                설비별 상이한 태그를 ISA-95 계층·
                <wbr />
                공통 스키마로 매핑해 모델 재사용성을 확보합니다.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="modelops" className="sec-anchor dark">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">ModelOps</span>
            <h2>
              모델을 지속 학습·
              <wbr />
              감시하도록 설계
            </h2>
            <p className="sec-sub">
              현장은 계속 변합니다. <b>학습 → 배포 → 감시 → 재학습</b> 흐름으로 운영 중 성능 저하를
              확인하고 대응하도록 구성합니다.
            </p>
          </div>
          <div className="kmod-grid reveal" data-d="1">
            <div className="kmod">
              <b>학습 · 등록</b>
              <span>모델 레지스트리 · 버전관리 · 승인 워크플로</span>
            </div>
            <div className="kmod">
              <b>배포</b>
              <span>클라우드 · 온프레미스 · 엣지 추론 자동 통합·배포</span>
            </div>
            <div className="kmod">
              <b>모니터링</b>
              <span>예측 분포 · 성능·상태 관측 · 감사 추적</span>
            </div>
            <div className="kmod">
              <b>데이터 변화 탐지</b>
              <span>
                통계 지표(PSI·KL divergence)로 데이터·
                <wbr />
                개념 변화 감지
              </span>
            </div>
            <div className="kmod">
              <b>지속적 재학습</b>
              <span>
                데이터 변화·
                <wbr />
                현장 피드백 반영 지속적 재학습
              </span>
            </div>
            <div className="kmod">
              <b>거버넌스</b>
              <span>모델 관리정책 · 감사 로그 · 사람 승인 절차</span>
            </div>
          </div>
          <p className="sec-note">
            Cubeon의 <b>ModelOps</b>(배포 모델의 버전·성능·승인 이력을 관리하는 운영 체계) 기능과
            연동합니다. 모델 자동 배포·지속적 재학습·버전 관리 체계를 적용합니다.
          </p>
          <div className="mod-grid reveal" data-d="2" style={{ marginTop: "18px" }}>
            <div className="mod">
              데이터 변화 지표<small>PSI · KL divergence</small>
            </div>
            <div className="mod">
              성능 관측
              <small>
                지연·
                <wbr />
                정확도 모니터링
              </small>
            </div>
            <div className="mod">
              재학습 트리거
              <small>
                임계·
                <wbr />
                주기·
                <wbr />
                피드백 기반
              </small>
            </div>
            <div className="mod">
              이전 모델 복구<small>버전 이력 기반 즉시 복귀</small>
            </div>
          </div>
          <figure className="shot-fig reveal" data-d="3" style={{ marginTop: "22px" }}>
            <Image
              className="shot fit"
              style={{ maxHeight: "24vh" }}
              src="/ocube-content-review-2026/assets/images/solutions/screens/factoryq-analysis.jpg"
              alt="데이터 분석·이상 탐지 에이전트 예시 화면 — 데이터 업로드·종합 분석·이상치 탐지(Z-score·IQR)"
              loading="lazy"
              width="1500"
              height="942"
            />
            <figcaption className="shot-cap">
              데이터 분석·
              <wbr />
              이상 탐지(종합 분석·
              <wbr />
              Z-score·
              <wbr />
              IQR) — 프로토타입 예시 화면
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="why" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Why AI</span>
            <h2>임계 알람을 넘어서</h2>
            <p className="sec-sub">
              고정 임계 감시로는 잡지 못하는 미세 이탈과 원인·
              <wbr />
              정비를 지능화합니다.
            </p>
          </div>
          <table className="cmp reveal" data-d="1">
            <caption className="sr-only">임계 알람을 넘어서 비교표</caption>
            <thead>
              <tr>
                <th scope="col">관점</th>
                <th scope="col">규칙 기반 임계 감시</th>
                <th scope="col" className="ok">
                  QFactory 제조 AI
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">이상 감지</th>
                <td>고정 임계 초과 시 알람(사후)</td>
                <td className="ok">정상 패턴 학습 후 미세 이탈 조기 감지</td>
              </tr>
              <tr>
                <th scope="row">원인 파악</th>
                <td>사람이 로그를 수동 추적</td>
                <td className="ok">
                  생성형 AI 질의응답으로 원인·
                  <wbr />
                  조치 후보 제시
                </td>
              </tr>
              <tr>
                <th scope="row">공정 조건</th>
                <td>고정 레시피 유지</td>
                <td className="ok">
                  상태·
                  <wbr />
                  품질 데이터 기반 프로파일 권고
                </td>
              </tr>
              <tr>
                <th scope="row">정비</th>
                <td>
                  주기·
                  <wbr />
                  고장 후 정비
                </td>
                <td className="ok">잔존수명 예측 기반 예지보전</td>
              </tr>
              <tr>
                <th scope="row">운영</th>
                <td>
                  수동 튜닝·
                  <wbr />
                  고정
                </td>
                <td className="ok">
                  데이터 변화 감시·
                  <wbr />
                  AI 모델 재학습
                </td>
              </tr>
            </tbody>
          </table>
          <p className="sec-note reveal" data-d="2">
            규칙 기반 감시를 대체하는 것이 아니라 보완합니다 — 기존 임계 알람 위에 AI 판단 레이어를
            얹는 전환 경로를 권장합니다.
          </p>
        </div>
      </section>
      <section id="proof" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Proven</span>
            <h2>제조 현장 실증</h2>
          </div>
          <div className="case-grid">
            <article className="case-card reveal" data-d="1">
              <span className="dom">자동차 부품 · SL</span>
              <h3>로봇 조립 라인 이상 조기감지</h3>
              <p className="csi">
                <b>과제</b> 체결 불량·
                <wbr />
                흡착 실패가 후공정에서야 발견
              </p>
              <p className="csi">
                <b>해결</b> 시계열 이상탐지 + 생성형 AI 질의응답
              </p>
              <p className="csi">
                <b>성과</b> 후공정 유출 전 조기 검출 — 재작업 위험을 줄이는 체계 구축
              </p>
            </article>
            <article className="case-card reveal" data-d="2">
              <span className="dom">EV 부품 열처리 · 하이박</span>
              <h3>진공 브레이징 공정 최적화</h3>
              <p className="csi">
                <b>과제</b> 고온 열처리 품질이 숙련자 경험 의존
              </p>
              <p className="csi">
                <b>해결</b> 상태진단·
                <wbr />
                이상감지·
                <wbr />
                프로파일 권고 3단 AI
              </p>
              <p className="csi">
                <b>성과</b> 숙련자 경험을 데이터로 표준화 — 품질 편차 관리
              </p>
            </article>
            <article className="case-card reveal" data-d="3">
              <span className="dom">제지 · 한솔제지 컨소시엄</span>
              <h3>AI-OT 기반 공정 자율운영</h3>
              <p className="csi">
                <b>과제</b> 분산제어(DCS)·품질관리(QCS)·설비제어(PLC) 데이터 분산, 열에너지·
                <wbr />
                설비·
                <wbr />
                품질 운영 분절
              </p>
              <p className="csi">
                <b>범위</b> 시간·생산 작업 단위 표준화, 열에너지 최적화, 설비 건전성·
                <wbr />
                잔존수명 예측, 품질·
                <wbr />
                안전 AI 통합
              </p>
              <p className="csi">
                <b>진행</b> 2026~2029 연구개발·
                <wbr />
                현장 실증 추진
              </p>
            </article>
          </div>
          <div className="hero-stats reveal" data-d="2" style={{ marginTop: "26px" }}>
            <div className="stat">
              <b>
                <span data-count="3">0</span>
                <i className="u">개 사</i>
              </b>
              <span>
                제조 적용 범위 — 자동차부품·
                <wbr />
                열처리·
                <wbr />
                제지
              </span>
            </div>
            <div className="stat">
              <b>국책 과제</b>
              <span>
                산업 AI·AI Factory 국책과제 수행·
                <wbr />
                추진
              </span>
            </div>
            <div className="stat">
              <b>Manufacturing</b>
              <span>
                Cubeon 제조 도메인팩으로 운영·
                <wbr />
                확장
              </span>
            </div>
          </div>
          <figure className="shot-fig reveal" data-d="3" style={{ marginTop: "22px" }}>
            <Image
              className="shot fit"
              style={{ maxHeight: "24vh" }}
              src="/ocube-content-review-2026/assets/images/solutions/screens/qdrive-verify.jpg"
              alt="AI 도입 성과 검증 예시 화면 — 반사실 비교·A/B 그룹·기준선(Baseline) 대비"
              loading="lazy"
              width="1600"
              height="1005"
            />
            <figcaption className="shot-cap">
              AI 도입 성과 검증(반사실 비교·
              <wbr />
              A/B·
              <wbr />
              기준선 대비) — 프로토타입 예시 화면
            </figcaption>
          </figure>
          <div className="rv" style={{ marginTop: "36px", textAlign: "center" }}>
            <Link href="/#business" className="btn btn-ghost">
              전체 구축 사례 보기 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="deploy" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Deployment</span>
            <h2>현장 규제에 맞춘 배포 3옵션</h2>
            <p className="sec-sub">
              데이터 반출이 어려운 제조 현장까지 — 동일 제품을 세 형태로 배포하도록 설계합니다.
            </p>
          </div>
          <div className="dep-grid reveal" data-d="1">
            <div className="dep-card">
              <div className="ic" aria-hidden="true">
                ☁️
              </div>
              <h3>클라우드</h3>
              <p>
                상용 LLM API·
                <wbr />
                빠른 구축. 다거점 통합 관제에 적합
              </p>
            </div>
            <div className="dep-card">
              <div className="ic" aria-hidden="true">
                🏭
              </div>
              <h3>온프레미스</h3>
              <p>
                사내 서버 sLLM·
                <wbr />
                데이터 내부화. 엣지 추론으로 현장 근접 처리
              </p>
            </div>
            <div className="dep-card">
              <div className="ic" aria-hidden="true">
                🔒
              </div>
              <h3>폐쇄망(에어갭)</h3>
              <p>망분리 대응. 반출 불가 데이터도 현장 내에서 추론</p>
            </div>
          </div>
          <p className="sec-note">
            상용 대규모 언어모델(LLM) API와 사내 소형 언어모델(sLLM)을 현장 보안·
            <wbr />
            규제에 맞춰 선택하도록 구성합니다.
          </p>
          <div className="feat-list reveal" data-d="2">
            <div className="feat">
              <b>
                동일 제품·
                <wbr />
                모델 일관성
              </b>
              <span>
                배포 형태가 달라도 같은 모델·
                <wbr />
                API로 운영하도록 설계 — 이관 비용 최소화
              </span>
            </div>
            <div className="feat">
              <b>현장 내부 데이터 처리</b>
              <span>민감 공정 데이터를 현장 밖으로 반출하지 않고 내부에서 분석하도록 구성</span>
            </div>
            <div className="feat">
              <b>단계적 확장</b>
              <span>
                기존 운영 영향을 줄이며 단일 설비 PoC(도입 전 효과를 확인하는 사전 검증)에서 다거점
                통합 관제까지 단계적으로 확장
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
