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
  Sparkles,
  Code2,
  Layers,
  Globe
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#050B18] selection:bg-[#3498db] selection:text-white">
      
      {/* --- MODERN NAV --- */}
      <nav className="fixed top-0 z-50 w-full bg-[#050B18]/95 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-5 px-8">
          <span className="text-xl font-bold tracking-tighter text-white uppercase">Zeynep<span className="text-[#3498db]">.</span></span>
          <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-300">
            <Link href="/portfolio" className="hover:text-[#3498db] transition-colors">Portfolio</Link>
            <Link href="/about" className="hover:text-[#3498db] transition-colors">Resume</Link>
            <Link href="mailto:barikazeynep2@gmail.com" className="bg-[#3498db] text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-all">
              Hire Me
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (High Impact) --- */}
      <header className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174')] bg-cover bg-center">
        {/* Dark Overlay to match reference photo */}
        <div className="absolute inset-0 bg-[#050B18]/85" />
        
        <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
          <div className="px-4 py-1 border border-[#3498db]/30 rounded-full bg-[#3498db]/10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#3498db]">
            Front End Developer & UI Designer
          </div>
          
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tighter sm:text-8xl text-white">
            Building Digital <br />
            <span className="text-[#3498db]">Experiences</span> That Matter.
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed font-light">
            Specializing in React Native, Next.js, and Cloud Infrastructure. 
            Transforming complex requirements into seamless, high-performance interfaces.
          </p>

          <div className="pt-6 flex gap-4">
            <Link href="/portfolio" className="group flex items-center gap-3 rounded-md bg-[#3498db] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-600 shadow-xl shadow-blue-500/20">
              View Work <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="group flex items-center gap-3 rounded-md border border-[#3498db] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#3498db] transition-all hover:bg-[#3498db]/10">
              Learn More <ChevronRight size={16} />
            </Link>
          </div>
         </div>
      </header>

      {/* --- SKILLS/CAPABILITIES (Grid Layout) --- */}
      <section className="py-24 px-10 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#050B18]">Core Expertise</h2>
            <div className="w-12 h-1 bg-[#3498db] mx-auto mt-4" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { 
                title: "UI/UX Architecture", 
                desc: "Focusing on WCAG accessibility and user-centered design systems in Figma.",
                icon: <Layers size={28} /> 
              },
              { 
                title: "Front End Development", 
                desc: "Developing robust applications with React Native, Expo and Next.js.",
                icon: <Code2 size={28} /> 
              },
              { 
                title: "Web Management & Design", 
                desc: "Scaling interfaces via Azure and Docker for industrial-grade performance.",
                icon: <Globe size={28} /> 
              }
            ].map((skill, i) => (
              <div key={i} className="p-10 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-[#3498db]/30 transition-all group">
                <div className="mb-6 text-[#3498db] group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-[#050B18]">{skill.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER (Matches Dark Sidebar Theme) --- */}
      <footer className="py-20 bg-[#050B18] text-center border-t border-white/5">
        <div className="mx-auto max-w-lg space-y-8 px-6">
          <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Zeynep Ozdemir</h2>
          <div className="flex justify-center gap-8 text-slate-400">
            <a href="#" className="hover:text-[#3498db] transition-colors"><Github size={22} /></a>
            <a href="#" className="hover:text-[#3498db] transition-colors"><Linkedin size={22} /></a>
            <a href="#" className="hover:text-[#3498db] transition-colors"><Mail size={22} /></a>
          </div>
          <div className="pt-8 border-t border-white/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500">© 2026 • CALGARY, ALBERTA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}