import { useState } from "react";
import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/12DwruM4rHPmczHterJKL1ISVBcgsV-ZB/view?usp=sharing";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center w-full px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl md:text-2xl font-black tracking-tighter text-on-surface font-headline uppercase cursor-pointer"
        >
          BALAGANESH M.
        </button>

        {/* Desktop Menu - Show from lg (1024px) for better tablet experience */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "text-sm uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer text-on-surface-variant hover:text-on-surface",
              )}
            >
              {link.name}
            </button>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2 bg-primary text-on-primary font-bold tracking-widest rounded-lg hover:scale-95 active:scale-90 transition-transform uppercase text-xs flex items-center justify-center"
          >
            Resume
          </a>
        </div>

        {/* Mobile/Tablet Toggle - Show up to lg (1024px) */}
        <button
          className="lg:hidden p-2 text-on-surface"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-surface-container border-b border-outline-variant/10 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100 py-8" : "max-h-0 opacity-0 py-0",
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-base uppercase tracking-widest font-bold text-on-surface-variant hover:text-on-surface"
            >
              {link.name}
            </button>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 md:w-1/3 py-3 bg-primary text-on-primary font-bold tracking-widest rounded-lg uppercase text-xs flex items-center justify-center"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
