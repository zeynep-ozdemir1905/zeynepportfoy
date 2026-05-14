"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FOOTER_NAV, PROFILE, socials } from "@/app/data/portfolio";

type NavbarProps = {
  mobileOpen: boolean;
  onToggle: () => void;
};

export function Navbar({ mobileOpen, onToggle }: NavbarProps) {
  const webLinks = socials.filter((s) => s.label !== "Email");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300"
      style={{
        background: scrolled ? "rgba(255,253,250,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(192,132,160,0.12)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-start justify-between gap-3 px-5 pt-3 md:h-16 md:items-center md:px-6 md:pt-0">
        <div className="flex min-w-0 flex-1 flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <a
            href="#intro"
            data-cursor-big
            className="flex shrink-0 items-center gap-3 no-underline"
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-md"
              style={{ background: "linear-gradient(135deg, #E8B4C0, #C084A0)" }}
            >
              ZO
            </div>
            <div className="min-w-0">
              <span className="block truncate text-base font-semibold tracking-tight text-stone-800 md:text-[1.05rem]">
                {PROFILE.name}
              </span>
              <div className="mt-0.5 flex max-w-[min(100%,20rem)] flex-col gap-0.5 text-[10px] leading-snug text-stone-500 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:text-[11px]">
                <span>{PROFILE.city}</span>
                <span className="hidden text-stone-400 sm:inline" aria-hidden>
                  ·
                </span>
                <a
                  href={PROFILE.phoneHref}
                  className="text-stone-500 no-underline transition-colors hover:text-rose-500"
                >
                  {PROFILE.phoneDisplay}
                </a>
                <span className="hidden text-stone-400 sm:inline" aria-hidden>
                  ·
                </span>
                <a
                  href={PROFILE.emailHref}
                  className="break-all text-stone-500 no-underline transition-colors hover:text-rose-500 sm:break-normal"
                >
                  {PROFILE.emailDisplay}
                </a>
              </div>
            </div>
          </a>
          <div className="flex flex-wrap items-center gap-2 md:max-w-[40%]">
            {webLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                data-cursor-big
                className="rounded-full border border-rose-100 bg-white/80 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.16em] text-stone-500 transition hover:border-rose-300/60 hover:text-rose-600"
              >
                {link.label}
              </a>
            ))}
            {PROFILE.openToWork ? (
              <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-700">
                Open to work
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {[
              { label: "Intro", href: "#intro" },
              { label: "About", href: "#about" },
              { label: "Resume", href: "#resume" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-big
                className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500 transition-colors hover:bg-rose-100/50 hover:text-stone-800"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={onToggle}
            className="rounded-lg border border-rose-200/60 bg-white/70 p-2 text-stone-600 md:hidden"
            aria-label="Toggle section links"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-rose-100/80 bg-white/95 px-5 py-3 backdrop-blur-md md:hidden"
        >
          <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-stone-500">Jump to</p>
          <div className="grid grid-cols-2 gap-2">
            {FOOTER_NAV.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-cursor-big
                onClick={onToggle}
                className="rounded-lg border border-rose-100 bg-[#fdfaf8] px-3 py-2 text-xs text-stone-600 transition hover:border-rose-300/60 hover:text-stone-900"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {webLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                data-cursor-big
                className="rounded-full border border-rose-100 bg-white px-2.5 py-0.5 text-[10px] uppercase tracking-[0.16em] text-stone-500 transition hover:border-rose-300/60 hover:text-rose-600"
              >
                {link.label}
              </a>
            ))}
            {PROFILE.openToWork ? (
              <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-700">
                Open to work
              </span>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
