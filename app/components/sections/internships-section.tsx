"use client";

import { INTERNSHIPS } from "@/app/data/portfolio";
import { SectionReveal } from "@/app/components/ui/section-reveal";

const articleClass =
  "h-full rounded-2xl border border-rose-100/90 bg-white/90 p-6 shadow-md shadow-rose-200/15 backdrop-blur-sm";

export function InternshipsSection() {
  return (
    <section id="internships" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Internships</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-stone-800">Hands-on industry experience</h2>
          <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-stone-600">
            Co-ops and contracts where I shipped real UI, collaborated with developers, and learned how teams ship under
            pressure.
          </p>
        </SectionReveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {INTERNSHIPS.map((item, index) => (
            <SectionReveal key={`${item.org}-${item.title}`} delay={index * 0.06}>
              <article className={articleClass}>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{item.date}</p>
                <h3 className="mt-2 text-xl font-semibold text-stone-800">{item.title}</h3>
                <p className="mt-1 text-sm text-[#C084A0]">
                  {item.org} · {item.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((line) => (
                    <li key={line} className="text-sm font-light leading-relaxed text-stone-600">
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
