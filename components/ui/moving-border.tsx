"use client";
import { useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style Moving Border — an animated gradient border
 * that rotates around the element.
 */
export function MovingBorder({
  children,
  className,
  containerClassName,
  borderColor = "var(--green)",
  duration = 3000,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  borderColor?: string;
  duration?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let startTime = performance.now();

    const draw = (now: number) => {
      const elapsed = now - startTime;
      const progress = (elapsed % duration) / duration; // 0→1

      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Perimeter path
      const perimeter = 2 * (w + h);
      const pos = progress * perimeter;

      let x: number, y: number;
      if (pos < w) {
        x = pos; y = 0;
      } else if (pos < w + h) {
        x = w; y = pos - w;
      } else if (pos < 2 * w + h) {
        x = w - (pos - w - h); y = h;
      } else {
        x = 0; y = h - (pos - 2 * w - h);
      }

      // Draw glowing dot
      const grd = ctx.createRadialGradient(x, y, 0, x, y, 40);
      grd.addColorStop(0, borderColor === "var(--green)" ? "rgba(140,201,160,0.9)" : "rgba(107,159,212,0.9)");
      grd.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width  = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    resize();
    rafRef.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [borderColor, duration]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded", containerClassName)}
      style={{ padding: 1 }}
    >
      {/* animated border canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ borderRadius: "inherit" }}
      />
      {/* inner content */}
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
}
