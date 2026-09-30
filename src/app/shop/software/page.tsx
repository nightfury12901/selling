'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Star, Code2, Terminal, Package, Layers, Cpu } from 'lucide-react';

const softwareProjects = [
  {
    id: 'sw1', no: 'S-01', title: 'Student Result Management System',
    description: 'Full-stack web app for tracking student grades, attendance, and progress. Built with Node.js + MySQL.',
    stack: ['Node.js', 'MySQL', 'HTML/CSS'],
    price: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop'
  },
  {
    id: 'sw2', no: 'S-02', title: 'Library Management System',
    description: 'Desktop app for issuing, returning, and cataloging books with due date tracking and fine calculation.',
    stack: ['Python', 'Tkinter', 'SQLite'],
    price: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80&auto=format&fit=crop'
  },
  {
    id: 'sw3', no: 'S-03', title: 'Inventory Management Dashboard',
    description: 'Real-time stock tracking with low-stock alerts, supplier management, and sales analytics.',
    stack: ['React', 'Firebase', 'Tailwind'],
    price: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&auto=format&fit=crop'
  },
  {
    id: 'sw4', no: 'S-04', title: 'Hospital OPD Management',
    description: 'Patient registration, doctor scheduling, prescription records, and appointment booking system.',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    price: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop'
  },
  {
    id: 'sw5', no: 'S-05', title: 'E-Commerce Platform (Mini)',
    description: 'Product listings, cart, payment gateway integration (Razorpay), and order tracking.',
    stack: ['Next.js', 'Supabase', 'Stripe'],
    price: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80&auto=format&fit=crop'
  },
  {
    id: 'sw6', no: 'S-06', title: 'Face Recognition Attendance',
    description: 'Python-based facial detection and recognition for automated classroom attendance logging.',
    stack: ['Python', 'OpenCV', 'SQLite'],
    price: 3500,
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80&auto=format&fit=crop'
  },
  {
    id: 'sw7', no: 'S-07', title: 'Chat Application (Real-time)',
    description: 'Multi-room real-time chat with user authentication, message history, and online status.',
    stack: ['Socket.io', 'Node.js', 'React'],
    price: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&q=80&auto=format&fit=crop'
  },
  {
    id: 'sw8', no: 'S-08', title: 'Job Portal Web App',
    description: 'Employer and candidate portals with job listings, resume upload, and application tracking.',
    stack: ['Django', 'PostgreSQL', 'Bootstrap'],
    price: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80&auto=format&fit=crop'
  },
];

export default function SoftwarePage() {
  const [search, setSearch] = useState('');
  const filtered = softwareProjects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center">
            <Code2 className="w-5 h-5 text-brand-bg" />
          </div>
          <span className="font-mono text-xs text-brand-muted uppercase tracking-[0.2em]">Software Projects</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-primary mb-4">
          Code & Systems
        </h1>
        <p className="text-brand-muted max-w-2xl">
          Complete software projects with full source code, documentation, and setup guides.
          Perfect for final-year submissions, internships, and portfolios.
        </p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 border border-brand-border rounded-xl p-2 mb-10 max-w-lg">
        <Search className="w-4 h-4 text-brand-muted ml-2" />
        <input
          type="text"
          placeholder="Search software projects..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 bg-transparent text-sm text-brand-primary placeholder:text-brand-muted outline-none"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map(project => (
          <div
            key={project.id}
            className="group bg-brand-bg border border-brand-border rounded-xl overflow-hidden hover:border-brand-primary transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden bg-brand-surface">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              <div className="absolute top-2 left-2 bg-brand-bg/90 px-2 py-0.5 rounded text-[10px] font-mono text-brand-muted border border-brand-border">
                {project.no}
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-heading font-semibold text-sm text-brand-primary mb-2 leading-tight">{project.title}</h3>
              <p className="text-xs text-brand-muted mb-4 flex-1 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.stack.map(s => (
                  <span key={s} className="text-[10px] font-mono px-2 py-0.5 border border-brand-border rounded text-brand-muted">{s}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-brand-primary">₹{project.price.toLocaleString()}</span>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-brand-primary text-brand-primary text-xs font-medium rounded-lg hover:bg-brand-primary hover:text-brand-bg transition-colors">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center py-24 text-center border border-dashed border-brand-border rounded-xl">
          <Terminal className="w-10 h-10 text-brand-muted mb-4 opacity-50" />
          <p className="text-brand-muted">No software projects match your search.</p>
        </div>
      )}
    </main>
  );
}
