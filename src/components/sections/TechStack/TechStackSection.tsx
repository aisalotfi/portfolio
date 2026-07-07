"use client";

import { Reveal } from "@/components/motion/Reveal";
import { StaggerReveal } from "@/components/motion/StaggerReveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { useDict } from "@/i18n/LocaleProvider";

export function TechStackSection() {
  const dict = useDict();

  return (
    <section id="tech-stack" className="relative py-20 md:py-32">
      <Container>
        <div className="mb-10 max-w-3xl">
          <SectionLabel number="03" title={dict.techStack.title} />
          <TextReveal
            as="h2"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em] text-soft-white text-balance"
          >
            {dict.techStack.title}{" "}
            <span className="italic text-gradient-luxe">
              {dict.techStack.subtitle}
            </span>
          </TextReveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dict.techStack.categories.map((cat, i) => (
            <Reveal key={cat.name} delay={0.15 * i} direction="up">
              <div className="glass group relative flex h-full overflow-hidden rounded-3xl p-7 transition-all duration-700 hover:border-accent/30 md:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-12 -z-10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 50%, rgba(212,165,116,0.25) 0%, transparent 70%)",
                  }}
                />
                <div className="relative flex flex-col">
                  <span className="font-mono text-[11px] tracking-[0.25em] text-accent-light uppercase">
                    {cat.name}
                  </span>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border-medium bg-surface-glass px-3 py-1.5 text-[12px] tracking-[0.02em] text-charcoal-100 backdrop-blur-sm lg:backdrop-blur-md transition-colors duration-500 group-hover:border-white/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
