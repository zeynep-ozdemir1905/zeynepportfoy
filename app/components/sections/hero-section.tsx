"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "@/app/components/ui/magnetic-button";
import { LinkedInProfileCard } from "@/app/components/ui/linkedin-profile-card";
import {
  HERO_COPY,
  PROFILE,
  RESUME_PDF,
  RESUME_SUMMARY,
  aboutStats,
  rotatingTitles,
  socials,
} from "@/app/data/portfolio";
import { staggerContainer, staggerItem } from "@/app/lib/motion";
import { useEffect, useState } from "react";

const iconMap = { GitHub: Github, LinkedIn: Linkedin, Email: Mail } as const;

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2800);
    return () => window.clearInterval(interval);
  }, []);

  const webSocials = socials.filter((s) => s.label !== "Email" && s.label !== "LinkedIn");

  return (
    <section
      id="intro"
      className="relative flex min-h-[100svh] scroll-mt-28 items-center overflow-hidden px-6 pb-24 pt-28 md:pb-28 md:pt-32"
    >
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#1e3a5f]/[0.04] blur-3xl" />      <div className="pointer-events-none absolute -right-16 bottom-20 h-96 w-96 rounded-full bg-[#c17f59]/[0.06] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.75fr] lg:gap-16 xl:gap-20">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={staggerItem} className="eyebrow mb-6">
              {HERO_COPY.badge}
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="font-display text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-[var(--ink)]"
            >
              Designing & building
              <span className="mt-2 block text-gradient">digital products</span>
              <span className="mt-2 block text-[clamp(1.5rem,4vw,2.5rem)] font-normal text-[var(--ink-muted)]">
              
              </span>
            </motion.h1>

            <motion.div key={titleIndex} variants={staggerItem} className="mt-8">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-medium text-[var(--accent-bright)] md:text-xl"
              >
                {rotatingTitles[titleIndex]}
              </motion.p>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg"
            >
              {RESUME_SUMMARY.split(".")[0]}.
            </motion.p>

            <motion.p variants={staggerItem} className="mt-3 text-sm text-[var(--ink-soft)]">
              {PROFILE.credential} · Diploma 2026 · Bachelor expected 2028
            </motion.p>

            <motion.div variants={staggerItem} className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="#projects" variant="primary">
                {HERO_COPY.primaryCta} <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href={RESUME_PDF.href} download={RESUME_PDF.fileName} variant="secondary">
                Download resume
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                {HERO_COPY.secondaryCta}
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-12 flex flex-wrap items-center gap-6 border-t border-[var(--line)] pt-8"
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
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                    {label}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
          >
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-elevated)] px-6 py-7 md:px-7">
                <p className="eyebrow mb-4 text-center lg:text-left">Connect on LinkedIn</p>
                <LinkedInProfileCard />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {aboutStats.slice(0, 2).map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--line)] bg-[var(--surface-elevated)] px-5 py-4"
                  >
                    <p className="font-display text-2xl font-bold text-[var(--ink)]">{stat.value}</p>
                    <p className="mt-1 text-xs leading-snug text-[var(--ink-soft)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Explore</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
