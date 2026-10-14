"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GradientOrbs } from "@/components/effects/gradient-orbs";
import { ParticleField } from "@/components/effects/particle-field";
import { ThreeBackground } from "@/components/effects/three-background";
import { TextReveal } from "@/components/effects/scroll-reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <GradientOrbs />
      <ParticleField />
      <ThreeBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-cyan-400" />
          <span>{siteConfig.role}</span>
        </motion.div>

        <h1 className="mx-auto max-w-5xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <TextReveal text={siteConfig.headline} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {siteConfig.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton strength={0.25}>
            <Button variant="default" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.25}>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Calendar className="h-4 w-4" />
                Book a Call
              </a>
            </Button>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {siteConfig.specializations.slice(0, 8).map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-zinc-500"
            >
              {skill}
            </span>
          ))}
          <span className="text-xs text-zinc-600">+{siteConfig.specializations.length - 8} more</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
