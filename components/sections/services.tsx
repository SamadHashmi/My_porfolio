"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Build"
          description="React and Next.js interfaces, Python backends in Flask and Django, and Web3 product work."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/15"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                      style={{ color: service.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                  <div
                    className="absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-transparent via-current to-transparent transition-all duration-500 group-hover:w-full"
                    style={{ color: service.accent }}
                  />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
