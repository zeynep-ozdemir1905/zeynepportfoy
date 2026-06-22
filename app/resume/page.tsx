import Image from "next/image";
import Link from "next/link";
import {
  EDUCATION,
  EXPERIENCE,
  RESUME_PDF,
  RESUME_SUMMARY,
  SKILL_GROUPS,
  VOLUNTEER,
  projects,
} from "@/app/data/portfolio";

const heroImage =
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80";
const sideImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";
const accentImage =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80";

const resumeProjects = [
  {
    title: "GoApricot Mobile App",
    role: "Lead Designer & Developer · 2026",
    detail: projects.find((p) => p.id === "go-apricot")?.details ?? "",
  },
  {
    title: "Apply Alberta Website (Campus Navigator)",
    role: "Lead Designer & Front-End Design · 2026",
    detail: projects.find((p) => p.id === "apply-alberta")?.details ?? "",
  },
  {
    title: "MLC Subsea Navigation Website",
    role: "Frontend Developer & UI Researcher · 2026",
    detail: projects.find((p) => p.id === "mlc")?.details ?? "",
  },
  {
    title: "LockIn AI",
    role: "Hackathon Community Choice Award",
    detail: projects.find((p) => p.id === "lockin-ai")?.details ?? "",
  },
];

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
          <div className="absolute right-6 top-6 flex flex-wrap gap-2">
            <a
              href={RESUME_PDF.href}
              download={RESUME_PDF.fileName}
              className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-100 backdrop-blur-md hover:border-fuchsia-400/50"
            >
              Download PDF
            </a>
            <Link
              href="/"
              className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-100 backdrop-blur-md hover:border-fuchsia-400/50"
            >
              Portfolio
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-200/90">Resume · ATS aligned</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">Zeynep Ozdemir</h1>
          <p className="mt-2 text-sm text-stone-300">
            Junior Frontend Developer · UI/UX Designer · Web Designer · Calgary, AB
          </p>
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-stone-500 sm:text-[13px] sm:text-stone-400">
            <span className="block sm:inline">barikazeynep2@gmail.com</span>
            <span className="mx-0 text-stone-600 sm:mx-2" aria-hidden>
              ·
            </span>
            <span className="block sm:inline">(587) 664-6405</span>
            <span className="mx-0 text-stone-600 sm:mx-2" aria-hidden>
              ·
            </span>
            <span className="text-stone-400">Open to Calgary</span>
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
            <h2 className="text-xl font-semibold text-stone-100">Professional summary</h2>
            <p className="mt-4 leading-relaxed text-stone-400">{RESUME_SUMMARY}</p>
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
                {SKILL_GROUPS.map((group) => (
                  <div key={group.group}>
                    <p className="text-sm font-semibold text-fuchsia-200/90">{group.group}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
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
            {EXPERIENCE.map((item) => (
              <article key={`${item.company}-${item.role}`} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                <h4 className="text-base font-semibold text-stone-100">{item.role}</h4>
                <p className="text-sm text-fuchsia-200/90">
                  {item.company} · {item.location}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{item.date}</p>
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
          <h3 className="text-xl font-semibold text-stone-100">Volunteer experience</h3>
          <div className="mt-6 space-y-5">
            {VOLUNTEER.filter((role) => role.org).map((role) => (
              <article key={`${role.org}-${role.title}`}>
                <h4 className="text-base font-semibold text-stone-100">{role.title}</h4>
                <p className="text-sm text-fuchsia-200/90">{role.org}</p>
                {role.period ? (
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{role.period}</p>
                ) : null}
                <p className="mt-2 text-sm text-stone-400">{role.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-stone-100">Projects</h3>
          <div className="mt-4 space-y-5">
            {resumeProjects.map((project) => (
              <div key={project.title}>
                <p className="text-sm font-semibold text-stone-100">
                  {project.title} — {project.role}
                </p>
                <p className="mt-1 text-sm text-stone-400">{project.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-stone-100">Education</h3>
          <div className="mt-4 space-y-4 text-sm text-stone-400">
            {EDUCATION.map((edu) => (
              <p key={edu.degree}>
                <span className="font-semibold text-stone-100">{edu.degree}</span>
                <br />
                {edu.school}, {edu.location} · {edu.date}
              </p>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
