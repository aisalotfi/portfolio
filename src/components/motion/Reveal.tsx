"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in milliseconds before the reveal starts. */
  delay?: number;
  direction?: Direction;
  /** Travel distance in px (ignored for "fade"). */
  distance?: number;
}

let observer: IntersectionObserver | null = null;

function getSharedObserver() {
  if (!observer && typeof IntersectionObserver !== "undefined") {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
  }
  return observer;
}

/**
 * Scroll-triggered reveal built on a shared IntersectionObserver and
 * GPU-friendly CSS transitions (opacity/transform only). Content stays
 * fully visible when JavaScript is disabled.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const io = getSharedObserver();
    if (!el || !io) {
      el?.classList.add("is-revealed");
      return;
    }
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  const hidden =
    direction === "fade"
      ? undefined
      : direction === "up"
        ? { "--reveal-y": `-${distance}px` }
        : direction === "down"
          ? { "--reveal-y": `${distance}px` }
          : direction === "left"
            ? { "--reveal-x": `-${distance}px` }
            : { "--reveal-x": `${distance}px` };

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{
        ...hidden,
        ...(delay ? { transitionDelay: `${delay}ms` } : null),
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
