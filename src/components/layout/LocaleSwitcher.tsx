"use client";

import { usePathname, useRouter } from "next/navigation";
import { m } from "framer-motion";
import { isLocale, locales, type Locale } from "@/i18n";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

const LOCALE_COOKIE = "NEXT_LOCALE";

/**
 * Compact two-state language toggle (FA · EN).
 * Switches by rewriting the locale segment of the current URL and
 * persisting the choice via the NEXT_LOCALE cookie so middleware
 * remembers the preference on subsequent visits.
 */
export function LocaleSwitcher({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useLocale();

  const swap = (target: Locale) => {
    if (target === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=${
      60 * 60 * 24 * 365
    }; samesite=lax`;

    const segments = (pathname ?? "/").split("/").filter(Boolean);
    if (segments.length > 0 && isLocale(segments[0])) {
      segments[0] = target;
    } else {
      segments.unshift(target);
    }
    const next = "/" + segments.join("/");
    router.push(next);
    router.refresh();
  };

  return (
    <div
      className={cn(
        "glass relative inline-flex items-center gap-0.5 rounded-full p-1",
        className,
      )}
      role="group"
      aria-label="Language switcher"
    >
      {locales.map((code) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            onClick={() => swap(code)}
            className={cn(
              "relative z-10 min-w-11 min-h-11 px-3 py-2.5 text-[10px] font-mono tracking-[0.2em] uppercase transition-colors duration-500",
              isActive ? "text-near-black" : "text-charcoal-200 hover:text-soft-white",
            )}
            aria-pressed={isActive}
          >
            <span className="relative z-10">{code.toUpperCase()}</span>
            {isActive && (
              <m.span
                layoutId="locale-pill"
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #ECC892 0%, #D4A574 100%)",
                  boxShadow:
                    "0 4px 14px -4px rgba(212,165,116,0.6), inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 32 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
