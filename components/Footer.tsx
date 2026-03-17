"use client";

const footerLinks = [
  { label: "Twitter",  href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub",   href: "#" },
];

export default function Footer() {
  return (
    <footer style={{
      padding: "28px 52px",
      borderTop: "1px solid var(--border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
      color: "var(--muted)",
      letterSpacing: "0.06em",
    }}>
      <span>© 2026 Ryo — All rights reserved</span>

      <div style={{ display: "flex", gap: 24 }}>
        {footerLinks.map(l => (
          <a
            key={l.label}
            href={l.href}
            style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--green)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            {l.label}
          </a>
        ))}
      </div>

      <span style={{ color: "var(--green)" }}>Available for freelance ✦</span>
    </footer>
  );
}
