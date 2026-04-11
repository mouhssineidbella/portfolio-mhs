import { Logo } from "@/components/Logo";
import { SOCIAL_LINKS, NAV_LINKS, SITE_CONFIG } from "@/data/siteConfig";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Very subtle top glow line */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #2dd4bf, transparent)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo size="sm" />
            <p className="text-xs text-muted-foreground">
              © {year} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${s.label} profile`}
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
                <s.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom credit */}
        <p className="text-center text-[10px] text-muted-foreground/40 mt-8 tracking-wider">
          Designed &amp; built with React · Tailwind CSS · Vite
        </p>
      </div>
    </footer>
  );
};