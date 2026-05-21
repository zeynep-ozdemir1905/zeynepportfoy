"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { aboutStats, EDUCATION, EXPERIENCE } from "@/app/data/portfolio";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SectionReveal } from "@/app/components/ui/section-reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-alt scroll-mt-28 px-6 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionReveal className="glass-card p-8">
          <SectionHeader
            label="About me"
            title="Design systems thinker who ships on the front end"
            description="I bridge Figma and code—so hiring managers get one person who owns clarity, accessibility, and polished UI delivery."
            icon={User}
          />
          <div className="mt-8 grid grid-cols-2 gap-3">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-[#bfdbfe]/80 bg-[#f0f7ff] p-4"
              >
                <p className="text-2xl font-bold text-[#1e40af]">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
        <SectionReveal delay={0.08} className="glass-card p-8">
          <p className="eyebrow">Work timeline</p>
          <div className="mt-6 space-y-6">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={`${item.role}-${index}`}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="relative border-l-2 border-[#93c5fd] pl-6"
              >
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.date}</p>
                <h3 className="mt-1 font-semibold text-[#0f172a]">{item.role}</h3>
                <p className="text-sm font-medium text-[#2563eb]">
                  {item.company} · {item.location}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <p className="eyebrow">Education</p>
            <div className="mt-4 grid gap-3">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="rounded-xl border border-[#bfdbfe]/80 bg-[#f0f7ff] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{edu.date}</p>
                  <h4 className="mt-1 text-sm font-semibold text-[#0f172a]">{edu.degree}</h4>
                  <p className="text-sm text-[#2563eb]">{edu.school}</p>
                  <p className="mt-2 text-sm text-slate-600">{edu.note}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
