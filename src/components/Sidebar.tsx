import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

const SOCIAL_LINKS = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:bala.ganesh@apzzo.com" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/916369706322" },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 rounded-r-xl w-16 hover:w-48 transition-all duration-300 group bg-surface-container shadow-[4px_0_24px_rgba(0,0,0,0.5)] z-40 hidden md:flex flex-col items-center py-8 gap-6 overflow-hidden">
      <div className="flex flex-col items-center gap-8 w-full">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              "flex items-center w-full px-5 gap-4 text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer py-2",
            )}
          >
            <link.icon className="w-5 h-5 shrink-0" />
            <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap font-medium text-sm transition-opacity duration-300">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}

