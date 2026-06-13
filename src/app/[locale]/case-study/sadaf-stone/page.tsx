import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { isLocale, getDictionary, locales, type Locale } from "@/i18n";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: `${dict.featuredProject.subtitle} — ${dict.common.caseStudy} | Aisa Lotfi`,
    description: dict.caseStudy.projectOverview.slice(0, 160),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);
  const d = dict.featuredProject;
  const cs = dict.caseStudy;

  return (
    <main className="relative min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-24">
        <Link
          href={`/${locale}`}
          className="mb-12 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-charcoal-300 uppercase transition-colors hover:text-soft-white"
        >
          &larr; Back to home
        </Link>

        <div className="glass rounded-3xl p-8 md:p-12">
          {/* Header */}
          <div className="mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent-light uppercase">
              {dict.common.caseStudy}
            </span>
            <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.03em] text-soft-white">
              {d.subtitle}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {d.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border-medium bg-surface-glass px-3 py-1 text-[11px] text-charcoal-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            {d.liveLink && (
              <a
                href={d.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2 text-[11px] tracking-[0.15em] text-soft-white uppercase transition-all duration-500 hover:border-accent/40 hover:text-accent-light"
              >
                {dict.common.liveSite}
              </a>
            )}
          </div>

          {/* Overview */}
          <SectionBlock title="Project Overview">
            <p className="text-[15px] leading-relaxed text-charcoal-100 md:text-[16px]">
              {cs.projectOverview}
            </p>
          </SectionBlock>

          {/* Problem */}
          <SectionBlock title="Problem">
            <p className="text-[15px] leading-relaxed text-charcoal-100 md:text-[16px]">
              {cs.problem}
            </p>
          </SectionBlock>

          {/* Solution */}
          <SectionBlock title="Solution">
            <p className="text-[15px] leading-relaxed text-charcoal-100 md:text-[16px]">
              {cs.solution}
            </p>
          </SectionBlock>

          {/* Responsibilities */}
          <SectionBlock title="Responsibilities">
            <ul className="space-y-2">
              {cs.responsibilities.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[14px] leading-snug text-charcoal-200"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </SectionBlock>

          {/* Tech Stack */}
          <SectionBlock title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {cs.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border-medium bg-surface-glass px-3 py-1.5 text-[12px] text-charcoal-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SectionBlock>

          {/* Challenges */}
          <SectionBlock title="Challenges">
            <div className="space-y-4">
              {cs.challenges.map((ch) => (
                <div
                  key={ch.title}
                  className="glass rounded-2xl p-5"
                >
                  <p className="text-[14px] font-medium text-soft-white">
                    {ch.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-charcoal-200">
                    {ch.text}
                  </p>
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* Outcome */}
          <SectionBlock title="Outcome">
            <p className="text-[15px] leading-relaxed text-charcoal-100 md:text-[16px]">
              {cs.outcome}
            </p>
          </SectionBlock>

          {/* Lessons Learned */}
          <SectionBlock title="Lessons Learned">
            <ul className="space-y-2">
              {cs.lessonsLearned.map((l, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[14px] leading-snug text-charcoal-200"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-bright" />
                  {l}
                </li>
              ))}
            </ul>
          </SectionBlock>
        </div>
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
    <div className="mb-10 last:mb-0">
      <h2 className="mb-4 font-display text-xl tracking-tight text-soft-white md:text-2xl">
        {title}
      </h2>
      {children}
    </div>
  );
}
