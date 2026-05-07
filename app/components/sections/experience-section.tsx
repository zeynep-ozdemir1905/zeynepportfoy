"use client";

import { EXPERIENCE } from "@/app/data/portfolio";
import { SectionReveal } from "@/app/components/ui/section-reveal";

export function ExperienceSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500">Experience & Leadership</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-800">Industry and community contributions</h2>
        </SectionReveal>
        <div className="mt-10 grid gap-5">
          {EXPERIENCE.map((item, index) => (
            <SectionReveal key={item.role} delay={index * 0.07}>
              <article className="rounded-2xl border border-rose-100 bg-white/75 p-6 shadow-[0_14px_36px_rgba(196,166,178,0.14)] backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{item.date}</p>
                <h3 className="mt-2 text-xl font-semibold text-stone-800">{item.role}</h3>
                <p className="mt-1 text-sm text-rose-500">{item.company} · {item.location}</p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm leading-relaxed text-stone-600">
                      • {bullet}
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
