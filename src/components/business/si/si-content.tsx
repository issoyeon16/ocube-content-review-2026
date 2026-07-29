import { BusinessApplications } from "@/components/business/business-applications";
import { BusinessProcess } from "@/components/business/business-process";
import { BusinessReferences } from "@/components/business/business-references";
import { BusinessTechMarquee } from "@/components/business/business-tech-marquee";
import { SiPublicProgram } from "@/components/business/si/si-public-program";
import { siReferences } from "@/data/business-references";
import type { BusinessPageData } from "@/types/business";

export function SiContent({ data }: { data: BusinessPageData }) {
  return (
    <div className="business-content si-content">
      <BusinessTechMarquee />
      {data.steps && (
        <BusinessProcess
          steps={data.steps}
          title="SI · System Integration"
          description={
            <>
              B2B 서비스·공공 업무·내부 운영 시스템과 기존 데이터를 통합합니다. 요구 정의부터
              안정적인 이행과 운영까지 <b>6단계</b>로 수행합니다.
            </>
          }
        />
      )}
      {data.areas && <BusinessApplications areas={data.areas} />}
      <BusinessReferences items={siReferences} variant="si" />
      <SiPublicProgram />
    </div>
  );
}
