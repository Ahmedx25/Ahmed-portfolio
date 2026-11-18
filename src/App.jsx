import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import BackgroundFX from './components/BackgroundFX';
import Navbar from './components/Navbar';
import FloatingDock from './components/FloatingDock';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { playKeySound, playToggleSound, playSuccessChime } from './utils/audio';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [canvasEnabled, setCanvasEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSound = () => {
    if (soundEnabled) {
      playKeySound();
    }
  };

  const handleToggleSound = (newVal) => {
    if (soundEnabled) {
      playToggleSound(newVal);
    }
  };

  return (
    <div
      style={{ background: '#0A1628' }}
      className="min-h-screen relative overflow-x-hidden text-slate-100"
    >
      {/* 1. Preloader Screen on Initial Load */}
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}

      {/* 2. Interactive Mouse Cursor Spotlight Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.06), transparent 80%)`,
        }}
      />

      {/* 3. Ambient Background Gradient & Glow Blobs */}
      <div className="bg-anim pointer-events-none" />
      <div
        className="blob pointer-events-none opacity-20"
        style={{
          top: '8%',
          left: '12%',
          width: '440px',
          height: '440px',
          background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
        }}
      />
      <div
        className="blob pointer-events-none opacity-15"
        style={{
          top: '45%',
          right: '8%',
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)',
          animationDelay: '-6s',
        }}
      />
      <div
        className="blob pointer-events-none opacity-15"
        style={{
          bottom: '12%',
          left: '20%',
          width: '460px',
          height: '460px',
          background: 'radial-gradient(circle, #10B981 0%, transparent 70%)',
          animationDelay: '-12s',
        }}
      />

      {/* 4. Interactive Data Query Canvas (BG FX) */}
      {canvasEnabled && <BackgroundFX />}

      {/* 5. Top Navigation Bar */}
      <Navbar
        canvasEnabled={canvasEnabled}
        setCanvasEnabled={(val) => {
          handleToggleSound(val);
          setCanvasEnabled(val);
        }}
        onSoundTrigger={handleSound}
      />

      {/* 6. Floating Side Action Dock */}
      <FloatingDock
        soundEnabled={soundEnabled}
        setSoundEnabled={(val) => {
          handleToggleSound(val);
          setSoundEnabled(val);
        }}
        onSoundTrigger={handleSound}
      />

      {/* 7. Main Portfolio Content Sections */}
      <main className="relative z-10">
        <Hero entered={loaded} onSoundTrigger={handleSound} />
        <SkillsSection onSoundTrigger={handleSound} />
        <ServicesSection onSoundTrigger={handleSound} />
        <ExperienceSection onSoundTrigger={handleSound} />
        <ProjectsSection onSoundTrigger={handleSound} />
        <EducationSection onSoundTrigger={handleSound} />
        <ContactSection onSoundTrigger={handleSound} />
      </main>

      {/* 8. Footer */}
      <Footer onSoundTrigger={handleSound} />

      {/* 9. Top-most Minecraft Diamond Sword Custom Cursor */}
      <CustomCursor />
    </div>
  );
}
