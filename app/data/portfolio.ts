export type DevicePreview = "mobile" | "desktop" | "dual";

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  accent: string;
  /** How the project appears in device chrome (Figma-style frames) */
  device: DevicePreview;
  /** Figma design file embed (iframe) */
  figma?: string;
  /** Figma prototype — opens in Figma (not embedded) */
  prototype?: string;
  live?: string;
  details: string;
};

/** External link: live site, prototype, or figma */
export function projectPreviewLink(project: Project) {
  return project.live ?? project.prototype ?? project.figma;
}

/** URL safe to load inside an iframe (excludes raw Figma /proto links) */
export function projectEmbedSrc(project: Project) {
  if (project.live) return project.live;
  if (project.figma && !project.figma.includes("/proto/")) return project.figma;
  return undefined;
}

export type UiDesign = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  device: DevicePreview;
  /** Figma embed URL — Share → Embed → copy iframe src (embed.figma.com/...) */
  figma: string;
  /** Optional link to open the file in Figma */
  figmaLink?: string;
  prototype?: string;
  details?: string;
};

/** Add designs here — paste your Figma embed URL into `figma`. */
export const UI_DESIGNS: UiDesign[] = [
  {
    id: "go-apricot-ui",
    number: "01",
    title: "Go Apricot",
    description: "Mobile workforce check-in flows — wireframes through high-fidelity UI.",
    tags: ["Mobile", "UX Research", "Prototyping"],
    accent: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    device: "mobile",
    figma:
      "https://embed.figma.com/design/90lijAgk5ZeqkDhio7gfR1/Capstone-Employee?node-id=0-1&embed-host=share",
    figmaLink: "https://www.figma.com/design/90lijAgk5ZeqkDhio7gfR1/Capstone-Employee",
    details: "Capstone mobile UI exploring industrial check-in workflows with clear hierarchy and touch targets.",
  },
  {
    id: "calgary-gift-card-ui",
    number: "02",
    title: "Calgary Gift Card App",
    description: "Gift-card onboarding and purchase flows with a warm, approachable visual system.",
    tags: ["Mobile", "UI Design", "Wireframes"],
    accent: "linear-gradient(135deg, #f0f9ff 0%, #bae6fd 100%)",
    device: "mobile",
    figma:
      "https://embed.figma.com/design/93G7mly7oPhtVMvHCH9C5a/Wireframe-Zeynep?node-id=0-1&embed-host=share",
    figmaLink: "https://www.figma.com/design/93G7mly7oPhtVMvHCH9C5a/Wireframe-Zeynep",
    details: "Wireframes and polished screens focused on gifting interactions and readable mobile layouts.",
  },
  {
    id: "mlc-dashboard-ui",
    number: "03",
    title: "MLC Enterprise Dashboard",
    description: "Industrial dashboard UI with data clarity and accessibility-first layout decisions.",
    tags: ["Web", "Design System", "Data UI"],
    accent: "linear-gradient(135deg, #e0f2fe 0%, #93c5fd 100%)",
    device: "desktop",
    figma:
      "https://embed.figma.com/design/qhs7vi6wQTljzR0POBCpWJ/ds_projectdrillsense?node-id=0-1&embed-host=share",
    figmaLink: "https://www.figma.com/design/qhs7vi6wQTljzR0POBCpWJ/ds_projectdrillsense",
    prototype:
      "https://www.figma.com/proto/qhs7vi6wQTljzR0POBCpWJ/ds_projectdrillsense?node-id=0-1&t=U6d9Nk78Tav6tFYn-1",
    details: "Enterprise dashboard concept with data clarity and accessibility-first layout decisions.",
  },
  {
    id: "laise-ui",
    number: "04",
    title: "Laise",
    description: "UI design for Laise — polished layouts with clear hierarchy and a cohesive visual system.",
    tags: ["Web", "UI Design", "Figma"],
    accent: "linear-gradient(135deg, #ede9fe 0%, #c4b5fd 100%)",
    device: "desktop",
    figma:
      "https://embed.figma.com/design/QyqmbgUfTTaXKFIdnxtDdw/Laise-Farjeen?node-id=1-2&embed-host=share",
    figmaLink: "https://www.figma.com/design/QyqmbgUfTTaXKFIdnxtDdw/Laise-Farjeen",
    details: "High-fidelity UI screens for Laise with thoughtful spacing, typography, and component structure.",
  },
];

export function uiDesignEmbedSrc(design: UiDesign) {
  if (design.figma && !design.figma.includes("/proto/")) return design.figma;
  return undefined;
}

