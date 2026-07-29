import { BusinessApplications } from "@/components/business/business-applications";
import { BusinessProcess } from "@/components/business/business-process";
import { BusinessReferences } from "@/components/business/business-references";
import { BusinessTechMarquee } from "@/components/business/business-tech-marquee";
import { embeddedReferences } from "@/data/business-references";
import { EmbeddedIntro } from "./embedded-intro";
import type { BusinessPageData } from "@/types/business";

export function EmbeddedContent({ data }: { data: BusinessPageData }) {
  return (
    <div className="business-content embedded-content">
      <EmbeddedIntro />
      <BusinessTechMarquee />
      {data.steps && (
        <BusinessProcess
          steps={data.steps}
          title="Embedded"
          description={
            <>
              차량 전장과 산업용 디바이스 SW를 <b>요구 분석부터 양산 검증</b>까지 개발합니다.
              하드웨어 제약과 안전·보안 요구를 반영해 <b>6단계</b> V-model로 설계·통합·검증합니다.
            </>
          }
        />
      )}
      {data.areas && <BusinessApplications areas={data.areas} />}
      <BusinessReferences items={embeddedReferences} variant="embedded" />
    </div>
  );
}
