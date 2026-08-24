import { Container } from "@/components/ui/Container";
import type { Dictionary, Locale } from "@/i18n";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();
  const navLinks = [
    { href: "#projects", label: dict.nav.work },
    { href: "#experience", label: dict.nav.experience },
    { href: "#skills", label: dict.nav.skills },
    { href: "#about", label: dict.nav.about },
    { href: "#contact", label: dict.nav.contact },
  ];
  const socials = [
    { href: "https://github.com/aisalotfi", label: "GitHub" },
    { href: "https://linkedin.com/in/aisalotfi", label: "LinkedIn" },
    { href: "mailto:hello@aisalotfi.ir", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-border-subtle py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,165,116,0.5) 50%, transparent 100%)",
        }}
      />
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg italic text-soft-white">
              {dict.nav.name}
            </p>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-charcoal-200">
              {dict.hero.role}
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-charcoal-400">
              &copy; {year} · {dict.footer.allRights}
            </p>
          </div>

          <nav aria-label={dict.footer.navigate}>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-300">
              {dict.footer.navigate}
            </h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`/${locale}${link.href}`}
                    className="text-[13px] text-charcoal-100 transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`/${locale}/resume`}
                  className="text-[13px] text-charcoal-100 transition-colors hover:text-accent-light"
                >
                  {dict.nav.resume}
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-300">
              {dict.footer.elsewhere}
            </h2>
            <ul className="mt-4 space-y-2">
              {socials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-[13px] text-charcoal-100 transition-colors hover:text-accent-light"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-[10px] uppercase tracking-[0.25em] text-charcoal-400">
          {dict.footer.crafted} · Next.js · Tailwind CSS
        </p>
      </Container>
    </footer>
  );
}
