"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

/* ─── data ───────────────────────────────────────────────── */
type Project = {
  num:     string;
  label:   string;
  title:   string;
  desc:    string;
  tags:    string[];
  year:    string;
  closed?: boolean;
  wip?:    boolean;
  href?:   string;
  img?:    string;
};

const projects: Project[] = [
  {
    num:    "01",
    label:  "Workforce Platform",
    title:  "Time Management System",
    desc:   "DTR recording, schedule management and leave management platform built for Batanes General Hospital — used company-wide across all departments.",
    tags:   ["React", "Node.js", "MySQL"],
    year:   "2024",
    closed: true,
    img:    "/project-dtr.png",
  },
  {
    num:    "02",
    label:  "Interactive 3D",
    title:  "3D Visitor Kiosk",
    desc:   "Browser-based 3D hospital navigation kiosk with floor-by-floor maps, directional arrows and a destination search — built with Three.js.",
    tags:   ["Three.js", "WebGL", "React"],
    year:   "2024",
    closed: true,
    img:    "/project-kiosk.jpg",
  },
  {
    num:   "03",
    label: "REST API",
    title: "Pokémon API",
    desc:  "RESTful API serving Pokémon data — stats, moves, types and evolutions — built and documented from scratch.",
    tags:  ["REST", "Node.js", "API"],
    year:  "2024",
    href:  "https://github.com/Ryalcantara/python-scrapey",
  },
  {
    num:   "04",
    label: "Automation",
    title: "Web Scraper",
    desc:  "Configurable crawler that parses and exports structured data from target pages — written in Python.",
    tags:  ["Python", "Scraping", "Automation"],
    year:  "2023",
    href:  "https://github.com/Ryalcantara/python-scrapey",
  },
  {
    num:   "05",
    label: "CLI Tool",
    title: "Download Manager",
    desc:  "Concurrent download manager in Go — parallel downloads, progress tracking and resume on failure.",
    tags:  ["Go", "CLI", "Concurrency"],
    year:  "WIP",
    wip:   true,
  },
  {
    num:   "06",
    label: "In Development",
    title: "Ivatan Translator",
    desc:  "A hobby project — English to Ivatan translator for a language spoken only in Batanes. Still a work in progress.",
    tags:  ["Hobby", "Language", "Web"],
    year:  "WIP",
    wip:   true,
    img:   "/translator.png",
  },
];

