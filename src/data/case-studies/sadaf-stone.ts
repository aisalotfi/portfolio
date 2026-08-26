import type { Locale } from "@/i18n";
import type { ProjectAccent } from "@/data/projects";

export interface CaseStudyTexts {
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  solution: string;
  responsibilities: string[];
  challenges: { title: string; text: string }[];
  outcome: string;
  lessons: string[];
}

/**
 * A portable case study.
 *
 * To add one: create `src/data/case-studies/<slug>.ts` exporting a
 * `CaseStudy`, then append it to `caseStudies` below. The generic
 * route at `[locale]/case-study/[slug]` picks it up automatically
 * (static params included).
 */
export interface CaseStudy {
  slug: string;
  accent?: ProjectAccent;
  technologies: string[];
  links?: { live?: string; github?: string };
  coverImage?: string;
  texts: Record<Locale, CaseStudyTexts>;
}

const sadafStone: CaseStudy = {
  slug: "sadaf-stone",
  accent: "copper",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "next-intl"],
  links: { live: "https://sadafstonee.ir/fa" },
  coverImage: "/projects/sadaf-stone-portfolio-showcase.png",
  texts: {
    en: {
      title: "Sadaf Stone",
      subtitle: "Official Company Site",
      overview:
        "Sadaf Stone is the multilingual B2B/B2C web platform of an Iranian natural-stone manufacturer. It presents the company, quarries, products, technical specifications, and quotation paths to domestic and international buyers in four languages.",
      problem:
        "The company needed a credible digital sales surface for a visual, specification-heavy product. Buyers had to discover the right stone, understand technical properties, switch naturally between RTL and LTR languages, and request a quote without a slow or confusing experience.",
      solution:
        "I built a responsive Next.js platform with a filterable catalog, localized product pages, structured technical data, quotation flows, multilingual metadata, canonical and hreflang coverage, PostgreSQL-backed content, and performance-conscious media delivery.",
      responsibilities: [
        "Product discovery, UI/UX design, and complete responsive implementation",
        "Next.js architecture, typed product models, PostgreSQL and Prisma integration",
        "Four-language localization with Persian/Arabic RTL and English/Russian LTR",
        "Catalog, product details, quotation forms, validation, and administrative workflows",
        "Technical SEO, accessibility, performance hardening, deployment, and domain operations",
      ],
      challenges: [
        {
          title: "Multilingual product architecture",
          text: "A large catalog needed stable localized routes, translated metadata, canonical URLs, hreflang alternates, and direction-aware components without duplicating product logic.",
        },
        {
          title: "Image quality versus performance",
          text: "High-resolution stone textures had to stay useful for material evaluation while loading efficiently across phones, tablets, and large displays. Responsive media, deferred interactive visuals, and below-the-fold optimization balanced both goals.",
        },
        {
          title: "Trustworthy lead capture",
          text: "Quotation and admin surfaces required typed validation, deduplication, authorization boundaries, upload checks, and consistent error handling so a marketing site could support real business operations.",
        },
      ],
      outcome:
        "The platform launched publicly with 132 sitemap routes across four languages and a professional catalog and quotation experience. The release candidate later generated 172 static pages and passed unit, security, accessibility, link, API, and viewport regression suites.",
      lessons: [
        "Multilingual SEO is a routing and data-model concern, not only a translation task",
        "Visual product sites need an explicit media-performance budget",
        "Business forms require the same security discipline as account features",
        "Client communication, deployment, monitoring, and regression tests are part of delivery",
      ],
    },
    fa: {
      title: "سنگ صدف",
      subtitle: "وب‌سایت رسمی شرکت",
      overview:
        "سنگ صدف پلتفرم چندزبانه B2B و B2C یک تولیدکننده ایرانی سنگ طبیعی است؛ برای معرفی شرکت، معادن، محصولات، مشخصات فنی و مسیرهای دریافت قیمت به خریداران داخلی و بین‌المللی در چهار زبان.",
      problem:
        "شرکت به یک سطح فروش دیجیتال معتبر برای محصولی تصویری و مشخصات‌محور نیاز داشت. خریدار باید سنگ مناسب را پیدا می‌کرد، ویژگی‌های فنی را می‌فهمید، بین زبان‌های RTL و LTR جابه‌جا می‌شد و بدون تجربه کند یا پیچیده درخواست قیمت می‌داد.",
      solution:
        "پلتفرمی واکنش‌گرا با Next.js ساختم که کاتالوگ فیلترپذیر، صفحات محلی‌سازی‌شده محصول، داده فنی ساختاریافته، درخواست قیمت، متادیتای چندزبانه، Canonical و hreflang، محتوای متصل به PostgreSQL و تحویل بهینه رسانه را ترکیب می‌کند.",
      responsibilities: [
        "کشف نیاز محصول، طراحی UI/UX و پیاده‌سازی کامل واکنش‌گرا",
        "معماری Next.js، مدل‌های تایپ‌شده محصول و اتصال PostgreSQL و Prisma",
        "محلی‌سازی چهارزبانه با فارسی و عربی RTL و انگلیسی و روسی LTR",
        "کاتالوگ، جزئیات محصول، فرم‌های قیمت، اعتبارسنجی و جریان‌های مدیریتی",
        "SEO فنی، دسترس‌پذیری، کارایی، استقرار و عملیات دامنه",
      ],
      challenges: [
        {
          title: "معماری چندزبانه محصولات",
          text: "کاتالوگ بزرگ به مسیرهای پایدار محلی‌سازی‌شده، متادیتای ترجمه‌شده، Canonical، hreflang و کامپوننت‌های جهت‌پذیر نیاز داشت؛ بدون تکرار منطق محصول.",
        },
        {
          title: "تعادل کیفیت تصویر و کارایی",
          text: "بافت سنگ باید برای ارزیابی متریال واضح می‌ماند و هم‌زمان در موبایل سریع بارگذاری می‌شد. رسانه واکنش‌گرا، تعویق تصاویر تعاملی و بهینه‌سازی محتوای پایین صفحه این تعادل را ساختند.",
        },
        {
          title: "جذب سرنخ قابل اعتماد",
          text: "فرم‌های قیمت و بخش مدیریت به اعتبارسنجی تایپ‌شده، حذف درخواست تکراری، مرزهای دسترسی، بررسی فایل و خطای سازگار نیاز داشتند تا سایت معرفی بتواند عملیات واقعی کسب‌وکار را پشتیبانی کند.",
        },
      ],
      outcome:
        "پلتفرم با ۱۳۲ مسیر Sitemap در چهار زبان منتشر شد و تجربه‌ای حرفه‌ای برای کاتالوگ و دریافت قیمت ساخت. نسخه Release Candidate بعدی ۱۷۲ صفحه استاتیک تولید کرد و از تست‌های واحد، امنیت، دسترس‌پذیری، لینک، API و Viewport عبور کرد.",
      lessons: [
        "SEO چندزبانه مسئله Routing و مدل داده است، نه فقط ترجمه متن",
        "سایت تصویری محصول به بودجه روشن برای کارایی رسانه نیاز دارد",
        "فرم تجاری به همان اندازه قابلیت حساب کاربری به امنیت نیاز دارد",
        "ارتباط با کارفرما، استقرار، مانیتورینگ و تست رگرسیون بخشی از تحویل‌اند",
      ],
    },
    de: {
      title: "Sadaf Stone",
      subtitle: "Offizielle Firmenwebsite",
      overview:
        "Sadaf Stone ist die mehrsprachige B2B/B2C-Webplattform eines iranischen Natursteinherstellers. Sie präsentiert Unternehmen, Steinbrüche, Produkte, technische Daten und Angebotswege für nationale und internationale Käufer in vier Sprachen.",
      problem:
        "Das Unternehmen brauchte eine glaubwürdige digitale Verkaufsfläche für ein visuelles und spezifikationsreiches Produkt. Käufer sollten passende Steine finden, technische Eigenschaften verstehen, zwischen RTL- und LTR-Sprachen wechseln und unkompliziert Angebote anfragen können.",
      solution:
        "Ich entwickelte eine responsive Next.js-Plattform mit filterbarem Katalog, lokalisierten Produktseiten, strukturierten technischen Daten, Angebotsabläufen, mehrsprachigen Metadaten, Canonical-/hreflang-Abdeckung, PostgreSQL-Inhalten und performancebewusster Medienauslieferung.",
      responsibilities: [
        "Produktanalyse, UI/UX-Design und vollständige responsive Umsetzung",
        "Next.js-Architektur, typisierte Produktmodelle sowie PostgreSQL-/Prisma-Integration",
        "Vier Sprachen: Persisch/Arabisch RTL und Englisch/Russisch LTR",
        "Katalog, Produktdetails, Angebotsformulare, Validierung und administrative Abläufe",
        "Technische SEO, Barrierefreiheit, Performance, Deployment und Domainbetrieb",
      ],
      challenges: [
        {
          title: "Mehrsprachige Produktarchitektur",
          text: "Der große Katalog brauchte stabile lokalisierte Routen, übersetzte Metadaten, Canonicals, hreflang und richtungsbewusste Komponenten ohne duplizierte Produktlogik.",
        },
        {
          title: "Bildqualität und Performance",
          text: "Hochauflösende Steintexturen mussten für die Materialbewertung scharf und zugleich auf Mobilgeräten schnell bleiben. Responsive Medien und verzögerte interaktive Inhalte balancieren beide Ziele.",
        },
        {
          title: "Vertrauenswürdige Lead-Erfassung",
          text: "Angebots- und Adminflächen brauchten typisierte Validierung, Duplikatschutz, Autorisierungsgrenzen, Upload-Prüfung und konsistente Fehlerbehandlung für reale Geschäftsabläufe.",
        },
      ],
      outcome:
        "Die Plattform ging mit 132 Sitemap-Routen in vier Sprachen live. Der spätere Release Candidate erzeugte 172 statische Seiten und bestand Unit-, Sicherheits-, Accessibility-, Link-, API- und Viewport-Regressionsprüfungen.",
      lessons: [
        "Mehrsprachige SEO ist eine Routing- und Datenmodellaufgabe, nicht nur Übersetzung",
        "Visuelle Produktseiten brauchen ein klares Medien-Performancebudget",
        "Geschäftsformulare benötigen dieselbe Sicherheitsdisziplin wie Kontofunktionen",
        "Kundenkommunikation, Deployment, Monitoring und Regressionstests gehören zur Lieferung",
      ],
    },
  },
};

