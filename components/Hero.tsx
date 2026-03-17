"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "0 52px",
        paddingTop: 80,
        overflow: "hidden",
        gap: 40,
      }}
    >
      {/* Background word */}
      <span style={{
        position: "absolute",
        bottom: "-0.05em",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "var(--font-dm-serif), serif",
        fontSize: "clamp(100px, 18vw, 240px)",
        color: "rgba(255,255,255,0.03)",
        whiteSpace: "nowrap",
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "0.04em",
      }}>
        PORTFOLIO
      </span>

      {/* Vertical label */}
      <span style={{
        position: "absolute", left: 18, top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        fontSize: 10, letterSpacing: "0.22em",
        color: "var(--muted)", textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}>
        Creative Designer
      </span>

      {/* Year */}
      <span style={{
        position: "absolute", right: 52, top: "50%",
        transform: "translateY(-50%) rotate(90deg)",
        fontSize: 10, letterSpacing: "0.22em",
        color: "var(--muted)", textTransform: "uppercase",
      }}>
        2026
      </span>

      {/* LEFT */}
      <div style={{ position: "relative", zIndex: 2, paddingLeft: 30 }}>
        {/* Stats */}
        <div className="fade-up-1" style={{ display: "flex", gap: 40, marginBottom: 44 }}>
          {[
            { num: "+200", label: "Projects completed" },
            { num: "+50",  label: "Startups raised" },
          ].map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: 32, color: "var(--text)", lineHeight: 1,
              }}>
                <span style={{ color: "var(--green)" }}>{s.num[0]}</span>
                {s.num.slice(1)}
              </div>
              <div style={{
                fontSize: 11, color: "var(--muted)",
                letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 4,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Heading */}
        <h1 className="fade-up-2" style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "clamp(64px, 8vw, 108px)",
          fontWeight: 400, lineHeight: 0.92,
          marginBottom: 20, letterSpacing: "-0.02em",
        }}>
          Hello,<br />
          <em style={{ fontStyle: "italic", color: "var(--green)" }}>World.</em>
        </h1>

        <p className="fade-up-3" style={{
          fontSize: 13, color: "var(--muted)",
          letterSpacing: "0.06em", marginBottom: 40,
        }}>
          — It&apos;s Ryo, a design &amp; code wizard
        </p>

        {/* Buttons */}
        <div className="fade-up-4" style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <a
            href="#portfolio"
            onClick={e => { e.preventDefault(); document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              background: "var(--green)", color: "#191A2C",
              fontWeight: 600, fontSize: 13, letterSpacing: "0.06em",
              padding: "13px 28px", border: "none", borderRadius: 4,
              cursor: "pointer", textDecoration: "none",
              transition: "transform 0.2s, opacity 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.opacity = "1";
            }}
          >
            View Work
          </a>
          <a
            href="#about"
            onClick={e => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              color: "var(--muted)", fontSize: 13, letterSpacing: "0.04em",
              textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
              transition: "color 0.2s, gap 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.gap = "10px";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.gap = "6px";
            }}
          >
            Learn more
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* RIGHT — portrait */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", justifyContent: "center", alignItems: "flex-end",
        height: "100%", paddingTop: 60,
      }}>
        {/* floating wrapper */}
        <div className="portrait-float" style={{ position: "relative", width: "min(420px, 90%)" }}>

          {/* Pulsing ring */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            width: "88%", paddingTop: "88%",
            borderRadius: "50%",
            border: "1px solid rgba(107,159,212,0.22)",
            animation: "pulse-ring 3s ease-out infinite",
            pointerEvents: "none",
          }} />

          {/* Static ring behind */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%", paddingTop: "80%",
            borderRadius: "50%",
            border: "1px solid rgba(140,201,160,0.1)",
            pointerEvents: "none",
          }} />

          {/* Flat accent bar (replaces gradient line) */}
          <div style={{
            position: "absolute", top: "30%", right: -24,
            width: 1, height: 120,
            background: "var(--green)",
            opacity: 0.25,
          }} />

          {/*
            PORTRAIT IMAGE
            Save your illustration to: portfolio/public/portrait.png
          */}
          <Image
            src="/portrait.png"
            alt="Portrait illustration"
            width={420}
            height={560}
            priority
            style={{
              width: "100%", height: "auto",
              display: "block", position: "relative", zIndex: 1,
            }}
            onError={e => {
              (e.target as HTMLImageElement).style.display = "none";
              const p = document.getElementById("portrait-placeholder");
              if (p) p.style.display = "flex";
            }}
          />

          {/* Placeholder */}
          <div
            id="portrait-placeholder"
            style={{
              width: "100%", aspectRatio: "3/4",
              borderRadius: 4,
              background: "#232540",
              border: "1px dashed rgba(140,201,160,0.2)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 10, color: "var(--muted)",
              fontSize: 12, letterSpacing: "0.08em",
              textTransform: "uppercase",
              position: "relative", zIndex: 1,
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.3 }}>
              <rect x="8" y="8" width="32" height="32" rx="16" stroke="#8CC9A0" strokeWidth="1.5"/>
              <circle cx="24" cy="20" r="5" stroke="#6B9FD4" strokeWidth="1.5"/>
              <path d="M12 38C12 32 17 28 24 28C31 28 36 32 36 38" stroke="#8CC9A0" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>Add portrait.png</span>
            <span style={{ fontSize: 10, opacity: 0.5 }}>Save to /public/portrait.png</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: 36, left: 82,
        fontSize: 11, color: "var(--muted)",
        letterSpacing: "0.14em", textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        Scroll down
        <span className="scroll-bounce" style={{ display: "flex" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M7 13L2 8M7 13L12 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        </span>
      </div>
    </section>
  );
}
