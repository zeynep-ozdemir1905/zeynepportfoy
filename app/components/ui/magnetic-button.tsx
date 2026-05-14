"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  /** Rose ring uses mix-blend-mode on supported targets */
  cursorBlend?: boolean;
};

export function MagneticButton({ children, className = "", href, cursorBlend }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor-big
      data-cursor-blend={cursorBlend ? true : undefined}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center rounded-full border border-rose-200/80 bg-white/80 px-6 py-3 text-sm font-medium tracking-wide text-stone-700 shadow-[0_8px_28px_rgba(192,132,160,0.12)] transition ${className}`}
    >
      {children}
    </motion.a>
  );
}
