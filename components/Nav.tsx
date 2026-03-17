"use client";

const links = [
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav-enter" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "20px 52px",
      backdropFilter: "blur(16px)",
      background: "rgba(25,26,44,0.80)",
      borderBottom: "1px solid var(--border)",
    }}>
      {/* Logo */}
      <a href="#" style={{
        display: "flex", alignItems: "center", gap: 10,
        fontWeight: 600, fontSize: 15, letterSpacing: "0.04em",
        textDecoration: "none", color: "var(--text)",
      }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ color: "var(--green)" }}>
          <path d="M11 2L20 7V15L11 20L2 15V7L11 2Z" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="11" cy="11" r="3" fill="currentColor"/>
        </svg>
        Ryo
      </a>

      {/* Links */}
      <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={e => scrollTo(e, l.href)}
              style={{
                color: "var(--muted)", textDecoration: "none",
                fontSize: 14, letterSpacing: "0.03em",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        onClick={e => scrollTo(e, "#contact")}
        style={{
          display: "flex", alignItems: "center", gap: 6,
          fontSize: 13, color: "var(--green)",
          border: "1px solid rgba(140,201,160,0.35)",
          padding: "8px 18px", borderRadius: 4,
          letterSpacing: "0.04em", textDecoration: "none",
          transition: "background 0.2s, border-color 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "rgba(140,201,160,0.1)";
          e.currentTarget.style.borderColor = "var(--green)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "rgba(140,201,160,0.35)";
        }}
      >
        Book A Call
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </a>
    </nav>
  );
}
