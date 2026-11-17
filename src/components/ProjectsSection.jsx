import React, { useState } from 'react';
import RevealWrapper from './RevealWrapper';
import { projectsData } from '../data/portfolioData';
import { Code2, ExternalLink, ArrowUpRight, X, Sparkles, Database, BarChart2, Filter, Layers } from 'lucide-react';

const filterCategories = [
  'All Projects',
  'Power BI & DAX',
  'SQL & Data Warehouse',
  'Excel Analytics',
  'Statistics & Capstone'
];

export default function ProjectsSection({ onSoundTrigger }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const openModal = (proj) => {
    if (onSoundTrigger) onSoundTrigger();
    setSelectedProject(proj);
  };

  const closeModal = () => {
    if (onSoundTrigger) onSoundTrigger();
    setSelectedProject(null);
  };

  const handleFilterClick = (cat) => {
    if (onSoundTrigger) onSoundTrigger();
    setActiveFilter(cat);
  };

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'All Projects') return true;
    if (activeFilter === 'Power BI & DAX') return p.tools.includes('Power BI') || p.tools.includes('DAX');
    if (activeFilter === 'SQL & Data Warehouse') return p.tools.includes('SQL Server') || p.tools.includes('ETL');
    if (activeFilter === 'Excel Analytics') return p.tools.includes('Excel');
    if (activeFilter === 'Statistics & Capstone') return p.tools.includes('Statistics') || p.id === 'osol-crm';
    return true;
  });

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20 relative">
      <RevealWrapper>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3 font-semibold text-[#F59E0B]">
              04 · shipped
            </div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-slate-50"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Featured Analytics Projects
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mt-2">
              End-to-end data pipelines, multi-fact database architectures, and decision-ready executive dashboards.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30 font-bold'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </RevealWrapper>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((p, idx) => (
          <RevealWrapper key={p.id} delay={idx * 120} className="h-full">
            <div
              className="proj-card rounded-2xl overflow-hidden flex flex-col h-full bg-[#111F3D] border-[1.5px] border-[#1E3A5F] hover:border-sky-500/60 shadow-xl group cursor-pointer relative"
              onClick={() => openModal(p)}
            >
              {/* Dashboard Preview Thumbnail */}
              <div
                className="proj-img relative w-full overflow-hidden flex items-center justify-center font-mono text-sm bg-[#0F1E3A]"
                style={{ aspectRatio: '16/9' }}
              >
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-slate-400">
                    <BarChart2 size={40} className="text-amber-400 mb-2" />
                    <span>Interactive Power BI Dashboard</span>
                  </div>
                )}

                {/* Subtle shine sweep overlay on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-900/90 text-amber-400 border border-amber-500/30 backdrop-blur-md shadow-lg">
                  {p.tag}
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/90 text-white font-mono text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                  <span>Explore Case Study</span>
                  <span className="proj-arrow">↗</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-2 text-slate-100 group-hover:text-sky-300 transition-colors flex items-center justify-between"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <span>{p.title}</span>
                    <ArrowUpRight size={18} className="text-slate-500 group-hover:text-sky-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>

                  <div className="font-mono text-xs text-sky-400 mb-3 line-clamp-1">
                    {p.tools}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {p.desc}
                  </p>
                </div>

                {/* Metrics Pills */}
                <div>
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-slate-800/80 mb-4 font-mono">
                    {p.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-slate-900/90 p-2.5 rounded-xl text-center border border-slate-800 group-hover:border-slate-700 transition-colors">
                        <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                        <div className="text-xs md:text-sm font-bold text-amber-400 truncate mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(p);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/20 flex items-center gap-1.5 active:scale-95"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight size={13} />
                    </button>

                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSoundTrigger) onSoundTrigger();
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 transition-all flex items-center gap-1.5 border border-slate-700 active:scale-95"
                    >
                      <Code2 size={13} />
                      <span>Code Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* Interactive Modal Details */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto modern-scrollbar bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-8 shadow-2xl text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            {selectedProject.img && (
              <div className="w-full rounded-2xl overflow-hidden mb-6 border border-slate-800 shadow-lg">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full max-h-[360px] object-contain bg-slate-950"
                />
              </div>
            )}

            <div className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-1">
              {selectedProject.tag}
            </div>
            <h3
              className="text-2xl md:text-3xl font-extrabold mb-3 text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {selectedProject.title}
            </h3>

            <div className="font-mono text-xs text-sky-400 mb-4 bg-sky-950/40 p-2.5 rounded-xl border border-sky-900/60 inline-block">
              {selectedProject.tools}
            </div>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6">
              {selectedProject.desc}
            </p>

            {/* Highlight Box */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs mb-6 flex items-start gap-2.5">
              <Sparkles size={16} className="shrink-0 mt-0.5 text-amber-400" />
              <span><strong>Key Analytical Outcome:</strong> {selectedProject.highlight}</span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6 font-mono">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">{m.label}</div>
                  <div className="text-sm md:text-base font-bold text-sky-400 mt-1">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <Code2 size={15} />
                <span>View on GitHub</span>
              </a>

              <a
                href="#contact"
                onClick={closeModal}
                className="px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all border border-slate-700"
              >
                Request Dashboard Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
