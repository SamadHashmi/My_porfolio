"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social-icons";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  const portalColumns = project.portals && project.portals.length > 4 ? 3 : 2;

  return (
    <ScrollReveal className="h-full">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070708] transition-colors duration-300 hover:border-white/20"
        style={{ minHeight: 460 }}
        onClick={() => onSelect(project)}
      >
        <div
          className={`flex h-48 shrink-0 flex-col justify-between bg-gradient-to-br p-6 ${project.gradient}`}
        >
          <span className="w-fit rounded-full border border-white/25 bg-black/40 px-3 py-1 text-xs font-medium text-white">
            {project.category}
          </span>
          <h3 className="text-xl font-semibold leading-snug text-white">{project.title}</h3>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <p className="line-clamp-2 text-sm leading-6 text-zinc-400">{project.overview}</p>

          {project.portals && (
            <div>
              <p className="mb-2 text-xs font-medium text-zinc-500">
                {project.detailLabel ?? "Included"}
              </p>
              <div
                className="grid gap-2"
                style={{ gridTemplateColumns: `repeat(${portalColumns}, minmax(0, 1fr))` }}
              >
                {project.portals.map((portal) => (
                  <span
                    key={portal.name}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: project.accent }}
                    />
                    <span className="truncate text-xs font-medium text-zinc-100">{portal.name}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 px-2 py-1 text-xs text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0b] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div
          className={`mb-6 h-32 rounded-xl bg-gradient-to-br ${project.gradient}`}
        />

        <span className="text-xs font-medium uppercase tracking-widest text-cyan-400">
          {project.category}
        </span>
        <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.overview}</p>

        <div className="mt-6 space-y-4">
          <div>
            <h4 className="mb-1 text-sm font-medium text-white">Problem</h4>
            <p className="text-sm text-zinc-400">{project.problem}</p>
          </div>
          <div>
            <h4 className="mb-1 text-sm font-medium text-white">Solution</h4>
            <p className="text-sm text-zinc-400">{project.solution}</p>
          </div>
          {project.portals && (
            <div>
              <h4 className="mb-3 text-sm font-medium text-white">
                {project.detailLabel ?? "Details"}
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.portals.map((portal) => (
                  <div
                    key={portal.name}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4"
                    style={{ borderTopColor: project.accent, borderTopWidth: 2 }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: project.accent }}
                      />
                      <p className="text-sm font-medium text-white">{portal.name}</p>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{portal.access}</p>
                    <ul className="mt-3 space-y-1.5">
                      {portal.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs leading-relaxed text-zinc-400">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div>
            <h4 className="mb-2 text-sm font-medium text-white">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {(project.liveDemo || project.github) && (
          <div className="mt-8 flex gap-3">
            {project.liveDemo && (
              <Button variant="accent" size="sm" asChild>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.github && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="Government systems, an NFT marketplace, an alumni platform, healthcare, and Web3 products."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
