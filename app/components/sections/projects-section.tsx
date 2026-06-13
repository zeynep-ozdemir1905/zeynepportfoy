"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, FolderKanban, Github, LayoutTemplate } from "lucide-react";
import { useMemo, useState } from "react";
import {
  projectEmbedSrc,
  projectPreviewLink,
  projects,
  Project,
  socials,
  UI_DESIGNS,
  UiDesign,
  uiDesignEmbedSrc,
  uiDesignPreviewLink,
} from "@/app/data/portfolio";
import { ProjectDevicePreview } from "@/app/components/ui/device-frame";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SectionReveal } from "@/app/components/ui/section-reveal";

const WORK_VIEWS = [
  {
    id: "development",
    label: "Development",
    description: "Capstone mobile apps, enterprise dashboards, and live demos—each shown in the device frame it was designed for.",
  },
  {
    id: "ui-design",
    label: "UI Design",
    description: "Figma files and prototypes—scroll, zoom, and explore the UI work behind each build.",
  },
] as const;

type WorkView = (typeof WORK_VIEWS)[number]["id"];

const filters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

function previewLabel(project: Project) {
  if (project.prototype) return "Prototype";
  if (project.live) return "Live";
  if (project.figma) return "Figma";
  return null;
}

function uiPreviewLabel(design: UiDesign) {
  if (design.prototype) return "Prototype";
  if (design.figmaLink) return "Figma file";
  if (design.figma) return "Figma";
  return null;
}

