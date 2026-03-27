"use client";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "About Me",   href: "#about"      },
  { label: "Portfolio",  href: "#works"       },
  { label: "Experience", href: "#experience"  },
  { label: "Contact",    href: "#cta"         },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const obsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      const hero       = document.getElementById("hero");
      const scrollRoot = document.getElementById("scroll-root");
      if (!hero || !scrollRoot) return;

      obsRef.current = new IntersectionObserver(
        ([entry]) => setHidden(!entry.isIntersecting),
        { root: scrollRoot, threshold: 0.1 }
      );
      obsRef.current.observe(hero);
    });

    return () => {
      cancelAnimationFrame(rafId);
      obsRef.current?.disconnect();
    };
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const root = document.getElementById("scroll-root");
    const target = root?.querySelector(href) as HTMLElement | null;
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <a
      href="/resume.pdf"
      download
      className="resume-strip"
      aria-label="Download Resume"
    >
      <span>RÉSUMÉ</span>
      <svg width="8" height="8" viewBox="0 0 11 11" fill="none" style={{ flexShrink: 0 }}>
        <path d="M5.5 1v7M2 5.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
    <nav
      className="nav-enter"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 64px",
        backdropFilter: "blur(20px)",
        background: "rgba(0,0,0,0.85)",
        borderBottom: "1px solid var(--border)",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Logo */}
      <a href="#hero" onClick={e => scrollTo(e, "#hero")} style={{
        display: "flex", alignItems: "center", gap: 10,
        fontWeight: 600, fontSize: 14, letterSpacing: "0.05em",
        textDecoration: "none", color: "#fff",
        fontFamily: "var(--font-inter), sans-serif",
      }}>
        <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
          <path d="M11 2L20 7V15L11 20L2 15V7L11 2Z" stroke="#fff" strokeWidth="1.5"/>
          <circle cx="11" cy="11" r="3" fill="#fff"/>
        </svg>
        Ryo
      </a>

      {/* Links */}
      <ul className="nav-links" style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={e => scrollTo(e, l.href)}
              style={{
                color: "var(--muted)", textDecoration: "none",
                fontSize: 13, letterSpacing: "0.03em",
                fontFamily: "var(--font-inter), sans-serif",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="mailto:royalcantara02@gmail.com"
        className="nav-cta"
        style={{
          display: "flex", alignItems: "center", gap: 6,
          fontSize: 12, color: "#fff", textDecoration: "none",
          fontFamily: "var(--font-inter), sans-serif",
          letterSpacing: "0.06em",
          border: "1px solid rgba(255,255,255,0.18)",
          padding: "8px 18px",
          transition: "background 0.2s, border-color 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; }}
      >
        Get In Touch
        <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
          <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </a>
    </nav>
    </>
  );
}
