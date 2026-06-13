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
    title: dict.resumePage.meta.title,
    description: dict.resumePage.meta.description,
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
    <main className="relative min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-24">
        <Link
          href={`/${locale}`}
          className="mb-12 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-charcoal-300 uppercase transition-colors hover:text-soft-white"
        >
          &larr; {rp.backToHome}
        </Link>

        <div className="glass rounded-3xl p-8 md:p-12">
          {/* Intro */}
          <p className="text-[15px] leading-relaxed text-charcoal-100 md:text-[17px]">
            {rp.introduction}
          </p>

          {/* Skills */}
          <h2 className="mt-12 font-display text-2xl tracking-tight text-soft-white md:text-3xl">
            {rp.skillsTitle}
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {rp.skillCategories.map((cat) => (
              <div key={cat.name}>
                <span className="font-mono text-[10px] tracking-[0.25em] text-accent-light uppercase">
                  {cat.name}
                </span>
                <ul className="mt-3 space-y-1.5">
                  {cat.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-[13px] text-charcoal-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <h2 className="mt-12 font-display text-2xl tracking-tight text-soft-white md:text-3xl">
            {rp.educationTitle}
          </h2>
          <div className="glass mt-4 rounded-2xl p-5">
            <p className="text-[15px] font-medium text-soft-white">
              {rp.education.degree}
            </p>
            <p className="mt-1 text-[13px] text-charcoal-300">
              {rp.education.school} &middot; {rp.education.year}
            </p>
          </div>

          {/* Projects */}
          <h2 className="mt-12 font-display text-2xl tracking-tight text-soft-white md:text-3xl">
            {rp.projectsTitle}
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {rp.projects.map((proj) => (
              <div key={proj.name} className="glass rounded-2xl p-5">
                <p className="text-[14px] font-medium text-soft-white">
                  {proj.name}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border-medium bg-surface-glass px-2.5 py-0.5 text-[10px] text-charcoal-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          {rp.experience.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-2xl tracking-tight text-soft-white md:text-3xl">
                {rp.experienceTitle}
              </h2>
              <div className="mt-4 space-y-3">
                {rp.experience.map((exp, i) => (
                  <div key={i} className="glass rounded-2xl p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-[14px] font-medium text-soft-white">
                        {exp.role}
                      </p>
                      <span className="font-mono text-[10px] tracking-[0.15em] text-charcoal-300">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-charcoal-200">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Download CTA */}
          <div className="mt-12 flex justify-center">
            <Link
              href="#"
              className="glass inline-flex items-center gap-2 rounded-full px-8 py-3 text-[12px] tracking-[0.12em] text-soft-white uppercase transition-all duration-500 hover:border-accent/40 hover:text-accent-light"
            >
              {rp.downloadCta}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
