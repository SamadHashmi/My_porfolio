"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Great"
          description="Have a project in mind? I'd love to hear about it. Reach out and let's discuss how I can help."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-cyan-500/30">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{siteConfig.email}</span>
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-cyan-500/30">
                    <LinkedInIcon className="h-4 w-4" />
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-cyan-500/30">
                    <GitHubIcon className="h-4 w-4" />
                  </div>
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-cyan-500/30">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{siteConfig.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-zinc-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{siteConfig.location}</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <p className="text-sm leading-relaxed text-zinc-400">
                Open to full stack roles in Saudi Arabia and remote work. React, Next.js,
                Web3, and Python backends with Flask and Django.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Message Sent!</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm text-zinc-400">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Full stack role or project"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-zinc-400">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, timeline, and budget..."
                      required
                    />
                  </div>
                  <MagneticButton strength={0.2}>
                    <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </MagneticButton>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
