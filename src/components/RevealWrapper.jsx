import React, { useEffect, useRef } from 'react';

export default function RevealWrapper({ children, delay = 0, className = "" }) {
  const domRef = useRef(null);

  useEffect(() => {
    const element = domRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('reveal-in');
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
