"use client";

import Link from 'next/link';
import { 
  ArrowLeft, Star, Layout, Smartphone, Flower2, 
  Sparkles, ChevronRight, Home, User, GraduationCap, 
  Briefcase, Mail, Github, Linkedin, Smartphone as PhoneIcon
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen bg-white text-[#3D3A35] selection:bg-[#F3EFE0]">
      
      {/* --- SIDEBAR (Dark Theme from Screenshot) --- */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-[#050B18] text-white z-50 flex flex-col py-10">
        <div className="mb-12 text-center px-6">
          <div className="w-28 h-28 rounded-full border-4 border-[#1E293B] overflow-hidden mb-6 mx-auto">
            <img 
              src="https://www.canva.com/facebook-covers/templates/" // Replace with your image
              alt="Zeynep Ozdemir" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Zeynep Ozdemir</h2>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">UX Designer & Dev</p>
        </div>

        <nav className="flex-1 w-full px-4 space-y-1">
          {[
            { id: 'home', label: 'Home', icon: <Home size={20} />, href: "/" },
            { id: 'portfolio', label: 'Portfolio', icon: <Layout size={20} />, href: "#top" },
            { id: 'resume', label: 'Resume', icon: <Briefcase size={20} />, href: "/about" },
            { id: 'contact', label: 'Contact', icon: <Mail size={20} />, href: "mailto:barikazeynep2@gmail.com" },
          ].map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-4 py-3 px-6 rounded-lg transition-all duration-300 ${
                item.id === 'portfolio' ? 'text-[#3498db]' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className={item.id === 'portfolio' ? 'text-[#3498db]' : ''}>{item.icon}</span>
              <span className="text-sm font-semibold tracking-wide">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Social Icons at Bottom */}
        <div className="px-6 flex gap-4 mt-auto opacity-70">
           <a href="#" className="hover:text-[#3498db] transition-colors"><Github size={18} /></a>
           <a href="#" className="hover:text-[#3498db] transition-colors"><Linkedin size={18} /></a>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 ml-72">
        
        {/* HERO SECTION (Background Overlay from Screenshot) */}
        <section id="top" className="relative h-[60vh] flex flex-col justify-center px-20 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#050B18]/80" /> {/* Dark Overlay */}
          
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-4">
              Zeynep Ozdemir
            </h1>
            <div className="inline-block px-4 py-1 border-b-2 border-[#3498db]">
                <p className="text-xl md:text-2xl text-white font-light tracking-wide">
                   I'm a <span className="font-bold">UX/UI Designer & Developer</span>
                </p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <div className="px-20 py-24 bg-white">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#050B18] mb-2">Selected Works</h2>
            <div className="w-16 h-1 bg-[#3498db]" />
          </div>

          <div className="space-y-40">
            {/* PROJECT 1: GO APRICOT */}
            <section className="grid gap-16 lg:grid-cols-2 items-start">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#3498db]">
                  <Smartphone size={24} />
                  <span className="text-sm font-bold uppercase tracking-widest">Mobile Application</span>
                </div>
                <h3 className="text-3xl font-bold text-[#050B18]">Go Apricot</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  A workforce management system designed to bridge the gap between complex industrial data 
                  and user interaction. Created for a cleaning company at SAIT to streamline employee check-ins.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Azure", "UI Design"].map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 px-4 py-1 text-xs font-bold rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-video">
                <iframe 
                  className="w-full h-full"
                  src="https://embed.figma.com/design/90lijAgk5ZeqkDhio7gfR1/Capstone-Employee?node-id=0-1&embed-host=share" 
                  allowFullScreen
                ></iframe>
              </div>
            </section>

            {/* PROJECT 2: DRILL SENSE */}
            <section className="grid gap-16 lg:grid-cols-2 items-start">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[3/4] order-2 lg:order-1">
                <iframe 
                  className="w-full h-full"
                  src="https://embed.figma.com/design/qhs7vi6wQTljzR0POBCpWJ/ds_projectdrillsense?node-id=0-1&embed-host=share" 
                  allowFullScreen
                ></iframe>
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3 text-[#3498db]">
                  <Layout size={24} />
                  <span className="text-sm font-bold uppercase tracking-widest">Web Application</span>
                </div>
                <h3 className="text-3xl font-bold text-[#050B18]">Drill Sense</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  An enterprise transformation focusing on strict WCAG accessibility. This dashboard 
                  provides real-time industrial data visualization with a clean, high-end aesthetic.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["WCAG 2.1", "Next.js", "Dashboard"].map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 px-4 py-1 text-xs font-bold rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* FOOTER (Consistent with Sidebar Color) */}
        <footer className="bg-[#050B18] py-20 px-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Let's build something together.</h2>
          <a href="mailto:barikazeynep2@gmail.com" className="inline-flex items-center gap-3 bg-[#3498db] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition-all">
            Get in Touch <ChevronRight size={18} />
          </a>
          <p className="mt-16 text-[10px] tracking-[0.4em] text-slate-500 uppercase">
            Zeynep Ozdemir • Calgary, AB • 2026
          </p>
        </footer>
      </main>
    </div>
  );
}