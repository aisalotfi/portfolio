"use client";

import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { useDict } from "@/i18n/LocaleProvider";

export function CurrentFocusSection() {
  const dict = useDict();

  return (
    <section id="current-focus" className="relative py-32 md:py-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute right-[-8%] top-1/4 h-[560px] w-[560px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.04) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <Container>
        <div className="mb-16 max-w-3xl">
          <SectionLabel number="04" title={dict.currentFocusSection.title} />
          <TextReveal
            as="h2"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em] text-soft-white text-balance"
          >
            {dict.currentFocusSection.title}
          </TextReveal>

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-charcoal-100 md:text-[17px] text-pretty">
              {dict.currentFocusSection.description}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dict.currentFocusSection.items.map((item, i) => (
            <Reveal key={item} delay={0.1 * i} direction="up">
              <div className="glass group relative overflow-hidden rounded-2xl p-5 transition-all duration-700 hover:border-emerald/30">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-8 -z-10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,0.25) 0%, transparent 70%)",
                  }}
                />
                <div className="relative flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-emerald-bright/40 bg-emerald-bright/10 text-[11px] font-mono text-emerald-bright">
                    {i + 1}
                  </span>
                  <p className="text-[14px] leading-snug text-charcoal-100 md:text-[15px]">
                    {item}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
