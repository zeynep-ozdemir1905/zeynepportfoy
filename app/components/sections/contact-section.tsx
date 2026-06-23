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
    <section id="contact" className="section-alt scroll-mt-28 px-6 py-28 md:py-36">
      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <SectionReveal>
          <SectionHeader
            icon={Mail}
            label="Contact"
            title="Ready to add value on your team"
            description="Full-time, co-op, or contract—I respond quickly and come prepared with work samples and clear communication."
            large
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -2 }}
                className="tag-minimal"
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <form className="grid gap-5 border-t border-[var(--line)] pt-8 lg:border-t-0 lg:pt-0" onSubmit={(e) => e.preventDefault()}>
            {(["name", "email"] as const).map((id) => (
              <div key={id} className="relative">
                <input
                  id={id}
                  type={id === "email" ? "email" : "text"}
                  placeholder=" "
                  className="peer w-full border-b border-[var(--line-strong)] bg-transparent px-0 pb-3 pt-6 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--ink)]"
                />
                <label
                  htmlFor={id}
                  className="absolute left-0 top-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--ink-soft)]"
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
                className="peer w-full resize-none border-b border-[var(--line-strong)] bg-transparent px-0 pb-3 pt-6 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--ink)]"
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--ink-soft)]"
              >
                Role or project you are hiring for
              </label>
            </div>
            <MagneticButton href={coffeeMail} variant="primary" className="mt-4 w-full justify-center">
              Email me to interview <Send className="ml-2 h-4 w-4" />
            </MagneticButton>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
