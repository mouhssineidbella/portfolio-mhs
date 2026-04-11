/**
 * projects.js — All portfolio project data.
 * Add or update projects here without touching any UI component.
 *
 * status values: "Private Code" | "Private Repo" | "Confidential" | "Case Study" | "Live"
 */

export const PROJECTS = [
  {
    title: "Digital Quality Scrap Management",
    category: "Enterprise Project (Yazaki)",
    description:
      "Identified a critical bottleneck in Yazaki's production line where manual paper-based scrap logging caused reporting delays and data inconsistencies. Architected and delivered a full-stack system that automated defect tracking in real-time, reducing manual data entry errors by 40% and enabling production managers to access live quality analytics — a task that previously took hours now done in seconds.",
    image: "/phd.avif",
    tags: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
    status: "Private Code",
    github: null,
    link: null,
  },
  {
    title: "ECO-STORE",
    category: "Full Stack E-Commerce",
    description:
      "Built a complete e-commerce platform from the ground up, including a dynamic product catalog, secure JWT-based user authentication, a persistent shopping cart, and a custom admin dashboard for real-time inventory and order management — delivering a production-ready alternative to costly SaaS platforms.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    tags: ["React.js", "Laravel", "MySQL", "REST API"],
    status: "Private Repo",
    github: null,
    link: null,
  },
  {
    title: "Legal Case Tracking System",
    category: "Public Sector (Court of Appeal)",
    description:
      "Developed a secure web portal for the Cour d'Appel de Guelmim to digitize previously paper-based case file management. The system streamlines hearing schedule coordination between departments, improves data retrieval speed, and reduces administrative overhead — directly improving the court's operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    tags: ["PHP", "SQL", "JavaScript", "Security"],
    status: "Confidential",
    github: null,
    link: null,
  },
  {
    title: "Hôpital Molière Longchamp — Equipment Management",
    category: "Full Stack Medical SaaS",
    description:
      "Engineered a comprehensive digital platform solving equipment lifecycle chaos in a hospital environment. Implemented role-based dashboards for Engineers, Doctors, and Technicians — enabling streamlined maintenance requests, automated PV (receiving report) generation, and digital checklist inspections, replacing a fully manual process.",
    image: "/home.png",
    tags: ["React.js", "Laravel", "MySQL", "UI/UX Design", "Medical IT"],
    status: "Case Study",
    github: "https://github.com/mouhssineidbella",
    link: null,
  },
];