export function uiDesignPreviewLink(design: UiDesign) {
  return design.prototype ?? design.figmaLink ?? (design.figma || undefined);
}

/** In-page anchors for footer / secondary navigation (header is minimal). */
export const FOOTER_NAV = [
  { label: "Resume", href: "#resume" },
  { label: "Play", href: "#intro" },
  { label: "Projects", href: "#projects" },
  { label: "Internships", href: "#internships" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Coffee chat", href: "#contact" },
  { label: "PDF resume", href: "/Zeynep_Ozdemir_Resume.pdf" },
];

export const PROFILE = {
  name: "Zeynep Ozdemir",
  phoneDisplay: "(587) 664-6405",
  phoneHref: "tel:+15876646405",
  emailDisplay: "barikazeynep2@gmail.com",
  emailHref: "mailto:barikazeynep2@gmail.com",
  city: "Calgary, AB",
  openToWork: true,
};

/** ATS resume PDF served from /public for header download. */
export const RESUME_PDF = {
  href: "/Zeynep_Ozdemir_Resume.pdf",
  fileName: "Zeynep_Ozdemir_Resume.pdf",
  label: "Download resume",
};

export const rotatingTitles = [
  "Junior Frontend Developer",
  "UI/UX Designer",
  "Web Designer",
];

/** Hero — recruiter-first messaging */
export const HERO_COPY = {
  badge: "Open to full-time · Co-op · Contract · Calgary",
  headline: "I deliver accessible, responsive digital products—from Figma concept to production deployment.",
  subline:
    "Frontend developer and UI/UX designer with hands-on experience across web and mobile. I own projects end-to-end with React, Next.js, and TypeScript, and collaborate effectively in agile, cross-functional teams.",
  primaryCta: "See my work",
  secondaryCta: "Schedule a conversation",
};

/** Professional summary — mirrors ATS resume */
export const RESUME_SUMMARY =
  "Frontend Developer and UI/UX Designer with hands-on experience delivering accessible, responsive digital products across web and mobile platforms. Proven ability to own projects end-to-end—from Figma design concepting through production deployment using React, Next.js, and TypeScript. Equally effective working independently on client-facing builds and as a collaborative contributor within agile teams.";

/** Skills ticker (marquee strip). */
export const MARQUEE_ITEMS = [
  "UX Design",
  "•",
  "React",
  "•",
  "Next.js",
  "•",
  "Figma",
  "•",
  "TypeScript",
  "•",
  "Prototyping",
  "•",
  "User-Centered Accessibility",
  "•",
  "Motion Design",
  "•",
  "React Native",
  "•",
  "Azure",
] as const;

export const aboutStats = [
  { label: "Projects Shipped", value: "4+" },
  { label: "Industry Roles", value: "5" },
  { label: "Accessibility", value: "WCAG" },
  { label: "Diploma", value: "2026" },
];

/** Professional roles shown in Experience (community-only roles stay in VOLUNTEER). */
export const EXPERIENCE = [
  {
    date: "Jun 2026 - Jul 2026",
    role: "Web Developer & Web Designer",
    company: "Tech Connect Alberta",
    location: "Calgary, AB · Contract / Summer Internship",
    bullets: [
      "Sole designer and developer on end-to-end website builds for startup clients—from discovery and research through delivery and handoff.",
      "Engineered fully responsive, multi-page websites using HTML, CSS3, JavaScript, and Tailwind CSS with consistent cross-device rendering.",
      "Collaborated with developers and stakeholders to translate business requirements into cohesive UI designs and manage iterative client feedback.",
    ],
  },
  {
    date: "Apr 2026 - Jun 2026",
    role: "Web Designer & Frontend Developer",
    company: "MLC Subsea Navigation",
    location: "Calgary, AB · Contract / Internship",
    bullets: [
      "Sole owner of a complete digital brand website for an international marine and subsea services company—from discovery through deployment.",
      "Engineered a fully responsive, multi-page website using Vite, JavaScript, and Tailwind CSS with fast load performance.",
      "Developed a cohesive visual identity system encompassing typography, colour palette, and layout grid across all pages.",
      "Leveraged Claude AI to accelerate content development and design iteration while maintaining high output quality.",
    ],
  },
  {
    date: "Jul 2025 - Aug 2025",
    role: "Front End Designer & Web Developer",
    company: "Sky Air Supply Ltd.",
    location: "Calgary, AB · Co-op",
    bullets: [
      "Led frontend design and development of responsive, cross-device web experiences using HTML, CSS, and JavaScript.",
      "Drove an iterative UI design process in Figma and Adobe XD, from wireframes through developer-ready prototypes.",
      "Administered and optimized CMS-based content workflows, maintaining brand consistency across published pages.",
    ],
  },
];

export type Internship = {
  date: string;
  title: string;
  org: string;
  location: string;
  highlights: string[];
};

export const INTERNSHIPS: Internship[] = [
  {
    date: "Jun 2026 - Jul 2026",
    title: "Web Developer & Web Designer",
    org: "Tech Connect Alberta",
    location: "Calgary, AB",
    highlights: [
      "End-to-end client website builds from discovery through delivery and handoff.",
      "Responsive multi-page sites with HTML, CSS3, JavaScript, and Tailwind CSS.",
    ],
  },
  {
    date: "Apr 2026 - Jun 2026",
    title: "Web Designer & Frontend Developer",
    org: "MLC Subsea Navigation",
    location: "Calgary, AB",
    highlights: [
      "Complete brand website with Vite, JavaScript, and Tailwind CSS.",
      "Visual identity system and premium cross-device brand presence.",
    ],
  },
];

export type VolunteerRole = {
  title: string;
  org?: string;
  period?: string;
  description: string;
};

export const VOLUNTEER: VolunteerRole[] = [
  {
    title: "Marketing & Designer",
    org: "Enactus SAIT",
    period: "Jun 2026 - Present",
    description:
      "Designed social media graphics and promotional content in Canva and Figma. Produced on-brand campaign assets and used AI tools to streamline content workflows for club outreach.",
  },
  {
    title: "Social Media & Digital Marketing Manager",
    org: "IDI Calgary",
    period: "2022 - Present",
    description:
      "Directed digital presence across Instagram, Facebook, and YouTube. Produced branded graphics in Figma and Adobe XD, managed WordPress with SEO improvements, and used monthly metrics to improve reach and engagement.",
  },
  {
    title: "Fundraiser Manager",
    description:
      "Planned and ran campaigns, coordinated volunteers, and kept donors engaged with clear storytelling and follow-through.",
  },
  {
    title: "Fundraiser Assistant",
    description:
      "Supported event logistics, outreach, and donation tracking so teams could focus on community impact.",
  },
  {
    title: "Math Tutor",
    description:
      "Explained concepts patiently, built confidence, and adapted examples to how each student learns best.",
  },
];

export const EDUCATION = [
  {
    date: "Expected Apr 2028",
    degree: "Bachelor of Information Technology — Software Development",
    school: "Southern Alberta Institute of Technology (SAIT)",
    location: "Calgary, AB",
    note: "Continuing degree pathway following diploma completion.",
  },
  {
    date: "Completed Apr 2026",
    degree: "Diploma — Information Technology, Software Development",
    school: "Southern Alberta Institute of Technology (SAIT)",
    location: "Calgary, AB",
    note: "Focus on UX/UI design, React, and accessible web development.",
  },
];

export const SKILL_GROUPS = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    group: "Frameworks",
    items: ["React", "React Native (Expo)", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Design & UX",
    items: ["Figma", "Adobe XD", "Responsive Design", "Accessibility (WCAG)", "Canva"],
  },
  {
    group: "CMS & Marketing",
    items: ["WordPress", "SEO", "Social Media Management", "Google Analytics"],
  },
  {
    group: "Tools & Practices",
    items: ["Git", "GitHub", "Vite", "Claude AI", "Cursor", "Agile/Scrum", "Code Review", "Front-End DevOps"],
  },
];

