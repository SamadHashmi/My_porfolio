"use client";

import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(99, 102, 241, 0.15)",
}: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-[1px] backdrop-blur-xl transition-all duration-500 hover:border-white/[0.15]",
        className
      )}
      style={
        {
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),var(--glow-color),transparent_40%)]" />
      <div className="relative h-full rounded-2xl bg-[#0a0a0b]/80 p-6">
        {children}
      </div>
    </div>
  );
}
