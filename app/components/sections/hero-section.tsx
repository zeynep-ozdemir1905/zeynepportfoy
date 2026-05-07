"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/app/components/ui/magnetic-button";
import { rotatingTitles } from "@/app/data/portfolio";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="resume" className="relative flex min-h-screen items-center px-6 pt-28">
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex rounded-full border border-rose-200 bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-rose-500"
          >
            Elegant Developer Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-semibold leading-tight text-stone-800 md:text-7xl"
          >
            Zeynep Ozdemir
          </motion.h1>
          <motion.div
            key={titleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-lg text-stone-600 md:text-2xl"
          >
            {rotatingTitles[titleIndex]}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-stone-600"
          >
            I design thoughtful digital experiences with premium interaction design and refined visual systems.
            I blend UI craft, accessibility, and frontend engineering into work that feels both artistic and professional.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects" className="bg-gradient-to-r from-rose-200 to-violet-200 text-stone-700 hover:from-rose-300 hover:to-violet-300">
              View Projects <ArrowUpRight className="ml-2 h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#contact" className="hover:border-rose-300 hover:text-rose-500">
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-rose-100 bg-white/65 p-8 shadow-[0_20px_60px_rgba(190,152,177,0.2)] backdrop-blur-xl"
        >
          <div className="absolute -right-16 -top-14 h-40 w-40 rounded-full bg-rose-200/70 blur-3xl" />
          <div className="absolute -bottom-12 left-10 h-36 w-36 rounded-full bg-violet-200/70 blur-3xl" />
          <div className="relative space-y-5 text-stone-700">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Current Focus</p>
            <h3 className="text-2xl font-semibold text-stone-800">Elegant interfaces for modern digital products</h3>
            <p className="text-sm leading-relaxed text-stone-600">
              Building polished, interactive, and user-centered experiences with a soft luxury visual language.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-3">
              {["UX/UI Design", "Front-End Development", "Motion Systems", "Accessibility"].map((item) => (
                <div key={item} className="rounded-xl border border-rose-100 bg-white/70 p-3 text-xs text-stone-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
