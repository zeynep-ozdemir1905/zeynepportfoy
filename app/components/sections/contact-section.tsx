"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { PROFILE, socials } from "@/app/data/portfolio";
import { MagneticButton } from "@/app/components/ui/magnetic-button";
import { SectionHeader } from "@/app/components/ui/section-header";
import { SectionReveal } from "@/app/components/ui/section-reveal";

const coffeeMail =
  `${PROFILE.emailHref}?subject=${encodeURIComponent("Interview / collaboration")}&body=${encodeURIComponent("Hi Zeynep,\n\nI came across your portfolio and would like to connect about...\n\n")}`;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 px-6 py-28"
      style={{
        background: "linear-gradient(150deg, #e0f2fe 0%, #dbeafe 40%, #f0f7ff 100%)",
      }}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_1.15fr]">
        <SectionReveal className="glass-card p-8">
          <SectionHeader
            icon={Mail}
            label="Let's talk"
            title="Ready to add value on your team"
            description="Full-time, co-op, or contract—I respond quickly and come prepared with work samples and clear communication."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -2 }}
                className="rounded-full border border-[#bfdbfe] bg-white px-4 py-2 text-xs font-semibold text-slate-600 hover:border-[#2563eb] hover:text-[#2563eb]"
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08} className="glass-card p-8">
          <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            {(["name", "email"] as const).map((id) => (
              <div key={id} className="relative">
                <input
                  id={id}
                  type={id === "email" ? "email" : "text"}
                  placeholder=" "
                  className="peer w-full rounded-xl border border-[#bfdbfe] bg-white px-4 pb-2 pt-6 text-sm text-[#0f172a] outline-none focus:border-[#2563eb]"
                />
                <label
                  htmlFor={id}
                  className="absolute left-4 top-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
                >
                  {id === "name" ? "Name" : "Email"}
                </label>
              </div>
            ))}
            <div className="relative">
              <textarea
                id="message"
                rows={5}
                placeholder=" "
                className="peer w-full rounded-xl border border-[#bfdbfe] bg-white px-4 pb-2 pt-6 text-sm text-[#0f172a] outline-none focus:border-[#2563eb]"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
              >
                Role or project you are hiring for
              </label>
            </div>
            <MagneticButton href={coffeeMail} variant="primary" className="w-full justify-center">
              Email me to interview <Send className="ml-2 h-4 w-4" />
            </MagneticButton>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
