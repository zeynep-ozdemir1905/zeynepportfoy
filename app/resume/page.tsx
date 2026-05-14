import Image from "next/image";
import Link from "next/link";

const skills = {
  Languages: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  Frameworks: ["React", "React Native (Expo)", "Next.js", "Tailwind CSS"],
  "Tools & CI/CD": ["Git", "GitHub", "Vite", "Jenkins (familiar)", "npm / package management"],
  "Design & UX": ["Figma", "Adobe XD", "Responsive Design", "Accessibility", "WordPress"],
  Exposure: [
    "Agile / Scrum",
    "Code Review",
    "Debugging",
    "Testing",
    "Documentation",
    "Claude and AI tools",
    "CI/CD",
    "Dependency Management",
    "Front-End DevOps",
  ],
};

const experience = [
  {
    role: "UX/UI Designer & Front-End Developer",
    company: "Drill Sense",
    period: "2024 - Present",
    location: "Calgary, AB",
    bullets: [
      "Designed and implemented reusable, responsive UI components using Next.js, TypeScript, HTML, and CSS with WCAG accessibility standards.",
      "Translated Figma prototypes into production-ready interfaces, bridging design and engineering in agile delivery.",
      "Participated in iterative development cycles, code review, and documentation to support team quality.",
      "Conducted user research and integrated feedback to improve usability and release quality.",
      "Collaborated with cross-functional teammates to communicate scope, surface risks, and deliver on schedule.",
    ],
  },
  {
    role: "UX/UI Designer & Web Developer",
    company: "Sky Air Supply Ltd.",
    period: "2023 - 2024",
    location: "Calgary, AB",
    bullets: [
      "Built and maintained responsive web pages with HTML, CSS, and JavaScript across devices.",
      "Developed UI concepts in Figma and Adobe XD and implemented accessible user-facing interfaces.",
      "Improved usability through testing and debugging while managing website content via CMS tools.",
    ],
  },
  {
    role: "Intern Web Designer & Developer",
    company: "MLC Subsea Navigation",
    period: "2026 (Contract)",
    location: "Calgary, AB",
    bullets: [
      "Designed and developed a full business website independently from discovery to deployment.",
      "Built a responsive multi-page site using Vite, JavaScript, and Tailwind CSS.",
      "Used Claude AI to accelerate content generation and design iteration.",
      "Delivered production-ready pages with consistent branding, hierarchy, and navigation.",
    ],
  },
  {
    role: "Social Media & Website Manager (Volunteer)",
    company: "IDI Calgary",
    period: "2022 - Present",
    location: "Calgary, AB",
    bullets: [
      "Managed Instagram, Facebook, and YouTube content to increase engagement and brand visibility.",
      "Created campaign visuals in Figma and Adobe XD for events and communications.",
      "Maintained WordPress content and improved site performance, SEO, and usability.",
      "Tracked analytics and used data-driven insights to improve content strategy.",
    ],
  },
  {
    role: "UI Designer (Intern)",
    company: "Drill Sense",
    period: "2025-2026 January",
    location: "Calgary, AB",
    bullets: [
      "Designed high-fidelity UI mockups and prototypes in Figma.",
      "Created campaign visuals in Figma and Adobe XD for events and communications.",
      "Designed user interfaces that prioritize usability and accessibility.",
      "Tracked analytics and used data-driven insights to improve user experience.",
    ],
  },

];

const projects = [
  "GoApricot Mobile App - Lead Designer & Developer (React Native Expo, TypeScript, Tailwind CSS)",
  "Apply Alberta Mobile App - Developer (TypeScript, React Native)",
  "MLC Subsea Navigation Website - Front-End Developer (Vite, JavaScript, CSS)",
];

const heroImage =
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80";
const sideImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";
const accentImage =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#3a3350] text-stone-200">
      <div className="relative h-[min(52vh,420px)] w-full overflow-hidden">
        <Image
          src={heroImage}
          alt="Workspace photography for resume header"
          fill
          priority
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#141018] via-[#141018]/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-[#141018]/80 via-transparent to-fuchsia-900/20" />
        <div className="relative mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-10 pt-24">
          <Link
            href="/"
            className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-100 backdrop-blur-md hover:border-fuchsia-400/50"
          >
            Portfolio
          </Link>
          <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-200/90">Resume · high fidelity</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">Zeynep Ozdemir</h1>
          <p className="mt-2 text-sm text-stone-300">Junior Software Developer · Frontend · Calgary, AB</p>
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-stone-500 sm:text-[13px] sm:text-stone-400">
            <span className="block sm:inline">barikazeynep2@gmail.com</span>
            <span className="mx-0 text-stone-600 sm:mx-2" aria-hidden>
              ·
            </span>
            <span className="block sm:inline">(587) 664-6405</span>
            <span className="mx-0 text-stone-600 sm:mx-2" aria-hidden>
              ·
            </span>
            <span className="text-stone-400">Open to work</span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-12">
        <section className="grid gap-6 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-55 w-full shrink-0 overflow-hidden lg:min-h-75">
            <Image
              src={sideImage}
              alt="Team collaboration photography"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-zinc-900/90 lg:bg-linear-to-t lg:from-zinc-900/20 lg:to-zinc-900/90" />
          </div>
          <div className="p-8">
            <h2 className="text-xl font-semibold text-stone-100">Summary</h2>
            <p className="mt-4 leading-relaxed text-stone-400">
              Frontend-focused Software Developer with hands-on experience building responsive, accessible web and mobile
              applications using TypeScript, React, and Next.js. Proven ability to translate design prototypes into
              production-ready interfaces, collaborate in agile cross-functional teams, and contribute across the
              software delivery lifecycle from code review to shipping.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 md:h-56 md:w-52">
              <Image
                src={accentImage}
                alt="Creative workspace photography"
                fill
                className="object-cover"
                sizes="208px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-semibold text-stone-100">Technical skills</h3>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                    <p className="text-sm font-semibold text-fuchsia-200/90">{group}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-stone-100">Experience</h3>
          <div className="mt-6 space-y-6">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                <h4 className="text-base font-semibold text-stone-100">{item.role}</h4>
                <p className="text-sm text-fuchsia-200/90">
                  {item.company} · {item.location}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{item.period}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-stone-400">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-stone-100">Projects</h3>
          <ul className="mt-4 space-y-2 text-sm text-stone-400">
            {projects.map((project) => (
              <li key={project}>• {project}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-stone-100">Education</h3>
          <div className="mt-4 space-y-4 text-sm text-stone-400">
            <p>
              <span className="font-semibold text-stone-100">Bachelor of Information Technology (Software Development)</span>
              <br />
              Southern Alberta Institute of Technology (SAIT), Calgary, AB · Expected April 2028
            </p>
            <p>
              <span className="font-semibold text-stone-100">Diploma, Information Technology (Software Development)</span>
              <br />
              Southern Alberta Institute of Technology (SAIT), Calgary, AB · April 2026
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
