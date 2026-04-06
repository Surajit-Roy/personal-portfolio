"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

/* ──────────────────────────────────────────
   Floating Tech Icons (SVG line-art style)
   ────────────────────────────────────────── */

function SwiftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M46.3 8.8C44.5 7.3 39 5 33 8c-4.5 2.3-8.6 6.3-11.6 10.3 6.2-3 12-7.4 12-7.4s-4.8 5.4-10.5 10.4c-3.2 2.8-6.7 5-9.2 6.2-1.2.6-2 .8-2 .8.5.8 1.2 1.5 1.2 1.5-3.6-1.2-6.7-3.8-8.7-7 2.4 5.7 7 10.8 12.5 14.3-4.5.1-9-1.2-12-3.3 3.4 4.7 9 8.2 15 9.5 6.2 1.3 11.8.3 15.6-2.2 4-2.6 7-7 7.5-12C43.5 25 52 17.2 52 17.2s-2 3.5-5.7 7.5c2-4.7 2-10 0-16z" />
    </svg>
  );
}

function FlutterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M36 6L12 30l8 8L44 14h-8zM36 34L24 46l8 8 20-20H36zM24 46l8-8" />
    </svg>
  );
}

function FirebaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M16 52L22 6l10 18L38 14l10 38H16z" />
      <path d="M16 52l16-10 16 10" />
      <path d="M22 6l10 18" />
    </svg>
  );
}

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <ellipse cx="32" cy="32" rx="24" ry="9" transform="rotate(0 32 32)" />
      <ellipse cx="32" cy="32" rx="24" ry="9" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="24" ry="9" transform="rotate(120 32 32)" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
    </svg>
  );
}

function XcodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="10" y="10" width="44" height="44" rx="10" />
      <path d="M24 24l16 16M40 24L24 40" />
      <circle cx="32" cy="32" r="4" />
    </svg>
  );
}

function GitIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="20" cy="20" r="5" />
      <circle cx="44" cy="20" r="5" />
      <circle cx="20" cy="44" r="5" />
      <path d="M20 25v14M25 20h14" />
    </svg>
  );
}

function APIIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="8" y="14" width="20" height="14" rx="3" />
      <rect x="36" y="36" width="20" height="14" rx="3" />
      <path d="M28 21h8v22h-8" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="18" y="6" width="28" height="52" rx="5" />
      <line x1="26" y1="12" x2="38" y2="12" />
      <circle cx="32" cy="50" r="2" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M18 44a10 10 0 010-20h1a14 14 0 0127 4 8 8 0 01-2 16H18z" />
      <path d="M26 50v6M32 48v8M38 50v6" />
    </svg>
  );
}

function DartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 32L32 12l20 20-20 20z" />
      <path d="M22 32h20M32 22v20" />
      <circle cx="32" cy="32" r="4" />
    </svg>
  );
}

// Floating icon configuration with position, size, rotation, speed
const floatingIcons = [
  { Icon: SwiftIcon, pos: "top-[8%] left-[8%]", size: "w-16 h-16 md:w-24 md:h-24", rotate: "rotate-12", speedIdx: 0 },
  { Icon: FlutterIcon, pos: "top-[12%] right-[6%]", size: "w-14 h-14 md:w-20 md:h-20", rotate: "-rotate-6", speedIdx: 1 },
  { Icon: FirebaseIcon, pos: "top-[35%] left-[3%]", size: "w-12 h-12 md:w-18 md:h-18", rotate: "rotate-6", speedIdx: 2 },
  { Icon: ReactIcon, pos: "top-[50%] right-[4%] md:right-[12%]", size: "w-16 h-16 md:w-22 md:h-22", rotate: "-rotate-12", speedIdx: 3 },
  { Icon: XcodeIcon, pos: "bottom-[15%] left-[6%] md:left-[18%]", size: "w-14 h-14 md:w-20 md:h-20", rotate: "rotate-3", speedIdx: 4 },
  { Icon: GitIcon, pos: "bottom-[25%] right-[8%] md:right-[18%]", size: "w-12 h-12 md:w-16 md:h-16", rotate: "-rotate-6", speedIdx: 5 },
  { Icon: APIIcon, pos: "top-[25%] left-[20%] md:left-[30%]", size: "w-10 h-10 md:w-14 md:h-14", rotate: "rotate-12", speedIdx: 6 },
  { Icon: PhoneIcon, pos: "top-[18%] right-[20%] md:right-[28%]", size: "w-10 h-10 md:w-16 md:h-16", rotate: "-rotate-3", speedIdx: 7 },
  { Icon: CloudIcon, pos: "bottom-[35%] left-[12%] md:left-[8%]", size: "w-14 h-14 md:w-20 md:h-20", rotate: "rotate-6", speedIdx: 8 },
  { Icon: DartIcon, pos: "bottom-[10%] right-[15%] md:right-[25%]", size: "w-10 h-10 md:w-14 md:h-14", rotate: "-rotate-12", speedIdx: 9 },
];

