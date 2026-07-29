import { AxContent } from "@/components/business/ax/ax-content";
import { EmbeddedContent } from "@/components/business/embedded/embedded-content";
import { GlobalTechContent } from "@/components/business/global-tech/global-tech-content";
import { SiContent } from "@/components/business/si/si-content";
import { SiteLayout } from "@/components/layout/site-layout";
import { SubpageHero } from "@/components/layout/subpage-hero";
import type { BusinessPageData } from "@/types/business";

export function BusinessDetail({ data }: { data: BusinessPageData }) {
  return (
    <SiteLayout className="business-page" mainId="business-main">
      <SubpageHero {...data.hero} />

      {data.slug === "ax" && <AxContent data={data} />}
      {data.slug === "embedded" && <EmbeddedContent data={data} />}
      {data.slug === "si" && <SiContent data={data} />}
      {data.slug === "global-tech" && <GlobalTechContent />}
    </SiteLayout>
  );
}
