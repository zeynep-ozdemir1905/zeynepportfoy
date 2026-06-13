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
  "UX/UI Designer",
  "Front-End Developer",
  "Product-minded Engineer",
];

/** Hero — recruiter-first messaging */
export const HERO_COPY = {
  badge: "Open to full-time · Co-op · Contract",
  headline: "I ship accessible interfaces that teams can hire with confidence.",
  subline:
    "Calgary-based UX/UI designer and front-end developer. I translate Figma into production React/Next.js, care about WCAG, and communicate clearly with engineers and stakeholders.",
  primaryCta: "See my work",
  secondaryCta: "Schedule a conversation",
};

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
  { label: "Projects Shipped", value: "5+" },
  { label: "Industry Roles", value: "3" },
  { label: "Accessibility", value: "User-Centered" },
  { label: "Grad Year", value: "2026" },
];

/** Professional roles shown in Experience (community-only roles stay in VOLUNTEER). */
export const EXPERIENCE = [
  {
    date: "Jun 2026 - Present",
    role: "Web Developer Intern",
    company: "Tech Connect Alberta",
    location: "Calgary, AB · Internship",
    bullets: [
      "Built and maintained responsive web pages with HTML, CSS, JavaScript, and React.",
      "Collaborated with the team to improve site performance, usability, and accessibility.",
      "Designed websites for clients using Figma and developed them.",
      "Implemented UI updates from design specs and supported deployment workflows.",
    ],
  },
  {
    date: "Feb 2026 - Present",
    role: "UX/UI Designer & Developer",
    company: "MLC",
    location: "Calgary, AB · Internship",
    bullets: [
      "Creating Figma designs for enterprise applications.",
      "Leading transitions to improve software responsiveness.",
      "Implementing front end for enterprise applications.",
      "Used Tailwind CSS to style the website and implemented it using React and Next.js.",
      "Used TypeScript to type the website and implemented it using React and Next.js.",
    ],
  },
  {
    date: "Jun 2025 - Present",
    role: "Website & Engagement Manager",
    company: "IDI Calgary",
    location: "Calgary, AB",
    bullets: [
      "Modernizing digital presence through WordPress optimization.",
      "Community-focused content strategy and UX improvements.",
      "Managed Instagram, Facebook, and YouTube content to increase engagement and brand visibility.",
      "Created campaign visuals in Figma and Adobe XD for events and communications.",
      "Maintained WordPress content and improved site performance, SEO, and usability.",
      "Used Canva to create campaign visuals and social media content.",
    ],
  },
  {
    date: "Jun 2025 - Aug 2025",
    role: "User Interface Designer",
    company: "Sky Air Supplies",
    location: "Calgary, AB · CO-OP",
    bullets: [
      "Designed high-fidelity user interfaces and brought them to life.",
      "Collaborated with developers on component handoff and design systems.",
    ],
  },
  {
    date: "Dec 2025 - Feb 2026",
    role: "User Interface Designer & Developer",
    company: "Drill Sense",
    location: "Calgary, AB · Internship",
    bullets: [
      "Designed and developed a responsive website for the Calgary Public Library.",
      "Collaborated with the library's team to improve the website's usability and accessibility.",
      "Used Figma to design the website and implemented it using React and Next.js.",
      "Did user research and testing to improve the website's usability and accessibility.",
      "Designed high-fidelity user interfaces and brought them to life."
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
    date: "Jun 2026 - Present",
    title: "Web Developer Intern",
    org: "Tech Connect Alberta",
    location: "Calgary, AB",
    highlights: [
      "Built responsive web pages with HTML, CSS, JavaScript, and React.",
      "Designed client sites in Figma and shipped accessible UI updates.",
    ],
  },
  {
    date: "Feb 2026 - June 2026",
    title: "UX/UI Designer & Developer",
    org: "MLC",
    location: "Calgary, AB",
    highlights: [
      "Enterprise Figma systems and accessible UI delivery.",
      "Front-end implementation for operational software.",
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
    title: "Marketing Volunteer",
    org: "Enactus SAIT",
    period: "Sep 2025 - Present",
    description:
      "Planned social media campaigns, created visuals in Canva and Figma, and kept brand messaging consistent across outreach and recruitment.",
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
    title: "Graphic Designer",
    org: "IDI Calgary",
    period: "Jun 2025 - Present",
    description:
      "Created social and print visuals in Figma and Adobe tools—balanced brand warmth with readable hierarchy.",
  },
  {
    title: "Math Tutor",
    description:
      "Explained concepts patiently, built confidence, and adapted examples to how each student learns best.",
  },
];

export const EDUCATION = [
  {
    date: "2024 - 2026",
    degree: "Diploma - Information Technology: Software Development",
    school: "SAIT (Southern Alberta Institute of Technology)",
    location: "Calgary, AB",
    note: "Focus on UX/UI Design, React, and Accessible Web Development",
  },
  {
    date: "2024 - 2028",
    degree: "Bachelors - Information Technology: Software Development",
    school: "SAIT (Southern Alberta Institute of Technology)",
    location: "Calgary, AB",
    note: "Focus on UX/UI Design, React, and Accessible Web Development",
  },
];

export const SKILL_GROUPS = [
  {
    group: "Design",
    items: ["Figma", "Prototyping", "UX Research", "Adobe Photoshop", "Motion Design"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native & Expo", "Tailwind CSS", "TypeScript", "HTML"],
  },
  {
    group: "Tools",
    items: ["Azure", "Node.js", "WordPress", "Git"],
  },
];

export const projects: Project[] = [
  {
    id: "go-apricot",
    number: "01",
    title: "Go Apricot",
    category: "Mobile Application",
    description:
      "Workforce management system for industrial employee check-ins.",
    tech: ["React Expo", "Azure", "UI Design"],
    accent: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    device: "mobile",
    figma:
      "https://embed.figma.com/design/90lijAgk5ZeqkDhio7gfR1/Capstone-Employee?node-id=0-1&embed-host=share",
    details:
      "Designed to bridge complex industrial workflows with intuitive mobile experiences for operational teams.",
  },
  {
    id: "mlc",
    number: "02",
    title: "MLC",
    category: "Web Application",
    description:
      "Enterprise accessibility dashboard for oilfield operators.",
    tech: ["React", "Figma", "Data Visualization"],
    accent: "linear-gradient(135deg, #e0f2fe 0%, #93c5fd 100%)",
    device: "desktop",
    prototype:
      "https://www.figma.com/proto/qhs7vi6wQTljzR0POBCpWJ/ds_projectdrillsense?node-id=0-1&t=U6d9Nk78Tav6tFYn-1",
    details:
      "Built with accessibility-first principles and structured data clarity for real-world industrial decision-making.",
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
    title: "Apply Alberta",
    category: "Web Application",
    description:
      "Platform for Alberta students and academic guidance.",
    tech: ["UI Design", "Lead Designer", "Front End Development"],
    accent: "linear-gradient(135deg, #e0f2fe 0%, #7dd3fc 100%)",
    device: "desktop",
    live: "https://campus-navigator-seven.vercel.app/",
    details:
      "Focused on clarity, student-first navigation, and an approachable information architecture for guidance journeys.",
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


];

export const socials = [
  { label: "GitHub", href: "https://github.com/zeynep-ozdemir1905" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zeynep-ozdemir-396010335/" },
  { label: "Email", href: "mailto:barikazeynep2@gmail.com" },
];
