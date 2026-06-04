"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useDict } from "@/i18n/LocaleProvider";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Navbar() {
  const dict = useDict();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: dict.nav.about,      href: "#about" },
    { label: dict.nav.work,       href: "#projects" },
    { label: dict.nav.process,    href: "#process" },
    { label: dict.nav.experience, href: "#timeline" },
    { label: dict.nav.contact,    href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out-expo",
          scrolled
            ? "border-b border-border-subtle bg-near-black/55 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_1px_0_rgba(255,255,255,0.05),0_20px_50px_-20px_rgba(0,0,0,0.6)]"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-6 md:px-12 lg:px-24">
          {/* Wordmark */}
          <motion.a
            href="#"
            className="group flex items-center gap-2.5 text-sm tracking-[0.25em] uppercase shrink-0"
            whileHover={{ opacity: 0.85 }}
          >
            <span className="relative inline-block h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent" />
              <span className="absolute inset-0 rounded-full bg-accent blur-[6px] opacity-70 animate-pulse-glow" />
            </span>
            <span className="font-display text-[15px] italic tracking-[0.04em] text-soft-white transition-colors group-hover:text-warm-white">
              {dict.nav.portfolio}
            </span>
          </motion.a>

          {/* Desktop nav — glass pill */}
          <nav className="hidden md:block">
            <div className="glass flex items-center gap-1 rounded-full px-2 py-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "relative rounded-full px-4 py-1.5 text-[11px] tracking-[0.18em] uppercase transition-colors duration-500",
                      isActive
                        ? "text-near-black"
                        : "text-charcoal-200 hover:text-soft-white",
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, #ECC892 0%, #D4A574 100%)",
                          boxShadow:
                            "0 4px 16px -4px rgba(212,165,116,0.6), inset 0 1px 0 rgba(255,255,255,0.4)",
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Right cluster: language + mobile burger */}
          <div className="flex items-center gap-3">
            <LocaleSwitcher />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border-medium bg-surface-glass backdrop-blur-md md:hidden"
              aria-label={dict.nav.toggleMenu}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="h-px w-4 bg-soft-white"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-px w-4 bg-soft-white"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="h-px w-4 bg-soft-white"
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex items-center justify-center bg-near-black/90 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-7">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(item.href)}
                  className="font-display text-3xl italic tracking-tight text-soft-white/85 hover:text-warm-white transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
