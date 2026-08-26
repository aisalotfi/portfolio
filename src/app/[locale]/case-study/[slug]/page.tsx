import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { isLocale, getDictionary, locales, type Locale } from "@/i18n";
import {
  getCaseStudy,
  getCaseStudySlugs,
} from "@/data/case-studies/sadaf-stone";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getCaseStudySlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  const texts = cs.texts[locale];
  const baseUrl = "https://aisalotfi.ir";
  const pageUrl = `${baseUrl}/${locale}/case-study/${slug}`;
  const description = texts.overview.slice(0, 160);
  const imageUrl = cs.coverImage ? `${baseUrl}${cs.coverImage}` : undefined;
  return {
    title: `${texts.title} — ${texts.subtitle}`,
    description,
    alternates: {
      canonical: pageUrl,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${baseUrl}/${l}/case-study/${slug}`]),
        ["x-default", `${baseUrl}/fa/case-study/${slug}`],
      ]),
    },
    openGraph: {
      title: `${texts.title} — ${texts.subtitle}`,
      description,
      url: pageUrl,
      type: "article",
      images: imageUrl ? [{ url: imageUrl, alt: `${texts.title} — ${texts.subtitle}` }] : [],
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: `${texts.title} — ${texts.subtitle}`,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const dict = getDictionary(locale as Locale);
  const labels = dict.caseStudy;
  const t = cs.texts[locale];

  return (
    <main className="relative min-h-screen pb-24 pt-28 md:pt-36">
      <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-24">
        <Link
          href={`/${locale}/#projects`}
          className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-charcoal-300 transition-colors hover:text-soft-white"
        >
          <span aria-hidden="true" className="rtl:-scale-x-100">&larr;</span> {labels.backToProjects}
        </Link>

        <article className="glass rounded-3xl p-7 md:p-12">
          {/* Header */}
          <header className="mb-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-light">
              {dict.common.caseStudy}
            </p>
            <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] text-soft-white text-balance">
              {t.title}
            </h1>
            <p className="mt-2 text-[14px] text-charcoal-200">{t.subtitle}</p>

            <div className="mt-5 flex flex-wrap gap-2" aria-label={labels.techStackLabel}>
              {cs.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border-medium bg-white/[0.03] px-3 py-1 text-[11px] text-charcoal-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(cs.links?.live || cs.links?.github) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {cs.links?.live && (
                  <a
                    href={cs.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface-glass px-5 py-2 text-[11px] uppercase tracking-[0.15em] text-accent-light transition-colors hover:text-warm-white"
                  >
                    {dict.common.liveSite} ↗
                  </a>
                )}
                {cs.links?.github && (
                  <a
                    href={cs.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border-medium bg-surface-glass px-5 py-2 text-[11px] uppercase tracking-[0.15em] text-charcoal-100 transition-colors hover:text-soft-white"
                  >
                    {dict.common.github} ↗
                  </a>
                )}
              </div>
            )}

            {cs.coverImage && (
              cs.links?.live ? (
                <a
                  href={cs.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${dict.common.liveSite}: ${t.title}`}
                  className="mt-8 block overflow-hidden rounded-2xl border border-border-subtle"
                >
                  <Image
                    src={cs.coverImage}
                    alt={`${t.title} — ${t.subtitle}`}
                    width={1920}
                    height={1080}
                    priority
                    className="h-auto w-full transition-transform duration-700 hover:scale-[1.015]"
                  />
                </a>
              ) : (
                <Image
                  src={cs.coverImage}
                  alt={`${t.title} — ${t.subtitle}`}
                  width={1920}
                  height={1080}
                  priority
                  className="mt-8 h-auto w-full rounded-2xl border border-border-subtle"
                />
              )
            )}
          </header>

          <SectionBlock title={labels.overviewLabel}>
            <Paragraph>{t.overview}</Paragraph>
          </SectionBlock>

          <SectionBlock title={labels.problemLabel}>
            <Paragraph>{t.problem}</Paragraph>
          </SectionBlock>

          <SectionBlock title={labels.solutionLabel}>
            <Paragraph>{t.solution}</Paragraph>
          </SectionBlock>

          <SectionBlock title={labels.responsibilitiesLabel}>
            <ul>
              {t.responsibilities.map((r, i) => (
                <Bullet key={i} tone="accent">{r}</Bullet>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title={labels.challengesLabel}>
            <div className="space-y-3">
              {t.challenges.map((ch) => (
                <div key={ch.title} className="glass rounded-2xl p-5">
                  <p className="text-[14px] font-medium text-soft-white">{ch.title}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal-200">{ch.text}</p>
                </div>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock title={labels.outcomeLabel}>
            <Paragraph>{t.outcome}</Paragraph>
          </SectionBlock>

          <SectionBlock title={labels.lessonsLabel}>
            <ul>
              {t.lessons.map((lesson, i) => (
                <Bullet key={i} tone="emerald">{lesson}</Bullet>
              ))}
            </ul>
          </SectionBlock>
        </article>
      </div>
    </main>
  );
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-9 last:mb-0">
      <h2 className="mb-3 font-display text-xl tracking-tight text-soft-white md:text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] leading-[1.75] text-charcoal-100 text-pretty md:text-[16px]">
      {children}
    </p>
  );
}

function Bullet({
  tone,
  children,
}: {
  tone: "accent" | "emerald";
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 py-1 text-[14px] leading-snug text-charcoal-200">
      <span
        aria-hidden="true"
        className={`mt-2 h-1 w-1 shrink-0 rounded-full ${tone === "accent" ? "bg-accent" : "bg-emerald-bright"}`}
      />
      {children}
    </li>
  );
}
