import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { AmbientLight } from "@/components/effects/AmbientLight";
import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { MeshGradient } from "@/components/effects/MeshGradient";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { CursorFollower } from "@/components/effects/CursorFollower";
import {
  getDictionary,
  isLocale,
  localeMeta,
  locales,
  type Locale,
} from "@/i18n";
import { LocaleProvider } from "@/i18n/LocaleProvider";

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

// Editorial serif for English / Latin display headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      siteName: "Aisa Lotfi",
      locale: ogLocaleMap[locale] ?? "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Aisa Lotfi — Full Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${baseUrl}/og-image.jpg`],
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
    other: {
      "theme-color": "#06050F",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);
  const meta = localeMeta[locale as Locale];

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-near-black text-soft-white antialiased selection:bg-accent/30"
        data-locale={locale}
        suppressHydrationWarning
      >
        <LocaleProvider locale={locale as Locale} dictionary={dict}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Person",
                    name: "Aisa Lotfi",
                    url: "https://aisalotfi.ir",
                    jobTitle: dict.meta.title,
                    knowsAbout: dict.about.disciplines.items,
                    sameAs: [
                      "https://github.com/aisalotfi",
                      "https://linkedin.com/in/aisalotfi",
                    ],
                  },
                  {
                    "@type": "WebSite",
                    name: "Aisa Lotfi",
                    url: "https://aisalotfi.ir",
                  },
                ],
              }),
            }}
          />
          <SmoothScrollProvider>
            <ScrollProgress />
            <CursorFollower />
            <AmbientLight />
            <MeshGradient />
            <FloatingParticles count={32} />
            <GrainOverlay opacity={0.025} />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
