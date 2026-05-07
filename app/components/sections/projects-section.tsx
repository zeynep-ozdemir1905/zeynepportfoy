"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { projects, Project } from "@/app/data/portfolio";
import { SectionReveal } from "@/app/components/ui/section-reveal";

const filters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-800">Selected work with premium interaction design</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                  activeFilter === filter
                    ? "border-rose-300 bg-rose-100 text-rose-500"
                    : "border-rose-100 bg-white/70 text-stone-600 hover:border-rose-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-rose-100 bg-white/75 shadow-[0_16px_40px_rgba(196,166,178,0.16)] backdrop-blur-xl"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-rose-200/65 opacity-70 blur-3xl transition group-hover:scale-110 group-hover:opacity-90" />
                <div className="relative h-52 overflow-hidden" style={{ background: project.accent }}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_40%)]" />
                  <div className="relative flex h-full items-end justify-between p-5">
                    <span className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium text-stone-700">
                      {project.number}
                    </span>
                    <button
                      onClick={() => setActiveProject(project)}
                      className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-700 transition hover:bg-white"
                    >
                      Open Preview
                    </button>
                  </div>
                </div>
                <div className="space-y-4 p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-rose-500">{project.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-stone-800">{project.title}</h3>
                    <p className="mt-2 text-sm text-stone-600">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((stack) => (
                      <span key={stack} className="rounded-full border border-rose-100 bg-[#fffaf7] px-3 py-1 text-xs text-stone-600">
                        {stack}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <a href="https://github.com/" className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-xs text-stone-700 hover:border-rose-300 hover:text-rose-500">
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                    <a href={project.live || project.figma || "#"} className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-xs text-stone-700 hover:border-rose-300 hover:text-rose-500">
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                    <button
                      onClick={() => setActiveProject(project)}
                      className="ml-auto text-xs uppercase tracking-[0.2em] text-violet-500 hover:text-rose-500"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#6b5b6645] p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-3xl rounded-2xl border border-rose-100 bg-white/95 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-rose-500">{activeProject.category}</p>
              <h3 className="mt-3 text-2xl font-semibold text-stone-800">{activeProject.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{activeProject.details}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {activeProject.tech.map((item) => (
                  <span key={item} className="rounded-full border border-rose-100 bg-[#fffaf7] px-3 py-1 text-xs text-stone-600">
                    {item}
                  </span>
                ))}
              </div>
              {(activeProject.figma || activeProject.live) && (
                <div className="mt-5 overflow-hidden rounded-xl border border-rose-100 bg-[#fffaf7]">
                  <iframe
                    src={activeProject.figma || activeProject.live}
                    title={activeProject.title}
                    className="h-64 w-full border-0"
                    loading="lazy"
                  />
                </div>
              )}
              <button
                onClick={() => setActiveProject(null)}
                className="mt-8 rounded-full border border-rose-200 px-5 py-2 text-xs uppercase tracking-[0.2em] text-stone-700 hover:border-rose-400 hover:text-rose-500"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
