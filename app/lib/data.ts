export const profile = {
  name: "Sadat Sagar",
  role: "Full-Stack Developer",
  tagline:
    "Full-stack developer crafting commerce experiences, real-time systems, and quietly abstract interfaces on the web.",
  location: "Sydney, AU",
  email: "sadatmd.sagar@gmail.com",
  phone: "+61 490 517 409",
  github: "https://github.com/DeathBlade205",
  linkedin: "https://www.linkedin.com/in/sadat-sagar-06bd",
  resume: "/Sadat_Sagar_Resume.pdf",
};

export const heroStats: { label: string; value: string }[] = [
  { label: "SELECTED", value: "03 PROJECTS" },
  { label: "STACK", value: "REACT / NODE / TS" },
];

export const marqueeItems = [
  "SELECTED WORK",
  "E-COMMERCE",
  "REAL-TIME SYSTEMS",
  "FULL-STACK",
  "2025 / 26",
];

export type FeaturedProject = {
  num: string;
  title: string;
  subtitle: string;
  year: string;
  href: string;
  /** Screenshot path under /public (drop a file here to replace the placeholder). */
  image: string;
  tags: string[];
};

export const aboutIntro =
  "I'm Sadat — a full-stack developer in Sydney who builds commerce experiences and real-time systems, with a soft spot for quietly abstract, motion-led interfaces.";

export const aboutBody =
  "My work runs from 3D-driven storefronts to consolidated multi-brand platforms. I care about the whole stack — clean architecture under the hood, and considered, tactile detail on the surface. Currently studying at the University of Technology Sydney and open to new opportunities.";

export const capabilities: { num: string; title: string; body: string }[] = [
  {
    num: "01",
    title: "Front-End",
    body: "React, Vue & Next interfaces with motion via GSAP and 3D via Three.js.",
  },
  {
    num: "02",
    title: "Back-End",
    body: "Node, TypeScript & PHP services with Postgres — APIs and real-time flows.",
  },
  {
    num: "03",
    title: "Commerce",
    body: "End-to-end storefronts — product, cart and checkout, built to maintain.",
  },
];

export const stackTools = [
  "TypeScript",
  "React",
  "Vue 3",
  "Next.js",
  "Node",
  "Three.js",
  "GSAP",
  "Vite",
  "PostgreSQL",
  "Laravel / PHP",
  "Docker",
  "Tailwind",
];

export const background: {
  period: string;
  title: string;
  detail: string;
  tag: string;
}[] = [
  {
    period: "2025–26",
    title: "Freelance & Client Work",
    detail: "Commerce storefronts & consolidated platforms",
    tag: "DEV",
  },
  {
    period: "ONGOING",
    title: "University of Technology Sydney",
    detail: "Bachelor of Computing Science",
    tag: "EDU",
  },
];

export type WorkProject = {
  num: string;
  title: string;
  subtitle: string;
  href: string;
  image: string;
  description: string;
  meta: { label: string; value: string }[];
};

export const workProjects: WorkProject[] = [
  {
    num: "01",
    title: "Opulent",
    subtitle: "Premium mechanical keyboards — storefront & brand",
    href: "https://opulent-pi.vercel.app/",
    image: "/work/opulent.png",
    description:
      "A refined direct-to-consumer storefront for premium mechanical keyboards. Built around restraint — generous space, considered type, and a product-forward grid that lets the hardware speak for itself.",
    meta: [
      { label: "ROLE", value: "DESIGN + BUILD" },
      { label: "STACK", value: "REACT / NEXT / TS" },
      { label: "TYPE", value: "E-COMMERCE" },
      { label: "YEAR", value: "2026" },
    ],
  },
  {
    num: "02",
    title: "NEXUS Commerce",
    subtitle: "Switch storefront with a 3D keycap hero",
    href: "https://switch-app1.vercel.app/",
    image: "/work/nexus.png",
    description:
      "A switch-focused storefront fronted by an interactive 3D keycap hero. React 19 drives the app shell while Three.js and GSAP power a tactile, motion-led landing moment that flows into a clean shopping experience.",
    meta: [
      { label: "ROLE", value: "FRONT-END + 3D" },
      { label: "STACK", value: "REACT 19 / THREE" },
      { label: "MOTION", value: "GSAP" },
      { label: "YEAR", value: "2026" },
    ],
  },
  {
    num: "03",
    title: "Commerce Consolidated",
    subtitle: "A unified commerce platform for client Dedrick",
    href: "https://commerce-consolidated.vercel.app",
    image: "/work/commerce.png",
    description:
      "A consolidated commerce platform bringing a client’s storefront under one consistent Vue 3 system — unifying product, cart, and contact flows with real handles and a maintainable component architecture.",
    meta: [
      { label: "ROLE", value: "FULL-STACK" },
      { label: "STACK", value: "VUE 3 / VITE" },
      { label: "CLIENT", value: "DEDRICK" },
      { label: "YEAR", value: "2026" },
    ],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    num: "01",
    title: "Opulent",
    subtitle: "Premium mechanical keyboards — storefront & brand",
    year: "2026",
    href: "https://opulent-pi.vercel.app/",
    image: "/work/opulent.png",
    tags: ["E-COMMERCE", "REACT / NEXT", "TYPESCRIPT", "UI/UX"],
  },
  {
    num: "02",
    title: "NEXUS Commerce",
    subtitle: "Switch storefront with a 3D keycap hero",
    year: "2026",
    href: "https://switch-app1.vercel.app/",
    image: "/work/nexus.png",
    tags: ["REACT 19", "THREE.JS", "GSAP", "VITE"],
  },
  {
    num: "03",
    title: "Commerce Consolidated",
    subtitle: "A unified commerce platform for client Dedrick",
    year: "2026",
    href: "https://commerce-consolidated.vercel.app",
    image: "/work/commerce.png",
    tags: ["VUE 3", "VITE", "FULL-STACK"],
  },
];
