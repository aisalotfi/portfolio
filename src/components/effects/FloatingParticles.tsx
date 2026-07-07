"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  hue: string;
}

interface FloatingParticlesProps {
  className?: string;
  count?: number;
}

// Jewel-tone particle palette — weighted toward warm copper with
// occasional cool jewel sparks for richness.
const HUES = [
  "rgba(236, 200, 146, 1)", // copper-bright
  "rgba(236, 200, 146, 1)",
  "rgba(244, 238, 227, 1)", // soft white
  "rgba(194, 156, 255, 1)", // amethyst-bright
  "rgba(123, 151, 255, 1)", // sapphire-bright
  "rgba(52, 211, 153, 1)",  // emerald-bright
];

export function FloatingParticles({ className, count = 30 }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const actualCount = isMobile ? Math.min(count, 8) : count;

    const generated: Particle[] = Array.from({ length: actualCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.4 + 0.6,
      opacity: Math.random() * 0.45 + 0.1,
      speedX: (Math.random() - 0.5) * 0.025,
      speedY: (Math.random() - 0.5) * 0.025,
      hue: HUES[Math.floor(Math.random() * HUES.length)],
    }));
    setParticles(generated);

    let animationId: number;
    let isVisible = true;

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        animationId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationId);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100,
        })),
      );
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [count]);

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-0", className)}
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            background: p.hue,
            boxShadow: `0 0 ${p.size * 4}px ${p.hue.replace("1)", "0.5)")}`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
