/**
 * @file GameControls.tsx
 * @description UI for Start, Pause, and Resume buttons with animations.
 */

import { motion } from "framer-motion";
import { useState } from "react";

const GameControls = () => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
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
 * @description Creates a reusable animated button.
 * @param {string} text - Button text.
 * @param {() => void} onClick - Click event handler.
 */
const AnimatedButton = ({ text, onClick }: { text: string; onClick: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-lg"
    onClick={onClick}
  >
    {text}
  </motion.button>
);

export default GameControls;
