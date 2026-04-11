import { HIGHLIGHTS } from "@/data/about";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const About = () => {
  const { ref: textRef,  isVisible: textVisible  } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Ambient blob */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #2dd4bf, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ── Left: Text ── */}
          <div
            ref={textRef}
            className={`space-y-8 reveal-hidden ${textVisible ? "reveal-visible" : ""}`}
          >
            <div>
              <span className="section-label">About Me</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-5 mb-6 text-foreground leading-tight">
                Building solutions,
                <br />
                <span className="font-serif italic font-normal text-primary">
                  one line at a time.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-[15px] leading-relaxed">
              <p>
                I'm{" "}
                <span className="text-foreground font-semibold">Mouhssine Id-bella</span>,
                a dedicated Full Stack Developer based in Guelmim, Morocco. My
                journey is fueled by a commitment to technical excellence and a
                drive to build tools that solve real-world problems with
                measurable impact.
              </p>
              <p>
                Currently at{" "}
                <span className="text-foreground font-semibold">Yazaki Morocco</span>,
                I'm architecting a{" "}
                <span className="text-foreground font-semibold">
                  Digital Quality Scrap Management System
                </span>{" "}
                in React.js &amp; Laravel — eliminating manual paper-based
                processes and reducing data errors by&nbsp;
                <span className="text-primary font-bold">40%</span>.
              </p>
              <p>
                With a specialization in Digital Development from{" "}
                <span className="text-foreground font-semibold">ISTA NTIC Guelmim</span>,
                I focus on precise architecture, clean code, and user experiences
                that feel as good as they perform.
              </p>
            </div>

            {/* Quote block */}
            <blockquote
              className="relative pl-5 py-1"
              style={{ borderLeft: "2px solid rgba(45,212,191,0.5)" }}
            >
              <p className="text-base italic text-foreground/70 leading-relaxed">
                "My mission is to transform complex challenges into simple,
                functional, and elegant digital experiences that bring tangible
                value to businesses."
              </p>
            </blockquote>

            {/* Quick stats row */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { value: "10+", label: "Projects delivered" },
                { value: "2+",  label: "Years experience"   },
                { value: "40%", label: "Error reduction at Yazaki" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col px-5 py-3 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span className="text-2xl font-black text-primary leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Highlight Cards ── */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4 mt-2">
            {HIGHLIGHTS.map((item, idx) => (
              <div
                key={item.title}
                className={`group relative p-6 rounded-2xl transition-all duration-400 reveal-hidden ${
                  cardsVisible ? "reveal-visible" : ""
                }`}
                style={{
                  transitionDelay: `${idx * 70}ms`,
                  background: "rgba(13,21,37,0.7)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(45,212,191,0.2)";
                  e.currentTarget.style.background = "rgba(45,212,191,0.04)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
                  e.currentTarget.style.background = "rgba(13,21,37,0.7)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(45,212,191,0.1)",
                    border: "1px solid rgba(45,212,191,0.15)",
                  }}
                >
                  <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};