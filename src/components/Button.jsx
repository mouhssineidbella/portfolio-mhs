/**
 * Button.jsx — Premium CTA button.
 * variant="primary" → teal fill with glow shadow
 * variant="ghost"   → transparent with border (for secondary CTAs)
 */
export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  ...props
}) => {
  const base =
    "relative inline-flex items-center justify-center rounded-full font-semibold " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
    "transition-all duration-300 active:scale-[0.97] " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90 " +
      "shadow-[0_0_24px_rgba(45,212,191,0.3),0_4px_16px_rgba(0,0,0,0.3)] " +
      "hover:shadow-[0_0_36px_rgba(45,212,191,0.45),0_6px_20px_rgba(0,0,0,0.4)]",
    ghost:
      "bg-transparent border border-border text-foreground " +
      "hover:border-primary/40 hover:bg-primary/5 hover:text-primary",
  };

  const sizes = {
    sm:      "px-5 py-2 text-sm gap-1.5",
    default: "px-6 py-2.5 text-sm gap-2",
    lg:      "px-8 py-3.5 text-base gap-2",
  };

  return (
    <button
      className={`${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