export const projects: Project[] = [
  {
    id: "go-apricot",
    number: "01",
    title: "Go Apricot",
    category: "Mobile Application",
    description:
      "Cross-platform mobile app for industrial workforce check-ins — lead designer and developer.",
    tech: ["React Native (Expo)", "TypeScript", "Tailwind CSS", "Figma"],
    accent: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    device: "mobile",
    figma:
      "https://embed.figma.com/design/90lijAgk5ZeqkDhio7gfR1/Capstone-Employee?node-id=0-1&embed-host=share",
    details:
      "Spearheaded end-to-end design and development from concept through App Store-ready build. Designed interactive Figma prototypes, ran user testing, and led Git workflow and code reviews.",
  },
  {
    id: "mlc",
    number: "02",
    title: "MLC Subsea Navigation",
    category: "Web Application",
    description:
      "Professional multi-page website for a marine services client — frontend developer and UI researcher.",
    tech: ["Vite", "JavaScript", "Tailwind CSS", "Figma"],
    accent: "linear-gradient(135deg, #e0f2fe 0%, #93c5fd 100%)",
    device: "desktop",
    prototype:
      "https://www.figma.com/proto/qhs7vi6wQTljzR0POBCpWJ/ds_projectdrillsense?node-id=0-1&t=U6d9Nk78Tav6tFYn-1",
    details:
      "Designed and built a polished, fully responsive product with cohesive visual identity and structured layouts for a premium client-facing brand presence.",
  },
  {
    id: "calgary-gift-card-app",
    number: "03",
    title: "Calgary Gift Card App",
    category: "Mobile Application",
    description:
      "A polished UI concept focused on delightful mobile gifting interactions.",
    tech: ["UI Design", "Figma", "Prototyping"],
    accent: "linear-gradient(135deg, #f0f9ff 0%, #bae6fd 100%)",
    device: "mobile",
    figma:
      "https://embed.figma.com/design/93G7mly7oPhtVMvHCH9C5a/Wireframe-Zeynep?node-id=0-1&embed-host=share",
    details:
      "Crafted onboarding and user flows that balance warmth, usability, and strong visual communication.",
  },
  {
    id: "apply-alberta",
    number: "04",
    title: "Apply Alberta (Campus Navigator)",
    category: "Web Application",
    description:
      "Student guidance platform — lead designer and front-end developer.",
    tech: ["TypeScript", "React Native", "UI Design"],
    accent: "linear-gradient(135deg, #e0f2fe 0%, #7dd3fc 100%)",
    device: "desktop",
    live: "https://campus-navigator-seven.vercel.app/",
    details:
      "Engineered a mobile application with intuitive navigation and performance across device sizes. Contributed to sprint planning, feature scoping, and collaborative debugging within an agile team.",
  },
  {
    id: "voluntr",
    number: "05",
    title: "Voluntr",
    category: "Web Application",
    description: "Volunteer opportunity platform connecting people with community impact.",
    tech: ["UI Design", "Lead Designer", "Front End Development"],
    accent: "linear-gradient(135deg, #dbeafe 0%, #1e3a5f 35%, #93c5fd 100%)",
    device: "dual",
    live: "https://cprg306-project-volunteeringplatform.vercel.app/",
    details:
      "An accessible, user-friendly experience for discovering opportunities, applying, and tracking volunteer progress.",
  },
  {
    id: "Closetcove",
    number: "06",
    title: "Closetcove",
    category: "Web Application",
    description: "A platform for clothe lovers to find and shop clothes. Built for a client. Built with HTML, CSS, JavaScript, and Typescript.",
    tech: ["UI Design", "Lead Designer", "Front End Development"],
    accent: "linear-gradient(135deg, #dbeafe 0%, #1e3a5f 35%, #93c5fd 100%)",
    device: "desktop",
    live: "https://closetcove.vercel.app/",
    details:
      "An accessible, user-friendly experience for finding and shopping clothes.",
  },
  {
    id: "Panghimagas Mo",
    number: "07",
    title: "Panghimagas Mo",
    category: "Web Application",
    description: "A web application for Phlippine food lovers to find and shop food. Built for a client. Built with HTML, CSS, JavaScript, and Typescript.",
    tech: ["UI Design", "Lead Designer", "Front End Development"],
    accent: "linear-gradient(135deg, #dbeafe 0%, #1e3a5f 35%, #93c5fd 100%)",
    device: "desktop",
    live: "https://panghimas-mo.vercel.app/",
    details:
      "An accessible, user-friendly experience for finding and shopping food from local Philippine bakery.",
  },
  {
    id: "lockin-ai",
    number: "08",
    title: "LockIn AI",
    category: "Web Application",
    description:
      "Gamified focus web app — Hackathon Community Choice Award winner.",
    tech: ["UI Design", "Front-End Development", "Hackathon"],
    accent: "linear-gradient(135deg, #ecfdf5 0%, #6ee7b7 100%)",
    device: "desktop",
    details:
      "Built a gamified focus app with timed study sessions and distraction control. Completed sessions grow a virtual garden and a companion character reacts to user progress.",
  },


];

export const socials = [
  { label: "GitHub", href: "https://github.com/zeynep-ozdemir1905" },
  { label: "LinkedIn", href: "https://ca.linkedin.com/in/zeynep-ozdemir-yyc" },
  { label: "Email", href: "mailto:barikazeynep2@gmail.com" },
];

/** Official LinkedIn profile badge — https://www.linkedin.com/badges/profile/create */
export const LINKEDIN_BADGE = {
  vanity: "zeynep-ozdemir-yyc",
  href: "https://ca.linkedin.com/in/zeynep-ozdemir-yyc?trk=profile-badge",
  locale: "en_US",
  size: "medium" as const,
  theme: "dark" as const,
  type: "VERTICAL" as const,
};
