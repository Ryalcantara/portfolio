"use client";

const navLinks = [
  { label: "Home",       href: "#hero"       },
  { label: "About Me",   href: "#about"      },
  { label: "Portfolio",  href: "#works"      },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#cta"        },
];

const socials = [
  {
    label: "X",
    href: "https://x.com/Ryo___al",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Ryalcantara",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/roy-alcantara-5a80a9193/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const root = document.getElementById("scroll-root");
    const target = root?.querySelector(href) as HTMLElement | null;
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      background: "#000",
      borderTop: "1px solid var(--border)",
      minHeight: "42vh",
      display: "flex", flexDirection: "column",
      justifyContent: "space-between",
      padding: "48px 64px 36px",
    }}>
      {/* Top row — nav */}
      <div style={{ display: "flex", justifyContent: "center", gap: 36 }}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={e => scrollTo(e, l.href)} style={{
            color: "var(--muted)", textDecoration: "none",
            fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Big email */}
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontSize: 10, color: "var(--muted)", letterSpacing: "0.16em",
          textTransform: "uppercase", marginBottom: 12,
        }}>
          From Batanes — open to the world
        </div>
        <a
          href="mailto:royalcantara02@gmail.com"
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(22px, 3.5vw, 46px)",
            fontWeight: 400, color: "#fff",
            textDecoration: "none", letterSpacing: "-0.01em",
            transition: "opacity 0.2s",
            display: "inline-block",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          royalcantara02@gmail.com
        </a>
      </div>

      {/* Bottom row */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 11, color: "var(--muted)", letterSpacing: "0.07em",
        borderTop: "1px solid var(--border)", paddingTop: 22,
      }}>
        <span>© 2026 Ryo · Batanes, PH</span>

        {/* Socials with icons */}
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{
                color: "var(--muted)", textDecoration: "none",
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 11, letterSpacing: "0.06em",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>

        <span>Available for remote work ✦</span>
      </div>
    </footer>
  );
}
