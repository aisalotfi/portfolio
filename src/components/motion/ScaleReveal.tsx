"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScaleRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleReveal({ children, className, delay = 0 }: ScaleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <m.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </m.div>
    </div>
  );
}
