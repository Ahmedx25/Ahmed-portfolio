import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  const swordRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const lastParticleTime = useRef(0);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    setMounted(true);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Instant 1:1 hardware-accelerated positioning (hotspot is 0, 0 at sword tip)
      if (swordRef.current) {
        swordRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Enchanted sparkle trail throttle (every 90ms when moving)
      const now = performance.now();
      if (now - lastParticleTime.current > 85) {
        lastParticleTime.current = now;
        const newParticle = {
          id: Math.random(),
          x: e.clientX + 6 + (Math.random() * 8 - 4),
          y: e.clientY + 6 + (Math.random() * 8 - 4),
          size: Math.random() > 0.5 ? 4 : 3,
          color: Math.random() > 0.35 ? '#38BDF8' : '#F59E0B',
        };

        setParticles((prev) => [...prev.slice(-10), newParticle]);

        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, 500);
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

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [visible]);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-200 select-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Enchanted Diamond Sparkle Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="fixed pointer-events-none rounded-full animate-ping"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            transform: 'translate(-50%, -50%)',
            animationDuration: '500ms',
          }}
        />
      ))}

      {/* Minecraft Diamond Sword Cursor Element */}
      <div
        ref={swordRef}
        style={{ willChange: 'transform' }}
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
      >
        <div
          className={`origin-top-left transition-all duration-150 ease-out select-none ${
            clicked
              ? '-rotate-45 translate-x-1 translate-y-1 scale-95'
              : hovered
              ? '-rotate-12 scale-110'
              : 'rotate-0 scale-100'
          }`}
          style={{
            filter: clicked
              ? 'drop-shadow(0 0 10px #10B981) drop-shadow(0 0 4px #55FFFF)'
              : hovered
              ? 'drop-shadow(0 0 9px #F59E0B) drop-shadow(0 0 4px #38BDF8)'
              : 'drop-shadow(0 0 6px rgba(56, 189, 248, 0.75))',
          }}
        >
          {/* Pixel-perfect Minecraft Diamond Sword SVG */}
          <img
            src="/assets/diamond_sword_cursor.svg"
            alt="Diamond Sword Cursor"
            width={34}
            height={34}
            className="select-none pointer-events-none [image-rendering:pixelated]"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
