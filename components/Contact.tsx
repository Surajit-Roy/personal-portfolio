"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative border-t border-white/5 overflow-hidden">
      {/* Background elegant gradient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">extraordinary.</span></h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light">
            Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-24">
            <a
              href="mailto:surajitroy9064@gmail.com"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 active:scale-95 transition-all text-lg w-full sm:w-auto"
            >
              Get In Touch
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex justify-center gap-8 border-t border-white/10 pt-8">
            <a href="https://github.com/Surajit-Roy" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <span className="sr-only">GitHub</span>
              <Github className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/surajit-roy-software-engineer-224a1622a" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="mailto:surajitroy9064@gmail.com" className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <span className="sr-only">Email</span>
              <Mail className="w-7 h-7" />
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
              <div className="text-[10px] text-white/25 uppercase tracking-[0.2em]">
                © {new Date().getFullYear()} All Rights Reserved | Designed and Engineered with Passion by Surajit Roy
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
