import { ScrollReveal } from "@/components/ui/scroll-reveal";

const strengths = [
  {
    title: "과제 주관 수행 경험",
    description:
      "국책 과제 주관기관으로 과제를 직접 수행하고 현장 실증까지 완료한 경험을 보유합니다.",
  },
  {
    title: "연구개발 수행 요건",
    description: "기업부설연구소(2008년 설립)와 벤처기업·이노비즈 인증을 보유하고 있습니다.",
  },
  {
    title: "직접 수행 체계",
    description: "핵심 기획·개발·검증을 자체 인력이 수행해 산출물 품질과 일정을 직접 관리합니다.",
  },
] as const;

const steps = [
  ["STEP 01", "사전 상담", "현장 과제와 지원사업 적합성 검토"],
  ["STEP 02", "과제 기획", "목표·범위·수행 체계 정의 및 사업계획 수립"],
  ["STEP 03", "협약", "수요기업·수행기관 간 역할과 산출물 확정"],
  ["STEP 04", "수행", "데이터 수집·표준화, 모델 개발, 현장 실증"],
  ["STEP 05", "결과 평가", "산출물 정리 및 성과 검증 대응"],
  ["STEP 06", "확산·고도화", "인접 라인·타 사업장으로 단계적 확대"],
] as const;

export function SiPublicProgram() {
  return (
    <section className="si-public" id="public">
      <div className="business-wrap">
        <ScrollReveal className="si-section-head">
          <span>Public Programs</span>
          <h2>국책·정부지원사업 수행</h2>
          <p>
            AI·데이터 관련 지원사업의 과제 정의, 수행 체계와 산출물 준비, 현장 실증, 결과 평가
            대응을 수요기업과 함께 진행합니다.
          </p>
        </ScrollReveal>
        <ScrollReveal className="si-strength-grid" delay={80}>
          {strengths.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </ScrollReveal>
        <ScrollReveal className="si-program-steps" delay={160}>
          {steps.map(([number, title, description], index) => (
            <article className={index === steps.length - 1 ? "current" : ""} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </ScrollReveal>
        <ScrollReveal delay={240}>
          <p className="si-program-note">
            사전 상담부터 결과 평가와 확산·고도화까지 단계별로 함께 수행합니다.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
