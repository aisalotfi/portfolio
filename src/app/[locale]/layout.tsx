import type { Metadata } from "next";
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
  return {
    title: dict.meta.title,
    description: dict.meta.description,
      alternates: {
        languages: {
          en: "/en",
          fa: "/fa",
          de: "/de",
          "x-default": "/fa",
        },
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
