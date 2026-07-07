"use client";

import { Reveal } from "@/components/motion/Reveal";

interface SectionLabelProps {
  number: string;
  title: string;
}

/**
 * Editorial chapter marker. Copper-lined, monospaced, breathing
 * letter-spacing — a small detail that signals craft.
 */
export function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <Reveal direction="up" delay={0.1}>
      <div className="mb-6 flex items-center gap-4">
        <span className="font-mono text-[14px] tracking-[0.3em] text-accent-light uppercase">
          {number}
        </span>
        <span
          className="h-px w-16"
          style={{
            background:
              "linear-gradient(90deg, rgba(212,165,116,0.6) 0%, rgba(212,165,116,0.1) 100%)",
          }}
        />
        <span className="font-mono text-[14px] tracking-[0.3em] text-charcoal-200 uppercase">
          {title}
        </span>
      </div>
    </Reveal>
  );
}
