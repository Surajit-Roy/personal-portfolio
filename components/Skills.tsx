"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Server, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />,
    description: "Native and cross-platform frameworks for seamless mobile apps.",
    skills: ["iOS (Swift)", "SwiftUI", "UIKit", "Combine Framework", "Flutter", "Dart"]
  },
  {
    title: "Frontend Web",
    icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
    description: "Crafting responsive and interactive web foundations.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Backend & Systems",
    icon: <Server className="w-5 h-5 md:w-6 md:h-6" />,
    description: "Building robust, scalable server-side architecture and APIs.",
    skills: ["Core Java", "Firebase", "REST APIs"]
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-5 h-5 md:w-6 md:h-6" />,
    description: "Streamlining workflow, source control, and secure integrations.",
    skills: ["Git", "GitHub", "Bitbucket", "CI/CD", "Payment SDKs", "Payment Gateways"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-background relative border-t border-white/5 overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] bg-indigo-500/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 md:mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/5 w-fit mb-4 md:mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)]">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
            <h2 className="text-[10px] md:text-sm font-semibold tracking-widest text-white/80 uppercase">Core Competencies</h2>
          </div>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-purple-400 to-white">Arsenal</span>
          </h3>
          
          <p className="text-sm md:text-base text-white/60 max-w-2xl font-light px-2">
            I leverage modern frameworks and robust tools to engineer high-performance applications that rapidly scale to thousands of users.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group relative p-6 md:p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)]"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3.5 md:gap-4 mb-3 md:mb-4">
                  <div className="p-2.5 md:p-3 bg-white/5 rounded-2xl text-indigo-300 group-hover:scale-110 group-hover:text-indigo-400 group-hover:bg-indigo-500/20 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 shrink-0">
                    {category.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white/90 tracking-tight">
                    {category.title}
                  </h4>
                </div>
                
                <p className="text-white/50 text-xs md:text-sm font-light mb-6 md:mb-8">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 md:px-4 py-1.5 md:py-2.5 rounded-xl text-xs md:text-sm font-medium border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-default hover:-translate-y-0.5 shadow-sm group-hover:border-white/15"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
