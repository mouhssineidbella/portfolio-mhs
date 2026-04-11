import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_INFO, SITE_CONFIG } from "@/data/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MAX_CHARS = 1000;

export const Contact = () => {
  const [form,     setForm]     = useState({ name: "", email: "", message: "" });
  const [loading,  setLoading]  = useState(false);
  const [status,   setStatus]   = useState({ type: null, message: "" });

  const { ref: hdrRef,  isVisible: hdrVisible  } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible  } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible  } = useScrollReveal();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_CHARS) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not configured.");
      }

      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        reply_to:  form.email,
        message:   form.message,
      }, publicKey);

      setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        message: err.text || "Failed to send. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  const charsLeft = MAX_CHARS - form.message.length;

  /* ── Shared input style ── */
  const inputCls =
    "w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/40 outline-none " +
    "transition-all duration-300 disabled:opacity-50";
  const inputStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.09)",
  };
  const inputFocusHandlers = {
    onFocus: (e) => {
      e.target.style.border = "1px solid rgba(45,212,191,0.4)";
      e.target.style.boxShadow = "0 0 0 3px rgba(45,212,191,0.08)";
    },
    onBlur: (e) => {
      e.target.style.border = "1px solid rgba(255,255,255,0.09)";
      e.target.style.boxShadow = "none";
    },
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Ambient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #2dd4bf, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #f2c811, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={hdrRef}
          className={`text-center max-w-2xl mx-auto mb-20 reveal-hidden ${hdrVisible ? "reveal-visible" : ""}`}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-5 mb-5 text-foreground leading-tight">
            Let's build{" "}
            <span className="font-serif italic font-normal gradient-text">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            Have a project in mind or a developer position to fill? I'd love to
            hear from you. Send a message and let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* ── Contact Form (3/5) ── */}
          <div
            ref={formRef}
            className={`lg:col-span-3 reveal-hidden ${formVisible ? "reveal-visible" : ""}`}
          >
            <div
              className="p-8 rounded-3xl"
              style={{
                background: "rgba(13,21,37,0.7)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
              }}
            >
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name" name="name" type="text" required minLength={2}
                    placeholder="Your full name"
                    value={form.name} onChange={handleChange} disabled={loading}
                    className={inputCls} style={inputStyle}
                    {...inputFocusHandlers}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email" name="email" type="email" required
                    placeholder="your@email.com"
                    value={form.email} onChange={handleChange} disabled={loading}
                    className={inputCls} style={inputStyle}
                    {...inputFocusHandlers}
                  />
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <span
                      className="text-[11px] tabular-nums font-medium transition-colors"
                      aria-live="polite"
                      style={{ color: charsLeft < 100 ? "#f2c811" : "#64748b" }}
                    >
                      {charsLeft}/{MAX_CHARS}
                    </span>
                  </div>
                  <textarea
                    id="contact-message" name="message" rows={5} required minLength={20}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message} onChange={handleChange} disabled={loading}
                    className={`${inputCls} resize-none`} style={inputStyle}
                    {...inputFocusHandlers}
                  />
                </div>

                {/* Status alert */}
                {status.type && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 p-4 rounded-xl text-sm"
                    style={{
                      background: status.type === "success"
                        ? "rgba(45,212,191,0.08)"
                        : "rgba(239,68,68,0.08)",
                      border: status.type === "success"
                        ? "1px solid rgba(45,212,191,0.25)"
                        : "1px solid rgba(239,68,68,0.25)",
                      color: status.type === "success" ? "#2dd4bf" : "#f87171",
                    }}
                  >
                    {status.type === "success"
                      ? <CheckCircle className="w-4 h-4 flex-shrink-0 mt-px" aria-hidden="true" />
                      : <AlertCircle className="w-4 h-4 flex-shrink-0 mt-px" aria-hidden="true" />
                    }
                    <p>{status.message}</p>
                  </div>
                )}

                {/* Submit */}
                <Button type="submit" size="lg" className="w-full" disabled={loading} aria-busy={loading}>
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* ── Info Column (2/5) ── */}
          <div
            ref={infoRef}
            className={`lg:col-span-2 flex flex-col gap-5 reveal-hidden ${infoVisible ? "reveal-visible" : ""}`}
            style={{ transitionDelay: "120ms" }}
          >
            {/* Contact items */}
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group"
                style={{
                  background: "rgba(13,21,37,0.7)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(45,212,191,0.22)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(45,212,191,0.1)",
                    border: "1px solid rgba(45,212,191,0.18)",
                  }}
                >
                  <item.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Availability card */}
            <div
              className="relative p-6 rounded-2xl overflow-hidden group flex-1 flex flex-col justify-center"
              style={{
                background: "rgba(13,21,37,0.7)",
                border: "1px solid rgba(45,212,191,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
                style={{ background: "radial-gradient(circle at 50% 0%, #2dd4bf, transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-sm font-bold text-foreground">Currently Available</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Open to full-time positions, freelance projects, and consulting
                  opportunities in Full Stack or Power Platform development.
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};