"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { MARQUEE_ITEMS } from "@/app/data/portfolio";

const ITEM_W = 140;

export function MarqueeStrip() {
  const x = useMotionValue(0);
  const total = MARQUEE_ITEMS.length * ITEM_W;

  useAnimationFrame((_, delta) => {
    let next = x.get() - delta * 0.045;
    if (next < -total) next += total;
    x.set(next);
  });

  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="relative select-none overflow-hidden border-y py-5"
      style={{
        borderColor: "rgba(192,132,160,0.15)",
        background: "rgba(253,240,245,0.55)",
      }}
    >
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-block px-6 text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{
              minWidth: ITEM_W,
              color: item === "•" ? "#E8B4C0" : "#C9A0B0",
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
