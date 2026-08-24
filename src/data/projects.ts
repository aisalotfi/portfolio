import type { Locale } from "@/i18n";

export type ProjectAccent = "amethyst" | "emerald" | "sapphire" | "copper";

/** Localizable copy of a project. */
export interface ProjectTexts {
  title: string;
  subtitle: string;
  description: string;
  results: string[];
}

/**
 * Locale-independent project data.
 *
 * To add a new project: append an entry to `projectList` with its
 * `slug`, `technologies`, optional `links`/`coverImage`, and localized
 * `texts` for each locale. Set `featured: true` for the large cards.
 * A matching case-study data file can be added under
 * `src/data/case-studies/<slug>.ts`.
 */
export interface Project {
  /** URL segment — also used by case-study routes. */
  slug: string;
  accent: ProjectAccent;
  featured?: boolean;
  /** Keep technology names untranslated. */
  technologies: string[];
  links?: {
    live?: string;
    github?: string;
    /** Internal path fragment, e.g. "sadaf-stone". */
    caseStudySlug?: string;
  };
  gallery?: string[];
  /** Localized copy keyed by locale. */
  texts: Record<Locale, ProjectTexts>;
}

const projectList: Project[] = [
  {
    slug: "sadaf-stone",
    accent: "copper",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    links: {
      live: "https://sadafstonee.ir",
      caseStudySlug: "sadaf-stone",
    },
    texts: {
      en: {
        title: "Sadaf Stone",
        subtitle: "Official Company Site",
        description:
          "Official website for Sadaf Stone factory, showcasing natural stone products and services. Goal: help customers easily browse products and connect with the company. Result: a fast, responsive, professional site.",
        results: [
          "Launched official site with positive client feedback",
          "Fast load times on mobile connections",
          "Responsive design across all devices",
        ],
      },
      fa: {
        title: "سنگ صدف",
        subtitle: "وب‌سایت رسمی شرکت",
        description:
          "وب‌سایت رسمی کارخانه سنگ صدف برای نمایش محصولات و خدمات شرکت؛ تا مشتریان به‌راحتی محصولات را ببینند و با شرکت در ارتباط باشند. نتیجه: وب‌سایتی سریع، واکنش‌گرا و حرفه‌ای.",
        results: [
          "راه‌اندازی وب‌سایت رسمی با بازخورد مثبت کارفرما",
          "بارگذاری سریع روی اینترنت موبایل",
          "طراحی واکنش‌گرا برای تمام دستگاه‌ها",
        ],
      },
      de: {
        title: "Sadaf Stone",
        subtitle: "Offizielle Firmenwebsite",
        description:
          "Offizielle Website des Natursteinwerks Sadaf Stone zur Präsentation von Produkten und Dienstleistungen. Ziel: Kunden einfache Produktsuche und Kontaktaufnahme ermöglichen. Ergebnis: eine schnelle, responsive und professionelle Seite.",
        results: [
          "Launch mit positiver Kundenrückmeldung",
          "Schnelle Ladezeiten auch auf mobilen Verbindungen",
          "Responsives Design für alle Geräte",
        ],
      },
    },
  },
  {
    slug: "ecommerce",
    accent: "amethyst",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    texts: {
      en: {
        title: "E-commerce App",
        subtitle: "Personal Project",
        description:
          "A full e-commerce app with cart, auth, and admin panel. Built to practice frontend logic, state management, and API integration.",
        results: [
          "Full cart system with React Context",
          "API integration for product management",
          "Responsive and user-friendly design",
        ],
      },
      fa: {
        title: "فروشگاه اینترنتی",
        subtitle: "پروژه شخصی",
        description:
          "یک فروشگاه اینترنتی کامل با قابلیت سبد خرید، احراز هویت و پنل مدیریت. برای تمرین منطق فرانت‌اند، مدیریت state و ارتباط با API ساخته شد.",
        results: [
          "سبد خرید کامل با React Context",
          "اتصال به API برای مدیریت محصولات",
          "طراحی ریسپانسیو و کاربرپسند",
        ],
      },
      de: {
        title: "E-Commerce-App",
        subtitle: "Persönliches Projekt",
        description:
          "Ein vollständiger Online-Shop mit Warenkorb, Authentifizierung und Admin-Panel. Entwickelt, um Frontend-Logik, State-Management und API-Integration zu üben.",
        results: [
          "Vollständiger Warenkorb mit React Context",
          "API-Integration für die Produktverwaltung",
          "Responsives und benutzerfreundliches Design",
        ],
      },
    },
  },
  {
    slug: "admin-dashboard",
    accent: "sapphire",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    texts: {
      en: {
        title: "Admin Dashboard",
        subtitle: "Personal Project",
        description:
          "An admin dashboard with live charts, user management, and settings. Built to practice implementing clean, functional UIs for complex data.",
        results: [
          "Dashboard with live data and charts",
          "Clean and professional interface",
          "Dark mode and multiple views",
        ],
      },
      fa: {
        title: "داشبورد مدیریتی",
        subtitle: "پروژه شخصی",
        description:
          "داشبورد مدیریتی با نمودارهای زنده، مدیریت کاربران و تنظیمات. هدف: پیاده‌سازی رابط کاربری تمیز و کاربردی برای داده‌های پیچیده.",
        results: [
          "داشبورد با داده‌های زنده و نمودار",
          "رابط کاربری تمیز و حرفه‌ای",
          "حالت تاریک و نمایش‌های مختلف",
        ],
      },
      de: {
        title: "Admin-Dashboard",
        subtitle: "Persönliches Projekt",
        description:
          "Ein Admin-Dashboard mit Live-Diagrammen, Benutzerverwaltung und Einstellungen. Entwickelt, um saubere, funktionale Oberflächen für komplexe Daten umzusetzen.",
        results: [
          "Dashboard mit Live-Daten und Diagrammen",
          "Saubere und professionelle Benutzeroberfläche",
          "Dark Mode und verschiedene Ansichten",
        ],
      },
    },
  },
  {
    slug: "anime-website",
    accent: "emerald",
    technologies: ["Next.js", "Tailwind CSS", "REST API"],
    texts: {
      en: {
        title: "Anime Website",
        subtitle: "Personal Project",
        description:
          "An anime search and info site using a public API. Built to practice working with external APIs and smooth browsing experiences.",
        results: [
          "Advanced search with filters",
          "Detail pages with full info",
          "Fast client-side navigation",
        ],
      },
      fa: {
        title: "وبسایت انیمه",
        subtitle: "پروژه شخصی",
        description:
          "وبسایت جستجو و نمایش اطلاعات انیمه با استفاده از یک API عمومی. برای تمرین کار با APIهای بیرونی و تجربه مرور روان ساخته شد.",
        results: [
          "جستجوی پیشرفته با فیلترهای مختلف",
          "صفحات جزئیات با اطلاعات کامل",
          "ناوبری سریع سمت کلاینت",
        ],
      },
      de: {
        title: "Anime-Website",
        subtitle: "Persönliches Projekt",
        description:
          "Eine Anime-Such- und Informationsseite auf Basis einer öffentlichen API. Entwickelt, um den Umgang mit externen APIs und ein flüssiges Surferlebnis zu üben.",
        results: [
          "Erweiterte Suche mit Filtern",
          "Detailseiten mit vollständigen Informationen",
          "Schnelle Client-Navigation",
        ],
      },
    },
  },
];

export interface ResolvedProject extends ProjectTexts {
  slug: string;
  accent: ProjectAccent;
  featured: boolean;
  technologies: string[];
  links: Project["links"];
  gallery?: string[];
}

export function getProjects(locale: Locale): ResolvedProject[] {
  return projectList.map((p) => ({
    slug: p.slug,
    accent: p.accent,
    featured: p.featured ?? false,
    technologies: p.technologies,
    links: p.links,
    gallery: p.gallery,
    ...p.texts[locale],
  }));
}
