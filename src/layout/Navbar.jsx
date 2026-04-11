import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAV_LINKS } from "@/data/siteConfig";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [progress, setProgress]     = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 24);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/92 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-background/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* ─── Scroll Progress ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-border/40 overflow-hidden">
        <div
          className="h-full transition-[width] duration-75 ease-linear"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #2dd4bf, #8b5cf6)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Logo size="md" />

        {/* ─── Desktop Nav ─── */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-white/[0.04] group"
            >
              {link.label}
              {/* Underline that grows on hover */}
              <span className="absolute bottom-1.5 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </a>
          ))}
        </div>

        {/* ─── Desktop CTA ─── */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-primary-foreground transition-all duration-300 active:scale-95"
            style={{
              background: "#2dd4bf",
              boxShadow: "0 0 20px rgba(45,212,191,0.3), 0 4px 14px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 32px rgba(45,212,191,0.5), 0 6px 20px rgba(0,0,0,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 20px rgba(45,212,191,0.3), 0 4px 14px rgba(0,0,0,0.3)")
            }
          >
            Let's Talk
          </a>
        </div>

        {/* ─── Mobile Hamburger ─── */}
        <button
          className="md:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/[0.05] transition-colors"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ─── Mobile Dropdown ─── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-350 ease-in-out border-t ${
          mobileOpen
            ? "max-h-80 opacity-100 border-white/[0.06]"
            : "max-h-0 opacity-0 border-transparent"
        } bg-[#070c14]/98 backdrop-blur-2xl`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={close}
              className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-center text-primary-foreground"
            style={{ background: "#2dd4bf" }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};