import { ArrowUpRight, Lock, Eye } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Projects = () => {
  const { ref: hdrRef, isVisible: hdrVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full opacity-[0.04] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* ─── Section Header ─── */}
        <div
          ref={hdrRef}
          className={`max-w-2xl mx-auto text-center mb-20 reveal-hidden ${hdrVisible ? "reveal-visible" : ""}`}
        >
          <span className="section-label mb-4">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-5 text-foreground leading-tight">
            Practical{" "}
            <span className="font-serif italic font-normal gradient-text">
              Experience.
            </span>
          </h2>
          <p className="text-muted-foreground text-sm italic leading-relaxed">
            Several enterprise projects are protected under NDAs. Source code is
            private — impact metrics and architecture are shared where possible.
          </p>
        </div>

        {/* ─── Projects Grid ─── */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} delay={idx * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   ProjectCard — looks like a software widget
───────────────────────────────────────────── */
const ProjectCard = ({ project, delay }) => {
  const { ref, isVisible } = useScrollReveal();
  const isPrivate =
    project.status === "Private Code" || project.status === "Confidential";

  const statusColor = {
    "Private Code": { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.25)", text: "#8b5cf6" },
    "Private Repo":  { bg: "rgba(96,165,250,0.1)",  border: "rgba(96,165,250,0.25)",  text: "#60a5fa" },
    "Confidential":  { bg: "rgba(239,68,68,0.08)",  border: "rgba(239,68,68,0.22)",   text: "#f87171" },
    "Case Study":    { bg: "rgba(242,200,17,0.08)", border: "rgba(242,200,17,0.25)",  text: "#f2c811" },
    "Live":          { bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.25)",  text: "#2dd4bf" },
  };
  const sc = statusColor[project.status] ?? statusColor["Case Study"];

  return (
    <article
      ref={ref}
      className={`group relative flex flex-col rounded-3xl overflow-hidden card-hover reveal-hidden ${isVisible ? "reveal-visible" : ""}`}
      style={{
        transitionDelay: `${delay}ms`,
        background: "rgba(13,21,37,0.7)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* ── Image Section ── */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="w-full h-full object-cover transition-all duration-700 grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105"
          loading="lazy"
        />
        {/* Bottom-to-transparent gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(13,21,37,0.95) 100%)",
          }}
        />

        {/* Status badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
          style={{
            background: sc.bg,
            border: `1px solid ${sc.border}`,
            color: sc.text,
            backdropFilter: "blur(8px)",
          }}
        >
          {project.status}
        </div>

        {/* Category tag */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/50 border border-white/10 text-white/70 backdrop-blur-sm">
          {project.category}
        </div>
      </div>

      {/* ── Content Section ── */}
      <div className="flex flex-col flex-1 p-7">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-3 py-1 rounded-md font-bold uppercase tracking-wider transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#64748b",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(45,212,191,0.07)";
                e.currentTarget.style.border = "1px solid rgba(45,212,191,0.2)";
                e.currentTarget.style.color = "#2dd4bf";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "#64748b";
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Separator */}
        <div className="h-px mb-5" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Actions */}
        <div className="flex items-center gap-5">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Eye className="w-3.5 h-3.5" aria-hidden="true" />
              Live Preview
            </a>
          )}
          {isPrivate ? (
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground/40 cursor-not-allowed select-none">
              <Lock className="w-3.5 h-3.5" aria-hidden="true" />
              Private Repo
            </span>
          ) : (
            project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                GitHub
              </a>
            )
          )}

          {/* Decorative right-aligned tech accent */}
          <div className="ml-auto">
            <div
              className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "#2dd4bf", boxShadow: "0 0 8px #2dd4bf" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Hover — glowing left border accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(to bottom, #2dd4bf, #8b5cf6)",
          boxShadow: "0 0 12px rgba(45,212,191,0.5)",
        }}
        aria-hidden="true"
      />
    </article>
  );
};