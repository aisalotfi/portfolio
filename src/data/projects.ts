import type { Locale } from "@/i18n";

export type ProjectAccent = "amethyst" | "emerald" | "sapphire" | "copper";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  duration: string;
  technologies: string[];
  results: string[];
  accent?: ProjectAccent;
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
}

/**
 * TODO — Replace these placeholder projects with Aisa's real
 * shipped work. The shape is locale-aware: pass `locale` to get
 * the localised copy.
 */
export function getProjects(locale: Locale): Project[] {
  if (locale === "fa") {
    return [
      {
        id: "project-placeholder-1",
        title: "پروژه‌ی نمونه ۱",
        subtitle: "وب‌اپ تجارت الکترونیک",
        description:
          "نمونه‌ی پیش‌فرض. به‌محض اینکه اطلاعاتِ پروژه‌ی واقعی را بدهی، این کارت با عنوان، توضیح و دستاوردهای واقعی جایگزین می‌شود.",
        role: "توسعه‌دهنده فول‌استک",
        duration: "—",
        accent: "copper",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
        results: ["دستاورد ۱ (TODO)", "دستاورد ۲ (TODO)", "دستاورد ۳ (TODO)"],
        links: { caseStudy: "#" },
      },
      {
        id: "project-placeholder-2",
        title: "پروژه‌ی نمونه ۲",
        subtitle: "داشبورد تحلیلی",
        description:
          "نمونه‌ی پیش‌فرض. بعد از دریافت اطلاعات واقعی این کارت بازنویسی می‌شود.",
        role: "توسعه‌دهنده فول‌استک",
        duration: "—",
        accent: "amethyst",
        technologies: ["React", "Node.js", "Prisma", "Chart.js"],
        results: ["دستاورد ۱ (TODO)", "دستاورد ۲ (TODO)"],
        links: { caseStudy: "#" },
      },
      {
        id: "project-placeholder-3",
        title: "پروژه‌ی نمونه ۳",
        subtitle: "پلتفرم همکاری",
        description: "نمونه‌ی پیش‌فرض. منتظر اطلاعاتِ واقعی.",
        role: "توسعه‌دهنده فول‌استک",
        duration: "—",
        accent: "emerald",
        technologies: ["Next.js", "WebSockets", "Redis"],
        results: ["دستاورد ۱ (TODO)", "دستاورد ۲ (TODO)"],
        links: { caseStudy: "#" },
      },
      {
        id: "project-placeholder-4",
        title: "پروژه‌ی نمونه ۴",
        subtitle: "سایت پورتفوی",
        description: "نمونه‌ی پیش‌فرض. منتظر اطلاعاتِ واقعی.",
        role: "توسعه‌دهنده فول‌استک",
        duration: "—",
        accent: "sapphire",
        technologies: ["Next.js", "Tailwind", "Framer Motion"],
        results: ["دستاورد ۱ (TODO)", "دستاورد ۲ (TODO)"],
        links: { caseStudy: "#" },
      },
    ];
  }

  // English
  return [
    {
      id: "project-placeholder-1",
      title: "Sample Project 01",
      subtitle: "E-commerce Web App",
      description:
        "Placeholder project. As soon as you share real project details, this card will be rewritten with the actual title, description, and outcomes.",
      role: "Full Stack Developer",
      duration: "—",
      accent: "copper",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
      results: ["Outcome 1 (TODO)", "Outcome 2 (TODO)", "Outcome 3 (TODO)"],
      links: { caseStudy: "#" },
    },
    {
      id: "project-placeholder-2",
      title: "Sample Project 02",
      subtitle: "Analytics Dashboard",
      description:
        "Placeholder project. Will be replaced once real project details are provided.",
      role: "Full Stack Developer",
      duration: "—",
      accent: "amethyst",
      technologies: ["React", "Node.js", "Prisma", "Chart.js"],
      results: ["Outcome 1 (TODO)", "Outcome 2 (TODO)"],
      links: { caseStudy: "#" },
    },
    {
      id: "project-placeholder-3",
      title: "Sample Project 03",
      subtitle: "Collaboration Platform",
      description: "Placeholder project. Awaiting real details.",
      role: "Full Stack Developer",
      duration: "—",
      accent: "emerald",
      technologies: ["Next.js", "WebSockets", "Redis"],
      results: ["Outcome 1 (TODO)", "Outcome 2 (TODO)"],
      links: { caseStudy: "#" },
    },
    {
      id: "project-placeholder-4",
      title: "Sample Project 04",
      subtitle: "Portfolio Website",
      description: "Placeholder project. Awaiting real details.",
      role: "Full Stack Developer",
      duration: "—",
      accent: "sapphire",
      technologies: ["Next.js", "Tailwind", "Framer Motion"],
      results: ["Outcome 1 (TODO)", "Outcome 2 (TODO)"],
      links: { caseStudy: "#" },
    },
  ];
}
