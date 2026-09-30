"use client";

import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", 
  "TensorFlow", "ESP32", "Arduino", "Raspberry Pi", "MQTT", 
  "PostgreSQL", "Tailwind CSS", "Framer Motion", "C++", "Docker"
];

export function Marquee() {
  return (
    <div className="w-full border-y border-brand-border bg-brand-surface/50 py-4 overflow-hidden flex items-center relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10" />
      
      <div className="px-6 border-r border-brand-border shrink-0 z-20 bg-brand-surface/50 backdrop-blur-sm hidden md:block">
        <span className="font-mono text-sm text-brand-muted">Built with</span>
      </div>
      
      <div className="flex shrink-0">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex whitespace-nowrap"
        >
          {/* Duplicate the list to make the loop seamless */}
          {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 text-xl font-heading font-semibold text-brand-primary/80">
                {tech}
              </span>
              <span className="text-brand-accent font-bold">/</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
