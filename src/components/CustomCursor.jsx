import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    setMounted(true);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Instantly position the inner precision dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    // Track hovered interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, .proj-card'
      );
      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Smooth RAF loop for the outer ring trailing lag
    const loop = () => {
      // Lerp ring towards mouse
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.22;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [visible]);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 1. Precision Center Dot */}
      <div
        ref={dotRef}
        style={{ willChange: 'transform' }}
        className="fixed top-0 left-0 -ml-1 -mt-1 pointer-events-none z-50"
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            hovered
              ? 'w-2.5 h-2.5 -ml-0.5 -mt-0.5 bg-amber-400 shadow-[0_0_12px_#F59E0B]'
              : 'w-2 h-2 bg-sky-400 shadow-[0_0_10px_#38BDF8]'
          } ${clicked ? 'scale-75' : 'scale-100'}`}
        />
      </div>

      {/* 2. Trailing Outer Cyber Ring */}
      <div
        ref={ringRef}
        style={{ willChange: 'transform' }}
        className="fixed top-0 left-0 pointer-events-none z-50"
      >
        <div
          className={`-ml-4 -mt-4 rounded-full border transition-all duration-200 ease-out flex items-center justify-center ${
            hovered
              ? 'w-12 h-12 -ml-6 -mt-6 border-amber-400/80 bg-amber-400/10 shadow-[0_0_20px_rgba(245,158,11,0.25)] scale-110'
              : 'w-8 h-8 border-sky-400/60 bg-sky-400/5 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
          } ${clicked ? 'scale-90 border-emerald-400' : ''}`}
        >
          {/* Subtle Cyber Target Crosshair ticks when hovering */}
          {hovered && (
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping opacity-75" />
          )}
        </div>
      </div>
    </div>
  );
}
