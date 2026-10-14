"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function Experience() {
  return (
    <section id="experience" className="relative border-y border-white/[0.04] bg-[#030303] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Career"
          title="Experience"
          description="Full stack work at OptimusFox Technologies — React and Next.js on the client, Flask, Django, and Node.js on the server."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/20 to-transparent md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <ScrollReveal key={item.period} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col gap-6 md:flex-row ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <motion.div
                    className="absolute left-0 top-6 hidden h-3.5 w-3.5 rounded-full border-2 border-cyan-500 bg-[#030303] md:left-1/2 md:block md:-translate-x-1/2"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/15">
                      <span className="text-xs font-medium text-cyan-400">{item.period}</span>
                      <h3 className="mt-1 text-lg font-semibold text-white">{item.role}</h3>
                      <p className="text-sm text-zinc-500">{item.company}</p>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-zinc-400"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
