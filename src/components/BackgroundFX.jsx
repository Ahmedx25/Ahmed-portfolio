import React, { useEffect, useRef } from 'react';

export default function BackgroundFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const terms = [
      'SELECT *', 'FROM DATA', 'JOIN TABLES', 'WHERE ID=1', 'GROUP BY',
      'DAX MEASURE', 'SUMX()', 'CALCULATE()', 'EVALUATE', 'POWER BI',
      'PYTHON', 'PANDAS.DF', 'ETL_PIPELINE', 'SSIS_FLOW', 'PIVOT_TABLE',
      '01010110', 'SQL_QUERY', 'METRICS', 'DATAFRAME', 'STAR_SCHEMA',
      'TRANSFORM', 'RFM_MODEL', 'STATISTICS', 'CORRELATION', 'AIN_SHAMS'
    ];

    const colCount = Math.floor(width / 34);
    const columns = Array(colCount).fill(0).map((_, i) => ({
      x: i * 34 + (Math.random() * 12 - 6),
      y: Math.random() * height,
      speed: 0.2 + Math.random() * 0.35,
      word: terms[Math.floor(Math.random() * terms.length)],
      opacity: 0.18 + Math.random() * 0.32,
      isAmber: Math.random() > 0.82
    }));

    const particleCount = Math.min(Math.floor(width / 20), 70);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: 1.8 + Math.random() * 2.2,
      color: Math.random() > 0.35 ? '#38BDF8' : '#F59E0B'
    }));

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render flowing code terms
      ctx.font = '600 12px "JetBrains Mono", monospace';
      columns.forEach((col) => {
        ctx.fillStyle = col.isAmber
          ? `rgba(245, 158, 11, ${col.opacity})`
          : `rgba(56, 189, 248, ${col.opacity})`;
        ctx.fillText(col.word, col.x, col.y);

        col.y += col.speed;
        if (col.y > height + 30) {
          col.y = -25;
          col.x = Math.random() * width;
          col.word = terms[Math.floor(Math.random() * terms.length)];
          col.opacity = 0.18 + Math.random() * 0.35;
        }
      });

      // Render interactive particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(245, 158, 11, ${0.35 * (1 - mdist / 140)})`;
          ctx.lineWidth = 1.2;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-45"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
