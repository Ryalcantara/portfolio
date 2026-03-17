"use client";
import { useEffect, useRef, useState } from "react";

const chips = [
  { label: "UI / UX",          color: "green" },
  { label: "Branding",         color: "blue"  },
  { label: "Motion",           color: "green" },
  { label: "Development",      color: "coral" },
  { label: "Product Strategy", color: "green" },
  { label: "Illustration",     color: "blue"  },
] as const;

const chipColors: Record<string, { border: string; color: string }> = {
  green: { border: "rgba(140,201,160,0.25)", color: "var(--green)" },
  blue:  { border: "rgba(107,159,212,0.25)", color: "var(--blue)"  },
  coral: { border: "rgba(212,88,74,0.25)",   color: "var(--coral)" },
};

const cardStats = [
  { end: 200, suffix: "+", label: "Projects"  },
  { end: 50,  suffix: "+", label: "Startups"  },
  { end: 8,   suffix: "+", label: "Years Exp" },
  { end: 30,  suffix: "+", label: "Awards"    },
];

function useCountUp(end: number, duration = 1400, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = end / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(id); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [active, end, duration]);
  return val;
}

function StatCard({ stat, active }: { stat: typeof cardStats[number]; active: boolean }) {
  const val = useCountUp(stat.end, 1400, active);
  return (
    <div style={{
      background: "var(--bg)",
      borderRadius: 6,
      padding: 16,
      border: "1px solid var(--border)",
    }}>
      <div style={{
        fontFamily: "var(--font-dm-serif), serif",
        fontSize: 26, color: "var(--green)",
      }}>
        {val}{stat.suffix}
      </div>
      <div style={{
        fontSize: 11, color: "var(--muted)",
        letterSpacing: "0.06em", textTransform: "uppercase",
      }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function About() {
  const ref     = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    // Slide in left / right
    const slideObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
        }
      });
    }, { threshold: 0.12 });

    const left  = ref.current?.querySelector<HTMLElement>(".slide-left");
    const right = ref.current?.querySelector<HTMLElement>(".slide-right");
    if (left)  { left.style.opacity  = "0"; left.style.transform  = "translateX(-40px)"; left.style.transition  = "opacity 0.7s ease, transform 0.7s ease"; slideObs.observe(left); }
    if (right) { right.style.opacity = "0"; right.style.transform = "translateX(40px)";  right.style.transition = "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s"; slideObs.observe(right); }

    // Count-up trigger
    const countObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setCounting(true); });
    }, { threshold: 0.3 });
    if (cardRef.current) countObs.observe(cardRef.current);

    return () => { slideObs.disconnect(); countObs.disconnect(); };
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "110px 52px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Left */}
      <div className="slide-left">
        <div className="section-tag">About Me</div>
        <h2 style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "clamp(34px, 4vw, 52px)",
          fontWeight: 400, lineHeight: 1.1,
          marginBottom: 24, letterSpacing: "-0.01em",
        }}>
          Crafting digital<br />
          <em style={{ fontStyle: "italic", color: "var(--blue)" }}>experiences</em>{" "}
          that resonate.
        </h2>
        <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
          I&apos;m a{" "}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>
            product designer &amp; creative developer
          </strong>{" "}
          with a passion for blending aesthetics with function. Every pixel, every interaction is
          intentional — built to leave an impression.
        </p>
        <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
          With years of experience across{" "}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>
            branding, UI/UX, and front-end development
          </strong>
          , I help startups and established brands tell their story through design.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {chips.map((c, i) => (
            <span
              key={c.label}
              style={{
                fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "6px 14px", borderRadius: 2,
                border: `1px solid ${chipColors[c.color].border}`,
                color: chipColors[c.color].color,
                transition: "transform 0.2s, border-color 0.2s",
                display: "inline-block",
                animation: `fadeUp 0.5s ease ${0.05 * i + 0.3}s both`,
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {c.label}
            </span>
          ))}
        </div>
      </div>

      {/* Right — card */}
      <div
        ref={cardRef}
        className="slide-right"
        style={{
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          padding: 36,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* flat top accent bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: "var(--green)",
        }} />

        {/* avatar — flat color */}
        <div style={{
          width: 72, height: 72, borderRadius: "50%",
          background: "#2D5A42",
          marginBottom: 18,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 28,
          border: "2px solid var(--green)",
        }}>
          ✦
        </div>

        <div style={{ fontFamily: "var(--font-dm-serif), serif", fontSize: 20, marginBottom: 4 }}>
          Ryo
        </div>
        <div style={{
          fontSize: 12, color: "var(--green)",
          letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24,
        }}>
          Product Designer &amp; Developer
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {cardStats.map(s => (
            <StatCard key={s.label} stat={s} active={counting} />
          ))}
        </div>
      </div>
    </section>
  );
}
