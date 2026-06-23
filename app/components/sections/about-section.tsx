"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { aboutStats, EDUCATION, EXPERIENCE } from "@/app/data/portfolio";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SectionReveal } from "@/app/components/ui/section-reveal";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-[var(--line)] px-6 py-28 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <SectionReveal>
          <SectionHeader
            label="About"
            title="Design systems thinker who ships on the front end"
            description="I bridge Figma and code—owning clarity, accessibility, and polished UI delivery for teams that need one person from concept to production."
            icon={User}
            large
          />
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[var(--line)] pt-10">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <p className="font-display text-3xl font-bold text-[var(--ink)] md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <p className="eyebrow">Work timeline</p>
          <div className="mt-8 space-y-8">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={`${item.role}-${index}`}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group border-b border-[var(--line)] pb-8 last:border-0 last:pb-0"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--ink-soft)]">{item.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent-bright)]">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-[var(--ink-muted)]">
                  {item.company} · {item.location}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 border-t border-[var(--line)] pt-10">
            <p className="eyebrow">Education</p>
            <div className="mt-6 space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.degree}>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--ink-soft)]">{edu.date}</p>
                  <h4 className="mt-2 font-semibold text-[var(--ink)]">{edu.degree}</h4>
                  <p className="mt-1 text-sm text-[var(--accent-bright)]">{edu.school}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">{edu.note}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
