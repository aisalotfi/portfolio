"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { useDict } from "@/i18n/LocaleProvider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProcessSection() {
  const dict = useDict();
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 80%", "end 20%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="process" className="relative py-32 md:py-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-1/3 h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.05) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <Container>
        <div className="mb-24 max-w-3xl">
          <SectionLabel number="05" title={dict.common.step} />

          <TextReveal
            as="h2"
            className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] text-soft-white text-balance"
          >
            {dict.process.headline1}{" "}
            <span className="italic text-gradient-luxe">
              {dict.process.headline2}
            </span>
          </TextReveal>

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-charcoal-100 md:text-[17px] text-pretty">
              {dict.process.description}
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
                  "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.10) 8%, rgba(255,255,255,0.10) 92%, transparent 100%)",
              }}
            />
            <motion.div
              className="absolute inset-x-0 top-0 origin-top"
              style={{
                height: fillHeight,
                background:
                  "linear-gradient(to bottom, rgba(212,165,116,0.9) 0%, rgba(52,211,153,0.9) 100%)",
                boxShadow: "0 0 12px rgba(52,211,153,0.4)",
              }}
            />
          </div>

          <ol className="space-y-16 md:space-y-20 lg:space-y-32">
            {dict.process.steps.map((step, i) => {
              const isRight = i % 2 === 1;

              return (
                <li key={step.title} className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute start-5 top-2 -translate-x-1/2 lg:start-1/2 rtl:translate-x-1/2"
                  >
                    <span className="relative inline-block h-3 w-3">
                      <span className="absolute inset-0 rounded-full border border-emerald-bright/60 bg-near-black" />
                      <span className="absolute inset-[3px] rounded-full bg-emerald-bright" />
                      <span className="absolute inset-0 rounded-full bg-emerald-bright blur-[6px] opacity-70 animate-pulse-glow" />
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 1, delay: 0.1, ease: EASE }}
                    className="ps-12 lg:ps-0 lg:grid lg:grid-cols-2 lg:gap-16"
                  >
                    <div className={`hidden lg:block ${isRight ? "" : "lg:order-2"}`} />
                    <div
                      className={`${
                        isRight ? "lg:ps-12" : "lg:pe-12 lg:order-1 lg:text-end"
                      }`}
                    >
                      <StepCard
                        step={step}
                        stepLabel={dict.common.step}
                        index={i}
                        alignEnd={!isRight}
                      />
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function StepCard({
  step,
  stepLabel,
  index,
  alignEnd,
}: {
  step: { title: string; text: string };
  stepLabel: string;
  index: number;
  alignEnd: boolean;
}) {
  return (
    <div className="glass group relative overflow-hidden rounded-3xl p-8 transition-all duration-700 hover:border-emerald/30 md:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-12 -z-10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,0.30) 0%, transparent 70%)",
        }}
      />

      <div className={`flex flex-col gap-1 ${alignEnd ? "lg:items-end" : ""}`}>
        <div
          className={`flex items-baseline gap-4 ${
            alignEnd ? "lg:flex-row-reverse" : ""
          }`}
        >
          <span
            className="font-display text-5xl italic leading-none md:text-6xl"
            style={{ color: "#34D399" }}
          >
            {index + 1}.
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-charcoal-200 uppercase">
            {stepLabel} {index + 1}
          </span>
        </div>

        <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.02em] text-soft-white md:text-[40px]">
          {step.title}
        </h3>

        <p
          className={`mt-4 max-w-md text-[15px] leading-[1.7] text-charcoal-100 text-pretty ${
            alignEnd ? "lg:ms-auto" : ""
          }`}
        >
          {step.text}
        </p>
      </div>
    </div>
  );
}
