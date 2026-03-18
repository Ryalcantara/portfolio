"use client";
import { useEffect, useRef, useState } from "react";

const posts = [
  {
    title:   "Building a DTR System That Actually Works for Real Teams",
    read:    "5 min read",
    excerpt: "How I approached attendance tracking, schedule conflicts, and leave workflows in a single cohesive platform.",
    thumb: (
      <svg width="100%" height="100%" viewBox="0 0 280 170" preserveAspectRatio="xMidYMid slice">
        <rect width="280" height="170" fill="#111"/>
        <rect x="20" y="20" width="100" height="130" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        {[0,1,2,3,4,5].map(i=>(
          <rect key={i} x="30" y={36+i*18} width={[60,40,52,46,54,38][i]} height="6" rx="2" fill="rgba(255,255,255,0.07)"/>
        ))}
        <circle cx="190" cy="85" r="42" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        <circle cx="190" cy="85" r="30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        <line x1="190" y1="85" x2="190" y2="60" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="190" y1="85" x2="208" y2="92" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="190" cy="85" r="3" fill="rgba(255,255,255,0.5)"/>
      </svg>
    ),
  },
  {
    title:   "Bringing 3D into the Browser — Lessons from the Visitor Kiosk",
    read:    "7 min read",
    excerpt: "What I learned using Three.js to build an interactive 3D experience that runs smoothly on a kiosk screen.",
    thumb: (
      <svg width="100%" height="100%" viewBox="0 0 280 170" preserveAspectRatio="xMidYMid slice">
        <rect width="280" height="170" fill="#0d0d0d"/>
        <polygon points="140,30 210,70 210,130 140,170 70,130 70,70" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <polygon points="140,30 210,70 140,110 70,70" fill="rgba(255,255,255,0.05)"/>
        <polygon points="70,70 140,110 140,170 70,130" fill="rgba(255,255,255,0.03)"/>
        <polygon points="210,70 140,110 140,170 210,130" fill="rgba(255,255,255,0.04)"/>
        <circle cx="140" cy="110" r="5" fill="rgba(255,255,255,0.35)"/>
        {[60,90,120].map((r,i)=>(
          <circle key={i} cx="140" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        ))}
      </svg>
    ),
  },
  {
    title:   "Preserving the Ivatan Language with Code",
    read:    "4 min read",
    excerpt: "Why I built a translator for one of the Philippines' most endangered languages, and what I discovered along the way.",
    thumb: (
      <svg width="100%" height="100%" viewBox="0 0 280 170" preserveAspectRatio="xMidYMid slice">
        <rect width="280" height="170" fill="#111"/>
        {[0,1,2,3].map(i=>(
          <rect key={i} x="20" y={25+i*22} width={[80,62,72,54][i]} height="8" rx="2" fill="rgba(255,255,255,0.06)"/>
        ))}
        <path d="M130 85 Q155 60 180 85 Q155 110 130 85Z" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2"/>
        <circle cx="155" cy="85" r="4" fill="rgba(255,255,255,0.3)"/>
        {[0,1,2,3].map(i=>(
          <rect key={i} x="198" y={25+i*22} width={[60,74,50,68][i]} height="8" rx="2" fill="rgba(255,255,255,0.05)"/>
        ))}
        <line x1="140" y1="0" x2="140" y2="170" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="5 5"/>
        <rect x="20" y="130" width="44" height="14" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <rect x="196" y="130" width="56" height="14" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <text x="42" y="140" fontSize="7" fill="rgba(255,255,255,0.3)" textAnchor="middle" fontFamily="monospace">Filipino</text>
        <text x="224" y="140" fontSize="7" fill="rgba(255,255,255,0.3)" textAnchor="middle" fontFamily="monospace">Ivatan</text>
      </svg>
    ),
  },
];

export default function Blog() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const anim = (delay: string): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
  });

  return (
    <section id="blog" ref={ref} style={{
      minHeight: "100vh",
      borderTop: "1px solid var(--border)",
      padding: "80px 64px",
      display: "flex", flexDirection: "column", justifyContent: "center",
    }}>
      {/* Header */}
      <div style={{ marginBottom: 48, ...anim("0s") }}>
        <div className="section-tag">Writing</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <h2 style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(34px, 4.2vw, 52px)",
            fontWeight: 400, letterSpacing: "-0.01em", color: "#fff",
          }}>
            Design Insights &amp; Trends
          </h2>
          <span style={{ fontSize: 12, color: "var(--muted2)", letterSpacing: "0.04em" }}>
            3 articles
          </span>
        </div>
      </div>

      {/* Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {posts.map((p, i) => (
          <article
            key={p.title}
            style={{
              border: "1px solid var(--border)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "border-color 0.25s, transform 0.25s",
              display: "flex", flexDirection: "column",
              ...anim(`${i * 0.12 + 0.1}s`),
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
              e.currentTarget.style.transform   = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform   = "translateY(0)";
            }}
          >
            {/* Thumb */}
            <div style={{
              width: "100%", aspectRatio: "16/9",
              background: "#0d0d0d", overflow: "hidden",
            }}>
              {p.thumb}
            </div>

            {/* Body */}
            <div style={{ padding: "18px 18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{
                  fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "3px 8px",
                }}>
                  Read
                </span>
                <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.06em" }}>
                  {p.read}
                </span>
              </div>
              <h3 style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: 16, fontWeight: 400, lineHeight: 1.45, color: "#fff",
                marginBottom: 10, flex: 1,
              }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 11, color: "var(--muted2)", lineHeight: 1.65 }}>
                {p.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
