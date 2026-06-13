export interface Dictionary {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    about: string;
    work: string;
    process: string;
    experience: string;
    contact: string;
    portfolio: string;
    toggleMenu: string;
    resume: string;
  };
  common: {
    scroll: string;
    selected: string;
    outcomes: string;
    role: string;
    duration: string;
    of: string;
    switchLanguage: string;
    liveSite: string;
    github: string;
    caseStudy: string;
    step: string;
    layer: string;
  };
  hero: {
    badge: string;
    title: string;
    line1: string;
    line2: string;
    line3: string;
    line3After: string;
    description: string;
    cta1: string;
    cta2: string;
    currentFocus: string;
    focusLine1: string;
    focusLine2: string;
    opportunity: string;
    dash: string;
    opportunityDesc: string;
    stats: {
      yearsOfCraft: string;
      shippedProducts: string;
      industriesServed: string;
    };
  };
  about: {
    headline: string;
    subheadline: string;
    bio1: string;
    bio2: string;
    bio3: string;
    quote: string;
    disciplines: { title: string; items: string[] };
    principles: { title: string; items: string[] };
  };
  projects: {
    sectionLabel: string;
    headline1: string;
    headline2: string;
    description: string;
    yearRange: string;
  };
  process: {
    headline1: string;
    headline2: string;
    description: string;
    steps: { title: string; text: string }[];
  };
  engineering: {
    headline1: string;
    headline2: string;
    description: string;
    aggregate: string;
    metrics: { value: string; label: string }[];
    pillars: { title: string; text: string }[];
  };
  fullstack: {
    headline1: string;
    headline2: string;
    description: string;
    layers: { title: string; text: string }[];
  };
  techStack: {
    title: string;
    subtitle: string;
    categories: { name: string; items: string[] }[];
  };
  currentFocusSection: {
    title: string;
    description: string;
    items: string[];
  };
  openToWork: {
    title: string;
    description: string;
    roles: string[];
    availability: string;
  };
  featuredProject: {
    title: string;
    subtitle: string;
    description: string;
    techStack: string[];
    liveLink: string;
  };
  caseStudy: {
    projectOverview: string;
    problem: string;
    solution: string;
    responsibilities: string[];
    techStack: string[];
    challenges: { title: string; text: string }[];
    outcome: string;
    lessonsLearned: string[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    placeholder: string;
  };
  githubCta: {
    title: string;
    description: string;
    button: string;
  };
  timeline: {
    headline1: string;
    headline2: string;
    headline3: string;
    description: string;
    currentRole: string;
    currentRoleDescription: string;
    currentRoleAchievements: string[];
  };
  buildLog: {
    title: string;
    description: string;
    entries: { date: string; text: string }[];
  };
  contact: {
    headline1: string;
    headline2: string;
    headline3: string;
    headline4: string;
    badge: string;
    description: string;
    formTitle: string;
    fields: { name: string; email: string; message: string };
    placeholders: { name: string; email: string; message: string };
    submit: string;
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
    resumeDownload: string;
    closingLine1: string;
    closingLine2: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
  resumePage: {
    meta: { title: string; description: string };
    introduction: string;
    skillsTitle: string;
    skillCategories: { name: string; items: string[] }[];
    backToHome: string;
    educationTitle: string;
    projectsTitle: string;
    experienceTitle: string;
    education: { degree: string; school: string; year: string };
    projects: { name: string; tech: string[] }[];
    experience: { role: string; period: string; description: string }[];
    downloadCta: string;
  };
  footer: {
    crafted: string;
    allRights: string;
  };
}
