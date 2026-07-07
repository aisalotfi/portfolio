"use client";

import { useEffect, useRef, useState } from "react";
import { m, useMotionValue, useReducedMotion } from "framer-motion";

export function CursorFollower() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    if (reduceMotion) return;
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
      if (!dotRef.current) return;
      const t = e.target as HTMLElement | null;
      const hover = !!t?.closest('a, button, [role="button"], input, textarea, select');
      dotRef.current.style.backgroundColor = hover ? "#ECC892" : "#D4A574";
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled, visible, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <style jsx global>{`
        html, html * { cursor: none !important; }
      `}</style>
      <m.div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[71] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          opacity: visible ? 1 : 0,
          backgroundColor: "#D4A574",
          boxShadow: "0 0 10px rgba(236, 200, 146, 0.9)",
          transition: "background-color 0.15s ease-out",
        }}
      />
    </>
  );
}
