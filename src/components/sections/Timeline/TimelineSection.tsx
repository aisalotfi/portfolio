"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { useDict } from "@/i18n/LocaleProvider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function TimelineSection() {
  const dict = useDict();
  const railRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 75%", "end 25%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="relative py-32 md:py-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute right-[-10%] top-[20%] h-[680px] w-[680px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(212,165,116,0.20) 0%, rgba(212,165,116,0.05) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <Container>
        <div className="mb-20 max-w-3xl">
          <SectionLabel number="06" title={dict.nav.experience} />

          <TextReveal
            as="h2"
            className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] text-soft-white text-balance"
          >
            {dict.timeline.headline1}{" "}
            <span className="italic text-gradient-luxe">
              {dict.timeline.headline2}
            </span>{" "}
            {dict.timeline.headline3}
          </TextReveal>

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-charcoal-100 md:text-[17px] text-pretty">
              {dict.timeline.description}
            </p>
          </Reveal>
        </div>

        <div ref={railRef} className="relative" style={{ position: "relative" }}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute start-5 top-0 bottom-0 w-px lg:start-1/2 lg:-translate-x-1/2 rtl:lg:translate-x-1/2"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.10) 6%, rgba(255,255,255,0.10) 94%, transparent 100%)",
              }}
            />
            <motion.div
              className="absolute inset-x-0 top-0 origin-top"
              style={{
                height: fillHeight,
                background:
                  "linear-gradient(to bottom, rgba(236,200,146,0.95) 0%, rgba(212,165,116,0.85) 50%, rgba(140,107,63,0.7) 100%)",
                boxShadow: "0 0 12px rgba(212,165,116,0.5)",
              }}
            />
          </div>

          <ol className="space-y-14 md:space-y-20">
            <TimelineItem dict={dict} />
          </ol>
        </div>
      </Container>
    </section>
  );
}

function TimelineItem({ dict }: { dict: ReturnType<typeof useDict> }) {
  return (
    <li className="relative">
      <div
        aria-hidden="true"
        className="absolute start-5 top-2 -translate-x-1/2 lg:start-1/2 rtl:translate-x-1/2"
      >
        <span className="relative inline-block h-3 w-3">
          <span className="absolute inset-0 rounded-full border border-accent/60 bg-near-black" />
          <span className="absolute inset-[3px] rounded-full bg-accent" />
          <span className="absolute inset-0 rounded-full bg-accent blur-[6px] opacity-70 animate-pulse-glow" />
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1, delay: 0.1, ease: EASE }}
        className="ps-12 lg:ps-0 lg:grid lg:grid-cols-2 lg:gap-16"
      >
        <div className="hidden lg:block" />
        <div className="lg:ps-12">
          <article className="glass group relative overflow-hidden rounded-3xl p-7 transition-all duration-700 hover:border-accent/40 md:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-12 -z-10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(212,165,116,0.30) 0%, transparent 70%)",
              }}
            />

            <p className="font-display text-[26px] leading-[1.05] tracking-[-0.02em] text-soft-white md:text-[32px]">
              {dict.timeline.currentRole}
            </p>

            <p className="mt-5 max-w-md text-[14px] leading-[1.7] text-charcoal-100 md:text-[15px] text-pretty">
              {dict.timeline.currentRoleDescription}
            </p>

            <ul className="mt-5 space-y-2">
              {dict.timeline.currentRoleAchievements.map((h, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + j * 0.08, ease: EASE }}
                  className="flex items-start gap-2.5 text-[13px] leading-snug text-charcoal-100"
                >
                  <span
                    className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                    style={{ boxShadow: "0 0 6px rgba(212,165,116,0.7)" }}
                  />
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>
          </article>
        </div>
      </motion.div>
    </li>
  );
}
