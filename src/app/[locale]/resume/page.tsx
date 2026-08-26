import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { isLocale, getDictionary, locales, type Locale } from "@/i18n";
import { categoryLabel } from "@/data/skills";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const baseUrl = "https://aisalotfi.ir";
  return {
    title: dict.resumePage.meta.title,
    description: dict.resumePage.meta.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/resume`,
      languages: {
        en: `${baseUrl}/en/resume`,
        fa: `${baseUrl}/fa/resume`,
        de: `${baseUrl}/de/resume`,
        "x-default": `${baseUrl}/fa/resume`,
      },
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ResumePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);
  const rp = dict.resumePage;

  return (
    <main className="relative min-h-screen pb-20 pt-28 md:pt-36">
      <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-24">
        <Link
          href={`/${locale}`}
          className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-charcoal-300 transition-colors hover:text-soft-white"
        >
          <span aria-hidden="true" className="rtl:-scale-x-100">&larr;</span> {rp.backToHome}
        </Link>

        <article className="glass rounded-3xl p-7 md:p-12">
          {/* Header */}
          <header>
            <h1 className="font-display text-[clamp(1.8rem,4vw,2.75rem)] leading-tight tracking-[-0.02em] text-soft-white">
              {dict.hero.name}
            </h1>
            <p className="mt-1 font-display text-lg text-gradient-copper">
              {dict.hero.role}
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal-100 text-pretty md:text-[16px]">
              {rp.introduction}
            </p>
          </header>

          {/* Experience */}
          <ResumeSection title={rp.experienceTitle}>
            <ol className="space-y-3">
              {rp.experience.map((exp, i) => (
                <li key={i} className="glass rounded-2xl p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[14px] font-medium text-soft-white">
                      {exp.role} · <span className="font-normal text-accent-light">{exp.company}</span>
                      {exp.organization && (
                        <span className="font-normal text-charcoal-300"> — {exp.organization}</span>
                      )}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-charcoal-300">
                      {exp.period}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="mt-2 text-[13px] leading-relaxed text-charcoal-200">
                      {exp.description}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </ResumeSection>

          {/* Skills */}
          <ResumeSection title={rp.skillsTitle}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {rp.skillCategories.map((cat) => (
                <div key={cat.key}>
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-light">
                    {categoryLabel(cat.key, locale as Locale)}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5 lg:flex-col lg:gap-0">
                    {cat.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-[13px] leading-relaxed text-charcoal-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ResumeSection>

          {/* Projects */}
          <ResumeSection title={rp.projectsTitle}>
            <ul className="grid gap-3 md:grid-cols-2">
              {rp.projects.map((proj) => (
                <li key={proj.name} className="glass rounded-2xl p-5">
                  <p className="text-[14px] font-medium text-soft-white">{proj.name}</p>
                  <p className="mt-1.5 text-[12px] text-charcoal-300">{proj.tech.join(" · ")}</p>
                </li>
              ))}
            </ul>
          </ResumeSection>

          {/* Education */}
          <ResumeSection title={rp.educationTitle}>
            <div className="glass rounded-2xl p-5">
              <p className="text-[15px] font-medium text-soft-white">{rp.education.degree}</p>
              <p className="mt-1 text-[13px] text-charcoal-300">
                {rp.education.school} &middot; {rp.education.year}
              </p>
            </div>
          </ResumeSection>

          <footer className="mt-10 border-t border-border-subtle pt-6 text-center">
            <a
              href="/resume/aisa-lotfi-resume-en.pdf"
              download="aisa-lotfi-resume-en.pdf"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-accent/45 bg-accent/10 px-6 py-2.5 text-[12px] font-medium text-accent-light transition-colors hover:border-accent/70 hover:bg-accent/15"
            >
              {rp.downloadPdf}
            </a>
            <p className="text-center text-[11px] uppercase tracking-[0.18em] text-charcoal-400">
              <span className="mt-4 block">{rp.downloadNote}</span>
              <a
                href="mailto:aisalotfi2706@gmail.com"
                className="mt-2 inline-block normal-case tracking-normal transition-colors hover:text-charcoal-200"
              >
                aisalotfi2706@gmail.com
              </a>
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 border-b border-border-subtle pb-3 font-display text-xl tracking-tight text-soft-white md:text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