// Different parallax speeds for variety
const speedRanges: [string, string][] = [
  ["0%", "160%"],
  ["0%", "60%"],
  ["0%", "220%"],
  ["0%", "100%"],
  ["0%", "140%"],
  ["0%", "80%"],
  ["0%", "180%"],
  ["0%", "120%"],
  ["0%", "200%"],
  ["0%", "70%"],
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Pre‑compute all 10 transforms (hooks must be called unconditionally)
  const y0 = useTransform(scrollYProgress, [0, 1], speedRanges[0]);
  const y1 = useTransform(scrollYProgress, [0, 1], speedRanges[1]);
  const y2 = useTransform(scrollYProgress, [0, 1], speedRanges[2]);
  const y3 = useTransform(scrollYProgress, [0, 1], speedRanges[3]);
  const y4 = useTransform(scrollYProgress, [0, 1], speedRanges[4]);
  const y5 = useTransform(scrollYProgress, [0, 1], speedRanges[5]);
  const y6 = useTransform(scrollYProgress, [0, 1], speedRanges[6]);
  const y7 = useTransform(scrollYProgress, [0, 1], speedRanges[7]);
  const y8 = useTransform(scrollYProgress, [0, 1], speedRanges[8]);
  const y9 = useTransform(scrollYProgress, [0, 1], speedRanges[9]);
  const yArr = [y0, y1, y2, y3, y4, y5, y6, y7, y8, y9];

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden bg-background px-4 py-20"
    >
      {/* Background Floating Tech Icons with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-background to-background" />

        {floatingIcons.map(({ Icon, pos, size, rotate, speedIdx }, i) => (
          <motion.div
            key={i}
            style={{ y: yArr[speedIdx] }}
            className={`absolute ${pos} text-white/[0.04]`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 + i * 0.12, ease: "easeOut" }}
            >
              <Icon className={`${size} ${rotate}`} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="z-10 flex flex-col items-center text-center max-w-4xl mt-12 md:mt-0"
      >
        {/* Profile Picture Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-8 relative border-4 border-white/10 overflow-hidden shadow-2xl z-20 bg-black/40"
        >
          <Image
            src="/images/userpic1.jpeg"
            alt="Surajit Roy"
            width={160}
            height={160}
            priority
            className="w-full h-full object-cover object-[center_top]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-6 px-4 py-1.5 rounded-full border border-white/10 glass text-sm font-medium text-white/80"
        >
          Over 3+ Years in Fintech & Payments
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6"
        >
          Surajit Roy
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl font-light text-white/60 mb-8 max-w-2xl px-2"
        >
          Mobile Application Developer
          <span className="mx-2 opacity-30 block md:inline">|</span>
          iOS & Flutter Specialist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg text-white/50 mb-12 max-w-xl leading-relaxed px-4"
        >
          I build scalable, high-performance mobile apps used by thousands of users.
          Delivering premium user experiences with modern tech.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6"
        >
          <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 active:scale-95 transition-all w-full sm:w-auto">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/Surajit-Roy-CV.pdf" download className="group flex items-center justify-center gap-2 px-8 py-4 border border-white/20 glass text-white rounded-full font-medium hover:bg-white/5 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto">
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 z-10 animate-bounce text-white/30 hidden md:block"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
