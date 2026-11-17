import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function FloatingDock({ soundEnabled, setSoundEnabled, onSoundTrigger }) {
  return (
    <div className="hidden md:flex flex-col gap-3 fixed right-4 top-1/2 -translate-y-1/2 z-50 select-none">
      {/* Check my work button */}
      <a
        href="#projects"
        onClick={() => onSoundTrigger && onSoundTrigger()}
        className="font-mono text-xs font-bold tracking-widest text-[#0F172A] hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center"
        style={{
          writingMode: 'vertical-rl',
          background: '#F59E0B',
          borderRadius: '9999px',
          padding: '1.1rem 0.75rem',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)',
        }}
      >
        Check my work
      </a>

      {/* Hire me button */}
      <a
        href="#contact"
        onClick={() => onSoundTrigger && onSoundTrigger()}
        className="font-mono text-xs font-bold tracking-widest text-white hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center"
        style={{
          writingMode: 'vertical-rl',
          background: '#2563EB',
          borderRadius: '9999px',
          padding: '1.1rem 0.75rem',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
        }}
      >
        Hire me
      </a>

      {/* FX Sound Toggle */}
      <button
        onClick={() => {
          setSoundEnabled(!soundEnabled);
          if (onSoundTrigger) onSoundTrigger();
        }}
        className="mt-1 py-2 px-2.5 rounded-xl font-mono text-[10px] font-bold tracking-widest cursor-pointer transition-all flex flex-col items-center gap-1 border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white shadow-md active:scale-95"
        title="Toggle Interaction Sound Effects"
      >
        {soundEnabled ? (
          <>
            <Volume2 size={13} className="text-amber-400" />
            <span className="text-[9px] text-amber-400">FX ON</span>
          </>
        ) : (
          <>
            <VolumeX size={13} className="text-slate-500" />
            <span className="text-[9px] text-slate-500">FX OFF</span>
          </>
        )}
      </button>
    </div>
  );
}
