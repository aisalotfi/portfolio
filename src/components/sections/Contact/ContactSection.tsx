import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "./ContactForm";
import type { Dictionary, Locale } from "@/i18n";

interface ContactSectionProps {
  locale: Locale;
  dict: Dictionary;
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.53V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6.6 3.5 9 3l2 5-2.3 1.4a14.4 14.4 0 0 0 5.9 5.9L16 13l5 2 .5 2.4a3 3 0 0 1-3 3.6C10 20.5 3.5 14 3 5.5a3 3 0 0 1 3.6-3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.8 3.2 18.6 20c-.2 1.2-.9 1.5-1.9.9l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.2 14l-4.7-1.5c-1-.3-1-1 .2-1.5L20.1 4c.9-.3 1.9.2 1.7-.8Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2 22l5.3-1.5A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.9.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.3 0-.4.1-.6l.4-.5.2-.5c.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.3 1.8.8 2.5.8 3.4.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4Z" />
    </svg>
  );
}

export function ContactSection({ locale, dict }: ContactSectionProps) {
  const socials = [
    { href: "https://github.com/aisalotfi", label: dict.contact.social.github, Icon: GitHubIcon, external: true },
    { href: "https://linkedin.com/in/aisalotfi", label: dict.contact.social.linkedin, Icon: LinkedInIcon, external: true },
    { href: "mailto:aisalotfi2706@gmail.com", label: dict.contact.social.email, Icon: MailIcon, external: false },
    { href: "tel:+989050604955", label: dict.contact.social.phone, Icon: PhoneIcon, external: false },
    { href: "https://t.me/aisalotfi", label: dict.contact.social.telegram, Icon: TelegramIcon, external: true },
    { href: "https://wa.me/989050604955", label: dict.contact.social.whatsapp, Icon: WhatsAppIcon, external: true },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 py-20 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 mx-auto h-[420px] max-w-4xl rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,165,116,0.16) 0%, rgba(212,165,116,0.04) 45%, transparent 70%)",
        }}
      />

      <Container>
        <div className="mb-12 text-center">
          <div className="flex justify-center">
            <SectionLabel number="05" title={dict.nav.contact} />
          </div>
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.03] tracking-[-0.03em] text-soft-white text-balance">
              {dict.contact.headline1}{" "}
              <span className="italic text-gradient-luxe">{dict.contact.headline2}</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.75] text-charcoal-100 text-pretty md:text-[16px]">
              {dict.contact.description}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 text-[13px] italic text-charcoal-300">{dict.contact.closingLine}</p>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5">
          {/* Form — the only client island on this page */}
          <Reveal delay={140} className="flex lg:col-span-3">
            <ContactForm
              locale={locale}
              formTitle={dict.contact.formTitle}
              fields={dict.contact.fields}
              placeholders={dict.contact.placeholders}
              submitLabel={dict.contact.submit}
              sendingLabel={dict.contact.sending}
              sentLabel={dict.contact.sent}
              errorLabel={dict.contact.error}
            />
          </Reveal>

          {/* Info sidebar */}
          <Reveal delay={220} direction="up" className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              <div className="glass rounded-2xl p-6">
                <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-accent-light">
                  {dict.contact.info.connect}
                </h3>
                <ul className="space-y-3">
                  {socials.map(({ href, label, Icon, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-3 text-[13px] text-charcoal-100 transition-colors hover:text-accent-light"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-medium bg-white/[0.03] transition-colors group-hover:border-accent/50 group-hover:text-accent-light">
                          <Icon />
                        </span>
                        <span className="break-all">{label} ↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-border-subtle pt-4">
                  <Button href={`/${locale}/resume`} variant="outline" size="sm">
                    {dict.contact.resumeCta}
                  </Button>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-accent-light">
                  {dict.contact.info.studio}
                </h3>
                <Meta label={dict.contact.info.location} value={dict.contact.details.location} />
                <Meta label={dict.contact.info.timezone} value={dict.contact.details.timezone} />
                <Meta label={dict.contact.info.response} value={dict.contact.details.response} />
                <Meta label={dict.contact.info.languages} value={dict.contact.details.languages} />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-charcoal-300">
        {label}
      </span>
      <span className="text-end text-[13px] text-soft-white">{value}</span>
    </div>
  );
}
