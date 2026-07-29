import { CubeonSolutionContent } from "@/components/solution/pages/cubeon-solution-content";
import { EvcpSolutionContent } from "@/components/solution/pages/evcp-solution-content";
import { QagentSolutionContent } from "@/components/solution/pages/qagent-solution-content";
import { QdataSolutionContent } from "@/components/solution/pages/qdata-solution-content";
import { QdriveSolutionContent } from "@/components/solution/pages/qdrive-solution-content";
import { QfactorySolutionContent } from "@/components/solution/pages/qfactory-solution-content";
import { QvisionSolutionContent } from "@/components/solution/pages/qvision-solution-content";
import { SolutionContentFrame } from "@/components/solution/solution-content-frame";
import type { SolutionSlug } from "@/data/solutions";

const solutionContent = {
  cubeon: CubeonSolutionContent,
  evcp: EvcpSolutionContent,
  qagent: QagentSolutionContent,
  qdata: QdataSolutionContent,
  qdrive: QdriveSolutionContent,
  qfactory: QfactorySolutionContent,
  qvision: QvisionSolutionContent,
} satisfies Record<SolutionSlug, React.ComponentType>;

export function SolutionPageContent({ slug }: { slug: SolutionSlug }) {
  const Content = solutionContent[slug];
  return (
    <SolutionContentFrame>
      <Content />
    </SolutionContentFrame>
  );
}
