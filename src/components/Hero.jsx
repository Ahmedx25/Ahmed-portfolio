import React, { useState } from 'react';
import { ArrowUpRight, Linkedin, Github, Mail, Phone, Database, Sparkles, Play, CheckCircle2, FileText, Download } from 'lucide-react';
import TextScramble from './TextScramble';
import { personalInfo } from '../data/portfolioData';

const heroStats = [
  { value: '120+', label: 'ITI BI Training Hours', accent: '#3B82F6' },
  { value: '1M+', label: 'Records Modeled (Olist)', accent: '#F59E0B' },
  { value: '27K+', label: 'Logistics Records Solved', accent: '#10B981' },
  { value: '4', label: 'Multi-Department Dashboards', accent: '#8B5CF6' }
];

export default function Hero({ entered = true, onSoundTrigger }) {
  const [queryExecuted, setQueryExecuted] = useState(false);
  const [executing, setExecuting] = useState(false);

  const handleRunQuery = () => {
    if (onSoundTrigger) onSoundTrigger();
    setExecuting(true);
    setTimeout(() => {
      setExecuting(false);
      setQueryExecuted(true);
    }, 450);
  };

  return (
    <header
      className={`relative overflow-hidden pt-24 md:pt-28 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-between ${
        entered ? 'hero-in' : ''
      }`}
      style={{ minHeight: '90vh' }}
    >
      {/* Giant Cyberpunk Name Typography */}
      <div className="w-full text-center mt-2 md:mt-4 z-10">
        <h1
          className="font-black uppercase tracking-tight select-none leading-none flex items-center justify-center flex-wrap gap-x-5 gap-y-1"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(2.75rem, 10.5vw, 8.8rem)',
          }}
        >
          <TextScramble
            text={personalInfo.firstName}
            className="text-stroke tracking-tight"
            enabled={entered}
            revealDelay={300}
          />
          <TextScramble
            text={personalInfo.lastName}
            className="text-slate-50 tracking-tight"
            enabled={entered}
            revealDelay={500}
          />
        </h1>
      </div>

      {/* Main Hero Content Grid */}
      <div className="relative w-full flex-1 grid grid-cols-1 md:grid-cols-12 items-end gap-8 my-8 z-20">
        {/* Left Column: Role, Mission & CTA */}
        <div className="md:col-span-6 flex flex-col justify-end items-start text-left z-20 order-2 md:order-1">
          <div
            className="font-mono text-xs tracking-[0.25em] uppercase mb-3 font-bold flex items-center gap-2"
            style={{ color: '#F59E0B' }}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>{personalInfo.subRole}</span>
          </div>

          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-slate-50 leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {personalInfo.headline}
          </h2>

          <p className="text-sm md:text-base mb-6 text-slate-300 leading-relaxed max-w-xl">
            {personalInfo.summary}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href="#projects"
              onClick={() => onSoundTrigger && onSoundTrigger()}
              className="px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Let's collaborate</span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#contact"
              onClick={() => onSoundTrigger && onSoundTrigger()}
              className="px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-slate-300 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Contact me</span>
              <span className="text-[#F59E0B]">&gt;</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}?subject=Data%20Analyst%20Role%20Inquiry`}
              onClick={() => onSoundTrigger && onSoundTrigger()}
              className="px-4 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-amber-400 border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <FileText size={14} />
              <span>Inquire / Hire</span>
            </a>

            <a
              href="/Ahmed_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onSoundTrigger && onSoundTrigger()}
              className="px-5 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <FileText size={14} />
              <span>View CV</span>
            </a>
          </div>

          {/* Mini Interactive KPI Ticker */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-4 border-t border-slate-800/80 font-mono">
            {heroStats.map((st) => (
              <div
                key={st.label}
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div
                  className="text-base md:text-lg font-extrabold"
                  style={{ color: st.accent }}
                >
                  {st.value}
                </div>
                <div className="text-[10px] text-slate-400 truncate leading-tight mt-0.5">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center/Right Column: Profile Terminal Card */}
        <div className="md:col-span-6 flex justify-center md:justify-end items-center z-10 order-1 md:order-2">
          <div className="relative w-full max-w-lg">
            {/* Animated Rotating Gradient Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-400 to-amber-500 opacity-25 blur-xl animate-pulse-slow"></div>

            {/* Profile Terminal Box */}
            <div className="relative rounded-2xl bg-slate-900/95 border border-slate-700/80 p-5 shadow-2xl backdrop-blur-md">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono text-xs text-slate-400 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 shadow-sm shadow-red-500/50"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-sm shadow-amber-500/50"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/50"></span>
                  </div>
                  <span className="ml-1 text-slate-200 font-semibold text-[11px] sm:text-xs truncate">ahmed_identity.sql</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] sm:text-[11px] font-bold bg-emerald-950/70 px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-800/50 shadow-sm shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>{personalInfo.statusText}</span>
                </div>
              </div>

              {/* Terminal Bio Stats & Interactive Query */}
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5 text-slate-300 text-[10px] sm:text-[11px]">
                    <span className="text-amber-400 font-bold select-none">SELECT</span>
                    <span className="text-sky-300">Degree, Focus</span>
                    <span className="text-amber-400 font-bold select-none">FROM</span>
                    <span className="text-emerald-400 font-semibold">Education</span>
                  </div>

                  <button
                    onClick={handleRunQuery}
                    className="self-start sm:self-auto flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-bold bg-blue-600/30 text-sky-300 hover:bg-blue-600 hover:text-white border border-blue-500/40 transition-all cursor-pointer active:scale-95 shrink-0"
                    title="Simulate SQL Execution"
                  >
                    <Play size={10} className={executing ? 'animate-spin' : ''} />
                    <span>{executing ? 'Executing...' : 'Run [F5]'}</span>
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-1.5 text-[11px] relative overflow-hidden">
                  <div className="text-slate-100 font-semibold flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span>Faculty of Science, Ain Shams University</span>
                    <span className="text-amber-400 font-bold shrink-0">2022–2026</span>
                  </div>
                  <div className="text-sky-400 font-medium">Program: Statistics & Computer Science</div>
                  <div className="text-slate-400 text-[10px] flex items-center gap-1.5">
                    <Sparkles size={11} className="text-amber-400 shrink-0" />
                    <span className="leading-tight">Focus: BI Dashboards, SQL Modeling & Statistics</span>
                  </div>

                  {queryExecuted && (
                    <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-emerald-400 flex flex-wrap items-center justify-between gap-1 animate-in fade-in">
                      <span>✓ 1 row in set (0.04 sec)</span>
                      <span className="text-slate-500 text-[9px]">OPTIMIZED_PLAN</span>
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-2 text-slate-300 pt-1 text-[11px]">
                  <span className="text-amber-400 font-bold select-none">WHERE</span>
                  <span className="text-slate-200">
                    Core_Expertise IN ('Power BI', 'SQL Server', 'SSIS ETL', 'Python', 'Statistics')
                  </span>
                </div>

                {/* Quick Skills Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    'Power BI & DAX',
                    'SQL Server & SSIS',
                    'Tableau',
                    'Python & Pandas',
                    'Statistics & EDA',
                    'Excel & Power Query'
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 text-[10px] font-semibold border border-slate-700/60 hover:border-sky-500/40 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DATA NODES (Social Links Grid) */}
      <div className="relative z-20 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="text-slate-500 uppercase tracking-widest text-[11px] flex items-center gap-2">
          <Database size={13} className="text-sky-400" />
          <span>DATA_NODES:</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSoundTrigger && onSoundTrigger()}
            className="flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors py-1 group"
          >
            <Linkedin size={14} className="text-sky-400 group-hover:scale-110 transition-transform" />
            <span>LinkedIn ↗</span>
          </a>

          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSoundTrigger && onSoundTrigger()}
            className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors py-1 group"
          >
            <Phone size={14} className="text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>WhatsApp ↗</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => onSoundTrigger && onSoundTrigger()}
            className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors py-1 group"
          >
            <Mail size={14} className="text-amber-400 group-hover:scale-110 transition-transform" />
            <span>Email ↗</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onSoundTrigger && onSoundTrigger()}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors py-1 group"
          >
            <Github size={14} className="text-slate-400 group-hover:scale-110 transition-transform" />
            <span>GitHub ↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
