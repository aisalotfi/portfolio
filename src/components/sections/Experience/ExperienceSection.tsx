import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary, Locale } from "@/i18n";

interface ExperienceSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function ExperienceSection({ locale, dict }: ExperienceSectionProps) {
  return (
    <section id="experience" className="relative scroll-mt-20 py-20 md:py-32">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionLabel number="02" title={dict.experience.sectionLabel} />
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.025em] text-soft-white text-balance">
              {dict.experience.headline1}{" "}
              <span className="italic text-gradient-luxe">{dict.experience.headline2}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-charcoal-100 text-pretty md:text-[16px]">
              {dict.experience.description}
            </p>
          </Reveal>
        </div>

        <ol className="relative space-y-5 md:space-y-6">
          {dict.experience.items.map((item) => (
            <li key={item.role}>
              <Reveal>
                <article className="glass group relative overflow-hidden rounded-3xl p-7 transition-[border-color,background-color,transform] duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05] md:p-9">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                      <h3 className="font-display text-[22px] leading-tight tracking-[-0.01em] text-soft-white md:text-[26px]">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-[15px] font-medium text-accent-light">
                        {item.company}
                        {item.organization && (
                          <span className="text-charcoal-200"> · {item.organization}</span>
                        )}
                        {item.website && (
                          <>
                            <span className="text-charcoal-300"> · </span>
                            <a
                              href={item.website.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[13px] font-normal text-charcoal-200 underline decoration-border-medium underline-offset-4 transition-colors hover:text-soft-white"
                            >
                              {item.website.label}
                              <span aria-hidden="true">↗</span>
                            </a>
                          </>
                        )}
                      </p>
                      <p className="mt-4 max-w-xl text-[14px] leading-[1.7] text-charcoal-100 text-pretty md:text-[15px]">
                        {item.description}
                      </p>
                    </div>

                    <div className="shrink-0 md:text-end">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border-medium bg-surface-glass px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-soft-white">
                        {item.period}
                      </span>
                      {item.location && (
                        <p className="mt-3 text-[12px] text-charcoal-300">{item.location}</p>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
