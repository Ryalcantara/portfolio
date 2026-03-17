"use client";
import { useRef, useEffect, FormEvent } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.1 });

    ref.current?.querySelectorAll<HTMLElement>(".observe").forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = `opacity 0.55s ease ${i * 0.12}s, transform 0.55s ease ${i * 0.12}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent) => e.preventDefault();

  const inputStyle: React.CSSProperties = {
    background: "var(--bg2)",
    border: "1px solid var(--border)",
    borderRadius: 4,
    padding: "13px 16px",
    color: "var(--text)",
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: 13,
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "100px 52px",
        borderTop: "1px solid var(--border)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
      }}
    >
      {/* Left */}
      <div className="observe">
        <div className="section-tag">Get In Touch</div>
        <h2 style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 400, lineHeight: 1.05,
          letterSpacing: "-0.01em",
        }}>
          Let&apos;s build<br />
          something<br />
          <em style={{ fontStyle: "italic", color: "var(--green)" }}>remarkable.</em>
        </h2>
      </div>

      {/* Right — form */}
      <form className="observe" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <input
            type="text"
            placeholder="Your name"
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = "rgba(140,201,160,0.5)")}
            onBlur={e => (e.target.style.borderColor = "var(--border)")}
          />
          <input
            type="email"
            placeholder="Email address"
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = "rgba(140,201,160,0.5)")}
            onBlur={e => (e.target.style.borderColor = "var(--border)")}
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          style={inputStyle}
          onFocus={e => (e.target.style.borderColor = "rgba(140,201,160,0.5)")}
          onBlur={e => (e.target.style.borderColor = "var(--border)")}
        />
        <textarea
          placeholder="Tell me about your project…"
          style={{ ...inputStyle, height: 110, resize: "none" }}
          onFocus={e => (e.target.style.borderColor = "rgba(140,201,160,0.5)")}
          onBlur={e => (e.target.style.borderColor = "var(--border)")}
        />
        <button
          type="submit"
          style={{
            background: "var(--green)",
            color: "#191A2C",
            fontWeight: 600, fontSize: 13,
            letterSpacing: "0.06em",
            padding: "13px 28px",
            border: "none", borderRadius: 4,
            cursor: "pointer",
            transition: "opacity 0.2s",
            fontFamily: "var(--font-inter), sans-serif",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
