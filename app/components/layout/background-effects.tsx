"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(252,221,236,0.7),transparent_38%),radial-gradient(circle_at_82%_12%,rgba(225,214,255,0.62),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(255,229,205,0.65),transparent_37%),linear-gradient(180deg,#fffdfa,#fff7f1)]" />
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute left-10 top-20 h-56 w-56 rounded-full bg-rose-200/70 blur-[95px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute right-16 top-40 h-72 w-72 rounded-full bg-violet-200/70 blur-[110px]"
      />
    </div>
  );
}
