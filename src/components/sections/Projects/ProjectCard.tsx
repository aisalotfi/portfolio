"use client";

import { useState, useRef, useEffect } from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import type { Project, ProjectAccent } from "@/data/projects";
import { useDict } from "@/i18n/LocaleProvider";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/* ------------------------------------------------------------------
 * Per-project jewel palette — drives glow, key-art, and accents.
 * ------------------------------------------------------------------ */
const ACCENT_MAP: Record<
  ProjectAccent,
  {
    glow: string;        // soft halo behind the card on hover
    hairline: string;    // hairline border tint
    chipText: string;    // accent for tag chips on hover
    keyArt: string;      // gradient used in the key-art mock
    keyArtBg: string;    // base background tone of the key-art
    bullet: string;      // outcome bullet color
    label: string;       // human-readable tone
  }
> = {
  copper: {
    glow:     "rgba(212,165,116,0.28)",
    hairline: "rgba(212,165,116,0.35)",
    chipText: "#ECC892",
    keyArt:   "linear-gradient(135deg, #ECC892 0%, #D4A574 50%, #8C6B3F 100%)",
    keyArtBg: "rgba(212,165,116,0.10)",
    bullet:   "#ECC892",
    label:    "Champagne Copper",
  },
  amethyst: {
    glow:     "rgba(160,107,255,0.30)",
    hairline: "rgba(160,107,255,0.40)",
    chipText: "#C29CFF",
    keyArt:   "linear-gradient(135deg, #C29CFF 0%, #A06BFF 55%, #4A2785 100%)",
    keyArtBg: "rgba(160,107,255,0.12)",
    bullet:   "#C29CFF",
    label:    "Royal Amethyst",
  },
  emerald: {
    glow:     "rgba(16,185,129,0.28)",
    hairline: "rgba(16,185,129,0.40)",
    chipText: "#34D399",
    keyArt:   "linear-gradient(135deg, #34D399 0%, #10B981 55%, #064E3B 100%)",
    keyArtBg: "rgba(16,185,129,0.10)",
    bullet:   "#34D399",
    label:    "Deep Emerald",
  },
  sapphire: {
    glow:     "rgba(79,124,255,0.30)",
    hairline: "rgba(79,124,255,0.42)",
    chipText: "#7B97FF",
    keyArt:   "linear-gradient(135deg, #7B97FF 0%, #4F7CFF 55%, #1E2C7B 100%)",
    keyArtBg: "rgba(79,124,255,0.12)",
    bullet:   "#7B97FF",
    label:    "Sapphire Blue",
  },
};

/* ------------------------------------------------------------------
 * Abstract "key art" — three layered glass slabs, each card unique.
 * Gives presence without faking screenshots.
 * ------------------------------------------------------------------ */
