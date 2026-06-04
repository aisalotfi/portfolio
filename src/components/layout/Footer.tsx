"use client";

import { Container } from "@/components/ui/Container";
import { useDict } from "@/i18n/LocaleProvider";

export function Footer() {
  const dict = useDict();
  return (
    <footer className="relative border-t border-border-subtle py-14">
      {/* Soft copper hairline glow above the footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,165,116,0.5) 50%, transparent 100%)",
        }}
      />
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-[11px] tracking-[0.25em] text-charcoal-300 uppercase">
          {dict.footer.crafted}
        </p>
        <p className="text-[11px] tracking-[0.25em] text-charcoal-400 uppercase">
          &copy; {new Date().getFullYear()} — {dict.footer.allRights}
        </p>
      </Container>
    </footer>
  );
}
