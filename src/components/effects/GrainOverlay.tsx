"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GrainOverlayProps {
  className?: string;
  opacity?: number;
}

export function GrainOverlay({ className, opacity = 0.03 }: GrainOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth < 1024;
    if (isMobile) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        animationId = requestAnimationFrame(generateGrain);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const generateGrain = () => {
      if (!isVisible) return;
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = opacity * 255;
      }

      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(generateGrain);
    };

    generateGrain();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none fixed inset-0 z-50", className)}
      aria-hidden="true"
    />
  );
}
