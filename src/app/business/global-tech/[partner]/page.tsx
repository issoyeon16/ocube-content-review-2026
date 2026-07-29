import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GlobalPartnerDetail } from "@/components/business/global-tech/global-partner-detail";
import { globalPartnerPages, type GlobalPartnerSlug } from "@/data/global-partner-pages";

interface PageProps {
  params: Promise<{ partner: string }>;
}

function getPartnerPage(slug: string) {
  return globalPartnerPages[slug as GlobalPartnerSlug];
}

export function generateStaticParams() {
  return Object.keys(globalPartnerPages).map((partner) => ({ partner }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getPartnerPage((await params).partner);
  return data ? { title: data.name, description: data.hero.description } : {};
}

export default async function Page({ params }: PageProps) {
  const data = getPartnerPage((await params).partner);
  if (!data) notFound();
  return <GlobalPartnerDetail data={data} />;
}
