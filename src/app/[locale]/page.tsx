import { notFound } from "next/navigation";
import { isLocale, getDictionary } from "@/i18n";
import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { ExperienceSection } from "@/components/sections/Experience/ExperienceSection";
import { SkillsSection } from "@/components/sections/Skills/SkillsSection";
import { AboutSection } from "@/components/sections/About/AboutSection";
import { ContactSection } from "@/components/sections/Contact/ContactSection";

interface PageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Recruiter-oriented information architecture:
 * Hero → Work → Experience → Skills → About → Contact
 */
export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <HeroSection locale={locale} dict={dict} />
      <ProjectsSection locale={locale} dict={dict} />
      <ExperienceSection locale={locale} dict={dict} />
      <SkillsSection locale={locale} dict={dict} />
      <AboutSection locale={locale} dict={dict} />
      <ContactSection locale={locale} dict={dict} />
    </>
  );
}
