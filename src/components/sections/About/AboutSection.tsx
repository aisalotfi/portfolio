"use client";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { useDict } from "@/i18n/LocaleProvider";

export function AboutSection() {
  const dict = useDict();

  return (
    <section id="about" className="relative py-32 md:py-48">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionLabel number="01" title={dict.nav.about} />

            <TextReveal
              as="h2"
              className="font-display text-[clamp(2rem,5vw,4.25rem)] leading-[1.05] tracking-[-0.025em] text-soft-white text-balance"
            >
              {dict.about.headline}
            </TextReveal>

            <Reveal delay={0.25}>
              <p className="mt-6 max-w-xl font-display text-lg italic leading-snug text-gradient-luxe">
                {dict.about.subheadline}
              </p>
            </Reveal>

            <div className="mt-12 max-w-xl space-y-6">
              <Reveal delay={0.3}>
                <p className="text-[15px] leading-[1.75] text-charcoal-100 md:text-[17px] text-pretty">
                  {dict.about.bio1}
                </p>
              </Reveal>
              <Reveal delay={0.42}>
                <p className="text-[15px] leading-[1.75] text-charcoal-100 md:text-[17px] text-pretty">
                  {dict.about.bio2}
                </p>
              </Reveal>
              <Reveal delay={0.54}>
                <p className="text-[15px] leading-[1.75] text-charcoal-100 md:text-[17px] text-pretty">
                  {dict.about.bio3}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.7}>
              <div className="mt-12 flex items-center gap-4">
                <span
                  className="h-px w-12"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(212,165,116,0.6) 0%, rgba(212,165,116,0.05) 100%)",
                  }}
                />
                <p className="font-display text-base italic text-accent-light">
                  {dict.about.quote}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <Reveal direction="up" delay={0.4}>
              <div className="glass group relative overflow-hidden rounded-3xl p-8 transition-all duration-700 hover:border-accent/30 md:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(160,107,255,0.35) 0%, transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-accent-light uppercase">
                      {dict.about.disciplines.title}
                    </span>
                    <span className="h-px flex-1 bg-border-medium" />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-charcoal-300">
                      08
                    </span>
                  </div>

                  <StaggerReveal className="flex flex-wrap gap-2">
                    {dict.about.disciplines.items.map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-border-medium bg-surface-glass px-4 py-1.5 text-[12px] tracking-[0.04em] text-charcoal-100 backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/50 hover:text-warm-white hover:shadow-[0_0_20px_-4px_rgba(212,165,116,0.5)] sm:px-5 sm:py-2"
                      >
                        {d}
                      </span>
                    ))}
                  </StaggerReveal>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.55}>
              <div className="glass group relative overflow-hidden rounded-3xl p-8 transition-all duration-700 hover:border-accent/30 md:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(16,185,129,0.30) 0%, transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-accent-light uppercase">
                      {dict.about.principles.title}
                    </span>
                    <span className="h-px flex-1 bg-border-medium" />
                  </div>

                  <ul className="space-y-5">
                    {dict.about.principles.items.map((p, i) => (
                      <Reveal key={i} delay={0.7 + i * 0.08}>
                        <li className="flex gap-4">
                          <span className="font-display mt-0.5 w-7 shrink-0 text-base italic text-gradient-copper">
                            {i === 0 ? "i." : i === 1 ? "ii." : "iii."}
                          </span>
                          <div>
                            <p className="text-[13px] leading-snug text-charcoal-200">
                              {p}
                            </p>
                          </div>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
