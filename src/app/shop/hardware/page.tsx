'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Cpu, Wifi, Shield, Activity, Bot } from 'lucide-react';
import { projectsData, ProjectCategory } from '@/data/projects';

const CATEGORIES: { name: ProjectCategory | 'All'; label: string }[] = [
  { name: 'All', label: 'All Hardware' },
  { name: 'Basic Sensors', label: 'Basic Sensors' },
  { name: 'Intermediate Automation', label: 'Automation' },
  { name: 'IoT & Smart Systems', label: 'IoT & Smart' },
  { name: 'Advanced Electronics', label: 'Advanced' },
  { name: 'Robotics & Control', label: 'Robotics' },
];

export default function HardwarePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<ProjectCategory | 'All'>('All');

  const filtered = projectsData.filter(p => {
    const matchesCat = category === 'All' || p.category === category;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center">
            <Cpu className="w-5 h-5 text-brand-bg" />
          </div>
          <span className="font-mono text-xs text-brand-muted uppercase tracking-[0.2em]">Hardware Projects</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-primary mb-4">
          Kits & Components
        </h1>
        <p className="text-brand-muted max-w-2xl">
          Microcontroller-based projects with full circuit diagrams, component lists, and assembly guides.
          From beginner sensors to advanced robotics.
        </p>
      </div>

      {/* Filters + Search row */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="flex items-center gap-3 border border-brand-border rounded-xl p-2 max-w-lg flex-1">
          <Search className="w-4 h-4 text-brand-muted ml-2" />
          <input
            type="text"
            placeholder="Search hardware projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-sm text-brand-primary placeholder:text-brand-muted outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.name}
              onClick={() => setCategory(cat.name)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors border ${
                category === cat.name
                  ? 'bg-brand-primary text-brand-bg border-brand-primary'
                  : 'border-brand-border text-brand-muted hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map(project => (
          <Link
            href={`/shop/${project.id}`}
            key={project.id}
            className="group bg-brand-bg border border-brand-border rounded-xl overflow-hidden hover:border-brand-primary transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden bg-brand-surface">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              <div className="absolute top-2 left-2 bg-brand-bg/90 px-2 py-0.5 rounded text-[10px] font-mono text-brand-muted border border-brand-border">
                #{project.no}
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="text-[10px] font-mono text-brand-muted mb-2">{project.category}</span>
              <h3 className="font-heading font-semibold text-sm text-brand-primary mb-2 leading-tight">{project.title}</h3>
              <p className="text-xs text-brand-muted mb-4 flex-1 line-clamp-2">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-brand-primary">₹{project.price.toLocaleString()}</span>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-brand-primary text-brand-primary text-xs font-medium rounded-lg hover:bg-brand-primary hover:text-brand-bg transition-colors">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Add
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center py-24 text-center border border-dashed border-brand-border rounded-xl">
          <Cpu className="w-10 h-10 text-brand-muted mb-4 opacity-50" />
          <p className="text-brand-muted">No hardware projects match your search.</p>
        </div>
      )}
    </main>
  );
}
