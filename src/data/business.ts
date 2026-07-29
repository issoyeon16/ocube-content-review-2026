import type { BusinessPageData } from "@/types/business";

const areas = [
  {
    title: "공공·안전",
    description: "영상·센서 융합 안전 관제와 공공 서비스 시스템 — 영상 AI(CCTV)·세이프뱃지 국책 등",
  },
  {
    title: "금융",
    description: "모바일 금융·그룹 소통앱·플랫폼 고도화 — 금융 그룹 다년 SI 파트너",
  },
  {
    title: "제조",
    description: "설비 이상 조기감지·공정 최적화·자율운영 — 자동차부품·열처리·제지",
  },
  {
    title: "교통·모빌리티",
    description: "영상 인식 교통·안전과 모빌리티 데이터 플랫폼 — QVision·QDrive",
  },
] as const;

export const businessPages = {
  ax: {
    slug: "ax",
    hero: {
      eyebrow: "Business AX",
      title: "AI 전환 (AX)",
      tagline: ["데이터 진단부터 현장 실행까지,", "산업 AI 전환(AX)"],
      description:
        "설비·업무·문서 데이터를 분석해 AI 적용 과제를 선별합니다.\n검증된 모델로 보고를 자동화하고, 판단 결과를 담당자 승인 후 현장 조치로 연결합니다.\n자체 산업 AI 플랫폼을 기반으로 진단·검증·통합·운영을 일관된 구조로 수행합니다.",
      imageAlt: "산업 AI 전환",
    },
    steps: [
      {
        title: "AI 기회 발굴 · 데이터 진단",
        summary: "AI 적용 가치가 큰 업무를 선별하고 실제 학습에 사용할 데이터가 있는지 확인합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/ax-01-opportunity-data.webp",
        bullets: [
          "반복 판단과 대기가 몰린 업무의 AI 적용 기회 맵과 우선순위 정의",
          "PLC·SCADA·MES·ERP 데이터의 가용성·품질·라벨 진단",
          "OPC-UA·Modbus·MQTT 커넥터와 엣지 전처리 파이프라인 확보",
        ],
      },
      {
        title: "데이터 표준화 · 지식화",
        summary:
          "설비·문서·이벤트 데이터를 같은 의미 체계로 정리해 모델과 에이전트가 함께 쓰는 지식 기반을 만듭니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/ax-02-knowledge-standardization.webp",
        bullets: [
          "서로 다른 태그와 코드를 표준 스키마·온톨로지로 정규화",
          "비정형 자료는 벡터DB, 개체 관계는 지식그래프로 연결",
          "시계열·이벤트·텍스트를 하나의 의미 체계로 통합",
        ],
      },
      {
        title: "AI 모델링 · 학습",
        summary:
          "과제·보안·운영 조건에 맞는 모델을 비교해 정확도와 오탐 비용을 함께 고려한 구성을 선정합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/ax-03-model-training.webp",
        bullets: [
          "시계열 특화 모델과 생성형 AI·RAG 설계",
          "sLLM과 상용 LLM API를 보안 요건에 맞게 조합",
          "실험 추적·교차 검증과 현장 오탐 비용을 반영한 선정",
        ],
      },
      {
        title: "PoC · HITL",
        summary:
          "사전 검증으로 성과를 확인하고 사람이 검토·승인하는 절차로 자율화 범위를 안전하게 정합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/ax-04-hitl-poc.webp",
        bullets: [
          "현장 데이터 PoC로 도입 전후 효과 정량화",
          "AI 판단 근거 확인과 경계 사례의 학습 데이터 환류",
          "오탐·미탐 비용에 따른 알람 임계값과 자율화 수준 조정",
        ],
      },
      {
        title: "AI 에이전트 · 시스템 연결",
        summary: "AI를 MES·ERP·설비에 연결해 분석 결과가 보고·승인·조치로 이어지도록 구현합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/ax-05-agent-integration.webp",
        bullets: [
          "자연어 에이전트가 이상을 찾고 조치를 제안하며, 담당자가 승인한 뒤 실행하도록 연결",
          "클라우드·온프레미스·폐쇄망 배포",
          "기간계 API 연동으로 실제 업무 흐름 안에서 작동",
        ],
      },
      {
        title: "MLOps · 지속 학습",
        summary: "모델 학습·배포·성능을 지속 관리해 데이터 변화와 품질 저하에 대응합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/ax-06-mlops-cycle.webp",
        bullets: [
          "입력 분포 변화와 성능 저하 감시",
          "모델 버전·배포 이력 관리와 신속한 롤백",
          "현장 피드백과 새 데이터를 재학습 과정에 반영",
        ],
      },
    ],
    clients: [
      { name: "DGB Financial Group", logo: "/ocube-content-review-2026/assets/images/clients/dgb-financial-group.png" },
      { name: "Doosan", logo: "/ocube-content-review-2026/assets/images/clients/doosan.png" },
      { name: "LG Electronics", logo: "/ocube-content-review-2026/assets/images/clients/lg-electronics.png" },
      { name: "LS Electric", logo: "/ocube-content-review-2026/assets/images/clients/ls-electric.png" },
      { name: "SK Energy", logo: "/ocube-content-review-2026/assets/images/clients/sk-energy.png" },
    ],
    areas,
    cases: [
      {
        title: "Factory Insight AI",
        description: "설비 신호의 이상을 조기에 감지하고 현장 질의응답까지 연결합니다.",
        image: "/ocube-content-review-2026/assets/images/cases/factory-insight.jpg",
        meta: ["LSTM Autoencoder", "LLM Assistant", "LightGBM"],
      },
      {
        title: "AI Smart Optimizer",
        description: "공정 데이터를 기반으로 최적 조건과 운영 판단을 지원합니다.",
        image: "/ocube-content-review-2026/assets/images/cases/smart-optimizer.jpg",
        meta: ["XGBoost", "Transformer", "Edge Gateway"],
      },
      {
        title: "PAPERON AI",
        description: "제지 공정의 예지보전과 AI-OT 운영 체계를 구축했습니다.",
        image: "/ocube-content-review-2026/assets/images/cases/paperon-ai.jpg",
        meta: ["AI-OT", "Predictive Maintenance", "MLOps"],
      },
    ],
  },
  embedded: {
    slug: "embedded",
    hero: {
      eyebrow: "Business Embedded",
      title: "Embedded",
      tagline: ["글로벌 완성차 7개 그룹 양산에서", "검증한 임베디드 SW"],
      description:
        "차량 전장·인포테인먼트(IVI)와 산업용 디바이스 SW를 설계·통합·검증합니다.\n프로젝트 범위에 따라 보드 브링업부터 기능안전(ISO 26262)·사이버보안(ISO 21434)까지 대응합니다.\n요구 분석부터 양산 검증까지 V-model의 필요한 구간을 수행합니다.",
      imageAlt: "차량 전장 임베디드 소프트웨어",
    },
    steps: [
      {
        title: "요구 분석 · 시스템 설계",
        summary: "기능·안전 요구와 하드웨어 제약을 설계·검증 기준으로 확정합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/embedded-01-vmodel.webp",
        bullets: [
          "기능 요구와 HARA·ASIL 안전 요구 정의",
          "메모리·전력·발열을 반영한 SW 아키텍처와 검증 계획",
          "AUTOSAR Classic·Adaptive 적용 판단",
        ],
      },
      {
        title: "보드 초기 구동 · 운영체제 기반(BSP) 적용",
        summary:
          "타깃 보드에서 부트로더·커널·드라이버를 구동하고, 재현 가능한 보드 지원 패키지(BSP) 빌드 환경을 확보합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/embedded-02-board-bringup.webp",
        bullets: [
          "부트로더·커널·디바이스 드라이버를 타깃 보드에 포팅하고 주변장치를 하나씩 검증합니다",
          "Yocto 기반 보드 지원 패키지(BSP)를 구성해 누가 빌드해도 같은 결과가 나오는 재현 가능한 빌드 체계를 만듭니다",
          "초기 부팅 시간과 메모리 사용량을 측정해 양산 목표치를 조기에 설정합니다",
        ],
      },
      {
        title: "운영체제 · 플랫폼 구성",
        summary: "실시간성·앱 생태계·업데이트 요구에 맞춰 OS와 격리·복구 구조를 구성합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/embedded-03-os-platform.webp",
        bullets: [
          "QNX·RTOS와 Linux·AAOS 목적별 설계",
          "컨테이너·하이퍼바이저 기반 도메인 격리",
          "OTA A/B 파티션과 실패 시 자동 복구",
        ],
      },
      {
        title: "차량 화면(HMI) · 미들웨어 개발",
        summary:
          "차량 화면과 센서·서비스 통신을 함께 개발해 일관된 사용자 경험과 안정적인 데이터 흐름을 구현합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/embedded-04-hmi-middleware.webp",
        bullets: [
          "Qt·QML 기반 차량용 사용자 화면(HMI)를 프레임 저하를 최소화하는 응답성 기준으로 개발합니다",
          "차량 서비스 통신(SOME/IP)·차량 제어망(CAN)·차량 이더넷 등 차량 네트워크 미들웨어를 개발·통합합니다",
          "내비게이션·미디어·공조 등 도메인 앱과 서비스 계층을 구현합니다",
        ],
      },
      {
        title: "통합 검증 · 기능안전",
        summary: "HIL·실차·정적분석으로 요구사항과 기능안전·보안을 검증합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/embedded-05-hil-safety.webp",
        bullets: [
          "HIL과 실차 테스트의 요구사항 커버리지 검증",
          "ISO 26262와 ISO 21434 프로세스 적용",
          "MISRA C·단위·통합 테스트를 CI에 연결",
        ],
      },
      {
        title: "최적화 · 양산 대응",
        summary: "부팅·응답·메모리를 목표치에 맞추고 검사·업데이트 체계를 양산 라인에 연결합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/embedded-06-production-optimization.webp",
        bullets: [
          "부팅·응답·메모리 프로파일링과 최적화",
          "플래싱·검사 체계와 UDS 진단 지원",
          "UN R156 대응과 양산 이후 유지보수",
        ],
      },
    ],
    areas,
  },
  si: {
    slug: "si",
    hero: {
      eyebrow: "Business SI",
      title: "System Integration",
      tagline: ["복잡한 업무를 안정적인", "B2B·B2G 시스템으로 구현합니다"],
      description:
        "가전 플랫폼·금융 서비스·에너지 인프라의 사용자 서비스와 관리 업무를 설계합니다.\n분산된 업무와 데이터를 하나의 안정적인 운영 흐름으로 연결합니다.\n개발·보안 검증·이행·운영 서비스 수준 기준(SLA)까지 한 팀이 수행합니다.",
      imageAlt: "시스템 통합",
    },
    steps: [
      {
        title: "요구 정의 · 업무 분석",
        summary: "업무 흐름과 병목을 확인해 기능·성능·보안 요구를 측정 가능한 기준으로 정리합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/si-01-discovery-planning.webp",
        bullets: [
          "현업 인터뷰와 AS-IS 업무·예외 분석",
          "기능·성능·보안·가용성 기준 정의",
          "WBS와 마일스톤 기반 일정·리스크 관리",
        ],
      },
      {
        title: "아키텍처 · UX 설계",
        summary: "확장 구조를 정하고 실제 사용할 화면 흐름을 개발 전에 검증합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/si-02-architecture-ux.webp",
        bullets: [
          "트래픽과 데이터 규모에 맞는 MSA 판단",
          "IA·와이어프레임·프로토타입 검증",
          "KWCAG 접근성과 반응형 설계",
        ],
      },
      {
        title: "데이터 · 시스템 설계",
        summary: "데이터 구조와 API, 이행·백업·재해복구 기준을 함께 정합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/si-03-data-system-design.webp",
        bullets: [
          "ERD·데이터 사전 표준화와 이행 전략",
          "레거시·외부 시스템 API 명세",
          "백업·이중화·DR 체계 설계",
        ],
      },
      {
        title: "개발 · 통합",
        summary:
          "코드 리뷰·자동 테스트·CI/CD로 품질을 관리하고 동작하는 결과물로 진행 상황을 확인합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/si-04-development-integration.webp",
        bullets: [
          "코딩 표준·리뷰·정적분석 자동화",
          "단위·통합 테스트로 회귀 결함 방지",
          "스프린트 결과물 시연과 현업 검증",
        ],
      },
      {
        title: "품질 · 보안 검증",
        summary: "성능·보안·사용자 수용 기준을 실제 시나리오로 검증합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/si-05-quality-security.webp",
        bullets: [
          "시나리오·부하 테스트로 목표 성능 실증",
          "OWASP Top 10 점검과 취약점 조치",
          "UAT 현업 승인과 오픈 조건 확정",
        ],
      },
      {
        title: "이행 · 운영 · SLA",
        summary: "이행 리허설과 롤백 계획으로 오픈 위험을 낮추고 운영 품질을 관리합니다.",
        image: "/ocube-content-review-2026/assets/images/business/process/si-06-cutover-operations.webp",
        bullets: [
          "데이터 이행 리허설과 롤백 계획",
          "모니터링·알림과 SLA 장애 대응",
          "운영 데이터 기반 지속 고도화",
        ],
      },
    ],
    areas,
  },
  "global-tech": {
    slug: "global-tech",
    hero: {
      eyebrow: "Business Global Tech",
      title: "Global Technology",
      tagline: ["글로벌 SW 라이선스와", "국내 엔지니어링을 함께 제공합니다"],
      description:
        "정품 라이선스 조달부터 제품 선정·포팅·통합·교육까지 국내 엔지니어가 수행합니다.\n글로벌 벤더와 국내 개발팀 사이의 언어·시차·통합 이슈를 국내에서 대응합니다.\n제품 도입부터 프로젝트의 양산 단계까지 필요한 엔지니어링을 지원합니다.",
      imageAlt: "글로벌 기술과 국내 엔지니어링",
    },
  },
} satisfies Record<string, BusinessPageData>;

export type BusinessSlug = keyof typeof businessPages;
