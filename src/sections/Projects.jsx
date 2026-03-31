import { ArrowUpRight, Lock, Eye } from "lucide-react";

const projects = [
  {
    title: "Digital Quality Scrap Management",
    category: "Enterprise Project (Yazaki)",
    description:
      "Automated the tracking of manufacturing defects and scrap data. This system replaced manual paper-based logs, reducing data entry errors by 40% and providing real-time quality analytics for production managers.",
    image: "/phd.avif", 
    tags: ["React.js", "Laravel", "Industrial IoT", "MySQL"],
    status: "Private Code",
  },
  {
    title: "ECO-STORE",
    category: "Full Stack E-Commerce",
    description:
      "A custom-built e-commerce solution featuring a dynamic product catalog, secure user authentication, and a robust shopping cart system. Integrated with a custom dashboard for inventory and order management.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800", // Image nqiya dyal store
    tags: ["React.js", "Laravel", "MySQL", "REST API"],
    status: "Private Repo",
  },
  {
    title: "Legal Case Tracking System",
    category: "Public Sector (Court of Appeal)",
    description:
      "Developed a secure web portal for tracking legal proceedings. Designed to manage sensitive case files and hearing schedules, improving coordination between administrative departments.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800", // Tswira Abstract dyal Legal Case
    tags: ["PHP", "SQL", "Security", "Case Management"],
    status: "Confidential",
  },
  {
    title: "Hopital Molière Longchamp - Equipment Management",
    category: "Full Stack Medical SaaS",
    description:
      "A comprehensive digital platform for the efficient management of medical equipment. Features role-based dashboards for Engineers, Doctors, and Technicians to handle maintenance requests, generate receiving reports (PV), and perform checklist inspections.",
    image: "/public/home.png", // Ghadi tqad mockup frames wsstha tsawer dyalk w tsmmiha hakka f public/projects/
    tags: ["React.js", "PHP/Laravel", "MySQL", "UI/UX Design", "Medical IT"],
    link: "#", // Ila kant 3ndk chi demo link 7ettou hna
    github: "https://github.com/mouhssine-idbella", // Khli link l'profile dyalk
    status: "Case Study",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Practical <span className="font-serif italic font-normal text-primary text-white">Experience.</span>
          </h2>
          <p className="text-muted-foreground italic">
            Note: Some enterprise projects are under non-disclosure agreements (NDA); 
            source code is private to protect company data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500">
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] text-white font-semibold uppercase tracking-widest">
                  {project.status}
                </div>
              </div>

              <div className="p-8">
                <p className="text-primary text-xs font-bold mb-2 uppercase tracking-widest">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-3 py-1 bg-white/5 rounded-md border border-white/5 text-muted-foreground uppercase font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors">
                      <Eye className="w-4 h-4" /> LIVE PREVIEW
                    </a>
                  )}
                  {project.status === "Private Code" || project.status === "Confidential" ? (
                    <span className="flex items-center gap-2 text-xs font-bold text-muted-foreground/50 cursor-not-allowed">
                      <Lock className="w-4 h-4" /> PRIVATE REPO
                    </span>
                  ) : (
                    project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors">
                        <ArrowUpRight className="w-4 h-4" /> GITHUB
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};