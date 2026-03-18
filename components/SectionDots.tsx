"use client";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero",       label: "Home"       },
  { id: "about",      label: "About"      },
  { id: "experience", label: "Experience" },
  { id: "works",      label: "Portfolio"  },
  { id: "cta",        label: "Contact"    },
];

export default function SectionDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const root = document.getElementById("scroll-root");
    if (!root) return;

    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { root, threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "fixed", right: 28, top: "50%",
        transform: "translateY(-50%)",
        zIndex: 200,
        display: "flex", flexDirection: "column", gap: 9,
        alignItems: "flex-end",
      }}
    >
      {sections.map(s => (
        <button
          key={s.id}
          title={s.label}
          onClick={() => scrollTo(s.id)}
          style={{
            width: active === s.id ? 22 : 4,
            height: 4,
            borderRadius: 2,
            border: "none", padding: 0,
            background: active === s.id
              ? "rgba(255,255,255,0.9)"
              : "rgba(255,255,255,0.2)",
            cursor: "pointer",
            transition: "width 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s",
          }}
        />
      ))}
    </div>
  );
}
