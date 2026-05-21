"use client";

import { useEffect, useState } from "react";
import { BackgroundEffects } from "@/app/components/layout/background-effects";
import { Navbar } from "@/app/components/layout/navbar";
import { AboutSection } from "@/app/components/sections/about-section";
import { ContactSection } from "@/app/components/sections/contact-section";
import { ExperienceSection } from "@/app/components/sections/experience-section";
import { HeroSection } from "@/app/components/sections/hero-section";
import { InteractiveResumeSection } from "@/app/components/sections/interactive-resume-section";
import { InternshipsSection } from "@/app/components/sections/internships-section";
import { ProjectsSection } from "@/app/components/sections/projects-section";
import { SkillsSection } from "@/app/components/sections/skills-section";
import { VolunteerSection } from "@/app/components/sections/volunteer-section";
import { LoadingScreen } from "@/app/components/ui/loading-screen";
import { MarqueeStrip } from "@/app/components/ui/marquee-strip";
import { ScrollProgress } from "@/app/components/ui/scroll-progress";
import { FOOTER_NAV } from "@/app/data/portfolio";

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative overflow-hidden text-[#0f172a]">
      <LoadingScreen loading={loading} />
      <ScrollProgress />
      <BackgroundEffects />
      <Navbar mobileOpen={mobileOpen} onToggle={() => setMobileOpen((value) => !value)} />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <InteractiveResumeSection />
      <MarqueeStrip />
      <ProjectsSection />
      <SkillsSection />
      <InternshipsSection />
      <ExperienceSection />
      <VolunteerSection />
      <MarqueeStrip />
      <ContactSection />
      <footer className="px-6 pb-12 pt-6">
        <div className="glass-card mx-auto max-w-6xl px-5 py-6">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            {FOOTER_NAV.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#2563eb]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.28em] text-slate-500">
            Zeynep Ozdemir · Calgary, AB · Open to work
          </p>
        </div>
      </footer>
    </main>
  );
}
