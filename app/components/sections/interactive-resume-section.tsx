"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { useState } from "react";
import { EDUCATION, RESUME_PDF, RESUME_SUMMARY, SKILL_GROUPS, aboutStats } from "@/app/data/portfolio";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SectionReveal } from "@/app/components/ui/section-reveal";
import { easeOut } from "@/app/lib/motion";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills snapshot" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function InteractiveResumeSection() {
  const [active, setActive] = useState<TabId>("overview");

  return (
    <section id="resume" className="section-alt scroll-mt-28 px-6 py-28 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          icon={FileText}
          label="Resume"
          title="Proof points at a glance"
          description="Aligned with my ATS resume—switch tabs for summary, education, and skills, or download the full PDF."
          large
        />

        <SectionReveal delay={0.04} className="mt-8">
          <a href={RESUME_PDF.href} download={RESUME_PDF.fileName} className="btn-secondary inline-flex">
            <Download size={16} aria-hidden />
            {RESUME_PDF.label}
          </a>
        </SectionReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
          <SectionReveal delay={0.05} className="flex flex-row flex-wrap gap-2 lg:flex-col">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition lg:w-full ${
                  active === tab.id
                    ? "bg-[var(--ink)] text-white"
                    : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </SectionReveal>

          <SectionReveal delay={0.1} className="relative min-h-[280px] border-t border-[var(--line)] pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <AnimatePresence mode="wait">
              {active === "overview" ? (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="space-y-8"
                >
                  <div>
                    <p className="eyebrow">Professional summary</p>
                    <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">{RESUME_SUMMARY}</p>
                  </div>
                  <div className="grid gap-8 sm:grid-cols-2">
                    {aboutStats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-3xl font-bold text-[var(--ink)]">{stat.value}</p>
                        <p className="mt-2 text-sm text-[var(--ink-soft)]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null}

              {active === "education" ? (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="space-y-8"
                >
                  {EDUCATION.map((edu) => (
                    <div key={edu.degree} className="border-b border-[var(--line)] pb-8 last:border-0 last:pb-0">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--ink-soft)]">{edu.date}</p>
                      <h4 className="mt-2 text-lg font-semibold text-[var(--ink)]">{edu.degree}</h4>
                      <p className="mt-2 text-sm text-[var(--accent-bright)]">{edu.school}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{edu.note}</p>
                    </div>
                  ))}
                </motion.div>
              ) : null}

              {active === "skills" ? (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="space-y-8"
                >
                  {SKILL_GROUPS.map((g) => (
                    <div key={g.group}>
                      <p className="eyebrow">{g.group}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {g.items.map((item) => (
                          <span key={item} className="tag-minimal">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
