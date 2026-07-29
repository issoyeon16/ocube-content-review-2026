export interface BusinessStep {
  title: string;
  summary: string;
  bullets: readonly string[];
  image: string;
}
export interface BusinessCard {
  title: string;
  description: string;
  image?: string;
  meta?: readonly string[];
}
export interface BusinessClient {
  name: string;
  logo: string;
}
export interface BusinessPageData {
  slug: string;
  hero: {
    eyebrow: string;
    title: string;
    tagline: readonly string[];
    description: string;
    imageAlt: string;
  };
  steps?: readonly BusinessStep[];
  areas?: readonly BusinessCard[];
  cases?: readonly BusinessCard[];
  clients?: readonly BusinessClient[];
}
