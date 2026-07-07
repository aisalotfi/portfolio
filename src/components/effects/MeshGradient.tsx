"use client";

import { memo } from "react";
import { cn } from "@/lib/utils";

interface MeshGradientProps {
  className?: string;
}

export const MeshGradient = memo(function MeshGradient({ className }: MeshGradientProps) {
  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-0", className)}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(38% 42% at 18% 22%, rgba(160, 107, 255, 0.16) 0%, transparent 65%),
            radial-gradient(34% 38% at 82% 30%, rgba(16, 185, 129, 0.10) 0%, transparent 65%),
            radial-gradient(45% 48% at 50% 95%, rgba(79, 124, 255, 0.12) 0%, transparent 65%),
            radial-gradient(28% 32% at 8% 78%, rgba(212, 165, 116, 0.10) 0%, transparent 65%)
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(6, 5, 15, 0.6) 100%)",
        }}
      />
    </div>
  );
});
