"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
};

export function MagneticButton({ children, className = "", href }: MagneticButtonProps) {
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
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center rounded-full border border-rose-200 bg-white/70 px-6 py-3 text-sm font-medium tracking-wide text-stone-700 shadow-[0_6px_24px_rgba(202,163,178,0.2)] transition ${className}`}
    >
      {children}
    </motion.a>
  );
}
