import type { Locale } from "@/i18n";

/**
 * Localized display names for skill category keys.
 * Technology names themselves stay untranslated everywhere.
 */
export const CATEGORY_LABELS: Record<string, Record<Locale, string>> = {
  frontend: { en: "Frontend Development", fa: "توسعه فرانت‌اند", de: "Frontend-Entwicklung" },
  backend: { en: "Backend Development", fa: "توسعه بک‌اند", de: "Backend-Entwicklung" },
  database: { en: "Database", fa: "پایگاه داده", de: "Datenbank" },
  mobile: { en: "Mobile Development", fa: "توسعه موبایل", de: "Mobile-Entwicklung" },
  devops: { en: "DevOps & Deployment", fa: "دواپس و استقرار", de: "DevOps & Deployment" },
  design: { en: "UI/UX & Product", fa: "طراحی محصول و UI/UX", de: "UI/UX & Produkt" },
  practices: { en: "Engineering Practices", fa: "اصول مهندسی", de: "Engineering-Praktiken" },
};

export function categoryLabel(key: string, locale: Locale): string {
  return CATEGORY_LABELS[key]?.[locale] ?? key;
}
