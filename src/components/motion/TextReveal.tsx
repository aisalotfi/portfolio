"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({ children, className, delay = 0, as: Tag = "p" }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%", rotate: 1 }}
        animate={isInView ? { y: 0, rotate: 0 } : { y: "100%", rotate: 1 }}
        transition={{
          duration: 1,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </div>
  );
}

export function TextRevealInline({ children, className, delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <span ref={ref} className="inline-block overflow-hidden">
      <motion.span
        className={cn("inline-block", className)}
        initial={{ y: "100%", rotate: 1 }}
        animate={isInView ? { y: 0, rotate: 0 } : { y: "100%", rotate: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
