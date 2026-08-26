import { Button } from "@/components/ui/Button";
import type { Dictionary, Locale } from "@/i18n";

interface HeroSectionProps {
  locale: Locale;
  dict: Dictionary;
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.53V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.8 3.2 18.6 20c-.2 1.2-.9 1.5-1.9.9l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.2 14l-4.7-1.5c-1-.3-1-1 .2-1.5L20.1 4c.9-.3 1.9.2 1.7-.8Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2 22l5.3-1.5A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.9.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.3 0-.4.1-.6l.4-.5.2-.5c.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.3 1.8.8 2.5.8 3.4.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4Z" />
    </svg>
  );
}

const SOCIALS = [
  { href: "https://github.com/aisalotfi", labelKey: "github" as const, Icon: GitHubIcon },
  { href: "https://linkedin.com/in/aisalotfi", labelKey: "linkedin" as const, Icon: LinkedInIcon },
  { href: "mailto:aisalotfi2706@gmail.com", labelKey: "email" as const, Icon: MailIcon },
  { href: "https://t.me/aisalotfi", labelKey: "telegram" as const, Icon: TelegramIcon },
  { href: "https://wa.me/989050604955", labelKey: "whatsapp" as const, Icon: WhatsAppIcon },
];

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const base = `/${locale}`;

  return (
    <section
      id="hero"
      className="hero-min-height relative flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Static ambient orbs — pure CSS, no JS, no animation */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-40 top-[15%] h-[480px] w-[480px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(160,107,255,0.22) 0%, rgba(160,107,255,0.06) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute -top-28 right-[5%] h-[400px] w-[400px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.16) 0%, rgba(16,185,129,0.05) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] right-[-8%] h-[420px] w-[420px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(212,165,116,0.22) 0%, rgba(212,165,116,0.06) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-10 md:px-12 md:pt-6 lg:px-24">
        <div className="max-w-4xl">
          {/* Availability badge */}
          <p
            className="hero-enter mb-6 inline-flex items-center gap-2.5 rounded-full border border-border-medium bg-surface-glass px-4 py-1.5 backdrop-blur-sm"
            style={{ "--enter-order": 0 } as React.CSSProperties}
          >
            <span className="relative inline-block h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-bright" />
              <span className="absolute inset-0 rounded-full bg-emerald-bright opacity-70 blur-[4px] animate-pulse-glow" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-100">
              {dict.hero.badge}
            </span>
          </p>

          {/* Name */}
          <h1
            className="hero-enter mb-4 font-display text-[clamp(2.6rem,8vw,5.5rem)] leading-[1.02] tracking-[-0.03em] text-soft-white text-balance"
            style={{ "--enter-order": 1 } as React.CSSProperties}
          >
            {dict.hero.name}
          </h1>

          {/* Role */}
          <p
            className="hero-enter mb-6 font-display text-[clamp(1.15rem,3vw,1.75rem)] leading-snug text-gradient-copper"
            style={{ "--enter-order": 2 } as React.CSSProperties}
          >
            {dict.hero.role}
          </p>

          {/* Supporting copy */}
          <p
            className="hero-enter mb-8 max-w-xl text-[16px] leading-[1.7] text-charcoal-100 text-pretty md:text-lg"
            style={{ "--enter-order": 3 } as React.CSSProperties}
          >
            {dict.hero.tagline}
          </p>

          {/* CTAs + socials */}
          <div
            className="hero-enter flex flex-wrap items-center gap-x-5 gap-y-4"
            style={{ "--enter-order": 4 } as React.CSSProperties}
          >
            <Button href="#projects" variant="jewel" size="lg">
              <span>{dict.hero.ctaWork}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
              >
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              <span>{dict.hero.ctaContact}</span>
            </Button>

            <div
              className="flex items-center gap-1.5"
              role="group"
              aria-label={dict.hero.socialsLabel}
            >
              {SOCIALS.map(({ href, labelKey, Icon }) => (
                <a
                  key={labelKey}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={dict.contact.social[labelKey]}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-charcoal-100 transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-light hover:shadow-[0_0_24px_-6px_rgba(212,165,116,0.5)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Facts strip — real, verifiable facts only */}
          <dl
            className="hero-enter mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-4 border-t border-border-subtle pt-5 sm:gap-x-12"
            style={{ "--enter-order": 5 } as React.CSSProperties}
          >
            {dict.hero.facts.map((fact, i) => (
              <div key={fact.label} className="flex items-baseline gap-3">
                <dt className="sr-only">{fact.label}</dt>
                <dd className="font-display text-lg text-gradient-copper md:text-xl">
                  {fact.value}
                </dd>
                <dd className="text-[10px] uppercase tracking-[0.16em] text-charcoal-200">
                  {fact.label}
                </dd>
                {i < dict.hero.facts.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="ms-5 hidden h-3 w-px bg-border-medium md:inline-block"
                  />
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#projects"
        aria-label={dict.nav.work}
        className="hero-enter absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-charcoal-300 transition-colors hover:text-accent-light lg:flex"
        style={{ "--enter-order": 7 } as React.CSSProperties}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">↓</span>
      </a>
    </section>
  );
}
