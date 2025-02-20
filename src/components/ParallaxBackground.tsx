/**
 * @file ParallaxBackground.tsx
 * @description Multi-layered parallax nebula background for the landing page.
 */
import React from "react";
import { motion } from "framer-motion";
import nebula1 from "../assets/images/nebula1.jpg";
import nebula2 from "../assets/images/nebula2.jpg";
import stars from "../assets/images/stars.jpg";

/**
 * @function ParallaxBackground
 * @description Creates a multi-layered animated parallax effect for the background.
 * @returns {JSX.Element} The animated background.
 */
const ParallaxBackground : React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Background Nebula Layer 1 */}
      <motion.img
        src={nebula1}
        alt="Nebula Layer 1"
        className="absolute w-full h-full object-cover opacity-30"
        initial={{ y: 0 }}
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Background Nebula Layer 2 */}
      <motion.img
        src={nebula2}
        alt="Nebula Layer 2"
        className="absolute w-full h-full object-cover opacity-40"
        initial={{ y: 0 }}
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Stars Layer */}
      <motion.img
        src={stars}
        alt="Stars"
        className="absolute w-full h-full object-cover opacity-70"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      />
    </div>
  );
};

export default ParallaxBackground;
