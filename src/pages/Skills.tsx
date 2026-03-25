import { motion } from "motion/react";
import { Terminal, Database, Cloud, Code, Layout, Cpu, Shield, Settings } from "lucide-react";
import { cn } from "@/src/lib/utils";

const SKILL_GROUPS = [
  {
    title: "Core Backend",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "TypeScript", "Javascript"],
    color: "bg-primary",
  },
  {
    title: "Database Systems",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "ORM"],
    color: "bg-tertiary",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS EC2/S3/RDS", "Nginx", "MongoDB Atlas", "Railway"],
    color: "bg-primary",
  },
  {
    title: "API & Architecture",
    icon: Cpu,
    skills: ["RESTful APIs", "Microservices", "MVC Design", "WebSockets"],
    color: "bg-tertiary",
  },
  {
    title: "Security & Auth",
    icon: Shield,
    skills: ["JWT", "OAuth 2.0", "CORS Policy", "Data Encryption"],
    color: "bg-primary",
  },
  {
    title: "Third Party Integration",
    icon: Layout,
    skills: ["Payment Gateways", "Email/SMS Services", "Inventory Management", "AI Integration"],
    color: "bg-tertiary",
  },
];

export function Skills() {
  return (
    <main className="pt-24 md:pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      <header className="mb-12 md:mb-20 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-surface-container-high text-primary text-[10px] font-bold tracking-[0.3em] uppercase border border-primary/20">
          Technical Arsenal
        </div>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-on-surface mb-8 leading-none uppercase">
          SKILLS & <span className="text-tertiary">STACK</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed">
          A comprehensive overview of my technical proficiencies, specialized in building robust backend architectures and high-performance systems.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div 
            key={group.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-8 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:bg-surface-container-high transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={cn("p-4 rounded-xl text-on-primary shadow-lg", group.color)}>
                <group.icon className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">{group.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {group.skills.map(skill => (
                <span key={skill} className="px-4 py-2 bg-surface-container-highest/50 text-on-surface text-xs font-bold rounded-lg border border-outline-variant/10 group-hover:border-primary/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy Section */}
      <section className="mt-32 p-12 bg-surface-container-lowest rounded-3xl border border-outline-variant/10 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Settings className="w-64 h-64 animate-spin-slow" />
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-8">Build Principles</h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p className="text-lg">
              I believe that <span className="text-primary font-bold italic">great code is invisible</span>. My focus is on creating systems that are not just functional, but maintainable, scalable, and secure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="font-bold text-on-surface mb-2 uppercase tracking-widest text-xs">Performance First</h4>
                <p className="text-sm">Optimizing every millisecond of latency through efficient database indexing and caching strategies.</p>
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-2 uppercase tracking-widest text-xs">Security by Design</h4>
                <p className="text-sm">Implementing robust authentication and authorization layers at every entry point of the application.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
