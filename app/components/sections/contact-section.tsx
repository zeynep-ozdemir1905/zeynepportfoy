"use client";

import { Send } from "lucide-react";
import { PROFILE, socials } from "@/app/data/portfolio";
import { MagneticButton } from "@/app/components/ui/magnetic-button";
import { SectionReveal } from "@/app/components/ui/section-reveal";

const coffeeMail =
  `${PROFILE.emailHref}?subject=${encodeURIComponent("Coffee chat")}&body=${encodeURIComponent("Hi Zeynep,\n\nI'd love to grab a virtual or in-person coffee to chat about...\n\n")}`;

const panel =
  "rounded-3xl border border-rose-100/90 bg-white/90 p-8 shadow-md shadow-rose-200/20 backdrop-blur-sm";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 px-6 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_1.2fr]">
        <SectionReveal className={panel}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Coffee chat</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-stone-800">Book a coffee chat</h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-stone-600">
            I would love to hear from you—whether you are hiring, mentoring, or exploring a collaboration. Send a note and
            we will find time for a relaxed conversation.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                data-cursor-big
                className="rounded-full border border-rose-100 bg-[#fdfaf8] px-4 py-2 text-xs text-stone-600 transition hover:border-rose-300/70 hover:text-rose-600"
              >
                {social.label}
              </a>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className={panel}>
          <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder=" "
                className="peer w-full rounded-xl border border-rose-100/90 bg-white px-4 pb-2 pt-6 text-sm text-stone-800 outline-none focus:border-[#C084A0]/60"
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
                className="peer w-full rounded-xl border border-rose-100/90 bg-white px-4 pb-2 pt-6 text-sm text-stone-800 outline-none focus:border-[#C084A0]/60"
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
                className="peer w-full rounded-xl border border-rose-100/90 bg-white px-4 pb-2 pt-6 text-sm text-stone-800 outline-none focus:border-[#C084A0]/60"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-xs uppercase tracking-[0.2em] text-stone-500"
              >
                What you would like to chat about
              </label>
            </div>
            <div className="pt-2">
              <MagneticButton
                href={coffeeMail}
                cursorBlend
                className="w-full border-transparent bg-linear-to-r from-[#E8B4C0] to-[#C084A0] text-white hover:from-[#f0c4ce] hover:to-[#c994a8]"
              >
                Open email to collaborate <Send className="ml-2 h-4 w-4" />
              </MagneticButton>
            </div>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
