"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDict } from "@/i18n/LocaleProvider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ContactSection() {
  const dict = useDict();
  const isFa = dict.contact.details.languages.startsWith("FA");

  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-1/4 h-[680px] w-[800px] -translate-x-1/2 rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(212,165,116,0.18) 0%, rgba(212,165,116,0.05) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <Container>
        <div className="mb-24 text-center">
          <SectionLabel number="07" title={dict.nav.contact} />

          <TextReveal
            as="h2"
            className="font-display text-[clamp(2.4rem,7vw,6rem)] leading-[1] tracking-[-0.03em] text-soft-white text-balance max-w-3xl mx-auto"
          >
            {dict.contact.headline1}{" "}
            <span className="italic text-gradient-luxe">
              {dict.contact.headline2}
            </span>{" "}
            {dict.contact.headline3}{" "}
            <span className="italic text-gradient-luxe">
              {dict.contact.headline4}
            </span>
          </TextReveal>

          {/* Badge */}
          <Reveal delay={0.3}>
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-border-medium bg-surface-glass px-4 py-1.5 backdrop-blur-md">
              <span className="relative inline-block h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-emerald-bright" />
                <span className="absolute inset-0 rounded-full bg-emerald-bright blur-[5px] opacity-80 animate-pulse-glow" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-charcoal-100 uppercase">
                {dict.contact.badge}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mx-auto mt-8 max-w-lg text-[15px] leading-[1.75] text-charcoal-100 md:text-[17px] text-pretty">
              {dict.contact.description}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal direction="up" delay={0.5} className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 md:p-10">
              <h3 className="mb-8 font-display text-[22px] tracking-tight text-soft-white md:text-[26px]">
                {dict.contact.formTitle}
              </h3>

              <form className="space-y-6">
                {(["name", "email", "message"] as const).map((field) => (
                  <div key={field}>
                    <label className="mb-2 block font-mono text-[10px] tracking-[0.25em] text-charcoal-200 uppercase">
                      {dict.contact.fields[field]}
                    </label>
                    {field === "message" ? (
                      <textarea
                        rows={4}
                        placeholder={dict.contact.placeholders[field]}
                        className="w-full resize-none rounded-xl border border-border-medium bg-surface-glass px-4 py-3 text-[14px] text-soft-white placeholder:text-charcoal-400 backdrop-blur-md transition-all duration-500 focus:border-accent/60 focus:outline-none focus:shadow-[0_0_20px_-6px_rgba(212,165,116,0.4)]"
                      />
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        placeholder={dict.contact.placeholders[field]}
                        className="w-full rounded-xl border border-border-medium bg-surface-glass px-4 py-3 text-[14px] text-soft-white placeholder:text-charcoal-400 backdrop-blur-md transition-all duration-500 focus:border-accent/60 focus:outline-none focus:shadow-[0_0_20px_-6px_rgba(212,165,116,0.4)]"
                      />
                    )}
                  </div>
                ))}

                <Button variant="jewel" size="lg" className="w-full">
                  <span>{dict.contact.submit}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={`transition-transform duration-500 ease-out group-hover:translate-x-1 ${isFa ? "rtl:rotate-180 rtl:group-hover:-translate-x-1" : ""}`}
                  >
                    <path
                      d="M1 7H13M13 7L7 1M13 7L7 13"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </form>
            </div>
          </Reveal>

          {/* Info sidebar */}
          <Reveal direction="up" delay={0.65} className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {/* Connect */}
              <div className="glass rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px flex-1 bg-border-medium" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-accent-light uppercase">
                    {dict.contact.info.connect}
                  </span>
                </div>
                <div className="space-y-1">
                  {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                    <p
                      key={platform}
                      className="text-[13px] text-charcoal-100 transition-colors hover:text-soft-white"
                    >
                      {platform}
                    </p>
                  ))}
                </div>
              </div>

              {/* Studio */}
              <div className="glass rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px flex-1 bg-border-medium" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-accent-light uppercase">
                    {dict.contact.info.studio}
                  </span>
                </div>
                <Meta
                  label={dict.contact.info.location}
                  value={dict.contact.details.location}
                />
                <Meta
                  label={dict.contact.info.timezone}
                  value={dict.contact.details.timezone}
                />
                <Meta
                  label={dict.contact.info.response}
                  value={dict.contact.details.response}
                />
                <Meta
                  label={dict.contact.info.languages}
                  value={dict.contact.details.languages}
                />
              </div>

              {/* Quote */}
              <div className="glass rounded-2xl p-6">
                <p className="text-[14px] italic leading-relaxed text-charcoal-100">
                  &ldquo;{dict.contact.closingLine1}&rdquo;
                </p>
                <p className="mt-2 text-[12px] text-accent-light">
                  {dict.contact.closingLine2}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="font-mono text-[10px] tracking-[0.15em] text-charcoal-300 uppercase">
        {label}
      </span>
      <span className="text-[13px] text-soft-white">{value}</span>
    </div>
  );
}
