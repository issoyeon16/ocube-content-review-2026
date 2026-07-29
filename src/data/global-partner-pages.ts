export interface PartnerFeature {
  title: string;
  description: string;
}

export interface PartnerCard extends PartnerFeature {
  icon?: string;
  href?: string;
}

export interface PartnerShowcase {
  badge?: string;
  title?: string;
  paragraphs?: readonly string[];
  features?: readonly PartnerFeature[];
  tags?: readonly string[];
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  link?: { label: string; href: string };
}

export interface PartnerSection {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  theme?: "light" | "muted" | "dark";
  showcases?: readonly PartnerShowcase[];
  cards?: readonly PartnerCard[];
  tags?: readonly string[];
  note?: string;
}

export interface GlobalPartnerPageData {
  slug: string;
  name: string;
  hero: {
    eyebrow: string;
    title: string;
    tagline: readonly string[];
    description: string;
    imageAlt: string;
  };
  sections: readonly PartnerSection[];
}

export const globalPartnerPages = {
  qt: {
    slug: "qt",
    name: "Qt",
    hero: {
      eyebrow: "GLOBAL PARTNER · QT",
      title: "Qt",
      tagline: ["Qt", "Cross-platform Software Development"],
      description:
        "Qt는 하나의 프레임워크와 코드베이스로 데스크톱부터 임베디드 장비까지 여러 플랫폼의 애플리케이션과 사용자 화면(HMI)을 개발하도록 지원합니다.",
      imageAlt: "Qt 크로스플랫폼 소프트웨어 개발",
    },
    sections: [
      {
        id: "framework",
        eyebrow: "Qt Developer Framework",
        title: "한 코드베이스를 여러 플랫폼으로 확장하는 모듈과 도구",
        showcases: [
          {
            features: [
              {
                title: "Qt Framework 필수 모듈",
                description:
                  "주요 타겟 환경에서 공통으로 사용하는 핵심 라이브러리로, Qt 버전 정책에 따라 바이너리 및 소스 호환성을 제공합니다.",
              },
              {
                title: "Qt Framework Add-on 모듈",
                description:
                  "그래픽, 네트워크, 멀티미디어 등 필요한 기능을 추가하며 플랫폼별 특화 모듈도 제공합니다.",
              },
            ],
            image: "/ocube-content-review-2026/assets/images/partners/products/qt.png",
            imageAlt: "Qt Framework 필수 모듈과 Add-on 모듈 구성도",
            link: { label: "Qt Framework 알아보기", href: "https://www.qt.io/product/framework" },
          },
        ],
      },
      {
        id: "tools",
        eyebrow: "Qt Development Tools",
        title: "개발 도구",
        theme: "muted",
        showcases: [
          {
            reverse: true,
            features: [
              {
                title: "Qt Creator IDE",
                description:
                  "크로스플랫폼 개발 환경에서 WYSIWYG 디자인, 코드 자동완성, 시각적 디버깅과 성능 분석 기능을 함께 제공합니다.",
              },
              {
                title: "빌드 툴",
                description: "qmake와 CMake를 통해 애플리케이션 빌드 과정을 간소화합니다.",
              },
              {
                title: "테스트와 디버깅",
                description:
                  "Qt Test 기반 단위 테스트와 프로젝트에 맞는 GUI 자동화 도구 연계를 지원합니다.",
              },
            ],
            image: "/ocube-content-review-2026/assets/images/partners/products/qt-creator.png",
            imageAlt: "Qt Creator IDE 화면",
            link: {
              label: "Qt 개발 툴 알아보기",
              href: "https://www.qt.io/product/development-tools",
            },
          },
        ],
      },
      {
        id: "partner",
        eyebrow: "Partnership",
        title: "오큐브 × The Qt Company",
        description:
          "오큐브(주)는 The Qt Company의 공식 파트너입니다. 2010년 국내 최초 Nokia Qt Certified Partner 자격을 획득한 경험을 바탕으로 데스크톱 소프트웨어와 산업용 임베디드 장비 HMI 개발을 지원합니다.",
        theme: "dark",
        cards: [
          {
            title: "라이선스 안내",
            description: "프로젝트 규모·타겟에 맞는 Qt 라이선스 유형을 안내합니다.",
            href: "#contact",
          },
          {
            title: "라이선스 공급",
            description: "정품 라이선스 공급·갱신·컴플라이언스를 관리합니다.",
            href: "#contact",
          },
          {
            title: "라이선스 컨설팅",
            description: "도입 검토부터 기술 교육·통합 엔지니어링까지 지원합니다.",
            href: "#contact",
          },
        ],
      },
      {
        id: "portfolio",
        eyebrow: "Qt-based Portfolio",
        title: "Qt 기반 개발 실적",
        cards: [
          { title: "Qt Porting", description: "Qualcomm APQ8009 칩에 Qt 포팅" },
          { title: "System Aircon Monitoring", description: "시스템 에어컨 모니터링 SW" },
          { title: "Chiller HMI", description: "산업용 칠러 장비 HMI" },
          { title: "Audio Matrix Controller", description: "오디오 매트릭스 컨트롤러 모바일 앱" },
        ],
      },
    ],
  },
  telit: {
    slug: "telit",
    name: "Telit Cinterion",
    hero: {
      eyebrow: "GLOBAL PARTNER · TELIT CINTERION",
      title: "Telit Cinterion",
      tagline: ["Telit Cinterion", "M2M · IoT Modules"],
      description:
        "Telit Cinterion은 산업 장비와 차량, 자산 추적 단말을 셀룰러망에 연결하는 M2M·IoT 통신 모듈과 관련 서비스를 제공합니다.",
      imageAlt: "Telit Cinterion M2M IoT 모듈",
    },
    sections: [
      {
        id: "modules",
        eyebrow: "M2M Modules & Terminals",
        title: "다양한 셀룰러 표준을 하나의 모듈 제품군으로 지원합니다",
        showcases: [
          {
            paragraphs: [
              "Telit Cinterion 제품군은 다양한 셀룰러 표준을 지원합니다. 적용 가능한 통신 규격과 지역·통신사 인증 범위는 모델별로 확인해 적합한 모듈과 터미널을 선정합니다.",
            ],
            features: [
              {
                title: "혁신 기술 통합",
                description:
                  "Java™, GPS/GLONASS, SL Agent, SIM Access Profile 등 혁신 기술을 모듈에 통합했습니다.",
              },
              {
                title: "환경 규제 확인",
                description: "RoHS 등 환경 규제 준수 여부는 적용 제품의 인증 문서로 확인합니다.",
              },
              {
                title: "인증 범위 확인",
                description:
                  "환경·지역·통신사 인증 범위는 제품과 적용 국가에 따라 모델별로 확인합니다.",
              },
            ],
            image: "/ocube-content-review-2026/assets/images/partners/products/telit.png",
            imageAlt: "Telit Cinterion M2M·IoT 통신 모듈",
          },
        ],
        tags: [
          "저전력 이동통신(LTE Cat M1 · NB-IoT)",
          "5G · eSIM",
          "GPS/GLONASS",
          "메시지 통신(MQTT) · 기기관리 통신(LwM2M)",
          "TLS 1.2/1.3",
        ],
      },
      {
        id: "usecase",
        eyebrow: "Applications",
        title: "적용 분야",
        theme: "muted",
        cards: [
          {
            title: "산업 게이트웨이",
            description: "설비·센서 데이터를 셀룰러망으로 수집하는 산업용 게이트웨이",
          },
          { title: "자산 추적", description: "GPS/GLONASS 결합 위치 추적·관제 단말" },
          {
            title: "차량 텔레매틱스",
            description:
              "차량 운행 데이터 수집·전송 — 오큐브 충전 통신 표준(OCPP) 임베디드 모듈에 실적용",
          },
        ],
        note: "오큐브는 통신 모듈 공급 경험을 바탕으로 제품 선정, 안테나 설계와 적용 국가의 통신사 인증 준비를 함께 지원합니다.",
      },
    ],
  },
  toradex: {
    slug: "toradex",
    name: "Toradex",
    hero: {
      eyebrow: "GLOBAL PARTNER · TORADEX",
      title: "Toradex",
      tagline: ["Toradex", "System on Modules"],
      description:
        "2003년 스위스에서 설립된 Toradex는 중소 규모 임베디드 프로젝트를 위한 SoM과 캐리어 보드, 소프트웨어를 제공합니다. 소량 다품종 제품의 개발 부담을 줄이고 양산 전환을 빠르게 준비할 수 있습니다.",
      imageAlt: "Toradex System on Module",
    },
    sections: [
      {
        id: "som",
        eyebrow: "What is SoM?",
        title: "System on Module (SoM)이란?",
        showcases: [
          {
            paragraphs: [
              "System on Module(SoM) 또는 Computer on Module(CoM)은 프로세서, 메모리와 주요 입출력 기능을 작은 보드에 통합한 임베디드 컴퓨팅 모듈입니다.",
              "운영체제, 장치 드라이버와 보드 지원 패키지(BSP)가 함께 제공됩니다. 상용 SoM에 제품별 캐리어 보드를 조합하면 의료, 산업 자동화, 항공우주, 로봇 등 다양한 장비의 공통 개발 기반으로 사용할 수 있습니다.",
              "검증된 모듈을 활용해 핵심 애플리케이션 개발에 집중하고, 하드웨어 개발 위험과 제품 출시 기간을 줄일 수 있습니다.",
            ],
            image: "/ocube-content-review-2026/assets/images/partners/products/toradex-som.png",
            imageAlt: "Toradex System on Module 구조",
          },
        ],
      },
      {
        id: "benefits",
        eyebrow: "Benefits",
        title: "System on Module 사용 시 장점",
        theme: "muted",
        cards: [
          {
            icon: "/ocube-content-review-2026/assets/images/partners/icons/toradex-time-to-market.png",
            title: "시장 출시 시간 단축",
            description: "제품의 어플리케이션 개발에만 집중하게 하여 제품 출시 기간을 줄여줍니다.",
          },
          {
            icon: "/ocube-content-review-2026/assets/images/partners/icons/toradex-verified.png",
            title: "검증된 솔루션",
            description:
              "현장에서 검증된 상용 SoM을 사용해 신규 하드웨어 설계와 검증에 따르는 개발 위험을 줄입니다.",
          },
          {
            icon: "/ocube-content-review-2026/assets/images/partners/icons/toradex-performance.png",
            title: "최신 기술 채택",
            description:
              "주요 SoC와 메모리 기술을 적용한 모듈로 제품 성능을 단계적으로 확장할 수 있습니다.",
          },
          {
            icon: "/ocube-content-review-2026/assets/images/partners/icons/toradex-cost.png",
            title: "제품 개발비용 최적화",
            description: "상용 SoM을 활용해 커스텀 보드의 설계 범위와 프로젝트 비용을 줄입니다.",
          },
        ],
        showcases: [
          {
            title: "SoM + 커스텀 캐리어 보드",
            paragraphs: [
              "상용 SoM과 어플리케이션별 캐리어 보드를 조합해 제품을 구성합니다. 오큐브는 캐리어 보드 설계와 임베디드 Linux·Qt 기반 화면(HMI) 구성까지 함께 수행합니다.",
            ],
            image: "/ocube-content-review-2026/assets/images/partners/products/toradex-carrier-board.png",
            imageAlt: "SoM과 캐리어 보드 관계도",
          },
        ],
      },
      {
        id: "why",
        eyebrow: "Why Toradex",
        title: "왜 Toradex인가",
        description:
          "SoM은 성능뿐 아니라 엔지니어링 지원, 장기 공급, 제품 유지관리까지 함께 검토해야 합니다. Toradex는 개발부터 양산 이후까지 필요한 제품군과 지원 체계를 제공합니다.",
        theme: "dark",
        cards: [
          {
            title: "산업 환경 대응",
            description:
              "적용 제품에 따라 산업용 온도, 진동과 습도 조건을 지원합니다. 실제 사용 환경에 맞춰 등급과 인증 범위를 확인합니다.",
          },
          {
            title: "제품군 확장",
            description:
              "같은 제품군의 호환 모델을 선택하면 캐리어 보드 재설계 범위를 줄이며 성능을 단계적으로 확장할 수 있습니다.",
          },
          {
            title: "제품 수명 · 유지관리",
            description:
              "장기 공급과 제품 변경·하자 대응 체계를 제공합니다. 공급 기간과 지원 범위는 적용 제품별로 확인합니다.",
          },
          {
            title: "하드웨어 기능 활용",
            description:
              "제품별 부팅 최적화와 GPU·암호화 가속, 3D 렌더링 등 플랫폼의 하드웨어 기능을 적용 환경에 맞춰 활용합니다.",
          },
          {
            title: "개발 환경",
            description:
              "보드 지원 패키지(BSP)와 GPIO·디스플레이 설정, 시스템 모니터링 도구가 초기 개발과 제품별 환경 구성을 돕습니다.",
          },
          {
            title: "엔지니어링 지원",
            description:
              "개발자 센터의 심층 기술 문서와 여러 지원 채널 — 여기에 오큐브의 국내 1차 엔지니어링 지원이 더해집니다.",
          },
        ],
        tags: [
          "Colibri · Apalis · Verdin",
          "Yocto 보드 지원 패키지(BSP)",
          "Torizon 컨테이너(OCI)",
          "원격 업데이트(OTA) · 차량·산업 통신(CAN/Modbus)",
        ],
      },
    ],
  },
  visualon: {
    slug: "visualon",
    name: "VisualOn",
    hero: {
      eyebrow: "GLOBAL PARTNER · VISUALON",
      title: "VisualOn",
      tagline: ["VisualOn", "Multimedia SDK"],
      description:
        "VisualOn은 온라인 동영상 서비스(OTT)와 차량 인포테인먼트(IVI), 스마트TV·셋톱박스(STB)에서 미디어를 안정적으로 재생하고 품질을 분석하는 플레이어 개발도구(SDK)와 소프트웨어 코덱을 제공합니다.",
      imageAlt: "VisualOn 멀티미디어 SDK",
    },
    sections: [
      {
        id: "onstream",
        eyebrow: "Product Line",
        title: "VisualOn 제품군",
        showcases: [
          {
            badge: "OnStream MediaPlayer+",
            title: "다양한 OTT 기능을 제공하는 프리미엄 플레이어 개발도구(SDK)",
            paragraphs: [
              "VisualOn의 Multimedia Player Stack은 Android·iOS·tvOS·PC·Mac·스마트TV·STB 등 지원 플랫폼에서 크로스플랫폼 콘텐츠 전송과 재생을 구현합니다.",
            ],
            tags: ["HLS", "Smooth Streaming", "MPEG-DASH", "Progressive DL", "RTSP"],
            image: "/ocube-content-review-2026/assets/images/partners/products/visualon.png",
            imageAlt: "OnStream MediaPlayer+ 멀티 디바이스 재생",
          },
          {
            badge: "ExoPlayer+ · AVPlayer+",
            title: "기본 플레이어 API와 호환되는 스트리밍 솔루션",
            paragraphs: [
              "VisualOn의 올인원 미디어 클라이언트는 Android ExoPlayer와 iOS AVPlayer 등 기본 미디어 플레이어 API와 연동됩니다. 내장 분석, 콘텐츠 보호, AdFlow 관리 기능을 포함합니다.",
            ],
            image: "/ocube-content-review-2026/assets/images/partners/products/visualon-exoplayer.png",
            imageAlt: "ExoPlayer+와 AVPlayer+ 구성",
            reverse: true,
          },
          {
            badge: "HTML5 Player+ · 사용자 경험(UX) 모니터",
            title: "브라우저 재생 품질과 사용자 경험 모니터링",
            paragraphs: [
              "HTML5 환경에서 안정적인 브라우저 내 재생 경험을 제공합니다. User Experience Monitor는 클라우드 기반으로 재생 품질 지표(QoS)를 수집·분석합니다.",
            ],
            image: "/ocube-content-review-2026/assets/images/partners/products/visualon-monitor.png",
            imageAlt: "VisualOn 재생 분석 대시보드",
          },
          {
            badge: "Software Codecs",
            title: "산업 환경에 맞춘 최적화 소프트웨어 코덱",
            paragraphs: [
              "VisualOn 소프트웨어 코덱은 목표 화질과 처리 성능, 전력 조건에 맞춰 적용 환경별로 조정할 수 있습니다.",
            ],
            tags: ["H.265/HEVC", "H.264", "VP8", "WMV/VC-1", "AAC · AC3 · MP3"],
            image: "/ocube-content-review-2026/assets/images/partners/products/visualon-codecs.png",
            imageAlt: "VisualOn Media Platform 구성",
            reverse: true,
          },
        ],
      },
      {
        id: "apply",
        eyebrow: "Applications",
        title: "적용 분야",
        theme: "muted",
        cards: [
          {
            title: "차량 인포테인먼트(IVI) 미디어",
            description: "차량 인포테인먼트의 고신뢰 미디어 재생 — 오큐브 전장 개발과 직결",
          },
          {
            title: "OTT · 스트리밍",
            description: "지원되는 모바일·PC·스마트TV·STB 환경에 맞춘 스트리밍 재생",
          },
          {
            title: "방송 · 디바이스",
            description: "스마트TV·STB 등 임베디드 디바이스의 미디어 스택",
          },
        ],
      },
    ],
  },
  tuxera: {
    slug: "tuxera",
    name: "Tuxera",
    hero: {
      eyebrow: "GLOBAL PARTNER · TUXERA",
      title: "Tuxera",
      tagline: ["Tuxera", "Reliable Data Storage Solutions"],
      description:
        "Tuxera는 자동차, 스마트폰, 산업 장비의 데이터를 안정적으로 저장하고 복구하도록 돕는 파일 시스템과 플래시 메모리 관리 솔루션을 제공합니다.",
      imageAlt: "Tuxera 데이터 저장 솔루션",
    },
    sections: [
      {
        id: "products",
        eyebrow: "Tuxera Main Products",
        title: "주요 제품",
        showcases: [
          {
            features: [
              {
                title: "Tuxera Reliance Nitro",
                description:
                  "Linux와 VxWorks 등 임베디드 환경에서 사용하는 고성능 파일 시스템입니다. 갑작스러운 전원 차단 상황에서도 데이터 무결성을 유지하도록 설계됐습니다.",
              },
              {
                title: "Tuxera FlashFX Tera",
                description:
                  "NAND·NOR 플래시의 수명과 성능을 관리하는 소프트웨어입니다. 자동차, 항공우주, 의료 등 안전이 중요한 시스템에 데이터 일관성과 복구 기능을 제공합니다.",
              },
            ],
            image: "/ocube-content-review-2026/assets/images/partners/products/tuxera.png",
            imageAlt: "Tuxera 유무에 따른 데이터 무결성 비교",
          },
          {
            features: [
              {
                title: "Microsoft NTFS for Mac by Tuxera",
                description:
                  "Mac에서 Windows NTFS로 포맷된 드라이브를 읽고 쓸 수 있도록 지원 — 스마트캐싱 기술로 빠르고 안정적인 데이터 전송, NTFS 확장 속성·디스크 관리·듀얼 부팅 및 가상 머신 호환성을 제공합니다.",
              },
              {
                title: "Enterprise Solutions",
                description:
                  "대규모 네트워크·클라우드 환경에서 SMB 및 NTFS 파일 시스템을 지원하는 고성능 솔루션 — 데이터 접근 속도 향상, 파일 검색 시간 단축, 부팅 시간 감소 기능을 제공합니다.",
              },
            ],
          },
        ],
        tags: ["exFAT · NTFS · FAT", "웨어레벨링", "eMMC · UFS · SD", "Linux · VxWorks"],
      },
      {
        id: "apply",
        eyebrow: "Applications",
        title: "적용 분야",
        theme: "muted",
        cards: [
          {
            title: "차량 · 전장",
            description: "블랙박스·AVN 등 전원 차단이 잦은 차량 스토리지의 무결성 확보",
          },
          {
            title: "산업 장비",
            description: "극한 환경 산업 기기의 플래시 수명 관리와 페일세이프 저장",
          },
          {
            title: "안전 필수 시스템",
            description: "항공우주·의료 등 데이터 일관성·복구가 필수인 시스템",
          },
        ],
      },
    ],
  },
  protopie: {
    slug: "protopie",
    name: "ProtoPie",
    hero: {
      eyebrow: "GLOBAL PARTNER · PROTOPIE",
      title: "ProtoPie",
      tagline: ["ProtoPie", "Hi-fidelity Prototyping"],
      description:
        "ProtoPie는 디자이너가 코딩 없이 동적인 하이-피델리티 프로토타입을 만들고, 실제 제품에 가까운 인터랙션을 사전에 검증하도록 돕는 도구입니다.",
      imageAlt: "ProtoPie 하이피델리티 프로토타이핑",
    },
    sections: [
      {
        id: "tech",
        eyebrow: "Core Technology",
        title: "코드 없이 실제 제품에 가깝게 검증하는 핵심 기능",
        showcases: [
          {
            features: [
              {
                title: "Code-Free 인터랙션",
                description:
                  "변수(Variables)와 조건(Conditions)을 활용해 복잡한 화면 전환과 반응 로직을 코딩 없이 구현합니다.",
              },
              {
                title: "멀티 디바이스 연동",
                description:
                  "스마트폰, 태블릿, PC, 웨어러블이 서로 통신하는 프로토타입으로 실제 서비스 환경에 가까운 흐름을 검증합니다.",
              },
              {
                title: "하드웨어 센서 연동",
                description:
                  "스마트폰의 자이로스코프, 마이크, 카메라와 근접 센서 입력을 반영한 인터랙션을 설계할 수 있습니다.",
              },
              {
                title: "디자인 시스템(Components) 활용",
                description:
                  "반복되는 인터랙션을 컴포넌트로 관리해 여러 화면의 일관성을 유지하고 제작 시간을 줄입니다.",
              },
            ],
            image: "/ocube-content-review-2026/assets/images/partners/products/protopie.png",
            imageAlt: "ProtoPie 인터랙션 프로토타이핑 화면",
          },
        ],
      },
      {
        id: "industry",
        eyebrow: "Industries",
        title: "ProtoPie가 사용되는 산업",
        theme: "muted",
        cards: [
          {
            title: "모바일 & 웹 애플리케이션",
            description: "가장 일반적인 사용자 화면·경험(UI/UX) 프로토타이핑",
          },
          {
            title: "자동차 산업 (차량 사용자 화면(HMI))",
            description:
              "차량용 인포테인먼트 시스템, 디지털 클러스터, HUD 등 복잡한 시스템의 인터랙션 프로토타이핑",
          },
          {
            title: "스마트 기기 (IoT & Wearable)",
            description:
              "스마트 TV, 스마트 워치, 스마트홈 기기 등 다양한 디바이스의 UX/UI 설계 및 검증",
          },
          {
            title: "디지털 키오스크 · 가전",
            description: "리테일 키오스크, 스마트 냉장고 등 다양한 터치스크린 제품의 UX 검증",
          },
        ],
        note: "오큐브는 ProtoPie 파트너십(2024~)으로 차량 HMI·앱 UX 검증 워크플로를 함께 지원합니다.",
      },
    ],
  },
} as const satisfies Record<string, GlobalPartnerPageData>;

export type GlobalPartnerSlug = keyof typeof globalPartnerPages;
