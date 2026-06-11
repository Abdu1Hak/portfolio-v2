"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Interest, Goal, Award } from "@/data/portfolio";

interface HomeTabProps {
  interests: Interest[];
  goals: Goal[];
  awards: Award[];
}

// Helper to render Lucide Icons or Images dynamically
export function DynamicIcon({ name, className, imgClassName }: { name: string; className?: string; imgClassName?: string }) {
  const isPath = name.includes("/") || name.includes(".");
  if (isPath) {
    return <img src={name} alt="Logo" className={imgClassName || className} />;
  }

  // Map string representation to Lucide Component
  // Convert kebab-case / lowercase to PascalCase if needed
  const pascalName = name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const IconComponent = 
    (Icons as any)[pascalName] || 
    (Icons as any)[name] || 
    Icons.HelpCircle;

  return <IconComponent className={className} />;
}

export default function HomeTab({ interests, goals, awards }: HomeTabProps) {
  // Container stagger animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-7xl mx-auto px-6 md:px-8 space-y-10"
    >
      {/* Top Section: Interests & Goals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Interests Card (takes 2 cols on wide screens) */}
        <motion.div 
          variants={item}
          className="lg:col-span-2 rounded-2xl glass-card p-6 md:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <DynamicIcon name="network" className="w-5 h-5 text-[#00f2fe]" />
              <h2 className="text-xl font-bold tracking-tight text-foreground font-sans">
                Interests
              </h2>
            </div>
            
            {/* Interest Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {interests.map((interest, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-white/5 bg-white/2 px-4 py-6 text-left flex flex-col items-start gap-4 transition-all hover:border-[#00f2fe]/25 hover:bg-white/[0.04]"
                >
                  <div className={`p-2.5 rounded-lg border flex items-center justify-center shrink-0 ${interest.color}`}>
                    <DynamicIcon name={interest.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-foreground font-sans mb-1">
                      {interest.title}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed font-normal">
                      {interest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Goals Card (takes 1 col) */}
        <motion.div 
          variants={item}
          className="rounded-2xl glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          {/* Subtle design grid pattern in the background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,254,0.01)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,242,254,0.01)_1.5px,transparent_1.5px)] bg-[size:20px_20px] pointer-events-none -z-10 opacity-60" />
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <DynamicIcon name="target" className="w-5 h-5 text-[#00f2fe]" />
              <h2 className="text-xl font-bold tracking-tight text-foreground font-sans">
                Goals
              </h2>
            </div>

            <div className="space-y-6">
              {goals.map((goal, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-[#00f2fe] flex items-center justify-center shrink-0 mt-0.5">
                    <DynamicIcon name={goal.icon} className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-foreground font-sans mb-0.5">
                      {goal.title}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed font-normal">
                      {goal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Certificates & Awards */}
      <motion.div 
        variants={item}
        className="rounded-2xl glass-card p-6 md:p-8"
      >
        <div className="flex items-center gap-2 mb-6">
          <DynamicIcon name="award" className="w-5 h-5 text-[#00f2fe]" />
          <h2 className="text-xl font-bold tracking-tight text-foreground font-sans">
            Certificates & Awards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {awards.map((award, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 p-4 rounded-xl border border-white/5 bg-white/2 hover:border-[#00f2fe]/20 hover:bg-white/[0.04] transition-all"
            >
              <div className="border border-white/5 text-[#00f2fe] flex items-center justify-center shrink-0">
              
              </div>
              <div className="text-left overflow-hidden">
                <h3 className="text-xs md:text-sm font-bold tracking-tight text-foreground font-sans mb-2">
                  {award.title}
                </h3>
                <p className="text-xs md:text-sm text-foreground/45">
                  {award.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
