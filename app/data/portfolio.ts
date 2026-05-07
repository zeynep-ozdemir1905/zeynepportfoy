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

export const NAV = [
  { id: "resume", label: "Resume", href: "/resume" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const rotatingTitles = [
  "UI/UX Designer",
  "Front End Developer",
  "Creative Technologist",
];

export const aboutStats = [
  { label: "Projects Shipped", value: "5+" },
  { label: "Industry Roles", value: "3" },
  { label: "Accessibility", value: "WCAG" },
  { label: "Grad Year", value: "2026" },
];

export const EXPERIENCE = [
  {
    date: "Dec 2025 - Present",
    role: "UX/UI Designer & Developer",
    company: "MLC",
    location: "Calgary, AB",
    bullets: [
      "Creating Figma designs for enterprise applications.",
      "Leading transitions to improve software responsiveness.",
      "Implementing front end for enterprise applications.",
    ],
  },
  {
    date: "Jun 2025 - Present",
    role: "Website & Engagement Manager",
    company: "IDI Calgary",
    location: "Volunteer",
    bullets: [
      "Modernizing digital presence through WordPress optimization.",
      "Community-focused content strategy and UX improvements.",
    ],
  },
  {
    date: "Jun 2025 - Aug 2025",
    role: "User Interface Designer",
    company: "Sky Air Supplies",
    location: "CO-OP",
    bullets: [
      "Designed high-fidelity user interfaces and brought them to life.",
      "Collaborated with developers on component handoff and design systems.",
    ],
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