export function ProjectsSection() {
  const [workView, setWorkView] = useState<WorkView>("development");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeDesign, setActiveDesign] = useState<UiDesign | null>(null);

  const activeView = WORK_VIEWS.find((view) => view.id === workView) ?? WORK_VIEWS[0];

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          icon={FolderKanban}
          label="Projects"
          title="Shipped work you can evaluate in one sitting"
          description={activeView.description}
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {WORK_VIEWS.map((view) => (
            <button
              key={view.id}
              type="button"
              onClick={() => setWorkView(view.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition ${
                workView === view.id
                  ? "border-[#2563eb]/50 bg-[#1e3a5f] text-white shadow-md"
                  : "border-[#bfdbfe] bg-white/90 text-slate-600 hover:border-[#93c5fd]"
              }`}
            >
              {view.id === "ui-design" ? <LayoutTemplate className="h-3.5 w-3.5" /> : null}
              {view.label}
            </button>
          ))}
        </motion.div>

        {workView === "development" ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap justify-center gap-2"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
                    activeFilter === filter
                      ? "border-[#2563eb]/50 bg-[#2563eb] text-white shadow-md"
                      : "border-[#bfdbfe] bg-white/90 text-slate-600 hover:border-[#93c5fd]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {filtered.map((project, index) => (
                <SectionReveal key={project.id} delay={index * 0.05}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="glass-card group relative overflow-hidden"
                  >
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#93c5fd]/35 opacity-70 blur-3xl transition group-hover:opacity-100" />

                    <div
                      className="relative border-b border-[#bfdbfe]/60"
                      style={{ background: project.accent }}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_50%)]" />
                      <div className="relative">
                        <ProjectDevicePreview
                          variant={project.device}
                          accent={project.accent}
                          title={project.title}
                        />
                        <div className="absolute left-4 top-4 z-20 flex items-start justify-between gap-2 sm:right-4">
                          <span className="rounded-full bg-[#0f172a]/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                            {project.number}
                          </span>
                          <button
                            type="button"
                            onClick={() => setActiveProject(project)}
                            className="rounded-full border border-white/50 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0f172a] shadow-sm transition hover:bg-white"
                          >
                            Open preview
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 p-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563eb]">
                          {project.category}
                          <span className="mx-2 text-slate-300">·</span>
                          <span className="text-slate-500">
                            {project.device === "mobile"
                              ? "Mobile frame"
                              : project.device === "desktop"
                                ? "Desktop frame"
                                : "Desktop + mobile"}
                          </span>
                        </p>
                        <h3 className="font-display mt-2 text-xl font-bold text-[#0f172a]">{project.title}</h3>
                        <p className="mt-2 text-sm font-light text-slate-600">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((stack) => (
                          <span
                            key={stack}
                            className="rounded-full border border-[#bfdbfe] bg-[#f0f7ff] px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href={socials.find((s) => s.label === "GitHub")?.href ?? "https://github.com/"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:text-[#2563eb]"
                        >
                          <Github className="h-3.5 w-3.5" /> GitHub
                        </a>
                        {projectPreviewLink(project) ? (
                          <a
                            href={projectPreviewLink(project)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:text-[#2563eb]"
                          >
                            <ExternalLink className="h-3.5 w-3.5" /> {previewLabel(project)}
                          </a>
                        ) : null}
                        <button
                          type="button"
                          onClick={() => setActiveProject(project)}
                          className="ml-auto text-xs font-bold uppercase tracking-[0.16em] text-[#1e40af] hover:text-[#2563eb]"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </motion.article>
                </SectionReveal>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {UI_DESIGNS.map((design, index) => {
              const embedSrc = uiDesignEmbedSrc(design);
              const previewLink = uiDesignPreviewLink(design);

              return (
                <SectionReveal key={design.id} delay={index * 0.05}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="glass-card group overflow-hidden"
                  >
                    <div
                      className="relative border-b border-[#bfdbfe]/60"
                      style={{ background: design.accent }}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_50%)]" />
                      <div className="relative px-4 pt-4">
                        <span className="inline-flex rounded-full bg-[#0f172a]/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                          {design.number}
                        </span>
                      </div>
                      <div className="relative">
                        {embedSrc ? (
                          <ProjectDevicePreview
                            variant={design.device}
                            accent={design.accent}
                            title={design.title}
                            src={embedSrc}
                            interactive
                          />
                        ) : (
                          <div className="flex min-h-[280px] flex-col items-center justify-center gap-3 px-6 py-10 text-center">
                            <LayoutTemplate className="h-8 w-8 text-[#2563eb]/70" />
                            <p className="max-w-sm text-sm text-slate-600">
                              Paste your Figma embed URL into <code className="text-[#1e40af]">figma</code> in{" "}
                              <code className="text-[#1e40af]">UI_DESIGNS</code> to preview this design here.
                            </p>
                            {previewLink ? (
                              <a
                                href={previewLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-white px-4 py-2 text-xs font-semibold text-[#2563eb]"
                              >
                                <ExternalLink className="h-3.5 w-3.5" /> {uiPreviewLabel(design)}
                              </a>
                            ) : null}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 p-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563eb]">UI Design</p>
                        <h3 className="font-display mt-2 text-xl font-bold text-[#0f172a]">{design.title}</h3>
                        <p className="mt-2 text-sm font-light text-slate-600">{design.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {design.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#bfdbfe] bg-[#f0f7ff] px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {previewLink ? (
                          <a
                            href={previewLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:text-[#2563eb]"
                          >
                            <ExternalLink className="h-3.5 w-3.5" /> {uiPreviewLabel(design)}
                          </a>
                        ) : null}
                        {embedSrc ? (
                          <button
                            type="button"
                            onClick={() => setActiveDesign(design)}
                            className="ml-auto text-xs font-bold uppercase tracking-[0.16em] text-[#1e40af] hover:text-[#2563eb]"
                          >
                            Full preview
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </motion.article>
                </SectionReveal>
              );
            })}
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0f172a]/50 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(event) => event.stopPropagation()}
              className="glass-card max-h-[92vh] w-full max-w-4xl overflow-y-auto p-6 md:p-8"
            >
              <p className="eyebrow">{activeProject.category}</p>
              <h3 className="font-display mt-2 text-2xl font-bold text-[#0f172a]">{activeProject.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-slate-600">{activeProject.details}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeProject.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#bfdbfe] bg-[#f0f7ff] px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div
                className="relative mt-6 overflow-hidden rounded-2xl border border-[#bfdbfe]"
                style={{ background: activeProject.accent }}
              >
                <ProjectDevicePreview
                  variant={activeProject.device}
                  accent={activeProject.accent}
                  title={activeProject.title}
                  src={projectEmbedSrc(activeProject)}
                  interactive={!!projectEmbedSrc(activeProject)}
                  className={activeProject.device === "dual" ? "min-h-[320px]" : ""}
                />
                {activeProject.prototype && !projectEmbedSrc(activeProject) ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0f172a]/5 p-8">
                    <p className="max-w-sm text-center text-sm text-slate-600">
                      Interactive Figma prototype — opens in a new tab for the full walkthrough.
                    </p>
                    <a
                      href={activeProject.prototype}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary inline-flex gap-2"
                    >
                      <ExternalLink className="h-4 w-4" /> Open Figma prototype
                    </a>
                  </div>
                ) : null}
              </div>

              {projectPreviewLink(activeProject) ? (
                <a
                  href={projectPreviewLink(activeProject)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  {activeProject.prototype
                    ? "Open Figma prototype in new tab"
                    : "Open full preview in new tab"}
                </a>
              ) : null}

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="mt-6 rounded-full border border-[#93c5fd] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-600 hover:bg-[#dbeafe]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activeDesign ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0f172a]/50 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDesign(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(event) => event.stopPropagation()}
              className="glass-card max-h-[92vh] w-full max-w-5xl overflow-y-auto p-6 md:p-8"
            >
              <p className="eyebrow">UI Design</p>
              <h3 className="font-display mt-2 text-2xl font-bold text-[#0f172a]">{activeDesign.title}</h3>
              {activeDesign.details ? (
                <p className="mt-3 text-sm font-light leading-relaxed text-slate-600">{activeDesign.details}</p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {activeDesign.tags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#bfdbfe] bg-[#f0f7ff] px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div
                className="relative mt-6 overflow-hidden rounded-2xl border border-[#bfdbfe]"
                style={{ background: activeDesign.accent }}
              >
                <ProjectDevicePreview
                  variant={activeDesign.device}
                  accent={activeDesign.accent}
                  title={activeDesign.title}
                  src={uiDesignEmbedSrc(activeDesign)}
                  interactive={!!uiDesignEmbedSrc(activeDesign)}
                />
              </div>

              {uiDesignPreviewLink(activeDesign) ? (
                <a
                  href={uiDesignPreviewLink(activeDesign)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in Figma
                </a>
              ) : null}

              <button
                type="button"
                onClick={() => setActiveDesign(null)}
                className="mt-6 rounded-full border border-[#93c5fd] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-600 hover:bg-[#dbeafe]"
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
