"use client";

import { useState, useEffect } from "react";
import { Terminal, Moon, Sun } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Check local storage or default to dark
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else {
      document.documentElement.className = "dark";
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.className = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <nav className="w-full border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between backdrop-blur-md sticky top-0 z-40 bg-background/50">
      {/* Brand Logo */}
      <div className="flex items-center gap-2 text-[#00f2fe]">
        <Terminal className="w-5 h-5" />
        <span className="font-semibold text-[15px] font-mono tracking-tight">
          Student Portfolio
        </span>
      </div>

      {/* Utilities */}
      <div className="flex items-center gap-6">
        {/* Theme Toggler */}
        <button
          onClick={toggleTheme}
          className="text-foreground/80 hover:text-[#00f2fe] transition-colors p-1.5 rounded-lg hover:bg-white/5"
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {theme === "dark" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </button>

        {/* Contact Button */}
        <button
          onClick={onContactClick}
          className="border border-[#00f2fe]/40 hover:border-[#00f2fe] text-[#00f2fe] font-mono text-xs px-4 py-1.5 rounded-full hover:bg-[#00f2fe]/10 transition-all font-medium tracking-wide shadow-[0_0_15px_rgba(0,242,254,0.05)] hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
