"use client";

import { AnimatePresence, motion } from "framer-motion";

type LoadingScreenProps = {
  loading: boolean;
};

export function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#f0f7ff]"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="h-14 w-14 rounded-full border-2 border-[#93c5fd]/50 border-t-[#2563eb]"
            />
            <motion.p
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
              className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-500"
            >
              Loading portfolio
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
