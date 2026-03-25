import { motion } from "motion/react";
import { Terminal, Server, Cloud, Brain, Verified, Users } from "lucide-react";
import { cn } from "@/src/lib/utils";

const EXPERIENCE = [
  {
    title: "Backend Developer",
    company: "Apzzo Technologies PVT limited",
    period: "MAR 2024 — PRESENT",
    achievements: [
      {
        icon: Terminal,
        title: "Node.js / Express.js",
        desc: "Architecting production-grade services with strict type safety.",
      },
      {
        icon: Server,
        title: "RESTful Architecture",
        desc: "Designing robust, scalable APIs following strict MVC design patterns.",
      },
      {
        icon: Cloud,
        title: "AWS Deployments",
        desc: "Managing cloud infrastructure and containerized deployments.",
      },
      {
        icon: Brain,
        title: "AI-Assisted Dev",
        desc: "Integrating intelligent tools into the backend development lifecycle.",
      },
    ],
    deepDive: "At Apzzo, I specialize in evolving complex backend systems from monoliths to streamlined services. My day-to-day involves optimizing database queries, implementing secure authentication flows, and ensuring that our Node.js ecosystem is both maintainable and high-performing.",
    tags: ["Node.js", "Express.js", "TypeScript", "Javascript", "PostgreSQL", "MongoDB", "ORM", "AWS Cloud", "Redis"],
  },
];

export function Experience() {
  return (
    <main className="pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-12 md:mb-20 text-center lg:text-left">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-on-surface tracking-tighter leading-none mb-4 uppercase">
          EXPERIENCE
        </h1>
        <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Building scalable digital backbones and architectural foundations with precision and modern engineering patterns.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16 relative">
          <div className="absolute left-0 top-4 bottom-4 w-px bg-outline-variant/30 hidden md:block" />
          
          {EXPERIENCE.map((role, idx) => (
            <motion.div 
              key={role.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative md:pl-12"
            >
              <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-tertiary shadow-[0_0_12px_#3cddc7] hidden md:block" />
              <div className="bg-surface-container rounded-xl p-8 transition-all hover:bg-surface-container-high group border-l-4 border-tertiary">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h2 className="font-headline text-3xl font-bold text-primary group-hover:text-primary-fixed transition-colors">
                      {role.title}
                    </h2>
                    <p className="font-headline text-xl text-on-surface flex items-center gap-2">
                      {role.company}
                      <Verified className="text-tertiary w-5 h-5" />
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                      {role.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-bold">Core Focus & Achievements</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {role.achievements.map((achievement) => (
                        <li key={achievement.title} className="flex items-start gap-3 p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
                          <achievement.icon className="text-primary w-5 h-5 shrink-0" />
                          <div className="text-sm">
                            <strong className="block text-on-surface">{achievement.title}</strong>
                            <span className="text-on-surface-variant">{achievement.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="bg-surface-container-lowest p-6 rounded-xl overflow-hidden relative">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-bold">Deep Dive</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                      {role.deepDive}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span key={tag} className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          ))}      
        </div>

        {/* Side Bento Column */}
        <div className="lg:col-span-4 space-y-8">
          <div className="aspect-square bg-surface-container rounded-xl overflow-hidden relative shadow-2xl group">
            <img 
              src="https://picsum.photos/seed/code/600/600" 
              alt="Backend Code" 
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="font-headline text-xl font-bold text-white mb-1">Architecture over Code</h4>
              <p className="text-on-surface-variant text-xs font-bold tracking-widest">Architect | Optimize | Secure | Scale</p>
            </div>
          </div>

          <div className="bg-surface-container-high rounded-xl p-8">
            <h3 className="font-headline text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-primary">⚡</span> Tech Stack
            </h3>
            <div className="space-y-6">
              {[
                { label: "Core Node.js", level: "Expert", width: "95%", color: "bg-primary" },
                { label: "AWS Infrastructure", level: "Proficient", width: "80%", color: "bg-tertiary" },
                { label: "TypeScript System", level: "Advanced", width: "90%", color: "bg-primary" },
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-widest">
                    <span>{skill.label}</span>
                    <span className={skill.color.replace('bg-', 'text-')}>{skill.level}</span>
                  </div>
                  <div className="h-1 bg-outline-variant/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: skill.width }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={cn("h-full", skill.color)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="bg-primary/5 p-8 rounded-xl flex flex-col items-center text-center border border-primary/10">
            <Users className="text-primary w-10 h-10 mb-4" />
            <h4 className="font-headline text-lg font-bold text-on-surface mb-2">Interested in my process?</h4>
            <p className="text-on-surface-variant text-sm mb-6">Let's discuss how I can help build your backend architecture.</p>
            <button
              className="w-full py-3 bg-primary text-on-primary font-bold text-xs uppercase tracking-widest rounded-lg transition-transform active:scale-95"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Get In Touch
            </button>
          </div> */}
        </div>
      </div>
    </main>
  );
}
