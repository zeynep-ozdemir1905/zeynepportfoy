"use client";

import { VOLUNTEER } from "@/app/data/portfolio";
import { SectionReveal } from "@/app/components/ui/section-reveal";

const articleClass =
  "flex h-full flex-col rounded-2xl border border-rose-100/90 bg-gradient-to-b from-white to-[#fdfaf8] p-6 shadow-md shadow-rose-200/15 backdrop-blur-sm";

export function VolunteerSection() {
  return (
    <section id="volunteer" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Volunteer</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-stone-800">Community & impact</h2>
          <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-stone-600">
            Fundraising, design support, tutoring, and digital engagement—roles where empathy and reliability matter as
            much as craft.
          </p>
        </SectionReveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VOLUNTEER.map((role, index) => (
            <SectionReveal key={role.title} delay={index * 0.05}>
              <article className={articleClass}>
                <h3 className="text-lg font-semibold text-stone-800">{role.title}</h3>
                {role.org ? <p className="mt-1 text-sm text-[#C084A0]">{role.org}</p> : null}
                {role.period ? (
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">{role.period}</p>
                ) : null}
                <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-stone-600">{role.description}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