const nova: CaseStudy = {
  slug: "nova",
  accent: "amethyst",
  technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "TanStack Query"],
  links: { live: "https://nova.aisalotfi.ir" },
  coverImage: "/projects/nova-portfolio-showcase.png",
  texts: {
    en: {
      title: "Nova",
      subtitle: "Personal Productivity OS",
      overview:
        "Nova is a full-stack productivity command center that unifies tasks, projects, calendar events, notes, habits, and focus sessions. Its responsive workspace turns current account data into an actionable daily view instead of a collection of disconnected tools.",
      problem:
        "Productivity data usually becomes fragmented across task lists, calendars, notes, and timers. The product needed one coherent interface while still protecting each user's records, supporting reliable mutations, and staying usable on both desktop and mobile.",
      solution:
        "I built a typed monorepo with a Next.js frontend, a NestJS REST API, Prisma, and PostgreSQL. TanStack Query coordinates server state and optimistic interactions, while secure cookie sessions, refresh-token rotation, CSRF protection, validation, and owner-scoped queries establish a real authorization boundary.",
      responsibilities: [
        "Designed the product system, responsive dashboard, and reusable interface components",
        "Structured the web and API applications as independently deployable workspace packages",
        "Implemented tasks, projects, calendar, notes, habits, and focus workflows end to end",
        "Designed the PostgreSQL schema, Prisma migrations, REST contracts, filtering, and pagination",
        "Implemented authentication, session rotation, CSRF protection, ownership guards, and deployment configuration",
      ],
      challenges: [
        {
          title: "Secure cross-service authentication",
          text: "The web frontend and API deploy independently. I kept browser requests same-origin through a reverse proxy, used HttpOnly cookies, rotated refresh sessions, and added CSRF validation without exposing credentials to client JavaScript.",
        },
        {
          title: "Strict ownership boundaries",
          text: "Every resource query and mutation is scoped by the authenticated owner on the server, with separate seeded accounts used to verify that identifiers cannot cross account boundaries.",
        },
        {
          title: "Responsive real-time workflows",
          text: "Focused client boundaries, cached queries, targeted invalidation, optimistic completion with rollback, and recoverable focus sessions keep interaction immediate without sacrificing consistency.",
        },
      ],
      outcome:
        "Nova became a deployed, portfolio-ready full-stack product with six connected workspaces, a responsive light/dark interface, persisted account data, secure authentication, and production-oriented deployment across independently hosted web, API, and database services.",
      lessons: [
        "Security and ownership need to shape the data model and API from the beginning",
        "Optimistic UI works best when every mutation has an explicit rollback and invalidation plan",
        "A monorepo is valuable when shared contracts stay framework-neutral",
        "Productivity software needs calm information hierarchy more than extra dashboard widgets",
      ],
    },
    fa: {
      title: "Nova",
      subtitle: "سیستم‌عامل بهره‌وری شخصی",
      overview:
        "Nova یک مرکز فرماندهی فول‌استک برای مدیریت وظایف، پروژه‌ها، رویدادهای تقویم، یادداشت‌ها، عادت‌ها و جلسات تمرکز است. این محصول داده‌های واقعی هر حساب را به یک نمای روزانه عملی و یکپارچه تبدیل می‌کند.",
      problem:
        "اطلاعات بهره‌وری معمولاً بین فهرست کارها، تقویم، یادداشت و تایمرهای جدا پخش می‌شود. محصول باید همه این جریان‌ها را در یک تجربه منسجم جمع می‌کرد، اطلاعات هر کاربر را جدا نگه می‌داشت و در دسکتاپ و موبایل به یک اندازه کاربردی می‌ماند.",
      solution:
        "یک مونوریپوی تایپ‌شده با فرانت‌اند Next.js، API مبتنی بر NestJS، Prisma و PostgreSQL ساختم. TanStack Query وضعیت سرور و تعاملات خوش‌بینانه را مدیریت می‌کند و نشست‌های Cookieمحور، چرخش Refresh Token، حفاظت CSRF، اعتبارسنجی و کوئری‌های مالک‌محور مرز امنیتی واقعی ایجاد می‌کنند.",
      responsibilities: [
        "طراحی سیستم محصول، داشبورد واکنش‌گرا و کامپوننت‌های رابط قابل استفاده مجدد",
        "معماری اپ وب و API به‌عنوان پکیج‌های مستقل و قابل استقرار",
        "پیاده‌سازی کامل وظایف، پروژه‌ها، تقویم، یادداشت‌ها، عادت‌ها و تمرکز",
        "طراحی اسکیمای PostgreSQL، مایگریشن‌های Prisma، قراردادهای REST، فیلتر و صفحه‌بندی",
        "پیاده‌سازی احراز هویت، چرخش نشست، CSRF، کنترل مالکیت و تنظیمات استقرار",
      ],
      challenges: [
        {
          title: "احراز هویت امن بین سرویس‌ها",
          text: "فرانت‌اند و API مستقل مستقر می‌شوند. درخواست‌های مرورگر را با Reverse Proxy هم‌مبدأ نگه داشتم و از Cookieهای HttpOnly، چرخش نشست و اعتبارسنجی CSRF بدون افشای اطلاعات ورود در جاوااسکریپت استفاده کردم.",
        },
        {
          title: "مرزبندی دقیق مالکیت داده",
          text: "تمام خواندن‌ها و تغییرات منابع در سرور با شناسه کاربر فعلی محدود می‌شوند و حساب‌های آزمایشی جدا برای بررسی جلوگیری از دسترسی متقاطع ساخته شدند.",
        },
        {
          title: "تعامل سریع و سازگار",
          text: "مرزهای محدود کلاینت، کش کوئری، باطل‌سازی هدفمند، به‌روزرسانی خوش‌بینانه همراه Rollback و جلسات تمرکز بازیابی‌پذیر، سرعت رابط را بدون قربانی کردن سازگاری حفظ می‌کنند.",
        },
      ],
      outcome:
        "Nova به یک محصول فول‌استک آنلاین و مناسب ارائه در پورتفولیو تبدیل شد؛ با شش فضای کاری متصل، رابط روشن و تاریک واکنش‌گرا، داده‌های ماندگار حساب، احراز هویت امن و معماری استقرار مستقل وب، API و پایگاه داده.",
      lessons: [
        "امنیت و مالکیت باید از ابتدا در مدل داده و API حضور داشته باشند",
        "رابط خوش‌بینانه زمانی قابل اعتماد است که Rollback و Invalidation مشخص داشته باشد",
        "مونوریپو وقتی ارزشمند است که قراردادهای مشترک مستقل از فریم‌ورک بمانند",
        "نرم‌افزار بهره‌وری بیش از ویجت‌های بیشتر به سلسله‌مراتب آرام اطلاعات نیاز دارد",
      ],
    },
    de: {
      title: "Nova",
      subtitle: "Persönliches Produktivitäts-OS",
      overview:
        "Nova ist eine Full-Stack-Kommandozentrale für Aufgaben, Projekte, Kalenderereignisse, Notizen, Gewohnheiten und Fokus-Sitzungen. Aktuelle Kontodaten werden zu einer zusammenhängenden, handlungsorientierten Tagesansicht.",
      problem:
        "Produktivitätsdaten verteilen sich häufig auf getrennte Listen, Kalender, Notizen und Timer. Das Produkt brauchte eine einheitliche Oberfläche, sichere Datentrennung pro Nutzer und eine gleichwertige Bedienung auf Desktop und Mobilgeräten.",
      solution:
        "Ich entwickelte ein typisiertes Monorepo mit Next.js, NestJS, Prisma und PostgreSQL. TanStack Query steuert Serverzustand und optimistische Interaktionen; HttpOnly-Sitzungen, Refresh-Rotation, CSRF-Schutz, Validierung und besitzergebundene Abfragen bilden die Sicherheitsgrenze.",
      responsibilities: [
        "Produktdesign, responsives Dashboard und wiederverwendbare UI-Komponenten",
        "Architektur unabhängig deploybarer Web- und API-Pakete",
        "End-to-End-Umsetzung von Aufgaben, Projekten, Kalender, Notizen, Gewohnheiten und Fokus",
        "PostgreSQL-Schema, Prisma-Migrationen, REST-Verträge, Filter und Pagination",
        "Authentifizierung, Sitzungsrotation, CSRF, Eigentumsschutz und Deployment-Konfiguration",
      ],
      challenges: [
        {
          title: "Sichere Authentifizierung über mehrere Dienste",
          text: "Web und API werden getrennt deployt. Ein Same-Origin-Proxy, HttpOnly-Cookies, rotierende Refresh-Sitzungen und CSRF-Prüfung schützen Anmeldedaten ohne Zugriff aus Client-JavaScript.",
        },
        {
          title: "Strikte Eigentumsgrenzen",
          text: "Jede Ressourcenabfrage und Mutation wird serverseitig auf den aktuellen Nutzer begrenzt; getrennte Testkonten prüfen, dass IDs keine Kontogrenzen überschreiten.",
        },
        {
          title: "Schnelle, konsistente Workflows",
          text: "Gezielte Client-Grenzen, Query-Caching, Invalidierung, optimistische Updates mit Rollback und wiederherstellbare Fokus-Sitzungen verbinden Geschwindigkeit mit Konsistenz.",
        },
      ],
      outcome:
        "Nova wurde zu einem deployten Full-Stack-Produkt mit sechs verbundenen Arbeitsbereichen, responsiver Hell-/Dunkeloberfläche, persistenten Kontodaten und einer produktionsorientierten Web-, API- und Datenbankarchitektur.",
      lessons: [
        "Sicherheit und Eigentum müssen Datenmodell und API von Beginn an prägen",
        "Optimistische Oberflächen brauchen einen klaren Rollback- und Invalidierungsplan",
        "Ein Monorepo ist stark, wenn gemeinsame Verträge frameworkneutral bleiben",
        "Produktivitätssoftware profitiert stärker von ruhiger Hierarchie als von mehr Widgets",
      ],
    },
  },
};

