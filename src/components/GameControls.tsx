/**
 * @file GameControls.tsx
 * @description Responsive game controls for Start, Pause, and Resume.
 */

import { motion } from "framer-motion";
import { useState } from "react";

const GameControls = () => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="absolute bottom-6 w-full flex justify-center gap-4 px-4">
      {/* Start Game Button */}
      <AnimatedButton text="Start" onClick={() => console.log("Game Started")} />

      {/* Pause/Resume Button */}
      <AnimatedButton
        text={paused ? "Resume" : "Pause"}
        onClick={() => setPaused(!paused)}
      />
    </div>
  );
};

/**
 * @function AnimatedButton
 * @description Reusable animated button with responsive styles.
 * @param {string} text - Button text.
 * @param {() => void} onClick - Click event handler.
 */
const AnimatedButton = ({ text, onClick }: { text: string; onClick: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="px-4 md:px-6 py-2 md:py-3 bg-blue-500 text-white text-sm md:text-lg font-bold rounded-lg shadow-lg"
    onClick={onClick}
  >
    {text}
  </motion.button>
);

export default GameControls;
