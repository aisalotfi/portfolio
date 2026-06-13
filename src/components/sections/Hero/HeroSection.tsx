"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useDict, useLocale } from "@/i18n/LocaleProvider";

const EASE = [0.16, 1, 0.3, 1] as const;

function JewelOrbs() {
  const mouse = useMousePosition();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute top-[18%] -left-40 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(160,107,255,0.28) 0%, rgba(160,107,255,0.08) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ x: mouse.normalizedX * -22, y: mouse.normalizedY * -22 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -top-32 right-[8%] h-[440px] w-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.22) 0%, rgba(16,185,129,0.06) 45%, transparent 70%)",
          filter: "blur(24px)",
        }}
        animate={{ x: mouse.normalizedX * 18, y: mouse.normalizedY * 14 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[-10%] h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,165,116,0.30) 0%, rgba(212,165,116,0.08) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ x: mouse.normalizedX * -14, y: mouse.normalizedY * 22 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
    </div>
  );
}

function FloatingArtifacts() {
  const dict = useDict();
  const mouse = useMousePosition();

  return (
    <div
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2, x: mouse.normalizedX * 10 }}
        transition={{ duration: 1.4, delay: 1.4, ease: EASE }}
        className="absolute top-[14%] right-[6%] w-[260px] rtl:right-auto rtl:left-[6%]"
      >
        <div className="glass-strong rounded-2xl p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          <div className="mb-3 flex items-center gap-2">
            <span className="relative inline-block h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-bright" />
              <span className="absolute inset-0 rounded-full bg-emerald-bright blur-[5px] opacity-80 animate-pulse-glow" />
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-charcoal-200 uppercase">
              {dict.hero.currentFocus}
            </span>
          </div>
          <p className="font-display text-[15px] leading-tight text-soft-white">
            {dict.hero.focusLine1}{" "}
            <span className="italic text-accent-light">
              {dict.hero.focusLine2}
            </span>
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-px flex-1 bg-border-medium" />
            <span className="font-mono text-[9px] tracking-[0.2em] text-charcoal-300 uppercase">
              W—24
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2, x: mouse.normalizedX * -12 }}
        transition={{ duration: 1.4, delay: 1.6, ease: EASE }}
        className="absolute bottom-[18%] left-[4%] w-[210px] rtl:left-auto rtl:right-[4%]"
      >
        <div className="glass-strong rounded-2xl p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          <p className="font-mono text-[9px] tracking-[0.25em] text-charcoal-200 uppercase">
            {dict.hero.opportunity}
          </p>
          <p className="mt-2 font-display text-3xl text-gradient-copper">
            {dict.hero.dash}
          </p>
          <p className="mt-1 text-[11px] leading-snug text-charcoal-200">
            {dict.hero.opportunityDesc}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: mouse.normalizedX * 14,
          y: mouse.normalizedY * -10,
        }}
        transition={{ duration: 1.6, delay: 1.9, ease: EASE }}
        className="absolute top-[48%] right-[3%] h-12 w-12 rtl:right-auto rtl:left-[3%]"
      >
        <div className="glass-strong relative flex h-full w-full items-center justify-center rounded-full">
          <span className="relative inline-block h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-accent" />
            <span className="absolute inset-0 rounded-full bg-accent blur-[6px] opacity-90 animate-pulse-glow" />
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function StatStrip() {
  const dict = useDict();
  const items = [
    { value: "< 1", label: dict.hero.stats.yearsOfCraft },
    { value: "1+", label: dict.hero.stats.shippedProducts },
    { value: "1", label: dict.hero.stats.industriesServed },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.4, ease: EASE }}
      className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border-subtle pt-6 sm:gap-x-12"
    >
      {items.map((s, i) => (
        <div key={s.label} className="flex items-baseline gap-3">
          <span className="font-display text-2xl text-gradient-copper">
            {s.value}
          </span>
          <span className="text-[11px] tracking-[0.18em] text-charcoal-200 uppercase">
            {s.label}
          </span>
          {i < items.length - 1 && (
            <span className="ms-9 hidden h-3 w-px bg-border-medium md:inline-block" />
          )}
        </div>
      ))}
    </motion.div>
  );
}

export function HeroSection() {
  const dict = useDict();
  const { locale } = useLocale();
  const isFa = locale === "fa";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28"
    >
      <JewelOrbs />
      <FloatingArtifacts />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border-medium bg-surface-glass px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative inline-block h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-bright" />
              <span className="absolute inset-0 rounded-full bg-emerald-bright blur-[5px] opacity-80 animate-pulse-glow" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] text-charcoal-100 uppercase">
              {dict.hero.badge}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            className="mb-7"
          >
            <span className="font-mono text-[11px] tracking-[0.3em] text-accent-light uppercase">
              {dict.hero.title}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.55, ease: EASE }}
            className="mb-8 font-display text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.03em] text-soft-white text-balance"
          >
            {isFa ? (
              <>
                <span className="block text-gradient-luxe">{dict.hero.line1}</span>
                <span className="block text-gradient-luxe">{dict.hero.line2}</span>
                <span className="block text-gradient-luxe">{dict.hero.line3}</span>
                <span className="block text-gradient-luxe">{dict.hero.line3After}</span>
              </>
            ) : (
              <>
                <span className="block">{dict.hero.line1}</span>
                <span className="block">{dict.hero.line2}</span>
                <span className="block italic font-normal text-gradient-luxe">
                  {dict.hero.line3} {dict.hero.line3After}
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: EASE }}
            className="mb-12 max-w-xl text-[17px] leading-[1.7] text-charcoal-100 md:text-lg text-pretty"
          >
            {dict.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              variant="jewel"
              size="lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>{dict.hero.cta1}</span>
              <ArrowRight />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>{dict.hero.cta2}</span>
            </Button>
          </motion.div>

          <StatStrip />
        </div>
      </div>

    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="transition-transform duration-500 ease-out group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
    >
      <path
        d="M1 7H13M13 7L7 1M13 7L7 13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
