"use client";

import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/app/data/portfolio";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SectionReveal } from "@/app/components/ui/section-reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          icon={Briefcase}
          label="Experience"
          title="Roles where I owned UI and delivery"
          description="Enterprise, co-op, and community work—each with measurable outcomes for users and teams."
        />
        <div className="mt-12 grid gap-5">
          {EXPERIENCE.map((item, index) => (
            <SectionReveal key={`${item.role}-${index}`} delay={index * 0.06}>
              <article className="glass-card p-6 transition-shadow hover:shadow-lg hover:shadow-blue-200/20">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{item.date}</p>
                <h3 className="mt-2 text-xl font-bold text-[#0f172a]">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-[#2563eb]">
                  {item.company} · {item.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm font-light leading-relaxed text-slate-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#60a5fa]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
