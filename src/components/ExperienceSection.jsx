import React from 'react';
import RevealWrapper from './RevealWrapper';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-20 relative">
      <RevealWrapper>
        <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3 font-semibold text-[#F59E0B]">
          03 · timeline
        </div>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-12 text-slate-50"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Internships & Experience
        </h2>
      </RevealWrapper>

      {/* Timeline Tree */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-700/60 ml-3 sm:ml-4 space-y-12">
        {experienceData.map((exp, idx) => (
          <RevealWrapper key={exp.role} delay={idx * 150} className="relative group">
            {/* Pulsing Node Dot */}
            <div
              className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full transition-transform group-hover:scale-125"
              style={{
                background: '#2563EB',
                border: '3px solid #0A1628',
                boxShadow: '0 0 10px rgba(37, 99, 235, 0.6)',
              }}
            />

            {/* Content Card */}
            <div className="lift-card p-6 rounded-2xl bg-[#0E1B33]/70 border border-slate-700/70 backdrop-blur-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3
                  className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {exp.role}
                </h3>
                {exp.badge && (
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800/60 font-semibold">
                    {exp.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                <span className="text-amber-400 font-semibold">{exp.org}</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin size={12} className="text-slate-500" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1 text-sky-400">
                  <Calendar size={12} />
                  {exp.date}
                </span>
              </div>

              <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-emerald-400 mt-1 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
