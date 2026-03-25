import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, MessageSquare, User, AtSign, Phone } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

export function Contact() {
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
    | string
    | undefined;
  const accessKeyMissing = !WEB3FORMS_ACCESS_KEY || !WEB3FORMS_ACCESS_KEY.trim();
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [successFading, setSuccessFading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const successFadeTimeoutRef = useRef<number | null>(null);
  const successHideTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (successFadeTimeoutRef.current) window.clearTimeout(successFadeTimeoutRef.current);
      if (successHideTimeoutRef.current) window.clearTimeout(successHideTimeoutRef.current);
    };
  }, []);

  const clearFormFields = (formEl: HTMLFormElement) => {
    const selectors = [
      'input[name="name"]',
      'input[name="email"]',
      'textarea[name="message"]',
      'textarea[name="h-captcha-response"]',
      'input[name="h-captcha-response"]',
    ];

    selectors.forEach((sel) => {
      const el = formEl.querySelector(sel) as HTMLInputElement | HTMLTextAreaElement | null;
      if (el) el.value = "";
    });
  };

  const refreshCaptcha = () => {
    // hCaptcha exposes a reset method on the global `hcaptcha` object.
    // Web3Forms loads it via `https://web3forms.com/client/script.js`.
    try {
      const w = window as unknown as { hcaptcha?: { reset?: () => void } };
      w.hcaptcha?.reset?.();
    } catch {
      // If reset isn't available for some reason, fallback to clearing values (already done).
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const formEl = e.currentTarget;
    setCaptchaError(null);
    setSuccessMessage(null);

    // Web3Forms' hCaptcha integration writes a value into this field.
    // If the user hasn't completed captcha yet, block submission.
    const captchaEl = formEl.querySelector(
      'textarea[name="h-captcha-response"], input[name="h-captcha-response"]',
    ) as HTMLTextAreaElement | HTMLInputElement | null;
    const captchaValue = captchaEl?.value?.trim() ?? "";

    if (accessKeyMissing) {
      setCaptchaError("Web3Forms access key missing. Set `VITE_WEB3FORMS_ACCESS_KEY` in your .env file.");
      e.preventDefault();
      return;
    }

    if (!captchaValue) {
      setCaptchaError("Please complete the captcha verification before sending.");
      e.preventDefault();
      return;
    }

    // Prevent normal form navigation/redirect; send via XHR instead.
    e.preventDefault();

    try {
      setSubmitting(true);
      const formData = new FormData(formEl);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data: { success?: boolean; message?: string } = await res
        .json()
        .catch(() => ({}));

      if (!res.ok || data.success !== true) {
        throw new Error(data.message || "Failed to send message.");
      }

      setSuccessMessage("Send successfully");
      setSuccessFading(false);
      clearFormFields(formEl);
      refreshCaptcha();

      if (successFadeTimeoutRef.current) window.clearTimeout(successFadeTimeoutRef.current);
      if (successHideTimeoutRef.current) window.clearTimeout(successHideTimeoutRef.current);
      // Fade starts at 3s, invisible at 4s (matches your requirement).
      successFadeTimeoutRef.current = window.setTimeout(() => {
        setSuccessFading(true);
      }, 3000);
      successHideTimeoutRef.current = window.setTimeout(() => {
        setSuccessMessage(null);
        setSuccessFading(false);
      }, 4000);
    } catch (err) {
      setCaptchaError(
        err instanceof Error ? err.message : "Failed to send message."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-24 md:pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto min-h-screen">
      <header className="mb-12 md:mb-20 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-surface-container-high text-primary text-[10px] font-bold tracking-[0.3em] uppercase border border-primary/20">
          Get In Touch
        </div>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-on-surface mb-8 leading-none uppercase">
          LET'S <span className="text-primary italic">CONNECT</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed">
          I'm always open to discussing new projects, backend architecture, or interesting collaborations.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-8 md:space-y-12">
          <div className="space-y-6 md:space-y-8">
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-6 text-center lg:text-left">Contact Information</h3>
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: Mail, label: "Email", value: "bala.ganesh@apzzo.com", href: "mailto:bala.ganesh@apzzo.com" },
                {
                  icon: Phone,
                  label: "Mobile",
                  value: "+916369706322",
                  href: "tel:+916369706322",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "www.linkedin.com/in/bala-ganesh-m3110",
                  href: "https://www.linkedin.com/in/bala-ganesh-m3110",
                }
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:bg-surface-container-high transition-all group"
                >
                  <div className="p-3 md:p-4 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-on-surface font-medium text-sm md:text-base break-all">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8 bg-tertiary/5 rounded-2xl border border-tertiary/10">
            <h4 className="font-headline text-lg font-bold text-on-surface mb-4">Availability</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              I'm currently based in <span className="text-tertiary font-bold">India</span> and available for remote opportunities or local collaborations. I typically respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          {accessKeyMissing ? (
            <div className="mb-6 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-200 text-sm">
              Web3Forms access key missing. Set `VITE_WEB3FORMS_ACCESS_KEY` in your <span className="font-mono">.env</span>.
            </div>
          ) : null}
          {successMessage ? (
            <div
              className={`mb-6 rounded-xl bg-green-500/10 border border-green-500/30 px-4 py-3 text-green-200 text-sm transition-opacity duration-1000 ${
                successFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {successMessage}
            </div>
          ) : null}
          {captchaError ? (
            <div className="mb-6 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-200 text-sm">
              {captchaError}
            </div>
          ) : null}

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-10 bg-surface-container-low rounded-3xl border border-outline-variant/10 space-y-6 md:space-y-8"
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="access_key"
              value={String(WEB3FORMS_ACCESS_KEY ?? "")}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1 flex items-center gap-2">
                  <User className="w-3 h-3" /> Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  name="name"
                  required
                  className="w-full px-6 py-4 bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl text-on-surface focus:outline-none focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1 flex items-center gap-2">
                  <AtSign className="w-3 h-3" /> Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  name="email"
                  required
                  className="w-full px-6 py-4 bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl text-on-surface focus:outline-none focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1 flex items-center gap-2">
                <MessageSquare className="w-3 h-3" /> Your Message
              </label>
              <textarea 
                rows={6}
                placeholder="Tell me about your project..."
                name="message"
                required
                className="w-full px-6 py-4 bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl text-on-surface focus:outline-none focus:border-primary transition-all resize-none"
              />
            </div>

            <div className="pt-2">
              <div className="h-captcha" data-captcha="true" />
            </div>

            <button
              type="submit"
              disabled={accessKeyMissing || submitting}
              className="w-full py-5 bg-primary text-on-primary font-headline font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>

      <script
        src="https://web3forms.com/client/script.js"
        async
        defer
      ></script>
    </main>
  );
}
