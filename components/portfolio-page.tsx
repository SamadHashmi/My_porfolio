"use client";

import { CursorGlow } from "@/components/effects/cursor-glow";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Technologies } from "@/components/sections/technologies";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { Experience } from "@/components/sections/experience";
import { WhyMe } from "@/components/sections/why-me";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export function PortfolioPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <Services />
        <Projects />
        <Process />
        <Experience />
        <WhyMe />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
