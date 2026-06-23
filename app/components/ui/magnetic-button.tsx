"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  download?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function MagneticButton({
  children,
  className = "",
  href,
  download,
  variant = "ghost",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
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
        : "inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--ink)]";

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} transition ${className}`}
    >
      {children}
    </motion.a>
  );
}
