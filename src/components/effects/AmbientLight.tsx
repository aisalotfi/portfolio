"use client";

import { memo } from "react";
import { cn } from "@/lib/utils";

interface AmbientLightProps {
  className?: string;
}

export const AmbientLight = memo(function AmbientLight({ className }: AmbientLightProps) {
  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div
        className="absolute top-[35%] left-[30%] h-[720px] w-[720px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,165,116,0.22) 0%, rgba(212,165,116,0.10) 35%, transparent 70%)",
          filter: "blur(40px)",
          opacity: 0.55,
        }}
      />
      <div
        className="absolute top-[55%] left-[70%] h-[640px] w-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(160,107,255,0.18) 0%, rgba(79,124,255,0.10) 40%, transparent 70%)",
          filter: "blur(50px)",
          opacity: 0.5,
        }}
      />
    </div>
  );
});
