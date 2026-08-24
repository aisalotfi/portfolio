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
  texts: Record<Locale, CaseStudyTexts>;
}

const sadafStone: CaseStudy = {
  slug: "sadaf-stone",
  accent: "copper",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  links: { live: "https://sadafstonee.ir" },
  texts: {
    en: {
      title: "Sadaf Stone",
      subtitle: "Official Company Site",
      overview:
        "The official website for Sadaf Stone, a natural stone factory, was designed and built to present the company's products and services professionally and to make it easy for customers to get in touch.",
      problem:
        "The company had no modern web presence: the previous state was outdated, not responsive, and did not reflect the quality of the product. Customers had no easy way to browse products or contact the company.",
      solution:
        "A fast, responsive marketing site built with Next.js and Tailwind CSS — clear product presentation, straightforward navigation, and search-engine-friendly pages.",
      responsibilities: [
        "UI design and full frontend implementation",
        "Frontend architecture with Next.js",
        "Performance and SEO optimization",
        "Deployment and domain setup",
      ],
      challenges: [
        {
          title: "Product Gallery",
          text: "Designing an image-heavy product gallery that still loads quickly on mobile connections.",
        },
        {
          title: "Responsiveness",
          text: "Keeping high-quality stone photography sharp while staying responsive from small phones up to large displays.",
        },
        {
          title: "SEO",
          text: "Structuring content and metadata so search engines index the product pages correctly.",
        },
      ],
      outcome:
        "The website launched successfully with positive client feedback. Fast load times and a clean, professional presentation were the project's key strengths.",
      lessons: [
        "Shipping a real project end to end — from requirements to deployment",
        "The practical details of domains, hosting, and go-live",
        "Clear client communication matters as much as the code",
        "Planning and time management decide delivery dates",
      ],
    },
    fa: {
      title: "سنگ صدف",
      subtitle: "وب‌سایت رسمی شرکت",
      overview:
        "وب‌سایت رسمی کارخانه سنگ صدف با هدف معرفی حرفه‌ای محصولات و خدمات شرکت طراحی و ساخته شد تا مشتریان به‌راحتی محصولات را ببینند و با شرکت در ارتباط باشند.",
      problem:
        "شرکت حضور آنلاین مناسبی نداشت: وضعیت قبلی قدیمی بود، واکنش‌گرا نبود و کیفیت محصول را نشان نمی‌داد. مشتریان راه ساده‌ای برای مرور محصولات و تماس نداشتند.",
      solution:
        "یک وب‌سایت سریع و واکنش‌گرا با Next.js و Tailwind CSS — معرفی شفاف محصولات، ناوبری ساده و صفحات سازگار با موتورهای جستجو.",
      responsibilities: [
        "طراحی رابط کاربری و پیاده‌سازی کامل فرانت‌اند",
        "معماری فرانت‌اند با Next.js",
        "بهینه‌سازی کارایی و SEO",
        "استقرار و تنظیم دامنه",
      ],
      challenges: [
        {
          title: "گالری محصولات",
          text: "طراحی گالری تصاویر سنگین که همچنان در اینترنت موبایل سریع بارگذاری شود.",
        },
        {
          title: "واکنش‌گرایی",
          text: "حفظ کیفیت بالای عکس‌های سنگ در عین واکنش‌گرا بودن از گوشی کوچک تا نمایشگر بزرگ.",
        },
        {
          title: "SEO",
          text: "ساختاردهی محتوا و متادیتا به شکلی که موتورهای جستجو صفحات محصول را درست ایندکس کنند.",
        },
      ],
      outcome:
        "وب‌سایت با بازخورد مثبت کارفرما راه‌اندازی شد. سرعت بارگذاری و ظاهر تمیز و حرفه‌ای، نقاط قوت اصلی پروژه بودند.",
      lessons: [
        "تحویل یک پروژه واقعی از نیازمندی‌ها تا استقرار",
        "جزئیات عملی دامنه، هاست و راه‌اندازی نهایی",
        "ارتباط شفاف با کارفرما به اندازه خود کد اهمیت دارد",
        "برنامه‌ریزی و مدیریت زمان است که تاریخ تحویل را تعیین می‌کند",
      ],
    },
    de: {
      title: "Sadaf Stone",
      subtitle: "Offizielle Firmenwebsite",
      overview:
        "Die offizielle Website für Sadaf Stone, ein Natursteinwerk, wurde konzipiert und entwickelt, um die Produkte und Dienstleistungen des Unternehmens professionell zu präsentieren und Kunden den Kontakt so einfach wie möglich zu machen.",
      problem:
        "Dem Unternehmen fehlte ein moderner Webauftritt: Der alte Zustand war veraltet, nicht responsiv und spiegelte die Qualität des Produkts nicht wider. Kunden hatten keine einfache Möglichkeit, Produkte anzusehen oder Kontakt aufzunehmen.",
      solution:
        "Eine schnelle, responsive Marketing-Site mit Next.js und Tailwind CSS – klare Produktpräsentation, straightforwarde Navigation und suchmaschinenfreundliche Seiten.",
      responsibilities: [
        "UI-Design und komplette Frontend-Umsetzung",
        "Frontend-Architektur mit Next.js",
        "Performance- und SEO-Optimierung",
        "Deployment und Domain-Setup",
      ],
      challenges: [
        {
          title: "Produktgalerie",
          text: "Eine bildlastige Produktgalerie, die auch bei mobilen Verbindungen schnell lädt.",
        },
        {
          title: "Responsivität",
          text: "Hochwertige Stein-Fotografie scharf halten – responsiv vom kleinen Smartphone bis zum großen Display.",
        },
        {
          title: "SEO",
          text: "Inhalte und Metadaten so strukturieren, dass Suchmaschinen die Produktseiten korrekt indexieren.",
        },
      ],
      outcome:
        "Die Website wurde erfolgreich mit positivem Kundenfeedback gestartet. Schnelle Ladezeiten und eine saubere, professionelle Präsentation waren die größten Stärken des Projekts.",
      lessons: [
        "Ein echtes Projekt Ende-zu-Ende umsetzen – von den Anforderungen bis zum Deployment",
        "Die praktischen Details von Domains, Hosting und Go-Live",
        "Klare Kommunikation mit dem Kunden ist genauso wichtig wie der Code",
        "Planung und Zeitmanagement entscheiden über Liefertermine",
      ],
    },
  },
};

export const caseStudies: CaseStudy[] = [sadafStone];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
