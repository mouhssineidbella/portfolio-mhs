import { useMemo } from "react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { SKILLS } from "@/data/skills";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/data/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Hero = () => {
  /* Stable dot positions — never recalculate on re-render */
  const dots = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: `${(i * 37 + 13) % 100}%`,
        top:  `${(i * 53 +  7) % 100}%`,
        dur:  `${16 + (i % 5) * 4}s`,
        del:  `${(i % 6) * 0.8}s`,
        size: i % 4 === 0 ? 2.5 : 1.5,
        opacity: i % 3 === 0 ? 0.5 : 0.3,
      })),
    []
  );

  const { ref: leftRef,    isVisible: leftVisible    } = useScrollReveal(0.05);
  const { ref: rightRef,   isVisible: rightVisible   } = useScrollReveal(0.05);
  const { ref: marqueeRef, isVisible: marqueeVisible } = useScrollReveal(0.05);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Atmospheric background photo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover opacity-[0.12]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/70 to-background" />
      </div>

      {/* ── Ambient gradient blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #2dd4bf, transparent 70%)" }} />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }} />
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #f2c811, transparent 70%)" }} />
      </div>

      {/* ── Floating micro dots ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {dots.map((d) => (
          <div
            key={d.id}
            className="absolute rounded-full"
            style={{
              width:  d.size,
              height: d.size,
              left:   d.left,
              top:    d.top,
              backgroundColor: "#2dd4bf",
              opacity: d.opacity,
              animation: `slow-drift ${d.dur} ease-in-out infinite`,
              animationDelay: d.del,
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ════ LEFT COLUMN ════ */}
          <div
            ref={leftRef}
            className={`space-y-8 reveal-hidden ${leftVisible ? "reveal-visible" : ""}`}
          >
            {/* Meta badges */}
            <div className="flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(45,212,191,0.08)",
                  border: "1px solid rgba(45,212,191,0.22)",
                  color: "#2dd4bf",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
                Full Stack Developer · React &amp; Laravel
              </span>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(242,200,17,0.07)",
                  border: "1px solid rgba(242,200,17,0.2)",
                  color: "#f2c811",
                }}
              >
                ⚡ Power Platform · Data Analytics
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight">
                <span className="text-foreground">Crafting </span>
                <span
                  className="gradient-text"
                  style={{ WebkitTextStroke: "0px" }}
                >
                  digital
                </span>
                <br />
                <span className="text-foreground">intelligence</span>
                <br />
                <span className="font-serif italic font-normal text-foreground/80 text-5xl md:text-6xl lg:text-7xl">
                  with precision.
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed pt-2">
                Hi, I'm{" "}
                <span className="text-foreground font-semibold">{SITE_CONFIG.name}</span>{" "}
                — an engineer who turns data into insight, and ideas into scalable
                full-stack products. Currently building enterprise systems at Yazaki.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-1">
              <a href="#contact">
                <Button size="lg">
                  Let's Connect <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </a>
              <a href={SITE_CONFIG.cvPath} download={SITE_CONFIG.cvFileName}>
                <AnimatedBorderButton>
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social + divider */}
            <div className="flex items-center gap-4 pt-1">
              <div className="h-px flex-1 max-w-[3rem] bg-border" />
              <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                Find me on
              </span>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} profile`}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(45,212,191,0.1)";
                    e.currentTarget.style.border = "1px solid rgba(45,212,191,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                  }}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ════ RIGHT COLUMN — Profile Image ════ */}
          <div
            ref={rightRef}
            className={`relative flex justify-center lg:justify-end reveal-hidden ${rightVisible ? "reveal-visible" : ""}`}
            style={{ transitionDelay: "120ms" }}
          >
            {/* Back-glow blur blob */}
            <div
              className="absolute inset-0 rounded-[40px] blur-[60px] opacity-40"
              style={{
                background:
                  "conic-gradient(from 0deg, #2dd4bf22, #8b5cf622, #f2c81122, #2dd4bf22)",
              }}
            />

            <div className="relative max-w-sm w-full">
              {/* Rotating gradient ring */}
              <div
                className="absolute -inset-[3px] rounded-[30px] animate-gradient z-0"
                style={{
                  background:
                    "linear-gradient(135deg, #2dd4bf, #8b5cf6, #f2c811, #2dd4bf)",
                  backgroundSize: "300% 300%",
                  opacity: 0.85,
                }}
              />

              {/* Card shell */}
              <div
                className="relative z-10 rounded-[28px] overflow-hidden"
                style={{
                  background: "#0d1525",
                  padding: "3px",
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(45,212,191,0.12)",
                }}
              >
                <div className="rounded-[26px] overflow-hidden">
                  <img
                    src="/mhs.jpeg"
                    alt={`${SITE_CONFIG.name} — Full Stack Developer`}
                    className="w-full aspect-[4/5] object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating badge — Available */}
              <div
                className="absolute -bottom-5 -right-4 animate-float glass rounded-2xl px-4 py-3 z-20"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">Available for work</span>
                </div>
              </div>

              {/* Floating badge — Projects count */}
              <div
                className="absolute -top-5 -left-4 animate-float animation-delay-500 glass rounded-2xl px-4 py-3 z-20"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <div
                  className="text-3xl font-black leading-none"
                  style={{ color: "#2dd4bf" }}
                  aria-label="10 or more projects"
                >
                  10+
                </div>
                <div className="text-[11px] text-muted-foreground font-semibold mt-0.5 uppercase tracking-wide">
                  Projects
                </div>
              </div>

              {/* Floating badge — Experience */}
              <div
                className="absolute top-1/2 -right-8 -translate-y-1/2 animate-float animation-delay-300 glass rounded-2xl px-4 py-3 z-20 hidden sm:block"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <div
                  className="text-3xl font-black leading-none"
                  style={{ color: "#f2c811" }}
                  aria-label="2 or more years experience"
                >
                  2+
                </div>
                <div className="text-[11px] text-muted-foreground font-semibold mt-0.5 uppercase tracking-wide">
                  Years exp.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════ SKILLS MARQUEE ════ */}
        <div
          ref={marqueeRef}
          className={`mt-24 reveal-hidden ${marqueeVisible ? "reveal-visible" : ""}`}
          style={{ transitionDelay: "240ms" }}
        >
          <p className="text-[10px] text-muted-foreground/60 mb-6 text-center uppercase tracking-[0.25em] font-semibold">
            Technologies &amp; Tools
          </p>
          <div className="relative overflow-hidden flex" aria-label="Tech skill tags" role="region">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" aria-hidden="true" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" aria-hidden="true" />

            <div className="flex animate-marquee gap-3 py-2 whitespace-nowrap">
              {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, idx) => (
                <span
                  key={idx}
                  className="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold cursor-default transition-all duration-300 group"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#64748b",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(45,212,191,0.08)";
                    e.currentTarget.style.border = "1px solid rgba(45,212,191,0.25)";
                    e.currentTarget.style.color = "#2dd4bf";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "#64748b";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};