"use client";

import { useState, useEffect } from "react";
import { m } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { useDict } from "@/i18n/LocaleProvider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FullstackSection() {
  const dict = useDict();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  return (
    <section id="fullstack" className="relative py-20 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-[-10%] top-[10%] h-[640px] w-[640px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(160,107,255,0.20) 0%, rgba(160,107,255,0.05) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute right-[-8%] bottom-[10%] h-[520px] w-[520px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(194,156,255,0.14) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionLabel number="07" title={dict.common.layer} />

          <TextReveal
            as="h2"
            className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] text-soft-white text-balance"
          >
            {dict.fullstack.headline1}{" "}
            <span className="italic text-gradient-luxe">
              {dict.fullstack.headline2}
            </span>
          </TextReveal>

          <Reveal delay={0.3}>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-charcoal-100 md:text-[17px] text-pretty">
              {dict.fullstack.description}
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute start-3 top-0 bottom-0 w-px overflow-hidden md:start-6"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.10) 6%, rgba(255,255,255,0.10) 94%, transparent 100%)",
              }}
            />
            <m.div
              className="absolute left-0 right-0 h-32 rounded-full"
              animate={isMobile ? { y: "50%" } : { y: ["-15%", "115%"] }}
              transition={isMobile ? {} : { duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(194,156,255,0.9) 50%, transparent 100%)",
                filter: "blur(2px)",
              }}
            />
          </div>

          <div className="space-y-3 md:space-y-4">
            {dict.fullstack.layers.map((layer, i) => (
              <StackBar
                key={layer.title}
                layer={layer}
                layerLabel={dict.common.layer}
                index={i}
                total={dict.fullstack.layers.length}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function StackBar({
  layer,
  layerLabel,
  index,
  total,
}: {
  layer: { title: string; text: string };
  layerLabel: string;
  index: number;
  total: number;
}) {
  const intensity = 0.08 + (index / Math.max(1, total - 1)) * 0.20;

  return (
    <m.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: EASE }}
      whileHover={{ x: 4 }}
      className="group relative ps-10 md:ps-16"
    >
      <div
        aria-hidden="true"
        className="absolute start-3 top-1/2 -translate-x-1/2 -translate-y-1/2 md:start-6 rtl:translate-x-1/2"
      >
        <span className="relative inline-block h-3 w-3">
          <span className="absolute inset-0 rounded-full border border-amethyst-bright/60 bg-near-black" />
          <span className="absolute inset-[3px] rounded-full bg-amethyst-bright" />
          <span className="absolute inset-0 rounded-full bg-amethyst-bright blur-[6px] opacity-70 animate-pulse-glow" />
        </span>
      </div>

      <div
        className="glass relative overflow-hidden rounded-3xl p-6 transition-all duration-700 hover:border-amethyst/40 md:p-8"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(160,107,255,${intensity}) 0%, rgba(255,255,255,0.02) 60%)`,
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-12 -z-10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(160,107,255,0.30) 0%, transparent 70%)",
          }}
        />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <div className="md:w-1/4">
            <div className="mb-2 flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.3em] text-accent-light uppercase">
                {layerLabel} {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display text-[28px] leading-tight tracking-[-0.02em] text-soft-white md:text-[34px]">
              {layer.title}
            </h3>
          </div>

          <div className="md:w-3/4">
            <p className="text-[14px] leading-[1.65] text-charcoal-100 md:text-[15px] text-pretty">
              {layer.text}
            </p>
          </div>
        </div>
      </div>
    </m.article>
  );
}
