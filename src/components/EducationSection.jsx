import React from 'react';
import RevealWrapper from './RevealWrapper';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, Binary, Award, CheckCircle2 } from 'lucide-react';

const courses = [
  'Probability & Mathematical Statistics',
  'Regression Analysis & Inference',
  'Relational Database Systems (SQL)',
  'Data Structures & Algorithms',
  'Computer Architecture & C++',
  'Numerical Methods & Optimization'
];

export default function EducationSection() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-20 relative">
      <RevealWrapper>
        <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3 font-semibold text-[#F59E0B]">
          05 · learning
        </div>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-50"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Academic Education
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed mb-10">
          Double major foundation combining pure statistics, mathematical modeling, and computer science systems.
        </p>
      </RevealWrapper>

      <div className="max-w-5xl mx-auto">
        {educationData.map((edu, idx) => (
          <RevealWrapper key={edu.degree} delay={idx * 150}>
            <div className="p-8 md:p-10 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-md relative overflow-hidden group">
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700"></div>

              {/* Top Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10 border-b border-slate-800 pb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <GraduationCap size={22} />
                    </div>
                    <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-950/50 border border-amber-800/60">
                      Accredited Degree · 2022 – 2026
                    </span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-sky-300 transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {edu.degree}
                  </h3>

                  <div className="text-base font-semibold text-slate-300 mt-1 flex items-center gap-2">
                    <span>{edu.institution}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
                      <MapPin size={12} className="text-slate-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="flex md:flex-col items-start md:items-end gap-2 font-mono text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/60 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Graduated · 2026</span>
                  </span>
                  <span className="text-slate-400 text-[11px] hidden md:inline-block">Specialization: Statistics & CS</span>
                </div>
              </div>

              {/* Academic Specialization Highlight Card */}
              <div className="mb-6 p-4 md:p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-slate-900 to-sky-500/10 border border-sky-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-sky-400 uppercase tracking-widest font-bold">
                      Academic Specialization & Core Track
                    </div>
                    <div className="text-sm md:text-base font-bold text-white">
                      Statistics and Computer Science Program
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-300 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60 self-start sm:self-center">
                  Statistical Inference & Computational Analytics
                </span>
              </div>

              {/* Detailed Program Narrative */}
              <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6 relative z-10">
                {edu.desc}
              </p>

              {/* Coursework Pills */}
              <div className="relative z-10 pt-4 border-t border-slate-800">
                <div className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
                  <Binary size={14} className="text-sky-400" />
                  <span>Key Analytical & Computational Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courses.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950/80 text-slate-300 border border-slate-800 flex items-center gap-1.5 hover:border-sky-500/40 hover:text-white transition-all"
                    >
                      <CheckCircle2 size={12} className="text-sky-400" />
                      <span>{c}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
