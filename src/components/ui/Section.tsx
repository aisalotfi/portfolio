"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id={id}
      className={cn("relative min-h-screen py-32 md:py-48", className)}
    >
      {children}
    </section>
  );
}
