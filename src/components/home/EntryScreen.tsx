"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

// Flicker animation: rapidly toggles opacity to simulate an LED flickering on
function FlickerText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0, 1, 0.2, 1, 0.5, 1, 0.8, 0, 1],
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
      }}
    >
      {text}
    </motion.span>
  );
}

export function EntryScreen() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-start justify-center overflow-hidden bg-brand-bg">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="z-10 w-full max-w-[1280px] px-6 md:px-12 flex flex-col justify-center">
        {/* Meta label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-brand-muted text-xs tracking-[0.25em] uppercase mb-12 flex gap-6 border-b border-brand-border pb-6 w-full"
        >
          <span>Product Studio</span>
          <span className="opacity-40">—</span>
          <span>Engineering Lab</span>
          <span className="opacity-40">—</span>
          <span className="text-brand-name">Active</span>
        </motion.div>

        {/* Giant heading - split into two lines like 360Labs reference */}
        <div className="flex flex-col gap-0 -ml-1 mb-16">
          <h1 className="font-heading font-black text-[clamp(72px,14vw,200px)] leading-[0.9] tracking-[-0.03em] text-brand-primary select-none">
            <FlickerText text="Proto" delay={0.3} />
            <FlickerText text="Lab" delay={0.5} className="text-brand-name" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-muted text-lg md:text-xl font-sans max-w-2xl mt-8 leading-relaxed"
          >
            Software &amp; IoT projects, build-ready. A product studio shipping
            components for makers and engineers.
          </motion.p>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
          className="flex items-center gap-6 flex-wrap"
        >
          <a
            href="/shop"
            className="px-8 py-4 bg-brand-primary text-brand-bg font-semibold text-sm tracking-wide rounded-full hover:opacity-80 transition-opacity"
          >
            Browse Projects
          </a>
          <a
            href="/custom-projects"
            className="px-8 py-4 border border-brand-border text-brand-primary font-semibold text-sm tracking-wide rounded-full hover:border-brand-primary transition-colors"
          >
            Custom Request
          </a>
        </motion.div>

        {/* Bottom meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="flex items-center gap-8 mt-20 pt-8 border-t border-brand-border text-[11px] font-mono text-brand-muted tracking-[0.15em] uppercase"
        >
          <span>AI-Native</span>
          <span>© 2026</span>
          <span>EMT Projects</span>
        </motion.div>
      </div>
    </div>
  );
}
