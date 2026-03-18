"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Only show on true pointer devices (not touch)
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setReady(true);

    let mx = -200, my = -200;
    let lx = -200, ly = -200;
    let isHover = false;
    let raf: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onOver  = (e: MouseEvent) => {
      isHover = !!(e.target as Element).closest("a, button, [data-cursor-hover]");
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover",  onOver);

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top  = `${my}px`;
      }
      lx += (mx - lx) * 0.1;
      ly += (my - ly) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left      = `${lx}px`;
        ringRef.current.style.top       = `${ly}px`;
        const s = isHover ? 2.2 : 1;
        ringRef.current.style.transform = `translate(-50%,-50%) scale(${s})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed", zIndex: 9999, pointerEvents: "none",
          width: 6, height: 6, borderRadius: "50%",
          background: "#fff", mixBlendMode: "difference",
          transform: "translate(-50%,-50%)",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", zIndex: 9998, pointerEvents: "none",
          width: 34, height: 34, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.55)",
          mixBlendMode: "difference",
          transform: "translate(-50%,-50%) scale(1)",
          transition: "transform 0.38s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      />
    </>
  );
}
