"use client";

import { Building2 } from "lucide-react";
import { INTERNSHIPS } from "@/app/data/portfolio";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SectionReveal } from "@/app/components/ui/section-reveal";

export function InternshipsSection() {
  return (
    <section id="internships" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          icon={Building2}
          label="Internships"
          title="Industry experience under real deadlines"
          description="Hands-on contracts where design met production code."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {INTERNSHIPS.map((item, index) => (
            <SectionReveal key={`${item.org}-${item.title}`} delay={index * 0.06}>
              <article className="glass-card h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{item.date}</p>
                <h3 className="mt-2 text-xl font-bold text-[#0f172a]">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#2563eb]">
                  {item.org} · {item.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((line) => (
                    <li key={line} className="text-sm font-light leading-relaxed text-slate-600">
                      • {line}
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
