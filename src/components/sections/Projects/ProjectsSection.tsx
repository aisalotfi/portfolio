"use client";

import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "./ProjectCard";
import { getProjects } from "@/data/projects";
import { useDict, useLocale } from "@/i18n/LocaleProvider";

export function ProjectsSection() {
  const dict = useDict();
  const { locale } = useLocale();
  const projects = getProjects(locale);

  return (
    <section id="projects" className="relative py-32 md:py-48">
      <Container>
        <div className="mb-20 flex flex-col gap-10 lg:mb-28 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel number="02" title={dict.projects.sectionLabel} />

            <TextReveal
              as="h2"
              className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] text-soft-white text-balance"
            >
              {dict.projects.headline1}{" "}
              <span className="italic text-gradient-luxe">
                {dict.projects.headline2}
              </span>
            </TextReveal>

            <Reveal delay={0.3}>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-charcoal-100 md:text-[17px] text-pretty">
                {dict.projects.description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.45} direction="left">
            <div className="hidden items-center gap-3 lg:flex">
              <span
                className="h-px w-12"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(212,165,116,0.5) 100%)",
                }}
              />
              <span className="font-mono text-[10px] tracking-[0.3em] text-charcoal-200 uppercase">
                {projects.length.toString().padStart(2, "0")} · {dict.projects.yearRange}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="space-y-10 md:space-y-14">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
