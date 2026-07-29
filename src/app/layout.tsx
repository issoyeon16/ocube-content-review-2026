import type { Metadata } from "next";
import "../styles/fonts.css";
import "../styles/site.css";
import "../styles/site-header.css";
import "../styles/home-hero.css";
import "../styles/home-typo.css";
import "../styles/home-global-tech.css";
import "../styles/home-cases.css";
import "../styles/about.css";
import "../styles/subpage-hero.css";
import "../styles/motion.css";
import "../styles/business.css";
import "../styles/business-ax.css";
import "../styles/business-embedded.css";
import "../styles/business-si.css";
import "../styles/business-global-tech.css";
import "../styles/global-partner-detail.css";
import "../styles/solution.css";
import "../styles/solution-content.css";
import "../styles/site-footer.css";

export const metadata: Metadata = {
  title: { default: "오큐브(주) — Embedded에서 AI까지", template: "%s | 오큐브" },
  description:
    "임베디드·SI 기술력 위에 산업 AI 플랫폼을 더해 제조·자동차·에너지 현장의 문제를 해결합니다.",
  metadataBase: new URL("https://issoyeon16.github.io/ocube-content-review-2026/"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