const riora: CaseStudy = {
  slug: "riora",
  accent: "sapphire",
  technologies: ["React Native", "Expo", "TypeScript", "Expo SQLite", "Supabase", "Zustand"],
  coverImage: "/projects/riora-portfolio-showcase.png",
  texts: {
    en: {
      title: "Riora",
      subtitle: "Local-First Life Planner",
      overview:
        "Riora is a calm Android life planner that connects planning, habits, journaling, health, books, media, goals, and personal insights. It is built local-first so core workflows remain private and useful without a network connection.",
      problem:
        "A broad life-planning app can easily become noisy, judgmental, or fragile. The challenge was to support many connected domains while keeping the home screen focused, preserving existing user data through schema evolution, and delivering true Persian RTL behavior on real Android hardware.",
      solution:
        "I built the app with Expo Router, typed React Native feature layers, versioned SQLite migrations, repository-based persistence, and lightweight Zustand preferences. Supabase adds optional phone authentication and owner-scoped cloud snapshots without replacing the offline-first source of truth.",
      responsibilities: [
        "Defined the product specification, information architecture, visual language, and bilingual UX",
        "Implemented 40 routes across Planner, Journal, Habits, Insights, Health, Media, Goals, Focus, and settings",
        "Designed SQLite entities, forward-only migrations, typed repositories, and backup/restore flows",
        "Built Persian RTL/LTR behavior, Jalali/Gregorian presentation, accessibility contracts, and theme support",
        "Configured Android permissions, notifications, authentication, production signing, automated QA, and physical-device testing",
      ],
      challenges: [
        {
          title: "Local-first data evolution",
          text: "Structured history had to move from transitional stores into SQLite without deleting existing data. Idempotent migrations, checkpoints, typed repositories, and reopen/stress tests made the transition recoverable.",
        },
        {
          title: "Real Persian RTL on Android",
          text: "Android mirroring can produce double-reversed geometry and misplaced horizontal lists. Explicit direction contracts and a shared RTL horizontal-scroll primitive were validated across all feature screens on a physical device.",
        },
        {
          title: "Optional cloud without losing privacy",
          text: "Signed-in writes create debounced owner-scoped snapshots, pending changes flush on background or logout, and an empty authenticated device can restore the latest backup while offline data remains primary.",
        },
      ],
      outcome:
        "Riora reached a production-signed Android release-candidate stage: 40 routes and 39 feature screens were audited, 420 automated/component tests passed, and universal APK plus four-ABI AAB builds passed physical-device smoke testing on Android 16. Public phone-auth release remains gated on reliable live OTP delivery.",
      lessons: [
        "Local-first architecture needs explicit migration and recovery plans, not only offline storage",
        "RTL correctness must be verified on real devices across whole navigation flows",
        "A large product stays understandable when every feature has a clear persistence owner",
        "Release engineering, signing, permissions, and recovery are part of the product experience",
      ],
    },
    fa: {
      title: "Riora",
      subtitle: "برنامه‌ریز جامع و محلی زندگی",
      overview:
        "Riora یک اپلیکیشن آرام اندرویدی است که برنامه‌ریزی، عادت‌ها، ژورنال، سلامت، کتاب‌ها، رسانه، اهداف و بینش‌های شخصی را به هم متصل می‌کند. معماری Local-first باعث می‌شود جریان‌های اصلی بدون اینترنت هم خصوصی و کاربردی بمانند.",
      problem:
        "یک اپ جامع زندگی به‌راحتی می‌تواند شلوغ، قضاوت‌گر یا شکننده شود. چالش اصلی پشتیبانی از دنیاهای متعدد و مرتبط بود؛ بدون شلوغ کردن صفحه خانه، از دست دادن داده‌های قبلی هنگام تکامل دیتابیس یا ایجاد خطاهای RTL روی اندروید واقعی.",
      solution:
        "اپ را با Expo Router، لایه‌های تایپ‌شده React Native، مایگریشن‌های نسخه‌بندی‌شده SQLite، Repositoryهای داده و تنظیمات سبک Zustand ساختم. Supabase احراز هویت تلفنی و بکاپ ابری مالک‌محور اختیاری را اضافه می‌کند، بدون اینکه منبع اصلی آفلاین را جایگزین کند.",
      responsibilities: [
        "تعریف مشخصات محصول، معماری اطلاعات، زبان بصری و تجربه دوزبانه",
        "پیاده‌سازی ۴۰ مسیر برای پلنر، ژورنال، عادت‌ها، بینش‌ها، سلامت، رسانه، اهداف، تمرکز و تنظیمات",
        "طراحی موجودیت‌های SQLite، مایگریشن‌های رو‌به‌جلو، Repositoryهای تایپ‌شده و فرایند بکاپ و بازیابی",
        "پیاده‌سازی واقعی RTL و LTR، نمایش جلالی و میلادی، دسترس‌پذیری و تم",
        "تنظیم مجوزها، اعلان‌ها، احراز هویت، امضای نسخه اندروید، QA خودکار و تست دستگاه واقعی",
      ],
      challenges: [
        {
          title: "تکامل امن داده‌های Local-first",
          text: "تاریخچه ساختاریافته باید بدون حذف داده‌های موجود از Storeهای موقت به SQLite منتقل می‌شد. مایگریشن‌های Idempotent، Checkpoint، Repositoryهای تایپ‌شده و تست بازگشایی و فشار، این انتقال را بازیابی‌پذیر کردند.",
        },
        {
          title: "RTL واقعی فارسی روی اندروید",
          text: "Mirroring اندروید می‌تواند هندسه را دوبار معکوس و لیست‌های افقی را جابه‌جا کند. قراردادهای صریح جهت و کامپوننت مشترک اسکرول RTL روی تمام صفحات و دستگاه واقعی بررسی شدند.",
        },
        {
          title: "ابر اختیاری بدون از دست دادن حریم خصوصی",
          text: "تغییرات کاربران واردشده Snapshotهای Debounceشده و مالک‌محور می‌سازند، داده معلق هنگام Background یا خروج Flush می‌شود و دستگاه جدید می‌تواند آخرین بکاپ را بازیابی کند؛ در حالی که داده محلی همچنان منبع اصلی است.",
        },
      ],
      outcome:
        "Riora به مرحله Release Candidate امضاشده اندروید رسید: ۴۰ مسیر و ۳۹ صفحه قابلیت ممیزی شد، ۴۲۰ تست خودکار و کامپوننتی موفق بود و APK عمومی و AAB چهارتایی روی Android 16 و دستگاه واقعی تست شدند. انتشار عمومی احراز هویت تلفنی تا پایدار شدن ارسال OTP متوقف مانده است.",
      lessons: [
        "Local-first فقط ذخیره آفلاین نیست و به برنامه روشن مهاجرت و بازیابی نیاز دارد",
        "درستی RTL باید روی دستگاه واقعی و در جریان کامل ناوبری بررسی شود",
        "محصول بزرگ وقتی قابل فهم می‌ماند که مالکیت داده هر قابلیت مشخص باشد",
        "امضا، مجوزها، بازیابی و مهندسی انتشار بخشی از تجربه محصول‌اند",
      ],
    },
    de: {
      title: "Riora",
      subtitle: "Local-First-Lebensplaner",
      overview:
        "Riora ist ein ruhiger Android-Lebensplaner, der Planung, Gewohnheiten, Journal, Gesundheit, Bücher, Medien, Ziele und persönliche Einblicke verbindet. Die Local-First-Architektur hält zentrale Abläufe privat und offline nutzbar.",
      problem:
        "Eine umfassende Lebens-App kann schnell laut, wertend oder fragil werden. Viele verbundene Bereiche mussten unterstützt werden, ohne Home zu überladen, vorhandene Daten bei Schemaänderungen zu verlieren oder persisches RTL auf realer Android-Hardware zu beschädigen.",
      solution:
        "Ich entwickelte die App mit Expo Router, typisierten React-Native-Schichten, versionierten SQLite-Migrationen, Repository-basierter Persistenz und schlanken Zustand-Einstellungen. Supabase ergänzt optionale Telefonanmeldung und besitzergebundene Cloud-Snapshots, ohne die lokale Datenquelle zu ersetzen.",
      responsibilities: [
        "Produktspezifikation, Informationsarchitektur, visuelle Sprache und zweisprachige UX",
        "40 Routen für Planner, Journal, Gewohnheiten, Insights, Gesundheit, Medien, Ziele, Fokus und Einstellungen",
        "SQLite-Entitäten, Vorwärtsmigrationen, typisierte Repositories sowie Backup und Restore",
        "Persisches RTL/LTR, Jalali-/Gregorianische Darstellung, Barrierefreiheit und Theme-Unterstützung",
        "Android-Berechtigungen, Benachrichtigungen, Authentifizierung, Signierung, QA und Gerätetests",
      ],
      challenges: [
        {
          title: "Sichere Local-First-Datenmigration",
          text: "Historische Daten mussten ohne Verlust aus Übergangsstores nach SQLite wandern. Idempotente Migrationen, Checkpoints, typisierte Repositories und Wiederöffnungs-/Stresstests machten den Übergang wiederherstellbar.",
        },
        {
          title: "Echtes persisches RTL auf Android",
          text: "Android-Mirroring kann Geometrie doppelt umkehren. Explizite Richtungsverträge und eine gemeinsame RTL-Scroll-Komponente wurden über alle Feature-Screens auf echter Hardware geprüft.",
        },
        {
          title: "Optionale Cloud bei lokaler Privatsphäre",
          text: "Besitzergebundene Snapshots werden verzögert gespeichert, beim Hintergrundwechsel oder Logout geleert und auf einem neuen Gerät wiederhergestellt, während lokale Daten primär bleiben.",
        },
      ],
      outcome:
        "Riora erreichte den produktionssignierten Android-Release-Candidate: 40 Routen und 39 Feature-Screens wurden geprüft, 420 Tests bestanden und universelle APK sowie Vier-ABI-AAB liefen im Gerätetest unter Android 16. Der öffentliche Telefon-Auth-Release wartet noch auf zuverlässige OTP-Zustellung.",
      lessons: [
        "Local-First braucht konkrete Migrations- und Wiederherstellungspläne",
        "RTL muss auf realen Geräten über vollständige Abläufe geprüft werden",
        "Klare Datenverantwortung hält ein großes Produkt verständlich",
        "Signierung, Berechtigungen und Recovery gehören zur Produkterfahrung",
      ],
    },
  },
};

