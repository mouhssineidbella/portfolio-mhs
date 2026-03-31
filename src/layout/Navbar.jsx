import { Button } from "@/components/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 bg-[#0a0f16]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* ===================== PREMIUM LOGO SECTION ===================== */}
        <a href="#" className="flex items-center gap-3 group relative">
          
          {/* Glowing Background Effect */}
          <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Icon Container */}
          <div className="relative w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center overflow-hidden group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(32,178,166,0.3)] transition-all duration-300">
            
            {/* Minimalist Hexagon 'M' SVG */}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500 ease-out"
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
            <span className="text-xl font-black text-white tracking-tight leading-none group-hover:text-primary/90 transition-colors duration-300">
              MOUHSSINE<span className="text-primary">.ID</span>
            </span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase mt-0.5">
              Full Stack Dev
            </span>
          </div>
        </a>
        {/* ================================================================ */}

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="ml-2 relative overflow-hidden group">
            <span className="relative z-10 font-semibold tracking-wide">Let's Talk</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};