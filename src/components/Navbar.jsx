import React, { useState } from 'react';
import { Menu, X, Terminal, ExternalLink, Download } from 'lucide-react';

export default function Navbar({ canvasEnabled, setCanvasEnabled, onSoundTrigger }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    if (onSoundTrigger) onSoundTrigger();
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0A1628]/80 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Terminal Logo */}
        <a
          href="#"
          onClick={() => onSoundTrigger && onSoundTrigger()}
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-wider text-slate-100 hover:text-sky-400 transition-colors group"
        >
          <span className="text-[#F59E0B] group-hover:translate-x-0.5 transition-transform">&gt;</span>
          <span>AHMED_ABDELFATTAH</span>
          <span className="w-2 h-4 bg-sky-400 terminal-cursor inline-block ml-0.5"></span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-slate-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => onSoundTrigger && onSoundTrigger()}
                  className="hover:text-slate-100 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#F59E0B]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CV Download Button */}
          <a
            href="/Ahmed_CV.pdf"
            download="Ahmed_Abdel_Fattah_CV.pdf"
            onClick={() => onSoundTrigger && onSoundTrigger()}
            className="px-3 py-1.5 rounded-full font-mono text-xs font-bold border border-amber-500/50 text-amber-400 hover:bg-amber-500/20 hover:border-amber-400 transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(245,158,11,0.15)] hover:shadow-[0_0_16px_rgba(245,158,11,0.3)]"
            title="Download CV"
          >
            <Download size={13} />
            <span>CV</span>
          </a>

          {/* BG FX Toggle Button */}
          <button
            onClick={() => {
              if (onSoundTrigger) onSoundTrigger();
              setCanvasEnabled(!canvasEnabled);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs font-semibold border transition-all duration-200 cursor-pointer ${
              canvasEnabled
                ? 'bg-slate-800/90 border-slate-600 text-slate-100 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                : 'bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle Animated Data Flow Canvas"
          >
            <span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                canvasEnabled
                  ? 'bg-emerald-400 shadow-[0_0_8px_#10B981]'
                  : 'bg-slate-600'
              }`}
            />
            <span>{canvasEnabled ? 'BG FX: ON' : 'BG FX: OFF'}</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => {
              if (onSoundTrigger) onSoundTrigger();
              setCanvasEnabled(!canvasEnabled);
            }}
            className="px-2.5 py-1 rounded-full font-mono text-[11px] border border-slate-700 bg-slate-900 text-slate-300"
          >
            {canvasEnabled ? 'FX: ON' : 'FX: OFF'}
          </button>
          <button
            onClick={() => {
              if (onSoundTrigger) onSoundTrigger();
              setMobileOpen(!mobileOpen);
            }}
            className="p-2 text-slate-400 hover:text-slate-100 focus:outline-none"
            aria-label="Open navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A1628]/98 border-b border-slate-800 px-6 py-6 font-mono text-sm space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-slate-300 hover:text-amber-400 transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-600 text-xs">↗</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <a
              href="/Ahmed_CV.pdf"
              download="Ahmed_Abdel_Fattah_CV.pdf"
              onClick={handleLinkClick}
              className="px-4 py-2 rounded-full font-mono text-xs font-bold border border-amber-500/50 text-amber-400 hover:bg-amber-500/20 transition-all flex items-center gap-2"
            >
              <Download size={13} />
              <span>Download CV</span>
            </a>
            <button
              onClick={() => setCanvasEnabled(!canvasEnabled)}
              className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  canvasEnabled ? 'bg-emerald-400 shadow-[0_0_6px_#10B981]' : 'bg-slate-600'
                }`}
              />
              <span>{canvasEnabled ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
