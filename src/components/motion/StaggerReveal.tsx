"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
  direction?: "up" | "down" | "fade";
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.08,
  delay = 0.2,
  direction = "up",
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const getVariants = () => {
    const y = direction === "up" ? 20 : direction === "down" ? -20 : 0;
    return {
      hidden: { opacity: 0, y },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      },
    };
  };

  return (
    <m.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: direction === "up" ? 20 : direction === "down" ? -20 : 0 },
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {Array.isArray(children)
        ? (children as React.ReactNode[]).map((child, i) => (
            <m.div key={i} variants={{
              hidden: { opacity: 0, y: direction === "up" ? 20 : direction === "down" ? -20 : 0 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1] as const,
                },
              },
            }}>
              {child}
            </m.div>
          ))
        : children}
    </m.div>
  );
}
