"use client";

import { useEffect, useState } from "react";
import { BackgroundEffects } from "@/app/components/layout/background-effects";
import { Navbar } from "@/app/components/layout/navbar";
import { AboutSection } from "@/app/components/sections/about-section";
import { ContactSection } from "@/app/components/sections/contact-section";
import { ExperienceSection } from "@/app/components/sections/experience-section";
import { HeroSection } from "@/app/components/sections/hero-section";
import { ProjectsSection } from "@/app/components/sections/projects-section";
import { SkillsSection } from "@/app/components/sections/skills-section";
import { CustomCursor } from "@/app/components/ui/custom-cursor";
import { LoadingScreen } from "@/app/components/ui/loading-screen";

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative overflow-hidden text-stone-700">
      <LoadingScreen loading={loading} />
      <CustomCursor />
      <BackgroundEffects />
      <Navbar mobileOpen={mobileOpen} onToggle={() => setMobileOpen((value) => !value)} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <footer className="px-6 pb-10 pt-4">
        <div className="mx-auto max-w-6xl border-t border-rose-100 pt-6 text-center text-xs uppercase tracking-[0.28em] text-stone-500">
          Zeynep Ozdemir · Calgary, AB · Software Developer Portfolio
        </div>
      </footer>
    </main>
  );
}