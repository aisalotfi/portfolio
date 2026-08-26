import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectAccent, ResolvedProject } from "@/data/projects";

interface ProjectCardProps {
  project: ResolvedProject;
  index: number;
  total: number;
  locale: string;
  labels: {
    liveSite: string;
    github: string;
    caseStudy: string;
    featured: string;
    outcomes: string;
  };
}

const ACCENT_MAP: Record<
  ProjectAccent,
  { glow: string; hairline: string; chipText: string; keyArt: string; keyArtBg: string; bullet: string }
> = {
  copper: {
    glow: "rgba(212,165,116,0.28)",
    hairline: "rgba(212,165,116,0.35)",
    chipText: "#ECC892",
    keyArt: "linear-gradient(135deg, #ECC892 0%, #D4A574 50%, #8C6B3F 100%)",
    keyArtBg: "rgba(212,165,116,0.10)",
    bullet: "#ECC892",
  },
  amethyst: {
    glow: "rgba(160,107,255,0.30)",
    hairline: "rgba(160,107,255,0.40)",
    chipText: "#C29CFF",
    keyArt: "linear-gradient(135deg, #C29CFF 0%, #A06BFF 55%, #4A2785 100%)",
    keyArtBg: "rgba(160,107,255,0.12)",
    bullet: "#C29CFF",
  },
  emerald: {
    glow: "rgba(16,185,129,0.28)",
    hairline: "rgba(16,185,129,0.40)",
    chipText: "#34D399",
    keyArt: "linear-gradient(135deg, #34D399 0%, #10B981 55%, #064E3B 100%)",
    keyArtBg: "rgba(16,185,129,0.10)",
    bullet: "#34D399",
  },
  sapphire: {
    glow: "rgba(79,124,255,0.30)",
    hairline: "rgba(79,124,255,0.42)",
    chipText: "#7B97FF",
    keyArt: "linear-gradient(135deg, #7B97FF 0%, #4F7CFF 55%, #1E2C7B 100%)",
    keyArtBg: "rgba(79,124,255,0.12)",
    bullet: "#7B97FF",
  },
};

