"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function MagneticButton({ children, className = "", href, variant = "ghost" }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.14}px, ${y * 0.14}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  const base =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
        ? "btn-secondary"
        : "inline-flex items-center justify-center rounded-full border border-[#93c5fd]/70 bg-white/90 px-6 py-3 text-sm font-semibold tracking-wide text-[#0f172a] shadow-[0_8px_28px_rgba(30,58,95,0.08)]";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} transition ${className}`}
    >
      {children}
    </motion.a>
  );
}
