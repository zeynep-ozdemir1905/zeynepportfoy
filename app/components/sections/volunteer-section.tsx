"use client";

import { Heart } from "lucide-react";
import { VOLUNTEER } from "@/app/data/portfolio";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SectionReveal } from "@/app/components/ui/section-reveal";

export function VolunteerSection() {
  return (
    <section id="volunteer" className="section-alt scroll-mt-28 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          icon={Heart}
          label="Volunteer"
          title="Community leadership beyond the desk"
          description="Reliability, empathy, and follow-through—skills that transfer directly to cross-functional teams."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VOLUNTEER.map((role, index) => (
            <SectionReveal key={role.title} delay={index * 0.05}>
              <article className="glass-card flex h-full flex-col p-6">
                <h3 className="text-lg font-bold text-[#0f172a]">{role.title}</h3>
                {role.org ? <p className="mt-1 text-sm font-medium text-[#2563eb]">{role.org}</p> : null}
                {role.period ? (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{role.period}</p>
                ) : null}
                <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-slate-600">{role.description}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
