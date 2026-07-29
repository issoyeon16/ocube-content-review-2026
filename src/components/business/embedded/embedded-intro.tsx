import Image from "next/image";

export function EmbeddedIntro() {
  return (
    <section className="embedded-intro">
      <span>BUSINESS / EMBEDDED</span>
      <h2>
        <span>차량 HMI와 통신·플랫폼을 함께,</span>
        <span>양산 기준으로 개발·검증합니다</span>
      </h2>
      <div>
        <p>
          계기판·인포테인먼트·차량 통신을 하나의 개발 흐름으로 연결해 시스템 간 통합 위험을
          줄입니다.
        </p>
        <p>요구 분석과 보드 브링업부터 기능안전·보안 검증, 양산 대응까지 직접 수행합니다.</p>
      </div>
      <figure>
        <Image
          src="/ocube-content-review-2026/assets/images/solutions/qdrive-cluster.png"
          alt="차량용 클러스터 HMI — 자체 개발 예시 화면"
          width={1288}
          height={520}
        />
        <figcaption>차량용 클러스터 HMI — 자체 개발 예시 화면</figcaption>
      </figure>
    </section>
  );
}
