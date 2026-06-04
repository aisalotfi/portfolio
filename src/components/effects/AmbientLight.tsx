"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/useMousePosition";

interface AmbientLightProps {
  className?: string;
}

/**
 * Two layered jewel-tone halos that drift with the cursor.
 * Provides the "warm spotlight + cool counter-light" effect that
 * gives the page its expensive, cinematic depth.
 */
export function AmbientLight({ className }: AmbientLightProps) {
  const warmRef = useRef<HTMLDivElement>(null);
  const coolRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();

  useEffect(() => {
    if (warmRef.current) {
      const x = mouse.normalizedX * 40;
      const y = mouse.normalizedY * 40;
      warmRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
    if (coolRef.current) {
      const x = mouse.normalizedX * -55;
      const y = mouse.normalizedY * -55;
      coolRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
  }, [mouse]);

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* Warm copper halo */}
      <div
        ref={warmRef}
        className="absolute top-[35%] left-[30%] h-[720px] w-[720px] rounded-full will-change-transform transition-transform duration-[2200ms] ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(212,165,116,0.22) 0%, rgba(212,165,116,0.10) 35%, transparent 70%)",
          filter: "blur(40px)",
          opacity: 0.55,
        }}
      />

      {/* Cool amethyst counter-halo */}
      <div
        ref={coolRef}
        className="absolute top-[55%] left-[70%] h-[640px] w-[640px] rounded-full will-change-transform transition-transform duration-[2400ms] ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(160,107,255,0.18) 0%, rgba(79,124,255,0.10) 40%, transparent 70%)",
          filter: "blur(50px)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}
