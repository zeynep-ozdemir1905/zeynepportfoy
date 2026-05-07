"use client";

import { Send } from "lucide-react";
import { socials } from "@/app/data/portfolio";
import { MagneticButton } from "@/app/components/ui/magnetic-button";
import { SectionReveal } from "@/app/components/ui/section-reveal";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_1.2fr]">
        <SectionReveal className="rounded-3xl border border-rose-100 bg-white/75 p-8 shadow-[0_14px_38px_rgba(196,166,178,0.15)] backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-800">Let&apos;s build something beautiful</h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            Open to internships, collaborations, and front-end product opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-rose-100 bg-white px-4 py-2 text-xs text-stone-700 hover:border-rose-300 hover:text-rose-500"
              >
                {social.label}
              </a>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className="rounded-3xl border border-rose-100 bg-white/75 p-8 shadow-[0_14px_38px_rgba(196,166,178,0.15)] backdrop-blur-xl">
          <form className="grid gap-4">
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder=" "
                className="peer w-full rounded-xl border border-rose-100 bg-white/90 px-4 pb-2 pt-6 text-sm text-stone-700 outline-none focus:border-rose-300"
              />
              <label htmlFor="name" className="absolute left-4 top-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                Name
              </label>
            </div>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder=" "
                className="peer w-full rounded-xl border border-rose-100 bg-white/90 px-4 pb-2 pt-6 text-sm text-stone-700 outline-none focus:border-rose-300"
              />
              <label htmlFor="email" className="absolute left-4 top-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                rows={5}
                placeholder=" "
                className="peer w-full rounded-xl border border-rose-100 bg-white/90 px-4 pb-2 pt-6 text-sm text-stone-700 outline-none focus:border-rose-300"
              />
              <label htmlFor="message" className="absolute left-4 top-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                Message
              </label>
            </div>
            <div className="pt-2">
              <MagneticButton href="mailto:barikazeynep2@gmail.com" className="w-full bg-gradient-to-r from-rose-200 to-violet-200 hover:from-rose-300 hover:to-violet-300">
                Send Message <Send className="ml-2 h-4 w-4" />
              </MagneticButton>
            </div>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
