import React from 'react';
import RevealWrapper from './RevealWrapper';
import TypewriterTerminal from './TypewriterTerminal';
import { personalInfo } from '../data/portfolioData';
import { Award, CheckCircle2, Globe, Cpu } from 'lucide-react';

export default function SkillsSection({ onSoundTrigger }) {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: 01 · whoami (About) */}
        <div id="about" className="lg:col-span-5 flex flex-col w-full min-w-0">
          <RevealWrapper>
            <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3 font-semibold text-[#F59E0B]">
              01 · whoami
            </div>
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-50"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              About
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={100} className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
            <p className="font-medium text-slate-200">
              Hi, I am <span className="text-white font-bold">{personalInfo.name}</span>, a dedicated Data Analyst specializing in Statistics, Business Intelligence, and Data Modeling.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-sky-300 leading-relaxed">
              <span className="text-amber-400 font-bold">&gt;_</span> I design multi-tier ETL workflows with SSIS, build normalized and star schema SQL models, and deliver interactive Power BI & Tableau dashboards with time-intelligence measures that empower decision-makers.
            </div>
            <p className="font-mono text-xs text-slate-400 italic">
              /** Strong foundation in statistical inference, probability distributions, regression modeling, and customer segmentation (RFM) rooted in my degree from Ain Shams University Faculty of Science. */
            </p>
          </RevealWrapper>

          {/* Soft Skills & Languages Badges */}
          <RevealWrapper delay={200} className="mt-8 pt-6 border-t border-slate-800/80 space-y-4">
            <div>
              <div className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                <Cpu size={14} className="text-amber-400" />
                <span>Professional Soft Skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 text-xs border border-slate-700/60 flex items-center gap-1"
                  >
                    <CheckCircle2 size={11} className="text-emerald-400" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                <Globe size={14} className="text-sky-400" />
                <span>Languages</span>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {personalInfo.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-3 py-1 rounded bg-slate-900 border border-slate-700 text-slate-200"
                  >
                    <span className="text-amber-400 font-bold">{lang.name}:</span> {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>

        {/* Right Column: 01 · toolbox (Skills Terminal) */}
        <div className="lg:col-span-7 flex flex-col w-full min-w-0">
          <RevealWrapper>
            <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3 font-semibold text-[#F59E0B]">
              01 · toolbox
            </div>
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-50"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Skills Terminal
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={150}>
            <TypewriterTerminal onSoundTrigger={onSoundTrigger} />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