function KeyArt({
  accent,
  index,
  isHovered,
}: {
  accent: (typeof ACCENT_MAP)[ProjectAccent];
  index: number;
  isHovered: boolean;
}) {
  // Slight rotation variance per card so they don't feel cloned
  const rot = (index % 2 === 0 ? 1 : -1) * 4;

  return (
    <div
      className="relative flex h-full min-h-[280px] w-full items-center justify-center overflow-hidden md:min-h-[340px]"
      style={{ background: accent.keyArtBg }}
    >
      {/* Background gradient wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(120% 80% at 30% 20%, ${accent.glow} 0%, transparent 60%), radial-gradient(80% 60% at 80% 80%, ${accent.glow.replace("0.28", "0.18").replace("0.30", "0.20")} 0%, transparent 60%)`,
          opacity: isHovered ? 1 : 0.7,
        }}
      />

      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Back slab */}
      <m.div
        initial={false}
        animate={{
          rotate: isHovered ? rot * 1.4 : rot,
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute h-44 w-56 rounded-2xl"
        style={{
          background: accent.keyArt,
          opacity: 0.55,
          filter: "blur(1px)",
          boxShadow: `0 30px 80px -10px ${accent.glow}`,
          transform: `translate(-30%, -25%) rotate(${rot}deg)`,
        }}
      />

      {/* Mid glass card */}
      <m.div
        initial={false}
        animate={{
          rotate: isHovered ? -rot * 0.6 : -rot * 0.4,
          y: isHovered ? 4 : 0,
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="glass-strong relative z-10 h-48 w-64 rounded-2xl p-5"
        style={{
          borderColor: accent.hairline,
          boxShadow: `0 30px 80px -20px rgba(0,0,0,0.6), 0 0 60px -10px ${accent.glow}`,
        }}
      >
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: i === 0 ? accent.bullet : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>
          <span className="font-mono text-[8px] tracking-[0.25em] text-charcoal-200 uppercase">
            {String(index + 1).padStart(2, "0")} / 04
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="h-2 w-3/4 rounded-full" style={{ background: accent.keyArt }} />
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-5/6 rounded-full bg-white/10" />
          <div className="h-1.5 w-4/6 rounded-full bg-white/10" />
        </div>

        <div className="mt-5 flex items-end gap-2">
          {[40, 70, 55, 90, 65, 80].map((h, i) => (
            <m.div
              key={i}
              animate={{ scaleY: isHovered ? 1 : 0.7 }}
              transition={{
                duration: 0.6,
                delay: i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-2.5 origin-bottom rounded-sm"
              style={{
                height: `${h * 0.5}px`,
                background:
                  i === 3 ? accent.keyArt : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </m.div>

      {/* Front floating chip */}
      <m.div
        initial={false}
        animate={{
          rotate: isHovered ? rot * 0.8 : rot * 0.5,
          x: isHovered ? 14 : 0,
          y: isHovered ? 14 : 0,
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="glass-strong absolute z-20 flex items-center gap-2 rounded-full px-3 py-1.5"
        style={{
          right: "16%",
          bottom: "20%",
          borderColor: accent.hairline,
          boxShadow: `0 8px 24px -4px ${accent.glow}`,
        }}
      >
        <span className="relative inline-block h-1.5 w-1.5">
          <span
            className="absolute inset-0 rounded-full"
            style={{ background: accent.bullet }}
          />
          <span
            className="absolute inset-0 rounded-full blur-[5px] opacity-90 animate-pulse-glow"
            style={{ background: accent.bullet }}
          />
        </span>
        <span className="font-mono text-[8px] tracking-[0.25em] text-charcoal-100 uppercase">
          {accent.label}
        </span>
      </m.div>
    </div>
  );
}

/* ------------------------------------------------------------------
 * ProjectCard
 * ------------------------------------------------------------------ */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const dict = useDict();
  const [isHovered, setIsHovered] = useState(false);
  const canHover = useRef(true);
  useEffect(() => {
    canHover.current = window.matchMedia("(hover: hover)").matches;
  }, []);
  const accent = ACCENT_MAP[project.accent ?? "copper"];

  // Alternate the layout so the page has rhythm
  const isReversed = index % 2 === 1;

  return (
    <m.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => canHover.current && setIsHovered(true)}
      onMouseLeave={() => canHover.current && setIsHovered(false)}
      className="group relative"
    >
      {/* Soft jewel halo behind the entire card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: `radial-gradient(60% 60% at 50% 50%, ${accent.glow} 0%, transparent 70%)`,
        }}
      />

      <div
        className={cn(
          "glass relative overflow-hidden rounded-3xl transition-all duration-700",
          "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]",
        )}
        style={{
          borderColor: isHovered ? accent.hairline : undefined,
        }}
      >
        <div
          className={cn(
            "grid gap-0 lg:grid-cols-12",
            isReversed && "lg:[&>*:first-child]:order-2",
          )}
        >
          {/* ─── Content ─── */}
          <div className="relative col-span-12 p-8 md:p-12 lg:col-span-7">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="font-display text-3xl italic"
                  style={{ color: accent.bullet }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className="h-px w-10"
                  style={{
                    background: `linear-gradient(90deg, ${accent.hairline} 0%, transparent 100%)`,
                  }}
                />
                <span className="font-mono text-[10px] tracking-[0.3em] text-charcoal-200 uppercase">
                  {project.subtitle}
                </span>
              </div>

              <h3
                className={cn(
                  "mb-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.025em] text-soft-white transition-all duration-700",
                )}
              >
                {project.title}
              </h3>

              <p className="mb-8 max-w-xl text-[15px] leading-[1.7] text-charcoal-100 md:text-[16px] text-pretty">
                {project.description}
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border-medium bg-surface-glass px-3 py-1 text-[11px] tracking-[0.04em] text-charcoal-100 backdrop-blur-sm lg:backdrop-blur-md transition-colors duration-500 group-hover:border-white/15"
                    style={
                      isHovered
                        ? {
                            color: accent.chipText,
                            borderColor: accent.hairline,
                          }
                        : undefined
                    }
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3">
                {project.links.live && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.links.live, "_blank")}
                  >
                    {dict.common.liveSite}
                  </Button>
                )}
                {project.links.github && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project.links.github, "_blank")}
                  >
                    {dict.common.github} →
                  </Button>
                )}
                {project.links.caseStudy && (
                  <Button variant="ghost" size="sm">
                    {dict.common.caseStudy} →
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* ─── Key art column ─── */}
          <div
            className={cn(
              "relative col-span-12 border-t border-border-subtle lg:col-span-5",
              isReversed
                ? "lg:border-r lg:border-t-0 lg:border-r-border-subtle"
                : "lg:border-l lg:border-t-0 lg:border-l-border-subtle",
            )}
          >
            <KeyArt accent={accent} index={index} isHovered={isHovered} />
          </div>
        </div>

        {/* ─── Outcomes / meta strip ─── */}
        <div className="grid gap-0 border-t border-border-subtle md:grid-cols-12">
          <div className="md:col-span-7 md:border-r md:border-r-border-subtle">
            <div className="p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.3em] text-accent-light uppercase">
                  {dict.common.outcomes}
                </span>
                <span className="h-px flex-1 bg-border-subtle" />
              </div>
              <ul className="grid gap-3 sm:grid-cols-3">
                {project.results.map((result, i) => (
                  <m.li
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-start gap-2.5 text-[13px] leading-snug text-charcoal-100"
                  >
                    <span
                      className="mt-1 h-1 w-1 flex-shrink-0 rounded-full"
                      style={{
                        background: accent.bullet,
                        boxShadow: `0 0 6px ${accent.glow}`,
                      }}
                    />
                    {result}
                  </m.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid h-full grid-cols-2 divide-x divide-border-subtle border-t border-t-border-subtle md:border-t-0">
              <div className="p-6 md:p-8">
                <span className="font-mono text-[10px] tracking-[0.3em] text-charcoal-300 uppercase">
                  {dict.common.role}
                </span>
                <p className="mt-2 text-[13px] leading-snug text-soft-white">
                  {project.role}
                </p>
              </div>
              <div className="p-6 md:p-8">
                <span className="font-mono text-[10px] tracking-[0.3em] text-charcoal-300 uppercase">
                  {dict.common.duration}
                </span>
                <p className="mt-2 text-[13px] leading-snug text-soft-white">
                  {project.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
