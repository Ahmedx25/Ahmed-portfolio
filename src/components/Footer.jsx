import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export default function Footer({ onSoundTrigger }) {
  const scrollToTop = () => {
    if (onSoundTrigger) onSoundTrigger();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-slate-800 font-mono text-xs text-slate-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal size={14} className="text-amber-400" />
          <span>
            © {new Date().getFullYear()} {personalInfo.name} · Designed with Data & Passion
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-[11px] text-slate-400">
            Stack: <span className="text-sky-400">React</span> · <span className="text-emerald-400">Vite</span> · <span className="text-amber-400">Tailwind</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-[11px]"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp size={12} className="text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
