"use client";

import { Terminal } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  return (
    <nav className="w-full border-b border-white/5 py-4 px-6 md:px-8 backdrop-blur-md sticky top-0 z-40 bg-background/50">
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 text-white">
          <Terminal className="w-5 h-5" />
          <span className="font-semibold text-[15px] font-mono tracking-tight">
            Student Portfolio
          </span>
        </div>

        {/* Utilities */}
        <div className="flex items-center gap-6">
          {/* Contact Button */}
          <button
            onClick={onContactClick}
            className="border border-white/30 hover:border-white text-white font-mono text-xs px-4 py-1.5 rounded-full hover:bg-white/10 transition-all font-medium tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
