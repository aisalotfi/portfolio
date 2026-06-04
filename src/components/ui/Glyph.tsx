"use client";

import { cn } from "@/lib/utils";
import type { GlyphName } from "@/data/engineering";

interface GlyphProps {
  name: GlyphName;
  className?: string;
  stroke?: string;
}

/**
 * Hand-drawn engineering glyph set — six 24px stroke icons that feel
 * editorial rather than utilitarian. All paths use currentColor so a
 * parent can theme the glyph by setting `color` or passing `stroke`.
 *
 * Stroke draws on hover via the `[group:hover_&]:` patterns applied
 * by the consumer card, using stroke-dasharray transitions.
 */
export function Glyph({ name, className, stroke }: GlyphProps) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    stroke: stroke ?? "currentColor",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("transition-all duration-700 ease-out", className),
  };

  switch (name) {
    case "architecture":
      // stacked nested squares — composition / system
      return (
        <svg {...common}>
          <rect x="4"  y="4"  width="20" height="20" rx="2" />
          <rect x="8"  y="8"  width="12" height="12" rx="1.5" />
          <rect x="12" y="12" width="4"  height="4"  rx="0.5" />
        </svg>
      );

    case "motion":
      // arc + a settling point — motion / spring
      return (
        <svg {...common}>
          <path d="M4 20 C 8 6, 16 6, 24 14" />
          <circle cx="24" cy="14" r="1.6" fill="currentColor" stroke="none" />
          <path d="M4 24 H 24" opacity="0.4" />
        </svg>
      );

    case "interaction":
      // cursor + ripple — touch / interaction
      return (
        <svg {...common}>
          <path d="M9 7 L 19 13 L 13 15 L 11 21 Z" />
          <circle cx="14" cy="14" r="9" opacity="0.35" />
          <circle cx="14" cy="14" r="12" opacity="0.18" />
        </svg>
      );

    case "performance":
      // lightning / trending arrow — speed
      return (
        <svg {...common}>
          <path d="M14 4 L 7 16 L 13 16 L 11 24 L 21 11 L 15 11 Z" />
        </svg>
      );

    case "accessibility":
      // figure / inclusive — a11y
      return (
        <svg {...common}>
          <circle cx="14" cy="6"  r="2"   />
          <path   d="M6 11 H 22" />
          <path   d="M14 9  V 17" />
          <path   d="M14 17 L 10 24" />
          <path   d="M14 17 L 18 24" />
        </svg>
      );

    case "responsive":
      // device frames stacked — viewports
      return (
        <svg {...common}>
          <rect x="3"  y="7"  width="14" height="10" rx="1.5" />
          <rect x="13" y="11" width="12" height="13" rx="1.5" />
          <path d="M7 21 H 13" />
          <path d="M19 22 H 19.01" />
        </svg>
      );
  }
}
