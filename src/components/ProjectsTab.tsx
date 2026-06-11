"use client";

import { useState } from "react";
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
    <div className="flex flex-col h-full rounded-2xl overflow-hidden glass-card border border-white/5 group hover:border-[#00f2fe]/20 transition-all duration-300">
      {/* Image Thumbnail Container */}
      <div className="h-48 md:h-52 w-full overflow-hidden relative border-b border-white/5 bg-[#080d1a]">
        {!imgError ? (
          <div className="w-full h-full relative flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImgError(true)}
                className={hasImageZoom ? "max-w-full max-h-full object-contain transition-transform duration-200" : "w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500 ease-out"}
                style={hasImageZoom ? { transform: `scale(${zoom})` } : undefined}
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#080e22] via-[#091530] to-[#12284c] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Grid background inside placeholder */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,254,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,242,254,0.03)_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />
            <div className="font-mono text-[10px] uppercase text-[#00f2fe]/40 tracking-widest mb-1.5">
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
      <div className="p-6 flex flex-col justify-between flex-1 text-left">
        <div>
          {/* Header & Tags */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <h3 className="text-base font-bold tracking-tight text-foreground font-sans">
              {project.title}
            </h3>
            
            {/* Tech Tags */}
            <div className="flex gap-1.5 flex-wrap">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="font-mono text-[10px] font-medium px-2 py-0.5 rounded bg-[#00f2fe]/10 text-[#00f2fe]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-foreground/70 leading-relaxed font-normal mb-6 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Action Link Icons */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-[#00f2fe] transition-colors p-1"
              title="View Source Code"
            >
              <Code2 className="w-4.5 h-4.5" />
            </a>
          )}

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-[#00f2fe] transition-colors p-1"
              title="Watch Demo Video"
            >
              <Play className="w-4.5 h-4.5" />
            </a>
          )}

          {project.links.external && (
            <a
              href={project.links.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-[#00f2fe] transition-colors p-1"
              title="Open Project"
            >
              <ExternalLink className="w-4.5 h-4.5" />
            </a>
          )}

          {project.links.share && (
            <a
              href={project.links.share}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-[#00f2fe] transition-colors p-1"
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
      className="w-full max-w-7xl mx-auto px-6 md:px-8 space-y-12"
    >
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => {
          const isWide = project.wide;
          const isLastProject = idx === projects.length - 1;
          return (
            <motion.div
              key={idx}
              variants={item}
              className={`${isWide ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"} ${isLastProject ? "opacity-60 grayscale" : ""}`}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </div>

      {/* Metrics Row Section */}
      <motion.div 
        variants={item}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
      >
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/5 bg-[#0a1228]/20 backdrop-blur-md p-6 text-center group hover:border-[#00f2fe]/20 transition-all duration-300"
          >
            <div className="text-3xl font-extrabold text-[#00f2fe] tracking-tight mb-1 font-sans">
              {metric.value}
            </div>
            <div className="text-[10px] md:text-xs font-mono font-medium text-foreground/40 uppercase tracking-widest leading-snug">
              {metric.label}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
