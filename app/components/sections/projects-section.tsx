"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { projects, Project, socials } from "@/app/data/portfolio";
import { SectionReveal } from "@/app/components/ui/section-reveal";

const filters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

const card =
  "group relative overflow-hidden rounded-2xl border border-rose-100/90 bg-white/90 shadow-lg shadow-rose-200/25 backdrop-blur-sm";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Projects</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-stone-800">
            Selected work with premium interaction design
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] transition ${
                  activeFilter === filter
                    ? "border-rose-300/70 bg-rose-50 text-rose-700"
                    : "border-rose-100/90 bg-white/80 text-stone-500 hover:border-rose-200"
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
              <motion.article whileHover={{ y: -8 }} className={card}>
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-rose-200/50 opacity-80 blur-3xl transition group-hover:scale-110 group-hover:opacity-100" />
                <div className="relative h-52 overflow-hidden" style={{ background: project.accent }}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.65),transparent_42%)]" />
                  <div className="relative flex h-full items-end justify-between p-5">
                    <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-stone-800 shadow-sm backdrop-blur-sm">
                      {project.number}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="rounded-full border border-stone-200/80 bg-white/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-700 shadow-sm transition hover:bg-white"
                    >
                      Open Preview
                    </button>
                  </div>
                </div>
                <div className="space-y-4 p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#C084A0]">{project.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-stone-800">{project.title}</h3>
                    <p className="mt-2 text-sm font-light text-stone-600">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((stack) => (
                      <span
                        key={stack}
                        className="rounded-full border border-rose-100 bg-[#fdfaf8] px-3 py-1 text-xs text-stone-600"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={socials.find((s) => s.label === "GitHub")?.href ?? "https://github.com/"}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-big
                      className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-xs text-stone-600 transition hover:border-rose-300 hover:text-rose-600"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                    <a
                      href={project.live || project.figma || "#"}
                      data-cursor-big
                      className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-xs text-stone-600 transition hover:border-rose-300 hover:text-rose-600"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="ml-auto text-xs font-medium uppercase tracking-[0.2em] text-[#9B7EC8] hover:text-rose-600"
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
            className="fixed inset-0 z-[80] flex items-center justify-center bg-stone-900/25 p-4 backdrop-blur-sm"
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
              className="w-full max-w-3xl rounded-2xl border border-rose-100/90 bg-white p-6 shadow-2xl shadow-rose-200/30"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">{activeProject.category}</p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-stone-800">{activeProject.title}</h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-stone-600">{activeProject.details}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {activeProject.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-rose-100 bg-[#fdfaf8] px-3 py-1 text-xs text-stone-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {(activeProject.figma || activeProject.live) && (
                <div className="mt-5 overflow-hidden rounded-xl border border-rose-100 bg-[#fdfaf8]">
                  <iframe
                    src={activeProject.figma || activeProject.live}
                    title={activeProject.title}
                    className="h-64 w-full border-0"
                    loading="lazy"
                  />
                </div>
              )}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="mt-8 rounded-full border border-rose-200 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-600 transition hover:border-rose-400 hover:text-stone-900"
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
