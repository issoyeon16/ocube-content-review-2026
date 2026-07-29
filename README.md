# OCUBE Corporate Website Renewal

오큐브의 사업, 산업 AI 솔루션, 글로벌 파트너와 회사 정보를 소개하는 기업 홈페이지 개선 프로젝트다.

- 공개 검토 사이트: <https://issoyeon16.github.io/ocube-content-review-2026/>
- 배포 저장소: `issoyeon16/ocube-content-review-2026`
- 기준 언어·시간대: 한국어, Asia/Seoul

## 기술 구성

- Next.js 16 App Router
- React 19
- TypeScript 5
- CSS, GSAP, Swiper
- Next.js static export
- GitHub Actions와 GitHub Pages

## 시작하기

```bash
npm ci
npm run dev
```

`next.config.ts`에 `/ocube-content-review-2026` base path가 설정돼 있다. 로컬 개발 시에도 base path가 포함된 URL을 기준으로 링크와 자산을 확인한다.

## 명령

| 명령                   | 용도                            |
| ---------------------- | ------------------------------- |
| `npm run dev`          | 개발 서버 실행                  |
| `npm run lint`         | ESLint 정적 검사                |
| `npm run typecheck`    | TypeScript 타입 검사            |
| `npm run format:check` | Prettier 포맷 검사              |
| `npm run build`        | GitHub Pages용 정적 결과물 생성 |

현재 단위 테스트, E2E 테스트와 정적 결과물 전용 미리보기 스크립트는 없다. 배포 전에는 `npm run build`로 `out/` 생성 여부를 확인한다.

## 프로젝트 구조

```text
src/
├─ app/          Next.js 페이지와 라우트
├─ components/   화면·업무·공통 UI
├─ config/       내비게이션 등 전역 설정
├─ data/         화면 콘텐츠와 정적 데이터
├─ hooks/        모션과 UI 동작
├─ styles/       Next.js 페이지 스타일
└─ types/        TypeScript 타입

public/
├─ *.html        배포되는 레거시 Business·Solution 상세 페이지
└─ assets/       이미지, 영상, CSS와 JavaScript

docs/
└─ ai-development-handoff-guidelines.md
```

## 수정 원본 확인

이 프로젝트는 Next.js 페이지와 정적 HTML 페이지를 함께 배포한다.

- 홈, 회사 소개, 글로벌 파트너: `src/`
- Business와 Solution의 `.html` 상세 페이지: `public/*.html`
- 레거시 상세 페이지 자산: `public/assets/`
- `out/`과 `.next/`: 생성 결과물이므로 직접 수정하거나 커밋하지 않음

루트에도 일부 `*.html`과 `assets/`가 있지만 현재 Next.js export에서 공개되는 정적 파일 원본은 `public/`이다. 자세한 작업 기준은 [AGENTS.md](./AGENTS.md)를 따른다.

## AI 작업 문서

AI와 함께 작업할 때는 다음 자료를 기준으로 한다.

1. [AGENTS.md](./AGENTS.md)
2. [AI 개발 및 프론트엔드 인수인계 가이드](./docs/ai-development-handoff-guidelines.md)
3. 기능 기획서
4. 디자인 링크 또는 화면 자료
5. 확정된 업무 정책
6. API 문서가 있는 경우 API 명세

### 권장 요청문

```text
AGENTS.md와 docs/ai-development-handoff-guidelines.md를 전부 읽고,
첨부한 기능 기획과 디자인을 기존 프로젝트 구조에 맞춰 구현하세요.

새로운 기술이나 라이브러리를 임의로 도입하지 말고,
결정이 필요하면 구현 전에 선택지와 영향 범위를 알려주세요.

완료 후 변경 파일, 설계 판단, 검증 결과,
남은 작업과 프론트엔드 인수인계를 정리하세요.
```

기능 요구사항에는 목적, 사용자 흐름, 화면 상태, 업무 규칙, 완료 조건과 참고 자료를 함께 제공하는 것을 권장한다.

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 다음 작업을 수행한다.

1. `npm ci`
2. `npm run build`
3. `out/` 아티팩트 업로드
4. GitHub Pages 배포

배포 후에는 GitHub Actions 성공 여부와 실제 공개 페이지의 이미지·링크·반응형 화면을 확인한다.