/* ─── component ───────────────────────────────────────────── */
export default function Works() {
  const ref = useRef<HTMLElement>(null);
  const [visible,     setVisible]     = useState(false);
  const [selected,    setSelected]    = useState<Project | null>(null);
  const [hoveredIdx,  setHoveredIdx]  = useState<number | null>(null);
  const [cursorPos,   setCursorPos]   = useState({ x: 0, y: 0 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const anim = (delay: string): React.CSSProperties => ({
    opacity:   visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}`,
  });

  return (
    <section id="works" ref={ref}
      onMouseMove={e => setCursorPos({ x: e.clientX, y: e.clientY })}
      style={{
        minHeight: "100vh",
        borderTop: "1px solid var(--border)",
        padding: "80px 64px",
        display: "flex", flexDirection: "column", justifyContent: "center",
      }}>

      {/* Cursor-following image preview */}
      {hoveredIdx !== null && projects[hoveredIdx]?.img && (
        <div style={{
          position: "fixed",
          left: cursorPos.x + 28,
          top: cursorPos.y - 64,
          width: 210,
          aspectRatio: "16/9",
          pointerEvents: "none",
          zIndex: 200,
          overflow: "hidden",
          transition: "opacity 0.12s",
        }}>
          <Image
            src={projects[hoveredIdx].img!}
            alt={projects[hoveredIdx].title}
            fill
            style={{ objectFit: "cover", objectPosition: "top left", filter: "grayscale(100%)" }}
          />
        </div>
      )}

      {/* ── Header ── */}
      <div style={{ marginBottom: 0, ...anim("0s") }}>
        <div className="section-tag">Portfolio</div>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 32,
        }}>
          <h2 style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400, letterSpacing: "-0.02em", color: "#fff",
            lineHeight: 1,
          }}>
            Selected Work
          </h2>
          <span style={{
            fontSize: 9, color: "var(--muted)", letterSpacing: "0.14em",
            textTransform: "uppercase", paddingBottom: 6,
          }}>
            6 projects · 2023 — 2024
          </span>
        </div>
      </div>

      {/* ── Top rule ── */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 0 }} />

      {/* ── Project rows ── */}
      {projects.map((p, i) => (
        <div key={p.num}>

          {/* Gov / Personal divider */}
          {i === 2 && (
            <div style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "10px 0",
              ...anim(`${i * 0.06}s`),
            }}>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.04)" }} />
              <span style={{
                fontSize: 8, color: "var(--muted)", letterSpacing: "0.16em",
                textTransform: "uppercase", whiteSpace: "nowrap",
              }}>
                Personal / Open Source
              </span>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.04)" }} />
            </div>
          )}

          {/* Row */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelected(p)}
            onKeyDown={e => e.key === "Enter" && setSelected(p)}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="works-row"
            style={{
              display: "grid",
              gridTemplateColumns: "44px 1fr auto 88px 32px",
              gap: "0 20px",
              alignItems: "center",
              padding: "20px 12px",
              borderBottom: "1px solid var(--border)",
              cursor: "pointer",
              background: hoveredIdx === i
                ? "rgba(255,255,255,0.024)"
                : "transparent",
              transition: "background 0.18s",
              outline: "none",
              ...anim(`${i * 0.07 + 0.08}s`),
            }}
          >
            {/* Number */}
            <span style={{
              fontFamily: "monospace", fontSize: 10,
              color: "var(--muted)", letterSpacing: "0.12em",
            }}>
              {p.num}
            </span>

            {/* Title + label */}
            <div>
              <span style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(16px, 1.8vw, 22px)",
                color: hoveredIdx === i ? "#fff" : "rgba(255,255,255,0.82)",
                transition: "color 0.18s",
                display: "block", lineHeight: 1.2,
              }}>
                {p.title}
              </span>
              <span style={{
                fontSize: 9, color: "var(--muted)",
                letterSpacing: "0.12em", textTransform: "uppercase",
                marginTop: 3, display: "block",
              }}>
                {p.label}
              </span>
            </div>

            {/* Tags */}
            <div className="works-tags" style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end" }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.28)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "2px 6px",
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Year + status */}
            <div className="works-year" style={{ textAlign: "right" }}>
              <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.06em", display: "block" }}>
                {p.year}
              </span>
              {p.wip && (
                <span style={{
                  fontSize: 8, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em",
                  textTransform: "uppercase", display: "flex",
                  alignItems: "center", gap: 4, justifyContent: "flex-end", marginTop: 3,
                }}>
                  <span style={{
                    width: 4, height: 4, borderRadius: "50%",
                    background: "rgba(255,255,255,0.3)", display: "inline-block",
                    animation: "blink 1.6s ease-in-out infinite",
                  }}/>
                  In dev
                </span>
              )}
              {p.closed && (
                <span style={{
                  fontSize: 8, color: "rgba(255,255,255,0.18)", letterSpacing: "0.1em",
                  textTransform: "uppercase", display: "block", marginTop: 3,
                }}>
                  Closed
                </span>
              )}
            </div>

            {/* Arrow */}
            <div style={{
              width: 30, height: 30, borderRadius: "50%",
              border: `1px solid ${hoveredIdx === i ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.09)"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: hoveredIdx === i ? 1 : 0.4,
              transform: hoveredIdx === i ? "translateX(3px)" : "translateX(0)",
              transition: "opacity 0.18s, transform 0.22s cubic-bezier(0.34,1.56,0.64,1), border-color 0.18s",
            }}>
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H4M11 1V8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* ── Modal ── */}
      <Dialog open={!!selected} onOpenChange={open => { if (!open) setSelected(null); }}>
        <DialogContent
          showCloseButton={true}
          className="!rounded-none !bg-[#050505] !ring-0 !border !border-[rgba(255,255,255,0.1)] !p-0 sm:!max-w-[640px] !gap-0 overflow-hidden"
        >
          {selected && (
            <div style={{ padding: "40px 44px 44px", overflowY: "auto", maxHeight: "88vh" }}>

              {/* Meta row */}
              <div style={{
                display: "flex", alignItems: "center", gap: 10, marginBottom: 18,
              }}>
                <span style={{ fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)" }}>
                  {selected.label}
                </span>
                <span style={{ width: 1, height: 10, background: "var(--border)", flexShrink: 0 }} />
                <span style={{ fontSize: 8, letterSpacing: "0.12em", color: "var(--muted)" }}>
                  {selected.year}
                </span>
                <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 10, color: "rgba(255,255,255,0.18)" }}>
                  {selected.num}
                </span>
              </div>

              {/* Title */}
              <h2 style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 400, color: "#fff",
                letterSpacing: "-0.01em", lineHeight: 1.1,
                marginBottom: 28,
              }}>
                {selected.title}
              </h2>

              {/* Image */}
              {selected.img && (
                <div style={{
                  marginBottom: 28, aspectRatio: "16/9",
                  position: "relative", overflow: "hidden",
                  background: "#0d0d0d",
                  border: "1px solid var(--border)",
                }}>
                  <Image
                    src={selected.img} alt={selected.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top left" }}
                  />
                </div>
              )}

              {/* Description */}
              <p style={{
                fontSize: 14, color: "var(--muted2)", lineHeight: 1.85,
                marginBottom: 22,
              }}>
                {selected.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 30 }}>
                {selected.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "4px 10px",
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                borderTop: "1px solid var(--border)", paddingTop: 20,
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                {selected.closed && (
                  <span style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.06em", lineHeight: 1.6 }}>
                    Source closed per government agency policy.
                  </span>
                )}
                {selected.href && (
                  <a
                    href={selected.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      fontSize: 11, color: "#fff", letterSpacing: "0.1em",
                      textTransform: "uppercase", textDecoration: "none",
                      display: "flex", alignItems: "center", gap: 8,
                      border: "1px solid rgba(255,255,255,0.18)",
                      padding: "10px 20px",
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                    }}
                  >
                    View on GitHub
                    <svg width="9" height="9" viewBox="0 0 11 11" fill="none">
                      <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </a>
                )}
                {selected.wip && (
                  <span style={{
                    fontSize: 10, color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "rgba(255,255,255,0.3)", flexShrink: 0,
                      animation: "blink 1.6s ease-in-out infinite",
                    }}/>
                    In Development
                  </span>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
