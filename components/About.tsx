"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile First",
    desc: "Worked on real-world production iOS & Flutter apps."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Domain Expertise",
    desc: "Specialized in fintech, robust payment systems, and UPI integrations."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance",
    desc: "Strong focus on high-performance algorithms, UI responsiveness & scalability."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 bg-background text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start"
        >
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-white/50 uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
              Bridging design and engineering in mobile experiences.
            </h3>
            <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
              <p>
                As a Mobile Application Developer with over 3 years of deep-dive experience in fintech organizations, 
                I specialize in crafting secure, highly scalable, and exceptionally smooth mobile applications.
              </p>
              <p>
                Whether it's building comprehensive iOS apps with swift UI architectures or creating cross-platform solutions 
                in Flutter, my approach centers on robust performance architectures that don't compromise on visual aesthetics.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-1 sm:col-span-2 glass-card p-8 rounded-2xl border border-white/5">
              <h4 className="text-4xl font-bold mb-2">3+ Years</h4>
              <p className="text-sm text-white/50">Engineering highly scalable digital products.</p>
            </div>
            {features.slice(0, 2).map((feat, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col gap-4">
                <div className="p-3 bg-white/5 rounded-xl w-fit text-white/80">
                  {feat.icon}
                </div>
                <div>
                  <h5 className="font-semibold mb-1">{feat.title}</h5>
                  <p className="text-xs text-white/50 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
