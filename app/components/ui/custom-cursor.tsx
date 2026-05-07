"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const cursorX = useSpring(x, { stiffness: 260, damping: 22 });
  const cursorY = useSpring(y, { stiffness: 260, damping: 22 });
  const glowX = useSpring(x, { stiffness: 120, damping: 20 });
  const glowY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ translateX: cursorX, translateY: cursorY }}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-5 w-5 rounded-full border border-rose-300/80 bg-rose-200/35 md:block"
      />
      <motion.div
        style={{ translateX: glowX, translateY: glowY }}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.22),rgba(236,72,153,0))] blur-xl md:block"
      />
    </>
  );
}
