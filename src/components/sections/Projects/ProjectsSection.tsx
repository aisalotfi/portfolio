import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "./ProjectCard";
import { getProjects } from "@/data/projects";
import type { Dictionary, Locale } from "@/i18n";

interface ProjectsSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function ProjectsSection({ locale, dict }: ProjectsSectionProps) {
  const projects = getProjects(locale);

  return (
    <section id="projects" className="relative scroll-mt-20 py-20 md:py-32">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionLabel number="01" title={dict.projects.sectionLabel} />
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.025em] text-soft-white text-balance">
              {dict.projects.headline1}{" "}
              <span className="italic text-gradient-luxe">{dict.projects.headline2}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-charcoal-100 text-pretty md:text-[16px]">
              {dict.projects.description}
            </p>
          </Reveal>
        </div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={60}>
              <ProjectCard
                project={project}
                index={index}
                total={projects.length}
                locale={locale}
                labels={{
                  liveSite: dict.common.liveSite,
                  github: dict.common.github,
                  caseStudy: dict.common.caseStudy,
                  featured: dict.common.featured,
                  outcomes: dict.projects.outcomesLabel,
                }}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
