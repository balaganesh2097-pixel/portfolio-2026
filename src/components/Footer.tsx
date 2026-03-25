import { Instagram, Linkedin, MessageCircle, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div>
          <span className="text-on-surface font-bold font-headline uppercase tracking-tighter">
            BALAGANESH M. PORTFOLIO
          </span>
          <p className="uppercase tracking-widest text-[10px] text-on-surface-variant mt-2">
            © 2026 ALL RIGHTS RESERVED
          </p>
        </div>
        <div className="flex gap-8">
          {[
            {
              href: "https://www.linkedin.com/in/bala-ganesh-m3110/",
              label: "LinkedIn",
              Icon: Linkedin,
              iconClassName: "text-primary",
            },
            {
              href: "https://wa.me/916369706322",
              label: "WhatsApp",
              Icon: MessageCircle,
              iconClassName: "text-green-500",
            },
            {
              href: "https://www.instagram.com/the_0ne_bala?igsh=MTF2dTlwaDAya29mdA==",
              label: "Instagram",
              Icon: Instagram,
              iconClassName: "text-pink-500",
            },
            {
              href: "https://t.me/+916369706322",
              label: "Telegram",
              Icon: Send,
              iconClassName: "text-sky-400",
            },
          ].map(({ label, href, Icon, iconClassName }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <Icon className={`w-5 h-5 ${iconClassName}`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
