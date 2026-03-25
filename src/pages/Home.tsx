import { motion } from "motion/react";
import { Cloud, Layers, Terminal } from "lucide-react";

const TECH_BADGES = ["Node.js", "Express.js","TypeScript", "Javascript", "AWS Cloud", "PostgreSQL", "MongoDB", "ORM"];

const STATS = [
  { value: "2+ YEARS", label: "Industry Experience" },
  { value: "3+", label: "Projects Delivered" },
  { value: "99.9%", label: "System Uptime Focus" },
  { value: "CLEAN CODE", label: "Priority Principle" },
];

export function Home() {
  return (
    <main className="relative pt-24 md:pt-32 min-h-screen overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 lg:row-start-1 space-y-6 md:space-y-10 text-center lg:text-left"
          >
            <div className="space-y-3 md:space-y-4">
              <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                Backend Developer
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter leading-[0.9] text-on-surface">
                BALAGANESH <span className="text-primary block">MAHADEVAN.</span>
              </h1>
            </div>
            
            <div className="max-w-xl mx-auto lg:mx-0">
              <p className="text-sm md:text-lg lg:text-xl text-on-surface-variant leading-relaxed">
                Crafting the invisible backbone of modern web applications. Specialized in <span className="text-tertiary font-medium">REST APIs</span> and <span className="text-tertiary font-medium">Real-time Services</span> with 2+ years of production-grade expertise in Node.js, Express.js, TypeScript, Javascript, PostgreSQL, MongoDB, ORM, and AWS cloud architecture.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4 pt-2 md:pt-4">
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto bg-primary text-on-primary px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-headline font-extrabold uppercase tracking-widest text-xs md:text-sm hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-primary/20"
              >
                View Projects
              </button>
            </div>
            
            {/* Tech Badges */}
          </motion.div>
          
          {/* Tech Badges (Core Stack) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12 lg:row-start-2 pt-6 md:pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-on-surface-variant">
              Core Stack
            </span>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {TECH_BADGES.map((tech) => (
                <span
                  key={tech}
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-surface-container-high text-on-surface text-[10px] md:text-xs font-medium accent-glow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Bento Stats Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8 lg:row-start-1 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
          >
            <div className="sm:col-span-2 aspect-[16/9] bg-surface-container rounded-2xl overflow-hidden relative group">
              <img 
                src="/assets/dev-desk.png"
                alt="Development desk with code" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Real-time Deployment</span>
                </div>
                <p className="text-xs md:text-sm font-medium text-on-surface">Architecting systems that scale with your users.</p>
              </div>
            </div>
            
            <div className="bg-surface-container-high p-5 md:p-6 rounded-2xl flex flex-col justify-between h-32 md:h-40">
              <Cloud className="text-primary w-6 h-6 md:w-8 md:h-8" />
              <div>
                <div className="text-lg md:text-2xl font-black font-headline text-on-surface leading-tight">AWS</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">EC2 • S3 • RDS</div>
              </div>
            </div>
            
            <div className="bg-surface-container-high p-5 md:p-6 rounded-2xl flex flex-col justify-between h-32 md:h-40">
              <Layers className="text-tertiary w-6 h-6 md:w-8 md:h-8" />
              <div>
                <div className="text-lg md:text-2xl font-black font-headline text-on-surface leading-tight">Microservices</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Distributed Logic</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Horizontal Stats Strip */}
      <div className="mt-12 md:mt-20 py-8 md:py-10 bg-surface-container/40 border-y border-outline-variant/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:flex md:flex-row justify-between items-center gap-8 md:gap-0">
          {STATS.map((stat, idx) => (
            <div key={stat.label} className="flex items-center gap-4 md:gap-8 justify-center md:justify-start">
              <div className="text-center md:text-left">
                <div className="text-xl md:text-3xl font-black font-headline text-on-surface">{stat.value}</div>
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
              {idx < STATS.length - 1 && <div className="h-10 w-px bg-outline-variant/30 hidden md:block" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
