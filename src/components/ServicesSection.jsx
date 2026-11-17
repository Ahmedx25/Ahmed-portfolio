import React from 'react';
import RevealWrapper from './RevealWrapper';
import { servicesData } from '../data/portfolioData';
import { BarChart3, Database, TrendingUp, Sheet, ArrowUpRight } from 'lucide-react';

const iconMap = {
  BarChart3: BarChart3,
  Database: Database,
  TrendingUp: TrendingUp,
  Sheet: Sheet,
};

export default function ServicesSection({ onSoundTrigger }) {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20 relative">
      <RevealWrapper>
        <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3 font-semibold text-[#F59E0B]">
          02 · hire me
        </div>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-8 text-slate-50"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Freelance Services
        </h2>
      </RevealWrapper>

      {/* 4 Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((svc, idx) => {
          const IconComponent = iconMap[svc.icon] || BarChart3;
          return (
            <RevealWrapper key={svc.title} delay={idx * 100}>
              <div
                className="svc-card h-full rounded-2xl p-6 bg-[#0E1B33]/80 border border-slate-700/80 hover:border-slate-500/80 flex flex-col justify-between backdrop-blur-sm relative group overflow-hidden"
              >
                {/* Top Subtle Glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:h-1.5 transition-all"
                  style={{ background: svc.accent }}
                />

                <div>
                  {/* Icon Circle */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{
                      background: `rgba(${svc.accent === '#F59E0B' ? '245, 158, 11' : svc.accent === '#3B82F6' ? '59, 130, 246' : svc.accent === '#10B981' ? '16, 185, 129' : '139, 92, 246'}, 0.15)`,
                      color: svc.accent,
                    }}
                  >
                    <IconComponent size={24} />
                  </div>

                  <h3
                    className="text-lg font-bold mb-3 text-slate-100 group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {svc.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                {/* Tags Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          );
        })}
      </div>

      {/* Bottom CTA Link */}
      <RevealWrapper delay={300} className="mt-10 text-center sm:text-right">
        <a
          href="#contact"
          onClick={() => onSoundTrigger && onSoundTrigger()}
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-sky-400 hover:text-amber-400 transition-colors uppercase tracking-wider group"
        >
          <span>Let's work together</span>
          <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </RevealWrapper>
    </section>
  );
}
