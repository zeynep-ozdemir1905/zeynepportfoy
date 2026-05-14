"use client";

import { motion } from "framer-motion";
import { aboutStats, EDUCATION, EXPERIENCE } from "@/app/data/portfolio";
import { SectionReveal } from "@/app/components/ui/section-reveal";

const card =
  "rounded-3xl border border-rose-100/90 bg-white/90 p-8 shadow-md shadow-rose-200/20 backdrop-blur-sm";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionReveal className={card}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">About me</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-stone-800">
            UX/UI designer and front-end developer crafting refined digital products
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-stone-600">
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
                className="rounded-xl border border-rose-100/80 bg-[#fdfaf8] p-4"
              >
                <p className="text-2xl font-semibold text-[#C084A0]">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
        <SectionReveal delay={0.1} className={card}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Work timeline</p>
          <div className="mt-6 space-y-6">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative border-l border-rose-200/80 pl-6"
              >
                <span className="absolute -left-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-[#A78BCA]" />
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{item.date}</p>
                <h3 className="mt-1 text-base font-medium text-stone-800">{item.role}</h3>
                <p className="text-sm text-[#C084A0]">
                  {item.company} · {item.location}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Education</p>
            <div className="mt-4 grid gap-3">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="rounded-xl border border-rose-100/80 bg-[#fdfaf8] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{edu.date}</p>
                  <h4 className="mt-1 text-sm font-semibold text-stone-800">{edu.degree}</h4>
                  <p className="text-sm text-[#C084A0]">{edu.school}</p>
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
