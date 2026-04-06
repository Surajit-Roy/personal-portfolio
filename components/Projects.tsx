"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "expenseBuddy",
    desc: "A premium iOS application designed to take the awkwardness and complex math out of sharing expenses with friends. Provides a seamless, real-time experience for splitting bills, managing groups, and settling debts.",
    tech: ["iOS", "Swift", "SwiftUI", "Combine", "Firebase"],
    impact: "Built real-time synchronization reducing discrepancy issues by 99%.",
    github: "https://github.com/Surajit-Roy/expenseBuddy",
    image: "/projects/ExpenseBuddy.png",
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/5",
    accentGradient: "from-blue-400 to-indigo-400",
    glowColor: "rgba(99, 102, 241, 0.15)",
    number: "01"
  },
  {
    title: "eMart App",
    desc: "An e-commerce mobile app offering a wide range of products including Furniture, Women's and Men's clothing, as well as mobile devices.",
    tech: ["Flutter", "Dart", "Firebase"],
    impact: "Implemented scalable Firebase backend to support rapid catalog expansion and heavy traffic loads.",
    github: "https://github.com/Surajit-Roy/emart",
    image: "/projects/eMart_wallpaper.jpg",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/5",
    accentGradient: "from-emerald-400 to-teal-400",
    glowColor: "rgba(20, 184, 166, 0.15)",
    number: "02"
  },
  {
    title: "iOS Dynamic Card Form",
    desc: "A sleek and interactive debit card flip animation mimicking a real-world card-flipping experience while entering the CVV.",
    tech: ["iOS", "Swift", "UIKit"],
    impact: "Significantly improved UI micro-interactions, resulting in a more premium checkout feel and higher conversion potential.",
    github: "https://github.com/Surajit-Roy/iOS-dynamic-card-form",
    image: "/projects/DynamicCardProject.gif",
    gradient: "from-purple-500/20 via-pink-500/10 to-rose-500/5",
    accentGradient: "from-purple-400 to-pink-400",
    glowColor: "rgba(168, 85, 247, 0.15)",
    number: "03"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const isReversed = index % 2 !== 0;

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Main Card */}
      <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] transition-all duration-700 hover:border-white/[0.12]"
           style={{ boxShadow: isHovered ? `0 30px 80px -20px ${project.glowColor}` : 'none' }}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 transition-opacity duration-700 group-hover:opacity-100`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Content Layout */}
        <div className={`relative z-10 flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[480px] md:min-h-[520px]`}>
          
          {/* Text Content Side */}
          <motion.div 
            style={{ opacity: contentOpacity }}
            className="w-full lg:w-[55%] flex flex-col justify-center p-8 md:p-12 lg:p-16 gap-6 order-2 lg:order-none"
          >
            {/* Project Number & Tech Tags */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className={`text-5xl font-black bg-gradient-to-br ${project.accentGradient} bg-clip-text text-transparent opacity-30 leading-none`}>
                {project.number}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Title */}
            <h4 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h4>
            
            {/* Description */}
            <p className="text-white/50 leading-relaxed text-base md:text-lg font-light max-w-lg">
              {project.desc}
            </p>
            
            {/* Impact Callout */}
            <div className={`relative rounded-xl overflow-hidden`}>
              <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${project.accentGradient} rounded-full`} />
              <div className="bg-white/[0.03] backdrop-blur-sm p-4 pl-5">
                <p className="text-sm leading-relaxed">
                  <span className={`font-semibold bg-gradient-to-r ${project.accentGradient} bg-clip-text text-transparent mr-2`}>Impact</span>
                  <span className="text-white/70">{project.impact}</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-5 pt-2">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group/btn flex items-center gap-2.5 text-sm font-medium text-white/50 hover:text-white transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] group-hover/btn:border-white/20 group-hover/btn:bg-white/[0.08] transition-all duration-300">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="group-hover/btn:translate-x-0.5 transition-transform duration-300">Source Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Image Side — Constrained container for wide images */}
          <div className="w-full lg:w-[45%] relative overflow-hidden order-1 lg:order-none min-h-[240px] md:min-h-[320px] lg:min-h-0">
            {/* Subtle mesh overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-black/5 lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/10 pointer-events-none" />
            
            {/* Image Container with Parallax */}
            <motion.div 
              style={{ y: imageY }} 
              className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
              <div className="w-full h-full flex items-center justify-center p-4 md:p-6 lg:p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain object-center drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </motion.div>

            {/* Corner decorators */}
            <div className="absolute top-4 right-4 z-20 w-12 h-12 border-t border-r border-white/[0.06] rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-4 left-4 z-20 w-12 h-12 border-b border-l border-white/[0.06] rounded-bl-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 px-6 bg-background relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-teal-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-28"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-xs font-bold tracking-[0.3em] text-white/40 uppercase mb-4"
              >
                Featured Work
              </motion.span>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Showcase</span>
                <span className="text-white/20 ml-3">&</span>
                <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/20 md:ml-3">Impact</span>
              </h3>
            </div>
            <p className="text-white/40 text-base md:text-lg font-light max-w-sm leading-relaxed">
              A curated selection of projects that showcase my expertise in mobile development and design.
            </p>
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-16 md:space-y-20">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} index={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
