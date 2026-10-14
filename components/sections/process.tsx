"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".process-step");
      steps.forEach((step, i) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: i % 2 === 0 ? -30 : 30,
          duration: 0.6,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="relative py-24 sm:py-32" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Workflow"
          title="How I Work"
          description="A proven process that ensures transparency, quality, and on-time delivery."
        />

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent md:block" />

          <div className="space-y-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="process-step relative flex gap-6 md:gap-10"
              >
                <div className="relative z-10 hidden shrink-0 md:flex md:w-16 md:justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0a0a0b] text-sm font-bold text-cyan-400">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] md:p-8">
                  <div className="mb-1 flex items-center gap-3 md:hidden">
                    <span className="text-xs font-bold text-cyan-400">{step.step}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
