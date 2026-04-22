"use client";

import { useState, useEffect, useRef, FC } from "react";
import {
  Mail, Github, Linkedin, GraduationCap, Briefcase,
  Star, ArrowUpRight, Menu, X, Layers, Smartphone,
  Monitor, ChevronRight, MapPin, Phone,
} from "lucide-react";

/* ─── TYPES ──────────────────────────────────────────────────── */
type LucideIcon = React.ComponentType<{
  size?: number; className?: string; style?: React.CSSProperties;
}>;

interface NavItem { id: string; label: string; href: string; }
interface Project {
  id: string; number: string; title: string; category: string;
  icon: LucideIcon; tags: string[]; desc: string; figma: string; accent: string;
}
interface SkillGroup { group: string; items: string[]; }

/* ─── DATA ───────────────────────────────────────────────────── */
const NAV: NavItem[] = [
  { id: "resume",   label: "Resume",   href: "#resume" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact",  label: "Contact",  href: "#contact" },
];

const EXPERIENCE = [
  {
    date: "Dec 2025 – Present",
    role: "UX/UI Designer & Developer",
    company: "Drill Sense",
    location: "Calgary, AB",
    bullets: [
      "Architecting dashboards for real-time industrial data visualization.",
      "Leading Next.js transitions to improve software responsiveness.",
      "Implementing WCAG accessibility standards for enterprise portals.",
    ],
  },
  {
    date: "Jun 2025 – Present",
    role: "Website & Engagement Manager",
    company: "IDI Calgary",
    location: "Volunteer",
    bullets: [
      "Modernizing digital presence through WordPress optimization.",
      "Community-focused content strategy and UX improvements.",
    ],
  },
  {
    date: "Jun 2025 – Aug 2025",
    role: "User Interface Designer",
    company: "Sky Air Supplies",
    location: "CO-OP",
    bullets: [
      "Designed high-fidelity user interfaces and brought them to life.",
      "Collaborated with developers on component handoff and design systems.",
    ],
  },
];

const EDUCATION = [
  {
    date: "2023 – 2026",
    degree: "Diploma — Information Technology: Software Development",
    school: "SAIT (Southern Alberta Institute of Technology)",
    location: "Calgary, AB",
    note: "Focus on UX/UI Design, React, and Accessible Web Development",
  },
];

const SKILL_GROUPS: SkillGroup[] = [
  { group: "Design",   items: ["Figma", "Prototyping", "UX Research", "WCAG 2.1", "Motion Design"] },
  { group: "Frontend", items: ["React", "Next.js", "React Native", "Tailwind CSS", "TypeScript"] },
  { group: "Tools",    items: ["Azure", "Node.js", "WordPress", "Git",] },
];

const PROJECTS: Project[] = [
  {
    id: "go-apricot",
    number: "01",
    title: "Go Apricot",
    category: "Mobile Application",
    icon: Smartphone,
    tags: ["React Native", "Azure", "UI Design"],
    desc: "A workforce management system designed to bridge the gap between complex industrial data and user interaction. Created for a cleaning company at SAIT to streamline employee check-ins and daily operations.",
    figma: "https://embed.figma.com/design/90lijAgk5ZeqkDhio7gfR1/Capstone-Employee?node-id=0-1&embed-host=share",
    accent: "#C084A0",
  },
  {
    id: "drill-sense",
    number: "02",
    title: "Drill Sense",
    category: "Web Application",
    icon: Monitor,
    tags: ["WCAG 2.1", "Next.js", "Dashboard"],
    desc: "An enterprise transformation focusing on strict WCAG accessibility. This dashboard provides real-time industrial data visualization with a clean, high-end aesthetic for oilfield operators.",
    figma: "https://embed.figma.com/design/qhs7vi6wQTljzR0POBCpWJ/ds_projectdrillsense?node-id=0-1&embed-host=share",
    accent: "#A78BCA",
  },
];

/* ─── HOOKS ──────────────────────────────────────────────────── */
function useInView(threshold = 0.12): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── FADE WRAPPER ───────────────────────────────────────────── */
interface FadeProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

const Fade: FC<FadeProps> = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [ref, inView] = useInView();
  const from =
    direction === "left" ? "translateX(-30px)" :
    direction === "right" ? "translateX(30px)" : "translateY(28px)";
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : from,
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/* ─── PROJECT CARD ───────────────────────────────────────────── */
const ProjectCard: FC<{ p: Project; flip: boolean }> = ({ p, flip }) => {
  const [ref, inView] = useInView(0.08);
  const [open, setOpen] = useState(false);
  const Icon = p.icon;
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-rose-100 shadow-sm hover:shadow-lg transition-shadow duration-500"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(.16,1,.3,1)",
      }}
    >
      {/* Text */}
      <div className={`flex flex-col justify-center p-8 lg:p-12 bg-white ${flip ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-black tracking-[0.25em] uppercase text-rose-300">{p.number}</span>
          <div className="w-5 h-px bg-rose-200" />
          <Icon size={13} style={{ color: p.accent }} />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase" style={{ color: p.accent }}>
            {p.category}
          </span>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-stone-800 mb-3 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {p.title}
        </h3>
        <p className="text-sm text-stone-500 leading-relaxed mb-6">{p.desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tags.map((t) => (
            <span key={t} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: `${p.accent}15`, color: p.accent }}>
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="group flex items-center gap-2 text-xs font-black tracking-widest uppercase transition-colors"
          style={{ color: p.accent }}
        >
          {open ? "Hide Prototype" : "View Prototype"}
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Preview */}
      <div
        className={`relative min-h-[320px] ${flip ? "lg:order-1" : ""}`}
        style={{ background: `linear-gradient(135deg, ${p.accent}12 0%, ${p.accent}06 100%)` }}
      >
        {!open && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/70 bg-white/80 backdrop-blur-sm shadow-sm">
              <Layers size={24} style={{ color: p.accent }} />
            </div>
            <p className="text-[11px] tracking-widest uppercase font-bold" style={{ color: `${p.accent}80` }}>
              Click to preview
            </p>
          </div>
        )}
        {open && (
          <iframe className="w-full h-full min-h-[380px]" src={p.figma} allowFullScreen title={p.title} />
        )}
      </div>
    </div>
  );
};

/* ─── MAIN ───────────────────────────────────────────────────── */
export default function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("resume");

  useEffect(() => {
    const ids = ["resume", "projects", "contact"];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setActive((e.target as HTMLElement).id);
      }),
      { threshold: 0.3 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; background: #FDFAF7; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        ::-webkit-scrollbar { width: 4px; background: #FDF0F0; }
        ::-webkit-scrollbar-thumb { background: #E8B4C0; border-radius: 99px; }

        @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes slideDown { from{opacity:0;transform:translateY(-14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
        .float { animation: float 6s ease-in-out infinite; }

        .petal {
          position: absolute; border-radius: 50% 0 50% 0;
          background: linear-gradient(135deg, #FBDCE8 0%, #F5C6D8 100%);
          pointer-events: none;
        }
        .section-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, #F0C0CE, transparent);
        }
        .timeline-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: linear-gradient(135deg, #E8B4C0, #C084A0);
          flex-shrink: 0; box-shadow: 0 0 0 3px #FDE8F0; margin-top: 7px;
        }
      `}</style>

      <div className="min-h-screen bg-blue-50">

        {/* ── NAVBAR ──────────────────────────────────────────── */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-50/80">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-black"
                style={{ background: "linear-gradient(135deg, #E8B4C0, #C084A0)" }}>
                ZO
              </div>
              <span className="text-sm font-bold text-stone-700 hidden sm:block">Zeynep Ozdemir</span>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {NAV.map(({ id, label, href }) => (
                <a key={id} href={href}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                    active === id
                      ? "bg-rose-50 text-rose-400"
                      : "text-stone-400 hover:text-stone-700 hover:bg-stone-50"
                  }`}>
                  {label}
                </a>
              ))}
              <a href="mailto:barikazeynep2@gmail.com"
                className="ml-3 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-white hover:opacity-80 transition-opacity"
                style={{ background: "linear-gradient(135deg, #E8B4C0, #C084A0)" }}>
                Hire Me
              </a>
            </nav>

            <button className="md:hidden text-stone-500" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>

        {mobileOpen && (
          <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-7 md:hidden"
            style={{ animation: "slideDown 0.3s ease" }}>
            {NAV.map(({ id, label, href }) => (
              <a key={id} href={href} onClick={() => setMobileOpen(false)}
                className="text-3xl font-bold text-stone-600 hover:text-rose-400 transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {label}
              </a>
            ))}
          </div>
        )}

        {/* ── HERO / RESUME HEADER ────────────────────────────── */}
        <section id="resume" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
          {/* Petals */}
          <div className="petal w-[500px] h-[500px] opacity-[0.12] -top-32 -right-32 rotate-12 float" />
          <div className="petal w-72 h-72 opacity-[0.10] bottom-16 -left-16 -rotate-12 float" style={{ animationDelay: "2s" }} />
          <div className="petal w-40 h-40 opacity-[0.08] top-1/2 right-1/4 rotate-45 float" style={{ animationDelay: "4s" }} />

          {/* Dot grid */}
          <div className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #E8B4C0 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }} />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-[1fr_360px] gap-16 items-center w-full">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 mb-8"
                style={{ animation: "slideDown 0.6s ease 0.1s both" }}>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-400">
                  Open to opportunities
                </span>
              </div>

              <h1
                className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] mb-6 text-stone-800"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  animation: "slideDown 0.7s ease 0.2s both",
                }}
              >
                Zeynep<br />
                <span style={{
                  background: "linear-gradient(135deg, #E8B4C0 0%, #C084A0 50%, #A78BCA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Ozdemir
                </span>
              </h1>

              <p className="text-base text-stone-500 leading-relaxed max-w-lg mb-8 font-light"
                style={{ animation: "slideDown 0.7s ease 0.45s both" }}>
                UX/UI Designer & Front-End Developer based in Calgary, AB.
                I craft beautiful, accessible interfaces that feel as good as they look.
              </p>

              <div className="flex flex-wrap gap-3 mb-8"
                style={{ animation: "slideDown 0.7s ease 0.6s both" }}>
                <a href="#projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity shadow-md"
                  style={{ background: "linear-gradient(135deg, #E8B4C0, #C084A0)" }}>
                  View Projects <ArrowUpRight size={13} />
                </a>
                <a href="#contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-stone-600 text-xs font-bold tracking-widest uppercase border border-stone-200 hover:border-rose-200 hover:text-rose-400 transition-all">
                  Contact Me
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-5"
                style={{ animation: "slideDown 0.7s ease 0.75s both" }}>
                {[
                  { icon: Github,   href: "https://github.com/zeynep-ozdemir1905",                label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/zeynep-ozdemir-396010335/", label: "LinkedIn" },
                  { icon: Mail,     href: "mailto:barikazeynep2@gmail.com",                        label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-stone-400 hover:text-rose-400 transition-colors text-xs font-bold tracking-wide">
                    <Icon size={15} /> {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: card */}
            <div className="relative float" style={{ animationDelay: "1s" }}>
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
                style={{ background: "linear-gradient(135deg, #E8B4C0, #A78BCA)" }} />
              <div className="relative bg-white rounded-3xl p-8 border border-rose-100 shadow-xl">
                <div className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl font-black text-white shadow-md"
                  style={{ background: "linear-gradient(135deg, #F5C6D8, #C084A0)", fontFamily: "'Cormorant Garamond', serif" }}>
                  ZO
                </div>
                <h3 className="text-center text-xl font-bold text-stone-800 mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Zeynep Ozdemir
                </h3>
                <p className="text-center text-[10px] tracking-widest uppercase text-rose-400 font-bold mb-6">
                  UX Designer & Developer
                </p>
                <div className="space-y-3">
                  {[
                    { icon: MapPin,        text: "Calgary, AB" },
                    { icon: Mail,          text: "barikazeynep2@gmail.com" },
                    { icon: Phone,         text: "(587) 664-6405" },
                    { icon: GraduationCap, text: "SAIT — Grad 2026" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-xs text-stone-500">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-rose-50 flex-shrink-0">
                        <Icon size={13} className="text-rose-400" />
                      </div>
                      <span className="font-medium truncate">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-rose-50 flex flex-wrap gap-2">
                  {["Figma", "React", "Next.js", "WCAG"].map((s) => (
                    <span key={s}
                      className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-rose-50 text-rose-400">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ──────────────────────────────────────── */}
        <section className="py-24 bg-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <Fade>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-rose-50 flex-shrink-0">
                  <Briefcase size={15} className="text-rose-400" />
                </div>
                <h2 className="text-4xl font-bold text-stone-800"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Experience
                </h2>
                <div className="section-line" />
              </div>
            </Fade>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, i) => (
                <Fade key={`${exp.company}-${exp.role}`} delay={i * 0.1}>
                  <div className="grid md:grid-cols-[160px_1fr] gap-6">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-rose-300 pt-1 leading-relaxed">
                      {exp.date}
                    </p>
                    <div className="bg-[#FDFAF8] rounded-2xl p-6 border border-rose-50 hover:border-rose-100 hover:shadow-sm transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="timeline-dot" />
                        <div>
                          <h3 className="text-lg font-bold text-stone-800">{exp.role}</h3>
                          <p className="text-sm text-rose-400 font-semibold italic"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            {exp.company} · {exp.location}
                          </p>
                        </div>
                      </div>
                      <ul className="ml-4 space-y-2">
                        {exp.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-stone-500 font-light">
                            <ChevronRight size={13} className="text-rose-200 mt-0.5 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ───────────────────────────────────────── */}
        <section className="py-24 bg-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <Fade>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-50 flex-shrink-0">
                  <GraduationCap size={15} className="text-purple-400" />
                </div>
                <h2 className="text-4xl font-bold text-stone-800"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Education
                </h2>
                <div className="section-line" />
              </div>
            </Fade>
            {EDUCATION.map((edu, i) => (
              <Fade key={edu.school} delay={i * 0.1}>
                <div className="grid md:grid-cols-[160px_1fr] gap-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-purple-300 pt-1">{edu.date}</p>
                  <div className="bg-white rounded-2xl p-6 border border-purple-50 hover:border-purple-100 hover:shadow-sm transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-50 flex-shrink-0">
                        <GraduationCap size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-stone-800 mb-1">{edu.degree}</h3>
                        <p className="text-sm text-purple-400 font-semibold italic mb-2"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {edu.school} · {edu.location}
                        </p>
                        <p className="text-sm text-stone-500 font-light">{edu.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section>

        {/* ── SKILLS ──────────────────────────────────────────── */}
        <section className="py-24 bg-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <Fade>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-50 flex-shrink-0">
                  <Star size={15} className="text-amber-400" />
                </div>
                <h2 className="text-4xl font-bold text-stone-800"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Skills
                </h2>
                <div className="section-line" />
              </div>
            </Fade>
            <div className="grid md:grid-cols-3 gap-5">
              {SKILL_GROUPS.map((g, i) => (
                <Fade key={g.group} delay={i * 0.12}>
                  <div className="bg-gray-400 rounded-2xl p-6 border border-rose-50 hover:border-rose-100 hover:shadow-sm transition-all duration-300 h-full">
                    <p className="text-[10px] font-black tracking-[0.25em] uppercase text-rose-300 mb-4">{g.group}</p>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <span key={item}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-rose-100 text-stone-600 hover:border-rose-200 hover:text-rose-500 transition-colors cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ────────────────────────────────────────── */}
        <section id="projects" className="py-24 bg-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <Fade>
              <div className="text-center mb-16">
                <p className="text-[11px] font-black tracking-[0.3em] uppercase text-rose-400 mb-3">Selected Work</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-stone-800"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Projects
                </h2>
                <p className="text-sm text-stone-400 mt-3 font-light">Click any card to preview the Figma prototype</p>
              </div>
            </Fade>
            <div className="space-y-8">
              {PROJECTS.map((p, i) => (
                <ProjectCard key={p.id} p={p} flip={i % 2 !== 0} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────────────────── */}
        <section id="contact" className="py-32 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FDF0F5 0%, #F5E8F8 50%, #EEF0FD 100%)" }}>
          <div className="petal w-80 h-80 opacity-20 -bottom-20 -right-20 rotate-45 float" />
          <div className="petal w-56 h-56 opacity-10 -top-10 -left-10 rotate-12 float" style={{ animationDelay: "3s" }} />

          <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
            <Fade>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ background: "linear-gradient(135deg, #E8B4C0, #C084A0)" }}>
                <Mail size={24} className="text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Let's work<br />
                <span style={{
                  background: "linear-gradient(135deg, #E8B4C0 0%, #C084A0 50%, #A78BCA 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  together
                </span>
              </h2>
              <p className="text-sm text-stone-500 mb-10 leading-relaxed font-light">
                Whether you have a project in mind or just want to say hello — I'd love to hear from you.
              </p>

              <a href="mailto:barikazeynep2@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity shadow-lg mb-10"
                style={{ background: "linear-gradient(135deg, #E8B4C0, #C084A0)" }}>
                <Mail size={16} /> barikazeynep2@gmail.com
              </a>

              <div className="flex items-center justify-center gap-6">
                {[
                  { icon: Github,   href: "https://github.com/zeynep-ozdemir1905",                label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/zeynep-ozdemir-396010335/", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 text-stone-500 hover:text-rose-400 transition-colors text-xs font-bold tracking-wide">
                    <Icon size={16} /> {label}
                  </a>
                ))}
              </div>
            </Fade>
          </div>

          <div className="relative z-10 mt-20 pt-6 border-t border-rose-100/60 text-center">
            <p className="text-[10px] tracking-[0.35em] uppercase text-stone-400 font-bold">
              Zeynep Ozdemir · Calgary, AB · 2026
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
