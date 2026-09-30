"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function FeatureCards() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/shop/software" className="group block h-full">
          <SpotlightCard className="p-10 md:p-14 h-[400px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="font-mono text-xs tracking-widest text-[#8A8A93] uppercase rounded-full border border-[#26262B] px-4 py-1.5 bg-[#131316]">
                Software
              </span>
              <div className="w-10 h-10 rounded-full border border-[#26262B] flex items-center justify-center group-hover:bg-[#3DFFA0] group-hover:border-[#3DFFA0] transition-colors duration-500">
                <ArrowRight className="w-4 h-4 text-[#F5F5F4] group-hover:text-[#0A0A0B]" />
              </div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-4xl md:text-5xl font-heading font-semibold text-[#F5F5F4] tracking-tight mb-4">
                Code & Systems.
              </h3>
              <p className="text-[#8A8A93] text-lg max-w-sm leading-relaxed font-sans">
                Production-ready templates, APIs, and AI integrations. Skip the boilerplate.
              </p>
            </div>
          </SpotlightCard>
        </Link>
        
        <Link href="/shop/hardware" className="group block h-full">
          <SpotlightCard className="p-10 md:p-14 h-[400px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="font-mono text-xs tracking-widest text-[#8A8A93] uppercase rounded-full border border-[#26262B] px-4 py-1.5 bg-[#131316]">
                Hardware
              </span>
              <div className="w-10 h-10 rounded-full border border-[#26262B] flex items-center justify-center group-hover:bg-[#3DFFA0] group-hover:border-[#3DFFA0] transition-colors duration-500">
                <ArrowRight className="w-4 h-4 text-[#F5F5F4] group-hover:text-[#0A0A0B]" />
              </div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-4xl md:text-5xl font-heading font-semibold text-[#F5F5F4] tracking-tight mb-4">
                Kits & Components.
              </h3>
              <p className="text-[#8A8A93] text-lg max-w-sm leading-relaxed font-sans">
                Complete IoT kits shipped with schematics, PCBs, and sensors. Ready to assemble.
              </p>
            </div>
          </SpotlightCard>
        </Link>
      </div>
    </section>
  );
}
