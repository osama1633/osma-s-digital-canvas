import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Certificates,
  Contact,
  Education,
  FAQ,
  Footer,
  GitHubSection,
  Projects,
  Services,
  Skills,
  TechStack,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Osama Fares — Full Stack Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Osama Fares — Full Stack Web Developer building modern, scalable, high-performance web applications with React, Next.js and TypeScript.",
      },
      { property: "og:title", content: "Osama Fares — Full Stack Web Developer" },
      {
        property: "og:description",
        content:
          "Premium portfolio of Osama Fares — crafting elegant, production-ready web experiences.",
      },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: "/assets/osama-profile.webp",
        fetchpriority: "high",
      },
    ],
  }),
  component: Index,
});


function Index() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Certificates />
      <Education />
      <Services />
      <GitHubSection />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
