"use client";

import Link from 'next/link';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Star,
  Sparkles,
  Heart,
  ExternalLink
} from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] text-[#3D3A35] selection:bg-[#F3EFE0] selection:text-[#8B7E66]">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 z-50 w-full bg-[#FDFCF7]/90 backdrop-blur-md border-b border-[#F2EDE4]">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-5 px-8">
          <Link href="/" className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B7E66] transition-all hover:text-[#3D3A35]">
            <ArrowLeft size={14} /> Back Home
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-serif italic font-semibold text-[#3D3A35]">Experience</span>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 pt-40 pb-24">
        
        {/* --- HEADER / CONTACT CARD --- */}
        <section className="relative overflow-hidden rounded-[32px] bg-white p-10 md:p-16 border border-[#F2EDE4] shadow-sm">
          <div className="absolute top-0 right-0 p-10 text-[#F2EDE4]">
            <Sparkles size={100} />
          </div>
          
          <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-[#3D3A35]">Zeynep Ozdemir</h1>
            <p className="mt-4 text-lg font-light tracking-wide text-[#8B7E66] uppercase">
              UX/UI Designer • Front-End Developer
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-8 text-[11px] font-bold uppercase tracking-widest text-[#3D3A35]">
              <a href="mailto:barikazeynep2@gmail.com" className="flex items-center gap-2 border-b border-transparent hover:border-[#3D3A35] transition-all">
                <Mail size={16} className="text-[#BCAC94]" /> barikazeynep2@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-[#BCAC94]" /> (587) 664-6405
              </span>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="https://www.linkedin.com/in/zeynep-ozdemir-396010335/" target="_blank" className="flex items-center gap-2 rounded-full border border-[#F2EDE4] px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#8B7E66] hover:bg-[#FDFCF7] transition-all">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="https://github.com/zeynep-ozdemir1905" target="_blank" className="flex items-center gap-2 rounded-full border border-[#F2EDE4] px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#8B7E66] hover:bg-[#FDFCF7] transition-all">
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>
        </section>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_320px]">
          
          {/* --- LEFT COLUMN: EXPERIENCE --- */}
          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px w-8 bg-[#BCAC94]"></div>
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#BCAC94]">Experience</h2>
              </div>

              <div className="space-y-12 border-l border-[#F2EDE4] ml-2 pl-10">
                {/* Drill Sense */}
                <div className="relative">
                  <div className="absolute -left-[45px] top-1.5 h-2 w-2 rounded-full bg-[#3D3A35]" />
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-[#3D3A35]">UX/UI Designer & Developer</h3>
                      <p className="font-serif italic text-[#8B7E66]">Drill Sense — Calgary, AB</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#BCAC94] bg-[#FAF9F6] px-3 py-1 rounded-md">Dec 2025 – Present</span>
                  </div>
                  <ul className="mt-6 space-y-4 text-sm text-[#7A746B] font-light leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-[#BCAC94]">•</span>
                      Architecting high-performance dashboards for real-time industrial data visualization.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#BCAC94]">•</span>
                      Leading the transition to Next.js to improve software responsiveness and SEO.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#BCAC94]">•</span>
                      Auditing and implementing WCAG accessibility standards across the enterprise portal.
                    </li>
                  </ul>
                </div>

                {/* IDI Calgary */}
                <div className="relative">
                  <div className="absolute -left-[45px] top-1.5 h-2 w-2 rounded-full bg-[#D9D1C1]" />
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-[#3D3A35]">Website & Engagement Manager</h3>
                      <p className="font-serif italic text-[#8B7E66]">IDI Calgary (Volunteer)</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#BCAC94]">Jun 2025 – Present</span>
                  </div>
                  <p className="mt-4 text-sm text-[#7A746B] font-light leading-relaxed">
                    Modernizing the digital presence through WordPress optimization and community-focused 
                    social strategy, resulting in increased engagement and visibility.
                  </p>
                </div>

                {/* Sky Air Supply */}
                <div className="relative">
                  <div className="absolute -left-[45px] top-1.5 h-2 w-2 rounded-full bg-[#D9D1C1]" />
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-[#3D3A35]">Web Editor & Designer</h3>
                      <p className="font-serif italic text-[#8B7E66]">Sky Air Supply LTD. (Co-op)</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#BCAC94]">June – Aug 2025</span>
                  </div>
                  <p className="mt-4 text-sm text-[#7A746B] font-light leading-relaxed">
                    Developed high-fidelity prototypes in Figma for internal corporate tools and managed 
                    technical documentation for the engineering department.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN: SKILLS & EDU --- */}
          <div className="space-y-16">
            {/* SKILLS */}
            <section className="space-y-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#BCAC94] flex items-center gap-2">
                <Star size={14} /> Technical Toolkit
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Next.js", "React Native", "Tailwind", "JavaScript", "SEO", "WordPress", "Node.js"].map((skill) => (
                  <span key={skill} className="rounded-full border border-[#F2EDE4] bg-white px-4 py-2 text-[10px] font-bold text-[#3D3A35]">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* EDUCATION */}
            <section className="space-y-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#BCAC94] flex items-center gap-2">
                <GraduationCap size={14} /> Academic
              </h2>
              <div className="border-l border-[#F2EDE4] pl-6 space-y-2">
                <p className="font-bold text-[#3D3A35] text-sm">SAIT</p>
                <p className="text-xs italic font-serif text-[#8B7E66]">B.IT Software Development</p>
                <p className="text-[9px] font-bold text-[#BCAC94] uppercase tracking-tighter">Class of 2028</p>
              </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className="space-y-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#BCAC94] flex items-center gap-2">
                <Award size={14} /> Certifications
              </h2>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-[#8B7E66]">
                <li className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-[#BCAC94]" /> 
                  Reconciliation Certificate
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-[#BCAC94]" /> 
                  Childcare Level 1
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-[#BCAC94]" /> 
                  CPR & First Aid
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center border-t border-[#F2EDE4] bg-white">
        <p className="text-[9px] font-black uppercase tracking-[0.6em] text-[#BCAC94]">
          Zeynep Ozdemir • Calgary, AB 
        </p>
      </footer>
    </div>
  );
}