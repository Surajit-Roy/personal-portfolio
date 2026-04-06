"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Financial Software & Systems (FSS)",
    role: "Software Engineer",
    duration: "Feb 2023 - Present",
    achievements: [
      "Engineered real-time features and integrations for robust fintech payment architectures, ensuring sub-second response times.",
      "Optimized legacy system performance and led modern refactoring resulting in improved maintainability.",
      "Maintained strict security guidelines and clean architecture standards for highly sensitive user financial data.",
      "Collaborated with cross-functional teams to drastically reduce technical debt while shipping frequent feature updates."
    ],
    tech: ["iOS", "Flutter", "Swift", "Dart", "Payment SDKs"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-white/50 uppercase mb-3">Career History</h2>
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">Professional Journey</h3>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-10 md:-left-12 top-1 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] border-4 border-background" />
              
              <div className="glass-card p-8 rounded-2xl border border-white/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                    <span className="text-lg text-white/60">{exp.company}</span>
                  </div>
                  <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium w-fit">
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/70">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold text-white/50">{t}{i < exp.tech.length - 1 && " •"}</span>
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
