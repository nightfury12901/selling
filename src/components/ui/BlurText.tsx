"use client";

import { motion } from "framer-motion";

export function BlurText({ 
  text, 
  className = "", 
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number 
}) {
  const words = text.split(" ");
  
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(12px)", opacity: 0, y: 15 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.8, 
            delay: delay + i * 0.04, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
