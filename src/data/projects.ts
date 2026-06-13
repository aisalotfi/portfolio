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
        title: "سنگ صدف استون",
        subtitle: "وب‌سایت رسمی شرکت",
        description:
          "وب‌سایت رسمی کارخانه سنگ صدف استون، تولیدکننده سنگ‌های ساختمانی. طراحی و توسعه با Next.js و Tailwind CSS. تمرکز روی سرعت، نمایش حرفه‌ای محصولات و تجربه کاربری روان.",
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
          "یک فروشگاه اینترنتی کامل با سبد خرید، احراز هویت و پنل مدیریت. تمرکز روی پیاده‌سازی منطق سبد خرید و ارتباط با API.",
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
          "داشبورد مدیریتی با قابلیت نمایش نمودارها، مدیریت کاربران و تنظیمات. تمرکز روی طراحی متریال و تجربه کاربری.",
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
          "یک وبسایت جستجو و نمایش اطلاعات انیمه با استفاده از API. تمرکز روی انیمیشن‌های روان و تجربه مرور لذت‌بخش.",
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
          "Offizielle Website der Sadaf Stone GmbH, einem Hersteller von Natursteinen. Entwickelt mit Next.js und Tailwind CSS. Fokus auf Geschwindigkeit, professionelle Produktpräsentation und flüssige Benutzererfahrung.",
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
          "Vollständiger Online-Shop mit Warenkorb, Authentifizierung und Admin-Panel. Fokus auf Warenkorb-Logik und API-Integration.",
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
          "Admin-Dashboard mit Diagrammen, Benutzerverwaltung und Einstellungen. Fokus auf klares Design und Benutzererfahrung.",
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
          "Eine Website zum Suchen und Anzeigen von Anime-Informationen mithilfe einer API. Fokus auf flüssige Animationen und angenehmes Surferlebnis.",
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
        "Official website for Sadaf Stone factory, a natural stone producer. Built with Next.js and Tailwind CSS. Focused on speed, professional product showcase, and smooth UX.",
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
        "A full e-commerce app with cart, auth, and admin panel. Focused on implementing cart logic and API communication.",
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
        "An admin dashboard with charts, user management, and settings. Focused on clean design and UX.",
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
        "An anime search and info site using a public API. Focused on smooth animations and an enjoyable browsing experience.",
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
