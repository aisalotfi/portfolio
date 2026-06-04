"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * 1px copper-gradient hairline at the top of the viewport.
 * Driven by Framer's `useScroll` (page-wide) and smoothed with a spring
 * so the bar follows momentum from Lenis without visible stutter.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    mass: 0.4,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, rgba(236,200,146,0.9) 0%, rgba(194,156,255,0.7) 50%, rgba(123,151,255,0.7) 100%)",
        boxShadow: "0 0 8px rgba(212,165,116,0.6)",
      }}
    />
  );
}
