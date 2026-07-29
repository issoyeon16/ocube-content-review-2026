export interface BusinessReference {
  domain: string;
  title: string;
  lines: readonly (readonly [label: string, value: string])[];
}

export const embeddedReferences = [
  {
    domain: "자동차 전장 · 양산",
    title: "7개 완성차 그룹 양산 개발·검증",
    lines: [
      ["과제", "완성차 제조사(OEM) 규격의 고신뢰 차량 임베디드 SW 설계·검증"],
      [
        "해결",
        "Linux·QNX·차량용 Android(AAOS) 적용 · 자동차 SW 개발표준(ASPICE)·ISO-26262·ISO-21434",
      ],
      ["성과", "7개 글로벌 완성차 그룹 규격 양산 개발·검증"],
    ],
  },
  {
    domain: "차량 AVN·IVI · LG전자",
    title: "차량 AVN·IVI 미들웨어 연간 협력",
    lines: [
      ["과제", "차량용 AVN·IVI 미들웨어의 지속 개발·검증"],
      ["해결", "미들웨어·HMI 개발과 품질 검증 체계 운영"],
      ["성과", "2013년부터 이어지는 연간 협력"],
    ],
  },
  {
    domain: "에너지·모빌리티 · LG",
    title: "EV 충전기 애플리케이션 (북미향)",
    lines: [
      ["과제", "북미 시장 EV 충전기의 임베디드 앱 개발"],
      ["해결", "충전기 제어·UI 애플리케이션 설계·구현"],
      ["성과", "북미향 양산 제품 공급"],
    ],
  },
] satisfies readonly BusinessReference[];

export const siReferences = [
  {
    domain: "금융 · DGB금융그룹",
    title: "통합 금융 SI · 그룹 소통앱",
    lines: [
      ["과제", "계열 금융 앱·모바일 서비스의 구축·고도화"],
      ["해결", "HCE 선불카드 · 그룹 소통앱 · 홈페이지 고도화"],
      ["성과", "다년간 금융 그룹 SI 파트너로 운영·확장"],
    ],
  },
  {
    domain: "가전 플랫폼 · LG전자",
    title: "ThinQ · webOS · B2B Cloud",
    lines: [
      ["과제", "가전 커넥티드 서비스·webOS 앱·B2B 클라우드의 설계·구축"],
      ["해결", "ThinQ 앱 · webOS 앱·베타 고도화 · Pro:Centric·SuperSign 클라우드"],
      ["성과", "다년간 가전·플랫폼 SW 연간협력사로 공급"],
    ],
  },
  {
    domain: "에너지 · SK에너지",
    title: "EV 충전 플랫폼 구축",
    lines: [
      ["과제", "충전 인프라의 관제·운영 시스템 구축"],
      ["해결", "충전기 연동·관제·과금 시스템을 기획부터 구축까지 일괄 수행"],
      ["성과", "EV 충전 플랫폼 구축 경험을 EVCP 제품으로 확장"],
    ],
  },
] satisfies readonly BusinessReference[];
