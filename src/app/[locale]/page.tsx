import { notFound } from "next/navigation";
import { isLocale } from "@/i18n";
import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { AboutSection } from "@/components/sections/About/AboutSection";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { ProcessSection } from "@/components/sections/Process/ProcessSection";
import { EngineeringSection } from "@/components/sections/Engineering/EngineeringSection";
import { FullstackSection } from "@/components/sections/Fullstack/FullstackSection";
import { TimelineSection } from "@/components/sections/Timeline/TimelineSection";
import { ContactSection } from "@/components/sections/Contact/ContactSection";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <EngineeringSection />
      <FullstackSection />
      <TimelineSection />
      <ContactSection />
    </>
  );
}
