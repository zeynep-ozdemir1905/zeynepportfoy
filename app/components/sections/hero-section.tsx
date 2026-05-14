"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, GraduationCap, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { MagneticButton } from "@/app/components/ui/magnetic-button";
import { PROFILE, rotatingTitles, socials } from "@/app/data/portfolio";
import { useEffect, useState } from "react";

const iconMap = { GitHub: Github, LinkedIn: Linkedin, Email: Mail } as const;

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2200);
    return () => window.clearInterval(interval);
  }, []);

  const webSocials = socials.filter((s) => s.label !== "Email");

  return (
    <section
      id="intro"
      className="relative flex min-h-screen scroll-mt-28 items-center overflow-hidden px-6 pb-16 pt-32 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 6, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -top-32 h-[min(700px,90vw)] w-[min(700px,90vw)] rounded-[50%_0_50%_0] opacity-[0.12]"
          style={{ background: "linear-gradient(135deg, #FBDCE8, #E8B4C0)" }}
        />
        <motion.div
          animate={{ rotate: [0, -5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-16 -left-16 h-72 w-72 rounded-[50%_0_50%_0] opacity-[0.1]"
          style={{ background: "linear-gradient(135deg, #F5C6D8, #A78BCA)" }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_380px]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{
                background: "rgba(253,240,245,0.9)",
                borderColor: "rgba(232,180,192,0.45)",
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-emerald-400"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rose-500">
                Open to opportunities · {PROFILE.city}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05 }}
              className="font-display text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-stone-800"
            >
              Zeynep
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #E8B4C0 0%, #C084A0 45%, #A78BCA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ozdemir
              </span>
            </motion.h1>

            <motion.div
              key={titleIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-lg font-light text-stone-500 md:text-2xl"
            >
              {rotatingTitles[titleIndex]}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="mt-8 max-w-xl text-base font-light leading-relaxed text-stone-600"
            >
              I design warm, accessible interfaces with a soft-luxury feel—pairing UI craft with frontend engineering so
              products feel polished and human.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <MagneticButton
                href="#projects"
                className="border-transparent bg-linear-to-r from-[#E8B4C0] to-[#C084A0] text-white shadow-[0_12px_40px_rgba(192,132,160,0.3)] hover:from-[#f0c4ce] hover:to-[#c994a8]"
              >
                View projects <ArrowUpRight className="ml-2 h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="border-stone-200 bg-white/90 text-stone-700 hover:border-rose-200 hover:text-stone-900"
              >
                Book a coffee chat
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              {webSocials.map(({ label, href }) => {
                const Icon = iconMap[label as keyof typeof iconMap];
                if (!Icon) return null;
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-big
                    whileHover={{ y: -2, color: "#C084A0" }}
                    className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-stone-500"
                  >
                    <Icon size={15} /> {label}
                  </motion.a>
                );
              })}
              <motion.a
                href={PROFILE.emailHref}
                data-cursor-big
                whileHover={{ y: -2, color: "#C084A0" }}
                className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-stone-500"
              >
                <Mail size={15} /> Email
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            whileHover={{ rotate: -0.5, scale: 1.01 }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.32, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-4 rounded-4xl blur-2xl"
              style={{ background: "linear-gradient(135deg, #E8B4C0, #A78BCA)" }}
            />
            <div className="relative rounded-4xl border border-rose-100 bg-white p-8 shadow-xl shadow-rose-200/25">
              <div
                className="font-display mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl text-3xl font-bold text-white shadow-lg"
                style={{ background: "linear-gradient(135deg, #F5C6D8, #C084A0)" }}
              >
                ZO
              </div>
              <h3 className="font-display text-center text-xl font-bold text-stone-800">{PROFILE.name}</h3>
              <p
                className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.28em]"
                style={{ color: "#C084A0" }}
              >
                UX Designer & Developer
              </p>
              <div className="mb-6 space-y-3">
                {[
                  { icon: MapPin, text: PROFILE.city },
                  { icon: Mail, text: PROFILE.emailDisplay },
                  { icon: Phone, text: PROFILE.phoneDisplay },
                  { icon: GraduationCap, text: "SAIT — Grad 2026" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-xs text-stone-600">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "rgba(232,180,192,0.18)" }}
                    >
                      <Icon size={13} style={{ color: "#C084A0" }} />
                    </div>
                    <span className="truncate font-medium">{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 border-t border-rose-50 pt-5">
                {["Figma", "React", "Next.js", "UserInterface"].map((s) => (
                  <span
                    key={s}
                    className="cursor-default rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: "rgba(192,132,160,0.1)", color: "#C084A0" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-400">scroll</span>
        <motion.div
          className="h-10 w-px origin-top"
          style={{ background: "linear-gradient(#E8B4C0, transparent)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
