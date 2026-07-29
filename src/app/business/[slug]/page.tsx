import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BusinessDetail } from "@/components/business/business-detail";
import { businessPages, type BusinessSlug } from "@/data/business";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getBusinessPage(slug: string) {
  return businessPages[slug as BusinessSlug];
}

export function generateStaticParams() {
  return Object.keys(businessPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getBusinessPage(slug);
  return data ? { title: data.hero.title, description: data.hero.description } : {};
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const data = getBusinessPage(slug);
  if (!data) notFound();
  return <BusinessDetail data={data} />;
}
