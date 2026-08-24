"use client";

import { usePathname, useRouter } from "next/navigation";
import { isLocale, locales, localeMeta, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

const LOCALE_COOKIE = "NEXT_LOCALE";

/**
 * Compact language switcher (FA · EN · DE). Switches by rewriting the
 * locale segment of the current URL (client navigation — no full reload)
 * and persists the choice in the NEXT_LOCALE cookie.
 */
export function LocaleSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

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
    router.push("/" + segments.join("/"));
  };

  return (
    <div
      className={cn(
        "glass relative inline-flex items-center rounded-full p-1",
        className,
      )}
      role="group"
      aria-label="Language / Sprache / زبان"
    >
      {locales.map((code) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            onClick={() => swap(code)}
            disabled={isActive}
            aria-pressed={isActive}
            aria-label={localeMeta[code].label}
            lang={localeMeta[code].htmlLang}
            className={cn(
              "relative z-10 min-w-[34px] rounded-full px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors duration-300 md:min-w-[38px] md:px-2.5",
              isActive
                ? "text-near-black"
                : "text-charcoal-200 hover:text-soft-white",
            )}
          >
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full animate-nav-pill"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #ECC892 0%, #D4A574 100%)",
                  boxShadow:
                    "0 3px 12px -4px rgba(212,165,116,0.55), inset 0 1px 0 rgba(255,255,255,0.35)",
                }}
              />
            )}
            <span className="relative z-10">{code.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
}
