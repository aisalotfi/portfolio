"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "./LocaleSwitcher";
import type { Dictionary, Locale } from "@/i18n";

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

export function Navbar({ locale, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "projects", label: dict.nav.work },
    { id: "experience", label: dict.nav.experience },
    { id: "skills", label: dict.nav.skills },
    { id: "about", label: dict.nav.about },
    { id: "contact", label: dict.nav.contact },
  ];

  // Track scroll position for the compact background — one passive
  // listener, state only flips when the boolean actually changes.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled((prev) => {
        const next = window.scrollY > 50;
        return prev === next ? prev : next;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section highlighting via IntersectionObserver (no per-frame work).
  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        if (visible.size > 0) {
          const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
          setActiveSection((prev) => (prev === top ? prev : top));
        } else {
          setActiveSection((prev) => (prev === "" ? prev : ""));
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  // Close the mobile menu with Escape and lock background scrolling.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [mobileOpen]);

  const base = `/${locale}`;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || mobileOpen
          ? "border-b border-border-subtle bg-near-black/70 shadow-[0_1px_0_rgba(255,255,255,0.04),0_16px_40px_-24px_rgba(0,0,0,0.6)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-3 px-5 md:h-20 md:px-12 lg:px-24">
        {/* Wordmark → home */}
        <a
          href={`${base}#hero`}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label={dict.nav.name}
        >
          <span className="relative inline-block h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-accent" />
            <span className="absolute inset-0 rounded-full bg-accent opacity-60 blur-[5px]" />
          </span>
          <span className="font-display text-[15px] italic tracking-[0.04em] text-soft-white transition-colors group-hover:text-warm-white">
            {dict.nav.name}
          </span>
        </a>

        {/* Desktop nav (lg+ — German/Persian labels overflow below ~1000px) */}
        <nav aria-label={dict.footer.navigate} className="hidden lg:block">
          <div className="glass flex items-center gap-1 rounded-full px-2 py-1.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.14em] transition-colors duration-300",
                  activeSection === item.id
                    ? "text-near-black"
                    : "text-charcoal-200 hover:text-soft-white",
                )}
              >
                {activeSection === item.id && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full animate-nav-pill"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #ECC892 0%, #D4A574 100%)",
                      boxShadow:
                        "0 4px 16px -4px rgba(212,165,116,0.5), inset 0 1px 0 rgba(255,255,255,0.35)",
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Right cluster: language + burger */}
        <div className="flex items-center gap-2">
          <LocaleSwitcher locale={locale} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={dict.nav.toggleMenu}
            className="glass relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full lg:hidden"
          >
            <span
              className={cn(
                "h-px w-4 bg-soft-white transition-transform duration-300",
                mobileOpen && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-4 bg-soft-white transition-opacity duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-4 bg-soft-white transition-transform duration-300",
                mobileOpen && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label={dict.footer.navigate}
          className="flex flex-col gap-1 border-t border-border-subtle bg-near-black/95 px-6 pb-8 pt-4 backdrop-blur-md animate-mobile-menu lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 font-display text-xl text-soft-white/90 transition-colors hover:bg-white/5 hover:text-warm-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`${base}/resume`}
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-xl border border-border-medium px-4 py-3 text-center text-[12px] uppercase tracking-[0.15em] text-accent-light"
          >
            {dict.nav.resume}
          </a>
        </nav>
      )}
    </header>
  );
}
