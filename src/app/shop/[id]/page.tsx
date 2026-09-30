'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { projectsData } from '@/data/projects';
import BranchedMenu, { type BranchedMenuChild, type BranchedMenuItem } from '@/components/ui/BranchedMenu';
import { 
  ShoppingCart, 
  ArrowLeft, 
  Lock, 
  Unlock,
  Code,
  Cpu,
  BookOpen,
  Image as ImageIcon
} from 'lucide-react';

const menuItems: BranchedMenuItem[] = [
  {
    label: 'Overview',
    children: [
      { value: 'intro', label: 'Introduction', icon: <BookOpen className="w-4 h-4" /> },
      { value: 'demo', label: 'Video Demo', icon: <ImageIcon className="w-4 h-4" /> },
    ]
  },
  {
    label: 'Project Assets',
    children: [
      { value: 'components', label: 'Component List', icon: <Cpu className="w-4 h-4" />, locked: true },
      { value: 'circuit', label: 'Circuit Diagram', icon: <ImageIcon className="w-4 h-4" />, locked: true },
      { value: 'code', label: 'Source Code', icon: <Code className="w-4 h-4" />, locked: true },
      { value: 'assembly', label: 'Assembly Guide', icon: <BookOpen className="w-4 h-4" />, locked: true }
    ]
  }
];

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('intro');
  const [isLockedSection, setIsLockedSection] = useState(false);

  // In Next.js 13+ with app router, params is an object, but sometimes we need to unwrap it if it's a promise in 15. 
  // Let's assume params.id is available since it's a client component.
  const projectId = typeof params?.id === 'string' ? params.id : '';
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <button onClick={() => router.back()} className="text-brand-accent hover:underline">Go Back</button>
      </div>
    );
  }

  const handleMenuSelect = (value: string, item: BranchedMenuChild | BranchedMenuItem) => {
    setActiveSection(value);
    if ('locked' in item && item.locked) {
      setIsLockedSection(true);
    } else {
      setIsLockedSection(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
      
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-brand-muted hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Shop
      </button>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: Details & Menu */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          
          {/* Project Summary Card */}
          <div className="bg-brand-surface/40 backdrop-blur-md border border-brand-border rounded-xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="font-heading font-black text-6xl text-white">#{project.no}</span>
            </div>
            
            <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-mono rounded-full mb-4 border border-brand-accent/20">
              {project.category}
            </span>
            
            <h1 className="text-3xl font-heading font-bold text-white mb-3">
              {project.title}
            </h1>
            
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex items-end gap-2 mb-6">
              <span className="text-lg text-brand-muted pb-1 font-mono">₹</span>
              <span className="text-4xl font-bold text-white font-mono leading-none">{project.price.toLocaleString()}</span>
            </div>
            
            <button className="w-full bg-brand-accent text-brand-bg rounded-lg py-3.5 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white hover:shadow-[0_0_20px_rgba(61,255,160,0.4)]">
              <ShoppingCart size={20} />
              Purchase Project
            </button>
            <p className="text-center text-xs text-brand-muted mt-3">
              Instant access to all source code and diagrams
            </p>
          </div>

          {/* Branched Menu for Navigation */}
          <div className="bg-brand-surface/20 border border-brand-border rounded-xl p-6">
            <h3 className="text-white font-heading font-semibold mb-6 flex items-center gap-2">
              <BookOpen size={18} className="text-brand-accent" />
              Project Contents
            </h3>
            <BranchedMenu 
              items={menuItems}
              defaultOpen={[0, 1]}
              defaultActive="intro"
              onSelect={handleMenuSelect}
            />
          </div>

        </div>

        {/* Right Column: Dynamic Content Area */}
        <div className="w-full lg:w-2/3">
          <div className="bg-brand-surface/30 backdrop-blur-sm border border-brand-border rounded-2xl p-8 min-h-[600px] shadow-2xl shadow-black/50 flex flex-col relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

            {!isLockedSection ? (
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <Unlock size={20} className="text-brand-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-white capitalize">{activeSection}</h2>
                    <p className="text-sm text-brand-muted">Public preview content</p>
                  </div>
                </div>

                {activeSection === 'intro' && (
                  <div className="prose prose-invert prose-brand max-w-none">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-64 object-cover rounded-xl mb-8 border border-white/10 shadow-lg"
                    />
                    <h3 className="text-xl text-white font-semibold mb-4">About this project</h3>
                    <p className="text-brand-muted leading-relaxed mb-6">
                      This project demonstrates the core concepts of {project.category.toLowerCase()}. 
                      It's designed to be a comprehensive learning resource for students and hobbyists looking to build a fully functional prototype.
                    </p>
                    <p className="text-brand-muted leading-relaxed">
                      By purchasing this project, you will gain access to the complete component manifest, detailed circuit schematics, the full source code (with comments), and a step-by-step assembly guide to help you build this from scratch.
                    </p>
                  </div>
                )}

                {activeSection === 'demo' && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="w-full aspect-video bg-black/50 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-4 shadow-inner mb-6">
                       <ImageIcon size={48} className="text-brand-muted opacity-50" />
                       <span className="text-brand-muted">Video Demo Coming Soon</span>
                    </div>
                  </div>
                )}

              </div>
            ) : (
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center p-8">
                <div className="w-24 h-24 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center mb-8 relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 rounded-full border border-brand-accent/30 animate-ping opacity-50" />
                  <Lock size={32} className="text-brand-accent" />
                </div>
                
                <h2 className="text-3xl font-heading font-bold text-white mb-4">Content Locked</h2>
                <p className="text-brand-muted max-w-md mx-auto mb-8 leading-relaxed">
                  The <strong className="text-white capitalize">{activeSection.replace('-', ' ')}</strong> section contains proprietary resources and is only available after purchasing the project.
                </p>
                
                <div className="bg-brand-bg/80 border border-brand-border rounded-lg p-6 max-w-sm w-full backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-brand-muted text-sm">Project Price</span>
                    <span className="text-white font-mono font-bold">₹{project.price.toLocaleString()}</span>
                  </div>
                  <button className="w-full bg-white text-black rounded-lg py-2.5 font-bold hover:bg-brand-accent transition-colors shadow-lg">
                    Unlock Now
                  </button>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </main>
  );
}
