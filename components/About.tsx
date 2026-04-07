"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Architecture",
    desc: "Building scalable, maintainable iOS & Flutter architectures for enterprise standards."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Fintech Expertise",
    desc: "Specialized in robust payment gateways, security protocols, and secure data handling."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance First",
    desc: "Optimized high-performance algorithms, rapid UI responsiveness, and buttery smooth animations."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative z-10 bg-background text-white overflow-hidden border-t border-white/5">
      {/* Background ambient glows - Enhanced Vibrancy */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-center"
        >
          {/* Left Content */}
          <div className="xl:w-1/2 flex flex-col w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 w-fit mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.02)]">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
              <h2 className="text-xs md:text-sm font-semibold tracking-widest text-white/80 uppercase">About My Work</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-balance leading-[1.1]">
              Bridging engineering <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400">&</span> user delight.
            </h3>
            
            <div className="space-y-6 text-white/60 text-lg md:text-xl font-light leading-relaxed">
              <p>
                I am a dedicated <strong className="font-medium text-white/90">Mobile Engineer</strong> with a strong foundation in fintech innovation. I specialize in architecting secure, scalable, and exceptionally smooth mobile experiences that drive real business value and scalability.
              </p>
              <p>
                From building complex native iOS applications using <strong className="font-medium text-white/90">SwiftUI</strong> to crafting high-performance cross-platform solutions in <strong className="font-medium text-white/90">Flutter</strong>, my focus remains on writing clean, maintainable code without ever compromising on aesthetics.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="text-sm font-semibold uppercase tracking-widest text-white/40">Core Expertise</div>
                <div className="flex flex-wrap gap-3 text-sm text-white/80 font-medium">
                  <span className="px-4 py-2 bg-white/[0.03] rounded-lg border border-white/10 hover:border-white/30 transition-colors">iOS Native</span>
                  <span className="px-4 py-2 bg-white/[0.03] rounded-lg border border-white/10 hover:border-white/30 transition-colors">Flutter</span>
                  <span className="px-4 py-2 bg-white/[0.03] rounded-lg border border-white/10 hover:border-white/30 transition-colors">Fintech & Payments</span>
                </div>
            </div>
          </div>
          
          {/* Right Content - Bento Grid */}
          <div className="xl:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Main Stats Card */}
            <div className="group relative col-span-1 sm:col-span-2 p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex border-l-4 border-blue-500 pl-6 md:pl-8 flex-col justify-center h-full">
                <h4 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white tracking-tighter drop-shadow-sm">3+ Years</h4>
                <p className="text-lg md:text-xl text-white/70 font-light max-w-md">Delivering highly scalable, enterprise-grade mobile products used by thousands.</p>
              </div>
            </div>
            
            {/* Feature Cards Loop */}
            {features.map((feat, i) => (
              <div 
                key={i} 
                className={`group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:-translate-y-1 hover:border-white/20 transition-all duration-300 shadow-lg ${i === 2 ? 'sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-6' : 'flex flex-col gap-6'}`}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-[40px] -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors duration-500 pointer-events-none" />
                
                <div className="p-4 bg-white/5 rounded-2xl w-fit text-white group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 shrink-0">
                  {feat.icon}
                </div>
                
                <div className="relative z-10 w-full">
                  <h5 className="text-xl font-bold mb-3 text-white/90">{feat.title}</h5>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
