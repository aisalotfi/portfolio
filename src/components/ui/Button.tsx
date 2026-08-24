import { cn } from "@/lib/utils";

interface BaseProps {
  variant?: "primary" | "outline" | "ghost" | "jewel";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  // Primary: warm ivory pill with copper halo on hover
  primary:
    "bg-warm-white text-near-black shadow-[0_8px_30px_-8px_rgba(212,165,116,0.45)] hover:shadow-[0_12px_40px_-6px_rgba(212,165,116,0.7)]",
  // Outline: hairline glass with copper accent on hover
  outline:
    "border border-border-medium bg-surface-glass text-soft-white hover:border-accent/60 hover:text-warm-white hover:shadow-[0_0_30px_-8px_rgba(212,165,116,0.5)]",
  // Ghost: minimalist, content-first
  ghost: "text-charcoal-100 hover:text-soft-white",
  // Jewel: vibrant gradient — for the primary CTA
  jewel:
    "text-near-black shadow-[0_10px_40px_-8px_rgba(160,107,255,0.4)] hover:shadow-[0_14px_50px_-6px_rgba(160,107,255,0.6)]",
};

const SIZES: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-5 py-2 text-[11px]",
  md: "px-8 py-3 text-xs",
  lg: "px-9 py-3.5 text-[13px]",
};

export function Button({ variant = "primary", size = "md", children, className, ...props }: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full",
    "text-sm font-medium uppercase tracking-[0.08em]",
    "transition-[color,box-shadow,border-color,background-color,transform] duration-500",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    "focus-visible:outline-none",
    VARIANTS[variant],
    SIZES[size],
    className,
  );
  const style =
    variant === "jewel"
      ? ({
          backgroundImage:
            "linear-gradient(135deg, #ECC892 0%, #D4A574 35%, #C29CFF 100%)",
        } as React.CSSProperties)
      : undefined;

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Sweeping copper shimmer on hover (outline + primary) */}
      {(variant === "primary" || variant === "outline") && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      )}
    </>
  );

  if ("href" in props && typeof props.href === "string") {
    return (
      <a className={classes} style={style} {...(props as ButtonAsLink)}>
        {inner}
      </a>
    );
  }

  return (
    <button
      className={classes}
      style={style}
      {...(props as Omit<ButtonAsButton, keyof BaseProps>)}
    >
      {inner}
    </button>
  );
}
