"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    tag: "Branding",
    title: "Nova Identity System",
    desc: "Full brand identity for a SaaS startup — logo, color system, and motion guidelines.",
    year: "2025",
    bg: "#1C2820",
    label: "Brand Identity",
    accent: "var(--green)",
  },
  {
    tag: "UI / UX",
    title: "Fintech Dashboard",
    desc: "End-to-end product design for a financial analytics platform with real-time data.",
    year: "2025",
    bg: "#191E2E",
    label: "Product Design",
    accent: "var(--blue)",
  },
  {
    tag: "Development",
    title: "E-commerce Rebuild",
    desc: "Redesigned and rebuilt a high-volume store, increasing conversion rate by 34%.",
    year: "2024",
    bg: "#261C1B",
    label: "Web Development",
    accent: "var(--coral)",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.08 });

    ref.current?.querySelectorAll<HTMLElement>(".observe").forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s,
                             transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s,
                             border-color 0.2s, box-shadow 0.2s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={ref}
      style={{ padding: "80px 52px", borderTop: "1px solid var(--border)" }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
        <div>
          <div className="section-tag">Selected Work</div>
          <h2 style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(34px, 4vw, 52px)",
            fontWeight: 400, letterSpacing: "-0.01em",
          }}>
            Recent Projects
          </h2>
        </div>
        <a
          href="#"
          style={{
            fontSize: 13, color: "var(--muted)", textDecoration: "none",
            display: "flex", alignItems: "center", gap: 6,
            letterSpacing: "0.06em", transition: "color 0.2s, gap 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color = "var(--green)"; e.currentTarget.style.gap = "10px"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.gap = "6px"; }}
        >
          See all
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </a>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {projects.map(p => (
          <div
            key={p.title}
            className="observe"
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              overflow: "hidden",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = p.accent === "var(--green)"
                ? "rgba(140,201,160,0.35)"
                : p.accent === "var(--blue)"
                ? "rgba(107,159,212,0.35)"
                : "rgba(212,88,74,0.35)";
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Image / color block — flat */}
            <div style={{
              width: "100%", aspectRatio: "16/10",
              background: p.bg,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "var(--muted)",
              borderBottom: `2px solid ${p.accent}`,
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Flat corner accent */}
              <div style={{
                position: "absolute", top: 12, left: 12,
                width: 8, height: 8,
                border: `1.5px solid ${p.accent}`,
                borderRight: "none", borderBottom: "none",
              }} />
              <div style={{
                position: "absolute", bottom: 12, right: 12,
                width: 8, height: 8,
                border: `1.5px solid ${p.accent}`,
                borderLeft: "none", borderTop: "none",
              }} />
              {p.label}
            </div>

            {/* Body */}
            <div style={{ padding: "20px 22px" }}>
              <div style={{
                fontSize: 10, letterSpacing: "0.16em",
                textTransform: "uppercase", color: p.accent,
                marginBottom: 8,
              }}>
                {p.tag}
              </div>
              <div style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: 20, fontWeight: 400, marginBottom: 8,
              }}>
                {p.title}
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                {p.desc}
              </div>
            </div>

            {/* Footer */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "12px 22px",
              borderTop: "1px solid var(--border)",
            }}>
              <span style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em" }}>
                {p.year}
              </span>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                border: `1px solid ${p.accent}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: p.accent,
                transition: "background 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(140,201,160,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
