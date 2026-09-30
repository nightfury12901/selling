"use client";

import { BlurText } from "@/components/ui/BlurText";
import { TechText } from "@/components/ui/TechText";

export function Statement() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-32 md:py-48 flex flex-col items-start justify-center min-h-[70vh]">
      <div className="mb-12">
        <span className="font-mono text-[#8A8A93] text-sm tracking-widest uppercase">
          // The Mission
        </span>
      </div>
      
      <div className="flex flex-col w-full max-w-6xl -ml-2">
        <div className="w-full h-[80px] md:h-[160px]">
          <TechText text="Real projects." fontSize={150} color="#F5F5F4" accentColor="#3DFFA0" />
        </div>
        <div className="w-full h-[80px] md:h-[160px] -mt-2 md:-mt-4">
          <TechText text="Real hardware." fontSize={150} color="#8A8A93" accentColor="#3DFFA0" />
        </div>
        <div className="w-full h-[80px] md:h-[160px] -mt-2 md:-mt-4">
          <TechText text="Ship it this weekend." fontSize={150} color="#F5F5F4" accentColor="#3DFFA0" />
        </div>
      </div>
      
      <div className="mt-16 max-w-2xl">
        <p className="text-xl text-[#8A8A93] font-sans leading-relaxed">
          <BlurText 
            text="We build production-ready software templates and complete IoT kits so you can skip the boilerplate and start engineering." 
            delay={0.8} 
          />
        </p>
      </div>
    </section>
  );
}
