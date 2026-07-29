import Link from "next/link";
import Image from "next/image";
export function QvisionSolutionContent() {
  return (
    <>
      <section className="sol-intro">
        <span className="eb rv">SOLUTION / QVISION</span>
        <h2 className="rv d1">
          <span>도로와 현장의 위험을</span>
          <span>먼저 보는 영상 AI</span>
        </h2>
        <div className="sol-lead rv d2">
          <p>기존 CCTV 인프라를 그대로 활용해 돌발상황과 위험 행동을 검지합니다.</p>
          <p>현장 요건과 관련 규정에 따라 엣지 단계에서 비식별 처리하도록 구성합니다.</p>
        </div>
        <figure className="sol-stage rv d3">
          <Image
            src="/ocube-content-review-2026/assets/images/solutions/qvision-traffic-monitoring.png"
            alt="QVision 화면 — 프로토타입 예시"
            loading="lazy"
            width="560"
            height="204"
          />
        </figure>
      </section>

      <nav className="subnav" hidden aria-hidden="true">
        <div className="wrap">
          <a href="#overview">개요</a>
          <a href="#arch">아키텍처</a>
          <a href="#pipeline">파이프라인</a>
          <a href="#caps">기능</a>
          <a href="#detect">돌발검지</a>
          <a href="#spec">스펙</a>
          <a href="#deploy">배포</a>
          <a href="#proof">국책 실증</a>
        </div>
      </nav>

      <section id="overview" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Overview</span>
            <h2>
              기존 CCTV를 교통·
              <wbr />
              안전 감지 센서로 활용합니다
            </h2>
            <p className="sec-sub">
              QVision은 카메라 영상을 분석해 차종과 통행량을 집계하고, 포트홀·
              <wbr />
              돌발상황·
              <wbr />
              작업 위험을 관제 화면에 전달하는 영상 인식 AI입니다.
            </p>
          </div>
          <div className="media-duo reveal" data-d="1">
            <figure>
              <Image
                className="shot"
                src="/ocube-content-review-2026/assets/images/solutions/qvision-traffic-monitoring.png"
                alt="QVision — 영상 기반 교통 분석"
                loading="lazy"
                width="560"
                height="204"
              />
              <figcaption className="shot-cap">
                교통 분석 — 차종 분류·
                <wbr />
                통행량 계측
              </figcaption>
            </figure>
            <figure>
              <Image
                className="shot"
                src="/ocube-content-review-2026/assets/images/solutions/qvision-pothole.png"
                alt="포트홀 검출 — 노면 파손 자동 감지"
                loading="lazy"
                width="600"
                height="211"
              />
              <figcaption className="shot-cap">노면 안전 — 포트홀 자동 검출</figcaption>
            </figure>
          </div>
          <div className="hero-stats reveal" data-d="2" style={{ marginTop: "26px" }}>
            <div className="stat">
              <b>국책 주관</b>
              <span>
                공공안전 AI 국책과제 — 오큐브 주관·
                <wbr />
                KT 수요기관
              </span>
            </div>
            <div className="stat">
              <b>
                <span data-count="4">0</span>
                <i className="u">개소</i>
              </b>
              <span>세이프뱃지 안전관제 실증</span>
            </div>
            <div className="stat">
              <b>
                <span data-count="8">0</span>
                <i className="u">종</i>
              </b>
              <span>자동 돌발상황 감지(AID) 항목</span>
            </div>
          </div>
        </div>
      </section>
      <section id="arch" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Architecture</span>
            <h2>카메라에서 관제까지, 3계층으로</h2>
            <p className="sec-sub">
              현장 카메라의 영상을 <b>엣지에서 추론</b>하고, 표준 프로토콜로 수집해 <b>중앙 관제</b>
              로 잇는 엣지-투-클라우드 구조로 설계합니다.
            </p>
          </div>
          <div className="stack-diagram reveal" data-d="1">
            <div className="stack-layer">
              <span className="stack-tag">EDGE · 현장</span>
              <b>엣지 카메라 · 영상 수집</b>
              <small>
                IP 카메라(ONVIF)·
                <wbr />
                RTSP 스트림 — 이기종 CCTV를 표준 인터페이스로 연결하도록 설계
              </small>
            </div>
            <div className="stack-arrow">▼</div>
            <div className="stack-layer l-op">
              <span className="stack-tag">INFERENCE · 추론</span>
              <b>현장 엣지 AI 분석 · 영상 파이프라인</b>
              <small>
                영상 처리도구(GStreamer) 디코딩·
                <wbr />
                전처리 + 영상 인식 신경망(CNN) 기반 객체 검출·
                <wbr />
                분류·
                <wbr />
                추적 — 카메라 인접 엣지에서 실시간 처리
              </small>
            </div>
            <div className="stack-arrow">▼</div>
            <div className="stack-layer">
              <span className="stack-tag">CONTROL · 관제</span>
              <b>지도정보(GIS) 기반 중앙 통합관제</b>
              <small>
                다수 현장 이벤트를 지도 기반으로 통합 관제 — Cubeon 안전 도메인팩 위에서 결합
              </small>
            </div>
          </div>
        </div>
      </section>
      <section id="pipeline" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Pipeline</span>
            <h2>영상 한 프레임이 이벤트가 되기까지</h2>
            <p className="sec-sub">수집부터 관제까지 6단계 영상 분석 파이프라인으로 구성합니다.</p>
          </div>
          <div className="tl reveal" data-d="1">
            <div className="tl-card">
              <span className="yr">01</span>
              <h3>영상 수집</h3>
              <p>
                RTSP·
                <wbr />
                ONVIF로 IP 카메라 스트림 수집
              </p>
            </div>
            <div className="tl-card">
              <span className="yr">02</span>
              <h3>
                디코딩·
                <wbr />
                전처리
              </h3>
              <p>
                GStreamer 파이프라인으로 디코드·
                <wbr />
                프레임 정규화
              </p>
            </div>
            <div className="tl-card">
              <span className="yr">03</span>
              <h3>객체 추론</h3>
              <p>
                CNN 기반 검출·
                <wbr />
                분류 — 차종·
                <wbr />
                보행자·
                <wbr />
                노면 파손
              </p>
            </div>
            <div className="tl-card">
              <span className="yr">04</span>
              <h3>객체 추적</h3>
              <p>다중 객체 추적(multi-object tracking)으로 이동 경로 산출</p>
            </div>
            <div className="tl-card">
              <span className="yr">05</span>
              <h3>이벤트 판단</h3>
              <p>
                자동 돌발상황 감지(AID)·
                <wbr />
                오탐 억제(사람 검수)
              </p>
            </div>
            <div className="tl-card cur">
              <span className="yr">06</span>
              <h3>GIS 관제</h3>
              <p>
                지도 기반 실시간 이벤트 표출·
                <wbr />
                현장 통합 관제
              </p>
            </div>
          </div>
          <div className="feat-list reveal" data-d="2" style={{ marginTop: "22px" }}>
            <div className="feat">
              <b>엣지 전처리로 대역 절감</b>
              <span>
                원본 영상 대신 검지 이벤트·
                <wbr />
                썸네일만 센터로 보내 회선 부담을 낮추도록 설계합니다.
              </span>
            </div>
            <div className="feat">
              <b>이벤트 중심 아카이빙</b>
              <span>
                상시 저장 대신 이벤트 전후 구간 중심으로 보관해 저장 비용과 개인정보 노출을
                줄입니다.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="caps" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Capabilities</span>
            <h2>도로에서 현장까지</h2>
          </div>
          <p className="sec-sub reveal">
            교통·
            <wbr />
            노면·
            <wbr />
            작업 안전 등 현장 목적에 맞는 영상 검지 모델을 구성합니다.
          </p>
          <div className="dep-grid">
            <div className="dep-card reveal" data-d="1">
              <div className="ic" aria-hidden="true">
                🚦
              </div>
              <h3>교통 분석</h3>
              <p>
                차종 분류·
                <wbr />
                통행량 계측 — 도로 통행 데이터 분석
              </p>
            </div>
            <div className="dep-card reveal" data-d="2">
              <div className="ic" aria-hidden="true">
                🕳️
              </div>
              <h3>노면 안전</h3>
              <p>
                포트홀·
                <wbr />
                균열 등 노면 파손 영상 자동 검출
              </p>
            </div>
            <div className="dep-card reveal" data-d="3">
              <div className="ic" aria-hidden="true">
                🦺
              </div>
              <h3>작업 안전</h3>
              <p>영상+센서 융합 위험 추론 — 작업자별 위험도 산출</p>
            </div>
            <div className="dep-card reveal" data-d="4">
              <div className="ic" aria-hidden="true">
                🚶
              </div>
              <h3>
                보행자·
                <wbr />
                군중
              </h3>
              <p>
                횡단·
                <wbr />
                무단횡단·
                <wbr />
                군중 밀집도 영상 분석
              </p>
            </div>
            <div className="dep-card reveal" data-d="5">
              <div className="ic" aria-hidden="true">
                🅿️
              </div>
              <h3>주정차 관제</h3>
              <p>
                불법 주정차·
                <wbr />
                주차면 점유 자동 판별
              </p>
            </div>
            <div className="dep-card reveal" data-d="6">
              <div className="ic" aria-hidden="true">
                🌫️
              </div>
              <h3>환경 위험</h3>
              <p>
                저시정·
                <wbr />
                연기·
                <wbr />
                낙하물 등 도로 위험 요소 검지
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="detect" className="sec-anchor dark">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Incident Detection</span>
            <h2>
              도로·
              <wbr />
              현장의 위험 영상을 관제 이벤트로 전환합니다
            </h2>
            <p className="sec-sub">
              자동 돌발상황 감지(AID)가 위험 장면을 분류해 관제에 알리고, 필요하면 담당자 검수 후
              현장 대응으로 이어지게 구성합니다.
            </p>
          </div>
          <div className="mod-grid reveal" data-d="1">
            <div className="mod">역주행</div>
            <div className="mod">정지 차량</div>
            <div className="mod">교통 정체</div>
            <div className="mod">보행자 진입</div>
            <div className="mod">낙하물</div>
            <div className="mod">
              저시정·
              <wbr />
              연기
            </div>
            <div className="mod">노면 파손(포트홀)</div>
            <div className="mod">
              통행량·
              <wbr />
              차종
            </div>
          </div>
          <p className="sec-note">
            검지 항목은 현장 요건에 맞춰 확장하며, 오탐을 줄이기 위해 사람 검수 단계를 둘 수
            있습니다. 개인영상정보 비식별 처리는 현장 요건과 관련 규정에 따라 적용합니다.
          </p>
          <div className="feat-list reveal" data-d="2" style={{ marginTop: "20px" }}>
            <div className="feat">
              <b>오탐 억제 설계</b>
              <span>
                이벤트 신뢰도 점수·
                <wbr />
                연속 프레임 확인·
                <wbr />
                사람 검수를 거쳐 확정하도록 구성합니다.
              </span>
            </div>
            <div className="feat">
              <b>
                야간·
                <wbr />
                악천후 대응
              </b>
              <span>
                저조도·
                <wbr />
                역광·
                <wbr />
                우천 환경의 검지 성능을 현장 데이터로 보정하는 접근을 취합니다.
              </span>
            </div>
            <div className="feat">
              <b>개인영상정보 보호</b>
              <span>
                비식별(블러) 처리·
                <wbr />
                접근 권한 분리·
                <wbr />
                보관 기한 관리로 영상정보 규정을 준수하도록 설계합니다.
              </span>
            </div>
          </div>
          <figure className="shot-fig reveal" data-d="3" style={{ marginTop: "20px" }}>
            <Image
              className="shot fit"
              style={{ maxHeight: "22vh" }}
              src="/ocube-content-review-2026/assets/images/solutions/screens/qdrive-city.jpg"
              alt="교통·안전 통합 관제 예시 화면 — 위험운전 히트맵 지도·돌발상황·실시간 관제"
              loading="lazy"
              width="1600"
              height="1005"
            />
            <figcaption className="shot-cap">
              교통·
              <wbr />
              안전 통합 관제(위험운전 히트맵·
              <wbr />
              돌발상황) — 프로토타입 예시 화면
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="spec" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Specification</span>
            <h2>카메라 영상을 받아 위험 이벤트와 관제 정보를 제공합니다</h2>
          </div>
          <table className="cmp reveal" data-d="1">
            <caption className="sr-only">
              카메라 영상을 받아 위험 이벤트와 관제 정보를 제공합니다 비교표
            </caption>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col" className="ok">
                  QVision
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">영상 입력</th>
                <td className="ok">
                  IP 카메라(ONVIF)·
                  <wbr />
                  RTSP 스트림 — 이기종 CCTV 연동 설계
                </td>
              </tr>
              <tr>
                <th scope="row">추론 방식</th>
                <td>현장 엣지 AI 분석(카메라 인접) + 중앙 AI 추론 서버 2티어 구성</td>
              </tr>
              <tr>
                <th scope="row">영상 처리</th>
                <td>
                  GStreamer 파이프라인 · 영상 인식 신경망(CNN) 기반 객체 검출·
                  <wbr />
                  분류·
                  <wbr />
                  다중 추적
                </td>
              </tr>
              <tr>
                <th scope="row">융합 입력</th>
                <td>영상 + 뱃지 + 환경 센서 멀티모달 융합(작업 안전)</td>
              </tr>
              <tr>
                <th scope="row">산출물</th>
                <td>
                  자동 돌발상황 감지(AID) 이벤트 · 작업자별 위험도 · 통행·
                  <wbr />
                  차종 통계
                </td>
              </tr>
              <tr>
                <th scope="row">관제</th>
                <td className="ok">GIS 지도 기반 중앙 통합관제 · Cubeon Safety Pack 연계</td>
              </tr>
            </tbody>
          </table>
          <div className="reveal" data-d="2" style={{ marginTop: "20px" }}>
            <span className="pill light">ONVIF</span> <span className="pill light">RTSP</span>
            <span className="pill light">GStreamer</span>{" "}
            <span className="pill light">CNN 객체검출</span>
            <span className="pill light">멀티모달 융합</span>
            <span className="pill light">현장 엣지 AI 분석</span>{" "}
            <span className="pill light">MQTT</span>
            <span className="pill light">GIS 관제</span>
          </div>
          <p className="sec-note">
            ONVIF·
            <wbr />
            RTSP 등 표준 프로토콜로 서로 다른 카메라와 연동하고, 주요 영상 관리 시스템(VMS)의 연계
            범위는 현장 환경에 맞춰 정합니다.
          </p>
        </div>
      </section>
      <section id="deploy" className="sec-anchor deploy">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">Deployment</span>
            <h2>클라우드부터 폐쇄망까지</h2>
            <p className="sec-sub">
              데이터 규제·
              <wbr />
              영상정보 보안 환경에 맞춰 동일 솔루션을 세 가지 형태로 배포하도록 구성합니다.
            </p>
          </div>
          <div className="dep-grid">
            <div className="dep-card reveal" data-d="1">
              <div className="ic" aria-hidden="true">
                ☁️
              </div>
              <h3>클라우드 관제</h3>
              <p>
                중앙 관제·
                <wbr />
                통계를 클라우드에 배치 — 빠른 구축·
                <wbr />
                다현장 통합
              </p>
            </div>
            <div className="dep-card reveal" data-d="2">
              <div className="ic" aria-hidden="true">
                🏢
              </div>
              <h3>온프레미스</h3>
              <p>
                사내 서버에서 영상·
                <wbr />
                데이터 내부화 — 데이터 주권 확보
              </p>
            </div>
            <div className="dep-card reveal" data-d="3">
              <div className="ic" aria-hidden="true">
                🔒
              </div>
              <h3>폐쇄망 엣지</h3>
              <p>망분리 현장에서 현장 엣지 AI 분석만으로 운영 — 영상 반출 없이 검지</p>
            </div>
          </div>
          <div className="feat-list reveal" data-d="2" style={{ marginTop: "22px" }}>
            <div className="feat">
              <b>영상 반출 가능 여부</b>
              <span>
                반출 불가 현장은 현장 엣지 AI 분석만으로 운영 — 이벤트 메타데이터만 센터로
                전송합니다.
              </span>
            </div>
            <div className="feat">
              <b>현장 수 · 관제 범위</b>
              <span>
                다지점 통합 관제가 필요하면 클라우드 중앙 관제, 단일 현장은 온프레미스가 유리합니다.
              </span>
            </div>
            <div className="feat">
              <b>회선 대역 · 지연</b>
              <span>대역이 제한된 현장은 엣지 전처리로 전송량을 줄이는 구성을 권장합니다.</span>
            </div>
          </div>
        </div>
      </section>
      <section id="proof" className="sec-anchor">
        <div className="wrap">
          <div className="reveal">
            <span className="kicker">National Project</span>
            <h2>공공안전 국책, 오큐브가 주관합니다</h2>
          </div>
          <p className="sec-sub reveal">
            공공안전 국책 과제를 <b>오큐브가 주관</b>하고, 영상·
            <wbr />
            센서 융합 기반 작업 안전 관제를 4개 현장에서 검증 중입니다.
          </p>
          <div className="feat-list reveal" data-d="1">
            <div className="feat">
              주관기관 수행 — 과제 설계·
              <wbr />
              개발·
              <wbr />
              실증 총괄
            </div>
            <div className="feat">멀티모달 융합 — 영상 + 뱃지 + 환경 센서 결합</div>
            <div className="feat">
              현장 실증 진행 중 — 밀폐·
              <wbr />
              단독 작업 환경 4개 현장
            </div>
          </div>
          <div className="case-grid two">
            <article className="case-card reveal" data-d="1">
              <span className="dom">공공안전 · 국책 (KT 수요기관)</span>
              <h3>세이프뱃지 안전 관제</h3>
              <p className="csi">
                <b>과제</b> 밀폐·
                <wbr />
                단독 작업 환경의 복합 위험을 단일 센서로 판단 불가
              </p>
              <p className="csi">
                <b>해결</b> 영상+뱃지+환경 센서를 결합해 작업자별 위험도를 실시간 산출
              </p>
              <p className="csi">
                <b>진행</b> 복합 위험 감지 체계를 4개 현장에서 검증 중
              </p>
            </article>
            <article className="case-card reveal" data-d="2">
              <span className="dom">확장</span>
              <h3>중앙 통합관제(GIS)</h3>
              <p className="csi">
                다수 현장을 지도 기반 중앙에서 통합 관제 — Cubeon Safety Pack으로 결합
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
