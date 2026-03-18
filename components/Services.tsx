"use client";
import { useEffect, useRef, ReactNode } from "react";

const services: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "UI / UX Design",
    desc: "Clean, intuitive interfaces built around real user behaviour. From wireframes to polished high-fidelity prototypes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Brand Identity",
    desc: "Visual identity systems that communicate personality and build trust — logos, type, color, and motion.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 6V11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Web Development",
    desc: "Pixel-perfect front-end development that brings designs to life with smooth animations and clean code.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <polyline points="4,14 8,10 12,13 18,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="2" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.1 });

    ref.current?.querySelectorAll<HTMLElement>(".observe").forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.14}s,
                             transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.14}s,
                             border-color 0.2s, box-shadow 0.2s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      style={{ padding: "80px 52px", borderTop: "1px solid var(--border)", minHeight: "100vh" }}
    >
      <div className="section-tag">What I Offer</div>
      <h2 style={{
        fontFamily: "var(--font-dm-serif), serif",
        fontSize: "clamp(34px, 4vw, 52px)",
        fontWeight: 400, letterSpacing: "-0.01em", color: "#fff",
      }}>
        Services
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 48 }}>
        {services.map(s => (
          <div
            key={s.title}
            className="observe"
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: 32,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
              e.currentTarget.style.boxShadow   = "0 12px 32px rgba(0,0,0,0.4)";
              const icon = e.currentTarget.querySelector<HTMLElement>(".svc-icon");
              if (icon) icon.style.transform = "translateY(-4px) scale(1.08)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow   = "none";
              const icon = e.currentTarget.querySelector<HTMLElement>(".svc-icon");
              if (icon) icon.style.transform = "translateY(0) scale(1)";
            }}
          >
            <div
              className="svc-icon"
              style={{
                width: 44, height: 44, borderRadius: 6,
                background: "#1a1a1a",
                color: "rgba(255,255,255,0.8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 22,
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {s.icon}
            </div>
            <div style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: 22, fontWeight: 400, marginBottom: 12, color: "#fff",
            }}>
              {s.title}
            </div>
            <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
