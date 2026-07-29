import { GlobalPartnerContent } from "@/components/business/global-tech/global-partner-content";
import { SiteLayout } from "@/components/layout/site-layout";
import { SubpageHero } from "@/components/layout/subpage-hero";
import type { GlobalPartnerPageData } from "@/data/global-partner-pages";

export function GlobalPartnerDetail({ data }: { data: GlobalPartnerPageData }) {
  return (
    <SiteLayout className="business-page global-partner-page" mainId="global-partner-main">
      <SubpageHero {...data.hero} />
      <GlobalPartnerContent data={data} />
    </SiteLayout>
  );
}
