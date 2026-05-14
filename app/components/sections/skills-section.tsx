"use client";

import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/app/data/portfolio";
import { SectionReveal } from "@/app/components/ui/section-reveal";

const card =
  "rounded-2xl border border-rose-100/90 bg-white/90 p-5 shadow-md shadow-rose-200/15 backdrop-blur-sm";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Skills</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-stone-800">Technical toolkit</h2>
        </SectionReveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((entry, index) => (
            <SectionReveal key={entry.group} delay={index * 0.05}>
              <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }} className={card}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C084A0]">{entry.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-rose-100 bg-[#fdfaf8] px-3 py-1 text-xs text-stone-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
