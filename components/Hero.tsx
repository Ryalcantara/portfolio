"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const marqueeItems = [
  "React", "Next.js", "Node.js", "TypeScript", "Three.js",
  "MySQL", "Go", "Python", "REST API", "Laravel",
  "Rust ✦", "Docker ✦", "AWS ✦", "GraphQL ✦",
];

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tx = 0, ty = 0, lx = 0, ly = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      tx = ((e.clientX - rect.left) / rect.width  - 0.5) * 22;
      ty = ((e.clientY - rect.top)  / rect.height - 0.5) * 14;
    };

    const tick = () => {
      lx += (tx - lx) * 0.05;
      ly += (ty - ly) * 0.05;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${lx}px, ${ly}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const section = sectionRef.current;
    section?.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      section?.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const snap = (id: string) => {
    document.getElementById("scroll-root")
      ?.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const onMagnet = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 16;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 10;
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onMagnetLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translate(0,0)";
    e.currentTarget.style.opacity   = "1";
  };

  return (
    <section id="hero" ref={sectionRef} style={{
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr auto",
      minHeight: "100vh",
      overflow: "hidden",
    }}>

      {/* ── Left ── */}
      <div className="hero-left" style={{
        gridColumn: 1, gridRow: 1,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "120px 52px 80px 64px",
        position: "relative", zIndex: 2,
      }}>

        {/* Vertical left-edge label */}
        <div className="hero-vert-label" style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 7, letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.1)",
          textTransform: "uppercase",
          userSelect: "none", pointerEvents: "none",
          fontFamily: "var(--font-inter), sans-serif",
        }}>
          Roy Alcantara · Batanes, PHL · 2023—
        </div>

        {/* Heading */}
        <h1 className="fade-up-2" style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "clamp(72px, 9.5vw, 128px)",
          fontWeight: 400, lineHeight: 0.88,
          marginBottom: 14, letterSpacing: "-0.03em", color: "#fff",
        }}>
          Hello,
        </h1>
        <h1 className="fade-up-3" style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "clamp(72px, 9.5vw, 128px)",
          fontWeight: 400, lineHeight: 0.88,
          marginBottom: 36, letterSpacing: "-0.03em",
          fontStyle: "italic", color: "rgba(255,255,255,0.22)",
        }}>
          World.
        </h1>

        {/* Geographic coordinates */}
        <div className="fade-up-35" style={{
          fontSize: 8, letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.18)",
          textTransform: "uppercase",
          marginBottom: 18,
          fontFamily: "var(--font-inter), sans-serif",
          lineHeight: 1.9,
        }}>
          20°28′N · 121°58′E<br/>
          <span style={{ color: "rgba(255,255,255,0.1)" }}>Batanes, Philippines</span>
        </div>

        <p className="fade-up-4" style={{
          fontSize: 13, color: "var(--muted2)",
          letterSpacing: "0.03em", marginBottom: 44,
          lineHeight: 1.8, maxWidth: 340,
        }}>
          I&apos;m Ryo — IT grad working at a local government agency in Batanes.
          I build web apps and tools.
        </p>

        {/* CTAs */}
        <div className="fade-up-5" style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <button
            onClick={() => snap("#works")}
            style={{
              background: "#fff", color: "#000",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600, fontSize: 11, letterSpacing: "0.1em",
              padding: "14px 32px", border: "none",
              cursor: "pointer", textTransform: "uppercase",
              transition: "opacity 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseMove={onMagnet}
            onMouseLeave={onMagnetLeave}
          >
            View Projects
          </button>
          <button
            onClick={() => snap("#about")}
            style={{
              background: "transparent", color: "var(--muted2)",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400, fontSize: 12, letterSpacing: "0.06em",
              padding: "14px 0", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 7,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted2)")}
          >
            My story
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="hero-stats" style={{
          position: "absolute", bottom: 56, left: 64,
          display: "flex", gap: 36, alignItems: "center",
        }}>
          {[
            { num: "2+",  label: "Yrs exp" },
            { num: "3+", label: "Developed" },
            { num: "1",  label: "Language saved" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: 18, color: "#fff", lineHeight: 1,
              }}>{s.num}</span>
              <span style={{
                fontSize: 9, color: "var(--muted)",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>{s.label}</span>
            </div>
          ))}
          <span className="scroll-bounce" style={{ display: "flex", marginLeft: 8, color: "var(--muted)" }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M7 1V13M7 13L2 8M7 13L12 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </span>
        </div>
      </div>

      {/* ── Right — full-bleed portrait ── */}
      <div className="hero-right" style={{
        gridColumn: 2, gridRow: 1,
        position: "relative",
        borderLeft: "1px solid var(--border)",
        overflow: "hidden",
        background: "#050505",
      }}>
        {/* Full-bleed portrait */}
        <div
          ref={parallaxRef}
          style={{
            position: "absolute",
            inset: "-24px",   /* overflow buffer for parallax movement */
            willChange: "transform",
          }}
        >
          <Image
            src="/portrait.webp"
            alt="Portrait"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 15%", filter: "grayscale(100%)" }}
            onError={e => {
              (e.target as HTMLImageElement).style.display = "none";
              const p = document.getElementById("hero-ph");
              if (p) p.style.display = "flex";
            }}
          />
          {/* Bottom fade */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "45%",
            background: "linear-gradient(to top, #000 0%, transparent 100%)",
            pointerEvents: "none", zIndex: 1,
          }}/>
          {/* Left edge fade to blend with left panel */}
          <div style={{
            position: "absolute", top: 0, left: 0, bottom: 0,
            width: "12%",
            background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 100%)",
            pointerEvents: "none", zIndex: 1,
          }}/>
        </div>

        {/* Fallback placeholder */}
        <div id="hero-ph" style={{
          display: "none", position: "absolute", inset: 0,
          alignItems: "center", justifyContent: "center",
          color: "var(--muted)", fontSize: 11, letterSpacing: "0.1em",
          textTransform: "uppercase", flexDirection: "column", gap: 8, zIndex: 2,
        }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ opacity: 0.2 }}>
            <circle cx="18" cy="14" r="5" stroke="#fff" strokeWidth="1.5"/>
            <path d="M6 30C6 24 11 20 18 20C25 20 30 24 30 30" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          portrait.webp
        </div>
      </div>

      {/* ── Marquee strip — spans both columns ── */}
      <div style={{
        gridColumn: "1 / -1", gridRow: 2,
        borderTop: "1px solid var(--border)",
        overflow: "hidden",
        height: 38,
        display: "flex",
        alignItems: "center",
        background: "#000",
        position: "relative",
        zIndex: 4,
      }}>
        <div style={{
          display: "flex",
          animation: "marquee 28s linear infinite",
          willChange: "transform",
        }}>
          {[0, 1].map(copy => (
            <div key={copy} style={{ display: "flex", flexShrink: 0 }}>
              {marqueeItems.map(item => (
                <span key={item} style={{
                  fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "var(--muted)", padding: "0 28px",
                  whiteSpace: "nowrap",
                }}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
