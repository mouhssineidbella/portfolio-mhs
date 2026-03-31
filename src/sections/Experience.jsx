const experiences = [
  {
    period: "Nov. 2025 — Present",
    role: "Full Stack Developer Intern",
    company: "Yazaki Morocco",
    description:
      "Leading the development of a 'Digital Quality Scrap Management System'. Architecting the database and building RESTful APIs with Laravel while creating a dynamic frontend with React.js to optimize production quality tracking.",
    technologies: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
    current: true,
  },
  {
    period: "Jan. 2025 — Mar. 2025",
    role: "Web Development Intern",
    company: "Cour d'Appel de Guelmim",
    description:
      "Assisted in maintaining internal web applications, executing SQL queries, and performing functional tests to ensure the reliability of administrative digital tools.",
    technologies: ["PHP", "SQL", "JavaScript", "HTML/CSS"],
    current: false,
  },
  {
    period: "Jan. 2024 — Present",
    role: "Vice-Secretary General",
    company: "Association La Nouvelle Génération Sportive",
    description:
      "Managing administrative workflows, drafting activity reports, and coordinating large-scale sports events. Developing strong leadership and organizational skills.",
    technologies: ["Administration", "Leadership", "Event Coordination"],
    current: false, 
  },
  {
    period: "2023 — 2025",
    role: "Full Stack Specialization",
    company: "ISTA NTIC Guelmim",
    description:
      "Underwent rigorous technical training in modern web development, focusing on full-stack architectures, agile methodologies, and entrepreneurial innovation.",
    technologies: ["React.js", "Laravel", "Agile", "Entrepreneurship"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-primary text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-white"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-primary">
              {" "}
              builds expertise.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from technical training at ISTA to 
            implementing complex digital solutions in industrial and administrative environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line with glow */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_15px_rgba(32,178,166,0.5)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 group"
                  >
                    <span className="text-sm text-primary font-medium tracking-widest">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 text-white group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies?.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-white/5 border border-white/5 text-[10px] uppercase font-bold rounded-md text-primary tracking-tighter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};