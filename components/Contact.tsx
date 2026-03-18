"use client";
import { useRef, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    background: "#0f0f0f",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    fontSize: 13,
    borderRadius: 3,
    outline: "none",
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
        minHeight: "100vh",
      }}
    >
      {/* Left */}
      <div className="observe">
        <div className="section-tag">Get In Touch</div>
        <h2 style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 400, lineHeight: 1.05,
          letterSpacing: "-0.01em", color: "#fff",
        }}>
          Let&apos;s build<br />
          something<br />
          <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>remarkable.</em>
        </h2>
      </div>

      {/* Right — form */}
      <form className="observe" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Input type="text"  placeholder="Your name"     style={inputStyle} />
          <Input type="email" placeholder="Email address" style={inputStyle} />
        </div>
        <Input    type="text" placeholder="Subject"                   style={inputStyle} />
        <Textarea             placeholder="Tell me about your project…" rows={5}
          style={{ ...inputStyle, resize: "none" }}
        />
        <Button
          type="submit"
          style={{
            background: "#fff",
            color: "#000",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: "0.06em",
            padding: "13px 28px",
            height: "auto",
            borderRadius: 3,
            transition: "opacity 0.2s, transform 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity   = "0.88";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity   = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Send Message
        </Button>
      </form>
    </section>
  );
}
