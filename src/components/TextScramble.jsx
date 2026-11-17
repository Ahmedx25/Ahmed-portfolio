import React, { useState, useEffect, useRef, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#%&*<>[]{}';

export default function TextScramble({
  text,
  className = '',
  enabled = true,
  speed = 45,
  revealDelay = 250,
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);

  const startScramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = text.length;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((letter, idx) => {
            if (letter === ' ') return ' ';
            if (idx < iteration) {
              return text[idx];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, speed);
  }, [text, speed, isScrambling]);

  useEffect(() => {
    if (enabled) {
      const timer = setTimeout(startScramble, revealDelay);
      return () => {
        clearTimeout(timer);
        clearInterval(intervalRef.current);
      };
    }
  }, [enabled, revealDelay, startScramble]);

  return (
    <span
      className={`inline-block select-none cursor-pointer ${className}`}
      onMouseEnter={startScramble}
      title="Hover to decrypt"
    >
      {displayText}
    </span>
  );
}
