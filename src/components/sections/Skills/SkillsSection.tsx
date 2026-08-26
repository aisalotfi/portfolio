import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { categoryLabel } from "@/data/skills";
import type { Dictionary, Locale } from "@/i18n";

interface SkillsSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function SkillsSection({ locale, dict }: SkillsSectionProps) {
  return (
    <section id="skills" className="relative scroll-mt-20 py-20 md:py-32">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionLabel number="03" title={dict.skills.sectionLabel} />
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.025em] text-soft-white text-balance">
              {dict.skills.headline1}{" "}
              <span className="italic text-gradient-luxe">{dict.skills.headline2}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-charcoal-100 text-pretty md:text-[16px]">
              {dict.skills.description}
            </p>
          </Reveal>
        </div>

        {/* Core stack — the eight technologies that define daily work */}
        <Reveal>
          <div className="mb-8 rounded-3xl border border-accent/25 bg-surface-glass p-7 shadow-[0_24px_70px_-48px_rgba(212,165,116,0.55)] transition-[border-color,box-shadow] duration-500 hover:border-accent/40 hover:shadow-[0_26px_80px_-44px_rgba(212,165,116,0.7)] md:p-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-light">
              {dict.skills.coreLabel}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {dict.skills.coreStack.map((tech) => (
                <li
                  key={tech}
                  className="font-display text-xl text-soft-white md:text-2xl"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Categorized skills */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.skills.categories.map((cat, i) => (
            <Reveal key={cat.key} delay={Math.min(i * 60, 240)}>
              <div className="glass h-full rounded-3xl p-6 transition-[border-color,background-color,transform] duration-500 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.05] md:p-7">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-light">
                  {categoryLabel(cat.key, locale)}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border-medium bg-white/[0.03] px-3 py-1 text-[12px] leading-relaxed text-charcoal-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
