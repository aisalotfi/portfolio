import type { MetadataRoute } from "next";
import { locales } from "@/i18n";
import { getCaseStudySlugs } from "@/data/case-studies/sadaf-stone";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aisalotfi.ir";
  const lastModified = new Date();

  const priorities: Record<string, number> = { fa: 1, en: 0.9, de: 0.8 };

  const home = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: priorities[locale] ?? 0.8,
  }));

  const subpages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}/resume`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...getCaseStudySlugs().map((slug) => ({
      url: `${baseUrl}/${locale}/case-study/${slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ]);

  return [...home, ...subpages];
}
