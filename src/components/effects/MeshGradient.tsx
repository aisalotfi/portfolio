"use client";

import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/useMousePosition";

interface MeshGradientProps {
  className?: string;
}

/**
 * Multi-stop mesh gradient backdrop using jewel tones (amethyst,
 * sapphire, emerald, copper). Subtle parallax tracks the cursor
 * for an organic, alive surface — never overwhelming the content.
 */
export function MeshGradient({ className }: MeshGradientProps) {
  const mouse = useMousePosition();

  // Each blob shifts a different distance to create natural parallax
  const ax = 18 + mouse.normalizedX * 6;
  const ay = 22 + mouse.normalizedY * 6;
  const bx = 82 - mouse.normalizedX * 8;
  const by = 30 - mouse.normalizedY * 5;
  const cx = 50 + mouse.normalizedX * 4;
  const cy = 95 - mouse.normalizedY * 4;
  const dx = 8 + mouse.normalizedX * 3;
  const dy = 78 - mouse.normalizedY * 4;

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-0", className)}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 transition-all duration-[3000ms] ease-out"
        style={{
          background: `
            radial-gradient(38% 42% at ${ax}% ${ay}%,  rgba(160, 107, 255, 0.16) 0%, transparent 65%),
            radial-gradient(34% 38% at ${bx}% ${by}%,  rgba(16, 185, 129, 0.10)  0%, transparent 65%),
            radial-gradient(45% 48% at ${cx}% ${cy}%,  rgba(79, 124, 255, 0.12)  0%, transparent 65%),
            radial-gradient(28% 32% at ${dx}% ${dy}%,  rgba(212, 165, 116, 0.10) 0%, transparent 65%)
          `,
        }}
      />
      {/* Vignette to keep edges grounded and content focused */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(6, 5, 15, 0.6) 100%)",
        }}
      />
    </div>
  );
}
