import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  getDictionary,
  isLocale,
  localeMeta,
  locales,
  type Locale,
} from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Editorial serif for English / Latin display headings (variable font —
// one file per style instead of separate weights).
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#06050F",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const baseUrl = "https://aisalotfi.ir";

  const ogLocaleMap: Record<string, string> = {
    fa: "fa_IR",
    en: "en_US",
    de: "de_DE",
  };

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: `%s | Aisa Lotfi`,
      default: dict.meta.title,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "Aisa Lotfi", url: baseUrl }],
    creator: "Aisa Lotfi",
    publisher: "Aisa Lotfi",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${baseUrl}/${locale}`,
      siteName: "Aisa Lotfi — Portfolio",
      locale: ogLocaleMap[locale] ?? "en_US",
      type: "website",
      images: [
        {
          url: `/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: dict.hero.name + " — " + dict.hero.role,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`/og-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        fa: `${baseUrl}/fa`,
        de: `${baseUrl}/de`,
        "x-default": `${baseUrl}/fa`,
      },
    },
  };
}

function StructuredData({ locale }: { locale: Locale }) {
  const baseUrl = "https://aisalotfi.ir";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${baseUrl}/${locale}#profilepage`,
        url: `${baseUrl}/${locale}`,
        name: "Aisa Lotfi",
        inLanguage: localeMeta[locale].htmlLang,
        mainEntity: { "@id": `${baseUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Aisa Lotfi",
        url: baseUrl,
        jobTitle: "Full-Stack Web & Mobile Developer",
        knowsLanguage: ["Persian", "English", "German"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hamedan",
          addressCountry: "IR",
        },
        sameAs: [
          "https://github.com/aisalotfi",
          "https://linkedin.com/in/aisalotfi",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Aisa Lotfi — Portfolio",
        inLanguage: localeMeta[locale].htmlLang,
        publisher: { "@id": `${baseUrl}/#person` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);
  const meta = localeMeta[locale as Locale];
  const isFa = locale === "fa";

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-near-black text-soft-white antialiased">
        {/* Marks JS availability before first paint so scroll-reveal
            styles only hide content when they can actually run.
            React hoists this script and the font preloads into <head>. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {isFa && (
          <>
            <link
              rel="preload"
              href="/fonts/AradFD-VF.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/Arad-VF.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
          </>
        )}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-near-black"
        >
          {dict.common.skipToContent}
        </a>
        <ScrollProgress />
        <Navbar locale={locale as Locale} dict={dict} />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <Footer locale={locale as Locale} dict={dict} />
        <StructuredData locale={locale as Locale} />
      </body>
    </html>
  );
}
