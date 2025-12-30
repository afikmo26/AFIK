"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
  velocity: number;
  size: number;
  color: string;
  duration: number;
}

interface Flash {
  id: number;
  x: number;
  y: number;
}

export const SparkEffect = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [flashes, setFlashes] = useState<Flash[]>([]);

  const createSparks = useCallback((x: number, y: number) => {
    const newSparks: Spark[] = [];
    const sparkCount = 25; // Increased spark count for more drama
    
    // Add a flash effect
    const flashId = Date.now();
    setFlashes(prev => [...prev, { id: flashId, x, y }]);
    setTimeout(() => {
      setFlashes(prev => prev.filter(f => f.id !== flashId));
    }, 150);

    for (let i = 0; i < sparkCount; i++) {
      const colors = ["#ffffff", "#fffbeb", "#fef3c7", "#fde68a", "#fbbf24", "#f59e0b", "#d97706"];
      newSparks.push({
        id: Math.random() + i,
        x,
        y,
        angle: (Math.random() * Math.PI * 2),
        velocity: Math.random() * 15 + 5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 0.5 + 0.4,
      });
    }
    
    setSparks((prev) => [...prev, ...newSparks].slice(-150));
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createSparks(e.clientX, e.clientY);
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [createSparks]);

  useEffect(() => {
    if (sparks.length > 0) {
      const timer = setTimeout(() => {
        setSparks((prev) => prev.slice(25));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [sparks]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {flashes.map((flash) => (
          <motion.div
            key={flash.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 1] }}
            exit={{ opacity: 0 }}
            className="absolute rounded-full bg-white blur-xl"
            style={{
              left: flash.x - 20,
              top: flash.y - 20,
              width: 40,
              height: 40,
              boxShadow: "0 0 40px 20px white",
            }}
          />
        ))}
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{ 
              x: spark.x, 
              y: spark.y, 
              opacity: 1, 
              scale: 1 
            }}
            animate={{ 
              x: spark.x + Math.cos(spark.angle) * spark.velocity * 30,
              y: spark.y + Math.sin(spark.angle) * spark.velocity * 30 + 100, // Stronger gravity
              opacity: 0,
              scale: 0
            }}
            transition={{ duration: spark.duration, ease: "easeOut" }}
            className="absolute rounded-full"
            style={{ 
              width: spark.size, 
              height: spark.size,
              backgroundColor: spark.color,
              boxShadow: `0 0 ${spark.size * 2}px ${spark.color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
