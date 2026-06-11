"use client";

import { motion } from "framer-motion";
import { WorkExperience } from "@/data/portfolio";

interface ExperienceTabProps {
  experience: WorkExperience[];
}

export default function ExperienceTab({ experience }: ExperienceTabProps) {
  // Container animations
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 90 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-7xl mx-auto px-6 md:px-8 text-left space-y-10"
    >
      {/* Title Header */}
      <div className="flex items-center gap-1.5 mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground font-sans">
          Work History
        </h2>
        {/* Blinking cyan console underscore */}
        <span className="w-3.5 h-6 bg-[#00f2fe] inline-block animate-pulse shrink-0 self-end mb-1" />
      </div>

      {/* Timeline Layout Container */}
      <div className="relative border-l-2 border-white/5 pl-8 md:pl-12 ml-4 md:ml-6 space-y-14 pb-6">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="relative"
          >
            {/* Timeline Circle Bullet Node */}
            <div className="absolute -left-[60px] md:-left-[80px] top-1 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0a1228] border border-white/10 flex items-center justify-center hover:border-[#00f2fe]/40 shadow-lg select-none">
              <img
                src={exp.icon}
                alt={`${exp.company} icon`}
                className="w-14 h-12 md:w-13 md:h-13 rounded-lg object-contain"
                style={exp.iconZoom ? { transform: `scale(${exp.iconZoom})` } : undefined}
              />
            </div>

            {/* Experience Body Card */}
            <div className="group">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-[#00f2fe] transition-colors font-sans mb-2">
                {exp.role}
              </h3>
              
              <div className="font-mono text-sm md:text-base text-[#00f2fe]/80 font-medium tracking-wide flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                <span className="font-semibold text-foreground/90">{exp.company}</span>
                <span className="text-foreground/20">|</span>
                <span className="text-sm md:text-base text-[#00f2fe]">{exp.duration}</span>
              </div>

              <ul className="text-sm md:text-base text-foreground/70 leading-relaxed max-w-3xl font-normal list-disc list-inside space-y-3">
                {exp.description.map((line, lineIdx) => (
                  <li key={lineIdx}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
