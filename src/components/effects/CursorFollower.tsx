"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";

/**
 * Custom cursor — a tight yellow dot that snaps to the pointer.
 * Hidden on touch devices and when prefers-reduced-motion is set.
 */
export function CursorFollower() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [hovering, setHovering] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Eligibility check (mount only)
  useEffect(() => {
    if (reduceMotion) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (finePointer) setEnabled(true);
  }, [reduceMotion]);

  // Track movement + hover state
  useEffect(() => {
    if (!enabled) return;

    const HOVER_SELECTOR =
      'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]';

    const handleMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!hasMoved) setHasMoved(true);

      const target = e.target as HTMLElement | null;
      if (target?.closest(HOVER_SELECTOR)) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const handleLeave = () => setHasMoved(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled, hasMoved, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      {/* Hide the native cursor when the follower is active */}
      <style jsx global>{`
        html,
        html * {
          cursor: none !important;
        }
      `}</style>

      {/* Snappy yellow dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[71] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          opacity: hasMoved ? 1 : 0,
          background: hovering ? "#ECC892" : "#D4A574",
          boxShadow: "0 0 10px rgba(236, 200, 146, 0.9)",
          transition: "background-color 0.3s ease-out",
        }}
      />
    </>
  );
}
