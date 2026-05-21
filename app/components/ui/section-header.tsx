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
};

export function SectionHeader({ label, title, description, icon: Icon, centered }: SectionHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeOut }}
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        {Icon ? (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#dbeafe]">
            <Icon size={16} className="text-[#1e40af]" />
          </div>
        ) : null}
        <p className="eyebrow">{label}</p>
      </div>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">{title}</h2>
      {description ? (
        <p className={`mt-3 text-sm font-light leading-relaxed text-slate-600 ${centered ? "" : "max-w-xl"}`}>
          {description}
        </p>
      ) : null}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
        className={`mt-6 h-px origin-left bg-linear-to-r from-[#93c5fd] via-[#2563eb] to-transparent ${centered ? "mx-auto max-w-xs origin-center" : ""}`}
      />
    </motion.header>
  );
}
