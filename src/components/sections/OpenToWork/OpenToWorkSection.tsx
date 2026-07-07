"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { useDict } from "@/i18n/LocaleProvider";

export function OpenToWorkSection() {
  const dict = useDict();

  return (
    <section id="open-to-work" className="relative py-16 md:py-24">
      <Container>
        <Reveal direction="up">
          <div className="glass relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-8 text-center md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 50%, rgba(16,185,129,0.20) 0%, transparent 70%)",
              }}
            />

            <div className="relative">
              <span className="relative inline-block h-3 w-3">
                <span className="absolute inset-0 rounded-full bg-emerald-bright" />
                <span className="absolute inset-0 rounded-full bg-emerald-bright blur-[6px] opacity-80 animate-pulse-glow" />
              </span>

              <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em] text-soft-white">
                {dict.openToWork.title}
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-charcoal-100 md:text-[16px]">
                {dict.openToWork.description}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {dict.openToWork.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-border-medium bg-surface-glass px-4 py-2 text-[12px] tracking-[0.02em] text-charcoal-100 backdrop-blur-sm lg:backdrop-blur-md"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="mt-8 font-display text-lg italic text-gradient-luxe">
                {dict.openToWork.availability}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
