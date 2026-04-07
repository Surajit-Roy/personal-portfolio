"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Financial Software & Systems (FSS)",
    role: "Software Engineer",
    location: "Chennai, India",
    duration: "Feb 2023 - Present",
    achievements: [
      "Engineered real-time features and integrations for robust fintech payment architectures, ensuring sub-second response times.",
      "Optimized legacy system performance and led modern refactoring resulting in improved maintainability.",
      "Maintained strict security guidelines and clean architecture standards for highly sensitive user financial data.",
      "Collaborated with cross-functional teams to drastically reduce technical debt while shipping frequent feature updates."
    ],
    tech: ["iOS", "Flutter", "Swift", "Dart", "Payment SDKs", "Fintech", "Agile", "Git"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 px-6 bg-background relative border-t border-white/5 overflow-hidden">
      {/* atmospheric background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-20 flex flex-col items-start md:items-center md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 w-fit mb-4 md:mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)]">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(192,132,252,0.5)]" />
            <h2 className="text-[10px] md:text-sm font-semibold tracking-widest text-white/80 uppercase">Career History</h2>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-purple-400 to-white">Journey</span>
          </h3>
        </motion.div>

        <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Vertical accent bar - only on desktop */}
              <div className="hidden md:absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative group p-6 md:p-8 lg:p-10 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                {/* subtle card glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* header */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8 mb-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="p-3 md:p-4 bg-white/5 rounded-2xl text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-all duration-300 shadow-sm border border-white/5 shrink-0">
                      <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-3xl font-extrabold text-white tracking-tight mb-1">{exp.role}</h4>
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 text-white/50 text-xs md:text-base font-medium">
                        <span className="text-indigo-300/80">{exp.company}</span>
                        <span className="hidden md:inline text-white/10">•</span>
                        <div className="flex items-center gap-1.5 md:gap-2">
                           <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5" />
                           <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] md:text-sm font-semibold text-white/70 backdrop-blur-sm self-start whitespace-nowrap">
                    <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 text-indigo-400 mr-1.5" />
                    {exp.duration}
                  </div>
                </div>

                {/* Achievements list */}
                <div className="relative z-10 space-y-4 md:space-y-5 mb-8 md:pl-2">
                  {exp.achievements.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-start gap-3.5 md:gap-5 group/item"
                    >
                      <div className="mt-1.5 md:mt-2.5 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-500/40 group-hover/item:bg-indigo-400/80 group-hover/item:scale-125 transition-all shrink-0" />
                      <p className="text-white/60 text-[13px] md:text-lg leading-relaxed font-light group-hover/item:text-white/80 transition-colors">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* tech stacks footer */}
                <div className="relative z-10 flex flex-wrap gap-1.5 md:gap-2.5 pt-6 md:pt-8 border-t border-white/10">
                  <span className="w-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/30 mb-2">Tech Stack & Tools</span>
                  {exp.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-[10px] md:text-xs font-semibold border border-white/10 bg-white/[0.03] text-white/50 hover:text-white/80 hover:border-white/20 transition-all duration-300"
                    >
                      {t}
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
