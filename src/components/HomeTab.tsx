"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Award, Interest, Activity } from "@/data/portfolio";

interface HomeTabProps {
  interests: Interest[];
  activities: Activity[];
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

export default function HomeTab({ interests, activities, awards }: HomeTabProps) {
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
      className="w-full max-w-5xl mx-auto px-6 md:px-8 space-y-10"
    >

      {/* Bottom Section: Certificates & Awards */}
      <motion.div
        variants={item}
        className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 md:p-8"
      >
        <div className="space-y-8">
          {/* Interests Section */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.32em] font-semibold text-foreground/50 mb-4">
              Interests
            </h3>
            <ul className="pl-0 space-y-3 text-sm text-foreground/80">
              {interests.map((interest, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-cyan-400 mt-1">★</span>
                  <p className="leading-relaxed break-words">{interest.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities Section */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.32em] font-semibold text-foreground/50 mb-4">
              Activities
            </h3>
            <ul className="pl-0 space-y-3 text-sm text-foreground/80">
              {activities.map((activity, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-cyan-400 mt-1">⟶</span>
                  <p className="leading-relaxed break-words">{activity.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.32em] font-semibold text-foreground/50 mb-4">
              Certificates & Awards
            </h3>
            <ul className="space-y-4">
              {awards.map((award, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.015] p-4"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400/80" />
                  <div>
                    <p className="text-sm font-semibold text-foreground font-sans">
                      {award.title}
                    </p>
                    <p className="mt-1 text-sm text-foreground/65 leading-relaxed">
                      {award.subtitle}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
