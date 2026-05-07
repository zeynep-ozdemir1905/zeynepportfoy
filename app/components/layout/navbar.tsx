"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { NAV } from "@/app/data/portfolio";

type NavbarProps = {
  mobileOpen: boolean;
  onToggle: () => void;
};

export function Navbar({ mobileOpen, onToggle }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto mt-4 w-[92%] max-w-6xl rounded-2xl border border-rose-200/60 bg-white/60 px-5 py-3 shadow-[0_10px_35px_rgba(185,146,181,0.16)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <a href="#resume" className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-700">
          Zeynep Portfolio
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-600 transition hover:text-rose-500"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          onClick={onToggle}
          className="rounded-lg border border-rose-200/70 bg-white/60 p-2 text-stone-700 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      {mobileOpen ? (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 md:hidden">
          <div className="grid gap-2 rounded-xl border border-rose-200/60 bg-white/70 p-3">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onToggle}
                className="rounded-md px-3 py-2 text-sm text-stone-700 transition hover:bg-rose-50 hover:text-rose-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
