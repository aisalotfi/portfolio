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

export function getProjects(locale: Locale): Project[] {
  if (locale === "fa") {
    return [
      {
        id: "sadaf-stone",
        title: "سنگ صدف",
        subtitle: "وب‌سایت رسمی شرکت",
        description:
          "وب‌سایت رسمی کارخانه سنگ صدف استون، برای نمایش محصولات و خدمات شرکت. هدف این بود که مشتریان بتوانند به راحتی محصولات را ببینند و با شرکت ارتباط بگیرند. نتیجه: یک وبسایت سریع، واکنش‌گرا و حرفه‌ای.",
        role: "توسعه‌دهنده فرانت‌اند",
        duration: "۲ ماه",
        accent: "copper",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        results: [
          "راه‌اندازی وب‌سایت رسمی با بازخورد مثبت کارفرما",
          "زمان بارگذاری سریع با استفاده از SSR",
          "طراحی واکنش‌گرا برای تمام دستگاه‌ها",
        ],
        links: {
          live: "https://sadafstonee.ir",
          caseStudy: `/${locale}/case-study/sadaf-stone`,
        },
      },
      {
        id: "ecommerce",
        title: "فروشگاه اینترنتی",
        subtitle: "پروژه شخصی",
        description:
          "یک فروشگاه اینترنتی کامل با قابلیت سبد خرید، احراز هویت و پنل مدیریت. پروژه‌ای برای تمرین منطق فرانت‌اند، کار با state management و ارتباط با API.",
        role: "توسعه‌دهنده فرانت‌اند",
        duration: "۳ ماه",
        accent: "amethyst",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        results: [
          "سبد خرید کامل با React Context",
          "اتصال به API برای مدیریت محصولات",
          "طراحی ریسپانسیو و کاربرپسند",
        ],
        links: {},
      },
      {
        id: "admin-dashboard",
        title: "داشبورد مدیریتی",
        subtitle: "پروژه شخصی",
        description:
          "داشبورد مدیریتی با نمودارهای زنده، مدیریت کاربران و تنظیمات. هدف: پیاده‌سازی یک رابط کاربری تمیز و کاربردی برای نمایش داده‌های پیچیده.",
        role: "توسعه‌دهنده فرانت‌اند",
        duration: "۲ ماه",
        accent: "sapphire",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
        results: [
          "داشبورد با داده‌های زنده و نمودار",
          "رابط کاربری تمیز و حرفه‌ای",
          "dark mode و حالت‌های مختلف نمایش",
        ],
        links: {},
      },
      {
        id: "anime-website",
        title: "وبسایت انیمه",
        subtitle: "پروژه شخصی",
        description:
          "وبسایت جستجو و نمایش اطلاعات انیمه. پروژه‌ای برای تمرین کار با API، انیمیشن‌های فرانت‌اند و تجربه مرور روان.",
        role: "توسعه‌دهنده فرانت‌اند",
        duration: "۱ ماه",
        accent: "emerald",
        technologies: ["Next.js", "Tailwind CSS", "REST API", "Vercel"],
        results: [
          "جستجوی پیشرفته با فیلترهای مختلف",
          "صفحات جزئیات با اطلاعات کامل",
          "انیمیشن‌های ورودی با Framer Motion",
        ],
        links: {},
      },
    ];
  }

  if (locale === "de") {
    return [
      {
        id: "sadaf-stone",
        title: "Sadaf Stone",
        subtitle: "Firmenwebsite",
        description:
          "Offizielle Website der Sadaf Stone GmbH zur Präsentation ihrer Natursteinprodukte und Dienstleistungen. Ziel war es, Kunden eine einfache Produktsuche und Kontaktaufnahme zu ermöglichen. Ergebnis: eine schnelle, responsive und professionelle Seite.",
        role: "Frontend-Entwicklerin",
        duration: "2 Monate",
        accent: "copper",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        results: [
          "Website erfolgreich mit positiver Kundenrückmeldung gestartet",
          "Schnelle Ladezeiten durch SSR",
          "Responsives Design für alle Geräte",
        ],
        links: {
          live: "https://sadafstonee.ir",
          caseStudy: `/${locale}/case-study/sadaf-stone`,
        },
      },
      {
        id: "ecommerce",
        title: "E-Commerce",
        subtitle: "Persönliches Projekt",
        description:
          "Ein vollständiger Online-Shop mit Warenkorb, Authentifizierung und Admin-Panel. Entwickelt, um Frontend-Logik, State-Management und API-Integration zu üben.",
        role: "Frontend-Entwicklerin",
        duration: "3 Monate",
        accent: "amethyst",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        results: [
          "Vollständiger Warenkorb mit React Context",
          "API-Integration für Produktverwaltung",
          "Responsives und benutzerfreundliches Design",
        ],
        links: {},
      },
      {
        id: "admin-dashboard",
        title: "Admin-Dashboard",
        subtitle: "Persönliches Projekt",
        description:
          "Ein Admin-Dashboard mit Live-Diagrammen, Benutzerverwaltung und Einstellungen. Entwickelt, um saubere, funktionale Oberflächen für komplexe Daten umzusetzen.",
        role: "Frontend-Entwicklerin",
        duration: "2 Monate",
        accent: "sapphire",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
        results: [
          "Dashboard mit Live-Daten und Diagrammen",
          "Saubere und professionelle Benutzeroberfläche",
          "Dark Mode und verschiedene Ansichten",
        ],
        links: {},
      },
      {
        id: "anime-website",
        title: "Anime-Website",
        subtitle: "Persönliches Projekt",
        description:
          "Eine Anime-Such- und Informationsseite mit einer öffentlichen API. Entwickelt, um den Umgang mit APIs, Frontend-Animationen und ein flüssiges Surferlebnis zu üben.",
        role: "Frontend-Entwicklerin",
        duration: "1 Monat",
        accent: "emerald",
        technologies: ["Next.js", "Tailwind CSS", "REST API", "Vercel"],
        results: [
          "Erweiterte Suche mit verschiedenen Filtern",
          "Detailseiten mit vollständigen Informationen",
          "Eingangsanimationen mit Framer Motion",
        ],
        links: {},
      },
    ];
  }

  // English (default)
  return [
    {
      id: "sadaf-stone",
      title: "Sadaf Stone",
      subtitle: "Official Company Site",
        description:
          "Official website for Sadaf Stone factory, showcasing their natural stone products and services. The goal was to help customers easily browse products and connect with the company. Result: a fast, responsive, and professional site.",
      role: "Frontend Developer",
      duration: "2 months",
      accent: "copper",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      results: [
        "Launched official site with positive client feedback",
        "Fast load times using SSR",
        "Responsive design across all devices",
      ],
      links: {
        live: "https://sadafstonee.ir",
        caseStudy: `/${locale}/case-study/sadaf-stone`,
      },
    },
    {
      id: "ecommerce",
      title: "E-commerce App",
      subtitle: "Personal Project",
        description:
          "A full e-commerce app with cart, auth, and admin panel. Built to practice frontend logic, state management, and API integration.",
      role: "Frontend Developer",
      duration: "3 months",
      accent: "amethyst",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      results: [
        "Full cart system with React Context",
        "API integration for product management",
        "Responsive and user-friendly design",
      ],
      links: {},
    },
    {
      id: "admin-dashboard",
      title: "Admin Dashboard",
      subtitle: "Personal Project",
        description:
          "An admin dashboard with live charts, user management, and settings. Built to practice implementing clean, functional UIs for complex data.",
      role: "Frontend Developer",
      duration: "2 months",
      accent: "sapphire",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      results: [
        "Dashboard with live data and charts",
        "Clean and professional interface",
        "Dark mode and multiple views",
      ],
      links: {},
    },
    {
      id: "anime-website",
      title: "Anime Website",
      subtitle: "Personal Project",
        description:
          "An anime search and info site using a public API. Built to practice working with APIs, frontend animations, and smooth browsing experiences.",
      role: "Frontend Developer",
      duration: "1 month",
      accent: "emerald",
      technologies: ["Next.js", "Tailwind CSS", "REST API", "Vercel"],
      results: [
        "Advanced search with filters",
        "Detail pages with full info",
        "Entry animations with Framer Motion",
      ],
      links: {},
    },
  ];
}
