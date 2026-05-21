"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 70% at 50% -10%, rgba(191, 219, 254, 0.9), transparent 55%),
            radial-gradient(circle at 0% 50%, rgba(147, 197, 253, 0.35), transparent 45%),
            radial-gradient(circle at 100% 80%, rgba(56, 189, 248, 0.2), transparent 40%),
            linear-gradient(180deg, #f0f7ff 0%, #e8f2fe 45%, #f0f9ff 100%)
          `,
        }}
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute -left-20 top-24 h-96 w-96 rounded-full bg-[#93c5fd]/30 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute -right-10 top-1/4 h-80 w-80 rounded-full bg-[#0f172a]/8 blur-[100px]"
      />
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #1e3a5f 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
    </div>
  );
}
