export interface FactItem {
  value: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  organization?: string;
  period: string;
  location?: string;
  description: string;
}

export interface SkillCategory {
  /** Translation key of the category — see skillCategories in data/skills.ts */
  key:
    | "frontend"
    | "backend"
    | "database"
    | "mobile"
    | "devops"
    | "design"
    | "practices";
  items: string[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    work: string;
    experience: string;
    skills: string;
    about: string;
    contact: string;
    name: string;
    toggleMenu: string;
    resume: string;
  };
  common: {
    skipToContent: string;
    liveSite: string;
    github: string;
    caseStudy: string;
    featured: string;
  };
  hero: {
    badge: string;
    name: string;
    role: string;
    tagline: string;
    ctaWork: string;
    ctaContact: string;
    socialsLabel: string;
    facts: FactItem[];
  };
  projects: {
    sectionLabel: string;
    headline1: string;
    headline2: string;
    description: string;
    outcomesLabel: string;
  };
  experience: {
    sectionLabel: string;
    headline1: string;
    headline2: string;
    description: string;
    items: ExperienceItem[];
  };
  skills: {
    sectionLabel: string;
    headline1: string;
    headline2: string;
    description: string;
    coreLabel: string;
    coreStack: string[];
    categories: SkillCategory[];
  };
  about: {
    sectionLabel: string;
    headline: string;
    subheadline: string;
    bio: string[];
    quote: string;
    disciplines: { title: string; items: string[] };
    principles: { title: string; items: string[] };
  };
  contact: {
    headline1: string;
    headline2: string;
    badge: string;
    description: string;
    formTitle: string;
    fields: { name: string; email: string; message: string };
    placeholders: { name: string; email: string; message: string };
    submit: string;
    sending: string;
    sent: string;
    error: string;
    info: {
      connect: string;
      studio: string;
      location: string;
      timezone: string;
      response: string;
      languages: string;
    };
    details: {
      location: string;
      timezone: string;
      response: string;
      languages: string;
    };
    social: {
      github: string;
      linkedin: string;
      email: string;
    };
    resumeCta: string;
    closingLine: string;
  };
  caseStudy: {
    backToProjects: string;
    overviewLabel: string;
    problemLabel: string;
    solutionLabel: string;
    responsibilitiesLabel: string;
    techStackLabel: string;
    challengesLabel: string;
    outcomeLabel: string;
    lessonsLabel: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
  resumePage: {
    meta: { title: string; description: string };
    introduction: string;
    backToHome: string;
    educationTitle: string;
    projectsTitle: string;
    experienceTitle: string;
    skillsTitle: string;
    skillCategories: SkillCategory[];
    education: { degree: string; school: string; year: string };
    projects: { name: string; tech: string[] }[];
    experience: ExperienceItem[];
    downloadPdf: string;
    downloadNote: string;
  };
  footer: {
    crafted: string;
    allRights: string;
    navigate: string;
    elsewhere: string;
  };
}
