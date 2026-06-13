"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Play, ExternalLink, Share2 } from "lucide-react";
import { Project, Metric } from "@/data/portfolio";

interface ProjectsTabProps {
  projects: Project[];
  metrics: Metric[];
}

function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);
  const hasImageZoom = project.imageZoom !== undefined;
  const zoom = project.imageZoom;

  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden project-glass border border-white/5 group hover:border-white/20 transition-all duration-300">
      {/* Image Thumbnail Container */}
      <div className="h-48 md:h-52 w-full overflow-hidden relative border-b border-white/5 bg-[#080d1a]">
        {!imgError ? (
          <div className="w-full h-full relative flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImgError(true)}
                className={hasImageZoom ? "max-w-full max-h-full object-contain transition-transform duration-200" : "w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-500 ease-out"}
                style={hasImageZoom ? { transform: `scale(${zoom})` } : undefined}
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#080e22] via-[#091530] to-[#12284c] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Grid background inside placeholder */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(255,255,255,0.03)_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />
            <div className="font-mono text-[10px] uppercase text-white/40 tracking-widest mb-1.5">
              Thumbnail Placeholder
            </div>
            <div className="font-sans text-xs font-semibold text-foreground/60 max-w-[80%] line-clamp-2">
              {project.title}
            </div>
            <div className="text-[10px] text-foreground/30 font-mono mt-1">
              (upload image to: {project.image})
            </div>
          </div>
        )}
      </div>

      {/* Details Container */}
      <div className="p-5 flex flex-col justify-between flex-1 text-left">
        <div>
          {/* Header & Tags */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h3 className="text-sm font-bold tracking-tight text-foreground font-sans">
              {project.title}
            </h3>
            
            {/* Tech Tags */}
            <div className="flex gap-1.5 flex-wrap">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="font-mono text-[10px] font-medium px-2 py-0.5 rounded bg-white/10 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-foreground/70 leading-relaxed font-normal mb-4 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Action Link Icons */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {project.links?.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-white transition-colors p-1"
              title="View Source Code"
            >
              <Code2 className="w-4.5 h-4.5" />
            </a>
          )}

          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-white transition-colors p-1"
              title="Watch Demo Video"
            >
              <Play className="w-4.5 h-4.5" />
            </a>
          )}

          {project.links?.external && (
            <a
              href={project.links.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-white transition-colors p-1"
              title="Open Project"
            >
              <ExternalLink className="w-4.5 h-4.5" />
            </a>
          )}

          {project.links?.share && (
            <a
              href={project.links.share}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-white transition-colors p-1"
              title="Share Project Details"
            >
              <Share2 className="w-4.5 h-4.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsTab({ projects, metrics }: ProjectsTabProps) {
  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
      className="w-full max-w-[1200px] mx-auto px-4 md:px-6 space-y-10"
    >
      {/* Title Header */}
      <div className="flex items-center gap-1.5 mb-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground font-sans">
          Projects
        </h2>
      </div>
      {/* Horizontal rule aligned with project cards (thinner, extra spacing) */}
      <div className="w-full mb-6">
        <div className="w-full border-b-2 border-white/60 rounded-sm" />
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          (() => {
            const children: JSX.Element[] = [];
            projects.forEach((project, idx) => {
              const isWide = project.wide;
              const isLastProject = idx === projects.length - 1;

              children.push(
                <motion.div key={`proj-${idx}`} variants={item} className={`${isWide ? "md:col-span-2" : "md:col-span-1"} ${isLastProject ? "opacity-60 grayscale" : ""}`}>
                  <ProjectCard project={project} />
                </motion.div>
              );

              // After the last project, insert the 3+ metric tile so it appears to the right
              if (isLastProject) {
                const highlightMetric = metrics.find((m) => m.value === "3+" || /years of coding/i.test(m.label));
                if (highlightMetric) {
                  children.push(
                    <motion.div key={`metric-highlight`} variants={item} className="flex items-center justify-center">
                      <div className="rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 w-full max-w-xs text-center mx-auto shadow-sm">
                        <div className="text-3xl font-extrabold text-white tracking-tight mb-1 font-sans">{highlightMetric.value}</div>
                        <div className="text-[10px] md:text-xs font-mono font-medium text-foreground/40 uppercase tracking-widest leading-snug">{highlightMetric.label}</div>
                      </div>
                    </motion.div>
                  );
                }
              }
            });
            return children;
          })()
        }
      </div>

      {/* Metrics row removed per request (display underneath gallery) */}
    </motion.div>
  );
}
