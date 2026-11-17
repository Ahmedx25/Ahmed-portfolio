import React, { useState, useEffect } from 'react';
import RevealWrapper from './RevealWrapper';
import { certificationsData } from '../data/portfolioData';
import { Award, ArrowLeft, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

const tilts = [0, -4, 4, -3, 3];

export default function CertificationsSection({ onSoundTrigger }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const total = certificationsData.length;

  const nextCert = () => {
    if (onSoundTrigger) onSoundTrigger();
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevCert = () => {
    if (onSoundTrigger) onSoundTrigger();
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-play every 6 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextCert, 6000);
    return () => clearInterval(interval);
  }, [isHovered, total]);

  const activeItem = certificationsData[activeIndex] || certificationsData[0];

  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 py-20 relative">
      <RevealWrapper>
        <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3 font-semibold text-[#F59E0B]">
          05 · certified
        </div>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-50"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Professional Certifications
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed mb-10">
          Verified industry credentials and specializations across Data Analytics, SQL, Business Intelligence, and Computer Science.
        </p>
      </RevealWrapper>

      {/* Interactive Carousel */}
      <div
        className="relative bg-slate-900/80 rounded-3xl border border-slate-700/80 p-6 md:p-10 shadow-2xl backdrop-blur-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Stacked Visual Certificate Display */}
          <div className="md:col-span-6 w-full flex items-center justify-center">
            <div className="relative w-full max-w-md h-64 sm:h-72 md:h-80">
              {certificationsData.map((item, idx) => {
                const isActive = idx === activeIndex;
                const offset = (idx - activeIndex + total) % total;
                const tilt = tilts[idx % tilts.length];

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (onSoundTrigger) onSoundTrigger();
                      setActiveIndex(idx);
                    }}
                    className={`absolute inset-0 rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer shadow-xl flex items-center justify-center ${
                      isActive
                        ? 'z-30 scale-100 opacity-100 border-sky-400/80 shadow-sky-500/20'
                        : offset === 1
                        ? 'z-20 scale-95 opacity-70 translate-x-3 translate-y-3 border-slate-700'
                        : offset === total - 1
                        ? 'z-10 scale-90 opacity-40 -translate-x-3 -translate-y-3 border-slate-800'
                        : 'opacity-0 scale-75 pointer-events-none'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, #0B1730 0%, #15274E 50%, #0F172A 100%)',
                      transform: isActive
                        ? 'none'
                        : `rotate(${tilt}deg) scale(${1 - offset * 0.05}) translateY(${offset * 10}px)`,
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-400 mb-4 shadow-inner">
                          <Award size={32} />
                        </div>
                        <h4 className="font-bold text-white text-base md:text-lg mb-1">
                          {item.title}
                        </h4>
                        <span className="font-mono text-xs text-amber-400">
                          {item.issuer}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Credential Details Panel */}
          <div className="md:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  {activeItem.category}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {activeIndex + 1} / {total}
                </span>
              </div>

              <h3
                className="text-2xl md:text-3xl font-extrabold text-white mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {activeItem.title}
              </h3>

              <div className="flex items-center gap-2 font-mono text-xs text-sky-400 mb-4 font-semibold">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>{activeItem.issuer}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{activeItem.date}</span>
              </div>

              <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                "{activeItem.quote}"
              </p>
            </div>

            {/* Bottom Controls & Link */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <a
                href={activeItem.credential}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onSoundTrigger && onSoundTrigger()}
                className="px-5 py-2.5 rounded-full font-mono text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95"
              >
                <span>View Credential</span>
                <ExternalLink size={13} />
              </a>

              {/* Navigation Indicators & Arrows */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  {certificationsData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (onSoundTrigger) onSoundTrigger();
                        setActiveIndex(i);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        i === activeIndex
                          ? 'w-6 bg-amber-400'
                          : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1.5 ml-2">
                  <button
                    onClick={prevCert}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    aria-label="Previous Certificate"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={nextCert}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    aria-label="Next Certificate"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
