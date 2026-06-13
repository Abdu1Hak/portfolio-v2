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
      className="w-full max-w-5xl mx-auto px-6 md:px-8 text-left space-y-10"
    >
      {/* Title Header */}
      <div className="flex items-center gap-1.5 mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground font-sans">
          Work History
        </h2>
      </div>

      {/* Timeline Layout Container */}
      <div className="relative timeline-strong pl-8 md:pl-12 ml-4 md:ml-6 space-y-10 pb-6">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="relative"
          >
            {/* Timeline Circle Bullet Node */}
            <div className="absolute -left-[60px] md:-left-[80px] top-5 md:top-7 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#061226] border border-white/20 flex items-center justify-center hover:border-white/50 shadow-2xl select-none">
              <img
                src={exp.icon}
                alt={`${exp.company} icon`}
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-contain"
                style={exp.iconZoom ? { transform: `scale(${exp.iconZoom})` } : undefined}
              />
            </div>

            {/* Experience Body Card */}
            <div className="group glass-card p-6 md:p-8 rounded-2xl border border-white/6 shadow-xl hover:border-white/30 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground/95 group-hover:text-white transition-colors font-sans mb-2">
                {exp.role}
              </h3>

              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="font-sans text-sm text-foreground/90 font-semibold">{exp.company}</span>
                <span className="text-foreground/20">•</span>
                <span className="text-xs md:text-sm bg-white/5 px-3 py-1 rounded-full text-white/80">{exp.duration}</span>
              </div>

              <ul className="text-sm md:text-base text-foreground/85 leading-relaxed font-normal list-disc list-outside pl-5 space-y-3">
                {exp.description.map((line, lineIdx) => (
                  <li key={lineIdx} className="marker:text-cyan-300">{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
