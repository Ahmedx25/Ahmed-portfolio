import React, { useState, useEffect } from 'react';
import { preloaderQuotes } from '../data/portfolioData';

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setFading(true);
          setTimeout(onDone, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [onDone]);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((prev) => Math.min(prev + 1, preloaderQuotes.length));
    }, 480);
    return () => clearInterval(lineTimer);
  }, []);

  const hexVal = "x0" + Math.round(progress).toString(16).toUpperCase().padStart(2, "0");

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(120% 120% at 50% 10%, #1E293B 0%, #0F172A 55%, #0B1120 100%)',
      }}
    >
      {/* Dynamic Animated Splash Bars */}
      <div className="flex items-end gap-2 h-28 mb-8">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((bar) => (
          <div
            key={bar}
            className="w-4 rounded-t-md splash-bar shadow-lg"
            style={{
              animationDelay: `${bar * 0.12}s`,
              background: bar % 3 === 0 ? '#2563EB' : bar % 3 === 1 ? '#3B82F6' : '#F59E0B',
              boxShadow: bar % 3 === 2 ? '0 0 15px rgba(245, 158, 11, 0.4)' : '0 0 15px rgba(37, 99, 235, 0.4)',
            }}
          />
        ))}
      </div>

      {/* Terminal Status Output */}
      <div className="font-mono text-sm md:text-base text-left w-72 md:w-96 min-h-[140px] text-slate-100">
        {preloaderQuotes.slice(0, lineIndex).map((line, idx) => (
          <div
            key={idx}
            className="boot-line my-0.5"
            style={{ opacity: 0.55 + idx * 0.1 }}
          >
            {line}
          </div>
        ))}

        <div className="mt-4 font-semibold text-[#F59E0B] flex items-center justify-between">
          <span>
            loading insight… <span className="font-bold text-amber-300">{hexVal}</span> / x064
          </span>
          <span className="text-xs text-slate-400">{progress}%</span>
        </div>

        {/* Progress bar container */}
        <div className="mt-2 h-1.5 rounded-full overflow-hidden bg-slate-800 shadow-inner">
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #2563EB, #38BDF8, #F59E0B)',
            }}
          />
        </div>
      </div>

      {/* Quote */}
      <p
        className="mt-8 text-center px-6 text-xl md:text-2xl font-bold tracking-tight text-slate-100"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        ⭐ <span style={{ color: '#F59E0B' }}>Stars</span> are the only KPI I can't build a{' '}
        <span style={{ color: '#38BDF8' }}>dashboard</span> for.
      </p>
    </div>
  );
}
