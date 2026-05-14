"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { EDUCATION, SKILL_GROUPS, aboutStats } from "@/app/data/portfolio";
import { SectionReveal } from "@/app/components/ui/section-reveal";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills snapshot" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const shell =
  "relative min-h-[280px] overflow-hidden rounded-3xl border border-rose-100/90 bg-white/90 p-8 shadow-md shadow-rose-200/20 backdrop-blur-sm";

export function InteractiveResumeSection() {
  const [active, setActive] = useState<TabId>("overview");

  return (
    <section id="resume" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Interactive resume</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-stone-800">Tap through the highlights</h2>
          <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-stone-600">
            A quick, playful tour of my background—switch tabs to explore education, stats, and skills without leaving the
            page.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[220px_1fr]">
          <SectionReveal delay={0.05} className="flex flex-wrap gap-2 lg:flex-col">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition lg:w-full ${
                  active === tab.id
                    ? "border-rose-300/60 bg-rose-50 text-rose-700 shadow-sm shadow-rose-200/40"
                    : "border-rose-100/80 bg-white/80 text-stone-500 hover:border-rose-200 hover:text-stone-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </SectionReveal>

          <SectionReveal delay={0.1} className={shell}>
            <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-rose-200/35 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-violet-200/30 blur-3xl" />

            <AnimatePresence mode="wait">
              {active === "overview" ? (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="relative grid gap-4 sm:grid-cols-2"
                >
                  {aboutStats.map((stat) => (
                    <button
                      key={stat.label}
                      type="button"
                      className="group rounded-2xl border border-rose-100/90 bg-[#fdfaf8] p-5 text-left transition hover:border-[#C084A0]/40 hover:bg-rose-50/80"
                    >
                      <p className="text-2xl font-semibold text-[#C084A0] transition-transform group-hover:scale-[1.02]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">{stat.label}</p>
                    </button>
                  ))}
                </motion.div>
              ) : null}

              {active === "education" ? (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="relative space-y-4"
                >
                  {EDUCATION.map((edu) => (
                    <details
                      key={edu.degree}
                      className="group rounded-2xl border border-rose-100/90 bg-[#fdfaf8] p-5 open:border-[#C084A0]/35 open:bg-rose-50/60"
                    >
                      <summary className="cursor-pointer list-none font-semibold text-stone-800 marker:hidden [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center justify-between gap-3">
                          {edu.degree}
                          <span className="text-xs font-normal uppercase tracking-[0.2em] text-rose-500/90">
                            Expand
                          </span>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-[#C084A0]">{edu.school}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">{edu.date}</p>
                      <p className="mt-1 text-xs text-stone-500">{edu.location}</p>
                      <p className="mt-3 text-sm font-light leading-relaxed text-stone-600">{edu.note}</p>
                    </details>
                  ))}
                </motion.div>
              ) : null}

              {active === "skills" ? (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="relative space-y-6"
                >
                  {SKILL_GROUPS.map((g) => (
                    <div key={g.group}>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">{g.group}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {g.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-rose-100 bg-white px-3 py-1 text-xs text-stone-600"
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
