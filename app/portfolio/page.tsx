"use client";

import Link from 'next/link';
import { ArrowLeft, Star, Layout, Smartphone, Flower2, Sparkles, ChevronRight } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] text-[#3D3A35] selection:bg-[#F3EFE0] selection:text-[#8B7E66]">
      
      {/* --- SUBTLE DECORATIONS --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] right-[2%] text-[#BCAC94] opacity-20"><Sparkles size={60} /></div>
        <div className="absolute bottom-[10%] left-[2%] text-[#BCAC94] opacity-20 rotate-12"><Flower2 size={50} /></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 z-50 w-full bg-[#FDFCF7]/90 backdrop-blur-md border-b border-[#F2EDE4]">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-5 px-8">
          <Link href="/" className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B7E66] transition-all hover:text-[#3D3A35]">
            <ArrowLeft size={14} /> Back Home
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-serif italic font-semibold text-[#3D3A35]">Selected Projects</span>
            <Star size={14} className="fill-[#BCAC94] text-[#BCAC94]" />
          </div>
        </div>
      </nav>

      {/* --- HEADER --- */}
      <header className="pt-40 pb-20 px-6 text-center">
        <div className="flex justify-center mb-4">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#BCAC94]">Portfolio</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-[#3D3A35]">
          Digital <i className="font-serif italic text-[#BCAC94]">Creations</i>
        </h1>
        <p className="mt-6 text-[#7A746B] text-lg max-w-xl mx-auto font-light leading-relaxed">
          A curated collection of digital spaces designed with an emphasis on 
          intentionality, accessibility, and modern aesthetics.
        </p>
      </header>

      <main className="mx-auto max-w-6xl p-6 pb-32 space-y-40">
        
        {/* PROJECT 1: GO APRICOT */}
        <section className="grid gap-16 lg:grid-cols-[1fr_550px] items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-[#BCAC94]">
                <Layout size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Mobile Application</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#3D3A35]">Pricot</h2>
            </div>
            
            <p className="text-lg text-[#7A746B] leading-relaxed font-light">
              Designed during my time at SAIT <span className="font-medium text-[#3D3A35]">CAPCON</span>. 
              designed Go Apricot to bridge the gap between complex industrial backend data and the human engineer. 
              By focusing on reduced cognitive friction and high-visibility interaction patterns, 
              I transformed a high-density data environment into a streamlined mobile experience that prioritizes safety and speed.
            </p>

            <div className="flex flex-wrap gap-3">
              {["User Research", "Systems Design", "Dashboard UI"].map(tag => (
                <span key={tag} className="rounded-full border border-[#F2EDE4] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8B7E66]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 group">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border-[8px] border-white bg-white shadow-xl shadow-[#3D3A35]/5 transition-transform duration-700 group-hover:scale-[1.02]">
              <iframe 
                className="h-full w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                src="https://embed.figma.com/design/90lijAgk5ZeqkDhio7gfR1/Capstone-Employee?node-id=0-1&embed-host=share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* PROJECT 2: DRILL SENSE */}
        <section className="grid gap-16 lg:grid-cols-[550px_1fr] items-center">
          <div className="group">
            <div className="relative aspect-[3/4] w-full max-w-[420px] mx-auto overflow-hidden rounded-[32px] border-[8px] border-white bg-white shadow-xl shadow-[#3D3A35]/5 transition-transform duration-700 group-hover:scale-[1.02]">
              <iframe 
                className="h-full w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                src="https://embed.figma.com/design/qhs7vi6wQTljzR0POBCpWJ/ds_projectdrillsense?node-id=0-1&embed-host=share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-[#BCAC94]">
                <Smartphone size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Web Application</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#3D3A35]">Drill Sense</h2>
            </div>

            <p className="text-lg text-[#7A746B] leading-relaxed font-light">
              A web application transformation focusing on strict WCAG accessibility standards. 
              The goal was to provide Drill Sense users with a seamless, high-utility 
              experience that maintains a high-end visual language.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Accessibility", "Mobile First", "Prototyping"].map(tag => (
                <span key={tag} className="rounded-full border border-[#F2EDE4] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8B7E66]">
                  {tag}
                </span>
              ))}
            </div>
            {/* PROJECT 3: PLANORA */}
        <section className="grid gap-16 lg:grid-cols-[550px_1fr] items-center">
          <div className="group">
            <div className="relative aspect-[3/4] w-full max-w-[420px] mx-auto overflow-hidden rounded-[32px] border-[8px] border-white bg-white shadow-xl shadow-[#3D3A35]/5 transition-transform duration-700 group-hover:scale-[1.02]">
              <iframe 
                className="h-full w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                src="https://embed.figma.com/design/ZIxG5D5drpF2LyQ9SKxIcm/planora?node-id=0-1&embed-host=share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-[#BCAC94]">
                <Smartphone size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Mobile Application</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-[#3D3A35]">PLANORA</h2>
            </div>

            <p className="text-lg text-[#7A746B] leading-relaxed font-light">
              A mobile application transformation focusing on students' needs. 
              The goal was to provide students have an app to keep everything in one place, a wireframing process was used during this project to ensure users had a seamless, high-utility 
              experience that maintains a high-end visual language.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Accessibility", "Mobile First", "Prototyping"].map(tag => (
                <span key={tag} className="rounded-full border border-[#F2EDE4] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8B7E66]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
            <div className="pt-4 flex items-center gap-4 text-[#BCAC94]">
              <Flower2 className="animate-spin-slow" size={32} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Designed with Intention</span>
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-32 text-center border-t border-[#F2EDE4]">
          <h2 className="font-serif italic text-3xl text-[#3D3A35] mb-8">Let's build something <br/>meaningful together.</h2>
          <a href="mailto:barikazeynep2@gmail.com" className="group inline-flex items-center gap-3 rounded-full bg-[#3D3A35] px-12 py-5 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#8B7E66] transition-all shadow-lg shadow-[#3D3A35]/10">
            Get in Touch <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-20 text-[9px] font-black uppercase tracking-[0.5em] text-[#BCAC94]">Zeynep Ozdemir • Calgary • 2026</p>
      </footer>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}