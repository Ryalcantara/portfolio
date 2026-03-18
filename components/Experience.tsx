"use client";
import { useEffect, useRef, useState } from "react";

const roles = [
  // ── Government service (closed-source) ──
  {
    company:  "Government Service — Fullstack Developer",
    role:     "Built two production-grade internal systems. Source code is closed per agency policy.",
    tags:     ["Fullstack", "React", "MySQL"],
    period:   "2023 – Present",
    divider:  false,
    note:     "Closed source",
  },
  {
    company:  "↳ Time Management System",
    role:     "DTR recording, schedule management and leave management platform — used company-wide.",
    tags:     ["React", "Node.js", "MySQL"],
    period:   "2024",
    divider:  false,
    note:     "Closed source",
    indent:   true,
  },
  {
    company:  "↳ 3D Visitor Kiosk",
    role:     "Immersive browser-based 3D kiosk for visitor check-in and facility navigation.",
    tags:     ["Three.js", "WebGL"],
    period:   "2024",
    divider:  true,   // visual separator before personal work
    note:     "Closed source",
    indent:   true,
  },
  // ── Personal / open projects ──
  {
    company:  "Pokémon API",
    role:     "RESTful API serving Pokémon data — stats, moves, types and evolutions — built and documented from scratch.",
    tags:     ["REST", "Node.js", "API"],
    period:   "2024",
    divider:  false,
    note:     "",
  },
  {
    company:  "Download Manager",
    role:     "Concurrent download manager in Go — parallel downloads, progress tracking and resume on failure.",
    tags:     ["Go", "CLI", "Concurrency"],
    period:   "2024",
    divider:  false,
    note:     "",
  },
  {
    company:  "Web Scraper",
    role:     "Configurable crawler that parses and exports structured data from target pages.",
    tags:     ["Node.js", "Scraping"],
    period:   "2023",
    divider:  false,
    note:     "",
  },
  {
    company:  "Ivatan Translator",
    role:     "Actively building a translation tool for Ivatan — one of the Philippines' most endangered languages.",
    tags:     ["Hobby", "In Dev"],
    period:   "2023 – WIP",
    divider:  false,
    note:     "In progress",
  },
];

const expanding = [
  { skill: "Rust",       why: "Systems-level performance"   },
  { skill: "Docker",     why: "Container-based deployments" },
  { skill: "AWS",        why: "Cloud infrastructure"        },
  { skill: "GraphQL",    why: "Flexible API design"         },
  { skill: "WebSockets", why: "Real-time systems"           },
  { skill: "Redis",      why: "Caching & queues"            },
];

export default function Experience() {
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
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
  });

  return (
    <section id="experience" ref={ref} style={{
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
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
      }}>03</span>
      {/* ── Left ── */}
      <div className="exp-left" style={{
        padding: "80px 52px 80px 64px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        borderRight: "1px solid var(--border)",
      }}>
        <div className="section-tag" style={anim("0s")}>Experience</div>
        <h2 style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "clamp(30px, 3.5vw, 46px)",
          fontWeight: 400, lineHeight: 1.12,
          letterSpacing: "-0.01em", color: "#fff",
          marginBottom: 20,
          ...anim("0.1s"),
        }}>
          Two years of shipping,{" "}
          <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.38)" }}>
            still learning.
          </em>
        </h2>

        <p style={{
          fontSize: 13, color: "var(--muted2)", lineHeight: 1.85,
          maxWidth: 370, marginBottom: 24,
          ...anim("0.18s"),
        }}>
          IT grad working at a local government agency in Batanes.
          Built internal tools used daily, and picking up new tech on the side.
        </p>

        {/* Expanding skills — plain rows */}
        <div style={{ marginBottom: 30, ...anim("0.24s") }}>
          <div style={{
            fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--muted)", marginBottom: 14,
          }}>
            Actively expanding into
          </div>
          {expanding.map((e, i) => (
            <div key={e.skill} style={{
              display: "flex", justifyContent: "space-between",
              padding: "9px 0",
              borderBottom: i < expanding.length - 1
                ? "1px solid rgba(255,255,255,0.04)"
                : "none",
            }}>
              <span style={{
                fontSize: 11, color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.06em",
              }}>
                {e.skill}
              </span>
              <span style={{
                fontSize: 11, color: "var(--muted)",
                letterSpacing: "0.03em",
              }}>
                {e.why}
              </span>
            </div>
          ))}
        </div>

        <div style={anim("0.3s")}>
          <a
            href="#cta"
            onClick={e => {
              e.preventDefault();
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontSize: 12, color: "var(--muted2)", letterSpacing: "0.08em",
              display: "inline-flex", alignItems: "center", gap: 8,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted2)")}
          >
            Get in touch
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Right — timeline ── */}
      <div className="exp-right" style={{
        padding: "80px 52px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        overflowY: "auto",
      }}>
        {roles.map((r, i) => (
          <div key={r.company}>
            {/* Section divider between gov work and personal */}
            {r.divider && (
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                margin: "6px 0",
                ...anim(`${0.06 * i}s`),
              }}>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)" }}/>
                <span style={{
                  fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--muted)", whiteSpace: "nowrap",
                }}>
                  Personal Projects
                </span>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)" }}/>
              </div>
            )}

            <div style={{
              padding: "14px 0",
              paddingLeft: r.indent ? 14 : 0,
              borderBottom: "1px solid var(--border)",
              borderLeft: r.indent ? "1px solid rgba(255,255,255,0.06)" : "none",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 12,
              alignItems: "start",
              ...anim(`${0.06 * i + 0.1}s`),
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                  <span style={{
                    fontSize: r.indent ? 12 : 13,
                    color: r.indent ? "rgba(255,255,255,0.6)" : "#fff",
                    fontWeight: r.indent ? 400 : 500,
                    letterSpacing: "0.01em",
                  }}>
                    {r.company}
                  </span>
                  {r.note && (
                    <span style={{
                      fontSize: 7, letterSpacing: "0.1em", textTransform: "uppercase",
                      color: r.note === "In progress"
                        ? "rgba(255,255,255,0.45)"
                        : "rgba(255,255,255,0.2)",
                      border: r.note === "In progress"
                        ? "1px dashed rgba(255,255,255,0.2)"
                        : "1px solid rgba(255,255,255,0.07)",
                      padding: "1px 5px",
                    }}>
                      {r.note}
                    </span>
                  )}
                </div>
                <div style={{
                  fontSize: 11, color: "var(--muted2)", lineHeight: 1.65,
                  maxWidth: 290,
                }}>
                  {r.role}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5, flexShrink: 0 }}>
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "flex-end" }}>
                  {r.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 7, letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "2px 5px",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                  {r.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
