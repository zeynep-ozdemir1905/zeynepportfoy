"use client";

import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/app/data/portfolio";
import { SectionReveal } from "@/app/components/ui/section-reveal";

export function SkillsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-800">Technical toolkit</h2>
        </SectionReveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((entry, index) => (
            <SectionReveal key={entry.group} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-rose-100 bg-white/75 p-5 shadow-[0_14px_36px_rgba(196,166,178,0.14)] backdrop-blur-xl"
              >
                <h3 className="text-sm uppercase tracking-[0.25em] text-rose-500">{entry.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.items.map((item) => (
                    <span key={item} className="rounded-full border border-rose-100 bg-[#fffaf7] px-3 py-1 text-xs text-stone-600">
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
