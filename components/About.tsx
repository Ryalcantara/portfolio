"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
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
    opacity:   visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
  });

  return (
    <section id="about" ref={ref} style={{
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "3fr 2fr",
      borderTop: "1px solid var(--border)",
      position: "relative",
    }}>

      {/* Ghost chapter number */}
      <span className="ghost-num" style={{
        position: "absolute",
        fontFamily: "var(--font-dm-serif), serif",
        fontSize: "clamp(100px, 16vw, 220px)",
        color: "rgba(255,255,255,0.018)",
        lineHeight: 1,
        top: 24, right: 40,
        userSelect: "none", pointerEvents: "none",
        letterSpacing: "-0.05em",
      }}>02</span>

      {/* ── Left ── */}
      <div className="about-left" style={{
        padding: "80px 60px 80px 64px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        borderRight: "1px solid var(--border)",
      }}>
        <div className="section-tag" style={anim("0s")}>About Me</div>

        <h2 style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "clamp(32px, 3.5vw, 48px)",
          fontWeight: 400, lineHeight: 1.15,
          letterSpacing: "-0.015em", color: "#fff",
          marginBottom: 24,
          ...anim("0.08s"),
        }}>
          Grew up in Batanes,{" "}
          <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>
            studied IT, started building.
          </em>
        </h2>

        <p style={{
          fontSize: 14, color: "var(--muted2)", lineHeight: 1.85,
          marginBottom: 16, maxWidth: 460,
          ...anim("0.16s"),
        }}>
          I&apos;m from{" "}
          <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>Batanes</span>
          {" "}— the northernmost province of the Philippines.
          I graduated with an IT degree and started working at a local government agency here, building internal tools.
        </p>

        <p style={{
          fontSize: 14, color: "var(--muted2)", lineHeight: 1.85,
          marginBottom: 40, maxWidth: 460,
          ...anim("0.22s"),
        }}>
          Over 2+ years I developed a{" "}
          <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>time management system</span>,
          a{" "}
          <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>3D visitor kiosk</span>,
          and I&apos;m currently working on an{" "}
          <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>Ivatan translator</span>
          {" "}— a hobby project for a language spoken only in Batanes.
        </p>

        {/* Stack — plain text */}
        <div style={{ ...anim("0.28s") }}>
          <div style={{
            fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--muted)", marginBottom: 10,
          }}>
            Current stack
          </div>
          <p style={{
            fontSize: 12, color: "rgba(255,255,255,0.42)",
            lineHeight: 2.2, letterSpacing: "0.03em",
          }}>
            React · Next.js · Node.js · TypeScript · Three.js · MySQL · REST API · Laravel
          </p>
        </div>

        <div style={{ marginTop: 22, ...anim("0.34s") }}>
          <div style={{
            fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--muted)", marginBottom: 10,
            display: "flex", alignItems: "center", gap: 8,
          }}>
            Expanding into
            <span style={{
              fontSize: 7, letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)",
              border: "1px solid rgba(255,255,255,0.06)", padding: "2px 6px",
            }}>
              learning
            </span>
          </div>
          <p style={{
            fontSize: 12, color: "rgba(255,255,255,0.22)",
            lineHeight: 2.2, letterSpacing: "0.03em",
          }}>
            Rust · Docker · AWS · GraphQL · WebSockets · Redis
          </p>
        </div>
      </div>

      {/* ── Right ── */}
      <div className="about-right" style={{
        padding: "80px 52px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        ...anim("0.12s"),
      }}>
        {/* Portrait — clean rectangle, no card */}
        <div style={{
          position: "relative",
          overflow: "hidden",
          marginBottom: 28,
        }}>
          <Image
            src="/portrait.webp"
            alt="Portrait"
            width={400} height={500}
            style={{
              width: "100%", height: "auto",
              display: "block",
              filter: "grayscale(100%)",
            }}
            onError={e => {
              const el = e.target as HTMLImageElement;
              el.style.display = "none";
              if (el.parentElement) {
                el.parentElement.innerHTML =
                  `<div style="width:100%;aspect-ratio:4/5;background:#0d0d0d;display:flex;align-items:center;justify-content:center;color:#333;font-size:10px;letter-spacing:0.1em;text-transform:uppercase">portrait.webp</div>`;
              }
            }}
          />
          {/* Subtle vignette on portrait */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4) 100%)",
            pointerEvents: "none",
          }}/>
        </div>

        {/* Minimal stats — just type */}
        <div style={{ display: "flex", gap: 36 }}>
          {[
            { num: "2+ yrs",   label: "IT grad"   },
            { num: "Batanes", label: "PHL" },
          ].map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: 22, color: "#fff", lineHeight: 1,
              }}>
                {s.num}
              </div>
              <div style={{
                fontSize: 9, color: "var(--muted)",
                letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
