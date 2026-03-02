"use client";

import Link from 'next/link';
import { 
  Palette, 
  Cloud, 
  Flower2, 
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] text-[#3D3A35] selection:bg-[#F3EFE0] selection:text-[#8B7E66]">
      
      {/* --- ELEGANT NAV --- */}
      <nav className="fixed top-0 z-50 w-full bg-[#FDFCF7]/90 backdrop-blur-md border-b border-[#F2EDE4]">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-6 px-10">
          <span className="text-xl font-serif font-semibold tracking-tight text-[#3D3A35]">Zeynep.</span>
          <div className="flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B7E66]">
            <Link href="/portfolio" className="hover:text-[#3D3A35] transition-colors">Portfolio</Link>
            <Link href="/about" className="hover:text-[#3D3A35] transition-colors">Resume</Link>
            <Link href="mailto:barikazeynep2@gmail.com" className="rounded-full border border-[#D9D1C1] px-6 py-2 hover:bg-[#D9D1C1] hover:text-white transition-all">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative flex min-h-screen flex-col items-center justify-center px-6">
        {/* Soft Warm Glow */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5E6D3] opacity-40 blur-[120px]" />
        
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#BCAC94]">
            <Sparkles size={12} /> Digital Experience Designer
          </div>
          
          <h1 className="max-w-5xl font-serif text-6xl font-medium leading-[1.1] tracking-tight sm:text-8xl text-[#3D3A35]">
            Refined design for <br />
            <i className="italic font-serif text-[#BCAC94]">modern</i> interfaces.
          </h1>
          
          <p className="mx-auto max-w-xl text-lg font-medium text-[#7A746B] leading-relaxed">
            I’m a UX/UI designer and developer blending soft, intentional 
            aesthetics with functional, clean code. Currently building 
            accessible solutions in Calgary.
          </p>

          <div className="pt-8">
            <Link href="/portfolio" className="group flex items-center gap-3 rounded-full bg-[#3D3A35] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#8B7E66] shadow-xl shadow-[#3D3A35]/10">
              Explore Portfolio <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </header>

      {/* --- CAPABILITIES SECTION --- */}
      <section className="py-32 px-10 bg-[#FAF9F6] border-y border-[#F2EDE4]">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="space-y-6 group">
              <div className="p-3 w-fit rounded-2xl bg-white border border-[#F2EDE4] text-[#BCAC94] transition-colors group-hover:bg-[#BCAC94] group-hover:text-white">
                <Palette size={24} />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest">Interface Design</h3>
              <p className="text-sm leading-relaxed text-[#7A746B]">Creating visual harmony through balanced layouts, soft palettes, and user-centric Figma prototypes.</p>
            </div>
            
            <div className="space-y-6 group">
              <div className="p-3 w-fit rounded-2xl bg-white border border-[#F2EDE4] text-[#BCAC94] transition-colors group-hover:bg-[#BCAC94] group-hover:text-white">
                <Flower2 size={24} />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest">Clean Development</h3>
              <p className="text-sm leading-relaxed text-[#7A746B]">Building responsive, interactive spaces using React and Next.js, with a focus on code quality.</p>
            </div>

            <div className="space-y-6 group">
              <div className="p-3 w-fit rounded-2xl bg-white border border-[#F2EDE4] text-[#BCAC94] transition-colors group-hover:bg-[#BCAC94] group-hover:text-white">
                <Cloud size={24} />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest">Digital Strategy</h3>
              <p className="text-sm leading-relaxed text-[#7A746B]">Optimizing presence through SEO, web management, and ensuring every space is accessible to all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- IMAGE GALLERY (REFINED) --- */}
      <section className="py-32 px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="relative group overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2000&auto=format&fit=crop" 
                alt="Aesthetic 1"
                className="aspect-[16/11] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#3D3A35]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="relative group overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2070&auto=format&fit=crop" 
                alt="Aesthetic 2"
                className="aspect-[16/11] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#3D3A35]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 bg-white text-center border-t border-[#F2EDE4]">
        <div className="mx-auto max-w-lg space-y-10 px-6">
          <p className="font-serif italic text-2xl text-[#3D3A35]">Intentional design, <br />built with care.</p>
          <div className="flex justify-center gap-10 text-[#BCAC94]">
            <a href="https://github.com/zeynep-ozdemir1905" className="hover:text-[#3D3A35] transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/zeynep-ozdemir-396010335/" className="hover:text-[#3D3A35] transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:barikazeynep2@gmail.com" className="hover:text-[#3D3A35] transition-colors"><Mail size={24} /></a>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#BCAC94]">© 2026 ZEYNEP OZDEMIR • CALGARY</p>
        </div>
      </footer>
    </div>
  );
}