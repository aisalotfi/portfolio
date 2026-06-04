"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 1,
  distance = 40,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: distance };
      case "down": return { opacity: 0, y: -distance };
      case "left": return { opacity: 0, x: -distance };
      case "right": return { opacity: 0, x: distance };
      case "scale": return { opacity: 0, scale: 0.95 };
      case "fade": return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : getInitial()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
