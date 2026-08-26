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
  /** Public path for the project's showcase image. */
  coverImage?: string;
  gallery?: string[];
  /** Localized copy keyed by locale. */
  texts: Record<Locale, ProjectTexts>;
}

const projectList: Project[] = [
  {
    slug: "sadaf-stone",
    accent: "copper",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "next-intl"],
    links: {
      live: "https://sadafstonee.ir/fa",
      caseStudySlug: "sadaf-stone",
    },
    coverImage: "/projects/sadaf-stone-portfolio-showcase.png",
    texts: {
      en: {
        title: "Sadaf Stone",
        subtitle: "Multilingual Stone Commerce Platform",
        description:
          "A multilingual B2B/B2C platform for an Iranian natural-stone manufacturer, combining a searchable product catalog, detailed stone specifications, quotation workflows, and international SEO.",
        results: [
          "Four-language RTL/LTR product experience",
          "132 indexed catalog and content routes",
          "Production website with tested quote workflows",
        ],
      },
      fa: {
        title: "سنگ صدف",
        subtitle: "پلتفرم چندزبانه صنعت سنگ",
        description:
          "پلتفرم B2B و B2C کارخانه سنگ صدف برای معرفی و جست‌وجوی محصولات، نمایش مشخصات فنی سنگ‌ها، ثبت درخواست قیمت و حضور حرفه‌ای در بازارهای داخلی و بین‌المللی.",
        results: [
          "تجربه چهارزبانه با پشتیبانی کامل RTL و LTR",
          "۱۳۲ مسیر محتوایی و محصول قابل ایندکس",
          "وب‌سایت عملیاتی با فرایند تست‌شده درخواست قیمت",
        ],
      },
      de: {
        title: "Sadaf Stone",
        subtitle: "Mehrsprachige Naturstein-Plattform",
        description:
          "Eine mehrsprachige B2B/B2C-Plattform für einen iranischen Natursteinhersteller mit durchsuchbarem Katalog, technischen Produktdaten, Angebotsanfragen und internationaler SEO-Struktur.",
        results: [
          "Vier Sprachen mit vollständiger RTL/LTR-Unterstützung",
          "132 indexierbare Produkt- und Inhaltsrouten",
          "Produktive Website mit getesteten Angebotsabläufen",
        ],
      },
    },
  },
  {
    slug: "nova",
    accent: "amethyst",
    technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "TanStack Query"],
    links: {
      live: "https://nova.aisalotfi.ir",
      caseStudySlug: "nova",
    },
    coverImage: "/projects/nova-portfolio-showcase.png",
    texts: {
      en: {
        title: "Nova",
        subtitle: "Personal Productivity OS",
        description:
          "A full-stack productivity workspace that brings tasks, projects, calendar events, notes, habits, and recoverable focus sessions into one responsive command center with secure account isolation.",
        results: [
          "Unified six productivity workspaces",
          "Secure rotating sessions and owner-scoped data",
          "Responsive desktop and mobile experience",
        ],
      },
      fa: {
        title: "Nova",
        subtitle: "سیستم‌عامل بهره‌وری شخصی",
        description:
          "فضای کاری فول‌استک برای مدیریت یکپارچه وظایف، پروژه‌ها، تقویم، یادداشت‌ها، عادت‌ها و جلسات تمرکز بازیابی‌پذیر؛ با داشبورد واکنش‌گرا و جداسازی امن اطلاعات هر کاربر.",
        results: [
          "یکپارچه‌سازی شش فضای اصلی بهره‌وری",
          "نشست‌های چرخشی امن و داده‌های مالک‌محور",
          "تجربه کامل دسکتاپ و موبایل",
        ],
      },
      de: {
        title: "Nova",
        subtitle: "Persönliches Produktivitäts-OS",
        description:
          "Ein Full-Stack-Arbeitsbereich für Aufgaben, Projekte, Kalender, Notizen, Gewohnheiten und wiederherstellbare Fokus-Sitzungen – mit responsivem Dashboard und sicherer Datentrennung pro Nutzer.",
        results: [
          "Sechs Produktivitätsbereiche in einem System",
          "Sichere rotierende Sitzungen und besitzergebundene Daten",
          "Responsive Desktop- und Mobile-Erfahrung",
        ],
      },
    },
  },
  {
    slug: "riora",
    accent: "sapphire",
    technologies: ["React Native", "Expo", "TypeScript", "Expo SQLite", "Supabase", "Zustand"],
    links: {
      caseStudySlug: "riora",
    },
    coverImage: "/projects/riora-portfolio-showcase.png",
    texts: {
      en: {
        title: "Riora",
        subtitle: "Local-First Life Planner",
        description:
          "A calm, privacy-minded Android life planner for tasks, habits, journals, health, books, media, goals, and personal insights, designed around offline-first storage and natural Persian RTL interaction.",
        results: [
          "40 routed screens across connected life worlds",
          "420 automated and component tests passed",
          "Production-signed Android APK and AAB",
        ],
      },
      fa: {
        title: "Riora",
        subtitle: "برنامه‌ریز جامع و محلی زندگی",
        description:
          "اپلیکیشن آرام و حریم‌خصوصی‌محور اندروید برای مدیریت کارها، عادت‌ها، ژورنال، سلامت، کتاب‌ها، رسانه، اهداف و بینش‌های شخصی؛ با ذخیره‌سازی آفلاین و تجربه طبیعی فارسی و RTL.",
        results: [
          "۴۰ مسیر کاربردی در دنیاهای به‌هم‌پیوسته زندگی",
          "عبور موفق از ۴۲۰ تست خودکار و کامپوننتی",
          "خروجی APK و AAB امضاشده برای اندروید",
        ],
      },
      de: {
        title: "Riora",
        subtitle: "Local-First-Lebensplaner",
        description:
          "Ein ruhiger, datenschutzorientierter Android-Lebensplaner für Aufgaben, Gewohnheiten, Journal, Gesundheit, Bücher, Medien, Ziele und persönliche Einblicke – offline-first und mit natürlicher persischer RTL-Bedienung.",
        results: [
          "40 Routen in verbundenen Lebensbereichen",
          "420 bestandene Automatisierungs- und Komponententests",
          "Produktionssignierte Android-APK und AAB",
        ],
      },
    },
  },
  {
    slug: "rivana",
    accent: "emerald",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM", "Zustand"],
    links: {
      live: "https://rivana.aisalotfi.ir",
      caseStudySlug: "rivana",
    },
    coverImage: "/projects/rivana-portfolio-showcase.png",
    texts: {
      en: {
        title: "Rivana",
        subtitle: "Premium RTL Commerce",
        description:
          "A Persian luxury storefront for women's bags and accessories with variant-aware products, URL-driven discovery, wishlist and cart flows, and server-authoritative checkout, coupons, pricing, and inventory.",
        results: [
          "30 products with variant-level inventory",
          "Tamper-resistant server-side pricing and coupons",
          "Transactional checkout with stock protection",
        ],
      },
      fa: {
        title: "Rivana",
        subtitle: "فروشگاه لوکس فارسی",
        description:
          "فروشگاه اینترنتی فارسی برای کیف و اکسسوری زنانه با تنوع واقعی رنگ و اندازه، جست‌وجو و فیلتر URLمحور، علاقه‌مندی و سبد خرید، و محاسبه امن قیمت، تخفیف و موجودی در سرور.",
        results: [
          "۳۰ محصول با موجودی مستقل برای هر تنوع",
          "قیمت‌گذاری و کوپن مقاوم در برابر دست‌کاری",
          "تسویه‌حساب تراکنشی با حفاظت از موجودی",
        ],
      },
      de: {
        title: "Rivana",
        subtitle: "Premium-RTL-Commerce",
        description:
          "Ein persischer Luxus-Shop für Damenhandtaschen und Accessoires mit Varianten, URL-gesteuerter Produktsuche, Wunschliste und Warenkorb sowie serverseitig verbindlicher Preis-, Gutschein- und Bestandslogik.",
        results: [
          "30 Produkte mit Bestand auf Variantenebene",
          "Manipulationssichere serverseitige Preise und Gutscheine",
          "Transaktionaler Checkout mit Bestandsschutz",
        ],
      },
    },
  },
  {
    slug: "kansha",
    accent: "copper",
    coverImage: "/projects/kansha-portfolio-showcase.png",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Jikan API", "PWA"],
    links: {
      live: "https://kansha.aisalotfi.ir",
      github: "https://github.com/AisaLotfi/kansha",
      caseStudySlug: "kansha",
    },
    texts: {
      en: {
        title: "KANSHA",
        subtitle: "Anime Discovery Experience",
        description:
          "A media-rich anime discovery experience with dynamic catalog browsing, search and genres, detail tabs, trailers, profiles, favorites, watchlists, resilient API data, and an installable PWA shell.",
        results: [
          "Responsive catalog with more than 49 titles",
          "Search, detail tabs, trailers, and watchlists",
          "Code splitting, API caching, and offline PWA",
        ],
      },
      fa: {
        title: "کانشا",
        subtitle: "تجربه کشف و تماشای انیمه",
        description:
          "تجربه‌ای رسانه‌محور برای کشف انیمه با کاتالوگ پویا، جست‌وجو و ژانر، تب‌های جزئیات، تریلر، پروفایل، علاقه‌مندی، Watchlist، داده تاب‌آور API و پوسته PWA قابل نصب.",
        results: [
          "کاتالوگ واکنش‌گرا با بیش از ۴۹ عنوان",
          "جست‌وجو، جزئیات، تریلر و Watchlist",
          "تقسیم کد، کش API و PWA آفلاین",
        ],
      },
      de: {
        title: "KANSHA",
        subtitle: "Anime-Discovery-Erlebnis",
        description:
          "Ein medienreiches Anime-Discovery-Erlebnis mit dynamischem Katalog, Suche und Genres, Detail-Tabs, Trailern, Profilen, Favoriten, Watchlist, resilienten API-Daten und installierbarer PWA.",
        results: [
          "Responsiver Katalog mit über 49 Titeln",
          "Suche, Detail-Tabs, Trailer und Watchlist",
          "Code-Splitting, API-Cache und Offline-PWA",
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
  coverImage?: string;
  gallery?: string[];
}

export function getProjects(locale: Locale): ResolvedProject[] {
  return projectList.map((p) => ({
    slug: p.slug,
    accent: p.accent,
    featured: p.featured ?? false,
    technologies: p.technologies,
    links: p.links,
    coverImage: p.coverImage,
    gallery: p.gallery,
    ...p.texts[locale],
  }));
}