const rivana: CaseStudy = {
  slug: "rivana",
  accent: "emerald",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM", "Zustand"],
  links: { live: "https://rivana.aisalotfi.ir" },
  coverImage: "/projects/rivana-portfolio-showcase.png",
  texts: {
    en: {
      title: "Rivana",
      subtitle: "Premium Persian E-commerce",
      overview:
        "Rivana is a Persian RTL commerce experience for women's bags and accessories. It combines premium editorial presentation with a real product, variant, cart, coupon, inventory, quotation, and order domain.",
      problem:
        "The early storefront looked like a product demo and trusted browser-submitted prices, totals, and product snapshots. Product-level stock could not represent real color and size combinations, leaving checkout vulnerable to tampering and overselling.",
      solution:
        "I rebuilt the commerce boundary around server-authoritative quotes and orders. PostgreSQL and Drizzle model sellable variants, checkout reloads canonical prices, coupons are validated against business rules, and conditional transactional stock updates protect the final inventory unit.",
      responsibilities: [
        "Audited product architecture, checkout integrity, data flow, UX, and production gaps",
        "Designed the responsive Persian RTL storefront and luxury visual system",
        "Implemented home, shop, product, cart, checkout, wishlist, blog, FAQ, and policy experiences",
        "Designed product variants, database migrations, realistic seed data, quote and order APIs",
        "Extracted and tested commerce rules for pricing, shipping, coupons, snapshots, and stock",
      ],
      challenges: [
        {
          title: "Client price tampering",
          text: "The first order flow accepted browser totals. I changed the server to resolve canonical variants and prices from the database, calculate shipping and discounts itself, and ignore all client-submitted financial totals.",
        },
        {
          title: "Variant-level inventory",
          text: "Color and size needed to identify a real sellable SKU. Product selection, cart identity, order snapshots, and inventory now consistently use product plus variant IDs.",
        },
        {
          title: "Concurrent checkout safety",
          text: "A transaction with conditional stock decrement prevents two buyers from successfully purchasing the last unit, while structured API errors keep out-of-stock recovery understandable.",
        },
      ],
      outcome:
        "Rivana became a live, portfolio-grade commerce product with 30 seeded products, realistic variant SKUs, server-calculated checkout, restriction-aware coupons, transactional inventory, and passing type, lint, build, and commerce test gates.",
      lessons: [
        "Browser cart values are presentation data, never a trusted financial source",
        "The sellable variant—not the product card—is the true unit of commerce",
        "Inventory correctness requires database-level conditions inside the order transaction",
        "Luxury visual design only works when the underlying purchase flow feels equally trustworthy",
      ],
    },
    fa: {
      title: "Rivana",
      subtitle: "فروشگاه لوکس فارسی",
      overview:
        "Rivana یک تجربه فروشگاهی فارسی و RTL برای کیف و اکسسوری زنانه است که نمایش ادیتوریال و لوکس را با مدل واقعی محصول، تنوع، سبد، کوپن، موجودی، پیش‌فاکتور و سفارش ترکیب می‌کند.",
      problem:
        "نسخه اولیه بیشتر شبیه دمو بود و قیمت، جمع سفارش و Snapshot محصول را از مرورگر می‌پذیرفت. موجودی سطح محصول نیز نمی‌توانست ترکیب واقعی رنگ و اندازه را نمایش دهد و تسویه‌حساب در برابر دست‌کاری و فروش بیش‌ازموجودی آسیب‌پذیر بود.",
      solution:
        "مرز تجارت را بر پایه Quote و Order قطعی در سرور بازطراحی کردم. PostgreSQL و Drizzle تنوع‌های قابل فروش را مدل می‌کنند، Checkout قیمت مرجع را دوباره از دیتابیس می‌خواند، کوپن‌ها با قوانین تجاری اعتبارسنجی می‌شوند و کاهش شرطی موجودی داخل تراکنش از واحد نهایی کالا محافظت می‌کند.",
      responsibilities: [
        "ممیزی معماری محصول، امنیت تسویه‌حساب، جریان داده، UX و فاصله تا Production",
        "طراحی فروشگاه واکنش‌گرای فارسی و سیستم بصری لوکس",
        "پیاده‌سازی خانه، فروشگاه، محصول، سبد، تسویه‌حساب، علاقه‌مندی، بلاگ، FAQ و صفحات حقوقی",
        "طراحی تنوع محصول، مایگریشن دیتابیس، داده اولیه واقعی و APIهای Quote و Order",
        "استخراج و تست قوانین قیمت، ارسال، کوپن، Snapshot سفارش و موجودی",
      ],
      challenges: [
        {
          title: "دست‌کاری قیمت در کلاینت",
          text: "فرایند اولیه جمع مالی مرورگر را می‌پذیرفت. سرور را طوری تغییر دادم که تنوع و قیمت مرجع را از دیتابیس بخواند، ارسال و تخفیف را خودش محاسبه کند و تمام مبلغ‌های ارسالی کلاینت را نادیده بگیرد.",
        },
        {
          title: "موجودی در سطح تنوع",
          text: "رنگ و اندازه باید یک SKU قابل فروش واقعی را مشخص می‌کردند. انتخاب محصول، هویت آیتم سبد، Snapshot سفارش و موجودی اکنون همگی از شناسه محصول و Variant استفاده می‌کنند.",
        },
        {
          title: "امنیت خرید هم‌زمان",
          text: "تراکنش همراه کاهش شرطی موجودی اجازه نمی‌دهد دو مشتری آخرین واحد را هم‌زمان بخرند و خطاهای ساختاریافته API مسیر بازیابی ناموجودی را قابل فهم نگه می‌دارند.",
        },
      ],
      outcome:
        "Rivana به یک فروشگاه آنلاین و مناسب پورتفولیو تبدیل شد؛ با ۳۰ محصول اولیه، SKUهای واقعی تنوع، تسویه‌حساب محاسبه‌شده در سرور، کوپن‌های قانون‌محور، موجودی تراکنشی و عبور موفق از بررسی Type، Lint، Build و تست‌های تجارت.",
      lessons: [
        "مقادیر سبد مرورگر فقط برای نمایش‌اند و منبع مالی قابل اعتماد نیستند",
        "واحد واقعی تجارت Variant قابل فروش است، نه کارت کلی محصول",
        "درستی موجودی به شرط دیتابیسی داخل تراکنش سفارش نیاز دارد",
        "طراحی لوکس وقتی اثر دارد که فرایند خرید هم به همان اندازه قابل اعتماد باشد",
      ],
    },
    de: {
      title: "Rivana",
      subtitle: "Premium-E-Commerce auf Persisch",
      overview:
        "Rivana ist ein persisches RTL-Commerce-Erlebnis für Damenhandtaschen und Accessoires. Die hochwertige redaktionelle Präsentation ist mit echten Produkt-, Varianten-, Warenkorb-, Gutschein-, Bestands- und Bestelldomänen verbunden.",
      problem:
        "Der frühe Store vertraute vom Browser gelieferten Preisen, Summen und Produktsnapshots. Bestand auf Produktebene konnte reale Farb-/Größenkombinationen nicht abbilden und machte Checkout anfällig für Manipulation und Überverkauf.",
      solution:
        "Ich baute die Commerce-Grenze um serververbindliche Angebote und Bestellungen neu. PostgreSQL und Drizzle modellieren Varianten; Checkout lädt kanonische Preise, prüft Gutscheine und schützt Bestand durch bedingte Updates innerhalb einer Transaktion.",
      responsibilities: [
        "Audit von Produktarchitektur, Checkout-Integrität, Datenfluss, UX und Produktionslücken",
        "Responsiver persischer RTL-Store und luxuriöses visuelles System",
        "Home, Shop, Produkt, Warenkorb, Checkout, Wunschliste, Blog, FAQ und Rechtstexte",
        "Variantenmodell, Migrationen, realistische Seed-Daten sowie Quote-/Order-APIs",
        "Extraktion und Tests für Preise, Versand, Gutscheine, Snapshots und Bestand",
      ],
      challenges: [
        {
          title: "Preismanipulation im Client",
          text: "Der Server lädt nun Varianten und Preise aus der Datenbank, berechnet Versand und Rabatt selbst und ignoriert alle vom Client übermittelten Finanzsummen.",
        },
        {
          title: "Bestand auf Variantenebene",
          text: "Farbe und Größe identifizieren jetzt eine echte SKU. Auswahl, Warenkorbidentität, Bestellsnapshot und Bestand verwenden durchgängig Produkt- und Varianten-ID.",
        },
        {
          title: "Sicherheit bei parallelem Checkout",
          text: "Eine Transaktion mit bedingter Bestandsreduktion verhindert, dass zwei Käufer dieselbe letzte Einheit erhalten; strukturierte API-Fehler unterstützen die Wiederherstellung.",
        },
      ],
      outcome:
        "Rivana wurde zu einem live verfügbaren Portfolio-Commerce-Produkt mit 30 Seed-Produkten, realistischen Varianten-SKUs, serverberechnetem Checkout, regelbasierten Gutscheinen, transaktionalem Bestand und bestandenen Qualitätsprüfungen.",
      lessons: [
        "Warenkorbwerte im Browser sind Darstellung, keine vertrauenswürdige Finanzquelle",
        "Die verkaufbare Variante ist die echte Commerce-Einheit",
        "Bestandskorrektheit braucht Datenbankbedingungen in der Bestelltransaktion",
        "Luxusdesign überzeugt nur mit einem ebenso vertrauenswürdigen Kaufablauf",
      ],
    },
  },
};

