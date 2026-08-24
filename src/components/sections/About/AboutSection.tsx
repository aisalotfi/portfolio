import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary, Locale } from "@/i18n";

interface AboutSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function AboutSection({ locale, dict }: AboutSectionProps) {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <SectionLabel number="04" title={dict.about.sectionLabel} />
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.025em] text-soft-white text-balance">
                {dict.about.headline}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-3 font-display text-lg italic leading-snug text-gradient-luxe">
                {dict.about.subheadline}
              </p>
            </Reveal>

            <div className="mt-8 max-w-xl space-y-4">
              {dict.about.bio.map((paragraph, i) => (
                <Reveal key={i} delay={140 + i * 80}>
                  <p className="text-[15px] leading-[1.75] text-charcoal-100 text-pretty md:text-[16px]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={380}>
              <div className="mt-9 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="h-px w-12 rtl:rotate-180"
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

          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal delay={200}>
              <div className="glass rounded-3xl p-7 transition-colors duration-500 hover:border-accent/30 md:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent-light">
                  {dict.about.disciplines.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {dict.about.disciplines.items.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-border-medium bg-surface-glass px-4 py-1.5 text-[12px] tracking-[0.02em] text-charcoal-100 transition-colors duration-300 hover:border-accent/50 hover:text-warm-white sm:px-5"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="glass rounded-3xl p-7 transition-colors duration-500 hover:border-emerald/30 md:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-bright">
                  {dict.about.principles.title}
                </h3>
                <ul className="mt-5 space-y-4">
                  {dict.about.principles.items.map((p, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 w-6 shrink-0 font-display text-base italic text-gradient-copper"
                      >
                        {["i.", "ii.", "iii."][i]}
                      </span>
                      <p className="text-[13px] leading-snug text-charcoal-100">{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
