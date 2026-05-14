"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% -15%, rgba(251, 220, 232, 0.75), transparent 52%),
            radial-gradient(circle at 12% 45%, rgba(233, 221, 255, 0.55), transparent 46%),
            radial-gradient(circle at 92% 68%, rgba(254, 228, 230, 0.5), transparent 42%),
            linear-gradient(180deg, #fdfaf7 0%, #fdf5f8 48%, #f8f4fc 100%)
          `,
        }}
      />
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-pink-200/50 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-200/40 blur-[110px]"
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #d4849d 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
