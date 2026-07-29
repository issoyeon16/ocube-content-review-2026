export interface HomeBuildCase {
  id: string;
  title: string;
  description: string;
  image: string;
  checkIcon: string;
  href: string;
  points: string[];
}

/** 홈 구축 사례 롤링 카드. 내용과 순서는 이 배열에서 관리합니다. */
export const homeBuildCases = [
  {
    id: "robot-line-ai",
    title: "로봇 조립 라인 이상 조기 감지",
    description: "설비 신호의 이상을 발생 시점에 포착하는 제조 AI 시스템",
    image: "/ocube-content-review-2026/assets/images/home/case-robot-line.svg",
    checkIcon: "/ocube-content-review-2026/assets/icons/check-blue.svg",
    href: "/business-ax.html",
    points: [
      "로봇·설비 시계열 데이터 통합",
      "이상 징후 조기 감지와 원인 구간 추적",
      "현장 작업흐름·알람 화면 연계",
    ],
  },
  {
    id: "vehicle-hmi",
    title: "차량용 사용자 화면(HMI) 플랫폼",
    description: "차량 환경에 최적화된 사용자 화면(HMI) 소프트웨어 개발과 양산 검증",
    image: "/ocube-content-review-2026/assets/images/home/case-vehicle-hmi.svg",
    checkIcon: "/ocube-content-review-2026/assets/icons/check-purple.svg",
    href: "/business-embedded.html",
    points: [
      "Qt·QML 기반 차량용 UI 개발",
      "Linux·QNX·차량용 Android(AAOS) 플랫폼 적용과 검증",
      "양산 품질 기준의 테스트와 검증",
    ],
  },
  {
    id: "thinq-webos",
    title: "LG ThinQ · webOS",
    description: "다양한 디바이스와 서비스를 하나의 경험으로 연결한 글로벌 플랫폼",
    image: "/ocube-content-review-2026/assets/images/home/case-thinq-webos.svg",
    checkIcon: "/ocube-content-review-2026/assets/icons/check-green.svg",
    href: "/business-si.html",
    points: [
      "사용자·관리자·업무 시스템 통합 구축",
      "다국가·다기기 운영 환경 대응",
      "안정적인 B2B 서비스 아키텍처",
    ],
  },
  {
    id: "ev-charging",
    title: "전기차 충전 플랫폼",
    description: "충전기 연동부터 관제·회원·결제까지 연결한 통합 운영 플랫폼",
    image: "/ocube-content-review-2026/assets/images/home/case-ev-charging.svg",
    checkIcon: "/ocube-content-review-2026/assets/icons/check-dark.svg",
    href: "/solution-evcp.html",
    points: [
      "OCPP 기반 충전기 연동",
      "지도 기반 실시간 관제와 장애 대응",
      "회원·결제·운영 시스템 통합",
    ],
  },
] satisfies HomeBuildCase[];
