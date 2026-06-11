"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Check, Copy, ArrowUpRight } from "lucide-react";

interface LinksTabProps {
  socials: {
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
}

const GithubIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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

const LinkedinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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

const TwitterIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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

export default function LinksTab({ socials }: LinksTabProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const linkItems = [
    {
      name: "GitHub",
      url: socials.github,
      description: "Explore my open-source repositories, developer tools, and projects.",
      icon: <GithubIcon className="w-6 h-6 text-[#00f2fe]" />,
      actionLabel: "github.com/abdulfarooqi",
    },
    {
      name: "LinkedIn",
      url: socials.linkedin,
      description: "Connect with me for professional updates, collaborations, and career opportunities.",
      icon: <LinkedinIcon className="w-6 h-6 text-[#00f2fe]" />,
      actionLabel: "linkedin.com/in/abdulfarooqi",
    },
    {
      name: "Twitter / X",
      url: socials.twitter,
      description: "Read my thoughts on technology developments, engineering systems, and ML research.",
      icon: <TwitterIcon className="w-6 h-6 text-[#00f2fe]" />,
      actionLabel: "@abdulfarooqi",
    },
    {
      name: "Curriculum Vitae",
      url: "/resume.pdf",
      description: "Download my professional resume detailing my technical achievements and experience.",
      icon: <FileText className="w-6 h-6 text-[#00f2fe]" />,
      actionLabel: "Download PDF",
      download: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-full max-w-7xl mx-auto px-6 md:px-8 text-left space-y-8"
    >
      <div className="flex items-center gap-1.5 mb-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground font-sans">
          Social Links
        </h2>
        <span className="w-3.5 h-6 bg-[#00f2fe] inline-block animate-pulse shrink-0 self-end mb-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Interactive copy email card */}
        <div 
          onClick={copyEmail}
          className="rounded-2xl glass-card border border-white/5 p-6 hover:border-[#00f2fe]/20 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between cursor-pointer group relative"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00f2fe] group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <button 
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-foreground/70 hover:text-foreground group-hover:bg-[#00f2fe]/10 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4.5 h-4.5 text-emerald-400" /> : <Copy className="w-4.5 h-4.5" />}
              </button>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-foreground font-sans mb-2">
              Email Address
            </h3>
            <p className="text-xs md:text-sm text-foreground/70 leading-relaxed font-normal mb-6">
              Reach out directly for research positions, contract work, or embedded systems collaboration.
            </p>
          </div>
          <div className="font-mono text-xs text-[#00f2fe] tracking-wide flex items-center gap-1.5 justify-end">
            <span className="truncate">{socials.email}</span>
            <span className="text-foreground/30 font-sans text-[10px] uppercase">
              {copied ? "(Copied)" : "(Copy)"}
            </span>
          </div>
        </div>

        {/* Other link item cards */}
        {linkItems.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            download={item.download}
            className="rounded-2xl glass-card border border-white/5 p-6 hover:border-[#00f2fe]/20 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00f2fe] group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 text-foreground/30 group-hover:text-[#00f2fe] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground font-sans mb-2">
                {item.name}
              </h3>
              <p className="text-xs md:text-sm text-foreground/70 leading-relaxed font-normal mb-6">
                {item.description}
              </p>
            </div>
            <div className="font-mono text-xs text-[#00f2fe] tracking-wide text-right truncate">
              {item.actionLabel}
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
