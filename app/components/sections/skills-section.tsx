"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { SKILL_GROUPS } from "@/app/data/portfolio";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SectionReveal } from "@/app/components/ui/section-reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="section-alt scroll-mt-28 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          icon={Layers}
          label="Skills"
          title="Skills"
          description="Skills I have gained through my education and experience"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((entry, index) => (
            <SectionReveal key={entry.group} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 320 }}
                className="glass-card h-full p-5"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-[#1e40af]">{entry.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#bfdbfe] bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
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
