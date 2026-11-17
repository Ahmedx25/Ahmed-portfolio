import React, { useState, useEffect, useRef } from 'react';
import { skillsTerminalConfig } from '../data/portfolioData';
import { Terminal, RefreshCw, Play, CheckCircle2, Sparkles } from 'lucide-react';

export default function TypewriterTerminal({ onSoundTrigger }) {
  const { username, commands, outputs } = skillsTerminalConfig;
  const terminalRef = useRef(null);
  const containerRef = useRef(null);

  const [history, setHistory] = useState([]);
  const [currentCmdText, setCurrentCmdText] = useState('');
  const [cmdIndex, setCmdIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [outputLineIdx, setOutputLineIdx] = useState(-1);
  const [status, setStatus] = useState('idle'); // idle -> typing -> executing -> outputting -> pausing -> done
  const [cursorVisible, setCursorVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // IntersectionObserver trigger
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setStatus('typing');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(interval);
  }, []);

  const currentFullCmd = commands[cmdIndex] || '';
  const currentOutputList = outputs[cmdIndex] || [];
  const isLastCmd = cmdIndex === commands.length - 1;

  // Typing logic
  useEffect(() => {
    if (status !== 'typing') return;

    if (charIndex < currentFullCmd.length) {
      const delay = 30 + Math.random() * 25;
      const timer = setTimeout(() => {
        setCurrentCmdText(currentFullCmd.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (onSoundTrigger && Math.random() > 0.45) onSoundTrigger();
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const enterTimer = setTimeout(() => {
        setStatus('executing');
      }, 100);
      return () => clearTimeout(enterTimer);
    }
  }, [status, charIndex, currentFullCmd, onSoundTrigger]);

  // Executing logic
  useEffect(() => {
    if (status !== 'executing') return;

    setHistory((prev) => [...prev, { type: 'cmd', text: currentFullCmd }]);
    setCurrentCmdText('');

    if (currentOutputList.length > 0) {
      setOutputLineIdx(0);
      setStatus('outputting');
    } else {
      setStatus(isLastCmd ? 'done' : 'pausing');
    }
  }, [status, currentFullCmd, currentOutputList.length, isLastCmd]);

  // Outputting lines logic
  useEffect(() => {
    if (status !== 'outputting') return;

    if (outputLineIdx >= 0 && outputLineIdx < currentOutputList.length) {
      const timer = setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          { type: 'output', text: currentOutputList[outputLineIdx] }
        ]);
        setOutputLineIdx((i) => i + 1);
        if (onSoundTrigger) onSoundTrigger();
      }, 150);
      return () => clearTimeout(timer);
    } else if (outputLineIdx >= currentOutputList.length) {
      const timer = setTimeout(() => {
        setStatus(isLastCmd ? 'done' : 'pausing');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [status, outputLineIdx, currentOutputList, isLastCmd, onSoundTrigger]);

  // Pausing between commands
  useEffect(() => {
    if (status !== 'pausing') return;

    const timer = setTimeout(() => {
      setCharIndex(0);
      setOutputLineIdx(-1);
      setCmdIndex((idx) => idx + 1);
      setStatus('typing');
    }, 500);
    return () => clearTimeout(timer);
  }, [status]);

  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, currentCmdText]);

  const handleRestart = () => {
    if (onSoundTrigger) onSoundTrigger();
    setHistory([]);
    setCurrentCmdText('');
    setCmdIndex(0);
    setCharIndex(0);
    setOutputLineIdx(-1);
    setStatus('typing');
  };

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900/90 font-mono text-xs md:text-sm backdrop-blur-md relative group"
    >
      {/* Decorative neon ambient top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-sky-400 to-amber-500"></div>

      {/* Mac Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/95 border-b border-slate-700/80 select-none">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full bg-red-500 hover:brightness-125 cursor-pointer shadow-sm shadow-red-500/50"
            onClick={handleRestart}
            title="Clear and restart terminal"
          ></span>
          <span className="w-3 h-3 rounded-full bg-amber-500 hover:brightness-125 cursor-pointer shadow-sm shadow-amber-500/50" title="Minimize"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500 hover:brightness-125 cursor-pointer shadow-sm shadow-emerald-500/50" title="Expand"></span>
        </div>

        <div className="text-slate-400 font-mono text-xs flex items-center gap-2">
          <Terminal size={13} className="text-sky-400" />
          <span className="text-sky-400 font-semibold">ahmed-terminal</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 font-semibold">{username} — bash</span>
        </div>

        <button
          onClick={handleRestart}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-300 hover:text-amber-400 bg-slate-900/70 hover:bg-slate-700/80 border border-slate-700/60 transition-all cursor-pointer"
          title="Restart demonstration"
        >
          <RefreshCw size={11} className={`${status === 'typing' || status === 'outputting' ? 'animate-spin' : ''}`} />
          <span>Re-run</span>
        </button>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="p-5 md:p-6 min-h-[340px] max-h-[480px] overflow-y-auto space-y-2.5 modern-scrollbar bg-[#07101E]/95 relative"
      >
        {/* Subtle scanline effect overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-25"></div>

        {/* Render History */}
        {history.map((item, i) => (
          <div key={i} className="leading-relaxed relative z-10 animate-in fade-in duration-150">
            {item.type === 'cmd' ? (
              <div className="flex items-baseline gap-2 text-slate-300 pt-1">
                <span className="text-sky-400 font-semibold">{username}</span>
                <span className="text-emerald-400">:~$</span>
                <span className="text-amber-300 font-bold tracking-wide">{item.text}</span>
              </div>
            ) : (
              <div
                className={`pl-3 py-0.5 border-l-2 ${
                  item.text.includes('[STATUS]')
                    ? 'border-emerald-500 text-emerald-400 font-bold bg-emerald-950/20 py-1 my-1 rounded-r'
                    : 'border-sky-500/30 text-slate-200'
                }`}
              >
                {item.text}
              </div>
            )}
          </div>
        ))}

        {/* Active Command Prompt */}
        {status !== 'done' && (
          <div className="flex items-baseline gap-2 text-slate-300 relative z-10">
            <span className="text-sky-400 font-semibold">{username}</span>
            <span className="text-emerald-400">:~$</span>
            <span className="text-amber-300 font-bold tracking-wide">{currentCmdText}</span>
            <span
              className={`inline-block w-2.5 h-4 bg-amber-400 ml-0.5 shadow-[0_0_8px_#F59E0B] ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        )}

        {/* Done State */}
        {status === 'done' && (
          <div className="flex items-baseline gap-2 text-slate-300 pt-2 relative z-10">
            <span className="text-sky-400 font-semibold">{username}</span>
            <span className="text-emerald-400">:~$</span>
            <span
              className={`inline-block w-2.5 h-4 bg-emerald-400 ml-0.5 shadow-[0_0_8px_#10B981] ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <span className="text-[11px] text-slate-500 font-mono italic ml-2">-- interactive session ready --</span>
          </div>
        )}
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>SYSTEM: READY</span>
        </span>
        <span className="text-slate-500">UTF-8 · ANSI-COLOR · 100% VERIFIED</span>
      </div>
    </div>
  );
}
