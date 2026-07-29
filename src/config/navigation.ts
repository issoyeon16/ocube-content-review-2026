export interface HeaderMenuLink {
  label: string;
  href: string;
  description: string;
}

export interface HeaderMenuGroup {
  title: string;
  links: readonly HeaderMenuLink[];
}

export interface HeaderMenuItem {
  label: string;
  href: string;
  activePaths: readonly string[];
  groups: readonly HeaderMenuGroup[];
}

export const headerNavigation = [
  {
    label: "비즈니스",
    href: "/business-ax.html",
    activePaths: ["/business-ax.html", "/business-embedded.html", "/business-si.html"],
    groups: [
      {
        title: "BUSINESS",
        links: [
          { label: "AX", href: "/business-ax.html", description: "AI 전환·프로젝트 수행" },
          {
            label: "Embedded",
            href: "/business-embedded.html",
            description: "차량 전장·설비제어·엣지·보안",
          },
          { label: "SI", href: "/business-si.html", description: "기업·공공 시스템 구축·운영" },
        ],
      },
    ],
  },
  {
    label: "솔루션",
    href: "/solution-cubeon.html",
    activePaths: ["/solution-"],
    groups: [
      {
        title: "AI 플랫폼",
        links: [
          { label: "Cubeon", href: "/solution-cubeon.html", description: "산업 AI 운영 플랫폼" },
          { label: "QData", href: "/solution-dataq.html", description: "산업 데이터 플랫폼" },
          { label: "QFactory", href: "/solution-factoryq.html", description: "AI 스마트 팩토리" },
          { label: "QAgent", href: "/solution-agentq.html", description: "AI 에이전트" },
        ],
      },
      {
        title: "산업 솔루션",
        links: [
          { label: "QDrive", href: "/solution-qdrive.html", description: "모빌리티·탄소중립" },
          { label: "EVCP", href: "/solution-evcp.html", description: "전기차 충전 플랫폼" },
          { label: "QVision", href: "/solution-traffic.html", description: "영상 인식 교통·안전" },
        ],
      },
    ],
  },
  {
    label: "글로벌 파트너",
    href: "/business/global-tech",
    activePaths: ["/business/global-tech"],
    groups: [
      {
        title: "GLOBAL TECH",
        links: [
          {
            label: "Qt",
            href: "/business/global-tech/qt",
            description: "크로스플랫폼 UI 프레임워크",
          },
          {
            label: "Telit Cinterion",
            href: "/business/global-tech/telit",
            description: "셀룰러 IoT 모듈",
          },
          {
            label: "Toradex",
            href: "/business/global-tech/toradex",
            description: "산업용 컴퓨터 모듈·캐리어보드",
          },
          {
            label: "VisualOn",
            href: "/business/global-tech/visualon",
            description: "멀티미디어 재생 개발도구",
          },
          {
            label: "Tuxera",
            href: "/business/global-tech/tuxera",
            description: "파일시스템·스토리지",
          },
          {
            label: "ProtoPie",
            href: "/business/global-tech/protopie",
            description: "하이피델리티 프로토타이핑",
          },
        ],
      },
    ],
  },
  {
    label: "회사",
    href: "/about",
    activePaths: ["/about"],
    groups: [
      {
        title: "COMPANY",
        links: [
          { label: "About Ocube", href: "/about", description: "인사말·비전·기업 아이덴티티" },
          { label: "History", href: "/company.html#history", description: "연혁·주요 이정표" },
          { label: "Use Cases", href: "/references.html", description: "레퍼런스·파트너" },
          { label: "Location", href: "/location.html", description: "대구·서울·안양" },
        ],
      },
    ],
  },
] as const satisfies readonly HeaderMenuItem[];
