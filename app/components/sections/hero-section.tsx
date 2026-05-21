"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, GraduationCap, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { MagneticButton } from "@/app/components/ui/magnetic-button";
import { HERO_COPY, PROFILE, aboutStats, rotatingTitles, socials } from "@/app/data/portfolio";
import { staggerContainer, staggerItem } from "@/app/lib/motion";
import { useEffect, useState } from "react";

const iconMap = { GitHub: Github, LinkedIn: Linkedin, Email: Mail } as const;

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2400);
    return () => window.clearInterval(interval);
  }, []);

  const webSocials = socials.filter((s) => s.label !== "Email");

  return (
    <section
      id="intro"
      className="relative flex min-h-screen scroll-mt-28 items-center overflow-hidden px-6 pb-20 pt-28 md:pt-32"
    >
      <motion.div
        className="pointer-events-none absolute -right-40 -top-32 h-[min(640px,85vw)] w-[min(640px,85vw)] rounded-full opacity-40 blur-3xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, #93c5fd, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_360px]">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div
              variants={staggerItem}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#93c5fd]/60 bg-white/90 px-4 py-2 shadow-sm"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-emerald-500"
              />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1e40af]">
                {HERO_COPY.badge} · {PROFILE.city}
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-display text-[clamp(2.5rem,7vw,4.75rem)] font-bold leading-[0.95] tracking-tight text-[#0f172a]"
            >
              Zeynep{" "}
              <span className="text-gradient block sm:inline">Ozdemir</span>
            </motion.h1>

            <motion.div key={titleIndex} variants={staggerItem} className="mt-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-medium text-[#2563eb] md:text-xl"
              >
                {rotatingTitles[titleIndex]}
              </motion.p>
            </motion.div>

            <motion.p variants={staggerItem} className="mt-6 max-w-xl text-lg font-semibold leading-snug text-[#1e3a5f]">
              {HERO_COPY.headline}
            </motion.p>

            <motion.p variants={staggerItem} className="mt-4 max-w-xl text-base font-light leading-relaxed text-slate-600">
              {HERO_COPY.subline}
            </motion.p>

            <motion.div variants={staggerItem} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#bfdbfe]/80 bg-white/80 px-3 py-3 text-center shadow-sm"
                >
                  <p className="text-lg font-bold text-[#1e40af]">{stat.value}</p>
                  <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={staggerItem} className="mt-10 flex flex-wrap gap-3">
              <MagneticButton href="#projects" variant="primary">
                {HERO_COPY.primaryCta} <ArrowUpRight className="ml-2 h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                {HERO_COPY.secondaryCta}
              </MagneticButton>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-5">
              {webSocials.map(({ label, href }) => {
                const Icon = iconMap[label as keyof typeof iconMap];
                if (!Icon) return null;
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#2563eb]"
                  >
                    <Icon size={15} /> {label}
                  </motion.a>
                );
              })}
              <motion.a
                href={PROFILE.emailHref}
                whileHover={{ y: -2 }}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#2563eb]"
              >
                <Mail size={15} /> Email
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48, rotate: 1.5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            whileHover={{ y: -4 }}
            className="relative"
          >
            <div className="glass-card-dark relative overflow-hidden p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-30 blur-2xl"
                style={{ background: "#38bdf8" }}
              />
              <div
                className="font-display relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl text-3xl font-bold text-white"
                style={{ background: "linear-gradient(135deg, #2563eb, #1e3a5f)" }}
              >
                ZO
              </div>
              <h3 className="font-display relative z-10 text-center text-xl font-bold text-white">{PROFILE.name}</h3>
              <p className="relative z-10 mb-6 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-[#93c5fd]">
                UX/UI · Front-End · Calgary
              </p>
              <div className="relative z-10 mb-6 space-y-3">
                {[
                  { icon: MapPin, text: PROFILE.city },
                  { icon: Mail, text: PROFILE.emailDisplay },
                  { icon: Phone, text: PROFILE.phoneDisplay },
                  { icon: GraduationCap, text: "SAIT — Software Dev · 2026" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-xs text-slate-300">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1e3a5f]/80">
                      <Icon size={13} className="text-[#7dd3fc]" />
                    </div>
                    <span className="truncate font-medium">{text}</span>
                  </div>
                ))}
              </div>
              <div className="relative z-10 flex flex-wrap justify-center gap-2 border-t border-[#93c5fd]/25 pt-5">
                {["Figma", "React", "Next.js", "WCAG"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[#93c5fd]/30 bg-[#0f172a]/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#bfdbfe]"
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
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">scroll</span>
        <motion.div
          className="h-10 w-px origin-top bg-linear-to-b from-[#2563eb] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
