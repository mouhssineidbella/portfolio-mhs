import { EXPERIENCES } from "@/data/experience";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Experience = () => {
  const { ref: hdrRef, isVisible: hdrVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Ambient blob */}
      <div
        className="absolute top-1/3 left-[-8%] w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div
          ref={hdrRef}
          className={`max-w-2xl mb-20 reveal-hidden ${hdrVisible ? "reveal-visible" : ""}`}
        >
          <span className="section-label">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-5 mb-5 text-foreground leading-tight">
            Experience that{" "}
            <span className="font-serif italic font-normal text-primary">
              builds expertise.
            </span>
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            From technical formation at ISTA to leading complex digital
            transformations in industrial and public-sector environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Glowing vertical track */}
          <div
            className="absolute left-5 top-0 bottom-0 w-[2px] timeline-glow"
            style={{
              background:
                "linear-gradient(to bottom, #2dd4bf, rgba(45,212,191,0.3), transparent)",
            }}
            aria-hidden="true"
          />

          <ol className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <ExperienceItem key={`${exp.company}-${exp.period}`} exp={exp} idx={idx} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

/* ─── Single Timeline Card ─── */
const ExperienceItem = ({ exp, idx }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <li
      ref={ref}
      className={`relative pl-16 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-[14px] top-7 w-3 h-3 rounded-full -translate-x-1/2 z-10 ring-4"
        style={{
          background: exp.current ? "#2dd4bf" : "#1a2a42",
          border: `2px solid ${exp.current ? "#2dd4bf" : "#2a3a55"}`,
          ringColor: "#070c14",
          boxShadow: exp.current ? "0 0 12px rgba(45,212,191,0.7)" : "none",
        }}
        aria-hidden="true"
      >
        {exp.current && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-60"
            style={{ background: "#2dd4bf" }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="group relative p-6 rounded-2xl transition-all duration-400"
        style={{
          background: "rgba(13,21,37,0.7)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(12px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = "1px solid rgba(45,212,191,0.2)";
          e.currentTarget.style.transform = "translateX(4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
          e.currentTarget.style.transform = "translateX(0)";
        }}
      >
        {/* Thin top accent line */}
        <div
          className="absolute top-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: "linear-gradient(90deg, transparent, #2dd4bf, transparent)" }}
          aria-hidden="true"
        />

        <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "#2dd4bf" }}
          >
            {exp.period}
          </span>
          {exp.current && (
            <span
              className="text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider"
              style={{
                background: "rgba(45,212,191,0.1)",
                border: "1px solid rgba(45,212,191,0.3)",
                color: "#2dd4bf",
              }}
            >
              Current
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-foreground mb-0.5 transition-colors duration-300 group-hover:text-primary">
          {exp.role}
        </h3>
        <p className="text-sm font-semibold text-muted-foreground mb-4">
          {exp.company}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {exp.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies?.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-3 py-1 rounded-md font-bold uppercase tracking-wider"
              style={{
                background: "rgba(45,212,191,0.06)",
                border: "1px solid rgba(45,212,191,0.15)",
                color: "#2dd4bf",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};