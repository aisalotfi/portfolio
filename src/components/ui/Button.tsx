"use client";

import { cn } from "@/lib/utils";
import { m } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost" | "jewel";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <m.button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full",
        "text-sm font-medium tracking-[0.08em] uppercase",
        "transition-[color,box-shadow,border-color,background-color] duration-500 ease-out-expo",
        "focus:outline-none",
        {
          // Primary: warm ivory pill with copper halo on hover
          "bg-warm-white text-near-black shadow-[0_8px_30px_-8px_rgba(212,165,116,0.45)] hover:shadow-[0_12px_40px_-6px_rgba(212,165,116,0.7)]":
            variant === "primary",

          // Outline: hairline glass with copper accent on hover
          "border border-border-medium bg-surface-glass text-soft-white backdrop-blur-sm lg:backdrop-blur-md hover:border-accent/60 hover:text-warm-white hover:shadow-[0_0_30px_-8px_rgba(212,165,116,0.5)]":
            variant === "outline",

          // Ghost: minimalist, content-first
          "text-charcoal-100 hover:text-soft-white": variant === "ghost",

          // Jewel: vibrant gradient — for the hero CTA
          "text-near-black shadow-[0_10px_40px_-8px_rgba(160,107,255,0.55)] hover:shadow-[0_14px_50px_-6px_rgba(160,107,255,0.8)]":
            variant === "jewel",

          "px-5 py-2 text-[11px]": size === "sm",
          "px-8 py-3 text-xs":     size === "md",
          "px-10 py-4 text-sm":    size === "lg",
        },
        className,
      )}
      style={
        variant === "jewel"
          ? {
              backgroundImage:
                "linear-gradient(135deg, #ECC892 0%, #D4A574 35%, #C29CFF 100%)",
            }
          : undefined
      }
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Sweeping copper shimmer on hover (outline + primary) */}
      {(variant === "primary" || variant === "outline") && (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          aria-hidden="true"
        />
      )}
    </m.button>
  );
}
