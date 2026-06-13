"use client";

import { motion } from "framer-motion";

interface HeaderProps {
  name: string;
  badgeText: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
}

export default function Header({ name, badgeText, activeTab, setActiveTab, tabs }: HeaderProps) {
  return (
    <header className="w-full max-w-5xl mx-auto pt-16 pb-8 px-6 md:px-8 text-left">
      {/* Title with Robot GIF */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-sans leading-none">
          {name}
        </h1>
        {/* Interactive Robot GIF - Tenor */}
        <motion.div
          className="hidden md:flex h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg flex-shrink-0 items-center justify-center cursor-pointer hover:border-white/30 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://media.tenor.com/bZJYkqvXDz4AAAAi/robot-run.gif"
            alt="Robot running"
            className="w-full h-full object-contain"
            style={{ transform: 'scaleX(-1)' }}
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-start gap-0">
        {/* Simplified badge — remove glass look and improve styling */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-700/6 to-sky-500/6 border border-white/6 text-xs md:text-sm text-sky-100 font-medium shadow-sm select-none">
          <span className="text-sm">🎓</span>
          <span className="leading-none">{badgeText}</span>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex rounded-full bg-white/5 border border-white/5 p-1 relative overflow-hidden backdrop-blur-md mt-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-6 py-2 rounded-full text-xs font-mono font-medium tracking-wider transition-colors z-10 duration-200 cursor-pointer"
                style={{
                  color: isActive ? "#030712" : "var(--foreground)",
                }}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
