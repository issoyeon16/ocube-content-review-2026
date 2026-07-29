import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail } from "@/components/solution/solution-detail";
import { solutionPages, type SolutionSlug } from "@/data/solutions";

interface PageProps {
  params: Promise<{ slug: string }>;
}
const getSolution = (slug: string) => solutionPages[slug as SolutionSlug];

export function generateStaticParams() {
  return Object.keys(solutionPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getSolution((await params).slug);
  return data ? { title: data.hero.title, description: data.hero.description } : {};
}

export default async function Page({ params }: PageProps) {
  const data = getSolution((await params).slug);
  if (!data) notFound();
  return <SolutionDetail data={data} />;
}
