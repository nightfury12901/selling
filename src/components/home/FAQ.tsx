"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Do I get full source code?",
    answer: "Yes, for software projects you receive the full, unminified source code along with complete documentation and a video guide."
  },
  {
    question: "How long does shipping take for hardware kits?",
    answer: "Hardware kits are shipped via our delivery partners across India. Typically, orders arrive within 3-5 business days depending on your pincode."
  },
  {
    question: "Can I request a custom project?",
    answer: "Absolutely. We operate as an engineering lab and accept custom project requests. Use the Contact or Custom Projects page to get a quote."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-[800px] mx-auto px-4 md:px-6 py-24">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-heading font-bold">{`{ FAQ }`}</h2>
        <Link href="/faq" className="text-brand-accent font-mono text-sm hover:underline">
          View All →
        </Link>
      </div>
      
      <div className="border-t border-brand-border">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-brand-border">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-brand-muted">{(i + 1).toString().padStart(2, '0')}</span>
                <span className="text-xl font-heading font-medium group-hover:text-brand-accent transition-colors">
                  {faq.question}
                </span>
              </div>
              <div className="text-brand-muted group-hover:text-brand-accent transition-colors">
                {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>
            
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pl-[3.25rem] pr-12 text-brand-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
