"use client";

import Link from 'next/link';
import { 
  ArrowLeft, Mail, Phone, Linkedin, Github, 
  GraduationCap, Briefcase, Award, Star, 
  Sparkles, Home, User
} from "lucide-react";

export default function Resume() {
  return (
    <div className="flex min-h-screen bg-[#FDFCF7] text-[#3D3A35] selection:bg-[#F3EFE0]">
      
      {/* --- SIDEBAR NAVIGATION (The Mehdi Style) --- */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-[#0F172A] text-white z-50 flex flex-col py-12">
        {/* Profile Circle */}
        <div className="mb-10 text-center px-6">
          <div className="w-32 h-32 rounded-full border-4 border-[#1E293B] overflow-hidden mb-6 mx-auto bg-white">
            <img 
              src="https://www.canva.com/facebook-covers/templates/" 
              alt="Zeynep Ozdemir" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="text-xl font-serif font-medium tracking-tight">Zeynep Ozdemir</h2>
          <p className="text-[10px] text-[#BCAC94] font-bold uppercase tracking-widest mt-2">UX Designer & Dev</p>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 w-full px-6 space-y-1">
          {[
            { id: 'home', label: 'Home', icon: <Home size={18} />, href: "/" },
            { id: 'about', label: 'About', icon: <User size={18} />, href: "#about" },
            { id: 'education', label: 'Education', icon: <GraduationCap size={18} />, href: "#education" },
            { id: 'experience', label: 'Experience', icon: <Briefcase size={18} />, href: "#experience" },
            { id: 'skills', label: 'Skills', icon: <Star size={18} />, href: "#skills" },
            { id: 'contact', label: 'Contact', icon: <Mail size={18} />, href: "#contact" },
          ].map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-4 py-3 px-4 rounded-xl text-slate-400 hover:text-white hover:bg-[#1E293B] transition-all duration-300"
            >
              {item.icon}
              <span className="text-[11px] font-bold uppercase tracking-widest">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Sidebar Social Icons */}
        <div className="px-10 flex gap-4 mt-auto">
           <a href="https://github.com/zeynep-ozdemir1905" target="_blank" className="text-slate-400 hover:text-[#BCAC94]"><Github size={20} /></a>
           <a href="https://www.linkedin.com/in/zeynep-ozdemir-396010335/" target="_blank" className="text-slate-400 hover:text-[#BCAC94]"><Linkedin size={20} /></a>
        </div>
      </aside>

      {/* --- MAIN CONTENT (Scrollable area) --- */}
      <main className="flex-1 ml-72">
        
        {/* HERO SECTION WITH BACKGROUND (Like the instructor's screenshot) */}
        <section id="home" className="relative h-[60vh] flex flex-col justify-center px-12 md:px-24 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#0F172A]/70" /> {/* Dark overlay */}
          
          <div className="relative z-10">
            <h1 className="font-serif text-6xl md:text-8xl font-medium text-white">Zeynep Ozdemir</h1>
            <div className="h-1 w-24 bg-[#BCAC94] my-6" />
            <p className="text-xl md:text-2xl font-light tracking-[0.2em] text-[#BCAC94] uppercase">
              UX/UI Designer • Front-End Developer
            </p>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 px-12 md:px-24 bg-white">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#3D3A35]">Experience</h2>
            <div className="h-px flex-1 bg-[#F2EDE4]" />
          </div>

          <div className="space-y-16">
            {/* Drill Sense */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
               <span className="text-[11px] font-bold uppercase tracking-widest text-[#BCAC94]">Dec 2025 – Present</span>
               <div>
                  <h3 className="text-2xl font-bold text-[#3D3A35]">UX/UI Designer & Developer</h3>
                  <p className="font-serif italic text-[#8B7E66] text-lg mb-4">Drill Sense — Calgary, AB</p>
                  <ul className="space-y-3 text-[#7A746B] font-light leading-relaxed">
                    <li>• Architecting dashboards for real-time industrial data visualization.</li>
                    <li>• Leading Next.js transitions to improve software responsiveness.</li>
                    <li>• Implementing WCAG accessibility standards for enterprise portals.</li>
                  </ul>
               </div>
            </div>

            {/* IDI Calgary */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
               <span className="text-[11px] font-bold uppercase tracking-widest text-[#BCAC94]">Jun 2025 – Present</span>
               <div>
                  <h3 className="text-2xl font-bold text-[#3D3A35]">Website & Engagement Manager</h3>
                  <p className="font-serif italic text-[#8B7E66] text-lg mb-4">IDI Calgary (Volunteer)</p>
                  <p className="text-[#7A746B] font-light leading-relaxed">
                    Modernizing digital presence through WordPress optimization and community-focused strategy.
                  </p>
               </div>
            </div>
          </div>
         {/* IDI Calgary */}
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
               <span className="text-[11px] font-bold uppercase tracking-widest text-[#BCAC94]">Jun 2025 – Aug 2025</span>
               <div>
                  <h3 className="text-2xl font-bold text-[#3D3A35]">User Interface Designer</h3>
                  <p className="font-serif italic text-[#8B7E66] text-lg mb-4">Sky Air Supplies CO-OP </p>
                  <p className="text-[#7A746B] font-light leading-relaxed">
                    Designer high fidelity user interfaces and brought them to life.
                  </p>
               </div>
            </div>
        </section>


        {/* SKILLS SECTION (Technical Toolkit) */}
        <section id="skills" className="py-24 px-12 md:px-24 bg-[#FAF9F6]">
          <h2 className="text-3xl font-serif font-bold text-[#3D3A35] mb-12">Technical Toolkit</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Figma", "Next.js", "React Native", "Tailwind", "JavaScript", "SEO", "WordPress", "Node.js"].map((skill) => (
              <div key={skill} className="bg-white border border-[#F2EDE4] p-6 rounded-2xl shadow-sm text-center">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#3D3A35]">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT FOOTER */}
        <footer id="contact" className="py-20 px-12 md:px-24 bg-white border-t border-[#F2EDE4]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#BCAC94]">
              Zeynep Ozdemir • Calgary, AB 
            </p>
            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-[#3D3A35]">
              <a href="mailto:barikazeynep2@gmail.com" className="hover:text-[#BCAC94] transition-colors">Email</a>
              <span className="">(587) 664-6405</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}