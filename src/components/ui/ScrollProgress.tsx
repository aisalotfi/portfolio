"use client";

import { useEffect, useRef } from "react";

/**
 * Hairline progress bar at the top of the viewport.
 * Writes `transform` directly on a passive scroll listener — no React
 * re-renders, no animation loop.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      el.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px origin-left rtl:origin-right"
      style={{
        transform: "scaleX(0)",
        background:
          "linear-gradient(90deg, rgba(236,200,146,0.9) 0%, rgba(194,156,255,0.7) 50%, rgba(123,151,255,0.7) 100%)",
      }}
    />
  );
}
