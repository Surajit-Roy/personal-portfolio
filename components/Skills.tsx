"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Mobile",
    skills: ["iOS (Swift)", "SwiftUI", "UIKit", "Flutter", "Dart"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"]
  },
  {
    title: "Backend & Systems",
    skills: ["Core Java", "Firebase", "REST APIs", "Combine Framework"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Bitbucket", "CI/CD", "Payment SDKs"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-white/50 uppercase mb-3">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">Technical Arsenal</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-medium text-white/80 border-b border-white/10 pb-4">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-full text-sm font-medium glass-card border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
