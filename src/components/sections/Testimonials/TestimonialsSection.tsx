"use client";

import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { useDict } from "@/i18n/LocaleProvider";

export function TestimonialsSection() {
  const dict = useDict();

  return (
    <section id="testimonials" className="relative py-32 md:py-48">
      <Container>
        <div className="mb-16 max-w-3xl">
          <SectionLabel number="08" title={dict.testimonials.title} />
          <TextReveal
            as="h2"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em] text-soft-white text-balance"
          >
            {dict.testimonials.title}{" "}
            <span className="italic text-gradient-luxe">
              {dict.testimonials.subtitle}
            </span>
          </TextReveal>
        </div>

        <Reveal direction="up">
          <div className="glass mx-auto max-w-lg rounded-3xl p-10 text-center">
            <div className="flex flex-col items-center gap-4">
              <span className="font-display text-6xl text-charcoal-400">
                &ldquo;
              </span>
              <p className="font-display text-xl italic leading-relaxed text-charcoal-200 md:text-2xl">
                {dict.testimonials.placeholder}
              </p>
              <span className="h-px w-12 bg-border-medium" />
              <span className="font-mono text-[12px] tracking-[0.25em] text-charcoal-300 uppercase">
                {dict.testimonials.subtitle}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
