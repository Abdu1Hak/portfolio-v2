"use client";

import { motion } from "framer-motion";

interface HeaderProps {
  name: string;
  bio: string;
  badgeText: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
}

export default function Header({ name, bio, badgeText, activeTab, setActiveTab, tabs }: HeaderProps) {
  return (
    <header className="w-full max-w-7xl mx-auto pt-16 pb-8 px-6 md:px-8 text-left">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 font-sans leading-none">
        {name}
      </h1>

      {/* Description Bio */}
      <p className="text-base text-foreground/75 max-w-2xl font-normal leading-relaxed mb-4">
        {bio}
      </p>

      {/* Badge Monospace */}
      <div className="font-mono text-xs md:text-sm text-[#00f2fe] font-medium tracking-wide mb-10 select-none">
        {badgeText}
      </div>

      {/* Tab Switcher */}
      <div className="inline-flex rounded-full bg-white/5 border border-white/5 p-1 relative overflow-hidden backdrop-blur-md">
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
                  className="absolute inset-0 bg-[#00f2fe] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
}
