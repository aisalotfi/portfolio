"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { useDict } from "@/i18n/LocaleProvider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function EngineeringSection() {
  const dict = useDict();

  return (
    <section id="engineering" className="relative py-32 md:py-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute right-[-10%] top-1/4 h-[640px] w-[640px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(79,124,255,0.18) 0%, rgba(79,124,255,0.05) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute left-[-8%] bottom-[10%] h-[480px] w-[480px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(123,151,255,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <Container>
        <div className="mb-16 grid gap-12 lg:mb-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel number="06" title={dict.engineering.headline1} />

            <TextReveal
              as="h2"
              className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] text-soft-white text-balance"
            >
              {dict.engineering.headline1}{" "}
              <span className="italic text-gradient-luxe">
                {dict.engineering.headline2}
              </span>
            </TextReveal>

            <Reveal delay={0.3}>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-charcoal-100 md:text-[17px] text-pretty">
                {dict.engineering.description}
              </p>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.45} className="lg:col-span-5">
            <div className="glass rounded-2xl p-6 md:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.3em] text-accent-light uppercase">
                  {dict.engineering.aggregate}
                </span>
                <span className="h-px flex-1 bg-border-medium" />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {dict.engineering.metrics.map((s, i) => (
                  <div
                    key={s.label}
                    className={`ps-3 ${
                      i === 0
                        ? ""
                        : "border-s border-border-subtle"
                    }`}
                  >
                    <p className="font-display text-2xl text-gradient-copper md:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[10px] leading-snug text-charcoal-200">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dict.engineering.pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} total={dict.engineering.pillars.length} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
  total,
}: {
  pillar: { title: string; text: string };
  index: number;
  total: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay: index * 0.06, ease: EASE }}
      whileHover={{ y: -3 }}
      className="group relative"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(79,124,255,0.30) 0%, transparent 70%)",
        }}
      />

      <div className="glass relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-700 hover:border-sapphire/40 md:p-8">
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.25em] text-charcoal-300 uppercase">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mb-3 font-display text-[22px] leading-tight tracking-[-0.015em] text-soft-white md:text-[24px]">
          {pillar.title}
        </h3>

        <p className="mb-6 text-[14px] leading-[1.65] text-charcoal-100 text-pretty">
          {pillar.text}
        </p>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(123,151,255,0.7) 50%, transparent 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}
