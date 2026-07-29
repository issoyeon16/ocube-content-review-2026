import type { ContactNavigationGroup, OfficeAddress } from "@/types/contact";

export const contactContent = {
  eyebrow: "CONTACT",
  title: "현장의 문제를 들려주세요",
  description:
    "현장 데이터와 목표만 알려주시면, 오큐브가 축적한 도메인 경험으로 실현 가능한 접근을 함께 설계합니다.",
  email: "sales@ocube.co.kr",
  phone: "053-313-5333",
  representative: "원창연",
  businessNumber: "504-81-71345",
} as const;

export const officeAddresses = [
  { label: "DAEGU", address: "대구광역시 수성구 알파시티1로31길 18 (본사)" },
  { label: "SEOUL", address: "서울 강서구 강서로56가길 141 KM빌딩 2·3층" },
  { label: "ANYANG", address: "안양 동안구 LS로 142 금정역SKV1센터 722·723·710호" },
] satisfies OfficeAddress[];

export const contactNavigation = [
  {
    title: "비즈니스",
    links: [
      { label: "AX", href: "/business-ax.html" },
      { label: "Embedded", href: "/business-embedded.html" },
      { label: "SI", href: "/business-si.html" },
      { label: "글로벌 파트너", href: "/business/global-tech" },
    ],
  },
  {
    title: "솔루션",
    links: [
      { label: "Cubeon", href: "/solution-cubeon.html" },
      { label: "QData", href: "/solution-dataq.html" },
      { label: "QFactory", href: "/solution-factoryq.html" },
      { label: "QAgent", href: "/solution-agentq.html" },
      { label: "QDrive", href: "/solution-qdrive.html" },
      { label: "EVCP", href: "/solution-evcp.html" },
      { label: "QVision", href: "/solution-traffic.html" },
      { label: "전체 보기", href: "/solution-cubeon.html" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "회사소개", href: "/about" },
      { label: "오시는 길", href: "/location.html" },
      { label: "구축 사례", href: "/references.html" },
      { label: "문의", href: "#contact" },
    ],
  },
] satisfies ContactNavigationGroup[];
