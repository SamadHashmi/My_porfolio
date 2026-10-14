"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/technologies";
import { SectionHeading } from "@/components/ui/section-heading";

function TechLogo({ name, color }: { name: string; color: string }) {
  return (
    <div className="group flex h-16 w-36 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">
      <span
        className="text-sm font-semibold tracking-wide transition-all duration-300 group-hover:scale-105"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}

export function Technologies() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-[#030303] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Trusted Technologies"
          description="React, Next.js, and Web3 on the frontend. Python Flask, Django, and Node.js on the backend."
        />
      </div>

      <div className="relative mt-4">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#030303] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#030303] to-transparent" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-4 px-4"
        >
          {doubled.map((tech, i) => (
            <TechLogo key={`${tech.name}-${i}`} name={tech.name} color={tech.color} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
