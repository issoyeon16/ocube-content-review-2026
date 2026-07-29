import type { BusinessCapability, TechnologyPartner } from "@/types/home-content";

/** 홈 BUSINESS 섹션 콘텐츠 */
export const businessCapabilities = [
  {
    title: "AI 전환(AX)",
    description:
      "설비·업무 데이터를 분석해 PoC(도입 전 효과를 확인하는 사전 검증)부터 MLOps(모델 학습·배포·성능관리)까지 연결합니다.",
    chips: ["진단·PoC", "구축", "MLOps"],
    icon: "/ocube-content-review-2026/assets/icons/capability-ax.svg",
    href: "/business-ax.html",
    featured: true,
  },
  {
    title: "임베디드",
    description:
      "글로벌 완성차 7개 그룹 양산 경험을 바탕으로 차량 전장과 산업용 디바이스 SW를 개발·검증합니다.",
    chips: ["차량 전장", "임베디드", "보안(ISO 21434)"],
    icon: "/ocube-content-review-2026/assets/icons/capability-embedded.svg",
    href: "/business-embedded.html",
  },
  {
    title: "SI",
    description:
      "가전 플랫폼·금융 서비스·EV 충전 플랫폼 등 B2B·B2G 시스템을 업무 분석부터 구축·이행·운영까지 수행합니다.",
    chips: ["B2B 서비스", "공공시스템", "구축·운영"],
    icon: "/ocube-content-review-2026/assets/icons/capability-si.svg",
    href: "/business-si.html",
  },
] satisfies BusinessCapability[];

/** 홈 GLOBAL TECHNOLOGY PARTNERS 콘텐츠 */
export const technologyPartners = [
  {
    name: "Qt",
    logo: "/ocube-content-review-2026/assets/images/partners/logos/qt.png",
    href: "/business/global-tech/qt",
    width: 240,
    height: 70,
  },
  {
    name: "Telit Cinterion",
    logo: "/ocube-content-review-2026/assets/images/partners/logos/telit.png",
    href: "/business/global-tech/telit",
    width: 308,
    height: 163,
  },
  {
    name: "Toradex",
    logo: "/ocube-content-review-2026/assets/images/partners/logos/toradex.png",
    href: "/business/global-tech/toradex",
    width: 240,
    height: 70,
  },
  {
    name: "VisualOn",
    logo: "/ocube-content-review-2026/assets/images/partners/logos/visualon.png",
    href: "/business/global-tech/visualon",
    width: 240,
    height: 70,
  },
  {
    name: "Tuxera",
    logo: "/ocube-content-review-2026/assets/images/partners/logos/tuxera.png",
    href: "/business/global-tech/tuxera",
    width: 418,
    height: 117,
  },
  {
    name: "ProtoPie",
    logo: "/ocube-content-review-2026/assets/images/partners/logos/protopie.png",
    href: "/business/global-tech/protopie",
    width: 411,
    height: 94,
  },
] satisfies TechnologyPartner[];