/** Static abstract key-art — three layered slabs, pure CSS. */
function KeyArt({
  accent,
  index,
  total,
}: {
  accent: (typeof ACCENT_MAP)[ProjectAccent];
  index: number;
  total: number;
}) {
  const rot = (index % 2 === 0 ? 1 : -1) * 4;

  return (
    <div
      className="relative flex h-full min-h-[240px] w-full items-center justify-center overflow-hidden md:min-h-[320px]"
      style={{ background: accent.keyArtBg }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 30% 20%, ${accent.glow} 0%, transparent 60%)`,
          opacity: 0.7,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Back slab */}
      <div
        className="absolute h-44 w-56 rounded-2xl transition-transform duration-700 group-hover:[transform:translate(-30%,-25%)_rotate(var(--rot-hover))_translateY(-6px)]"
        style={
          {
            background: accent.keyArt,
            opacity: 0.55,
            transform: `translate(-30%, -25%) rotate(${rot}deg)`,
            "--rot-hover": `${rot * 1.4}deg`,
          } as React.CSSProperties
        }
      />

      {/* Mid glass card */}
      <div
        className="glass-strong relative z-10 flex h-44 w-60 flex-col justify-between rounded-2xl p-5 md:h-48 md:w-64"
        style={{ borderColor: accent.hairline }}
      >
        <div className="flex items-center justify-between">
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
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-charcoal-200">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="h-2 w-3/4 rounded-full" style={{ background: accent.keyArt }} />
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-5/6 rounded-full bg-white/10" />
          <div className="h-1.5 w-4/6 rounded-full bg-white/10" />
        </div>

        {/* Mini bar chart */}
        <div className="flex items-end gap-2">
          {[40, 70, 55, 90, 65, 80].map((h, i) => (
            <span
              key={i}
              className="w-2.5 origin-bottom rounded-sm transition-transform duration-500 group-hover:scale-y-100"
              style={{
                height: `${h * 0.45}px`,
                transform: "scaleY(0.72)",
                transitionDelay: `${i * 30}ms`,
                background:
                  i === 3 ? accent.keyArt : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
  total,
  locale,
  labels,
}: ProjectCardProps) {
  const accent = ACCENT_MAP[project.accent];
  const isReversed = index % 2 === 1;
  const base = `/${locale}`;
  const mediaHref = project.links?.live
    ?? (project.links?.caseStudySlug ? `${base}/case-study/${project.links.caseStudySlug}` : undefined);
  const mediaIsExternal = Boolean(project.links?.live);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border bg-surface-glass transition-[border-color,box-shadow,transform] duration-500 motion-safe:hover:-translate-y-1",
        project.featured
          ? "border-accent/20 shadow-[0_20px_70px_-35px_rgba(212,165,116,0.4)]"
          : "border-border-subtle shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]",
        "hover:border-accent/40 hover:shadow-[0_28px_90px_-42px_rgba(212,165,116,0.45)]",
      )}
      style={{ borderColor: project.featured ? accent.hairline : undefined }}
    >
      {/* Featured badge */}
      {project.featured && (
        <span className="absolute end-6 top-6 z-20 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.22em]"
          style={{ borderColor: accent.hairline, color: accent.chipText }}
        >
          <span className="relative inline-block h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full" style={{ background: accent.bullet }} />
            <span
              className="absolute inset-0 rounded-full opacity-80 blur-[4px] animate-pulse-glow"
              style={{ background: accent.bullet }}
            />
          </span>
          {labels.featured}
        </span>
      )}

      <div className={cn("grid lg:grid-cols-12")}>
        {/* Content */}
        <div className={cn("col-span-12 p-7 md:p-10 lg:col-span-7", isReversed && "lg:order-2")}>
          <div className="flex h-full flex-col">
            <div className="mb-5 flex items-center gap-3">
              <span
                className="font-display text-3xl italic"
                style={{ color: accent.bullet }}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden="true"
                className="h-px w-10 rtl:rotate-180"
                style={{
                  background: `linear-gradient(90deg, ${accent.hairline} 0%, transparent 100%)`,
                }}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-charcoal-200">
                {project.subtitle}
              </span>
            </div>

            <h3 className="mb-4 font-display text-[clamp(1.8rem,3.5vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-soft-white">
              {project.title}
            </h3>

            <p className="mb-7 max-w-xl text-[14px] leading-[1.7] text-charcoal-100 text-pretty md:text-[15px]">
              {project.description}
            </p>

            {project.technologies.length > 0 && (
              <ul className="mb-7 flex flex-wrap gap-2" aria-label="Technologies">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border-medium bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.02em] text-charcoal-100 transition-colors duration-300 group-hover:border-white/[0.14]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}

            {(project.links?.live || project.links?.caseStudySlug || project.links?.github) && (
              <div className="mt-auto flex flex-wrap items-center gap-2.5">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-[color,background-color,border-color,transform] hover:-translate-y-0.5 hover:bg-white/[0.06]"
                    style={{ color: accent.chipText, borderColor: accent.hairline }}
                  >
                    {labels.liveSite} ↗
                  </a>
                )}
                {project.links?.caseStudySlug && (
                  <a
                    href={`${base}/case-study/${project.links.caseStudySlug}`}
                    className="inline-flex min-h-10 items-center rounded-full border border-border-medium px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-charcoal-100 transition-[color,background-color,border-color,transform] hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.04] hover:text-accent-light"
                  >
                    {labels.caseStudy} →
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-charcoal-100 transition-colors hover:text-accent-light"
                  >
                    {labels.github} ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Key art */}
        <div
          className={cn(
            "col-span-12 order-first border-t border-border-subtle lg:order-none lg:col-span-5 lg:border-t-0",
            isReversed
              ? "lg:border-r lg:border-r-border-subtle lg:[&>*:first-child]:order-2"
              : "lg:border-l lg:border-l-border-subtle",
          )}
        >
          {project.coverImage ? (
            mediaHref ? (
              <a
                href={mediaHref}
                target={mediaIsExternal ? "_blank" : undefined}
                rel={mediaIsExternal ? "noopener noreferrer" : undefined}
                aria-label={`${mediaIsExternal ? labels.liveSite : labels.caseStudy}: ${project.title}`}
                className="group/media relative block h-full overflow-hidden bg-charcoal-900"
              >
                <Image
                  src={project.coverImage}
                  alt={`${project.title} portfolio showcase`}
                  width={1920}
                  height={1080}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="aspect-[16/10] h-full w-full object-cover transition-[transform,filter] duration-700 group-hover/media:scale-[1.035] group-hover/media:brightness-110 lg:aspect-auto lg:min-h-[320px]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-near-black/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover/media:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="glass-strong pointer-events-none absolute bottom-5 end-5 inline-flex min-h-10 items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-soft-white shadow-lg transition-transform duration-500 group-hover/media:-translate-y-1"
                >
                  {mediaIsExternal ? labels.liveSite : labels.caseStudy}
                  <span>{mediaIsExternal ? "↗" : "→"}</span>
                </span>
              </a>
            ) : (
              <Image
                src={project.coverImage}
                alt={`${project.title} portfolio showcase`}
                width={1920}
                height={1080}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[16/10] h-full w-full object-cover lg:aspect-auto lg:min-h-[320px]"
              />
            )
          ) : (
            <KeyArt accent={accent} index={index} total={total} />
          )}
        </div>
      </div>

      {/* Outcomes strip */}
      {project.results.length > 0 && (
        <div className="border-t border-border-subtle p-6 md:p-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-charcoal-300">
            {labels.outcomes}
          </p>
          <ul className="grid gap-2.5 sm:grid-cols-3">
            {project.results.map((result) => (
              <li
                key={result}
                className="flex items-start gap-2.5 rounded-xl bg-white/[0.025] px-3 py-2.5 text-[13px] leading-snug text-charcoal-100"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                  style={{ background: accent.bullet }}
                />
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
