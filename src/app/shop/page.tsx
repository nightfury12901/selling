'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Filter, Star, Activity, Cpu, Wifi, Shield, Bot } from 'lucide-react';
import { projectsData, ProjectCategory } from '@/data/projects';

const CATEGORIES: { name: ProjectCategory | "All"; icon: React.ReactNode }[] = [
  { name: "All", icon: <Activity className="w-4 h-4" /> },
  { name: "Basic Sensors", icon: <Wifi className="w-4 h-4" /> },
  { name: "Intermediate Automation", icon: <Cpu className="w-4 h-4" /> },
  { name: "IoT & Smart Systems", icon: <Shield className="w-4 h-4" /> },
  { name: "Advanced Electronics", icon: <Activity className="w-4 h-4" /> },
  { name: "Robotics & Control", icon: <Bot className="w-4 h-4" /> }
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8">

      {/* Sidebar - Categories & Filters */}
      <aside className="w-full md:w-64 shrink-0 flex flex-col gap-6">
        <div className="sticky top-24 bg-brand-surface border border-brand-border rounded-xl p-5">
          <h2 className="text-base font-heading font-bold text-brand-primary mb-4 flex items-center gap-2 uppercase tracking-widest text-xs font-mono">
            <Filter className="w-4 h-4" />
            Categories
          </h2>
          <div className="flex flex-col gap-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                  activeCategory === cat.name
                    ? 'bg-brand-primary text-brand-bg'
                    : 'text-brand-muted hover:text-brand-primary hover:bg-brand-surface'
                }`}
              >
                {cat.icon}
                <span className="leading-tight">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content - Search & Grid */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Top Bar: Search */}
        <div className="bg-brand-surface border border-brand-border rounded-xl p-2 flex items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
            <input
              type="text"
              placeholder="Search 95+ student-ready projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-brand-primary pl-10 pr-4 py-2 placeholder:text-brand-muted text-sm focus:ring-0"
            />
          </div>
          <button className="bg-brand-primary text-brand-bg px-6 py-2 rounded-lg font-semibold text-sm hover:opacity-80 transition-opacity">
            Search
          </button>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <Link
              href={`/shop/${project.id}`}
              key={project.id}
              className="group bg-brand-bg border border-brand-border rounded-xl overflow-hidden hover:border-brand-primary transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-brand-surface">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute top-2 left-2 bg-brand-bg/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-brand-muted border border-brand-border">
                  #{project.no}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-semibold text-base text-brand-primary leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-3 h-3 fill-brand-primary text-brand-primary" />
                  ))}
                  <span className="text-xs text-brand-muted ml-1 font-mono">5.0</span>
                </div>

                <p className="text-sm text-brand-muted mb-6 flex-1 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-brand-primary font-mono">₹{project.price.toLocaleString()}</span>
                    <button className="flex items-center gap-2 px-4 py-2 border border-brand-primary text-brand-primary text-sm font-medium rounded-lg hover:bg-brand-primary hover:text-brand-bg transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-brand-border rounded-xl">
            <Search className="w-12 h-12 text-brand-muted mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-brand-primary mb-2">No projects found</h3>
            <p className="text-brand-muted">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </main>
  );
}
