import type { SolutionPageData } from "@/types/solution";

export const solutionPages = {
  cubeon: {
    slug: "cubeon",
    hero: {
      eyebrow: "SOLUTION · INDUSTRIAL AI PLATFORM",
      title: "Cubeon",
      tagline: ["데이터에서 실행까지", "연결하는 산업 AI 플랫폼"],
      description:
        "이상 징후의 발견을 판단·승인·현장 조치로 연결하고, 검증된 업무부터 단계적으로 자율화합니다.",
      imageAlt: "Cubeon 산업 AI 플랫폼",
    },
  },
  qdata: {
    slug: "qdata",
    hero: {
      eyebrow: "SOLUTION · INDUSTRIAL DATA",
      title: "QData",
      tagline: ["흩어진 산업 데이터를", "하나의 언어로"],
      description:
        "설비·OT·업무 시스템과 문서 데이터를 수집·정제·표준화해 분석 시스템과 AI가 함께 쓰는 데이터 기반을 만듭니다.",
      imageAlt: "QData 산업 데이터 플랫폼",
    },
  },
  qfactory: {
    slug: "qfactory",
    hero: {
      eyebrow: "SOLUTION · SMART FACTORY",
      title: "QFactory",
      tagline: ["공장 전주기를 예측·최적화하는", "AI 스마트 팩토리"],
      description:
        "공정·설비·품질·에너지·안전 데이터를 연결해 이상을 예측하고 최적 운전 조건과 현장 조치를 지원합니다.",
      imageAlt: "QFactory AI 스마트 팩토리",
    },
  },
  qagent: {
    slug: "qagent",
    hero: {
      eyebrow: "SOLUTION · AI AGENT",
      title: "QAgent",
      tagline: ["자연어 하나로", "조회·분석·실행까지"],
      description:
        "흩어진 사내 데이터와 지식을 자연어로 조회·분석하고, 실행 작업은 담당자 승인 후 처리합니다.",
      imageAlt: "QAgent AI 에이전트",
    },
  },
  qdrive: {
    slug: "qdrive",
    hero: {
      eyebrow: "SOLUTION · MOBILITY",
      title: "QDrive",
      tagline: ["차량 데이터가", "서비스가 되는 지점"],
      description:
        "차량과 충전 인프라의 데이터를 수집·표준화해 운행·에너지·탄소 관리 서비스로 연결합니다.",
      imageAlt: "QDrive 모빌리티 플랫폼",
    },
  },
  evcp: {
    slug: "evcp",
    hero: {
      eyebrow: "SOLUTION · EV CHARGING",
      title: "EVCP",
      tagline: ["국제 표준 위에 세운", "전기차 충전 플랫폼"],
      description:
        "충전기 통신부터 회원·결제·정산·GIS 관제까지 충전 사업 운영 기능을 하나의 플랫폼으로 제공합니다.",
      imageAlt: "EVCP 전기차 충전 플랫폼",
    },
  },
  qvision: {
    slug: "qvision",
    hero: {
      eyebrow: "SOLUTION · VISION AI",
      title: "QVision",
      tagline: ["도로와 현장의 위험을", "먼저 보는 영상 AI"],
      description:
        "기존 CCTV 영상을 교통·안전 감지 센서로 활용해 위험 이벤트를 추론하고 GIS 중앙 관제로 연결합니다.",
      imageAlt: "QVision 영상 AI",
    },
  },
} satisfies Record<string, SolutionPageData>;

export type SolutionSlug = keyof typeof solutionPages;
