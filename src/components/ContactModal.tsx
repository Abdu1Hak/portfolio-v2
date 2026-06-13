"use client";

import { useState, useEffect } from "react";
import { Mail, X, Check, Copy } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  github: string;
  linkedin: string;
}

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

export default function ContactModal({ isOpen, onClose, email, github, linkedin }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl glass-card border border-white/10 p-8 shadow-2xl text-center z-10 animate-in fade-in zoom-in duration-200">
        {/* Close icon top-right */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-foreground/60 hover:text-foreground hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6 font-sans">
          Contact Me
        </h3>

        <div className="space-y-4 text-left">
          {/* Email row with Copy option */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group">
            <div className="flex items-center gap-3 overflow-hidden">
              <Mail className="w-5 h-5 text-white shrink-0" />
              <span className="text-sm font-mono text-foreground/90 truncate select-all">
                {email}
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className="p-2 rounded-lg bg-white/5 text-foreground/70 hover:text-foreground hover:bg-white/10 transition-all shrink-0 ml-2"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-4.5 h-4.5 text-emerald-400" />
              ) : (
                <Copy className="w-4.5 h-4.5" />
              )}
            </button>
          </div>

          {/* GitHub link */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all text-foreground/90 hover:text-foreground group"
          >
            <GithubIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <div className="flex justify-between items-center w-full">
              <span className="text-sm font-medium">Github</span>
              <span className="text-xs font-mono text-foreground/40 group-hover:text-white/60 transition-colors">
                (Click Here)
              </span>
            </div>
          </a>

          {/* LinkedIn link */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all text-foreground/90 hover:text-foreground group"
          >
            <LinkedinIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <div className="flex justify-between items-center w-full">
              <span className="text-sm font-medium">LinkedIn</span>
              <span className="text-xs font-mono text-foreground/40 group-hover:text-white/60 transition-colors">
                (Click Here)
              </span>
            </div>
          </a>
        </div>

        {/* Close Button at bottom */}
        <button
          onClick={onClose}
          className="mt-8 w-full py-2.5 px-5 rounded-full border border-foreground/30 text-sm font-semibold hover:border-foreground/80 hover:bg-foreground hover:text-background transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
}
