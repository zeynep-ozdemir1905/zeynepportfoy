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
];

const projects = [
  "GoApricot Mobile App - Lead Designer & Developer (React Native Expo, TypeScript, Tailwind CSS)",
  "Apply Alberta Mobile App - Developer (TypeScript, React Native)",
  "MLC Subsea Navigation Website - Front-End Developer (Vite, JavaScript, CSS)",
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffdf9_0%,#fff6f2_100%)] px-6 py-12 text-stone-700">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-stone-800">Resume</h1>
          <Link href="/" className="rounded-full border border-rose-200 bg-white px-4 py-2 text-sm text-rose-500 hover:bg-rose-50">
            Back to Portfolio
          </Link>
        </div>

        <section className="rounded-2xl border border-rose-100 bg-white/80 p-6 shadow-[0_12px_30px_rgba(196,166,178,0.14)]">
          <h2 className="text-2xl font-semibold text-stone-800">Zeynep Ozdemir</h2>
          <p className="mt-1 text-sm text-stone-600">Junior Software Developer - Frontend</p>
          <p className="mt-2 text-sm text-stone-600">Calgary, AB (Open to BC and ON) · barikazeynep2@gmail.com · (587) 664-6405</p>
          <p className="mt-4 leading-relaxed text-stone-600">
            Frontend-focused Software Developer with hands-on experience building responsive, accessible web and mobile
            applications using TypeScript, React, and Next.js. Proven ability to translate design prototypes into
            production-ready interfaces, collaborate in agile cross-functional teams, and contribute across the
            software delivery lifecycle from code review to shipping.
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-rose-100 bg-white/80 p-6 shadow-[0_12px_30px_rgba(196,166,178,0.14)]">
          <h3 className="text-xl font-semibold text-stone-800">Technical Skills</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="text-sm font-semibold text-rose-500">{group}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-rose-100 bg-[#fffaf7] px-3 py-1 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-rose-100 bg-white/80 p-6 shadow-[0_12px_30px_rgba(196,166,178,0.14)]">
          <h3 className="text-xl font-semibold text-stone-800">Experience</h3>
          <div className="mt-5 space-y-5">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`}>
                <h4 className="text-base font-semibold text-stone-800">{item.role}</h4>
                <p className="text-sm text-rose-500">{item.company} · {item.location}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{item.period}</p>
                <ul className="mt-2 space-y-1.5 text-sm text-stone-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-rose-100 bg-white/80 p-6 shadow-[0_12px_30px_rgba(196,166,178,0.14)]">
          <h3 className="text-xl font-semibold text-stone-800">Projects</h3>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            {projects.map((project) => (
              <li key={project}>• {project}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-rose-100 bg-white/80 p-6 shadow-[0_12px_30px_rgba(196,166,178,0.14)]">
          <h3 className="text-xl font-semibold text-stone-800">Education</h3>
          <div className="mt-3 space-y-3 text-sm text-stone-600">
            <p>
              <span className="font-semibold text-stone-800">Bachelor of Information Technology (Software Development)</span><br />
              Southern Alberta Institute of Technology (SAIT), Calgary, AB · Expected April 2028
            </p>
            <p>
              <span className="font-semibold text-stone-800">Diploma, Information Technology (Software Development)</span><br />
              Southern Alberta Institute of Technology (SAIT), Calgary, AB · April 2026
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
