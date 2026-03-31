import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/mouhssineidbella", label: "GitHub" }, // Tqder tbeddel had lien ila 3ndk github akhor
  { icon: Linkedin, href: "https://www.linkedin.com/in/idbella-mouhssine/", label: "LinkedIn" }, 
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0f16]/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* ===================== LOGO & COPYRIGHT SECTION ===================== */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center gap-3 group relative mb-4">
              {/* Glowing Background Effect */}
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Container */}
              <div className="relative w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center overflow-hidden group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(32,178,166,0.3)] transition-all duration-300">
                {/* Minimalist Hexagon 'M' SVG */}
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-500 ease-out"
                >
                  {/* Outer Hexagon */}
                  <path 
                    d="M12 2L2 7.8V16.2L12 22L22 16.2V7.8L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  {/* Inner 'M' */}
                  <path 
                    d="M7 15V9L12 13L17 9V15" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Typography */}
              <div className="flex flex-col justify-center">
                <span className="text-lg font-black text-white tracking-tight leading-none group-hover:text-primary/90 transition-colors duration-300">
                  MOUHSSINE<span className="text-primary">.ID</span>
                </span>
                <span className="text-[9px] text-muted-foreground font-medium tracking-widest uppercase mt-0.5">
                  Full Stack Dev
                </span>
              </div>
            </a>
            
            <p className="text-sm text-muted-foreground">
              © {currentYear} Id-bella Mouhssine. All rights reserved.
            </p>
          </div>
          {/* ==================================================================== */}

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-primary/10 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};