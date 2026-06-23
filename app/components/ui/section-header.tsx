"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { easeOut } from "@/app/lib/motion";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  centered?: boolean;
  large?: boolean;
};

export function SectionHeader({ label, title, description, icon: Icon, centered, large }: SectionHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: easeOut }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        {Icon ? <Icon size={18} className="text-[var(--accent-bright)]" strokeWidth={1.5} /> : null}
        <p className="eyebrow">{label}</p>
      </div>
      <h2
        className={`font-display mt-5 font-bold tracking-tight text-[var(--ink)] ${
          large ? "text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]" : "text-[clamp(1.875rem,4vw,3rem)] leading-[1.1]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </motion.header>
  );
}
