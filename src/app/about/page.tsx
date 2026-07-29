import type { Metadata } from "next";
import { AboutContent } from "@/app/about/about-content";

export const metadata: Metadata = {
  title: "회사소개",
  description: "오큐브의 CEO 인사말, 비전과 미션, 핵심 가치와 기업 아이덴티티를 소개합니다.",
};

export default function Page() {
  return <AboutContent />;
}
