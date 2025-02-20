/**
 * @file ParallaxBackground.tsx
 * @description Multi-layered parallax scrolling background with randomized asteroids.
 */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @function ParallaxBackground
 * @description Renders a parallax scrolling space background with depth effects.
 */
const ParallaxBackground = () => {
  const [asteroids, setAsteroids] = useState<{ x: number; y: number; size: number; speed: number }[]>([]);

  // Generate random asteroids
  useEffect(() => {
    const generateAsteroids = () => {
      const newAsteroids = Array.from({ length: 10 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 50 + 20, // Size between 20px and 70px
        speed: Math.random() * 5 + 2, // Speed between 2 and 7
      }));
      setAsteroids(newAsteroids);
    };

    generateAsteroids();
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Layer 1: Distant Nebula */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ 
            backgroundImage: "url('/images/space.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Layer 2: Stars (Slow) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/stars.jpg')" }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Layer 3: Floating Asteroids (Faster) */}
      {asteroids.map((asteroid, index) => (
        <motion.img
          key={index}
          src="/images/meteor.png"
          className="absolute"
          style={{
            left: asteroid.x,
            top: asteroid.y,
            width: asteroid.size,
            height: asteroid.size,
          }}
          animate={{ y: [asteroid.y, window.innerHeight + 100] }}
          transition={{
            duration: asteroid.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
