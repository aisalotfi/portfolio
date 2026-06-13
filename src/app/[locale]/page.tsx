import { notFound } from "next/navigation";
import { isLocale } from "@/i18n";
import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { AboutSection } from "@/components/sections/About/AboutSection";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStack/TechStackSection";
import { CurrentFocusSection } from "@/components/sections/CurrentFocus/CurrentFocusSection";
import { ProcessSection } from "@/components/sections/Process/ProcessSection";
import { EngineeringSection } from "@/components/sections/Engineering/EngineeringSection";
import { FullstackSection } from "@/components/sections/Fullstack/FullstackSection";
import { TimelineSection } from "@/components/sections/Timeline/TimelineSection";
import { TestimonialsSection } from "@/components/sections/Testimonials/TestimonialsSection";
import { BuildLogSection } from "@/components/sections/BuildLog/BuildLogSection";
import { OpenToWorkSection } from "@/components/sections/OpenToWork/OpenToWorkSection";
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
      <TechStackSection />
      <CurrentFocusSection />
      <ProcessSection />
      <EngineeringSection />
      <FullstackSection />
      <TimelineSection />
      <TestimonialsSection />
      <BuildLogSection />
      <OpenToWorkSection />
      <ContactSection />
    </>
  );
}
