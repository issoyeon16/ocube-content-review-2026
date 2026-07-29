import { SiteLayout } from "@/components/layout/site-layout";
import { SubpageHero } from "@/components/layout/subpage-hero";
import { SolutionPageContent } from "@/components/solution/solution-page-content";
import type { SolutionSlug } from "@/data/solutions";
import type { SolutionPageData } from "@/types/solution";

export function SolutionDetail({ data }: { data: SolutionPageData }) {
  return (
    <SiteLayout className="solution-page" mainId="solution-main">
      <SubpageHero {...data.hero} />
      <SolutionPageContent slug={data.slug as SolutionSlug} />
    </SiteLayout>
  );
}
