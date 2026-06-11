"use client";

import { Mail } from "lucide-react";

interface FooterProps {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  version: string;
  onEmailClick: () => void;
}

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer({ email, github, linkedin, twitter, version, onEmailClick }: FooterProps) {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12 mt-20 border-t border-white/5 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
        {/* Left column pitching text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-foreground mb-3 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe]">
              Let's Connect!
            </span>
          </h2>
          <p className="text-xs md:text-sm text-foreground/70 leading-relaxed max-w-sm">
            Open to collaborating on robotics, research, and high-performance computing.
          </p>
        </div>

        {/* Right column: 4 social links grid */}
        <div className="grid grid-cols-2 gap-3.5">
          {/* Email card trigger */}
          <button
            onClick={onEmailClick}
            className="flex items-center gap-3 p-4 rounded-xl glass-card border border-white/5 hover:border-[#00f2fe]/25 hover:bg-white/[0.03] transition-all text-left group cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#00f2fe] shrink-0" />
            <span className="text-xs font-mono font-medium text-foreground/80 group-hover:text-foreground">
              Email
            </span>
          </button>

          {/* LinkedIn card */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl glass-card border border-white/5 hover:border-[#00f2fe]/25 hover:bg-white/[0.03] transition-all text-left group cursor-pointer"
          >
            <LinkedinIcon className="w-4 h-4 text-[#00f2fe] shrink-0" />
            <span className="text-xs font-mono font-medium text-foreground/80 group-hover:text-foreground">
              LinkedIn
            </span>
          </a>

          {/* GitHub card */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl glass-card border border-white/5 hover:border-[#00f2fe]/25 hover:bg-white/[0.03] transition-all text-left group cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-[#00f2fe] shrink-0" />
            <span className="text-xs font-mono font-medium text-foreground/80 group-hover:text-foreground">
              GitHub
            </span>
          </a>

          {/* Twitter card */}
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl glass-card border border-white/5 hover:border-[#00f2fe]/25 hover:bg-white/[0.03] transition-all text-left group cursor-pointer"
          >
            <TwitterIcon className="w-4 h-4 text-[#00f2fe] shrink-0" />
            <span className="text-xs font-mono font-medium text-foreground/80 group-hover:text-foreground">
              Twitter
            </span>
          </a>
        </div>
      </div>

      {/* Footer bottom metadata */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 font-mono text-[10px] md:text-xs text-foreground/30">
        <div>
          © {new Date().getFullYear()} Abdul Farooqi • Built with Precision & Code
        </div>
        <div className="text-[#00f2fe] font-semibold">
          {version}
        </div>
      </div>
    </footer>
  );
}
