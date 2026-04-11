/**
 * Logo.jsx — Shared brand mark used in Navbar and Footer.
 * The hexagon SVG represents the "M" monogram with a tech/data aesthetic.
 */
export const Logo = ({ size = "md" }) => {
  const sm = size === "sm";

  return (
    <a href="#" className="flex items-center gap-3 group relative">
      {/* Ambient glow on hover */}
      <div className="absolute -inset-3 bg-primary/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon shell */}
      <div
        className={`relative ${sm ? "w-9 h-9" : "w-10 h-10"} rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(45,212,191,0.35)]`}
        style={{
          background: "linear-gradient(135deg, rgba(45,212,191,0.12) 0%, rgba(139,91,246,0.08) 100%)",
          border: "1px solid rgba(45,212,191,0.2)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sm ? "w-5 h-5" : "w-5 h-5"} text-primary group-hover:scale-110 transition-transform duration-500 ease-out`}
          aria-hidden="true"
        >
          <path
            d="M12 2L2 7.8V16.2L12 22L22 16.2V7.8L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 15V9L12 13L17 9V15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand name */}
      <div className="flex flex-col leading-none">
        <span className={`${sm ? "text-[15px]" : "text-base"} font-black tracking-tight text-white group-hover:text-primary/90 transition-colors duration-300`}>
          MOUHSSINE<span className="text-primary">.ID</span>
        </span>
        <span className="text-[9px] text-muted-foreground font-semibold tracking-[0.18em] uppercase mt-0.5">
          Full Stack Dev
        </span>
      </div>
    </a>
  );
};