const kansha: CaseStudy = {
  slug: "kansha",
  accent: "copper",
  technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Jikan API", "PWA"],
  links: {
    live: "https://kansha.aisalotfi.ir",
    github: "https://github.com/AisaLotfi/kansha",
  },
  coverImage: "/projects/kansha-portfolio-showcase.png",
  texts: {
    en: {
      title: "KANSHA",
      subtitle: "Anime Discovery & Streaming Experience",
      overview:
        "KANSHA is a media-rich anime discovery experience with a dynamic catalog, genre browsing, search, detail pages, trailers, profiles, favorites, watchlists, and an installable PWA shell.",
      problem:
        "A catalog with dozens of posters, horizontal collections, external anime data, and video content can become slow and difficult to browse—especially on mobile. The interface also needed convincing loading, empty, error, and offline states instead of feeling like a static concept.",
      solution:
        "I built a component-driven React application with route-level code splitting, lazy media, blur placeholders, API caching, responsive carousels, and motion used as interaction feedback. Jikan supplies external metadata, while local fallback data and a service worker keep the experience resilient.",
      responsibilities: [
        "Designed the dark glassmorphism visual system and responsive content hierarchy",
        "Built reusable anime cards, rows, collections, navigation, loading, empty, error, and toast components",
        "Implemented catalog, search, genre, schedule, detail, profile, favorites, watchlist, login, and admin surfaces",
        "Integrated Jikan data, caching, image optimization, trailers, routing, and PWA behavior",
        "Prepared the optional Express, MongoDB, JWT, review, profile, and watchlist backend foundation",
      ],
      challenges: [
        {
          title: "Media-heavy performance",
          text: "Route splitting, lazy images, WebP assets, blur placeholders, CSS code splitting, and production minification reduce the cost of poster-rich pages and keep mobile browsing responsive.",
        },
        {
          title: "External API resilience",
          text: "A service layer centralizes Jikan requests, applies caching, and falls back to curated local catalog data so temporary API failures do not collapse the product experience.",
        },
        {
          title: "Responsive horizontal discovery",
          text: "Reusable rows, visible navigation controls, touch scrolling, and breakpoint-aware cards preserve discovery patterns from desktop screens down to phones.",
        },
      ],
      outcome:
        "KANSHA delivers a responsive catalog of more than 49 anime titles with searchable and filterable discovery, detail tabs, embedded trailers, favorites and watchlists, route-based code splitting, five-minute API caching, and installable/offline PWA support.",
      lessons: [
        "Image loading strategy has more impact than animation polish in media products",
        "External content needs curated fallbacks and centralized failure handling",
        "Horizontal discovery requires equally intentional mouse, keyboard, and touch behavior",
        "PWA offline support is most useful when empty and stale states remain understandable",
      ],
    },
    fa: {
      title: "KANSHA",
      subtitle: "تجربه کشف و تماشای انیمه",
      overview:
        "KANSHA یک تجربه رسانه‌محور برای کشف انیمه است؛ با کاتالوگ پویا، مرور ژانرها، جست‌وجو، صفحه جزئیات، تریلر، پروفایل، علاقه‌مندی، Watchlist و پوسته PWA قابل نصب.",
      problem:
        "کاتالوگی با ده‌ها پوستر، ردیف‌های افقی، داده خارجی و ویدئو می‌تواند به‌خصوص روی موبایل کند و دشوار شود. رابط همچنین باید Loading، Empty، Error و Offline واقعی داشته باشد تا صرفاً یک طرح استاتیک به نظر نرسد.",
      solution:
        "اپ React را بر پایه کامپوننت‌های قابل استفاده مجدد، Code Splitting در سطح Route، رسانه Lazy، Blur Placeholder، کش API، Carousel واکنش‌گرا و Motion هدفمند ساختم. Jikan داده خارجی را تأمین می‌کند و داده محلی جایگزین همراه Service Worker تاب‌آوری تجربه را حفظ می‌کنند.",
      responsibilities: [
        "طراحی سیستم بصری تیره Glassmorphism و سلسله‌مراتب واکنش‌گرای محتوا",
        "ساخت کارت، ردیف، کالکشن، ناوبری، Loading، Empty، Error و Toast قابل استفاده مجدد",
        "پیاده‌سازی کاتالوگ، جست‌وجو، ژانر، برنامه، جزئیات، پروفایل، علاقه‌مندی، Watchlist، ورود و ادمین",
        "اتصال Jikan، کش، بهینه‌سازی تصویر، تریلر، Routing و قابلیت‌های PWA",
        "آماده‌سازی پایه بک‌اند اختیاری Express، MongoDB، JWT، نقد، پروفایل و Watchlist",
      ],
      challenges: [
        {
          title: "کارایی صفحات رسانه‌سنگین",
          text: "تقسیم Routeها، بارگذاری تنبل تصویر، WebP، Blur Placeholder، تفکیک CSS و Minify تولید، هزینه صفحات پر از پوستر را کاهش دادند و مرور موبایل را روان نگه داشتند.",
        },
        {
          title: "تاب‌آوری API خارجی",
          text: "یک لایه Service درخواست‌های Jikan را متمرکز و کش می‌کند و هنگام خطای موقت API به کاتالوگ محلی انتخاب‌شده برمی‌گردد تا تجربه محصول از کار نیفتد.",
        },
        {
          title: "کشف افقی واکنش‌گرا",
          text: "ردیف‌های قابل استفاده مجدد، کنترل‌های قابل مشاهده، اسکرول لمسی و کارت‌های سازگار با Breakpoint، الگوی کشف را از دسکتاپ تا موبایل حفظ می‌کنند.",
        },
      ],
      outcome:
        "KANSHA کاتالوگی واکنش‌گرا با بیش از ۴۹ عنوان ارائه می‌دهد؛ همراه جست‌وجو و فیلتر، تب‌های جزئیات، تریلر داخلی، علاقه‌مندی و Watchlist، Code Splitting، کش پنج‌دقیقه‌ای API و پشتیبانی نصب و آفلاین PWA.",
      lessons: [
        "در محصول رسانه‌ای، استراتژی بارگذاری تصویر از زیبایی انیمیشن اثر بیشتری دارد",
        "محتوای خارجی به Fallback انتخاب‌شده و مدیریت متمرکز خطا نیاز دارد",
        "کشف افقی باید برای ماوس، کیبورد و لمس به یک اندازه طراحی شود",
        "آفلاین PWA وقتی مفید است که وضعیت خالی و داده قدیمی قابل فهم بماند",
      ],
    },
    de: {
      title: "KANSHA",
      subtitle: "Anime-Discovery- und Streaming-Erlebnis",
      overview:
        "KANSHA ist ein medienreiches Anime-Discovery-Erlebnis mit dynamischem Katalog, Genres, Suche, Detailseiten, Trailern, Profilen, Favoriten, Watchlist und installierbarer PWA-Hülle.",
      problem:
        "Dutzende Poster, horizontale Sammlungen, externe Daten und Videos können besonders mobil langsam und unübersichtlich werden. Lade-, Leer-, Fehler- und Offline-Zustände mussten wie echte Produktteile funktionieren.",
      solution:
        "Ich entwickelte eine komponentenbasierte React-App mit Route-Code-Splitting, Lazy Media, Blur-Platzhaltern, API-Caching, responsiven Karussells und gezielter Motion. Jikan liefert Metadaten; lokale Fallback-Daten und Service Worker sichern die Resilienz.",
      responsibilities: [
        "Dunkles Glassmorphism-System und responsive Inhaltshierarchie",
        "Wiederverwendbare Karten, Reihen, Sammlungen, Navigation sowie Lade-, Leer-, Fehler- und Toast-Komponenten",
        "Katalog, Suche, Genres, Programm, Details, Profil, Favoriten, Watchlist, Login und Admin",
        "Jikan-Integration, Caching, Bildoptimierung, Trailer, Routing und PWA-Verhalten",
        "Optionale Express-, MongoDB-, JWT-, Review-, Profil- und Watchlist-Backendbasis",
      ],
      challenges: [
        {
          title: "Performance bei vielen Medien",
          text: "Route-Splitting, Lazy Images, WebP, Blur-Platzhalter, CSS-Splitting und Produktionsminifizierung reduzieren die Kosten posterreicher Seiten.",
        },
        {
          title: "Resilienz externer APIs",
          text: "Eine Serviceschicht bündelt Jikan-Aufrufe, cached Ergebnisse und nutzt kuratierte lokale Daten als Fallback, damit temporäre Fehler das Produkt nicht stoppen.",
        },
        {
          title: "Responsive horizontale Discovery",
          text: "Wiederverwendbare Reihen, sichtbare Navigation, Touch-Scrolling und breakpointabhängige Karten erhalten das Discovery-Muster auf Desktop und Smartphone.",
        },
      ],
      outcome:
        "KANSHA bietet einen responsiven Katalog mit über 49 Titeln, Suche und Filtern, Detail-Tabs, Trailern, Favoriten und Watchlist sowie Route-Code-Splitting, fünfminütigem API-Cache und installierbarer Offline-PWA.",
      lessons: [
        "Bei Medienprodukten ist die Bildladestrategie wichtiger als Animationspolitur",
        "Externe Inhalte brauchen kuratierte Fallbacks und zentrale Fehlerbehandlung",
        "Horizontale Discovery muss Maus, Tastatur und Touch gleichwertig behandeln",
        "PWA-Offline-Modus hilft nur mit verständlichen leeren und veralteten Zuständen",
      ],
    },
  },
};

export const caseStudies: CaseStudy[] = [sadafStone, nova, riora, rivana, kansha];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
