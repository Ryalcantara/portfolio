"use client";
import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style Spotlight — a soft radial light that follows the mouse
 * across its parent. Parent must have position: relative and overflow: hidden.
 */
export function Spotlight({ className }: { className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = divRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(140,201,160,0.07) 0%, transparent 70%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (divRef.current) divRef.current.style.background = "transparent";
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "pointer-events-none absolute inset-0 z-0 transition-all duration-300",
        className
      )}
      style={{ pointerEvents: "all" }}
    />
  );
}
