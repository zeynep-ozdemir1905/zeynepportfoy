"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useState } from "react";
import { EDUCATION, SKILL_GROUPS, aboutStats } from "@/app/data/portfolio";
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
    <section id="resume" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          icon={FileText}
          label="Interactive resume"
          title="Proof points at a glance"
          description="Switch tabs to see stats, education, and skills—built for recruiters who skim in under a minute."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[220px_1fr]">
          <SectionReveal delay={0.05} className="flex flex-wrap gap-2 lg:flex-col">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition lg:w-full ${
                  active === tab.id
                    ? "border-[#2563eb]/40 bg-[#dbeafe] text-[#1e40af] shadow-md shadow-blue-200/30"
                    : "border-[#bfdbfe] bg-white/90 text-slate-500 hover:border-[#93c5fd]"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </SectionReveal>

          <SectionReveal delay={0.1} className="glass-card relative min-h-[280px] overflow-hidden p-8">
            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#93c5fd]/25 blur-3xl" />

            <AnimatePresence mode="wait">
              {active === "overview" ? (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="relative grid gap-4 sm:grid-cols-2"
                >
                  {aboutStats.map((stat) => (
                    <motion.button
                      key={stat.label}
                      type="button"
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="rounded-2xl border border-[#bfdbfe] bg-[#f0f7ff] p-5 text-left"
                    >
                      <p className="text-2xl font-bold text-[#1e40af]">{stat.value}</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
                    </motion.button>
                  ))}
                </motion.div>
              ) : null}

              {active === "education" ? (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="relative space-y-4"
                >
                  {EDUCATION.map((edu) => (
                    <details
                      key={edu.degree}
                      className="group rounded-2xl border border-[#bfdbfe] bg-[#f0f7ff] p-5 open:border-[#2563eb]/40 open:bg-[#dbeafe]/50"
                    >
                      <summary className="cursor-pointer list-none font-semibold text-[#0f172a] marker:hidden [&::-webkit-details-marker]:hidden">
                        {edu.degree}
                      </summary>
                      <p className="mt-3 text-sm font-medium text-[#2563eb]">{edu.school}</p>
                      <p className="mt-3 text-sm text-slate-600">{edu.note}</p>
                    </details>
                  ))}
                </motion.div>
              ) : null}

              {active === "skills" ? (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="relative space-y-6"
                >
                  {SKILL_GROUPS.map((g) => (
                    <div key={g.group}>
                      <p className="eyebrow">{g.group}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {g.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#bfdbfe] bg-white px-3 py-1 text-xs font-medium text-slate-700"
                          >
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
