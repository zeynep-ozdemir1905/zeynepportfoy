"use client";

import { Download, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FOOTER_NAV, PROFILE, RESUME_PDF, socials } from "@/app/data/portfolio";

const NAV = [
  { id: "intro", label: "Intro", href: "#intro" },
  { id: "about", label: "About", href: "#about" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

type NavbarProps = {
  mobileOpen: boolean;
  onToggle: () => void;
};

export function Navbar({ mobileOpen, onToggle }: NavbarProps) {
  const webLinks = socials.filter((s) => s.label !== "Email");
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("intro");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      { threshold: 0.25, rootMargin: "-20% 0px -55% 0px" },
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300"
      style={{
        background: scrolled ? "rgba(240, 247, 255, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(147, 197, 253, 0.45)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 md:px-6">
        <a href="#intro" className="flex shrink-0 items-center gap-3 no-underline">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-md"
            style={{ background: "linear-gradient(135deg, #1e3a5f, #2563eb)" }}
          >
            ZO
          </div>
          <span className="hidden text-sm font-bold tracking-tight text-[#0f172a] sm:block">{PROFILE.name}</span>
        </a>

        <nav className="hidden items-center gap-0.5 md:flex">
          {NAV.map(({ id, label, href }) => (
            <a
              key={id}
              href={href}
              className={`relative px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors ${
                active === id ? "text-[#2563eb]" : "text-slate-500 hover:text-[#0f172a]"
              }`}
            >
              {active === id ? (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-[#dbeafe]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              ) : null}
              <span className="relative">{label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href={RESUME_PDF.href}
            download={RESUME_PDF.fileName}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden items-center gap-1.5 rounded-full border border-[#93c5fd]/70 bg-white/90 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1e40af] shadow-sm sm:inline-flex"
          >
            <Download size={14} aria-hidden />
            Resume
          </motion.a>
          <motion.a
            href={PROFILE.emailHref}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md sm:inline-flex"
            style={{ background: "linear-gradient(135deg, #1e3a5f, #2563eb)" }}
          >
            Hire me
          </motion.a>
          <button
            type="button"
            onClick={onToggle}
            className="rounded-lg border border-[#93c5fd]/60 bg-white/80 p-2 text-[#0f172a] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-[#93c5fd]/40 bg-white/95 px-5 py-4 backdrop-blur-md md:hidden"
        >
          <a
            href={RESUME_PDF.href}
            download={RESUME_PDF.fileName}
            onClick={onToggle}
            className="mb-3 flex items-center justify-center gap-2 rounded-full border border-[#93c5fd]/70 bg-[#f0f7ff] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#1e40af]"
          >
            <Download size={14} aria-hidden />
            {RESUME_PDF.label}
          </a>
          <div className="grid grid-cols-2 gap-2">
            {FOOTER_NAV.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onToggle}
                className="rounded-lg border border-[#dbeafe] bg-[#f0f7ff] px-3 py-2 text-xs font-medium text-slate-700"
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
                className="rounded-full border border-[#bfdbfe] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
