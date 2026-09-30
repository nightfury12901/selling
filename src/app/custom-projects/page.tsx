"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
export default function CustomProjectsPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary font-sans pt-20">
      <Navbar />
      
      <main className="max-w-[800px] mx-auto px-6 py-24">
        <h1 className="text-5xl font-heading font-black tracking-tighter mb-6">
          Custom Projects
        </h1>
        <p className="text-brand-muted text-lg leading-relaxed mb-12">
          Need a specialized IoT solution or custom software build? Tell us about your requirements, and we'll engineer it from the ground up.
        </p>

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-mono uppercase tracking-wider text-brand-muted">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-transparent border border-brand-border rounded-md px-4 py-3 text-brand-primary placeholder:text-brand-muted focus:outline-none focus:border-brand-primary transition-colors"
              placeholder="Your name or company"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-mono uppercase tracking-wider text-brand-muted">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-transparent border border-brand-border rounded-md px-4 py-3 text-brand-primary placeholder:text-brand-muted focus:outline-none focus:border-brand-primary transition-colors"
              placeholder="hello@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="type" className="text-sm font-mono uppercase tracking-wider text-brand-muted">Project Type</label>
            <select 
              id="type" 
              className="w-full bg-brand-bg border border-brand-border rounded-md px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-primary transition-colors appearance-none"
            >
              <option value="hardware">Hardware / IoT</option>
              <option value="software">Software / Web</option>
              <option value="hybrid">Hybrid (Hardware + Software)</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="details" className="text-sm font-mono uppercase tracking-wider text-brand-muted">Project Details</label>
            <textarea 
              id="details" 
              rows={6}
              className="w-full bg-transparent border border-brand-border rounded-md px-4 py-3 text-brand-primary placeholder:text-brand-muted focus:outline-none focus:border-brand-primary transition-colors resize-none"
              placeholder="Describe your project goals, required technologies, and timeline..."
            />
          </div>

          <button 
            type="button" 
            className="w-full py-4 bg-brand-primary text-brand-bg font-bold uppercase tracking-widest text-sm rounded-md hover:opacity-90 transition-opacity"
            onClick={() => alert("Custom request submitted! We will get back to you shortly.")}
          >
            Submit Request
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
