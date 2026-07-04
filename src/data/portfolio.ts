export const profile_image = "/assets/osama-profile.jpeg";
export const cv_url = "/assets/Osama-Fares-CV.pdf";

const projectKitchen = { url: "/assets/project-kitchen.jpeg" };
const projectDental = { url: "/assets/project-dental.jpeg" };
const projectEstates = { url: "/assets/project-estates.jpeg" };
const certSql = { url: "/assets/certificate-sql.png" };
const certPhp = { url: "/assets/certificate-php.png" };


export const personal = {
  name: "Osama Fares",
  firstName: "Osama",
  lastName: "Fares",
  title: "Full Stack Web Developer",
  location: "Egypt",
  email: "osamafares8070@gmail.com",
  phone: "+20 122 199 6350",
  github: "https://github.com/osama1633",
  githubUser: "osama1633",
  linkedin: "https://www.linkedin.com/in/osama-fares-463055345",
  tiktok: "https://www.tiktok.com/@osama_mohmmed10",
  summary:
    "I'm a Computer Science student building modern, scalable web applications with a sharp eye for performance and craft. My work pairs clean, maintainable code with elegant interfaces — fast experiences that feel as good as they look.",
};

export const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs", "Database Fundamentals"],
  Tools: [
    "Git",
    "GitHub",
    "Vercel",
    "Responsive Design",
    "Performance",
    "Accessibility",
    "SEO",
    "API Integration",
  ],
};

export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Git",
  "Vercel",
  "REST APIs",
  "Framer Motion",
];

export const projects = [
  {
    title: "Maison Noir Estates",
    tagline: "Private real-estate portfolio",
    description:
      "A discreet, gallery-style platform for private estates and villas. Cinematic imagery, generous whitespace and structured listings built for serious buyers and discerning agents.",
    image: projectEstates.url,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://real-sage-kappa.vercel.app/",
    github: "https://github.com/osama1633",
  },
  {
    title: "Osama's Kitchen",
    tagline: "Cinematic restaurant experience",
    description:
      "A premium restaurant landing experience with bold typography, immersive product photography and a frictionless ordering flow — designed to convert browsers into diners.",
    image: projectKitchen.url,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://osama-s-culinary-canvas.vercel.app/",
    github: "https://github.com/osama1633",
  },
  {
    title: "Pure Dental",
    tagline: "Luxury dental atelier",
    description:
      "A quiet-luxury web presence for a world-class dental clinic. Editorial typography, refined motion and a booking-first hero crafted to read like a high-end fashion magazine.",
    image: projectDental.url,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://pure-dental-sparkle.vercel.app/",
    github: "https://github.com/osama1633",
  },
  {
    title: "Happy Helper Hub",
    tagline: "Modern responsive web application",
    description:
      "A modern, responsive web application with a professional UI/UX, optimized performance and mobile-friendly design — built to feel fast, polished and effortless on any device.",
    image: "/assets/project-happy-helper.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://happy-helper-hub-rosy.vercel.app/",
    github: "https://github.com/osama1633",
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web apps built with React and Next.js — fast, accessible and made to scale.",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting marketing pages with refined typography, motion and copy that earns attention.",
  },
  {
    title: "UI / UX Implementation",
    description:
      "Pixel-faithful translation of Figma designs into responsive, production-grade interfaces.",
  },
  {
    title: "Performance & SEO",
    description:
      "Lighthouse-grade performance, semantic HTML and on-page SEO that ranks and loads instantly.",
  },
  {
    title: "API Integration",
    description:
      "Connect your product to any REST API or service with clean, type-safe data layers.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing iteration, bug fixes and feature work to keep your product fast and modern.",
  },
];

export const certificates = [
  {
    title: "Transact SQL queries using SQL Server",
    issuer: "Mahara-Tech · ITI Platform",
    year: "2025",
    image: certSql.url,
  },
  {
    title: "Building Web Applications using PHP & MySQL",
    issuer: "Mahara-Tech · ITI Platform",
    year: "2025",
    image: certPhp.url,
  },
];

export const education = [
  {
    school: "Computer Science Program",
    degree: "B.Sc. Computer Science (in progress)",
    period: "Present",
    detail:
      "Building a strong foundation in algorithms, data structures, software engineering and modern web technologies.",
  },
];

export const faqs = [
  {
    q: "Are you available for freelance work?",
    a: "Yes — I'm open to freelance projects, contract roles and collaborations on ambitious products. Reach out via the contact section.",
  },
  {
    q: "What's your tech stack?",
    a: "React, Next.js and TypeScript on the frontend, Tailwind CSS for styling, Node.js and Express on the backend, and Vercel for deployment.",
  },
  {
    q: "How long does a project take?",
    a: "A polished landing page typically takes 1–2 weeks. Full web apps depend on scope, but I share a clear timeline before we start.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. I work remotely with clients worldwide and communicate clearly across time zones.",
  },
  {
    q: "What makes your work different?",
    a: "I treat every project as a craft — performance, accessibility and design polish are non-negotiable, not afterthoughts.",
  },
];
