"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
    }
  }, [x, y]);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-[0.07] blur-[100px] transition-transform duration-200 ease-out"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(6,182,212,0.4) 50%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
