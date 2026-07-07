"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { useDict } from "@/i18n/LocaleProvider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function BuildLogSection() {
  const dict = useDict();
  const railRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 80%", "end 20%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="build-log" className="relative py-20 md:py-32">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionLabel number="09" title={dict.buildLog.title} />
          <TextReveal
            as="h2"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em] text-soft-white text-balance"
          >
            {dict.buildLog.title}
          </TextReveal>

          <Reveal delay={0.3}>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-charcoal-100 md:text-[17px] text-pretty">
              {dict.buildLog.description}
            </p>
          </Reveal>
        </div>

        <div ref={railRef} className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute start-5 top-0 bottom-0 w-px"
          >
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.10) 6%, rgba(255,255,255,0.10) 94%, transparent 100%)",
            }} />
            <m.div
              className="absolute inset-x-0 top-0 origin-top"
              style={{
                height: fillHeight,
                background: "linear-gradient(to bottom, rgba(212,165,116,0.9) 0%, rgba(52,211,153,0.9) 100%)",
                boxShadow: "0 0 12px rgba(52,211,153,0.4)",
              }}
            />
          </div>

          <div className="space-y-8">
            {dict.buildLog.entries.map((entry, i) => (
              <m.div
                key={entry.date + entry.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
                className="relative ps-14"
              >
                <div
                  aria-hidden="true"
                  className="absolute start-5 top-1.5 -translate-x-1/2"
                >
                  <span className="relative inline-block h-2.5 w-2.5">
                    <span className="absolute inset-0 rounded-full border border-emerald-bright/50 bg-near-black" />
                    <span className="absolute inset-[3px] rounded-full bg-emerald-bright" />
                  </span>
                </div>

                <div className="glass rounded-2xl p-5 transition-all duration-500 hover:border-emerald/30 md:p-6">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-accent-light uppercase">
                    {entry.date}
                  </span>
                  <p className="mt-2 text-[14px] leading-snug text-charcoal-100 md:text-[15px]">
                    {entry.text}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
