export const globalPartners = [
  {
    id: "qt",
    badge: "Qt · 공식 파트너 (2010~)",
    title: "Qt — 크로스플랫폼 UI 프레임워크",
    description:
      "하나의 코드베이스로 데스크톱·임베디드·차량 인포테인먼트(IVI)/클러스터 화면(HMI)를 구축해 플랫폼별 중복 개발을 줄입니다. 공통 필수 모듈과 플랫폼별 Add-on 모듈을 프로젝트에 맞게 구성하고, Qt Creator 기반 설계·빌드·테스트까지 지원합니다.",
    tags: ["Qt Framework(C++)", "QML · Qt Quick", "Qt for MCUs", "Automotive Suite", "Qt Creator"],
    image: "/ocube-content-review-2026/assets/images/partners/products/qt.png",
    imageAlt: "Qt 프레임워크 구성도",
  },
  {
    id: "telit",
    badge: "Telit Cinterion · 공식 파트너",
    title: "Telit Cinterion — 셀룰러 IoT 모듈",
    description:
      "산업 게이트웨이·자산추적·차량 텔레매틱스에 필요한 셀룰러 IoT 연결을 지원합니다. 적용 환경에 맞는 모듈 선정부터 안테나 설계와 지역·통신사별 인증 범위 확인까지 함께합니다.",
    tags: ["LTE Cat M1 · NB-IoT", "5G · eSIM", "MQTT · LwM2M", "TLS 1.2/1.3", "GPS/GLONASS"],
    image: "/ocube-content-review-2026/assets/images/partners/products/telit.png",
    imageAlt: "Telit Cinterion M2M·IoT 통신 모듈",
  },
  {
    id: "toradex",
    badge: "Toradex · 공식 파트너 (2019~)",
    title: "Toradex — 산업용 SoM · 캐리어보드",
    description:
      "NXP i.MX 기반 SoM(System on Module)을 활용해 임베디드 제품의 개발·양산 부담을 줄이고, 확장성과 제품 수명을 고려한 구성을 지원합니다. Yocto BSP부터 컨테이너 기반 Torizon 운영까지 제공합니다.",
    tags: ["Colibri · Apalis · Verdin", "Yocto BSP", "Torizon 컨테이너(OCI)", "OTA · CAN · Modbus"],
    image: "/ocube-content-review-2026/assets/images/partners/products/toradex-som.png",
    imageAlt: "Toradex SoM 모듈",
  },
  {
    id: "visualon",
    badge: "VisualOn · 공식 파트너 (2017~)",
    title: "VisualOn — 멀티미디어 재생 SDK",
    description:
      "차량 IVI·OTT·방송 서비스에서 단말별 코덱·DRM·스트리밍 차이를 단일 API로 관리해 재생 편차를 줄입니다. 멀티플랫폼 플레이어와 User Experience Monitor 통합을 지원합니다.",
    tags: [
      "OnStream MediaPlayer+",
      "ExoPlayer+ · AVPlayer+",
      "HTML5 Player+",
      "H.264 · H.265/HEVC",
      "Widevine · PlayReady",
    ],
    image: "/ocube-content-review-2026/assets/images/partners/products/visualon.png",
    imageAlt: "VisualOn 멀티디바이스 미디어 재생",
  },
  {
    id: "tuxera",
    badge: "Tuxera · 파트너",
    title: "Tuxera — 임베디드 파일시스템",
    description:
      "자동차·스마트폰·산업 장비에서 예기치 않은 전원 차단과 반복 쓰기에도 데이터 무결성과 플래시 수명을 지키도록 지원합니다. Reliance Nitro와 FlashFX Tera를 함께 공급합니다.",
    tags: ["Reliance Nitro", "FlashFX Tera", "exFAT · NTFS · FAT", "웨어레벨링", "eMMC · UFS · SD"],
    image: "/ocube-content-review-2026/assets/images/partners/products/tuxera.png",
    imageAlt: "Tuxera 파일시스템 데이터 무결성",
  },
  {
    id: "protopie",
    badge: "ProtoPie · 파트너십 (2024~)",
    title: "ProtoPie — 하이피델리티 프로토타이핑",
    description:
      "차량 HMI·앱 UX를 개발 전에 실제 제품에 가까운 환경에서 검증해 화면 흐름과 인터랙션의 재작업을 줄입니다. 센서와 하드웨어를 고정밀 프로토타입에 연결할 수 있습니다.",
    tags: [
      "Studio(노코드)",
      "Connect(하드웨어 브리지)",
      "센서 트리거",
      "Components",
      "시리얼 · 소켓 · MQTT",
    ],
    image: "/ocube-content-review-2026/assets/images/partners/products/protopie.png",
    imageAlt: "ProtoPie 인터랙션 프로토타이핑",
  },
] as const;

export const technologyStack = [
  [
    "Qt",
    "HMI · UI 프레임워크",
    "Qt Framework(C++) · QML/Qt Quick · Qt Creator · Automotive Suite",
    "C++17 · OpenGL ES/Vulkan · MISRA C++",
  ],
  [
    "Toradex",
    "임베디드 컴퓨팅(SoM)",
    "NXP i.MX SoM · 커스텀 캐리어보드 · Torizon",
    "Yocto BSP · OCI 컨테이너 · OTA · CAN/Modbus/RS-485",
  ],
  [
    "Telit Cinterion",
    "셀룰러 커넥티비티",
    "LTE Cat M1 · NB-IoT · 5G 모듈 · eSIM",
    "3GPP · MQTT/LwM2M · TLS",
  ],
  [
    "VisualOn",
    "멀티미디어 · 재생",
    "멀티미디어 SDK · SW 코덱 · 적응형 재생 · DRM",
    "H.264/HEVC · HLS/MPEG-DASH · Widevine/PlayReady",
  ],
  [
    "Tuxera",
    "스토리지 · 파일시스템",
    "페일세이프 임베디드 FS · 웨어레벨링",
    "exFAT/NTFS · POSIX I/O · eMMC/UFS/SD",
  ],
  [
    "ProtoPie",
    "UX · 인터랙션 검증",
    "노코드 프로토타이핑 · 하드웨어/신호 브리지",
    "디자인과 개발 핸드오프 · 시리얼/소켓/MQTT",
  ],
] as const;

export const standards = [
  "C++17",
  "QML · Qt Quick",
  "OpenGL ES · Vulkan",
  "MISRA C/C++",
  "LTE Cat M1 · NB-IoT",
  "MQTT · LwM2M · CoAP",
  "TLS 1.2 / 1.3",
  "Yocto · Torizon(OCI)",
  "OTA · OSTree",
  "CAN · Modbus · RS-485",
  "H.264 · H.265/HEVC",
  "HLS · MPEG-DASH",
  "Widevine · PlayReady",
  "exFAT · NTFS · POSIX",
  "eMMC · UFS · SD",
  "eSIM · 3GPP",
] as const;

export const deliverySteps = [
  ["STEP 1", "라이선스 조달", "정품 라이선스 공급·갱신·컴플라이언스 관리"],
  ["STEP 2", "온보딩 · 교육", "SDK·개발환경 온보딩과 기술 교육 프로그램"],
  ["STEP 3", "통합 엔지니어링", "SDK·BSP·HMI 통합과 성능 튜닝을 직접 수행"],
  ["STEP 4", "국내 엔지니어링 지원", "국내 지원 창구에서 문의를 접수하고 1차 대응"],
  ["STEP 5", "벤더 본사 연계", "고난도 이슈를 본사로 에스컬레이션"],
] as const;
