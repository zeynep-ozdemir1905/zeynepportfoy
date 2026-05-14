"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const sx = useSpring(cx, { stiffness: 120, damping: 18 });
  const sy = useSpring(cy, { stiffness: 120, damping: 18 });
  const [big, setBig] = useState(false);
  const [blend, setBlend] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      setBig(!!el.closest("[data-cursor-big]"));
      setBlend(!!el.closest("[data-cursor-blend]"));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [cx, cy]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full md:block"
        style={{
          x: cx,
          y: cy,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          background: "#C084A0",
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden rounded-full border md:block"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: big ? 56 : 28,
          height: big ? 56 : 28,
          borderColor: blend ? "#C084A0" : "rgba(192,132,160,0.5)",
          mixBlendMode: blend ? "difference" : "normal",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.2s ease",
        }}
      />
    </>
  );
}
