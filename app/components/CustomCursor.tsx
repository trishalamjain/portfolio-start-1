// app/components/CustomCursor.tsx
"use client";

import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const newTrail = [...trail, position];
    if (newTrail.length > 10) {
      newTrail.shift();
    }
    setTrail(newTrail);

    const trailTimeout = setTimeout(() => {
      setTrail([]);
    }, 500); // 0.5 second trail

    return () => clearTimeout(trailTimeout);
  }, [position]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '30px',
          height: '30px',
          backgroundColor: 'hotpink',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      {trail.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'fixed',
            top: p.y,
            left: p.x,
            width: `${15 - i}px`,
            height: `${15 - i}px`,
            backgroundColor: 'hotpink',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9998,
            opacity: `${1 - i / 10}`,
            transition: 'opacity 0.5s',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;