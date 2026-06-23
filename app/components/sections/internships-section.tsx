"use client";

import { Building2 } from "lucide-react";
import { INTERNSHIPS } from "@/app/data/portfolio";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SectionReveal } from "@/app/components/ui/section-reveal";

export function InternshipsSection() {
  return (
    <section id="internships" className="scroll-mt-28 border-t border-[var(--line)] px-6 py-28 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          icon={Building2}
          label="Internships"
          title="Industry experience under real deadlines"
          description="Hands-on contracts where design met production code."
          large
        />
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {INTERNSHIPS.map((item, index) => (
            <SectionReveal key={`${item.org}-${item.title}`} delay={index * 0.06}>
              <article className="h-full border-t border-[var(--line)] pt-8">
                <p className="text-sm font-medium text-[var(--ink-soft)]">{item.date}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--accent-bright)]">
                  {item.org} · {item.location}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-bright)]" />
                      {line}
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
