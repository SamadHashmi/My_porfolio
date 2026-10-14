"use client";

import { motion } from "framer-motion";
import { whyMeCards } from "@/data/why-me";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function WhyMe() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Why Me"
          title="Why Work With Me"
          description="Production experience across government systems, healthcare data, and blockchain products."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyMeCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/15"
                >
                  <div
                    className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{ backgroundColor: card.accent }}
                  />
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                    style={{ color: card.accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{card.description}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
