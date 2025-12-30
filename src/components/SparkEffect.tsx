"use client";

import React, { useEffect, useState } from 'react';

export function SparkEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="spark-container pointer-events-none fixed inset-0 z-50">
      <div 
        className="absolute h-4 w-4 rounded-full bg-primary/20 blur-xl transition-all duration-300 ease-out"
        style={{ left: mousePos.x, top: mousePos.y, transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
}
