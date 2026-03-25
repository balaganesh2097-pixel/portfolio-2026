import { motion } from "motion/react";
import { ArrowRight, Terminal, Cloud, BarChart } from "lucide-react";

const PROJECTS = [
  {
    title: "Ecademictube",
    desc: "A comprehensive educational ecosystem facilitating seamless student-tutor interactions, resource sharing, and real-time academic collaboration.",
    tags: ["Node.js", "JavaScript", "Socket.io", "MongoDB", "AWS"],
    badge: "Live Platform",
    image: "/assets/ecademictube.png",
    color: "text-tertiary",
    url: "https://www.ecademictube.com",
  },
  {
    title: "PointerUp",
    desc: "Engineered a sophisticated bridge to transform traditional Shopify stores into high-performance mobile applications with automated sync.",
    tags: ["Node.js", "Express.js", "TypeScript", "Socket.io", "PostgreSQL", "AWS", "Railway"],
    badge: "SaaS",
    image: "/assets/pointerup.jpg",
    color: "text-primary",
    url: "https://www.pointerup.com",
  },
  {
    title: "Ongomart",
    desc: "Robust e-commerce platform featuring complex cart management, multi-stage order processing, and dynamic inventory orchestration.",
    tags: ["Node.js", "Express.js", "TypeScript", "Socket.io", "PostgreSQL", "AWS"],
    badge: "E-Commerce",
    image: "/assets/ongomart.jpg",
    color: "text-primary",
    offset: true,
    url: "https://www.ongomart.com",
  },
  {
    title: "EffectV Hire",
    desc: "AI-powered recruitment engine utilizing specialized microservices for candidate matching, automated screening, and data-driven hiring workflows.",
    tags: ["Node.js", "Express.js", "TypeScript", "Socket.io", "PostgreSQL", "Azure"],
    badge: "AI Integration",
    image: "/assets/effectvhire.jpg",
    color: "text-tertiary",
    offset: true,
    url: "https://www.effectv.ai",
  },
];

export function Projects() {
  return (
    <main className="pt-24 md:pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      <header className="mb-12 md:mb-20 max-w-3xl text-center md:text-left mx-auto md:mx-0">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase">
          Project Showcase
        </div>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-on-surface mb-8 leading-none">
          Featured <span className="text-primary italic">Architecture</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto md:mx-0">
          A selection of enterprise-grade applications focusing on scalable backend
          systems, high-performance APIs, and seamless user experiences.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={`group flex flex-col bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300 hover:bg-surface-container-high ${
              project.offset ? "lg:translate-y-12" : ""
            }`}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-surface-container-highest/80 backdrop-blur-md rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
                  {project.badge}
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3
                className={`font-headline text-3xl font-bold mb-4 tracking-tight ${project.color}`}
              >
                {project.title}
              </h3>
              <p className="text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                {project.desc}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[11px] font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-tertiary font-bold text-sm tracking-widest uppercase hover:gap-4 transition-all"
                >
                  Explore Project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-48 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Terminal,
            title: "Scalable Systems",
            desc: "Optimizing backend performance for high-traffic enterprise applications.",
            color: "border-primary",
          },
          {
            icon: Cloud,
            title: "Cloud Infrastructure",
            desc: "Deploying robust microservices architectures on AWS and Google Cloud.",
            color: "border-tertiary",
          },
          {
            icon: BarChart,
            title: "Data Driven",
            desc: "Building intelligent workflows using modern data processing and AI.",
            color: "border-secondary-container",
          },
        ].map((feat) => (
          <div
            key={feat.title}
            className={`p-8 bg-surface-container-lowest rounded-xl border-l-4 ${feat.color}`}
          >
            <feat.icon className="text-primary mb-4 w-6 h-6" />
            <h4 className="font-headline text-xl font-bold mb-2">{feat.title}</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

