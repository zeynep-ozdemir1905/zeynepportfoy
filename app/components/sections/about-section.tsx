"use client";

import { motion } from "framer-motion";
import { aboutStats, EDUCATION, EXPERIENCE } from "@/app/data/portfolio";
import { SectionReveal } from "@/app/components/ui/section-reveal";

export function AboutSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionReveal className="rounded-3xl border border-rose-100 bg-white/70 p-8 shadow-[0_14px_45px_rgba(196,166,178,0.15)] backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500">About Me</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-800">Creative technologist with an eye for elegant UI systems</h2>
          <p className="mt-5 text-sm leading-relaxed text-stone-600">
            I specialize in UX/UI design and front-end development, creating refined products with smooth interactions,
            responsive architecture, and accessibility-first thinking.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="rounded-xl border border-rose-100 bg-[#fffaf7] p-4"
              >
                <p className="text-2xl font-semibold text-rose-500">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
        <SectionReveal delay={0.1} className="rounded-3xl border border-rose-100 bg-white/70 p-8 shadow-[0_14px_45px_rgba(196,166,178,0.15)] backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500">Experience Timeline</p>
          <div className="mt-6 space-y-6">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative border-l border-rose-200 pl-6"
              >
                <span className="absolute -left-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-violet-300" />
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{item.date}</p>
                <h3 className="mt-1 text-base font-medium text-stone-800">{item.role}</h3>
                <p className="text-sm text-rose-500">{item.company} · {item.location}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-500">Education</p>
            <div className="mt-4 grid gap-3">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="rounded-xl border border-rose-100 bg-[#fffaf7] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{edu.date}</p>
                  <h4 className="mt-1 text-sm font-semibold text-stone-800">{edu.degree}</h4>
                  <p className="text-sm text-rose-500">{edu.school}</p>
                  <p className="mt-1 text-xs text-stone-500">{edu.location}</p>
                  <p className="mt-2 text-sm text-stone-600">{edu.note}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
