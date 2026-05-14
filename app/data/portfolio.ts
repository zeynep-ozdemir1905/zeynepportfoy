export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  accent: string;
  figma?: string;
  live?: string;
  details: string;
};

/** In-page anchors for footer / secondary navigation (header is minimal). */
export const FOOTER_NAV = [
  { label: "Resume", href: "#resume" },
  { label: "Play", href: "#intro" },
  { label: "Projects", href: "#projects" },
  { label: "Internships", href: "#internships" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Coffee chat", href: "#contact" },
  { label: "PDF-style resume", href: "/resume" },
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

export const rotatingTitles = [
  "UI/UX Designer",
  "Front End Developer",
  "Creative Technologist",
];

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
    date: "Dec 2025 - Present",
    title: "UX/UI Designer & Developer",
    org: "MLC",
    location: "Calgary, AB",
    highlights: [
      "Enterprise Figma systems and accessible UI delivery.",
      "Front-end implementation for operational software.",
    ],
  },
  {
    date: "Jun 2025 - Aug 2025",
    title: "User Interface Designer (Co-op)",
    org: "Sky Air Supplies",
    location: "Calgary, AB",
    highlights: [
      "Shipped polished UI from concept through developer handoff.",
      "Partnered on component structure and responsive layouts.",
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
    accent: "linear-gradient(135deg, #ffe1ea 0%, #ffd8f0 100%)",
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
    accent: "linear-gradient(135deg, #e9ddff 0%, #ffe3f5 100%)",
    figma:
      "https://embed.figma.com/design/qhs7vi6wQTljzR0POBCpWJ/ds_projectdrillsense?node-id=0-1&embed-host=share",
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
    accent: "linear-gradient(135deg, #ffe9d9 0%, #ffe5ef 100%)",
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
    accent: "linear-gradient(135deg, #fff0d9 0%, #ffdfe8 100%)",
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
    accent: "linear-gradient(135deg, #ffe3f7 0%, #ece4ff 100%)",
    live: "https://cprg306-project-volunteeringplatform.vercel.app/",
    details:
      "An accessible, user-friendly experience for discovering opportunities, applying, and tracking volunteer progress.",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/zeynep-ozdemir1905" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zeynep-ozdemir-396010335/" },
  { label: "Email", href: "mailto:barikazeynep2@gmail.com" },
];
