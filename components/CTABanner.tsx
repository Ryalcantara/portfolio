"use client";
import { useEffect, useRef, useState } from "react";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const anim = (delay: string): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
  });

  return (
    <section id="cta" ref={ref} style={{
      minHeight: "100vh",
      borderTop: "1px solid var(--border)",
      display: "flex", flexDirection: "column",
      alignItems: "flex-start", justifyContent: "center",
      padding: "80px 96px",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Ghost chapter number — bottom-right bleed */}
      <span style={{
        position: "absolute",
        fontFamily: "var(--font-dm-serif), serif",
        fontSize: "clamp(220px, 38vw, 520px)",
        color: "rgba(255,255,255,0.013)",
        lineHeight: 1,
        bottom: "-8%", right: "-4%",
        userSelect: "none", pointerEvents: "none",
        letterSpacing: "-0.05em",
      }}>
        05
      </span>

      <div className="section-tag" style={anim("0s")}>
        Open to Opportunities
      </div>

      <h2 style={{
        fontFamily: "var(--font-dm-serif), serif",
        fontSize: "clamp(42px, 6vw, 82px)",
        fontWeight: 400, lineHeight: 1.0,
        letterSpacing: "-0.025em", color: "#fff",
        marginBottom: 24, maxWidth: 720,
        ...anim("0.1s"),
      }}>
        Let&apos;s work<br />
        <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.28)" }}>
          together.
        </em>
      </h2>

      <p style={{
        fontSize: 14, color: "var(--muted2)", lineHeight: 1.85,
        maxWidth: 460, marginBottom: 52,
        ...anim("0.18s"),
      }}>
        Open to remote roles, freelance work, or just a chat
        if you have something interesting going on.
      </p>

      {/* Email — oversized, left-anchored */}
      <a
        href="mailto:royalcantara02@gmail.com"
        style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "clamp(28px, 5.5vw, 80px)",
          color: "#fff", textDecoration: "none",
          letterSpacing: "-0.025em",
          display: "block",
          lineHeight: 0.95,
          whiteSpace: "nowrap",
          transition: "opacity 0.25s",
          marginBottom: 44,
          ...anim("0.24s"),
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.3")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        royalcantara02@gmail.com
      </a>

      {/* Availability — minimal */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontSize: 10, color: "var(--muted)", letterSpacing: "0.12em",
        textTransform: "uppercase",
        ...anim("0.3s"),
      }}>
        <span style={{
          width: 5, height: 5, borderRadius: "50%",
          background: "rgba(255,255,255,0.4)", flexShrink: 0,
        }}/>
        Available for remote work worldwide
      </div>
    </section>
  );
}
